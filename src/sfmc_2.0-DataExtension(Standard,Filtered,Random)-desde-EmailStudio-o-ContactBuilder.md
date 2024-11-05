# **`Data Extension (Standard, Filtered, Random) desde Contact Builder y Data Extension desde Email Studio en Salesforce`**

#### Introducción:

Las Data Extensions en Salesforce son tablas de bases de datos que permiten almacenar y gestionar datos de clientes de manera estructurada. Estas tablas pueden contener diversos tipos de información, como datos demográficos, comportamientos de compra y preferencias de los clientes. [Import Data into a Data Extension in Salesforce Marketing Cloud](https://www.youtube.com/watch?v=6HQjEEB-hcs).

---

1. ### **`Importancia de las Data Extensions`**:

   En el contexto del marketing digital, las Data Extensions son fundamentales para personalizar las campañas y mejorar la segmentación. Permiten a las empresas almacenar grandes volúmenes de datos y acceder a ellos de manera eficiente para crear experiencias de cliente más relevantes y efectivas. [How to Learn Salesforce Marketing Cloud Email Studio](https://www.youtube.com/watch?v=q4D3behg-kQ).

   ***

2. ### **`Sintaxis y Creación de Data Extensions`**:

   Las Data Extensions se crean definiendo una estructura de tabla con campos específicos. Cada campo tiene un tipo de dato asociado, como texto, número, fecha, etc. Veamos un ejemplo:

   ```sql
   CREATE TABLE Clientes (
     ID INT PRIMARY KEY,
     Nombre VARCHAR(50),
     Email VARCHAR(100),
     FechaRegistro DATE
   );
   ```

   ***

3. ### **`Data Extensions desde Contact Builder`**:

   Contact Builder es una herramienta en Salesforce Marketing Cloud que permite gestionar y vincular datos de contacto. Aquí se pueden crear Data Extensions para almacenar información detallada de los contactos. [Salesforce Marketing Cloud Data Extension Demo](https://www.youtube.com/watch?v=cO15aIKP-xo).

   - **`Creación de Data Extensions`**:

     Para crear una Data Extension en Contact Builder, sigue estos pasos:

     1. Accede a **Audience Builder**.
     2. Haz clic en **Contact Builder**.
     3. En el header de la página encontrarás un navegador con las siguientes opciones:
        - **Data Designer**
        - **All Contacts**
        - **Data Source**
        - **Data Extension**
        - **Imports**
        - **Contacts Configuration**
     4. Haz clic en **Data Extensions**.
     5. Haz clic en **Create**.
     6. Selecciona el método de creación de la Data Extension.
     7. Introduce un nombre para la Data Extension.
     8. Nota la clave externa proporcionada en el campo **External Key** (No hace falta que escribas nada).
     9. Introduce una breve descripción de la Data Extension.
     10. Haz clic en **Change Location** y elige la ubicación para almacenar la Data Extension.
     11. Props de envío y testeo:
         1. **Is Sendable**:
         - **Definición**: Determina si la Data Extension puede ser utilizada para enviar mensajes reales a ella misma.
         1. **Is Testable**:
            - **Definición**: Permite que se utilice para enviar mensajes de prueba si la opción **Is Sendable** está seleccionada, lo cual es útil para verificar que los mensajes se envían correctamente antes de realizar un envío masivo.
     12. Completa la información en la sección de propiedades y haz clic en **Next**. [Create a Data Extension in Email Studio (Enhanced) - Salesforce](https://help.salesforce.com/s/articleView?id=sf.mc_es_create_data_extension.htm&language=en_US&type=5).

   ***

4. ### **`Data Extensions desde Email Studio`**:

   Email Studio es otra herramienta en Salesforce Marketing Cloud que se utiliza principalmente para gestionar campañas de correo electrónico. Aquí también se pueden crear y gestionar las DE. [Data Extensions in Email Studio](https://www.emizentech.com/blog/data-extension-in-email-studio-salesforce-marketing-cloud.html).

   `** Es lo mismo que Contact Builder, simplemente tiene la posibilidad de crear filtros entre tablas más rapidamente. Sin embargo, hay que tener en cuenta que utilizaremos T-SQL para generar esos filtros entre tablas.
   Esto es útil cuando el cliente es "funcional" y posee poco o ningún conocimiento técnico`.

   - **`Creación de Data Extensions`**:

     Para crear una Data Extension en Email Studio, sigue estos pasos:

     1. Pasa el cursor sobre **Subscribers**.
     2. Haz clic en **Data Extensions**.
     3. Haz clic en el botón **Create**.
     4. Selecciona **Standard Data Extension**.
     5. Haz clic en **OK**.
     6. Completa la información en la sección de propiedades, incluyendo el método de creación y las configuraciones de retención si es necesario.
     7. Haz clic en **Next** y finaliza la configuración. [Email Creation Trailhead](https://trailhead.salesforce.com/es/content/learn/modules/email-creation-and-sending/import-subscriber-data).

   ***

5. ### **`Importación y Exportación de Datos`**:

   Salesforce permite importar datos a las Data Extensions desde diversas fuentes, como archivos CSV, bases de datos externas, o integraciones API. También es posible exportar datos para análisis o migración [Create a Data Extension in Contact Builder - Salesforce](https://help.salesforce.com/s/articleView?id=sf.mc_cab_create_a_new_data_extension.htm&language=en_US&type=5).

   ```sql
   /* Ejemplo de importación de datos desde un archivo CSV */
   BULK INSERT Clientes
   FROM 'ruta/al/archivo.csv'
   WITH (
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   );
   ```

   `** Para trabajar con SQL se hace a través de automation, hay que tener en cuenta este punto`.

   - **`Importar datos desde archivos o lista de contactos`**:

     1. Desde el menú principal sigue la ruta Audience Builder > Contact Builder > Data Extension, selecciona la DE que deseas usar y haz click en **Import**.
     2. Selecciona el método de importación **Import Into Data Extension** o **Create Import Definition**
     3. Puedes importar datos desde un archivo CSV, TXT, o directamente desde una lista de contactos.
     4. Selecciona el archivo que deseas importar.
     5. Mapea las columnas del archivo a los campos de la Data Extension. Recuerda que el archivo importado debe poseer los mismos campos que tu DE.
     6. Configura las opciones de importación, como la acción a realizar en caso de duplicados (por ejemplo, sobrescribir o actualizar registros existentes).

   - **`Revisar y Ejecutar`**:

     1. Revisa la configuración de la importación para asegurarte de que todo esté correcto.
     2. Haz clic en **Start Import** para comenzar el proceso.

   - **`Verificar la Importación`**:
     1. Una vez completada la importación, verifica que los datos se hayan cargado correctamente revisando la Data Extension.

   ***

6. ### **`Crear un archivo CSV`**:

   - **`Usando Excel`**:

     1. Abre Microsoft Excel.
     2. Introduce los datos en las celdas correspondientes.
     3. Una vez que hayas terminado, ve a **Archivo** > **Guardar como**.
     4. Selecciona la ubicación donde deseas guardar el archivo.
     5. En el campo **Tipo**, selecciona **CSV (delimitado por comas) (\*.csv)**.
     6. Haz clic en **Guardar**.

   - **`Usando Google Sheets`**:
     1. Abre Google Sheets y crea una nueva hoja de cálculo.
     2. Introduce los datos en las celdas correspondientes.
     3. Ve a **Archivo** > **Descargar** > **Valores separados por comas (.csv)**.

   ```s
   Nombre,Apellido,Email
   Juan,Pérez,juan.perez@example.com
   María,García,maria.garcia@example.com
   ```

   ***

7. ### **`Crear un archivo TXT`**:

   - **`Usando un Editor de Texto`**:
     1. Abre un editor de texto como Notepad (Windows), TextEdit (Mac) o Gedit(Linux).
     2. Introduce los datos, separando cada campo con una coma o tabulación, dependiendo de tus necesidades.
     3. Ve a **Archivo** > **Guardar como**.
     4. Selecciona la ubicación donde deseas guardar el archivo.
     5. En el campo **Tipo**, selecciona **Archivo de texto (\*.txt)**.
     6. Haz clic en **Guardar**.

   ```s
   Nombre,Apellido,Email
   Juan,Pérez,juan.perez@example.com
   María,García,maria.garcia@example.com
   ```

   ***

8. ### **`Segmentación y Personalización`**:

   Las Data Extensions son cruciales para la segmentación de audiencias. Permiten crear segmentos basados en criterios como comportamiento de compra, interacciones previas, y datos demográficos. Esto facilita la personalización de campañas de marketing.

   ```sql
   SELECT * FROM Clientes
   WHERE FechaRegistro > '2023-01-01';
   ```

   ***

9. ### **`Automatización y Flujos de Trabajo`**:

   Las Data Extensions se integran con herramientas de automatización para ejecutar flujos de trabajo basados en eventos o condiciones específicas. Esto incluye el envío de correos electrónicos automatizados, actualizaciones de datos en tiempo real, y más [Data Extensions in Contact Builder - Salesforce](https://help.salesforce.com/s/articleView?id=sf.mc_cab_data_extensions.htm&language=en_US&type=5).

   ```sql
   /* Ejemplo de actualización automatizada */
   UPDATE Clientes
   SET Estado = 'Activo'
   WHERE FechaRegistro > '2023-01-01';
   ```

   ***

10. ### **`Consideraciones de Seguridad y Privacidad`**:

    Es crucial manejar las Data Extensions con cuidado para proteger la privacidad de los datos de los clientes. Esto incluye implementar medidas de seguridad como el cifrado de datos, controles de acceso, y cumplimiento con regulaciones como GDPR.

    ***

11. ### **`Data Extensions (Standard, Filtered, Random) desde Email Studio`**:

    En Email Studio, también se pueden crear y gestionar diferentes tipos de Data Extensions. Aquí se explican los tres tipos principales:

    - **`Standard Data Extension`**:

      - Es el tipo más común y versátil de Data Extension.
      - Permite definir una estructura personalizada con campos y tipos de datos específicos.
      - Se usa para almacenar datos de suscriptores, información de transacciones, o cualquier otro tipo de datos relacionados con el marketing por correo electrónico.
      - Para crear:
        1. Ve a `Email Studio > Email > Subscribers > Data Extensions`.
        2. Haz clic en **Create**.
        3. Selecciona **Standard Data Extension**.
        4. Define los campos y propiedades según tus necesidades.

    - **`Filtered Data Extension`**:

      - Se crea a partir de una Data Extension existente, aplicando criterios de filtro.
      - Útil para segmentar audiencias basadas en criterios específicos sin duplicar datos.
      - Se actualiza automáticamente cuando cambian los datos en la DE de origen.
      - Para crear:
        1. En `Email Studio > Email > Subscribers > Data Extensions`, selecciona la DE de origen.
        2. Haz clic en **Create**.
        3. Selecciona **Filtered Extension**.
        4. Define los criterios de filtro y configura las opciones de actualización.

    - **`Random Data Extension`**:

      - Se utiliza para crear una muestra aleatoria de registros a partir de una DE existente.
      - Ideal para pruebas A/B o para crear grupos de control en campañas.
      - Para crear:
        1. En `Email Studio > Email > Subscribers > Data Extensions`, selecciona la DE de origen.
        2. Haz clic en **Create**.
        3. Selecciona **Random Data Extension**.
        4. Especifica el porcentaje o número de registros a incluir aleatoriamente en una DE que se creará automáticamente allá donde elijas.

    Estas opciones en Email Studio proporcionan flexibilidad para manejar y segmentar datos de manera eficiente, permitiendo a los marketers crear campañas más dirigidas y efectivas.

12. ### **`Diferencias clave entre crear DE en Contact Builder vs Email Studio`**:

    - **`Ubicación`**: Contact Builder ofrece una vista más amplia de la estructura de datos, mientras que Email Studio se centra en las necesidades de email marketing.
    - **`Integración`**: Las DE creadas en Contact Builder están más integradas con otras herramientas de Salesforce Marketing Cloud.
    - **`Funcionalidad`**: Email Studio puede ofrecer opciones más rápidas para crear DE filtradas o aleatorias específicamente para campañas de email.
    - **`Visualización`**: Contact Builder proporciona una mejor visualización de las relaciones entre diferentes DE y otros datos de contacto.

13. ### **`En resumen`**:

    Las Data Extensions son herramientas esenciales para el almacenamiento y gestión de datos en Salesforce. Su correcta implementación y uso permiten a las empresas personalizar sus campañas, mejorar la segmentación, y crear experiencias de cliente más efectivas y relevantes.
# Guía detallada para gestionar Data Extensions & avance sobre Grupos de Atributos en Data Designer con Salesforce Marketing Cloud (SFMC):

1. #### **Crear una Data Extension (DE) y subir datos de forma manual**:

   - **Accede a Contact Builder**:

     - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
     - Dirígete a **Audience Builder > Contact Builder > Data Extensions**.

   - **Crear la Data Extension**:

     - Haz clic en **Create**.
     - Nombra la DE y define los campos necesarios, asegurándote de incluir `ID_CLIENTE` como la **Primary Key** (PK).

   - **Subir los datos**:

     - Selecciona la DE creada y haz clic en **Import**.
     - Sube el archivo adjunto en el ejercicio (Formato .CSV Excel). Recuerda que también se puede subir con formato .TXT.
     - Mapea los campos del archivo con los campos de la DE.
     - Completa la importación y verifica que los datos se han subido correctamente.

   - **Verificar la importación**:
     - La forma más fácil de verificar los registros y los campos es desde **Email Studio > Email > Subscribers > Data Extensions** porque da información más detallada.
     - ¿Porqué si el archivo subido posee 11 registros ha subido unicamente 10?
     - Si en el fichero hay 11 registros y solo se han subido 10 es debido a duplicados en el campo `ID_CLIENTE`, ya que es la clave primaria y no permite duplicados. En pocas palabras, toma el último registro subido cuando se duplica la PK.

2. #### **Crear una Filtered Data Extension**:

   - **Crear la DE filtrada**:
     - En Contact Builder (Desde Audience Builder), selecciona la DE original.
     - Haz clic en **Filter** y crea un filtro para mostrar solo el `ID_CLIENTE` igual a 1.
     - Guarda la DE filtrada con un nombre adecuado.

3. #### **Crear una Random Data Extension**:

   - **Crear la DE Random**:
     - Ve a **Email Studio > Subscribers > Data Extensions**.
     - Haz clic en **Create** (Crear).
     - Haz clic en **Random Data Extension**.
     - Selecciona la DE base (La que será la "source").
     - Dale a **Add Data Extension**.
     - Define el porcentaje de registros (50%).
     - Créala con **Save & Build** (Guardar y Crear).
     - Reinicia SFMC (Logout & Login).

4. #### **Crear una DE con campos específicos y añadir un registro manualmente**:

   - **Crear la DE**:

     - Ve a **Audience Builder > Contact Builder > Data Extensions**.
     - Haz clic **Create** (Crear) y desarrolla los pasos.
     - En la parte de los campos: `ID_CLIENTE`, `FECHA_NACIMIENTO`, `CIUDAD`, `EDAD`.
     - Guarda la DE.

   - **Añadir un registro manualmente**:
     - Siempre desde la ruta **Audience Builder > Contact Builder > Data Extensions**.
     - Entra en la DE creada y busca **Records**.
     - Haz clic en **Add Record** y añade un registro con datos inventados.

5. #### **Crear un grupo de atributos y vincular la DE (EXTRA)**:

   Esto es como crear **Foreign Keys** entre tablas. Sirve para relacionar tablas entre sí.

   - **Crear el grupo de atributos**:

     - Desde **Audience Builder > Contact Builder**, ve a **Data Designer** y selecciona **Create Attribute Groups**.
     - Crea un nuevo grupo llamado `BXPERT_DATA_TuNombre`, elige un icono y dale a **Create** (Crear).

   - **Vincular la DE**:
     - Dentro del grupo de atributos, selecciona **Link Data Extension**.
     - Vincula la DE creada anteriormente al grupo de atributos.
     - Recuerda que para relacionar correctamente los campos deben tener el mismo **Data Type**.

6. ### Resumen de Pasos

   - **Crear y subir datos a una DE**.
   - **Crear una DE filtrada**.
   - **Crear una DE Random**.
   - **Crear una DE con campos específicos y añadir un registro manualmente**.
   - **Crear un grupo de atributos y vincular la DE**.
