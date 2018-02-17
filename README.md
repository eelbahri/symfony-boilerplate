symfony-boilerplate
===================

Should work with travis and heroku


### INSTALLATION

```
$ cp .env.dist .env
$ docker-compose up -d --build
$ docker-compose exec php bash
```

### Use

Start dev
```
$ make start-dev
```


Run shell (when containers are running)
```
$ make shell
```


Restart all containers
```
$ make restart
```
