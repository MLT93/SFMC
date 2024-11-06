# **Cómo Cargar y Descargar Archivos desde FTP con Automation Studio**

#### Introducción:

A continuación, se detalla el proceso para **descargar un archivo desde FTP a SFMC y cargarlo en una DE** y **subir un archivo desde una DE de SFMC al FTP** utilizando **Journey Builder > Automation Studio**. Este apartado sirve para crear **ejecuciones automáticas en base a eventos o condiciones** principalmente.

---

1. ### **`Introducción al Starting Source de Automation Studio`**

   El **Starting Source** es el punto de inicio de la automatización, lo que desencadena el flujo de actividades. Existen tres opciones principales:

   - **`Schedule`**:

     - La automatización se ejecuta en un horario predefinido. Puedes especificar la frecuencia, el día y la hora para que la automatización se inicie.
     - Útil para procesos repetitivos que necesitan ejecutarse en momentos específicos, como diariamente, semanalmente, etc.
     - También nos permite realizar ejecuciones manuales si evitamos establecer alguna configuración de tiempo. En pocas palabras, dejamos el icono en "gris". Esto nos permitiría seleccionar el botón **Run Once** (ejecuta una vez) que queda al lado de **Save** (guardar) y ejecutar la Automation según el antojo. Nos permite realizar pruebas y ejecutar la Automation manualmente.

   - **`File Drop`**:

     - La automatización se desencadena cuando se detecta la subida de un archivo a una carpeta designada en el servidor **FTP**.
     - Ideal para procesos que dependen de la llegada de archivos externos para la carga de datos, como listas de contactos o datos de pedidos.
     - Configuras la carpeta del FTP donde se debe colocar el archivo y qué archivo debe buscar para iniciar el proceso.
     - Nos permite ejecutar la Automation cuando se carga un archivo en el FTP y viene reconocido por la configuración que creamos a través de **Use Filename Pattern** o **No Filename Pattern**.

   - **`Trigger`**:
     - La automatización se activa por un evento específico o una API externa que dispara la ejecución del proceso.
     - Usado en flujos de trabajo donde el lanzamiento del proceso depende de eventos externos, como la creación de un nuevo registro en Salesforce.

   ***

2. ### **`Introducción a las actividades en Automation Studio relacionadas con la transferencia de archivos`**

   - **`Data Extract`**:

     - Esta actividad extrae datos de una **Data Extension** o de otras fuentes dentro de SFMC (como un informe o un listado) y los prepara para su exportación, generalmente en un formato **CSV**, **XML** o **ZIP**.
     - La actividad también permite extraer datos específicos, como información de envíos o suscriptores.

   - **`File Transfer`**:

     - Después de usar la actividad de **Data Extract**, el archivo generado se transfiere a una ubicación dentro del sistema **FTP** de SFMC denominada **Safehouse**, o puede trasladarse dentro de directorios del mismo servidor (por ejemplo, desde una carpeta temporal a una carpeta de exportación).
     - También se puede usar para descargar archivos de un servidor **FTP** y prepararlos para su importación en SFMC al interno de otra **Data Extensions**.

   - **`Data Copy or Import`**:
     - Esta actividad importa datos desde un archivo alojado en el FTP a una **Data Extension** específica. Es común en el proceso de ingestión de datos externos, como registros de clientes o información de pedidos.
     - Esta actividad tampoco se limita solo a la importación de archivos externos, sino que **también facilita la copia de datos entre diferentes estructuras dentro de SFMC**. Por ejemplo, la copia de una Data View a una DE.
     - Permite definir si los datos deben sobrescribirse o agregarse, y puedes mapear las columnas del archivo con las columnas de la **Data Extension**.

   ***

3. ### **`De FTP a Data Extension (DE)`**

   - **`Recomendación`**: Para este caso, **File Drop** o **Schedule** son los más usados, ya que el primero permite la activación inmediata al subir un archivo porque queda a la `escucha del evento` y el segundo permite una `ejecución programada o manual`.

   - **`Starting Source: File Drop o Schedule`**

     1. **Accede a Automation Studio**:

        - Inicia sesión en SFMC y ve a **Journey Builder > Automation Studio**.
        - Haz clic en **New Automation**. Aquí nos mandará directamente a la creación **Workflow** de la Automation.

     2. **Selecciona el Starting Source**:
        - Elige **File Drop** si deseas hacer la ejecución cuando se carguen archivos al FTP y sigue las siguientes instrucciones:
          - Especifica la **ubicación en el FTP** donde esperas que se cargue el archivo. Puedes seleccionar la carpeta **Import** o una carpeta personalizada.
          - Define el **nombre del archivo** que esperas que se cargue, utilizando comodines si es necesario.
        - Elige **Schedule** si deseas hacer una ejecución programada/manual

   - **`Activity: Data Copy or Import`**

     Añade una actividad de **Data Copy or Import** y configúrala:

     - **Choose**.
     - **Create New Copy or Import Definition**.
       - **Este Proceso abarca**:
         1. `ACTIVITY INFO`:
            - **Name**: El nombre de la Automation.
            - **Description**: Descripción de la Automation.
            - **External Key**: Código identificativo que se crea automáticamente.
            - **Send notification email to**: Checkbox para recibir si al completarse la Automation recibimos un correo (esto posee pocos detalles).
         2. `SOURCE`: Es el dónde buscar los datos.
            - **Data Extension**: Copia la información de una DE.
            - **File Location**: Busca información desde el FTP. Aparece el árbol de la carpeta **/import**, el **File Naming Pattern** para buscar el patrón del archivo (hay que escribir también su extensión), también aparece el **Date Format** para definir el formato de fechas en la tabla, su delimitador **Delimiter** y el **Bad Data Behavior**. Además, tenemos un desplegable **Advanced File Options** para los condicionales de tiempo de ejecución de la Automation.
         3. `DESTINATION`: El destino donde se copiarán los archivos (la otra Data Extension).
         4. `MAPPING`:
         - **Elige cómo configurar la data subida**:
           - Add Only (agregar simplemente a la tabla).
           - `Update Only` (realizar el update unicamente de los registros que coincidan).
           - `Add and Update` (agregar los registros y realizar el update donde coincidan).
           - `Overwrite` (borrar la tabla y reescribirla).
         - **Relaciona los campos de la data cargada con los campos de la DE de destino para poder cargar los registros correspondientes**.
         1. `REVIEW`: Revisión general de la config.

   - `Notificaciones y control de errores`:

     - Puedes agregar una Activity de **Send Email** para recibir notificaciones cuando la automatización se complete o si ocurre un error.

   - **`Guardar y ejecutar Run Once`**:

     - En la misma ventana arriba a la dcha darle a **Save** (guardar).
     - Luego, espera a que se cargue un archivo en el FTP en el caso de **File Drop** o activa la automation en el caso de **Schedule** programado (eso se hace desde el mismo **Workflow**), o selecciona **Run Once** en el caso de **Schedule** sin programar.

   ***

4. ### **`De Data Extension a FTP`**

   - **`Recomendación`**: Para subir archivos de una DE al FTP, **Schedule** es una buena opción si deseas que el proceso sea `programada en el tiempo` (si configuras una fecha determinada de inicio) o `manual` si omites esa configuración. En este caso, omitiremos su configuración porque simplemente necesitamos accionar el proceso manualmente.

   - **`Starting Source: Schedule`**

     1. **Accede a Automation Studio**:

        - Inicia sesión en SFMC y ve a **Journey Builder > Automation Studio**.
        - Haz clic en **New Automation**. Aquí nos mandará directamente a la creación **Workflow** de la Automation.

     2. **Selecciona el Starting Source**:
        - **Schedule** para hacer una ejecución programada (elige la fecha para que se ejecute la automation) o manual (sin configuración).

   - **`Activity: Data Extract`**

     Añade una actividad de **Data Extract** y configúrala:

     - **`Choose`**.
     - **`Create New Data Extract Definition`**.
       - **Este proceso abarca**:
         1. `PROPERTIES`:
            - **Name**: El nombre de la Activity.
            - **External Key**: Se genera automáticamente.
            - **File Naming Pattern**: Este es muy importante. Es el patrón del nombre que después se buscará en el **Safehouse**, la carpeta segura de almacenamiento temporal (se recomienda crear un nombre explicativo para el file). Además, necesitas utilizar AMPScript para definir el año-mes-día cuando se genera el archivo y por último, debes agregarle la extensión del mismo (.CSV, .TXT, .ZIP). Se aconseja utilizar (.ZIP) porque evita problemas de codificación de la información cuando hay más de 1 archivo.
            - **Extract Type**: Este se encarga de encriptar el formato del archivo cuando lo extrae. Se aconseja extraer en (.ZIP) siempre.
         2. `CONFIGURATION`:
            - **Archive Folder**: Por defecto **/**.
            - **File Filter**: Por defecto **Promo\*return.txt**.
            - **Import Folder**: Por defecto **/Import**.
            - **Output Folder**: Por defecto **/Export**.

   - **`Activity: File Transfer`**

     Agrega una Activity en el **Step 2** que utilizará el **Safehouse** para trabajar con los archivos.

     - **Choose**.
     - **Create New File Transfer Activity**.
       - **Este proceso abarca**:
         1. `PROPERTIES`:
            - **Name**: El nombre de la Activity.
            - **External Key**: Se genera automáticamente.
            - **Description**: Descripción sobre lo que va a realizar esta Activity.
            - **File Action**: Este es muy importante. Se encarga de definir la acción que se llevará a cabo con el archivo. Tiene dos opciones:
              - **Manage File**: Es la opción que nos llevará a elegir **Unzip** o **Decrypt** para el file alojado en el Servidor FTP asociado.
              - **Move a File From Safehouse**: Buscará el file en la carpeta segura de almacenamiento temporal para moverlo al FTP.
         2. `DEPENDIENDO DE LA ELECCIÓN DEL FILE ACTION`:
            - **CONFIGURATION (Manage File)**:
              - `File Naming Pattern`: Es el patrón de nombre que se buscará para manejar un archivo específico. Es el **"¿Qué Buscar?"**.
              - `Source File Location`: Es el lugar donde se buscará el archivo. Es el **"¿Dónde Buscar?"**.
              - `File Management Actions`: Determina la acción que se llevará a cabo, **Unzip** (descomprimir el formato .ZIP) o **Decrypt** (desencriptar). Es el **"¿Qué Hacer con el File?"**.
              - `Qualifications`: Nos provee 3 opciones que permiten configurar la transferencia del archivo dentro de un determinada cantidad de tiempo o dependiendo de ciertas comprobaciones previas. Si se ha ya realizado la transferencia en un margen de tiempo menor a X o Cancelar la operación si la transferencia es más antigua que una cantidad de horas X. También que se ejecute después que haya pasado X tiempo (en horas). Es el **"Bajo qué condición?"**.
            - **CONFIGURATION (Move a File From Safehouse)**:
              - `File Naming Pattern`: Es el patrón de nombre que se buscará para manejar un archivo específico. Es el **"¿Qué Buscar?"**.
              - `Destination`: Es un desplegable para elegir dónde ubicar el archivo residente en el área segura Safehouse.
              - `Use local time zone setting`: Cuando está activada la actividad utiliza la zona horaria configurada localmente en la instancia de SFMC para interpretar los comodines de fecha como "File\_%%Year%%-%%Month%%-%%Day%%.txt". Cuando está desactivada, se utiliza la zona horaria UTC (Coordinated Universal Time) por defecto.
              - `Transfer Settings`: Aquí se elige si el archivo será encriptado. Además, se elige el tipo de encriptado para ese archivo.
              - `Customer Public Key`: Se activa eligiendo el encriptado. El cliente genera un par de claves: pública y privada. La clave pública se comparte con SFMC. Los datos se encriptan con la clave pública antes de ser enviados a SFMC. Esta funcionalidad es crucial para mantener la privacidad y cumplir con regulaciones de protección de datos como GDPR, CCPA, entre otras.
         3. `SUMMARY`:
            - **Check y Resumen**
         4. `Finish`

   - **`Guardar y ejecutar Run Once`**:

     - En la misma ventana arriba a la dcha darle a **Save** (guardar).
     - Luego, y aquí viene la explicación del porqué evitamos configurar el **Schedule**, le damos clic al botón que dice **Run Once** (ejecuta una vez) lo que acciona una ejecución manual al fin y al cabo. Por lo tanto es innecesaria la configuración de una ejecución programada.

Entendido. Aquí tienes la explicación detallada siguiendo el modelo proporcionado:

# Guía detallada para crear una Automation en SFMC para cargar archivos desde FTP a una Data Extension:

1. #### **Accede a Automation Studio**:

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
   - Navega a **Journey Builder > Automation Studio**.

2. #### **Crea una Nueva Automation**:

   - Haz clic en **New Automation**.
   - Selecciona **Create New Automation** en la ventana emergente.

3. #### **Configura el Starting Source**:

   - Elige **Schedule** o **File Drop** como Starting Source.
     - Para **Schedule**: Configura la frecuencia de ejecución o déjalo sin configurar para una ejecución manual.
     - Para **File Drop**: Especifica la ubicación del FTP y el patrón de nombre del archivo.

4. #### **Añade la Actividad Data Copy or Import**:

   - Selecciona **Data Copy or Import**.
   - Arrastra la actividad al **Step 1**.
   - Haz clic en **Create New Copy or Import Definition**.

5. #### **Configura la Actividad Data Copy or Import**:

   - **Name**: Asigna un nombre descriptivo a la actividad.
   - **External Key**: Se genera automáticamente.
   - **Description**: Añade una descripción opcional.

   - **Source**:
     - Selecciona **File Location**.
     - Especifica la ruta del archivo en el FTP.
     - Define el **File Naming Pattern**.

   - **Destination**:
     - Selecciona la Data Extension de destino.

   - **Mapping**:
     - Relaciona las columnas del archivo con los campos de la Data Extension.
     - Elige la acción de importación: Add, Update, or Add and Update.

6. #### **Revisa y Guarda la Configuración**:

   - Revisa todos los detalles de la configuración.
   - Haz clic en **Save** para guardar la actividad.

7. #### **Finaliza la Automation**:

   - Regresa a la vista principal de la Automation.
   - Haz clic en **Save** para guardar toda la Automation.

8. #### **Activa la Automation**:

   - Una vez guardada, haz clic en **Activate** para iniciar la Automation.

9. #### Resumen de Especificaciones

   - **Tipo de Automation**: File Transfer desde FTP a Data Extension
   - **Starting Source**: Schedule o File Drop
   - **Actividad Principal**: Data Copy or Import
   - **Origen de Datos**: Archivo en servidor FTP
   - **Destino**: Data Extension específica en SFMC
   - **Acción de Importación**: Configurable (Add, Update, o Add and Update)

Esta Automation automatizará el proceso de cargar datos desde archivos en el FTP a una Data Extension específica en SFMC, permitiendo una actualización regular y eficiente de los datos de marketing.

# Guía detallada para crear Automations en SFMC para mover archivos entre SFMC, FTP y Data Extensions:

1. #### **Automation 1: Mover archivos desde SFMC al Servidor FTP**:

   - Inicia sesión en SFMC y ve a **Journey Builder > Automation Studio**.
   - Haz clic en **New Automation**.

2. #### **Configura el Starting Source**:

   - Selecciona **Schedule** como Starting Source.
   - Configura la frecuencia de ejecución según tus necesidades o déjala sin configurar para una ejecución manual.

3. #### **Añade la Actividad Data Extract**:

   - Selecciona **Data Extract**.
   - Arrastra la actividad al **Step 1**.
   - Configura la extracción de datos de la fuente deseada en SFMC.

4. #### **Añade la Actividad File Transfer**:

   - Después de Data Extract, añade otra actividad.
   - Selecciona **File Transfer**.
   - Arrastra la actividad al **Step 2**.
   - Configura para mover el archivo extraído al servidor FTP.

5. #### **Guarda y Activa la Automation**:

   - Revisa la configuración y guarda la Automation.
   - Activa la Automation para que se ejecute según lo programado.

6. #### **Automation 2: Mover archivos desde SFMC a una Data Extension**:

   - Crea una nueva Automation en Automation Studio.

7. #### **Configura el Starting Source**:

   - Selecciona **Schedule** como Starting Source y configúrala como desees.

8. #### **Añade la Actividad Data Extract**:

   - Agrega una actividad de Data Extract.
   - Configura para extraer datos de la fuente deseada en SFMC.

9. #### **Añade la Actividad File Transfer**:

    - Después de Data Extract, añade una actividad de File Transfer.
    - Configura para mover el archivo extraído al Safehouse de SFMC.

10. #### **Añade la Actividad Import File**:

    - Agrega una actividad de Import File.
    - Configura para importar el archivo del Safehouse a la Data Extension deseada.

11. #### **Guarda y Activa la Automation**:

    - Revisa la configuración completa.
    - Guarda y activa la Automation.

12. #### Resumen de Especificaciones

    - **Automation 1**:
      - Starting Source: Schedule
      - Actividades: Data Extract, File Transfer
      - Destino: Servidor FTP
    - **Automation 2**:
      - Starting Source: Schedule
      - Actividades: Data Extract, File Transfer, Import File
      - Destino: Data Extension en SFMC

Nota: Para la Automation 2, se requieren tres actividades para completar el proceso de mover datos desde SFMC a una Data Extension, ya que es necesario extraer los datos, transferirlos al Safehouse y luego importarlos a la Data Extension.
