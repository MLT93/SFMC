# **`URL Expiration en Salesforce Marketing Cloud`**

#### Introducción:

La función de URL Expiration en Salesforce Marketing Cloud (SFMC) es esencial para la gestión de enlaces dentro de las campañas de marketing. Permite establecer un tiempo limitado para que los enlaces sean accesibles, contribuyendo así a la seguridad y efectividad de las comunicaciones. Esta característica es especialmente útil para controlar el acceso a contenido exclusivo y promociones temporales.

---

1. ### **`Uso de URL Expiration`**:

   - **`Definición`**: URL Expiration permite a los usuarios establecer una fecha y hora específicas en las que un enlace dejará de ser válido.

   - **`Funcionalidades`**:

     - Configuración de fechas de caducidad para enlaces en correos electrónicos y páginas web.
     - Redirección automática a una página predeterminada o mensaje de error una vez que el enlace ha expirado.
     - Personalización de la experiencia del usuario al acceder a contenido caducado.

   - **`Aplicaciones`**:

     - Promociones limitadas en el tiempo, donde los clientes reciben un enlace que solo es válido por un período específico.
     - Contenido exclusivo que debe ser accesible solo durante un tiempo determinado.

   ***

2. ### **`Importancia de URL Expiration`**:

   - **`Seguridad`**:

     - Limita el acceso a contenido sensible o promociones caducadas, protegiendo así la información y la integridad de la marca.
     - Reduce el riesgo de fraudes al evitar que usuarios no autorizados accedan a ofertas antiguas.

   - **`Control sobre campañas`**:

     - Permite gestionar mejor las ofertas temporales, asegurando que los clientes solo puedan acceder a contenido vigente.
     - Aumenta la urgencia en las campañas, motivando a los clientes a actuar rápidamente.

   - **`Análisis preciso`**:

     - Proporciona datos más claros sobre el rendimiento de las campañas al limitar el tiempo de interacción con los enlaces.
     - Facilita la medición del éxito de las promociones temporales y su impacto en la conversión.

   ***

3. ### **`Mejores prácticas`**:

   - **`Comunicación clara`**: Informar a los destinatarios sobre la caducidad del enlace para evitar confusiones.

   - **`Períodos razonables`**: Establecer tiempos adecuados para cada campaña, considerando el tipo de contenido y audiencia.

   - **`Monitoreo constante`**: Revisar regularmente las métricas relacionadas con los enlaces expirados para ajustar estrategias futuras.

   - **`Pruebas previas`**: Realizar pruebas antes del lanzamiento para asegurar que los enlaces funcionen como se espera.

   La implementación efectiva de URL Expiration no solo mejora la seguridad y control sobre las campañas, sino que también optimiza la experiencia del cliente, asegurando que siempre interactúen con contenido relevante y actualizado.

# Guía detallada para configurar un usuario FTP en SFMC

1. #### **Accede a la Configuración de SFMC**:

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
   - Dirígete al **Setup** (Configuración) desde el menú principal.

2. #### **Navega a FTP Accounts**:

   - En el panel de configuración, busca y selecciona **Administration > Data Management > FTP Accounts**.

3. #### **Crea un Nuevo Usuario FTP**:

   - Haz clic en el botón **Create** (Crear).
   - **Nombre del Usuario**: Introduce un nombre para el usuario FTP. Por ejemplo, "FTP_MarketingGlobal".
   - **Contraseña**: Establece una contraseña segura para el usuario FTP.
   - **Access Level**: Selecciona **Full Access** para otorgar acceso completo.
   - **Authentication Mode**: Asegúrate de que esté seleccionado **Password Authentication**.

4. #### **Instala FileZilla**:

   - Descarga e instala FileZilla o cualquier otra herramienta de FTP de tu preferencia (ej. RealFTP).

5. #### **Configura FileZilla para Acceder al FTP de tu BU**:

   - Abre FileZilla y ve a **File** > **Site Manager**.
   - Haz clic en **New Site** y nómbralo, por ejemplo, "MarketingGlobal FTP".
   - **Host**: Introduce la URL del servidor FTP proporcionada por SFMC.
   - **Port**: Generalmente, el puerto es 22.
   - **Protocol**: Selecciona **FTP - File Transfer Protocol**.
   - **Encryption**: Selecciona **Use explicit FTP over TLS if available**.
   - **Logon Type**: Selecciona **Normal**.
   - **User**: Introduce el nombre del usuario FTP que creaste.
   - **Password**: Introduce la contraseña que configuraste.

   `** En caso de poner todo correctamente y obtener una mala conexión, escribir nuevamente todo pero en la parte de "Conexión Rápida" que está en la pantalla principal. Si ahí obtenemos conexión, copiamos esa información en el gestor de sitios y volvemos a intentar la conexión desde ahí (a veces se obtiene un BUG aunque la info sea correcta).`

6. #### **Accede al FTP y Sube un Archivo de Ejemplo**:

   - Conéctate al servidor FTP usando FileZilla.
   - Navega a la carpeta deseada en el servidor.
   - Arrastra y suelta un archivo de ejemplo desde tu computadora a la carpeta del servidor FTP.
   - Vas a tener 3 archivos en el Servidor (partiendo desde la raíz **/**):
     - **/Import** (para subir archivos al FTP)
     - **/Export** (para exportar archivos desde SFMC a FTP )
     - **/Triggered_Automations** (lanzamientos automáticos en base a eventos)

### Resumen de Especificaciones

- **Nombre del Usuario FTP**: FTP_MarketingGlobal
- **Contraseña**: Contraseña segura establecida.
- **Access Level**: Full Access.
- **Authentication Mode**: Password Authentication.
- **Herramienta FTP**: FileZilla configurado y conectado al servidor FTP.
