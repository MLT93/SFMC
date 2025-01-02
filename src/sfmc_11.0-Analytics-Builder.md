# **`Analytics Builder en Salesforce Marketing Cloud (SFMC)`**

### Introducción:

Salesforce Marketing Cloud (SFMC) integra **Analytics Builder**, una herramienta diseñada para medir y analizar el rendimiento de campañas de marketing en múltiples canales. Analytics Builder ofrece reportes detallados, paneles interactivos y análisis avanzados para tomar decisiones estratégicas basadas en datos. Es ideal para los profesionales del marketing que buscan optimizar sus estrategias y mejorar la experiencia del cliente.

---

1. ### **`Características principales de Analytics Builder:`**

   - **`¿Qué es Analytics Builder?`**

     - Analytics Builder es una solución de análisis en SFMC que permite a los usuarios:
     - **Medir el rendimiento de campañas** en múltiples canales como Email Studio, Mobile Studio y Journey Builder.
     - **Visualizar datos interactivos** mediante gráficos, tablas y métricas.
     - **Tomar decisiones informadas** utilizando insights sobre el comportamiento del cliente y la efectividad de las campañas.

   - **`Informes Estándar en Analytics Builder:`**

     SFMC incluye plantillas de informes prediseñados que cubren diversos aspectos de las campañas:

     - **Canales disponibles**: Email Studio, Journey Builder, Mobile Connect, CloudPages, entre otros.
     - **Opciones de ejecución**: Los informes pueden ejecutarse manualmente o programarse para entrega automática.
     - **Restricciones**: Informes grandes (más de 7 MB) deben exportarse mediante FTP en lugar de enviarse por correo.

   - **`Cómo crear un informe:`**

     - Accede a **Analytics Builder > Reports**.
     - Selecciona una plantilla de informe del catálogo.
     - Define parámetros como fechas, ID de campaña o JOB ID.
     - Guarda el informe o programa su envío automático.

   - **`Exportar informes:`**
     - Descarga los resultados en formatos como **.csv, .pdf, .xlsx**.
     - Configura la entrega de informes mediante correo electrónico o FTP.

   ***

2. ### **`Intelligence Reports: Informes avanzados`**

   - **`Características de Intelligence Reports:`**
     Analytics Builder incluye **Intelligence Reports**, una solución avanzada que proporciona análisis dinámicos y personalizados:

     - **Paneles interactivos** que destacan tendencias, patrones y comparativas.
     - **Tablas dinámicas** para organizar métricas y resumir datos.
     - **Filtros avanzados** para personalizar vistas y exportar resultados.

   - **`Versiones disponibles:`**
     - **Intelligence Reports**: Incluido en ediciones Pro y superiores. Ofrece paneles estándar y métricas prediseñadas.
     - **Intelligence Reports Advanced**: Versión premium con capacidades extendidas, como personalización avanzada de paneles y métricas multicanal.

   ***

3. ### **Elementos clave en Analytics Builder**

   - **`Clasificación de datos:`**
     - **Dimensiones**: Datos cualitativos, como nombre de campaña, ID de correo o nombres de usuarios.
     - **Mediciones**: Datos cuantitativos, como tasas de apertura, clics y cancelaciones.
     - **Mediciones calculadas**: Métricas derivadas, como tasas de conversión o CTR (Click Through Rate).

   ***

4. ### **Paneles prediseñados en Intelligence Reports**

   - **`Paneles principales:`**
     1. **Email Overview**: Resumen de envíos, tasas de apertura y métricas de interacción.
     2. **Email Deliveries**: Indicadores clave de entregas, devoluciones y plazos.
     3. **Email Engagement**: Análisis de clics, interacciones y cancelaciones.
     4. **Email Performance**: Visualización de embudos de conversión y métricas de rendimiento.

   ***

5. ### **Ventajas de Analytics Builder en SFMC**

   - **`Insights multicanal`**: Proporciona una visión holística del rendimiento en múltiples canales.
   - **`Decisiones basadas en datos`**: Permite identificar qué estrategias funcionan mejor.
   - **`Análisis detallado`**: Genera informes personalizados con métricas avanzadas.
   - **`Optimización de campañas`**: Facilita ajustes basados en resultados en tiempo real.

   ***

6. ### **Mejores prácticas para utilizar Analytics Builder**

   - **`Definir objetivos claros`**: Antes de crear informes o paneles, establece las preguntas clave que necesitas responder.
   - **`Evitar periodos largos`**: Limita los rangos de tiempo a menos de 6 meses para mejorar la velocidad de generación de informes.
   - **`Exportar grandes volúmenes mediante FTP`**: Esto asegura que los informes más grandes sean procesados sin interrupciones.

   ***

7. ### **Preguntas frecuentes (FAQ)**

   - **`¿Puedo programar informes?`** Sí, todos los informes estándar pueden programarse.
   - **`¿Qué canales están soportados?`** Analytics Builder cubre todos los canales habilitados en SFMC.
   - **`¿Se pueden personalizar los informes?`** Sí, utilizando Intelligence Reports Advanced.

# Guía detallada para realizar informes con Analytics Builder en Salesforce Marketing Cloud (SFMC)

1. #### **Ejercicio 1: Crear un Informe de Email**

   - **Objetivo del Ejercicio**: Generar un informe que analice los envíos de correo electrónico de los últimos tres meses e incluya métricas clave como tasas de apertura y cancelación.

   - **Pasos a Seguir**:

     1. **Accede a Analytics Builder**:
        - Inicia sesión en Salesforce Marketing Cloud.
        - Ve a la sección **Analytics Builder > Reports**.
     2. **Selecciona el tipo de reporte**:
        - Cuando entras en **Reports** por defecto se abre el **Overview**. Cambia a la pestaña **Catalog**, elige el reporte que deseas hacer en la lista que aparece y dale a **Create**.
        - Ejemplo:
          - "Email Send Report".
          - Create
          - Se abrirá una pestaña para configurar el reporte con **Date Range** (el rango de fechas para el reporte), **Culture Code** (idioma y formato del reporte en cuanto fechas, monedas, etc... es-ES, en-US) y **Period** (cómo se dividen los datos en intervalos de tiempo dentro del reporte).
     3. **Pestaña de pre-visualización**:
        - Aquí se verá un resumen del reporte antes de guardarlo, por si es necesario cambiar alguna cosa.
     4. **Guarda o Programa el Informe**:
        - Guarda el reporte. En el botón de guardado (Save), dale a la flecha de la dcha. y elige **Save As** para proporcionarle un nombre específico al reporte.
        - Ahora, al lado de **Save**, hay varios iconos. Cada icono corresponde al envío inmediato del reporte por correo, el envío del reporte al servidor FTP, la descarga del mismo, guardar una captura en Analytics Builder y la programación de envío (schedule).
        - Si eliges **Schedule**, podrás configurar la fecha y la periodicidad del envío, el formato del archivo (.XLS, .XLSX. Usa el primero siempre!) y cómo se guardará el archivo (si se envía por correo, si se deja en el FTP o si se guarda como **Activity** dentro de **Analytics Builder > Reports**).
     5. **Activa el reporte**:
        - Es el momento de activar el reporte. Ve a **Overview**, busca tu reporte y dale a **Run**.

   - **Resultados Esperados**:
     - Un informe detallado que muestre tasas de apertura, clics y cancelaciones.
     - El informe será enviado automáticamente al correo configurado.

2. #### **Ejercicio 2: Analizar Métricas en Intelligence Reports**

   - **Objetivo del Ejercicio**: Crear un reporte detallado sobre campañas de email enviadas desde Journey Builder, exportarlo como PDF y compartirlo con el equipo ejecutivo.

   - **Pasos a Seguir**:
     1. **Accede a Intelligence Reports**:
        - Antes de nada hay que asegurarse de tener los permisos para manejar los reportes inteligentes. Ve a **Setup > Users**, búscate y comprueba si tienes los permisos correspondientes.
          - La primera vez que entramos se produce un proceso automático de activación que puede tardar 12-48h.
        - Dentro de Salesforce Marketing Cloud, dirígete a **Analytics Builder > Intelligence Reports**.
     2. **Crear el reporte**:
        1. **Crea el reporte y Configúralo desde Dashboards**
        - Desde la página de inicio selecciona y filtra las necesidades del report en el panel izquierdo. Ésta forma es más fácil ya que nos muestra en tiempo real los resultados del análisis en la página.
        - **Messaging & Journeys**:
          - Aquí se selecciona el tipo de colección o fuente de los datos que se recopilarán (Email, WhatsApp, Push, etc...).
          - Dentro de cada apartado aparecerán algunos filtros (Por ejemplo, en el apartado de Email aparecerán los siguientes: Email Deliveries, Email Engagement, Email Performance y Journey Performance by Email).
          - Luego filtramos los datos según nuestras necesidades o los requerimientos que tengamos (elegimos la BU, las fechas, los tipos de filtros buscados, etc...).
          - Para guardar, descargar o configurar un envío programado (Schedule), arriba a la dcha hay un icono de edición, otro con una flecha hacia arriba y otro con 3 puntitos. Elegimos el de la flecha que corresponde a **Share**.
            - **Share**: Nos permite elegir cómo enviaremos ese reporte.
          - Ahora programamos cómo se compartirá.
            - Si elegimos **Scheduled Reports** nos enviará a la página descrita en el siguiente punto.
        2. **Crea y Configura el Reporte desde Reports**:
        - Ve a **Reports** en el menú principal y elige **Create Report**:
        - **General**:
          - Elige el nombre, el tipo de archivo (.PDF, .XSL, etc...), si va a ser comprimido y una descripción si lo prefieres.
        - **Configuration**:
          - A continuación elegimos el tipo de colección que será (Email, Push, SMS, In-App Messages, WhatsApps u Overviews). Es la fuente de los datos que se recopilarán.
          - Elige el tipo de dashboard que se mostrará. Es lo que se mostrará en el reporte.
          - Si aparece Page Layout significa que podrá haber más de una página y nos pide que elijamos si lo queremos mostrar todo en una página o en varias.
        - **Advanced Report Settings**:
          - Elige el nombre del archivo.
          - Elige si será encriptado (en caso de datos sensibles).
        - **Report Scheduling**:
          - Activa el reporte programado.
          - Incluir o menos los envíos de unsubscribes.
          - Elegir la frecuencia de entrega el reporte y la hora.
          - Seleccionar dónde se guardará el archivo o si se envía por correo.
        - **Guarda**.
          - Selecciona **Save** y controla la configuración.
          - Envíalo con **Run Now**.
   - **Resultados Esperados**:
     - Un reporte profesional y visualmente claro, enfocado en las métricas de campañas de Journey Builder.
     - El reporte será útil para la toma de decisiones estratégicas por parte del equipo ejecutivo.

# **Guía para Crear un Reporte Personalizado en Salesforce Marketing Cloud con Data Views, SQL y Automations**

   En **Salesforce Marketing Cloud (SFMC)**, la funcionalidad de **Reports** no permite la creación directa de reportes personalizados desde la interfaz de usuario estándar. Sin embargo, puedes personalizar la generación de datos a través de **Data Views** en combinación con **SQL** y **Automation Studio** para luego analizar los resultados como un "reporte custom".

1. #### **Define los Requisitos del Reporte**

   - Determina qué métricas necesitas (por ejemplo, tasas de apertura, clics, unsubscribes).
   - Especifica el rango de fechas o segmentos de audiencia relevantes.

2. #### **Utiliza Data Views para Consultar Datos**

   - Los **Data Views** son tablas predefinidas en SFMC que almacenan datos sobre la actividad de marketing (envíos, aperturas, clics, bajas, etc.).

   - Tablas comunes:

     - **\_Sent**: Detalles de los emails enviados.
     - **\_Open**: Registros de emails abiertos.
     - **\_Click**: Datos de clics realizados.
     - **\_Unsubscribe**: Información sobre bajas.

   - Aquí hay un ejemplo para calcular envíos, aperturas, clics y bajas para los últimos 3 meses:

   ```sql
   SELECT
     s.JobID,
     s.SubscriberKey,
     s.EventDate AS SentDate,
     COUNT(s.SubscriberKey) AS TotalSent,
     COUNT(o.SubscriberKey) AS TotalOpened,
     COUNT(c.SubscriberKey) AS TotalClicked,
     COUNT(u.SubscriberKey) AS TotalUnsubscribed
   FROM
     _Sent s
   LEFT JOIN _Open o ON s.JobID = o.JobID AND s.SubscriberKey = o.SubscriberKey
   LEFT JOIN _Click c ON s.JobID = c.JobID AND s.SubscriberKey = c.SubscriberKey
   LEFT JOIN _Unsubscribe u ON s.JobID = u.JobID AND s.SubscriberKey = u.SubscriberKey
   WHERE
     s.EventDate >= DATEADD(month, -3, GETDATE())
   GROUP BY
     s.JobID, s.SubscriberKey, s.EventDate
   ```

3. #### **Configura una Actividad SQL en Automation Studio**

   - Ve a **Automation Studio**.
   - Crea una nueva actividad de SQL:
     - **Nombre**: "Reporte Personalizado"
     - **Query**: Pega el SQL definido en el paso anterior.
   - Configura el destino:
     - Crea una nueva **Data Extension** para almacenar los resultados.
     - Define las columnas con los mismos nombres y tipos de datos que los campos seleccionados en el SQL.

4. #### **Ejecuta la Consulta y Exporta los Resultados**
   - Ejecuta la automatización manualmente o prográmala para que se ejecute regularmente.
   - Una vez generados los datos, ve a la Data Extension de destino.
   - Exporta los datos:
     - Formato: **CSV** o **XLSX**.
     - Usa estos datos para análisis en herramientas externas como Excel o Google Sheets.

5. #### **Crea Visualizaciones y Análisis**

   - Usa herramientas externas para personalizar gráficos y análisis, como:
     - **Excel**: Fórmulas, tablas dinámicas y gráficos.
     - **Google Sheets**: Fórmulas colaborativas y visualizaciones en línea.
     - **Tableau**: Integración con SFMC para reportes avanzados.

6. #### **Conclusión**
   - Si bien no es posible crear reportes personalizados directamente desde **Reports**, el uso de **Data Views**, **SQL**, y **Automation Studio** te da control total sobre los datos y la personalización de reportes. Para una experiencia aún más avanzada, considera utilizar herramientas externas como Tableau para conectar directamente con Marketing Cloud y analizar los datos en tiempo real.
