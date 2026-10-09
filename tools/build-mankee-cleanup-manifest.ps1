$ErrorActionPreference = 'Stop'

$workspace = Split-Path -Parent $PSScriptRoot
$buildRoot = Join-Path $workspace 'scrollcraft/builds/mankee-hero-r1'
$assetRoot = Join-Path $workspace 'assets/generated/mankee-hero'
$csvPath = Join-Path $buildRoot 'CLEANUP-MANIFEST-2026-10-09.csv'
$summaryPath = Join-Path $buildRoot 'CLEANUP-PLAN-2026-10-09.md'

$keepExact = @(
  'assets/generated/mankee-hero/hero-motion-temp-natural-no-zoom-scrub.mp4',
  'assets/generated/mankee-hero/hero-motion-temp-natural-poster.webp',
  'assets/generated/mankee-hero/hero-motion-clip-a-pork-tray-v31-review.mp4',
  'assets/generated/mankee-hero/hero-motion-clip-a-to-b-v32-review.mp4',
  'assets/generated/mankee-hero/hero-motion-v2-squid-approved.mp4',
  'scrollcraft/builds/mankee-hero-r1/out/hero-motion-v2-squid-approved.mp4',
  'scrollcraft/builds/mankee-hero-r1/out/hero-motion-v4-oil-noodles-wing-final.mp4',
  'scrollcraft/builds/mankee-hero-r1/out/hero-motion-v4-oil-noodles-wing-source.mp4',
  'scrollcraft/builds/mankee-hero-r1/out/hero-motion-v7-fish-maw-release-source.mp4',
  'scrollcraft/builds/mankee-hero-r1/out/hero-motion-v21-pork-squid-tray-continuous-source.mp4',
  'scrollcraft/builds/mankee-hero-r1/out/hero-motion-v28-natural-scale-no-zoom-review.mp4',
  'scrollcraft/builds/mankee-hero-r1/out/hero-motion-v31-clip-a-pork-tray-source.mp4',
  'scrollcraft/builds/mankee-hero-r1/out/hero-motion-v32-clip-a-to-b-review.mp4',
  'scrollcraft/builds/mankee-hero-r1/lab/f5-clean-regeneration-v1/f5-clean-foundation-approved-v17.png',
  'scrollcraft/builds/mankee-hero-r1/lab/f5-tray-table-composition-plan-v3/TRAY-TABLE-COMPOSITION-PLAN.md',
  'scrollcraft/builds/mankee-hero-r1/lab/fish-maw-controlled-pickup-v1.png',
  'scrollcraft/builds/mankee-hero-r1/lab/fish-maw-controlled-placement-v1.png',
  'scrollcraft/builds/mankee-hero-r1/lab/fish-maw-release-endpoint-v1.png',
  'scrollcraft/builds/mankee-hero-r1/lab/fish-maw-release-start-242.png',
  'scrollcraft/builds/mankee-hero-r1/lab/pork-foundation-squid-tray-v2-original.png',
  'scrollcraft/builds/mankee-hero-r1/lab/pork-foundation-squid-tray-v2.png',
  'scrollcraft/builds/mankee-hero-r1/lab/pork-squid-tray-endpoint-v2-original.png',
  'scrollcraft/builds/mankee-hero-r1/lab/pork-squid-tray-endpoint-v2.png'
)

$keepPrefixes = @(
  'scrollcraft/builds/mankee-hero-r1/clean',
  'scrollcraft/builds/mankee-hero-r1/BRIEF.md',
  'scrollcraft/builds/mankee-hero-r1/HERO-VIDEO-MASTER-PLAN.md',
  'scrollcraft/builds/mankee-hero-r1/ROUND-',
  'scrollcraft/builds/mankee-hero-r1/SHOT_PLAN.md',
  'scrollcraft/builds/mankee-hero-r1/lab/clean-foundation-proofs-v1/',
  'scrollcraft/builds/mankee-hero-r1/lab/chicken-wing-texture-transfer-v1/',
  'scrollcraft/builds/mankee-hero-r1/lab/pork-knuckle-surface-rerender-v1/',
  'scrollcraft/builds/mankee-hero-r1/lab/f5-bowl-contents-local-edit-v1/',
  'scrollcraft/builds/mankee-hero-r1/lab/f5-bowl-pork-texture-local-edit-v1/',
  'scrollcraft/builds/mankee-hero-r1/lab/f5-spring-onion-local-edit-v1/',
  'scrollcraft/builds/mankee-hero-r1/lab/f5-tray-counter-metal-only-v1/',
  'scrollcraft/builds/mankee-hero-r1/lab/f5-f6-service-snap-preflight-v1/',
  'scrollcraft/builds/mankee-hero-r1/lab/foundations-f0-f7-canonical-v2-realistic/',
  'scrollcraft/builds/mankee-hero-r1/lab/preflight-clip-a-v2/',
  'scrollcraft/builds/mankee-hero-r1/lab/quality-gates-v1/'
)

$deletePrefixes = @(
  'scrollcraft/builds/mankee-hero-r1/lab/option1-reframe/opening-output/',
  'scrollcraft/builds/mankee-hero-r1/lab/option1-reframe/opening-source/',
  'scrollcraft/builds/mankee-hero-r1/lab/option1-reframe/pork-output/',
  'scrollcraft/builds/mankee-hero-r1/lab/option1-reframe/pork-source/',
  'scrollcraft/builds/mankee-hero-r1/lab/tray-track-v2/composited/',
  'scrollcraft/builds/mankee-hero-r1/lab/tray-track-v2/source/'
)

$deleteNamePatterns = @(
  '^continuity-\d+\.(png|jpg)$',
  '^pork-full-test-',
  '^pork-patch-test-',
  '^pork-v19-(\d|exact|pickup-window)',
  '^v2-at-',
  '^v9-(carry-head|first-)',
  '^v12-(first|last|pickup-tail)',
  '^v14-(exact|frame|transition)',
  '^v15-(pickup|release|wing)',
  '^v16-(pickup|wing)',
  '^v17-(check|pickup|scene)',
  '^v18-(audit|contact|exact|hidden|slower)',
  '^v21-contact-',
  '^v25-opening-contact',
  '^v26-opening-contact',
  '^v28-seam-contact'
)

function Get-RelativePath([string]$fullPath) {
  return ([System.IO.Path]::GetRelativePath($workspace, $fullPath) -replace '\\','/')
}

function Get-Decision([string]$relativePath, [string]$name) {
  if ($keepExact -contains $relativePath) {
    return @('KEEP', 'CURRENT_OR_APPROVED', 'Explicit current, approved, live, or latest-source asset.')
  }
  foreach ($prefix in $keepPrefixes) {
    if ($relativePath.StartsWith($prefix, [System.StringComparison]::OrdinalIgnoreCase)) {
      return @('KEEP', 'AUTHORITATIVE_SUPPORT', 'Referenced by the handoff, current board, approved local edit, or quality gate.')
    }
  }
  foreach ($prefix in $deletePrefixes) {
    if ($relativePath.StartsWith($prefix, [System.StringComparison]::OrdinalIgnoreCase)) {
      return @('DELETE-CANDIDATE', 'REGENERABLE_FRAME_CACHE', 'Extracted or composited frame cache; retain until approval, then delete if final videos open correctly.')
    }
  }
  foreach ($pattern in $deleteNamePatterns) {
    if ($name -match $pattern) {
      return @('DELETE-CANDIDATE', 'REGENERABLE_DIAGNOSTIC', 'Exact-frame diagnostic or contact artifact that can be regenerated from preserved media.')
    }
  }
  if ($relativePath.StartsWith('assets/generated/mankee-hero/', [System.StringComparison]::OrdinalIgnoreCase)) {
    return @('ARCHIVE', 'SUPERSEDED_WEBSITE_PREVIEW', 'Not referenced by the live Concept B page and not in the protected current set.')
  }
  if ($relativePath.StartsWith('scrollcraft/builds/mankee-hero-r1/out/', [System.StringComparison]::OrdinalIgnoreCase)) {
    return @('ARCHIVE', 'SUPERSEDED_VIDEO_OUTPUT', 'Older source, scrub, or review output retained for historical recovery.')
  }
  if ($relativePath.StartsWith('scrollcraft/builds/mankee-hero-r1/lab/', [System.StringComparison]::OrdinalIgnoreCase)) {
    return @('ARCHIVE', 'PAST_REVIEW_OR_EXPERIMENT', 'Past proof, rejected candidate, superseded foundation, diagnostic, prompt, or experiment.')
  }
  return @('KEEP', 'PROJECT_DOCUMENT', 'Top-level project documentation or manifest.')
}

$files = @()
$files += Get-ChildItem -LiteralPath $buildRoot -Recurse -File | Where-Object { $_.FullName -ne $csvPath -and $_.FullName -ne $summaryPath }
$files += Get-ChildItem -LiteralPath $assetRoot -Recurse -File

$rows = foreach ($file in $files) {
  $relative = Get-RelativePath $file.FullName
  $decision = Get-Decision $relative $file.Name
  [pscustomobject]@{
    Action = $decision[0]
    Category = $decision[1]
    RelativePath = $relative
    SizeBytes = $file.Length
    SizeMB = [math]::Round($file.Length / 1MB, 3)
    Reason = $decision[2]
  }
}

$rows = $rows | Sort-Object Action, RelativePath
$rows | Export-Csv -LiteralPath $csvPath -NoTypeInformation -Encoding utf8

$summary = $rows | Group-Object Action | Sort-Object Name | ForEach-Object {
  [pscustomobject]@{
    Action = $_.Name
    Files = $_.Count
    SizeGB = [math]::Round((($_.Group | Measure-Object SizeBytes -Sum).Sum / 1GB), 3)
  }
}

$keepCurrent = $rows | Where-Object { $_.Action -eq 'KEEP' -and $_.Category -eq 'CURRENT_OR_APPROVED' }
$liveFiles = $rows | Where-Object {
  $_.RelativePath -eq 'assets/generated/mankee-hero/hero-motion-temp-natural-no-zoom-scrub.mp4' -or
  $_.RelativePath -eq 'assets/generated/mankee-hero/hero-motion-temp-natural-poster.webp'
}

$md = @()
$md += '# Mankee Hero Cleanup Plan — 2026-10-09'
$md += ''
$md += 'Status: review manifest only. No file has been moved or deleted.'
$md += ''
$md += '## Summary'
$md += ''
$md += '| Action | Files | Size (GB) |'
$md += '|---|---:|---:|'
foreach ($item in $summary) { $md += "| $($item.Action) | $($item.Files) | $($item.SizeGB) |" }
$md += ''
$md += '## Meaning of each action'
$md += ''
$md += '- **KEEP**: remain in place. Includes the live prototype media, approved/current foundations, latest sources, handoff-referenced proofs, and quality gates.'
$md += '- **ARCHIVE**: move non-destructively into a dated archive while preserving the relative directory structure.'
$md += '- **DELETE-CANDIDATE**: extracted frame caches and reproducible diagnostics only. Delete only after the archive pass, link verification, and explicit user approval.'
$md += ''
$md += '## Live Concept B dependencies — never move'
$md += ''
foreach ($row in $liveFiles) { $md += ('- `{0}`' -f $row.RelativePath) }
$md += ''
$md += '## Explicit current or approved assets'
$md += ''
foreach ($row in $keepCurrent) { $md += ('- `{0}`' -f $row.RelativePath) }
$md += ''
$md += '## Exact file-level manifest'
$md += ''
$md += 'See `CLEANUP-MANIFEST-2026-10-09.csv`. It contains one row for every file in the build, lab, output, and generated-hero asset folders, including the proposed action, category, size, and reason.'
$md += ''
$md += '## Proposed execution order after approval'
$md += ''
$md += '1. Copy all ARCHIVE rows into a dated archive while preserving paths.'
$md += '2. Verify Concept B, current boards, and protected videos still open.'
$md += '3. Remove the archived originals only after verification.'
$md += '4. Present DELETE-CANDIDATE totals again for a separate explicit deletion approval.'
$md += '5. Never delete the archive automatically.'

Set-Content -LiteralPath $summaryPath -Value ($md -join [Environment]::NewLine) -Encoding utf8

$summary | Format-Table -AutoSize
Write-Output "CSV: $csvPath"
Write-Output "PLAN: $summaryPath"
