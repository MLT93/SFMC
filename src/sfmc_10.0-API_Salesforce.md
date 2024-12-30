# **`APIs en Salesforce Marketing Cloud (SFMC): Conceptos y Aplicaciones`**

#### Introducción:

Salesforce Marketing Cloud (SFMC) se distingue por su capacidad de integración con herramientas externas a través de APIs. Estas interfaces permiten conectar SFMC con plataformas externas, optimizando el flujo de información y automatizando procesos clave de marketing. Este documento detalla las características, componentes y aplicaciones de las APIs en SFMC, destacando su papel en la personalización y eficiencia operativa.

---

1. ### **`¿Qué es una API?`**

   Una API (Application Programming Interface) es un conjunto de reglas y protocolos que permite la comunicación entre aplicaciones de software. Se asemeja a un sistema postal donde:
   
   - **`Emisor y receptor:`** Dos aplicaciones que intercambian datos.
   - **`Dirección de envío:`** El "endpoint" o URL donde se dirige la solicitud.
   - **`Formato del envío:`** Métodos como **GET**, **POST**, **PUT**, **PATCH** y **DELETE**, que definen la acción a realizar.
   - **`Metadatos del envío:`** Información adicional sobre la solicitud, como credenciales de autorización o formato de los datos.
   - **`Respuesta:`** Devuelve el resultado de la acción, que puede incluir datos, confirmaciones, códigos o errores.
   
   ---

2. ### **`Componentes de una llamada API`**

   - **`Emisor y receptor:`** 
      - La aplicación de origen realiza la solicitud o **Request** y el servidor (endpoint) la procesa devolviéndo siempre una respuesta o **Response** que puede ser positiva o negativa.
      - Herramientas como Postman o navegadores web pueden emular esta interacción.
   
   - **`Endpoint (Una dirección del servidor):`**
      - Una URL específica que define el destino de la llamada API.
        ```
        https://your_subdomain.rest.marketingcloudapis.com/endpoint/
        ```
   
   - **`Método de envío o verbos (HTTP):`**
      - **GET:** Solicita información (similar a un `SELECT` en bases de datos).
      - **POST:** Crea registros (`INSERT`).
      - **PUT:** Reemplaza registros (`UPDATE` completo).
      - **PATCH:** Modifica registros (`UPDATE` parcialmente. Ésto quiere decir que es innecesario repetir todos los campos del body, simplemente se agregan los que se desean modificar).
      - **DELETE:** Elimina registros (`DELETE`).
   
   - **`Headers:`**
      - Metadatos adicionales como credenciales de seguridad, formato deseado de respuesta, identificación de la fuente de la llamada, etc...
        ```json
        {
          "Authorization": "Bearer ACCESS_TOKEN",
          "Content-Type": "application/json"
        }
        ```
   
   - **`Body:`**
      - Contiene los datos enviados al endpoint. Puede tener varios formatos (JSON, x-url-form-encoded, blob, etc...). Por ejemplo, para crear un suscriptor:
        ```json
        {
          "email": "usuario@ejemplo.com",
          "firstName": "Juan",
          "lastName": "Pérez"
        }
        ```

   - **`Respuesta:`**
      - Resultado que **siempre es devuelto** por el servidor tras procesar la solicitud. Incluye un código de estado HTTP (ej., 200 para éxito, 401 para error de autorización) y el contenido de la respuesta (datos solicitados o mensajes de error).

   ---

3. ### **`APIs en Salesforce Marketing Cloud`**

   - **`Tipos de APIs en SFMC:`**
      - **SOAP API:**
         - Basada en XML y menos flexible.
         - Utilizada principalmente para funciones heredadas en SFMC.
      
      - **REST API:**
         - Basada en JSON, más flexible y moderna.
         - Soporta las funcionalidades más recientes y es preferida para integraciones.
         - Permite gestionar funcionalidades avanzadas como:
           - `Journey Activation:` Activar recorridos personalizados.
           - `Event Triggers:` Disparar eventos específicos en un Journey.
           - `Data Management:` Crear, actualizar y consultar registros en Data Extensions.
   
   - **`Herramientas complementarias:`**
      - **WSProxy:** Simplifica las llamadas SOAP en AMPScript.
      - **Funciones en AMPScript y SSJS:** Permiten realizar llamadas desde el lado del cliente.
   
   - **Documentación recomendada:**
       [API REST de MC](https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/apis-overview.html)
      - [Funciones en AMPScript](https://ampscript.guide/http-functions/)

   - **`Casos de Uso Prácticos de APIs en SFMC`**
   
     - **Enviar Emails Personalizados:**
        - Automatiza el envío de emails transaccionales o de marketing.
        - Endpoint relevante: `/messaging/v1/email/send`.
     
     - **Activar un Journey por API:**
        - Dispara un Journey con datos de entrada.
        - Endpoint relevante: `/interaction/v1/events`.
     
     - **Gestión de Audiencias:**
        - Agrega, actualiza o consulta datos de clientes en Data Extensions.
        - Endpoint relevante: `/data/v1/customobjectdata`.
     
     - **Consultas de Métricas:**
        - Obtén estadísticas de campañas y viajes del cliente.
        - Endpoint relevante: `/messaging/v1/email/stats`.

   ---

4. ### **`Authorization y Scopes`**

   - **Sistema de autenticación:**
      - **OAuth y OAuth 2.0:** Método de autenticación utilizado en SFMC.
      - Credenciales necesarias:
        - **Client ID**
        - **Client Secret**
   
   - **`Scopes:`**
      - Define los permisos específicos otorgados a las credenciales.
      - Importancia:
        - Proveer permisos mínimos para garantizar seguridad de la API.
        - Escalar permisos si son insuficientes para la funcionalidad requerida.
   
   - **`Ejemplo de autenticación y creación de ClientID y ClientSecret:`**
      1. Crear credenciales en SFMC desde:
         - **Setup > Platform Tools > Apps > Installed Packages > New > Add Component.**
      2. Seleccionar los scopes requeridos para la integración.
      3. Obtener un **Access Token** para realizar llamadas API.
      
      3. **Obtén un Access Token:**
         - Realiza una llamada POST al endpoint de autenticación:
           ```
           POST https://your_subdomain.auth.marketingcloudapis.com/v2/token
           ```
      
         - **Body de la llamada:**
           ```json
           {
             "grant_type": "client_credentials",
             "client_id": "YOUR_CLIENT_ID",
             "client_secret": "YOUR_CLIENT_SECRET",
             "account_id": "YOUR_ACCOUNT_ID",
             "scope": "email_write email_send email_read journeys_write journeys_read journeys_execute"
           }
           ```
      
         - **Respuesta esperada:**
           ```json
           {
             "access_token": "eyJraWQiOiJLT...",
             "expires_in": 3600
           }
           ```

---

1. ### **`Herramientas útiles para trabajar con APIs`**

   - **`Navegadores:`**
      - Inspeccionar (Ctrl + Shift + i) dentro de una página web las solicitudes y respuestas en la pestaña "Network".
   - **`APIs abiertas:`**
      - Proveen datos públicos, ideales para pruebas.
   - **`Postman:`**
      - Instala: [Postman](https://www.postman.com/). 
      - Plataforma robusta para realizar pruebas de llamadas API.

---

1. ### **`Demos prácticas`**

   - Crear credenciales mínimas en SFMC.
   - Generar una llamada OAuth con Postman.
   - Configurar un Journey en SFMC y dispararlo vía API.

---

7. ### **`Estatus y códigos de error`**

   - **`Manejo de errores:`**
      - Respuestas comunes:
        - 200: Éxito.
        - 400: Solicitud incorrecta.
        - 401: Credenciales inválidas.
        - 403: Permisos insuficientes. Ésto es debido al scope.
        - 404: Endpoint o recurso no encontrados.
      - Recurso adicional: [Guía de manejo de errores](https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/error-handling.html).
      

8. ### **`Conseguir ClientID y ClientSecret para configurar las credenciales OAuth y trabajar con la API de Salesforce`**:

   Para obtener el **Client ID** y el **Client Secret** en **Salesforce Marketing Cloud (SFMC)**, primero necesitas crear una **aplicación** en la sección de **Apps > Installed Packages** (Paquetes Instalados) en **Platform Tools** dentro del **Setup**. A continuación te explico paso a paso cómo hacerlo:

   - **`Acceder a Salesforce Marketing Cloud (SFMC)`**

     - **Inicia sesión en tu cuenta de SFMC**:

       - Abre tu navegador y ve a la página de inicio de sesión de **Salesforce Marketing Cloud**.
       - Ingresa tus credenciales para acceder a tu cuenta.
     - **Dirígete a la sección de Setup**:

       - Una vez dentro de SFMC, en la esquina superior derecha de la pantalla, haz clic en el icono de **Configuración** (Setup), que generalmente está representado por un engranaje.

   - **`Crear una nueva aplicación en SFMC (Installed Packages)`**

     - **Accede a Installed Packages**:

       - En la barra de búsqueda de **Setup**, escribe **Installed Packages** y selecciona la opción **Installed Packages**.
       - Esto te llevará a la pantalla donde puedes ver y gestionar las aplicaciones instaladas en tu cuenta de SFMC.

     - **Crear un nuevo paquete (nueva App)**:

       - Haz clic en **New** (Nuevo) para crear un **nuevo paquete (nueva App)**.
       - Asigna un nombre descriptivo a tu paquete, como por ejemplo **"Mi Aplicación API"** o algo relacionado con la tarea que vas a realizar.
       - Agrega una descripción (opcional), aunque no es estrictamente necesario.

     - **Agregar componente a la aplicación**:

       - Después de asignar el nombre y la descripción, puedes agregar **componentes** a tu paquete. Para obtener el **Client ID** y el **Client Secret**, debes agregar el **API Integration** (utiliza seguridad OAuth) como nuevo componente.

         - **Selecciona "API Integration"** como tipo de componente.
         - Esto generará un **Client ID** y un **Client Secret** que podrás utilizar para autenticar tus solicitudes API.

   - **`Obtener el Client ID y el Client Secret`**

     - **Acceder a los detalles de la aplicación**:

       - Una vez que hayas creado la aplicación, haz clic en el nombre del paquete que acabas de crear para ver sus detalles.

     - **Encontrar el Client ID y Client Secret**:

       - En la sección de **API Integration**, encontrarás dos elementos clave siempre que la app sea privada:

         - **Client ID**: Este es el identificador único de la aplicación en Salesforce Marketing Cloud.
         - **Client Secret**: Este es el secreto asociado a tu aplicación, que se utiliza junto con el **Client ID** para autenticar tus solicitudes a la API.
       - **Client ID** y **Client Secret** se mostrarán en formato texto plano en esta pantalla. Asegúrate de copiarlos.

     - **Guardar las credenciales**:

       - **Muy importante**: Guarda el **Client ID** y el **Client Secret** en un lugar seguro, ya que son sensibles y se utilizan para generar el **Access Token** necesario para autenticar las solicitudes a la API de Marketing Cloud.
       - Puedes almacenarlas en un archivo de texto cifrado o en un gestor de contraseñas para garantizar su seguridad.

   - **`Configuración adicional para el uso del Access Token`**

     - **Configurar el acceso a la API**:

       - Asegúrate de que los permisos de acceso a la API estén correctamente configurados. Esto normalmente se gestiona dentro de la aplicación en la sección de **API Integration**.
       - Verifica que tu aplicación tenga acceso adecuado a los endpoints que deseas utilizar (por ejemplo, acceso para interactuar con **Journey Builder**, **Data Extensions**, etc.).

     - **Utilización del Client ID y Client Secret**:

       - El **Client ID** y **Client Secret** son fundamentales para generar el **Access Token** necesario para autenticar tus llamadas API. Para obtener el **Access Token**, utilizarás estos valores en el flujo de autenticación **OAuth 2.0**.

   - **`Resumen`**

     1. **Iniciar sesión en Salesforce Marketing Cloud**.
     2. **Acceder a Setup** y buscar **Installed Packages**.
     3. **Crear un nuevo paquete** e incluir el componente **API Integration**.
     4. **Obtener el Client ID y Client Secret** de la nueva aplicación creada.
     5. **Guardar las credenciales** en un lugar seguro para usarlas al solicitar el Access Token.

     `** Recuerda: Estas credenciales son privadas y deben ser tratadas con el mismo nivel de seguridad que una contraseña, ya que permiten acceso a la API de SFMC`

# Guía detallada para lanzar un Journey con una llamada API y una DE de tipo Triggered en Salesforce Marketing Cloud (SFMC)

1. #### **Crear credenciales con los permisos necesarios (scopes):**
   - Accede a **Setup** (Configuración) en tu cuenta de SFMC.
   - Ve a **Installed Packages**.
   - Crea un nuevo paquete haciendo clic en **New**.
     - **Nombre del Paquete**: Escribe un nombre identificativo, por ejemplo, "Journey_API_Credentials".
   - Selecciona **Components > API Integration** y añade una nueva integración.
   - En **API Integration**, habilita los permisos (**scopes**):
     - **Journey**: Para gestionar journeys.
     - **List and Subscribers**: Para gestionar suscriptores y listas.
   - Guarda las credenciales generadas (Client ID y Client Secret).

2. #### **Crear una Data Extension (DE) de tipo Triggered para disparar el Journey:**
   - Dirígete a **Email Studio > Email > Subscribers > Data Extensions**.
   - **Crea una nueva Data Extension a partir de un Template y que sea de tipo Triggered**:
     - **Nombre**: Elige un nombre como "Journey_Trigger_DE".
     - **Campos requeridos**: Añade campos para almacenar la información necesaria:
       - `SubscriberKey` (Texto, requerido, primary key). Éste viene por defecto.
       - `EmailAddress` (Email, requerido). Éste viene por defecto.
       - Otros campos que desees incluir en el Journey y el email que se enviará a tu audiencia.
         - Atento con los campos **Required**!
   - Guarda la DE.

3. #### **Seleccionar o crear un Email con los campos necesarios:**
   - Ve a **Email Studio > Content**.
   - Usa un email existente o crea uno nuevo que incluya los campos que configures en la DE:
     - Personaliza el contenido con variables de los campos de la DE, como `%%FirstName%%`, `%%LastName%%`.
   - Publica el email para que esté disponible en el Journey.

4. #### **Configurar el Journey:**
   - Abre **Journey Builder** y crea un nuevo Journey:
     - **Entrada del Journey**: Selecciona la opción **API Event**.
     - Asocia la entrada con la DE creada previamente.
   - Añade una actividad de **Send Email** y selecciona el email que configuraste.
   - Realiza las configuraciones adicionales pertinentes al Journey si fuere necesario.
   - Publica el Journey.
   - Guarda el **Event Definition Key**, que es necesario para disparar el Journey mediante la API.

5. #### **Crear un documento con la información requerida:**
   - Incluye los siguientes datos en un archivo o documento:
     - **Credenciales**: Client ID y Client Secret del paquete configurado. Esto debe ser privado!
     - **Event Definition Key** del Journey.
     - **Campos de la Data Extension**: Lista de campos y sus configuraciones (nombre, tipo, longitud).
     - **ID de la Business Unit (BU)**: Lo encuentras en **Setup > Business Units**.


6. #### **Extra (Práctica adicional): Crear la llamada API en Postman**
   - Usa **Postman** para enviar la llamada API de disparo del Journey:
     - Endpoint de referencia: [SFMC API Reference](https://developer.salesforce.com/docs/marketing/marketing-cloud/references/mc_rest_interaction/postEvent.html)
     - Usa la librería de Postman: [Salesforce Developers Postman Collection](https://www.postman.com/salesforce-developers/salesforce-developers/request/gerh7b0/fire-entry-event)
     - Cuerpo de la llamada (JSON):
       ```json
       {
         "ContactKey": "example_key",
         "EventDefinitionKey": "YOUR_EVENT_DEFINITION_KEY",
         "Data": {
           "SubscriberKey": "example_key",
           "EmailAddress": "example@email.com",
           "FirstName": "John",
           "LastName": "Doe"
         }
       }
       ```
     - **Nota**: Asegúrate de incluir todos los campos obligatorios definidos en la DE.
