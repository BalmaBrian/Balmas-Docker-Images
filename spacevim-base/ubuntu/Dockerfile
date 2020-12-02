# This is version 1.0 of my base spacevim coding enviorment
FROM ubuntu:latest

# installing dependencies
RUN apt-get -y update 
RUN apt-get install -y curl git vim tmux exuberant-ctags build-essential

# making a user
RUN useradd --create-home --shell /bin/bash spacevim

# Setting the enviorment
USER spacevim
WORKDIR /home/spacevim

# installing and setting up spacevim
RUN curl -sLf https://spacevim.org/install.sh | bash
COPY ./src/init.toml /home/spacevim/.SpaceVim.d/