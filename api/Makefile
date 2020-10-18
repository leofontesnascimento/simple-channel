DB_URL=postgresql://$(DB_USER):$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_DATABASE)

build:
	docker-compose build

build-no-cache:
	docker-compose build --no-cache 

start:
	docker-compose up -d

stop:
	docker-compose down

logs-tail:
	docker logs -f --tail 100 simple-api

db-init:
	npx sequelize-cli init

# --name migration-skeleton
db-create-migration:
	npx sequelize-cli migration:generate --name $(NAME)

db-migrate:
	docker-compose exec api npx sequelize-cli db:migrate

db-migrate-reset:
	docker-compose exec api npx sequelize-cli db:migrate:undo:all

# --name user --attributes firstName:string,lastName:string,email:string
db-create-model:
	npx sequelize-cli model:generate --name $(NAME) --attributes $(ATTRIBUTES)

bash-postgres:
	docker-compose exec postgres psql simple_channel simple_channel




