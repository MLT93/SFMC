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
