THIS_FILE := $(lastword $(MAKEFILE_LIST))

.SILENT:

.PHONY: help
help:
	@sed -ne '/@sed/!s/## //p' $(MAKEFILE_LIST)

d := COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker

dc := $(d) compose
de := $(d) exec -ti

include .env

## ----------------------------------------------------------------------
## Environment:
## ----------------------------------------------------------------------

.PHONY: setup
setup: ## Setup environment
	make stop
	cp -f ./.env.default ./.env
	source .env
	$(dc) up mongo --remove-orphans -d
	$(de) ${COMPOSE_PROJECT_NAME}-mongo-1 mongorestore --uri ${NODE_MONGO_URI} --nsInclude=${MONGO_INITDB_DATABASE}.products /dump/retailix
	make up

.PHONY: up
up: ## Up environment
	$(dc) up --build --remove-orphans -d mongo
	$(dc) up --build --remove-orphans -d app proxy

.PHONY: stop
stop: ## Stop environment
	$(dc) stop

.PHONY: down
down: ## Down environment
	$(dc) down --volumes

.PHONY: logs
logs: ## Logs environment
	$(dc) logs -f
