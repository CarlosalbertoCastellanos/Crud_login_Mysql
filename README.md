# Proyecto Smarthphones

Este proyecto es una aplicación web construida con Node.js, que sigue una estructura de directorios organizada para facilitar el mantenimiento y la escalabilidad. A continuación, se describe la estructura del proyecto y se proporcionan instrucciones para configurarlo y ejecutarlo.



Instalación
Clona este repositorio en tu máquina local.

```bash
    git clone https://github.com/tu-usuario/nombre-del-repositorio.git
```

```bash
    cd nombre-del-repositorio
```

Instala las dependencias necesarias utilizando npm.

``` bash
    npm install
```


Aquí tienes cómo puedes agregar en el README la sección para ejecutar el proyecto con Docker Compose:


## Ejecución con Docker Compose

Si prefieres ejecutar el proyecto utilizando Docker Compose, sigue estos pasos:

1. Asegúrate de que Docker y Docker Compose estén instalados en tu máquina.

2. Ejecuta el siguiente comando en la raíz del proyecto para iniciar los servicios definidos en el archivo `docker-compose.yml`:

   ```bash
   docker-compose up --build
   ```

   Este comando construirá las imágenes de Docker si es necesario y luego levantará los contenedores definidos en el archivo `docker-compose.yml`.

3. La aplicación estará disponible en `http://localhost:3000` y se conectará a la base de datos MySQL configurada en Docker.

4. Para detener los contenedores, puedes ejecutar:

   ```bash
   docker-compose down
   ```

   Esto apagará y eliminará los contenedores creados por Docker Compose.
