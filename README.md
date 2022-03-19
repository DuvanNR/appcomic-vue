# APP COMIC - RANDOM

_Para el desarrollo del proyecto se ha usado Vue3._

- `Vue 3`
  _Version 3 de Vue - Usando Composition API._

## INDICACIONES DE FUNCIONAMIENTO

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

_Por favor ejecute este comando para correr el app modo development. Adicionalmente no olvide configurar el archivo_ `.env.development` _en caso de ser necesario._

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

## NOTA - !IMPORTANTE

_Alfinalizar la instalación de las dependecias y septup, recuerde la siguiente configuración:_

```
VUE_APP_HOST_LOCAL=http://localhost:8080
```

_En el archivo_ `.env.development` _debe configurar el host local donde correrá el app, esto es debido que a nivel de desarrollo se realiza un proxy a la ruta_ `https://xkcd.com` _en el archivo_ `vue.config.js` _para evitar el cors que bloquea la peticion no autoizada desde el navegador._

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
