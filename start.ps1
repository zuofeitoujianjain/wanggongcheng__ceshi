# 一键启动：Django 后端 + Vue 前台（开发模式）
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

if (-not (Test-Path '.\.venv\Scripts\python.exe')) {
    Write-Host '[错误] 未找到虚拟环境 .venv，请先执行: python -m venv .venv' -ForegroundColor Red
    exit 1
}
if (-not (Test-Path '.\frontend\node_modules')) {
    Write-Host '[错误] 未安装前端依赖，请先在 frontend 目录执行: npm install' -ForegroundColor Red
    exit 1
}

Write-Host '[1/2] 启动 Django 后端  http://127.0.0.1:8000' -ForegroundColor Cyan
$django = Start-Process -FilePath '.\.venv\Scripts\python.exe' `
    -ArgumentList 'manage.py', 'runserver', '127.0.0.1:8000' `
    -WorkingDirectory $root -WindowStyle Hidden -PassThru

Write-Host '[2/2] 启动 Vue 前台  http://127.0.0.1:5173' -ForegroundColor Cyan
$vite = Start-Process -FilePath 'npm.cmd' `
    -ArgumentList 'run', 'dev' `
    -WorkingDirectory (Join-Path $root 'frontend') -WindowStyle Hidden -PassThru

Write-Host ''
Write-Host '两个服务已启动，按 Ctrl+C 可同时停止。' -ForegroundColor Green
Write-Host '前台: http://127.0.0.1:5173' -ForegroundColor Green
Write-Host '后台: http://127.0.0.1:8000/admin' -ForegroundColor Green

try {
    while ($true) {
        Start-Sleep -Seconds 2
        $django.Refresh()
        $vite.Refresh()
        if ($django.HasExited -or $vite.HasExited) {
            Write-Host ''
            if ($django.HasExited) {
                Write-Host '[提示] Django 进程已退出。' -ForegroundColor Yellow
            }
            if ($vite.HasExited) {
                Write-Host '[提示] Vite 进程已退出。' -ForegroundColor Yellow
            }
            break
        }
    }
}
finally {
    Write-Host '正在停止服务...'
    $django.Refresh()
    $vite.Refresh()
    if (-not $django.HasExited) {
        & taskkill /PID $django.Id /T /F | Out-Null
    }
    if (-not $vite.HasExited) {
        & taskkill /PID $vite.Id /T /F | Out-Null
    }
    Write-Host '全部服务已停止。' -ForegroundColor Green
}
