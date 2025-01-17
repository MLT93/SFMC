# **`Data View y SendLog en Salesforce Marketing Cloud (SFMC)`**

#### Introducción:

Salesforce Marketing Cloud (SFMC) es una plataforma robusta que permite a los equipos de marketing gestionar sus campañas de manera efectiva. Dentro de SFMC, dos conceptos clave para el manejo de los datos de interacción con los contactos son el **SendLog** y las **Data Views**. Ambos permiten recopilar y analizar información sobre las actividades de los contactos, pero con diferencias significativas en la forma en que almacenan y presentan los datos.

---

1. ### **`Data View`**

   Las **Data Views** son **tablas del sistema** que SFMC utiliza para almacenar información histórica sobre las interacciones de los contactos con las campañas de marketing. Estas tablas contienen datos predeterminados sobre los envíos de correos, aperturas, clics, bounce y otras actividades. Aunque no son visibles en la interfaz de SFMC, se puede acceder a su información mediante **consultas SQL** que después se almacenan en una Data Extension con la misma nomenclatura de campos o a través de reportes personalizados. Aquí se pueden ver todas las Data Views disponibles: [Help Salesforce Data Views](https://help.salesforce.com/s/articleView?id=sf.mc_as_data_views.htm&type=5) y [Meteusz Dabrowski Data Views](https://mateuszdabrowski.pl/docs/config/sfmc-system-data-views/).

   - **`Características clave de las Data Views`**:

     - **Tablas predefinidas por SFMC**: Almacenan datos sobre las actividades de los suscriptores, como correos enviados, abiertos, clics y bajas.
     - **No visibles en la UI**: No puedes acceder directamente a ellas desde la interfaz, pero puedes realizar consultas SQL para obtener sus registros.
     - **Retención de 6 meses**: La información se almacena por 6 meses.
     - **Información a nivel BU Padre**: Contienen datos de todas las Business Units (BU) hijas dentro de la BU Padre.

   - **`Funcionalidades de las Data Views`**:

     - **Análisis histórico**: Almacenan detalles de las interacciones de los suscriptores, como el número de aperturas o clics en un correo.
     - **Consultas SQL**: Permiten generar reportes específicos a partir de consultas SQL para extraer los datos necesarios.
     - **Optimización de campañas**: Los datos almacenados te permiten hacer análisis profundos sobre el rendimiento de las campañas y ajustar la estrategia.

   - **`Ejemplo de uso`**:
     Supongamos que deseas saber cuántos suscriptores hicieron clic en un enlace de tu última campaña. Puedes hacer una consulta a la **Data View \_Click** que te mostrará la lista de suscriptores que hicieron clic en el enlace, junto con detalles como la fecha y hora del clic. Esto te ayudará a identificar qué enlaces generan más interés y ajustar tu contenido para futuras campañas.

   ***

2. ### **`SendLog`**

   El **SendLog** es una **Data Extension personalizada** que se utiliza para registrar información sobre los **correos electrónicos enviados**. A diferencia de las Data Views, que son tablas predefinidas, el SendLog te permite definir qué campos adicionales quieres almacenar. Es útil para realizar un seguimiento detallado de los envíos y personalizar los datos que se guardan. Aquí lo explican muy bien: [Help Salesforce Send logging in Email Studio](https://help.salesforce.com/s/articleView?id=sf.mc_es_send_logging.htm&type=5).

   - **`Funcionalidades del SendLog`**:

     - **Registro detallado**: Registra datos de envíos como **SubscriberKey**, **JobID**, **SendTime**, entre otros.
     - **Personalización**: Puedes agregar campos personalizados como el tipo de campaña o el segmento del cliente.
     - **Auditoría y análisis**: Facilita un control detallado de los correos enviados, incluyendo información relevante para el negocio.

   - **`Ejemplo de uso`**:
     Supongamos que envías una campaña de correo promocional para una tienda de ropa. El SendLog podría registrar información como el nombre del segmento al que se envió el correo o el tipo de dispositivo utilizado por el usuario. Si el correo no es abierto, puedes revisar esta información en el SendLog y ajustar la estrategia según la segmentación o el comportamiento del cliente.

   ***

3. ### **`Cómo acceder a la información de las Data Views`**

   Aunque no puedes ver las Data Views directamente en la interfaz de SFMC, puedes acceder a la información almacenada en ellas mediante **consultas SQL** en la sección **Automation Studio** o **Email Studio**. A continuación, te explico cómo hacerlo:

   - **`Paso 1: Crear una consulta SQL`**:
     En SFMC, ve a **Journey Builder > Automation Studio** y selecciona la opción de **Activities** (Actividades). Allí, selecciona **SQL Query** y dale a **Create Activity** (Crear Actividad) para crear una nueva consulta. A continuación aparecerá un recuadro con distintos tipos de actividades, selecciona **SQL Query** nuevamente y **Next**.
   - **`Paso 2: Preparar la consulta SQL`**:
     Ahora estamos en la sección de configuración de la **Query Activity** con los siguientes pasos:

     1. `PROPERTIES`: Las propiedades como **Name** (Nombre de la Activity), **External Key** (Identificador), **Folder Location** (Dónde se guardará) y **Description** (Descripción).
     2. `QUERY`: Donde se crea el código SQL. En SFMC el utilizo de <;> y <\*>. [SQL Query ACtivity](https://help.salesforce.com/s/articleView?id=sf.mc_as_optimize_the_query_activity.htm&type=5), [Trailhead SQL](https://trailhead.salesforce.com/es-MX/content/learn/modules/marketing-cloud-data-management/query-data-with-sql).
        - **Query Studio**: Se aconseja realizar tests antes de automatizar las query en la Automation. [Query Studio](https://www.marketinet.com/blog/query-studio-de-salesforce-marketing-cloud-que-es-como-funciona/#:~:text=En%20primer%20lugar%2C%20debemos%20tener%20permisos%20de%20administrador,en%20%C2%ABInstalar%E2%80%9D%20y%20aceptamos%20los%20t%C3%A9rminos%20y%20condiciones.).
     3. `TARGET DATA EXTENSION`: Donde se guardarán los registros después de la consulta. Selecciona cómo se guardará la información:
        - **Append** (escribe los registros en la DE)
        - **Update** (Actualiza los registros preexistentes que hagan match)
        - **Overwrite** (Borra los registros antiguos y carga los nuevos)
     4. `SUMMARY`: Resumen de la configuración.

   - **`Paso 3: Ejecutar la consulta`**:
     Puedes programar la consulta para que se ejecute automáticamente creando una Automation desde **Journey Builder > Automation Studio > Overview > New Automation** con el **Schedule** o ejecutarla manualmente desde **Journey Builder > Automation Studio > Activities** seleccionando la SQL Activity creada y haciendo clic en con **Run Once**. Una vez que se ejecuta, los datos estarán disponibles en la Data Extension que se haya definido.

   `** Recuerda: Todo el proceso también se puede crear desde **Journey Builder > Automation Studio > Overview > New Automation** como una Automation común. Además, la DE donde se guardará la información debe tener los campos exactamente igual a los campos de la Data View, de lo contrario devolverá un error`.

   Por ejemplo, para obtener una lista de correos enviados en los últimos 30 días, podrías usar la Data View **\_Sent** con una consulta como la siguiente:

   ```sql
   SELECT SubscriberKey, EventDate, JobID, BatchID, SubscriberID
   FROM _Sent
   WHERE EventDate >= DATEADD(day, -30, GETDATE())
   ```

   ```sql
   SELECT JobID, AccountUserID, FromName, FromEmail, JobType
   FROM ENT._Job /* `ENT.` toma la información de la BU padre */
   ```

   ```sql
   SELECT JobID, EmailID, AccountID, AccountUserID, FromName, FromEmail, SchedTime, PickupTime, DeliveredTime, EventID, IsMultipart, JobType, JobStatus, ModifiedBy, ModifiedDate, EmailName, EmailSubject, IsWrapped, TestEmailAddr, Category, BccEmail, OriginalSchedTime, CreatedDate, CharacterSet, IPAddress, SalesForceTotalSubscriberCount, SalesForceErrorSubscriberCount, SendType, DynamicEmailSubject, SuppressTracking, SendClassificationType, SendClassification, ResolveLinksWithCurrentData, EmailSendDefinition, DeduplicateByEmail, TriggererSendDefinitionObjectID, TriggeredSendCustomerKey
   FROM _Job
   ```

   ```sql
   SELECT
       s.SubscriberKey,
       s.EventDate AS EmailSentDate,
       CASE
           WHEN o.EventDate IS NOT NULL AND DATEDIFF(NOW(), o.EventDate) <= 3 THEN 'True'
           ELSE 'False'
       END AS isEmailOpenedIn3Days,
       o.EventDate AS LastOpenedDate
   FROM
       _Sent s
   LEFT JOIN
       _Open o ON s.SubscriberKey = o.SubscriberKey AND s.JobID = o.JobID
   WHERE
       s.EventDate >= DATEADD(DAY, -3, GETDATE()) -- Correos enviados en los últimos 3 días
   ```

   **Tablas comunes de Data Views**:

   - **\_Sent**: Datos sobre los correos enviados.
   - **\_Open**: Información sobre las aperturas de correos.
   - **\_Click**: Detalles de los clics en enlaces dentro de los correos.
   - **\_Unsubscribe**: Información sobre las bajas de suscriptores.
   - **\_Job**: Información sobre los detalles generales de los envíos de emails.

   ***

4. ### **`Añadir campos custom al SendLog`**:

   - Las Data Extensions de los Send Logs deben ser creadas como **Create from Template** y elegir **SendLog**.

   - **Datos de los campos personalizados adicionales que sean útiles para tu análisis o reporting**:

     - **Esto se refiere a**: Puedes personalizar los datos que se guardan en el SendLog usando AMPscript o personalización de plantillas al enviar el correo.
     - **Información capturada**: Son datos específicos como el nombre del suscriptor, ID de cliente, preferencias del suscriptor, etc.

   - **Datos de los Data Extensions relacionados**:

     - **Esto se refiere a**: Cuando usas una Data Extension como audiencia en el envío de correos, te permite capturar campos adicionales de esa DE en el SendLog.

       `** Recuerda: Los campos deben tener el mismo nombre tanto en la DE como en el SendLog para que se vuelquen correctamente los datos`.

     - **Información capturada**: Cualquier campo adicional que incluyas en tu Data Extension relacionada con los suscriptores a los cuales envíes el correo.

   ***

5. ### **`Diferencias clave entre SendLog y Data Views`**:

   - **Personalización**:

     - **SendLog**: Permite la personalización total de los campos que se registran.
     - **Data Views**: Son tablas estándar, no personalizables.

   - **Acceso a los datos**:

     - **SendLog**: La información está directamente disponible en una Data Extension personalizada.
     - **Data Views**: Los datos no son visibles en la interfaz, pero puedes acceder a ellos mediante consultas SQL.

   - **Tiempo de retención**:

     - **SendLog**: La retención de datos depende de la configuración de la Data Extension.
     - **Data Views**: Los datos se guardan durante 6 meses.

   - **Almacenamiento de datos**:

     - **SendLog**: Almacena datos de los envíos según lo que decides registrar.
     - **Data Views**: Almacenan automáticamente toda la información relacionada con los envíos y las interacciones, pero solo para campos predefinidos.

   ***

6. ### **`Resumen de Especificaciones`**:

   - **Data Views**: Son tablas predeterminadas en SFMC que registran información histórica de las interacciones de los suscriptores. Puedes acceder a ellas mediante consultas SQL y se usan para realizar análisis en profundidad de las actividades de marketing.
   - **SendLog**: Es una Data Extension personalizada que almacena datos de envíos y permite la inclusión de campos adicionales. Se utiliza para realizar auditorías más personalizadas y obtener un control detallado de los envíos.

# Guía paso a paso para alojar la información de una Data View en una DE y la creación de un SendLog

1. #### **Crear las Data Extensions para las Data Views**:

   Las **Data Views** en Salesforce Marketing Cloud son tablas de sistema que contienen datos sobre las actividades y eventos de los suscriptores, como envíos de correos electrónicos, aperturas, clics, bajas, entre otros. En este caso, te piden que crees **Data Extensions** personalizadas basadas en las Data Views **\_Job**, **\_Open**, y **\_Sent**.

   - **Crear una carpeta en el sistema**:

     - Dentro de la estructura de carpetas de **Data Extensions**, crea una carpeta llamada **C4_DataViews** para organizar estas **Data Extensions**.

   - **Crear las Data Extensions para albergar la info de las Data Views** para las tablas Data Views **\_Job**, **\_Open**, y **\_Sent**:

     - Ve a **Email Studio** > **Data Extensions** > **Create** > **Standard Data Extension**.
     - Configura cada **Data Extension** con las siguientes columnas basadas en los campos relevantes de las Data Views (los campos de las DE deben ser iguales a los que queremos consultar en las Data Views. Esto es para evitar errores en el momento de volcar los datos de la DV a la DE).

     - **\_Job**: Esta Data View contiene información sobre el trabajo de envío de correos electrónicos.

       - Campos recomendados: `JobID`, `JobStatus`, `EventDate`, `EmailName`, etc.

     - **\_Open**: Contiene datos sobre las aperturas de los correos electrónicos.

       - Campos recomendados: `JobID`, `SubscriberKey`, `EventDate`, `IsUnique`, etc. El más importante es **EventDate**.

     - **\_Sent**: Registra los correos electrónicos que se han enviado.
       - Campos recomendados: `JobID`, `SubscriberKey`, `EventDate`, `EmailName`, etc.

   - **Comprobar los datos que queremos volcar a través de Query Studio**.

     - Ve a **App Exchange > Query Studio**. Si aún estás sin esa aplicación, mira esto [Download Query Studio](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FP3yFUAT)
     - Realiza tu SQL query y espera a que devuelva información. Si está todo correcto, guarda y pasa al siguiente punto.

   - **Crear Automation para el volcado de datos de Data View a DE**.

     - Ve a **Journey Builder > Automation Studio** y crea una nueva Automation con **New Automation**.
     - Configura tu **Starting Source**. Aconsejo **Schedule** para una ejecución programada (elige cada cuanto tiempo se realizará esa Automation).
     - Elige **SQL Query** para el Step 1.

     `** Recuerda: Automation funciona en serie como en paralelo. Por lo tanto, puedes poner varias Activities que realicen más consultas en el mismo **Step**`.

     - Dale a **Save** (Guardar). Ahora cada vez que se cumpla el tiempo configurado, se ejecutará el volcado de datos en tu DE.
     - En este momento estás en la sub-categoría **Overview**. Si deseas realizar una ejecución manual sin tener que esperar pasa a la sub-categoría **Activities**, busca **SQL Query**, encuentra la activity que deseas ejecutar manualmente, pincha en ella y haz clic en **Run Once**.

2. #### **Crear los SendLogs**:

   Los **SendLogs** son registros personalizados que te permiten almacenar información adicional sobre los correos electrónicos enviados, más allá de los datos estándar. Aquí se te pide que seas creativo y añadas al menos tres campos personalizados.

   - **Crear una carpeta para los SendLogs**:

     - Crea una carpeta dentro de **Data Extensions** llamada **C4_SendLogs**.

   - **Crear las Data Extension para SendLog**:

     - En **Email Studio > Email > Subscribers > Data Extensions**, crea una nueva DE con **Create** y elige **Standard Data Extension**. En el dropdown **Create Method** elige **Create from Template** y elige **SendLog**.
     - Acaba la configuración de la DE con la **Data Retention Policy** (si se borra después de un tiempo) y **Fields** (los campos de la tabla). Esta tabla debe contener tanto los campos estándar como los personalizados que definas.

     `** Recuerda: Para aprovechar al máximo su registro de envíos, es importante asegurarse de que las extensiones de datos que pueden enviarse usen los mismos nombres que las columnas en la extensión de datos del registro de envíos. Resulta útil crear una plantilla para realizar un seguimiento de todos los envíos a través del registro de envíos`.

   - **Añadir campos custom**:

     - `Datos de los campos personalizados adicionales que sean útiles para tu análisis o reporting`. Esto se refiere a que puedes personalizar los datos que se guardan en el SendLog usando AMPscript o personalización de plantillas al enviar el correo.

       - Información capturada: Son datos específicos como el nombre del suscriptor, ID de cliente, preferencias del suscriptor, etc.

     - `Datos de los Data Extensions relacionados`. Esto se refiera a cuando usas una Data Extension como audiencia en el envío de correos. Te permite capturar campos adicionales de esa DE en el SendLog.

       `** Recuerda: Los campos deben tener el mismo nombre tanto en la DE como en el SendLog para que se vuelquen correctamente los datos`.

       - Información capturada: cualquier campo adicional que incluyas en tu Data Extension relacionada con los suscriptores a los cuales envíes el correo.

   - **Guardar el SendLog dentro de la carpeta C4_SendLogs**.
   - **Envía un correo de prueba para crear un registro en ese SendLog**.
   - **Para realizar este pasaje deberás configurar en Setup (debajo del icono del perfil), lo siguiente**:

     - Una vez que entraste en el la configuración del perfil realiza una búsqueda a través del buscador "Quick Find" y escribe **Send** o las palabras que necesites buscar.
     - Configura **From Address Management** (**Register Domain** o **Add Email Address** dependiendo de si el dominio ya está configurado o menos), **Sender Profile**, **Send Classifications**. y **UserInitialed** antes de hacer nada.

   - **Para realizar un test, puedes crearte previamente una List o una DE para almacenar los Subscribers (la audiencia) que verá ese mensaje**.
   - **Ahora Crea un email en Email Studio > Email > Content**

     - Maqueta tu correo, elige la Audience (la lista, DE que recibirán ese correo), realiza un **Preview and Test** y en la esquina izq. aparecerán 3 iconos uno sobre el otro, uno con dos avatares juntos, otro con un correo y el último con una paleta de colores. Elige el icono con el símbolo del correo. Este hace referencia a **Test Send**, donde configurarás quién recibirá ese correo de prueba y bajo qué condiciones. Haz clic en **Send Test** y listo.

3. #### Si deseas limitar la consulta SQL a un correo específico enviado desde un Journey, lo que necesitas es asegurarte de que la consulta se enfoque solo en los correos enviados como parte de ese Journey en particular. Esto se puede lograr utilizando el `JobID`, que identifica un correo enviado desde el Journey.

   - **Actualización de la Consulta para Limitarla al Correo Enviado desde el Journey**
   
   Si deseas limitar la consulta solo a los correos enviados en el Journey, puedes usar el `JobID` que corresponde al correo en cuestión. Este `JobID` puede ser extraído de la Data Extension donde registras los envíos, o puede ser un valor constante si ya lo conoces.
   
   - **Consulta SQL para Limitar a Correo del Journey**
   
   Si conoces el `JobID` del correo específico, puedes usarlo en la consulta SQL para limitarla a ese correo.
   
   ```sql
   SELECT
       j.EmailName,
       s.Domain AS SentDomain,
       j.DeliveredTime,
       o.JobID,
       o.ListID,
       o.BatchID,
       o.SubscriberKey,
       o.EventDate
   FROM _Job j
   JOIN _Open o ON j.JobID = o.JobID
   JOIN _Sent s ON o.SubscriberKey = s.SubscriberKey AND o.JobID = s.JobID
   WHERE j.JobID = 'XXXX' -- Reemplaza 'XXXX' con el JobID del correo del Journey
   ```
   
   - **Explicación**:
   - **JobID**: Este es el identificador único de un correo electrónico enviado desde el Journey. Lo puedes obtener desde el \_Job Data View, ya que está asociado a un correo enviado.
   - **Filtrar por `JobID`**: Con la cláusula `WHERE`, filtramos por el `JobID` para obtener solo las aperturas y entregas relacionadas con ese correo en particular.
   - **De esta forma, la consulta devuelve solo los eventos asociados con ese correo enviado desde el Journey**.
   
   - **Pasos para Integrar esta Consulta en un Automation**:
   
   1. **Configura la Query Activity en Automation Studio**:
   
      - Crea una **Query Activity** en Automation Studio con la consulta SQL que proporcioné.
      - Asegúrate de usar el `JobID` correcto para filtrar solo los correos enviados desde el Journey.
   
   2. **Data Extension**:
   
      - Guarda los resultados de la consulta en una **Data Extension** donde almacenarás los registros de aperturas y entregas.
   
      **Campos sugeridos en la Data Extension**:
   
      - `EmailName` (Texto, 255 caracteres)
      - `SentDomain` (Texto, 255 caracteres)
      - `DeliveredTime` (Fecha/Hora)
      - `JobID` (Texto, 50 caracteres)
      - `ListID` (Número, 10 dígitos)
      - `BatchID` (Número, 10 dígitos)
      - `SubscriberKey` (Texto, 50 caracteres)
      - `EventDate` (Fecha y Hora)
   
   3. **Automatización**:
   
      - Configura una **Automatización** para ejecutar la **Query Activity** a intervalos regulares.
      - Esto permitirá actualizar constantemente la **Data Extension** con las aperturas y detalles del correo específico.
   
   4. **Decision Split en el Journey**:
      - Usa esta **Data Extension** en tu **Journey** para crear un **Decision Split**.
      - En el **Decision Split**, verifica si el contacto ha abierto el correo. Puedes basarte en el **`SubscriberKey`** y el **`EventDate`** de la Data Extension.
   
   - **Sincronización de la Ejecución**:
     Asegúrate de que la automatización se ejecute con suficiente frecuencia para que la información sobre las aperturas esté disponible antes de que el Journey tome decisiones. Por ejemplo:
   - Si el Journey espera 3 días después del envío del correo, la automatización debe ejecutarse al menos una vez cada día para asegurar que las aperturas más recientes sean reflejadas.
   