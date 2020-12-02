# This is version 1.0 of my base spacevim coding enviorment
FROM alpine:latest

# installing dependencies
RUN apk update
RUN apk upgrade
RUN apk add bash curl git vim tmux gcc g++ make ctags

# making a user
RUN addgroup -S appgroup && adduser -S spacevim -G appgroup

# Setting the enviorment
USER spacevim
WORKDIR /home/spacevim

# installing and setting up spacevim
RUN curl -sLf https://spacevim.org/install.sh | bash
COPY ./src/init.toml /home/spacevim/.SpaceVim.d/