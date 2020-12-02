# This is version 1.0 of my base spacevim coding enviorment
FROM archlinux:latest

# installing dependencies
RUN pacman -Syu --noconfirm

# making a user
RUN useradd --create-home --shell /bin/bash spacevim

# Setting the enviorment
USER spacevim
WORKDIR /home/spacevim

# installing and setting up spacevim
RUN curl -sLf https://spacevim.org/install.sh | bash
COPY ./src/init.toml /home/spacevim/.SpaceVim.d/