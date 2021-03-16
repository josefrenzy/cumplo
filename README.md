# Backend admin-mx (Cumplo)

This is a Docker container service of the server (backed, celery, db, nginx)

## Beginning

This instructions i'll allow you to get a copy of the project working local into your computer for purposes of development and test.

### Pre-requisitos 📋

There some applications you need to get installed into your computer to execute successfully the repo downloaded.

```
Docker (Windows/Linux/MacOS)
```

If you are a brand new Mac M1 processor user you will need to do a minor adjustment to the docker-compose.yml file, and you need to add this into the line 55  to keep the mysql image running correctly.

```
platform: linux/amd64
```

### Clone the repo 

First thing you need to do, is clone the repo from bitbucket into a new folder.

```
git clone git@bitbucket.org/cumplo/admin-mx.git
```

This will create a folder named admin-mx





### Add environment variables.

Once you get the application cloned you need to add two .env files in the next directories  ```./config/enviroments/local/```` and ````./config/enviroments/base/ ````and the content you need to request to your supervisor.

### Build and up Images

```
$ docker-compose up ——build 🔧
```

### Add the database

Create a new directory named ./bd

Add the sql file, this need to request to your supervisor.

This should be enough to keep the app running, for test, open your browser into this url http://localhost:8080/

### Create a superuser to log into the admin of Django

#### 1.- List the image created by docker and copy the container_id of the image named ***admin-mx_api_1***

```
$ docker ps
```

#### 2.- Execute the image app with the container_id.

```
$ docker exec -it <container_id> bash
```

#### 3.- Run the application to create the super user and fulfill the fields to complete the step.


```
# python manage.py createsuperuser 
```

Once that you create the superuser go to the url http://localhost:8080/admin and login, and see the contain of the applications created into the docker image.

## Construido con 🛠️

Herramientas utilizadas para el desarrollo de este projecto

* [Django](https://www.djangoproject.com) - El framework web usado
* [MySql](https://hub.docker.com/_/mysql) - Manejador de bd



