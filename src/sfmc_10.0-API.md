7. ### **`Conseguir ClientID y ClientSecret para configurar las credenciales OAuth para trabajar con la API de Salesforce`**:

   Para obtener el **Client ID** y el **Client Secret** en **Salesforce Marketing Cloud (SFMC)**, primero necesitas crear una **aplicación** en la sección de **Installed Packages** (Paquetes Instalados) de SFMC. A continuación te explico paso a paso cómo hacerlo:

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

     - **Crear un nuevo paquete**:

       - Haz clic en **New** (Nuevo) para crear un **nuevo paquete instalado**.
       - Asigna un nombre descriptivo a tu paquete, como por ejemplo **"Mi Aplicación API"** o algo relacionado con la tarea que vas a realizar.
       - Agrega una descripción (opcional), aunque no es estrictamente necesario.

     - **Agregar componentes a la aplicación**:

       - Después de asignar el nombre y la descripción, puedes agregar **componentes** a tu paquete. Para obtener el **Client ID** y el **Client Secret**, debes agregar el **OAuth API Integration** como componente.

         - **Selecciona "OAuth API Integration"** como tipo de componente.
         - Esto generará un **Client ID** y un **Client Secret** que podrás utilizar para autenticar tus solicitudes API.

   - **`Obtener el Client ID y el Client Secret`**

     - **Acceder a los detalles de la aplicación**:

       - Una vez que hayas creado la aplicación, haz clic en el nombre del paquete que acabas de crear para ver sus detalles.

     - **Encontrar el Client ID y Client Secret**:

       - En la sección de **API Integration**, encontrarás dos elementos clave:

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
     3. **Crear un nuevo paquete** e incluir el componente **OAuth API Integration**.
     4. **Obtener el Client ID y Client Secret** de la nueva aplicación creada.
     5. **Guardar las credenciales** en un lugar seguro para usarlas al solicitar el Access Token.

     `** Recuerda: Estas credenciales son privadas y deben ser tratadas con el mismo nivel de seguridad que una contraseña, ya que permiten acceso a la API de SFMC`
