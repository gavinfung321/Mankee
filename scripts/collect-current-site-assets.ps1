param(
    [string]$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
)

$ErrorActionPreference = 'Stop'

$assetRoot = Join-Path $ProjectRoot 'assets\sourced\current-site'
$originalRoot = Join-Path $assetRoot 'originals'
New-Item -ItemType Directory -Path $originalRoot -Force | Out-Null

$pages = [ordered]@{
    home = 'https://www.mankeecartnoodles.com/'
    about = 'https://www.mankeecartnoodles.com/about'
    gallery = 'https://www.mankeecartnoodles.com/gallery'
    contact = 'https://www.mankeecartnoodles.com/contact'
}

$found = @{}

foreach ($entry in $pages.GetEnumerator()) {
    $response = Invoke-WebRequest -Uri $entry.Value -UseBasicParsing
    $matches = [regex]::Matches(
        $response.Content,
        'https://images\.squarespace-cdn\.com/[^\"''<> )]+'
    )

    foreach ($match in $matches) {
        $url = [System.Net.WebUtility]::HtmlDecode($match.Value)
        $url = $url.Split('"')[0].TrimEnd(',')

        if ($url -match '\?' -or $url -match 'favicon\.ico') {
            continue
        }

        if (-not $found.ContainsKey($url)) {
            $found[$url] = New-Object System.Collections.Generic.List[string]
        }

        if (-not $found[$url].Contains($entry.Key)) {
            $found[$url].Add($entry.Key)
        }
    }
}

$rows = New-Object System.Collections.Generic.List[object]
$index = 0

foreach ($url in ($found.Keys | Sort-Object)) {
    $index++
    $uri = [Uri]$url
    $extension = [IO.Path]::GetExtension($uri.AbsolutePath).ToLowerInvariant()

    if ([string]::IsNullOrWhiteSpace($extension)) {
        $extension = '.bin'
    }

    $id = 'site-{0:d3}' -f $index
    $filename = $id + $extension
    $target = Join-Path $originalRoot $filename

    try {
        Invoke-WebRequest -Uri $url -OutFile $target -UseBasicParsing
        $item = Get-Item -LiteralPath $target
        $hash = (Get-FileHash -LiteralPath $target -Algorithm SHA256).Hash.ToLowerInvariant()
        $width = ''
        $height = ''

        try {
            Add-Type -AssemblyName System.Drawing -ErrorAction SilentlyContinue
            $image = [System.Drawing.Image]::FromFile($target)
            $width = $image.Width
            $height = $image.Height
            $image.Dispose()
        }
        catch {
            # Keep the download even if this environment cannot inspect dimensions.
        }

        $rows.Add([pscustomobject]@{
            asset_id = $id
            source_pages = $found[$url] -join '|'
            source_url = $url
            local_file = 'assets/sourced/current-site/originals/' + $filename
            bytes = $item.Length
            width = $width
            height = $height
            sha256 = $hash
            review_status = 'quarantine'
            rights_status = 'mankee-authorized; depicted-person/third-party-mark review pending'
        })
    }
    catch {
        $rows.Add([pscustomobject]@{
            asset_id = $id
            source_pages = $found[$url] -join '|'
            source_url = $url
            local_file = ''
            bytes = ''
            width = ''
            height = ''
            sha256 = ''
            review_status = 'download-failed'
            rights_status = 'review pending'
        })
    }
}

$inventoryPath = Join-Path $assetRoot 'inventory.csv'
$rows | Export-Csv -LiteralPath $inventoryPath -NoTypeInformation -Encoding UTF8

$duplicateGroups = $rows |
    Where-Object sha256 |
    Group-Object sha256 |
    Where-Object Count -gt 1

$summary = [pscustomobject]@{
    source_pages = $pages.Count
    candidates = $found.Count
    downloaded = ($rows | Where-Object review_status -eq 'quarantine').Count
    failed = ($rows | Where-Object review_status -eq 'download-failed').Count
    duplicate_hash_groups = $duplicateGroups.Count
    inventory = 'assets/sourced/current-site/inventory.csv'
}

$summary | ConvertTo-Json

