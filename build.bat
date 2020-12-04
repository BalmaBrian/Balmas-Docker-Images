@echo OFF

@REM Building neovim containers
docker build -t neovim-base ./neovim-base/Dockerfile

@REM Building spacevim conatiners
docker build -t spacevim-base:alpine ./alpine/Dockerfile
docker build -t spacevim-base:archlinux ./archlinux/Dockerfile
docker build -t spacevim-base:centos ./centos/Dockerfile
docker build -t spacevim-base:clearlinux ./clearlinux/Dockerfile
docker build -t spacevim-base:fedora ./fedora/Dockerfile
docker build -t spacevim-base:ubuntu ./ubuntu/Dockerfile

@REM Building ytdl-layr containers
docker build -t ytdl-layr-backend ./ytdl-layr-backend/Dockerfile
docker build -t ytdl-layr-frontend ./ytdl-layr-frontend/Dockerfile