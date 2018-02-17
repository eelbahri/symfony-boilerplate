start-dev:
	cp .env.dist .env
	docker-compose up -d --build
	shell

shell:
	docker-compose exec php bash

restart:
	docker restart boilerplate_nginx_1 boilerplate_php_1 boilerplate_maildev_1 boilerplate_db_1
