#!/usr/bin/env bash

# yay
# Yet another Yogurt - An AUR Helper written in Go
# <https://github.com/Jguer/yay>

if ! builtin type -p 'yay' >/dev/null 2>&1; then
    echo 'Install yay.'
    sudo pacman -S --needed base base-devel wget
    tmpdir="$(command mktemp -d)"
    command cd "${tmpdir}" || return 1
    dl_url="$(
        command curl -sfLS 'https://api.github.com/repos/Jguer/yay/releases/latest' |
        command grep 'browser_download_url' |
        command cut -d '"' -f 4
    )"
    command wget "${dl_url}"
    command tar xzvf yay_*_x86_64.tar.gz
    command cd yay_*_x86_64 || return 1
    ./yay -Sy yay-bin
    rm -rf "${tmpdir}"
fi