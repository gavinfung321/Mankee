param(
    [string]$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path,
    [string]$Inventory = 'assets\sourced\current-site\inventory.csv',
    [string]$Output = 'assets\sourced\current-site\review\contact-sheet.jpg'
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$rows = Import-Csv (Join-Path $ProjectRoot $Inventory) |
    Where-Object { $_.local_file -and $_.review_status -ne 'download-failed' }

$columns = 4
$tileWidth = 360
$tileHeight = 260
$labelHeight = 34
$rowsCount = [Math]::Ceiling($rows.Count / $columns)
$canvas = New-Object System.Drawing.Bitmap ($columns * $tileWidth), ($rowsCount * $tileHeight)
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$graphics.Clear([System.Drawing.Color]::FromArgb(24, 24, 24))
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$font = New-Object System.Drawing.Font 'Arial', 11, ([System.Drawing.FontStyle]::Bold)
$smallFont = New-Object System.Drawing.Font 'Arial', 8
$white = [System.Drawing.Brushes]::White
$muted = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(190, 190, 190))

for ($index = 0; $index -lt $rows.Count; $index++) {
    $row = $rows[$index]
    $column = $index % $columns
    $line = [Math]::Floor($index / $columns)
    $x = $column * $tileWidth
    $y = $line * $tileHeight
    $path = Join-Path $ProjectRoot ($row.local_file -replace '/', '\')

    $image = [System.Drawing.Image]::FromFile($path)
    $availableWidth = $tileWidth - 16
    $availableHeight = $tileHeight - $labelHeight - 16
    $scale = [Math]::Min($availableWidth / $image.Width, $availableHeight / $image.Height)
    $drawWidth = [Math]::Max(1, [int]($image.Width * $scale))
    $drawHeight = [Math]::Max(1, [int]($image.Height * $scale))
    $drawX = $x + [int](($tileWidth - $drawWidth) / 2)
    $drawY = $y + 8 + [int](($availableHeight - $drawHeight) / 2)
    $graphics.DrawImage($image, $drawX, $drawY, $drawWidth, $drawHeight)
    $image.Dispose()

    $graphics.DrawString($row.asset_id, $font, $white, $x + 8, $y + $tileHeight - $labelHeight)
    $detail = "$($row.width)x$($row.height) · $($row.source_pages)"
    $graphics.DrawString($detail, $smallFont, $muted, $x + 78, $y + $tileHeight - $labelHeight + 3)
}

$outputPath = Join-Path $ProjectRoot $Output
$outputDirectory = Split-Path $outputPath -Parent
New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
$canvas.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$muted.Dispose()
$font.Dispose()
$smallFont.Dispose()
$graphics.Dispose()
$canvas.Dispose()

Write-Output $outputPath

