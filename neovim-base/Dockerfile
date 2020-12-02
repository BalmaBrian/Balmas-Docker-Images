# Building the base image from ubuntu
FROM ubuntu:18.04

# Messing with some enviorment variables
ENV TERM screen-256color
ENV DEBIAN_FRONTEND noninteractive

# update and install
RUN apt-get update && apt-get install -y \
    htop \
    tmux \
    bash \
    curl \
    wget \
    git \
    software-properties-common \
    python-dev \
    python-pip \
    python3-dev \
    python3-pip \
    ctags \
    unzip \
    libssl-dev \
    libffi-dev \
    locales \
    shellcheck

# more enciorment changes
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# installing neovim
RUN add-apt-repository ppa:neovim-ppa/stable
RUN apt-get update && apt-get install -y \
      neovim
