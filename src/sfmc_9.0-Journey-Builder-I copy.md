# **`Journey Builder y su enfoque en la automatización del marketing`**

#### Introducción:

Journey Builder es un componente clave de Salesforce Marketing Cloud, diseñado para orquestar campañas de marketing automatizadas y multicanal que personalizan las interacciones con los clientes. Su capacidad para adaptarse en tiempo real a las acciones de los usuarios la convierte en una herramienta esencial para maximizar el impacto de las estrategias de marketing. Desde el envío de correos electrónicos hasta notificaciones push y mensajes SMS, Journey Builder guía a los clientes a través de trayectorias personalizadas que responden a eventos como compras, clics en enlaces o interacciones en aplicaciones móviles.

---

1. ### **`¿Qué es Journey Builder y cuál es su propósito?`**:

   - **`Definición`**:
     Journey Builder permite construir recorridos dinámicos que conectan a los clientes con las marcas en momentos clave de su experiencia. Es una herramienta diseñada para optimizar las campañas mediante mensajes relevantes enviados en el momento y lugar adecuados.
   - **`Componentes clave`**:

     - **Automatización**: Reduce la intervención manual, permitiendo que los flujos de trabajo se ejecuten automáticamente según las condiciones predefinidas.
     - **Multicanal**: Gestiona la comunicación a través de correos electrónicos, SMS, aplicaciones, notificaciones push y anuncios digitales.
     - **Respuesta dinámica**: Cambia el curso del journey en función de eventos en tiempo real, como aperturas de correos o interacciones de compra.

   - **`Objetivo principal`**:
     Proveer experiencias consistentes y personalizadas que mejoren el compromiso del cliente a lo largo de todo el ciclo de vida.

   ***

2. ### **`Tipos de Journey y cuándo utilizarlos`**:

   - **`Multi-Step Journey`**:
     Diseñado para procesos complejos con múltiples pasos y acciones. Es ideal para:

     - **Retención de clientes**: Campañas que buscan reenganchar a clientes inactivos.
     - **Promociones por ciclos de vida**: Como recordatorios de renovación o cumpleaños.

     **Ejemplo práctico**:Una campaña de renovación de contrato que envía recordatorios 30, 15 y 5 días antes de la fecha límite.

   - **`Transactional Send Journey`**:
     Centrado en envíos únicos basados en interacciones puntuales del cliente, como:

     - Confirmaciones de compra.
     - Cambios de contraseña o actualizaciones de perfil.

     **Ejemplo práctico**:Confirmar la recepción de una orden en un eCommerce inmediatamente después de la compra.

   - **`Single Send Journey`**:
     Pensado para comunicaciones simples y directas, como:

     - Envío de promociones únicas.
     - Notificaciones de eventos.

     **Ejemplo práctico**:
     Informar a todos los clientes de una oferta especial limitada a través de un solo correo.

   ***

3. ### **`Actividades dentro de Journey Builder`**:

   - **`Actividades de Entrada`**:
     Son el punto de inicio del journey y determinan qué contactos ingresan en el flujo. Cada journey permite una única fuente de entrada.

     - **Opciones disponibles**:

       - **Formularios de Cloud Pages**: Ideales para eventos como sorteos o registros.
       - **Eventos de Service Cloud**: Como la creación de casos de soporte.
       - **Inyección vía API**: Habilita la entrada en tiempo real, como en casos de abandono de carrito.

       **Ejemplo práctico de API**:
       Una API que registra los datos de clientes que abandonaron su carrito, inyectándolos en un journey para enviarles un correo recordatorio.

     ```json
     {
       "eventDefinitionKey": "AbandonoCarrito",
       "data": {
         "email": "cliente@ejemplo.com",
         "nombre": "Juan Pérez",
         "carrito": [
           { "producto": "Laptop", "precio": 1200 },
           { "producto": "Mouse", "precio": 25 }
         ]
       }
     }
     ```

   - **`Actividades de Decisión`**:
     Dividen los flujos según criterios predefinidos, como atributos o comportamientos del cliente.

     - **Splits**:

       - **Engagement Split**: Clasifica a los contactos según interacciones como clics o aperturas.
       - **Decision Split**: Segmenta según atributos específicos como la ubicación o edad.

       **Ejemplo práctico**:
       Dividir clientes según su preferencia de idioma (español o inglés) para enviarles contenido personalizado.

   - **`Actividades de Mensajería`**:

     - Envío de correos electrónicos creados en Journey Builder o seleccionados desde Content Builder.
     - Notificaciones push y SMS para interacciones móviles.

     **Nota**: Las notificaciones push requieren MobilePush SDK para realizar un seguimiento de los eventos en aplicaciones.

   - **`Einstein Activities`**:
     Usan inteligencia artificial para mejorar la experiencia del journey.

     - **Einstein STO**: Calcula el mejor momento para enviar mensajes, aumentando las tasas de apertura.
     - **Einstein Scoring Split**: Segmenta contactos por probabilidad de realizar acciones específicas.

     **Ejemplo práctico**:
     Enviar correos promocionales en las horas con mayor probabilidad de apertura según el historial de cada cliente.

   ***

4. ### **`Optimización y seguimiento de Journey Builder`**:

   - **`Metas y criterios de salida`**:

     - Las metas permiten medir el éxito de un journey (por ejemplo, completar una compra).
     - Los criterios de salida eliminan contactos que cumplen condiciones específicas, evitando la redundancia.

   - **`History & Audit Logs`**:
     Proporcionan un registro detallado de todas las interacciones en el journey, facilitando la solución de problemas.
   - **`Pruebas y validación`**:
     Journey Builder incluye un modo de prueba que simula envíos con hasta 10 contactos seleccionados para garantizar que los flujos estén configurados correctamente.

   ***

5. ### **`Caso práctico detallado: Automatización de cumpleaños`**:

   - **`Requerimientos`**:

     - Una **Data Extension (DE)** que almacene la información básica del cliente, incluyendo la fecha de nacimiento, género y nombre.
     - Configuración de filtros en SQL para calcular la edad usando `DATEDIFF`.

     ```sql
     SELECT
         SubscriberKey,
         FirstName,
         Gender,
         DATEDIFF(YEAR, BirthDate, GETDATE()) AS Age
     FROM DE_Customers
     WHERE Status = 'Active'
     ```

   - **`Configuración del Journey`**:

     - Fuente de entrada: Data Extension con contactos.
     - Actividades:
       - **Decision Split**: Segmenta clientes según género (Hombre/Mujer).
       - **Engagement Split**: Divide según su nivel de interacción previa.

   - **`Resultado esperado`**:
     Cada cliente recibe un mensaje personalizado en su cumpleaños, adaptado a su perfil, incrementando la lealtad y mejorando la experiencia del cliente.

   ***

6. ### **`Journeys con API de Salesforce`**:

   Para activar un **Journey** en **Salesforce Marketing Cloud** cuando se realiza un `POST` a la **API** para agregar usuarios a la **Data Extension** de entrada, puedes configurar un **API Entry Event** en el Journey. Este tipo de evento permite que el Journey se dispare automáticamente cuando un contacto se agrega a la **Data Extension** mediante una llamada `POST` a la API. Aquí te explico cómo configurarlo paso a paso:

   - **`Crear el Journey con API Entry Event`**

     1. **Accede a Journey Builder**:

        - Entra en Salesforce Marketing Cloud y accede a **Journey Builder > Journey Builder** desde el menú principal.
        - Crea un nuevo Journey haciendo clic en **Create New Journey**.

     2. **Selecciona el tipo de Entry Event**:

        - En el paso de configuración del Journey, selecciona **API Event** como **Entry Source**.
        - Un **API Entry Event** te permitirá inyectar contactos en el Journey a través de la API de Marketing Cloud.
        - Asocia el **EventDefinitionKey** del API Entry Event con el Journey.

     3. **Configura las actividades dentro del Journey**:

        - Después de configurar el Entry Event, puedes agregar las actividades que deseas realizar para los contactos que ingresen al Journey, como el **Decision Split**, **Send Email**, etc.

   - **`Configurar el Trigger API Entry Event`**

     - **Obtener el EventDefinitionKey**:
       - Una vez que el **API Entry Event** esté configurado en el Journey, necesitas obtener el **EventDefinitionKey**, que es un identificador único para el evento que activará el Journey.
       - Puedes obtener este valor desde el panel de configuración del **API Entry Event** en el Journey Builder.

   - **`Realizar un POST en la API para agregar usuarios a la DE`**

     Para agregar un nuevo usuario a la **Data Extension** de entrada y activar el Journey, debes hacer un `POST` en la **API de Marketing Cloud**.

     - **Autenticación de la API**:

       - Antes de hacer el `POST`, necesitas obtener un **Access Token** de la API de Marketing Cloud utilizando el flujo OAuth 2.0. Esto se hace para autenticar la solicitud.
       - El Access Token se usa en el encabezado de la solicitud `POST`.

     - **Realizar el POST para activar el Journey**:

       - Usa el **EventDefinitionKey** obtenido en el paso anterior y realiza un `POST` a la API de Marketing Cloud para activar el Journey y enviar los datos de los nuevos contactos.
       - **URL del POST (Endpoint de la API de Marketing Cloud)**:

         ```
         https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com/interaction/v1/events
         ```

       - **Cuerpo de la solicitud**:

         ```json
         {
           "ContactKey": "12345",
           "EventDefinitionKey": "YOUR_EVENT_DEFINITION_KEY",
           "Data": {
             "Email": "cliente@example.com",
             "FirstName": "Juan",
             "LastName": "Pérez",
             "BirthDate": "1985-12-01"
           }
         }
         ```

       - **Explicación del cuerpo de la solicitud**:

         - `"ContactKey"`: Es un identificador único para cada contacto. Este es el valor que permite identificar al contacto dentro de la plataforma.
         - `"EventDefinitionKey"`: El **EventDefinitionKey** que obtuviste al configurar el API Entry Event en el Journey.
         - `"Data"`: Los datos que deseas pasar al Journey. En este caso, incluyen **Email**, **FirstName**, **LastName**, y **BirthDate**, pero puedes incluir cualquier campo que esté en la **Data Extension** que estás utilizando para el Journey.

     - **Configuración del encabezado de la solicitud**:

       - El encabezado de la solicitud `POST` debe contener el **Access Token** para autenticar la llamada API.

       **Ejemplo del encabezado**:

       ```plaintext
       Authorization: Bearer YOUR_ACCESS_TOKEN
       Content-Type: application/json
       ```

     - **Ejecuta el POST**:

       - Usa herramientas como **Postman** o tu propio código en una aplicación para ejecutar el `POST`.
       - Cuando el `POST` se realice correctamente, el contacto será agregado a la **Data Extension de entrada** y, si la condición para activar el **API Entry Event** se cumple, el Journey se activará automáticamente para ese contacto.

   - **`Verifica que el Journey se ejecute`**

     1. **Monitorea el Journey**:

     - Una vez que el `POST` haya agregado el contacto, puedes ir a **Journey Builder** y monitorear la ejecución del Journey.
     - Revisa los informes de eventos para ver si el contacto ha sido procesado correctamente y si el Journey se activó según lo esperado.

     2. **Verifica los datos**:

     - Asegúrate de que los datos enviados en el `POST` se procesen correctamente en el Journey. Si utilizas **Dynamic Content**, verifica que el contenido se personalice correctamente para el contacto.

   - **`Resumen`**

     1. **Crear un Journey con un API Entry Event** para activar el Journey cuando se realiza un `POST`.
     2. **Obtener el EventDefinitionKey** del API Entry Event.
     3. **Realizar un `POST` en la API de Marketing Cloud** usando el **EventDefinitionKey** y los datos del contacto.
     4. **Configurar la autenticación** de la API utilizando OAuth 2.0 para obtener el **Access Token**.
     5. **Ejecutar el Journey** automáticamente cada vez que se agrega un contacto mediante la llamada API.

# **Guía detallada para crear un Journey Builder para una campaña de cumpleaños personalizada**

1. #### **Accede a Salesforce Marketing Cloud (SFMC)**:

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
   - Dirígete a **Journey Builder > Journey Builder** desde el menú principal para comenzar a crear el Journey.

2. #### **Entiende los requerimientos del cliente**:

   - El caso de uso es una campaña de cumpleaños con las siguientes especificaciones:
     - La comunicación será enviada por **email**.
     - El contenido se debe diferenciar según el **género** (hombre o mujer) y si tiene **más o menos de 40 años**.
     - **Creatividad por defecto**: la creatividad de la campaña será para **hombres menores de 40 años**.
     - Si la persona tiene **exactamente 40 años**, se le enviará la creatividad para **menos de 40 años**.

3. #### **Crea dos Data Extension (DE)**:

   - Necesitamos una **Data Extension** que almacene la información relevante de todos los contactos, como género, edad y fecha de nacimiento.
   - **Pasos para crear la DE**:

     - Entra en **Email Studio > Email > Subscribers > Data Extension** y dale a **Create**.
     - Campos de la tabla:
       - **user_id** (clave única del contacto, configurada como **Primary Key**)
       - **first_name ** (primer nombre)
       - **last_name** (apellido)
       - **sex** (correo electrónico)
       - **email** (género)
       - **date_of_birth** (fecha de nacimiento, tipo Date)

   - **Formato de los datos**:

     ```csv
     user_id, first_name, last_name, sex, email, date_of_birth
     12345, Juan, Pérez, Male, juan.perez@example.com, 1985-12-01
     67890, María, García, Female, maria.garcia@example.com, 1980-06-15
     ```

   - **Segunda DE**: Configura una segunda Data Extension llamada `DE_Cumpleanios_Del_Dia` que será utilizada como la **Entry Source** en el Journey. Esta DE debe contener los mismos campos y será actualizada diariamente.

4. #### **Crea las creatividades/piezas (HTML)**:

   - **Para hombres menores de 40 años**:Crea una plantilla de correo electrónico que sea dinámica y contenga contenido específico para hombres jóvenes.

     - **Asunto**: "¡Feliz cumpleaños, Juan! Celebra tu día con un regalo especial."
     - **Cuerpo del email**: "Juan, disfruta de nuestro descuento exclusivo para celebrar tu cumpleaños."

   - **Para mujeres menores de 40 años**:Crea una plantilla similar pero con contenido adaptado para mujeres jóvenes.

     - **Asunto**: "¡Feliz cumpleaños, María! Te tenemos una sorpresa de cumpleaños."
     - **Cuerpo del email**: "María, gracias por ser parte de nuestra comunidad. ¡Celebra tu día con nosotros!"

   - **Para personas con 40 años**:Personaliza el correo para que se adapte específicamente a personas que cumplen 40 años.

     - **Asunto**: "¡40 años de éxitos, Juan! Celebra con nosotros."
     - **Cuerpo del email**: "Juan, 40 años es un gran logro, y queremos celebrarlo contigo."

5. #### **Configura un Automation para activar el Journey**

   - **Paso 1**: Ve a **Journey Builder > Automation Studio**.
   - **Paso 2**: Crea una nueva Automation **New Automation**.
   - **Paso 3**: Configura el **Starting Source** de la Automation:
     - Usa **Schedule** para ejecutar la Automation diariamente a la misma hora, asegurando que la DE `DE_Cumpleanios_Del_Dia` esté lista antes de que el Journey procese los contactos.
   - **Paso 4**: Carga la información en `DE_Cumpleanios` con la actividad **Data Copy or Import** (explicado en `sfmc_2.3-Cargar-files-entre-DE-y-FTP-con-Automation`).
   - **Paso 5**: Añade una actividad **SQL Query** para filtrar los contactos que cumplen años ese día (el SQL usará la primera DE y luego la guardará en la otra):
     ```sql
     SELECT
         user_id,
         first_name,
         last_name,
         sex,
         email,
         date_of_birth
     FROM DE_Cumpleanios
     WHERE MONTH(date_of_birth) = MONTH(GETDATE())
     AND DAY(date_of_birth) = DAY(GETDATE())
     ```
     - Guarda los resultados en `DE_Cumpleanios_Del_Dia` en el apartado **Target Data Extension** y elige la opción **Overwrite** para que siempre haya registros del día en esa DE.

6. #### **Crea el Journey**:

   - **Paso 1**: Accede a **Journey Builder > Journey Builder** y haz clic en **Create New Journey**.
   - **Paso 2**: Elige una **Multi-Step Journey** para crear un flujo con múltiples etapas.
   - **Paso 3**: Define la **Entry Source**:
     - Utiliza el Entry Source **Data Extension** y selecciona la DE `DE_Cumpleanios_Del_Dia` como fuente de entrada.
     - Asegúrate de que esta DE esté actualizada con los contactos que cumplen años el día de la ejecución.
   - **Paso 4**: Configura el **Schedule**:
     - Este paso debe configurarse con una fecha posterior a la establecida en la carga de información dentro de la Automation que se conecta a este Journey y también debe ser diario.
     - Los contactos evaluados serán todos **All Records**.
   - **Paso 5**: Añadir un **Decision Split** basado en edad y género:
     - En el Journey Builder, añade un **Decision Split** después de la entrada.
     - Configura las condiciones del **Decision Split** para que divida a los contactos en segmentos específicos:
       ```plaintext
       Condición 1: Edad < 40 AND Género = "Male"
       Condición 2: Edad < 40 AND Género = "Female"
       Condición 3: Edad > 40 AND Género = "Male"
       Condición 4: Edad > 40 AND Género = "Female"
       Condición 5: Edad = 40 // Sea hombre y mujer
       ```
     - Asegúrate de que cada grupo esté correctamente definido para evitar errores en el flujo.
   - **Paso 6**: Enviar los correos electrónicos:
     - Para cada grupo del **Decision Split**, asigna el correo electrónico correspondiente:
       - Para hombres menores de 40 años, selecciona la plantilla con contenido para hombres.
       - Para mujeres menores de 40 años, selecciona la plantilla con contenido para mujeres.
       - Para personas de 40 años, selecciona la plantilla correspondiente a esa edad.
     - Asegúrate de que las plantillas de correo estén personalizadas correctamente utilizando **Dynamic Content** según los criterios definidos. Puedes utilizar bloques **Snippets** para crear un único email que tenga contenido distinto.

7. #### **Revisión y pruebas**:

   - **Paso 1**: Revisa el Journey y las condiciones de los **Decision Splits**.
   - **Paso 2**: Realiza pruebas con un pequeño grupo de contactos para asegurarte de que las creatividades y los mensajes se envíen correctamente según los criterios de edad y género.

8. #### **Activar el Journey**:

   - Una vez que todo esté configurado y probado, **activa el Journey** para que comience a enviar correos electrónicos automáticamente a los contactos según sus cumpleaños.

9. #### **Monitoreo y optimización**:

   - **Paso 1**: Monitorea el rendimiento del Journey usando los **Reportes de Email Send** y los **Event Results**.
   - **Paso 2**: Si es necesario, realiza ajustes en las creatividades o en la segmentación para mejorar los resultados del Journey.

10. ### **Resumen de especificaciones**:

    - **Data Extension**: `DE_Cumpleaños` y `DE_Cumpleanios_Del_Dia`.
    - **Journey**: Journey de cumpleaños con Decision Splits basados en género y edad.
    - **Creatividad**: Correos electrónicos diferenciados para hombres, mujeres y personas de 40 años.
    - **Automatización**: Automatización para actualizar `DE_Cumpleanios_Del_Dia` diariamente, limpiar los datos y activar el Journey automáticamente cada vez que un contacto se agregue a la DE.
