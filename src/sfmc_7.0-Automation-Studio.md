# **`Marketing Automation y Automation Studio en SFMC`**

#### Introducción:

Salesforce Marketing Cloud (SFMC) ofrece herramientas como **Automation Studio**, que permiten automatizar procesos de marketing complejos y repetitivos. Desde la importación y exportación de datos hasta la segmentación avanzada y el envío automatizado de correos, esta plataforma potencia la eficiencia de las estrategias de marketing, garantizando precisión y personalización.

---

1. ### **`Introducción a Automation Studio`**

   - **`¿Qué es Automation Studio?`**

     Automation Studio es una herramienta en SFMC diseñada para automatizar flujos de trabajo que involucren múltiples actividades relacionadas con la gestión y uso de datos, incluyendo importaciones, exportaciones, consultas SQL, y envíos programados de correos electrónicos.

   - **`Principales características:`**

     - **Automatización estructurada por pasos:**

       - Se pueden organizar las automatizaciones en **steps**, donde cada actividad inicia solo si la anterior se ejecuta con éxito.
       - Ejemplo: Asegurar que un archivo se haya importado correctamente antes de enviarlo a los registros asociados.

     - **Diversidad en desencadenantes (starting sources):**

       - `Schedule`: Automatización basada en horarios definidos (diario, semanal, etc.).
       - `File Drop`: Automatización que se inicia cuando un archivo se deposita en una carpeta específica del FTP.

     - **Gestión avanzada de datos:**

       - Importar y exportar datos.
       - Consultas SQL automatizadas.
       - Desencriptar o transformar archivos.

     - **Integración con Journey Builder:**

       - Permite usar los resultados de una automatización en un flujo más complejo, como un Journey.

   ***

2. ### **`Actividades de Automation Studio`**

   Automation Studio ofrece diversas actividades que se combinan para crear automatizaciones poderosas:

   - **`Actividades principales`**:

     - **Data Extract Activity:**

       - Extrae datos desde extensiones (Data Extensions) y los deja en el **SafeHouse** para exportarlos posteriormente al FTP.
       - Soporta la creación de informes estándar o extracción de datos en formatos como CSV.

     - **File Transfer Activity:**

       - Descomprime o descifra archivos en el directorio SFTP.
       - Transfiere datos de forma segura entre el SafeHouse y ubicaciones de SFTP.

     - **SQL Query Activity:**

       - Permite ejecutar consultas SQL para recuperar, segmentar y transformar datos dentro de Marketing Cloud.

     - **Send Email Activity:**

       - Configura y envía correos electrónicos dentro de una automatización.

     - **Verification Activity:**

       - Verifica datos en una automatización. Si detecta errores, puede detener el flujo o enviar alertas.

     - **Wait Activity:**

       - Introduce esperas específicas entre actividades dentro de la automatización.

   ***

3. ### **`Conexión con Journey Builder`**

   - **`Relación entre Automation Studio y Journey Builder`**:

     - Automation Studio puede actuar como el punto de entrada para Journey Builder. Por ejemplo:
     - Segmentar una audiencia avanzada en Automation Studio y luego enviar los resultados a un Journey para acciones adicionales.
     - Disparar un Journey desde una actividad en Automation Studio, como el envío de un correo basado en un archivo importado.

   - **`Capacidades combinadas`**:

     - La conexión entre ambas herramientas permite coordinar tareas repetitivas (Automation Studio) con flujos personalizados y dinámicos (Journey Builder).

   ***

4. ### **`Casos de uso comunes`**

   - **`Automatizar un filtro`**

     - Crear filtros avanzados en Data Extensions para segmentar clientes según criterios específicos (por ejemplo, clientes que cumplen años hoy y tienen más de 25 años).
     - Usar esta segmentación para iniciar un envío o alimentar un Journey.

   - **`Envío automático de correos`**

     - Configurar un envío automático en **Send Email Activity** tras importar datos desde un FTP.

   - **`Importación y actualización de datos`**

     - Usar archivos CSV depositados en un FTP para actualizar Data Extensions en Marketing Cloud, asegurando que los datos nuevos se agreguen sin sobrescribir registros existentes.

   - **`Extracción de datos`**

     - Exportar datos como extensiones de datos o informes de seguimiento a un FTP, utilizando actividades como **Data Extract** y **File Transfer**.

   ***

5. ### **`Consejos y mejores prácticas (Tips & Tricks)`**

   - **`Ejecutar múltiples actividades en  paralelo`**

     - Puedes incluir varias actividades en un mismo **step**, pero estas no deben depender entre sí.

   - **`Gestión de errores`**

     - Configura alertas en la opción **Notification Settings** para recibir correos electrónicos en caso de errores.

   - **`Evitar pausas no intencionales`**

     - Consultar actividades dentro de una automatización activa puede pausarla; asegúrate de guardar y reactivar la automatización.

   - **`Revisar logs de errores`**

     - Los errores se marcan en rojo dentro de la pestaña **Activity** y ofrecen información detallada para resolverlos.

   ***

6. ### **`Ventajas clave de Automation Studio`**

   - **`Automatización avanzada`**

     - Ahorra tiempo al manejar tareas repetitivas como actualizaciones de datos y envíos masivos de correos.

   - **`Integración multicanal`**

     - Conecta procesos automatizados con correos electrónicos, notificaciones móviles y más.

   - **`Control de calidad`**

     - Verifica datos y actividades para minimizar errores antes de la ejecución.

   - **`Escalabilidad`**

     - Ideal para manejar grandes volúmenes de datos y audiencias complejas.

# **Guía detallada para filtrar una Data Extension (DE) y enviar un email con Automation Studio a través de un Journey:**

1. #### **Crear un Filter Definition:**

   En **Salesforce Marketing Cloud (SFMC)**, el **Filter Definition** que se solicita al crear una actividad de tipo **Filter** dentro de **Automation Studio** se refiere a un filtro previamente creado y guardado en el sistema. Este filtro se utiliza para segmentar datos dentro de una **Data Extension** que definirás en la actividad **Filter** según ciertos criterios.

   - Crear Filtro desde Email Studio:
     - Ve a **Email Studio > Email > Subscribers > Data Filters**.
     - Crea un nuevo filtro con **Create** seleccionando un origen de datos:
       - **Profile Attributes**
       - **Data Extension** (elegiremos éste origen de datos)
     - Define las reglas del filtro usando los atributos y operadores disponibles (ej. "Edad mayor a 25" AND "f_nacimiento before 01/01/1999").
     - Guarda el filtro con un nombre específico que utilizaremos después en la Automation.
   - Ahora ve a **Journey Builder > Automation Studio**.

2. #### **Configura la automatización para filtrar una DE y enviar un email:**

   - En **Automation Studio**, crea una nueva automatización con los **Step** necesarios para crear el filtrado y enviar el email.
     - **Elige el Starting Source**: Configura la periodicidad de ejecución con **Schedule**.
       - **Hora:** 6:00 PM.
       - **Frecuencia:** Diariamente.
       - **Fecha de finalización:** Sin fecha de finalización (hasta que se detenga manualmente).
       - Recuerda **Activate** el Schedule.
     - **Selecciona la actividad:** Usa la actividad **Filter** y elige el filtro creado en el paso anterior dentro del primer **Step**. Te pedirá que la segmentación la guardes en una nueva Data Extension en el apartado que dice **'Customer List'**.
       - Dale un **nuevo nombre a la Data Extension**. Éste será el **Entry Source** en el Journey.
       - Dale un **External Key** si deseas (se crea automáticamente).
       - Añade una **descripción** a la nueva DE (opcional).
     - **Send Email:** Configura el email que será enviado a los contactos resultantes del filtro en el siguiente **Step** (normalmente se hace en el Journey aunque ésta vez lo haremos desde la Automation).
       - **Create New Send Email Activity** (nos dirige a la elección del correo a enviar desde Content Builder).
       - Define un **nombre para la Activity**.
       - Selecciona el **Sender Profile**.
       - Elige la **Audience** a la que se mandará el correo (acá si hemos creado un filtro previo, usaremos la DE segmentada que se crea a partir de ése filtrado).
       - Confirmas las siguientes opciones (El Tracking con Einstein y el resumen).
       - Guarda.

3. #### **Conecta la automatización con un Journey:**

   - **¿Por qué conectar con Journey Builder?** Automation Studio es ideal para manejar tareas repetitivas, como segmentar las DE y manipular los datos de los Subscribers. Por ello, al conectar una Automation con un Journey Builder se añaden pasos adicionales y se aprovechan capacidades como mensajes multicanal (Email, SMS, Push, etc...), interacciones basadas en el comportamiento del usuario o personalización avanzada. En pocas palabras se aprovecha la manipulación de los datos estructurando los envíos de las comunicaciones con un Journey.
   - **Pasos detallados para la conexión:**

     1. **Configura el evento de entrada en Journey Builder:**

        - Accede a **Journey Builder > Journey Builder** y crea un nuevo **Create New Journey**.
        - Selecciona **Multi-Step Journey**
        - Nombra tu Journey
        - Elige el **Entry Source**:
          - **Data Extension** (Elegimos éste porque necesitamos la DE segmentada creada con en Automation Studio)
        - Configura el **Schedule**: Esto nos permite elegir cuándo se ejecutará el Journey o desde dónde (ej. desde una Automation)
          - **Run Once** (ejecuta una vez)
          - **Recurring** (es recurrente)
          - **Automation** (proviene de una Automation. Elegimos éste)
        - Ahora seleccionamos la Automation que creamos previamente

     2. **Construye el flujo del Journey:**

        - Agrega al menos 1 actividad para poder activar el Journey
        - Define las etapas adicionales que seguirán los contactos que ingresen al Journey:

          - Ejemplo: Tomar una decisiones en base a los datos del suscriptor, Enviar un SMS o notificación Push tras el email
          - Otro Ejemplo: Agregar un envío de correo inicial, seguido de una regla de decisión para identificar contactos que abrieron el correo y enviar un SMS solo a ellos
          - Agregar condiciones basadas en aperturas, clics u otras métricas del correo inicial

        - Opcionalmente, puedes replicar el mismo email en el Journey para asegurar consistencia en el mensaje
        - Personaliza el flujo según los objetivos de la campaña
        - Estos pasos crearán en la Automation que generamos previamente un **Step** con el nombre del Journey Builder que estamos creando, una vez que lo activemos

          `** Recuerda: En caso de modificar una Automation asociada a un Journey, se deberá para y reiniciar el Journey para que vuelva a funcionar`.

     3. **Activación y Prueba:**

        - Guarda y activa el Journey. Realiza una prueba manual desde Automation Studio para verificar que los contactos ingresan correctamente al flujo o utiliza Postman para realizar un envío de prueba.

          `** Recuerda: Para crear testing utilizando Postman debes crear previamente un usuario Ficticio con tus datos de comunicación en la DE relacionada para que el envío llegue unicamente a ti`.

# **Guía detallada para configurar la actividad File Drop y actualizar una Data Extension (DE) en Automation Studio**

1. #### **Configura un FTP en Salesforce Marketing Cloud:**

   - Asegúrate de tener acceso al **FTP** de tu Business Unit en SFMC.
   - Configura un directorio específico dentro del FTP donde se depositará el archivo.
   - **Ejemplo:** `/Import`.

2. #### **Crea una nueva Automatización en Automation Studio:**

   - Accede a **Journey Builder > Automation Studio** desde la interfaz de SFMC.
   - Haz clic en **New Automation** y selecciona **File Drop** como el **Starting Source**:
     - Hay dos opciones para escuchar el evento de carga en el FTP:
       - No filename Pattern (queda a la escucha de cualquier archivo cargado en la carpeta FTP)
       - Use filename Pattern (elige el patrón con el que está escrito el nombre del archivo que se va a cargar. Ej. **archivo_clientes.csv** o **nuevo_DE_clientes.txt**)
       - Por último elige la carpeta donde se atiende la llegada de archivos. Ej. **/import**
     - Todo esto está explicado en `sfmc_2.3-Cargar-files-entre-DE-y-FTP-con-Automation`

3. #### **Configura la actividad de importación de datos:**

   - En la misma automatización, agrega una actividad de tipo **Data Copy or Import** y arrástrala al **Step 1**
   - Selecciona **Choose** y empieza a configurar la actividad en **Create New Copy or Import Definition**:
     - Este paso nos lleva a elegir dos opciones:
       - **Data Extension** (toma info de una DE para enviarla a otro destino)
       - **File Location** (toma info del FTP para enviarla a otro destino)
     - Selecciona la opción que interactúa con el FTP
     - Introduce el **File Naming Pattern** (busca el patrón del nombre del archivo con su extensión también)
     - Especifica la **Data Extension (DE)** donde se importarán los datos. Si aún la debes crear, créala.
     - ES MUY IMPORTANTE QUE CONFIGURES CORRECTAMENTE LA FECHA
     - Configura el **mapping** para que los datos se agreguen o actualicen sin sobrescribir:
       - **Update Only:** Actualiza los registros existentes.
       - **Add and Update:** Agrega nuevos registros y actualiza los existentes.

4. #### **Prueba el flujo:**

   - Deposita un archivo de prueba en el directorio FTP configurado.
   - Verifica que:
     - La automatización se activa automáticamente al detectar el archivo.
     - Los datos del archivo se importan correctamente en la DE.
     - Los datos nuevos se agregan o actualizan según lo configurado.

# Guía detallada para refrescar una Data Extension (DE) automáticamente

1. #### **Determina cómo quieres refrescar la Data Extension**

   Antes de configurar una automatización en Automation Studio, identifica el método que mejor se adapte a tus necesidades para actualizar la Data Extension (DE):

   - **Opción 1: Importar datos desde un archivo**

     - **Descripción**: Si los datos provienen de un archivo CSV o TXT cargado periódicamente (por ejemplo, a través de un servidor FTP), esta es la mejor opción.
     - **Requisitos**:
       - Un archivo con la información estructurada.
       - Acceso a un servidor SFTP (si el archivo se transfiere automáticamente).
     - **Ejemplo**:
       - Importar un archivo diario con nuevos registros de suscriptores desde un CRM externo.

   - **Opción 2: Actualizar con una consulta SQL**

     - **Descripción**: Si los datos deben ser filtrados, combinados o transformados usando lógica SQL a partir de otras Data Extensions en Salesforce Marketing Cloud.
     - **Requisitos**:
       - Una consulta SQL que defina cómo se procesarán los datos.
       - Data Extensions Fuente y Destino bien configuradas.
     - **Ejemplo**:
       - Crear una DE con los clientes que hicieron compras en los últimos 7 días.

2. #### **Configuración de la Automation**

   1. Accede a **Journey Builder > Automation Studio** en SFMC.
   2. Haz clic en **New Automation** para crear una nueva automatización.
   3. Asigna un nombre descriptivo, como:
      - _"Refrescar DE Diario"_ o
      - _"Actualizar DE Clientes Activos"_.
   4. Elige un **tipo de activador** para la automatización:

      - **Schedule**:

        - **Uso**: Configura la automatización para que se ejecute automáticamente en un intervalo fijo.
        - **Configuración**:
          1. Selecciona la opción **Recurring**.
          2. Define la **frecuencia**:
             - Diaria (Daily), semanal (Weekly) o mensual (Monthly).
             - Ejemplo: Ejecutar la Automation todos los días a las 6:00 AM.
          3. Configura el **inicio y fin**:
             - Especifica la fecha y hora de inicio.
             - Define una fecha de finalización si es necesaria.
        - **Ventaja**: Es ideal para procesos repetitivos que no dependen de eventos externos.

      - **File Drop**:

        - **Uso**: Activa la automatización manualmente o en respuesta a un evento, como la recepción de un archivo en un servidor FTP.
        - **Configuración**:
          1. Selecciona la opción **File Drop** si la automatización se activará por la llegada de un archivo.
          2. Especifica la ubicación del archivo en el servidor FTP.
          3. Define un patrón de nombre de archivo (por ejemplo: `Clientes*.csv`) para identificar el archivo correcto.
          4. Opcionalmente, añade filtros por tipo de archivo o tamaño.
        - **Ventaja**: Útil para flujos dinámicos que dependen de eventos externos.

3. #### **Añade los pasos necesarios a la automatización**

   - **Opción 1: Importar datos desde un archivo**

     1. **Transferir el archivo (opcional)**:
        - Arrastra la actividad **File Transfer** si el archivo proviene de un servidor SFTP externo. Configura:
          - La conexión al servidor.
          - La carpeta de destino dentro de SFMC.
     2. **Configurar la actividad "Import File"**:
        - Arrastra la actividad **Import File** al flujo.
        - Configura:
          - **Origen del archivo**: Selecciona el archivo que contiene los datos.
          - **Destino**: Especifica la DE donde se cargarán los datos.
          - **Método de carga**:
            - **Overwrite**: Elimina los datos existentes en la DE antes de cargar los nuevos.
            - **Add and Update**: Añade nuevos registros y actualiza los existentes según el `Primary Key`.

   - **Opción 2: Usar una consulta SQL**

     1. **Añade la actividad "SQL Query"**:
        - Arrastra **SQL Query** al flujo.
        - Escribe una consulta SQL para definir cómo se procesarán los datos:
          ```sql
          SELECT
              SubscriberKey,
              Email,
              Nombre,
              Apellido
          FROM Clientes_Master
          WHERE Estado = 'Activo'
          ```
        - Configura el destino:
          - **Target Data Extension**: La DE donde se guardarán los resultados.
          - **Método de carga**:
            - **Overwrite**: Reemplaza los registros existentes.
            - **Append**: Añade nuevos datos sin borrar los existentes.
            - **Update**: Modifica registros existentes y añade nuevos cuando sea necesario.

4. #### **Configura el tiempo de ejecución**

   - Si usaste **Schedule**:
     - Frecuencia: Selecciona "Recurring".
     - Intervalo: Elige "Daily", "Weekly" o "Monthly".
     - Hora: Define la hora exacta de ejecución, por ejemplo, 6:00 AM.
     - Fecha de inicio y fin: Programa las fechas si el proceso es temporal.
   - Si usaste **File Drop**:
     - Ubicación: Selecciona el servidor FTP donde se recibirá el archivo.
     - Nombre del archivo: Especifica el patrón (por ejemplo: `Clientes*.csv`).
     - Acción al recibir el archivo: Activa automáticamente la Automation.

5. #### **Publica y activa la automatización**

   1. Revisa todas las configuraciones para asegurarte de que los pasos sean correctos.
   2. Haz clic en **Activate** para que la automatización comience a ejecutarse automáticamente según el horario definido o al recibir un archivo.
