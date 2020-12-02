# This is version 1.0 of my base spacevim coding enviorment
FROM centos:latest

# installing dependencies
RUN yum -y update
RUN yum install -y git vim tmux gcc gcc-c++ make ctags
RUN yum clean all

# making a user
RUN useradd --create-home --shell /bin/bash spacevim

# Setting the enviorment
USER spacevim
WORKDIR /home/spacevim

# installing and setting up spacevim
RUN curl -sLf https://spacevim.org/install.sh | bash
COPY ./src/init.toml /home/spacevim/.SpaceVim.d/