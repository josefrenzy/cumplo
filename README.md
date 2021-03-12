# Backend admin-mx (Cumplo)

Este es el contenedor Docker del servidor (backend) admin-mx, celery, Base de datos Mysql

## Beginning


This instructions i'll allow you to get a copy of the project working local into your computer for purposes of development and test.


### Pre-requisitos 
Que cosas necesitas para poder ejecutar de manera exitosa tu aplicación.

```
Docker (Windows/Linux/MacOS)
```

### Clone the repo
Lo  primero que debes realizar es una copia del proyecto que se tiene en Bitbucket con el siguiente comando, abriendo una terminal donde quieras clonar el repositorio.

```
git clone git@bitbucket.org:cumplo/controller-mx-v1.git
```

Esto te creara una carpeta con el nombre admin-mx dentro del directorio que tu hayas seleccionado en el terminal, para poder iniciarlo deberas tener corriendo ya el app de escritorio de Docker.

### Build and up Images

```
$ docker-compose up —build
```

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

#### 3.- Run the application to create the super user and fufill the fields to complete the step.


```
# python manage.py createsuperuser 
```

Once that you create the superuser go to the url http://localhost:8080/admin and login, and see the contain of the applications created into the docker image.
