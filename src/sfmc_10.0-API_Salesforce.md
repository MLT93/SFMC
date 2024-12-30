7. ### **`Conseguir ClientID y ClientSecret para configurar las credenciales OAuth para trabajar con la API de Salesforce`**:

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
