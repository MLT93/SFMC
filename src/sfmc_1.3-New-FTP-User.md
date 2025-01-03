# **FTP User en Salesforce Marketing Cloud (SFMC)**

#### Introducción:

En Salesforce Marketing Cloud (SFMC), el **FTP User** es una funcionalidad clave para transferir datos de manera eficiente y segura entre SFMC y sistemas externos. El FTP se utiliza para manejar grandes volúmenes de datos, como listas de suscriptores, plantillas dinámicas, reportes o contenido, a través de carpetas organizadas y protocolos seguros como SFTP. Además, su integración con herramientas como **Automation Studio** permite automatizar procesos, garantizando una gestión de datos más eficiente.

---

1. ### **¿Qué es un FTP User?**

   - Es un usuario habilitado para acceder al servidor FTP dedicado de SFMC, donde se pueden cargar, descargar y gestionar archivos.
   - Proporciona un medio seguro y automatizado para:
     - Subir listas de contactos o datos.
     - Descargar reportes y logs de campañas.
     - Gestionar plantillas o contenido dinámico utilizado en campañas.
   - Cada instancia de SFMC tiene un servidor FTP único, estructurado en carpetas predeterminadas para facilitar su uso.

---

2. ### **Carpetas por Defecto en el FTP de SFMC**

SFMC organiza su FTP en diferentes carpetas para tareas específicas, permitiendo mantener un flujo ordenado de archivos. Estas son las carpetas principales:

- **`/Import`**:

  - Se utiliza para cargar archivos que serán importados a SFMC, como listas de suscriptores, datos adicionales o actualizaciones de contactos.
  - Automation Studio puede procesar automáticamente los archivos en esta carpeta.
- **`/Export`**:

  - Almacena archivos exportados desde SFMC, como datos de suscriptores, logs de campañas o métricas.
  - Ideal para transferir información de SFMC hacia sistemas externos.
- **`/Reports`**:

  - Almacena reportes generados por SFMC. Estos pueden incluir estadísticas de campañas, logs de actividades o resultados de pruebas A/B.
  - Los reportes se generan en formatos como **CSV**, **PDF**, o **XLSX** y pueden descargarse directamente desde esta carpeta.
- **`/Triggered_Automations`**:

  - Diseñada para manejar archivos relacionados con **triggered automations** o automatizaciones desencadenadas por eventos específicos.
  - Los archivos cargados aquí activan procesos automatizados predefinidos en **Automation Studio**.

> **Nota:** Además de estas carpetas, es posible crear carpetas personalizadas según las necesidades del negocio para organizar mejor los archivos.

---

3. ### **¿Qué es el File Name o File Naming Pattern y por qué es importante?**

   - **Definición**: El **File Naming Pattern** (Patrón de Nomenclatura de Archivos) es una convención o formato establecido para nombrar archivos de manera estructurada y consistente.
   - **Importancia**:
     - **Automatización confiable**: Herramientas como **Automation Studio** utilizan patrones de nombres para identificar y procesar archivos automáticamente. Si el nombre no coincide con el patrón esperado, la automatización fallará.
     - **Organización**: Facilita la búsqueda y manejo de archivos, especialmente en carpetas con grandes volúmenes de datos.
     - **Rastreo de actividades**: Los nombres bien definidos permiten rastrear fácilmente la procedencia, fecha y propósito de los archivos.
     - **Evita sobrescrituras**: Reduce el riesgo de sobrescribir archivos si cada uno tiene un nombre único.
   - **Recomendaciones para Naming Patterns**:
     - Incluir información clave, como **fecha**, **tipo de datos** y **origen**. Ejemplo: `Subscribers_Import_20231230.csv`.
     - Utilizar formatos estándar, como `YYYYMMDD` para fechas.
     - Evitar caracteres especiales que puedan causar errores (usar guiones bajos o medios).

---

4. ### **¿Cómo Configurar y Utilizar un FTP User en SFMC?**

#### **Acceso al FTP**

1. **Inicia sesión en SFMC**: Ingresa a tu cuenta con permisos de administrador.
2. **Navega a Setup**: Desde el menú principal, selecciona **Setup**.
3. **Busca FTP Accounts**: Dentro de **Data Management**, selecciona **FTP Accounts**.

#### **Creación de un Usuario FTP**

4. **Añade un usuario FTP**:
   - Haz clic en **Add FTP Account**.
   - Completa los datos:
     - **Nombre del usuario**: Identifica claramente al usuario FTP.
     - **Permisos**: Configura permisos como **read**, **write** y **delete**.
     - **Contraseña**: Establece una contraseña segura.
   - Vuelve a comprobar los permisos una vez creado el usuario desde la flecha que aparece en el mismo usuario para poder entrar en **Manage Permissions** (por ejemplo, acceso exclusivo a `/Import` o a todo). Éste paso es muy importante porque a veces la configuración por defecto falla y hay que darle una vuelta manualmente (aunque se vuelva a poner exactamente lo mismo).

#### **Configuración de Herramientas FTP**

5. **Configura el acceso en un cliente FTP**:
   - Utiliza herramientas como **FileZilla**.
   - Ingresa las credenciales proporcionadas:
     - Servidor: `ftp.sfmc.com`.
     - Usuario: Nombre del usuario FTP creado.
     - Contraseña: La contraseña asignada.
     - Puerto: 22 para conexiones SFTP.

---

5. ### **Mejores Prácticas para FTP User en SFMC**

   - **Automatización**:
     - Configura procesos automáticos en **Automation Studio** para manejar cargas y descargas en carpetas específicas.
   - **Revisión de logs**:
     - Monitorea regularmente los logs del servidor FTP para detectar posibles errores o problemas.
   - **Manejo de errores**:
     - Crea notificaciones automáticas en caso de fallas en la transferencia de archivos.
   - **Organización**:
     - Clasifica los archivos en carpetas y utiliza patrones de nombres claros y consistentes.
   - **Seguridad**:
     - Usa conexiones SFTP para proteger los datos sensibles durante la transferencia.

---

6. ### **Aplicaciones del FTP User en SFMC**

   - **Carga masiva de datos**: Subir listas grandes de contactos o datos personalizados a través de `/Import`.
   - **Exportación de métricas**: Descargar reportes y logs desde `/Export` o `/Reports`.
   - **Integraciones personalizadas**: Permitir la transferencia de datos entre SFMC y sistemas externos de manera segura y automatizada.

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
   - **Access Level**: Otorgar acceso completo.
   - **Authentication Mode**: Asegúrate de que esté seleccionado solo **Password**.
4. #### **Instala FileZilla**:


   - Descarga e instala FileZilla o cualquier otra herramienta de FTP de tu preferencia (ej. RealFTP).
5. #### **Configura FileZilla para Acceder al FTP de tu BU**:


   - Abre FileZilla y ve a **File** > **Site Manager**.
   - Haz clic en **New Site** y nómbralo, por ejemplo, "MarketingGlobal FTP".
   - **Host**: Introduce la URL del servidor FTP proporcionada por SFMC.
   - **Port**: Generalmente es el puerto 22.
   - **Protocol**: Selecciona **FTP - File Transfer Protocol**.
   - **Encryption**: Selecciona **Use explicit FTP over TLS if available**.
   - **También es válido utilizar **SFTP - SSH File Transfer Protocol** y evitas elegir un encriptado específico.
   - **Logon Type**: Selecciona **Normal**.
   - **User**: Introduce el nombre del usuario FTP que creaste.
   - **Password**: Introduce la contraseña que configuraste.

   `** En caso de poner todo correctamente y obtener una mala conexión, escribir nuevamente todo pero en la parte de "Conexión Rápida" que está en la pantalla principal. Si ahí obtenemos conexión, copiamos esa información en el gestor de sitios y volvemos a intentar la conexión desde ahí (a veces se obtiene un BUG aunque la info sea correcta).`
6. #### **Accede al FTP y Sube un Archivo de Ejemplo**:


   - Conéctate al servidor FTP usando FileZilla.
   - Comprueba que tienes los permismos para manejar los archivos y carpetas. Ésto se puede ver haciendo click en la flecha que aparece al lado del usuario FTP dentro del apartado **Manage Permissions**.
   - Deberás esperar a que aparezcan las carpetas por defecto con las que trabaja Salesforce (mencionadas más abajo).
   - Navega a la carpeta deseada en el servidor.
   - Arrastra y suelta un archivo de ejemplo desde tu computadora a la carpeta del servidor FTP.
   - Vas a tener 3 archivos por defecto en el Servidor (partiendo desde la raíz **/**):
     - **/Import** (para subir archivos al FTP)
     - **/Export** (para exportar archivos desde SFMC a FTP )
     - **/Triggered_Automations** (lanzamientos automáticos en base a eventos)

### Resumen de Especificaciones

- **Nombre del Usuario FTP**: FTP_MarketingGlobal
- **Contraseña**: Contraseña segura establecida.
- **Access Level**: Full Access.
- **Authentication Mode**: Password Authentication.
- **Herramienta FTP**: FileZilla configurado y conectado al servidor FTP.
