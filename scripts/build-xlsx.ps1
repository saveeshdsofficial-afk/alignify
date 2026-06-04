$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$csvPath  = Join-Path $repoRoot 'content-review-sheet.csv'
$outPath  = Join-Path $repoRoot 'content-review-sheet.xlsx'
$buildDir = Join-Path $env:TEMP ('alignify-xlsx-' + [guid]::NewGuid().ToString('N'))

if (Test-Path $outPath) { Remove-Item $outPath -Force }
New-Item -ItemType Directory -Force -Path $buildDir | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $buildDir '_rels') | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $buildDir 'xl') | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $buildDir 'xl\_rels') | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $buildDir 'xl\worksheets') | Out-Null

function XmlEsc([string]$s) {
  if ($null -eq $s) { return '' }
  return $s.Replace('&','&amp;').Replace('<','&lt;').Replace('>','&gt;').Replace('"','&quot;')
}

$rows = Import-Csv -Path $csvPath -Encoding UTF8
$cols = @('A','B','C','D','E','F')

$sb = New-Object System.Text.StringBuilder

# Header — bold via style index 1
[void]$sb.AppendLine('<row r="1">')
$headers = @('#','Section','Element','Current Content',"Client's Revised Content",'Notes')
for ($i = 0; $i -lt $headers.Count; $i++) {
  $v = XmlEsc $headers[$i]
  [void]$sb.AppendLine("<c r=""$($cols[$i])1"" t=""inlineStr"" s=""1""><is><t xml:space=""preserve"">$v</t></is></c>")
}
[void]$sb.AppendLine('</row>')

$r = 2
foreach ($entry in $rows) {
  $values = $entry.PSObject.Properties | ForEach-Object { $_.Value }
  [void]$sb.AppendLine("<row r=""$r"">")
  for ($i = 0; $i -lt $values.Count; $i++) {
    $v = XmlEsc ([string]$values[$i])
    # style 2 = wrap-text body
    [void]$sb.AppendLine("<c r=""$($cols[$i])$r"" t=""inlineStr"" s=""2""><is><t xml:space=""preserve"">$v</t></is></c>")
  }
  [void]$sb.AppendLine('</row>')
  $r++
}

$sheetXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
<cols>
<col min="1" max="1" width="5" customWidth="1"/>
<col min="2" max="2" width="20" customWidth="1"/>
<col min="3" max="3" width="30" customWidth="1"/>
<col min="4" max="4" width="80" customWidth="1"/>
<col min="5" max="5" width="80" customWidth="1"/>
<col min="6" max="6" width="42" customWidth="1"/>
</cols>
<sheetData>
$($sb.ToString())
</sheetData>
<autoFilter ref="A1:F$($r-1)"/>
</worksheet>
"@

$workbookXml = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets><sheet name="Content Review" sheetId="1" r:id="rId1"/></sheets>
</workbook>
'@

$workbookRels = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>
'@

$rootRels = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>
'@

$contentTypes = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>
'@

$stylesXml = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<fonts count="2">
<font><sz val="11"/><name val="Calibri"/></font>
<font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>
</fonts>
<fills count="3">
<fill><patternFill patternType="none"/></fill>
<fill><patternFill patternType="gray125"/></fill>
<fill><patternFill patternType="solid"><fgColor rgb="FF21A89F"/><bgColor indexed="64"/></patternFill></fill>
</fills>
<borders count="2">
<border><left/><right/><top/><bottom/><diagonal/></border>
<border><left style="thin"><color rgb="FFD0D7DE"/></left><right style="thin"><color rgb="FFD0D7DE"/></right><top style="thin"><color rgb="FFD0D7DE"/></top><bottom style="thin"><color rgb="FFD0D7DE"/></bottom><diagonal/></border>
</borders>
<cellXfs count="3">
<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
<xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" horizontal="left" wrapText="1"/></xf>
<xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>
</cellXfs>
</styleSheet>
'@

[System.IO.File]::WriteAllText((Join-Path $buildDir '[Content_Types].xml'), $contentTypes, [System.Text.UTF8Encoding]::new($false))
[System.IO.File]::WriteAllText((Join-Path $buildDir '_rels\.rels'), $rootRels, [System.Text.UTF8Encoding]::new($false))
[System.IO.File]::WriteAllText((Join-Path $buildDir 'xl\workbook.xml'), $workbookXml, [System.Text.UTF8Encoding]::new($false))
[System.IO.File]::WriteAllText((Join-Path $buildDir 'xl\_rels\workbook.xml.rels'), $workbookRels, [System.Text.UTF8Encoding]::new($false))
[System.IO.File]::WriteAllText((Join-Path $buildDir 'xl\styles.xml'), $stylesXml, [System.Text.UTF8Encoding]::new($false))
[System.IO.File]::WriteAllText((Join-Path $buildDir 'xl\worksheets\sheet1.xml'), $sheetXml, [System.Text.UTF8Encoding]::new($false))

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

# Build the zip with proper relative entry paths
$zip = [System.IO.Compression.ZipFile]::Open($outPath, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  $files = Get-ChildItem -Path $buildDir -Recurse -File
  foreach ($f in $files) {
    $rel = $f.FullName.Substring($buildDir.Length + 1).Replace('\','/')
    $entry = $zip.CreateEntry($rel, [System.IO.Compression.CompressionLevel]::Optimal)
    $stream = $entry.Open()
    try {
      $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
      $stream.Write($bytes, 0, $bytes.Length)
    } finally {
      $stream.Dispose()
    }
  }
} finally {
  $zip.Dispose()
}

Remove-Item -Recurse -Force $buildDir
Write-Output "Wrote $outPath"
