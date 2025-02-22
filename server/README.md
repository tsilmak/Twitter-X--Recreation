# Twitter-X-Recreation-DB

## Setup Details

- **Database**: PostgreSQL
- **Username**: user
- **Password**: password
- **Database Name**: Twitter-X-Recreation-DB
- **Port**: 5432

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed
- Docker running on your system
- SETUP DATABASE USING DOCKER-COMPOSE.YML

## Or paste this into cmd

docker run -d --name twitter-x-db -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=Twitter-X-Recreation-DB -p 5432:5432 postgres:latest
