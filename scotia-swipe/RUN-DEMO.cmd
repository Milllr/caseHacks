@echo off
cd /d "%~dp0"
echo.
echo  Scotia Swipe - opening browser demo (no Expo Go required)
echo  If the browser does not open, go to: http://localhost:8081
echo.
call npm.cmd run demo
