# **`¿Cómo realizar la migración de una Data Extension desde una Business Unit a otra?`**

#### Introducción:

Migrar una **Data Extension** (DE) de una **Business Unit (BU)** a otra en **Salesforce Marketing Cloud (SFMC)** implica exportar los datos desde la BU de origen, crear una nueva DE en la BU de destino y luego importar los datos allí. A continuación, se detalla paso a paso cómo realizar este proceso con un ejemplo práctico.

---

1. ### **`Accede a la BU de Origen (BU Ventas)`**:

   - Inicia sesión en tu cuenta de **Salesforce Marketing Cloud**.
   - En el menú superior derecho, cambia a la **Business Unit de Ventas**.
   - Navega a **Email Studio** o **Contact Builder** dependiendo de dónde se encuentre la **Data Extension (DE)** que quieres migrar.
   - En este caso, la DE llamada **"ClientesVIP"** contiene los datos de los clientes prioritarios de ventas.

   ***

2. ### **`Exportar los Datos de la Data Extension "ClientesVIP"`**:

   - **`Selecciona la Data Extension "ClientesVIP"`**:

     - En **Contact Builder**, selecciona la **Data Extension** que quieres migrar, que en este ejemplo es "ClientesVIP".
     - Haz clic en la opción **Export**.

   - **`Exporta los Datos a un Archivo .CSV`**:
     - Escoge exportar los datos en formato **.CSV**, un formato estándar para manipular datos estructurados y separados por coma.
     - Guarda el archivo **ClientesVIP.csv** en tu computadora o, si lo prefieres, en un servidor **FTP** previamente configurado. Se aconseja la exportación al PC, es más rápido.

   ***

3. ### **`Accede a la BU de Destino (BU Marketing)`**:

   - En el menú superior de SFMC (al lado del perfil de usuario), cambia a la **Business Unit** de destino.
   - De nuevo, navega a **Email Studio** o **Audience Builder** donde vamos a crear una nueva **Data Extension** para almacenar los datos exportados.

   ***

4. ### **`Crear una Nueva Data Extension en la BU de Marketing`**:

   - **`Ve a la Sección de Data Extensions`**:

     - En **Audience Builder > Contact Builder**, selecciona la opción **Data Extensions**.
     - Haz clic en **Create** para crear una nueva DE.

   - **`Define la Nueva Data Extension`**:
     - Nombra la nueva DE como **"ClientesVIP_Marketing"**.
     - Asegúrate de que los **campos** de la nueva DE coincidan exactamente con los de la DE original:
       - Campo 1: **Nombre** (Text, 50)
       - Campo 2: **Correo Electrónico** (EmailAddress)
       - Campo 3: **Fecha de Registro** (Date)
     - Configura las propiedades de envío seleccionando **Is Sendable**, si planeas usar esta DE para enviar correos electrónicos en la BU de destino.

   ***

5. ### **`Importar los Datos Exportados a la Nueva Data Extension`**:

   - **`Sube el Archivo .CSV Exportado`**:

     - En **Audience Builder > Contact Builder** dentro de la DE de destino, selecciona la opción **Import** para cargar los datos del archivo **ClientesVIP.csv** que exportaste desde la BU de Ventas.
     - Mapea correctamente los campos de la DE con los datos del archivo .CSV. Por ejemplo:
       - **Nombre** en el .CSV con **Nombre** en la DE.
       - **Correo Electrónico** con **Correo Electrónico**.
       - **Fecha de Registro** con **Fecha de Registro**.

   - **`Verifica la Importación`**:
     - Asegúrate de que los datos se han importado correctamente revisando algunos registros en la **Data Extension "ClientesVIP_Marketing"**.
     - Confirma que no haya errores en el mapeo de los datos.

   ***

6. ### **`Automatización del Proceso (Opcional)`**:

   - **`Configura una Automatización para Transferencias Recurrentes`**:
     - Si necesitas realizar esta migración con frecuencia (por ejemplo, mover datos nuevos semanalmente), puedes automatizar este proceso usando **Automation Studio**.
     - Configura una automatización para que exporte los datos automáticamente de la BU de Ventas, los suba a un servidor **FTP**, y luego los importe de manera automática en la BU de Marketing.
     - Define una programación temporal (diaria, semanal) para que esta automatización se ejecute sin intervención manual.

   ***

7. ### **`Consideraciones Finales`**:

   - **Integridad de los Datos**: Es importante verificar que todos los datos se transfirieron correctamente y que no hubo pérdida o corrupción de información.
   - **Permisos y Acceso**: Asegúrate de tener los permisos adecuados para exportar e importar datos entre Business Units.
   - **Automatización**: Si el proceso es recurrente, la configuración de una automatización mejorará la eficiencia y reducirá el riesgo de errores.

   ***

8. ### **Resumen del Ejemplo**:

   - **DE Origen**: **ClientesVIP** (BU de Ventas)
   - **DE Destino**: **ClientesVIP_Marketing** (BU de Marketing)
   - **Proceso**: Exportar los datos de la DE de origen, crear una nueva DE en la BU de destino, e importar los datos a esta nueva DE.
   - **Opcional**: Configuración de una **Automation** para transferencias recurrentes.
   
   Este procedimiento permite migrar una Data Extension de una BU a otra de manera eficiente y segura, asegurando que los datos puedan ser utilizados en campañas dentro de la nueva Business Unit.

# Guía para mover una Data Extension entre Business Units en Salesforce Marketing Cloud (SFMC):

1. #### **Accede a la BU de Origen en SFMC**:

   - Inicia sesión en tu cuenta de **Salesforce Marketing Cloud**.
   - Dirígete a la **Business Unit** (BU) donde se encuentra la Data Extension que deseas mover.
   - Ve a **Email Studio** o **Contact Builder** y localiza la **Data Extension** que quieres transferir.

2. #### **Exportar los Datos de la Data Extension**:

   - **Selecciona la Data Extension**:
     - Accede a la **Data Extension** y abre el menú de acciones.
     - Haz clic en **Export Data** para extraer los datos.

   - **Exporta los Datos a un Archivo**:
     - Exporta la Data Extension a un archivo, preferiblemente en formato **CSV**.
     - Guarda el archivo en tu dispositivo local o en un servidor **FTP** si tienes configurado uno.
   
3. #### **Accede a la BU de Destino**:

   - Cambia a la **Business Unit** de destino.
   - Dirígete a **Email Studio** o **Audience Builder** en esta nueva BU.

4. #### **Crear una Nueva Data Extension en la BU de Destino**:

   - **Ve a la Sección de Data Extensions**:
     - Desde **Email Studio** o **Audience Builder**, navega hasta la opción **Data Extensions**.
     - Haz clic en **Create** para crear una nueva Data Extension.

   - **Define la Nueva Data Extension**:
     - Crea la Data Extension con **exactamente la misma estructura** que la de la BU de origen (nombres de campos, tipos de datos, longitudes, etc.).
     - Asegúrate de configurar correctamente las propiedades de envío si la Data Extension será utilizada para envíos.

5. #### **Importar los Datos a la Nueva Data Extension**:

   - **Sube el Archivo Exportado**:
     - Selecciona la opción **Import Data** para cargar los datos exportados en la nueva Data Extension.
     - Sube el archivo CSV y mapea correctamente los campos de la Data Extension con los del archivo.

   - **Verifica la Importación**:
     - Revisa los datos importados en la nueva Data Extension para asegurarte de que la importación fue exitosa y los datos están completos.

6. #### **Automatizar el Proceso (Opcional)**:

   - **Utiliza Automation Studio para Transferencias Recurrentes**:
     - Si necesitas transferir datos de manera recurrente entre BUs, puedes configurar una **Automation** para exportar los datos a un servidor **FTP** y luego importarlos automáticamente en la BU de destino.
     - Esto permite automatizar el proceso de movimiento de datos de una BU a otra sin necesidad de hacerlo manualmente cada vez.

7. #### **Consideraciones Finales**:

   - **Permisos**: Asegúrate de tener los permisos necesarios para exportar e importar datos en ambas BUs.
   - **Integridad de Datos**: Verifica que los datos no se pierdan durante el proceso de exportación e importación.
   - **Automatización**: Si el movimiento de datos es frecuente, considera crear procesos automatizados para mejorar la eficiencia.

Este proceso garantiza que puedas mover Data Extensions entre Business Units de manera segura y estructurada, manteniendo la integridad de los datos y minimizando errores en el traslado.
