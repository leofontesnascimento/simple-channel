DB_URL=postgresql://$(DB_USER):$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_DATABASE)

build:
	docker-compose build

start:
	docker-compose up -d

stop:
	docker-compose down

logs-tail:
	docker logs -f --tail 100 simple-api