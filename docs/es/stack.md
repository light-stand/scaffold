# Stack tecnológico

Nuestro stack tecnológico consiste en los siguientes elementos:

## Frontend

### React Native

<u>Interfaz de usuário</u> 📱

[Documentación](https://reactnative.dev/)

La popular librería JavaScript web [React](https://react.dev/) aplicada al desarrollo móvil. Las principales diferencias son el entorno de desarrollo (Web vs Android / IOS), ciertas librerías, y los componentes `<div/>` -> `<View/>`, `<img/>` -> `<Image/>`, etc. Lo utilizaremos con [TypeScript](https://www.typescriptlang.org/) y [Hooks](https://react.dev/reference/react/hooks).

Sin embargo, utilizaremos el framework Expo, un conjunto de herramientas que mejorará en mucho la experiencia de desarrollo.

### Expo

<u>Framework, ecosistema</u> ⚒️

[Documentación](https://docs.expo.dev/versions/latest/)

Expo es un ecosistema, que además de disponernos toda clase de paquetes y librerías (Router, funcionalidades nativas, notificaciones, etc), también nos mejora el entorno de desarrollo y compilación. Utilizando la aplicación [Expo Go](https://expo.dev/go) podemos acceder a nuestra aplicación desde nuestro dispositivo mientras desarrollamos.

### Tailwind

<u>Estilos</u> 🖌️

[Documentación](https://tailwindcss.com/)

En este caso la versión de React Native, [Nativewind](https://www.nativewind.dev/). Nos permite escribir hojas de estilo de una manera muy breve.

### `react-query`

<u>Llamadas API</u> 🔌

[Documentación](https://tanstack.com/query/latest/docs/framework/react/guides/queries)

Una librería que aporta hooks muy utiles para hacer llamadas al backend. Para lecturas `useQuery` y para mutacións (POST, PUT, DELETE), `useMutation`. Tiene una documentación bastate extensa.

### `react-hook-form` con `zod`

<u>Formularios</u> 📄

[Documentación](https://www.react-hook-form.com/)

Libreria que maneja la lógica de formulario y validaciones.

---

## Backend

### Supabase

<u>Base de datos + API</u> 🔌

[Documentación](https://supabase.com/docs)

Supabase nos dispone de varios recursos de forma gratuita:

- Base de datos SQL basada en Postgres.
- Autenticación de usuarios
- API REST HTTP que nos permite acceder a los recursos de la base de datos.
- Almacenamiento de ficheros (S3)
- Comunicación en timpo real (chat, etc)

Hay una libreria de Supabase para JavaScript... Peeero utilizaremos los endpoints HTTP para la conexión con Supabase, así tenemos una aplicación desacoplada de cualquier tipo de servicio, y si queremos cambiar a un backend proprio no habria que hacer tantos cambios.

- [API Rest](https://supabase.com/docs/guides/api/quickstart?queryGroups=language&language=js)
- [Documentación detallada](https://postgrest.org/en/v12/references/api.html)
- [Leer recursos](https://postgrest.org/en/v12/references/api/tables_views.html)
- [Relaciones (join)](https://postgrest.org/en/v12/references/api/resource_embedding.html)
