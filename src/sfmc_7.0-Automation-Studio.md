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

---

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

1. #### **Crear un filtro en Automation Studio:**
   - Accede a **Automation Studio** desde la interfaz de Salesforce Marketing Cloud. **Journey Builder > Automation Studio**
   - Selecciona **Activities** y crea un nuevo **Filter Activity**.
   - Define los criterios del filtro:
     - Usa la Data Extension **DE_CLIENTES_MD**.
     - Aplica las condiciones:
       - **Cumpleaños = Hoy**.
       - **Edad > 25 años**.

2. #### **Configura la automatización para enviar un email:**
   - En **Automation Studio**, crea una nueva automatización.
   - Incluye los siguientes pasos:
     - **Filter Activity:** Selecciona el filtro creado en el paso anterior.
     - **Send Email Activity:** Configura el email que será enviado a los contactos resultantes del filtro en el siguiente **Step**.

3. #### **Programa la ejecución de la automatización:**
   - Configura la ejecución automática de la automatización con el **Schedule Starting Source**:
     - **Hora:** 6:00 PM.
     - **Frecuencia:** Diariamente.
     - **Fecha de finalización:** Sin fecha de finalización (hasta que se detenga manualmente).

4. #### **Conecta la automatización con un Journey:**
   - **¿Por qué conectar con Journey Builder?**  
     Automation Studio es ideal para manejar tareas repetitivas, como segmentar las DE y manipular los datos de los Subscribers. Por ello, al conectar una Automation con un Journey Builder se añaden pasos adicionales y se aprovechan capacidades como mensajes multicanal (Email, SMS, Push, etc...), interacciones basadas en el comportamiento del usuario o personalización avanzada. En pocas palabras se aprovecha la manipulación de los datos estructurando los envíos de las comunicaciones con un Journey.

   - **Pasos detallados para la conexión:**
     1. **Configura el evento de entrada en Journey Builder:**
        - Accede a **Journey Builder** y crea un nuevo **Journey**.
        - Selecciona el evento de entrada adecuado para la conexión:
          - **Automation Studio Entry Event:** Este evento permite usar la salida de una automatización como punto de entrada.
          - Configura este evento para que reciba los contactos filtrados desde Automation Studio.

     2. **Asocia la automatización al Journey:**
        - Desde la pestaña de configuración del evento de entrada, selecciona la automatización que creaste en los pasos anteriores.
        - Verifica que los datos (atributos) que pasarán desde Automation Studio al Journey estén correctamente mapeados.
        - Mapea los atributos de los contactos que ingresarán al Journey:
        - Ejemplo: Nombre, Email, Fecha de Cumpleaños.
        - Verifica que los campos mapeados coincidan con los atributos requeridos por el Journey.
        - Especifica cómo manejar contactos que intenten entrar varias veces al Journey:
        - **Allow duplicates:** Permite múltiples entradas si un contacto cumple nuevamente con los criterios.
        - **No duplicates:** Restringe las entradas repetidas.
        - La automatización debe estar activa para poder utilizarse.

          `** Recuerda: En caso de modificar una Automation asociada a un Journey, se deberá para y reiniciar el Journey para que vuelva a funcionar`.

     3. **Construye el flujo del Journey:**
        - Define las etapas adicionales que seguirán los contactos que ingresen al Journey:
          - Ejemplo: Enviar un SMS o notificación Push tras el email.
          - Otro Ejemplo: Agregar un envío de correo inicial, seguido de una regla de decisión para identificar contactos que abrieron el correo y enviar un SMS solo a ellos. 
          - Agregar condiciones basadas en aperturas, clics u otras métricas del correo inicial.
        - Opcionalmente, puedes replicar el mismo email en el Journey para asegurar consistencia en el mensaje.
        - Personaliza el flujo según tus objetivos de la campaña.

     4. **Prueba la conexión:**
        - Guarda y activa el Journey. Realiza una prueba manual desde Automation Studio para verificar que los contactos ingresan correctamente al flujo o utiliza Postman para realizar un envío de prueba.
        
          `** Recuerda: Para crear testing utilizando Postman debes crear previamente un usuario Ficticio con tus datos de comunicación en la DE relacionada para que el envío llegue unicamente a ti`.

5. #### **Opcional: Configuración del Journey en Journey Builder:**
   - Si decides evitar el agregado de pasos adicionales en el Journey, puedes configurarlo de forma básica:
     - Solo asegúrate de que el evento de entrada recibe correctamente los datos desde Automation Studio.
     - Incluye el mismo email que configuraste en **Send Email Activity** de la automatización.

# **Guía detallada para configurar la actividad File Drop y actualizar una Data Extension (DE) en Automation Studio**

1. #### **Configura un FTP en Salesforce Marketing Cloud:**

   - Asegúrate de tener acceso al **FTP** de tu Business Unit en SFMC.
   - Configura un directorio específico dentro del FTP donde se depositará el archivo.
   - **Ejemplo:** `/Import`.

2. #### **Crea una nueva Automatización en Automation Studio:**

   - Accede a **Automation Studio** desde la interfaz de SFMC.
   - Haz clic en **Create Automation** y selecciona **File Drop** como el **Starting Source**.
   - Define el directorio en el FTP donde se monitoreará la llegada de archivos:
     - Selecciona el directorio previamente configurado.
     - Especifica las condiciones del archivo, como la extensión `.csv` (todo esto está explicado en `sfmc_2.3-Cargar-files-entre-DE-y-FTP-con-Automation`).

3. #### **Configura la actividad de importación de datos:**

   - En la misma automatización, agrega una actividad de tipo **Import File**:
     - Selecciona el archivo CSV que se importará.
     - Especifica la **Data Extension (DE)** donde se importarán los datos.
     - Configura la **opción de actualización** para que los datos se agreguen o actualicen sin sobrescribir:
       - **Update Only:** Actualiza los registros existentes.
       - **Add and Update:** Agrega nuevos registros y actualiza los existentes.

4. #### **Configura la actividad File Drop:**

   - Define las propiedades de la actividad:
     - Especifica que la automatización debe activarse automáticamente cada vez que un archivo sea depositado en el FTP.
     - Configura el monitoreo para que reconozca solo archivos con nombres y extensiones específicos (ej. `Archivo.csv`).

5. #### **Guarda y activa la automatización:**

   - Revisa que la configuración esté completa:
     - Monitoreo del directorio FTP correcto.
     - Actividad de importación bien configurada.
   - Haz clic en **Save and Activate** para habilitar la automatización.

6. #### **Prueba el flujo:**

   - Deposita un archivo de prueba en el directorio FTP configurado.
   - Verifica que:
     - La automatización se activa automáticamente al detectar el archivo.
     - Los datos del archivo se importan correctamente en la DE.
     - Los datos nuevos se agregan o actualizan según lo configurado.

7. #### **Resumen de Configuración**

   - **FTP Monitor:** Directorio `/Import` monitoreado.
   - **Archivo de entrada:** CSV con formato correcto.
   - **Destino:** Data Extension actualizada sin sobrescribir.
   - **Activación:** Automática al detectar un archivo.
