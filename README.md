# Backend admin-mx (Cumplo)

Este es el contenedor Docker del servidor (backend) admin-mx, celery, Base de datos Mysql

## Comenzando 

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu maquina local para propósitos de desarrollo y pruebas.

Mira **Deployment** para conocer como desplegar el proyecto

### Pre-requisitos 
Que cosas necesitas para poder ejecutar de manera exitosa tu aplicación.

```
Docker (Windows/Linux/MacOS)
```

### Instalación
Lo  primero que debes realizar es una copia del proyecto que se tiene en Bitbucket con el siguiente comando, abriendo una terminal donde quieras clonar el repositorio.

```
git clone https://guzmanjose1989@bitbucket.org/cumplo/admin-mx.git
```

Esto te creara una carpeta con el nombre admin-mx dentro del directorio que tu hayas seleccionado en el terminal, para poder iniciarlo deberas tener corriendo ya el app de escritorio de Docker.

### Build and up Images

```
$ docker-compose up —build
```

This should be enough to keep the app running, for test,open your browser into this url http:localhost:8080/

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


