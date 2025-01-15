# **`Journey Builder: Aplicaciones avanzadas y ejemplos reales`**

#### Introducción:

Journey Builder es una herramienta avanzada dentro de Salesforce Marketing Cloud (SFMC) que permite diseñar y ejecutar campañas de marketing automatizadas y personalizadas. Este módulo, **Journey Builder II**, profundiza en las funcionalidades avanzadas como **actualización dinámica de datos**, **inyecciones vía API en tiempo real**, y estrategias de gestión optimizada para campañas complejas. Estas características permiten a las marcas ofrecer comunicaciones relevantes y efectivas en cada etapa del ciclo de vida del cliente.

A lo largo de esta explicación, se presentan ejemplos reales aplicados a contextos de marketing, como campañas de retención, recuperación de clientes inactivos y optimización de experiencias.

---

1. ### **`Creación de un Journey en SFMC`**

   - **`Componentes esenciales`**:

     - **Data Extensions (DE)**:
       - Son bases de datos utilizadas para almacenar información relevante de los contactos.
       - **Estructura organizada**:Para garantizar claridad, las DE deben seguir una nomenclatura consistente.**Ejemplo real**:Para una campaña de fin de año:
         - `DE_Mkt_Campaña_FinAño_2024`
         - `DE_Mkt_Segmento_VIP_2024`

   - **`Contenido creativo`**:

     - Incluye emails, bloques de contenido, imágenes y plantillas personalizadas.
     - **Ejemplo real**:En una campaña de ventas:
       - **Email 1**: "Aprovecha nuestras ofertas exclusivas."
       - **Email 2**: "Última oportunidad, ¡las promociones terminan hoy!"

   - **`Estructura del Journey`**:

     Las Entry Sources son puntos de entrada que determinan cómo los contactos ingresan al journey. Estas definen el origen de los datos y establecen el flujo inicial de la trayectoria. Elegir la Entry Source adecuada es esencial para garantizar que los contactos entren correctamente en el journey y que este responda a sus necesidades específicas.

     - **Formulario en una landing page**:

       - **Descripción**: Los contactos ingresan al journey después de completar un formulario en una página web o landing page. Los datos recolectados, como nombre y correo electrónico, se almacenan en una Data Extension (DE).
       - **Utilidad**: Ideal para campañas de generación de leads, promociones o registros de eventos.
       - **Ejemplo real**:
         Un cliente completa un formulario para recibir un catálogo de productos de temporada. Automáticamente es añadido a un journey que le envía un correo de bienvenida con el catálogo en formato digital.

     - **Inyección vía API**:

       - **Descripción**: Los contactos son agregados dinámicamente a un journey mediante una llamada API. Este método es ideal para flujos basados en eventos en tiempo real, como compras, abandono de carritos o interacciones en aplicaciones móviles.
       - **Utilidad**: Perfecto para activar journeys en tiempo real y basados en acciones específicas.
       - **Ejemplo real**:
         Un cliente abandona su carrito de compras en un sitio web. Una API envía su información al journey, que le envía un correo con un descuento para motivarlo a completar la compra.

     - **Data Extension (DE)**:

       - **Descripción**: Utiliza una DE como fuente de datos para iniciar el journey. Los contactos en la DE pueden ser incluidos en base a criterios de filtrado específicos.
       - **Utilidad**: Ideal para campañas basadas en segmentos predefinidos o listas actualizadas automáticamente.
       - **Ejemplo real**:
         Una empresa lanza una promoción dirigida solo a clientes VIP almacenados en una DE específica. Estos contactos ingresan al journey y reciben un correo promocional personalizado.

     - **Date-Based Event**:

       - **Descripción**: Los contactos son añadidos al journey en función de una fecha almacenada en la DE, como cumpleaños, aniversarios o fechas de renovación de contrato.
       - **Utilidad**: Excelente para campañas programadas como recordatorios o celebraciones.
       - **Ejemplo real**:
         Un cliente cuyo cumpleaños es detectado en la DE es añadido al journey y recibe un mensaje de felicitación con un cupón de descuento.

     - **Salesforce Entry Source**:

       - **Descripción**: Conecta datos directamente desde Salesforce CRM, como leads o contactos, para iniciar el journey.
       - **Utilidad**: Es especialmente útil para sincronizar acciones de marketing con el equipo de ventas o servicio al cliente.
       - **Ejemplo real**:
         Un lead es generado en Salesforce CRM y automáticamente ingresado a un journey que lo nutre con información relevante antes de que el equipo de ventas lo contacte.

     - **CloudPages Form Submission**:

       - **Descripción**: Similar al formulario en landing pages, pero específico de formularios creados en CloudPages dentro de SFMC.
       - **Utilidad**: Ideal para integrar formularios directamente con campañas en SFMC sin necesidad de herramientas externas.
       - **Ejemplo real**:
         Un cliente se registra para un evento a través de un formulario de CloudPages. Esto activa un journey que envía confirmaciones y recordatorios del evento.

     - **MobileConnect List**:

       - **Descripción**: Usa listas de contactos de MobileConnect como fuente de entrada.
       - **Utilidad**: Ideal para campañas de SMS o notificaciones push segmentadas.
       - **Ejemplo real**:
         Los contactos que optaron por recibir notificaciones SMS ingresan al journey y reciben actualizaciones promocionales directamente en sus dispositivos móviles.

     - **Event-Based API Entry**:

       - **Descripción**: Los contactos son añadidos al journey en respuesta a eventos específicos detectados en aplicaciones, como compras, descargas o interacciones.
       - **Utilidad**: Perfecto para aplicaciones móviles que necesitan journeys altamente personalizados.
       - **Ejemplo real**:
         Un cliente realiza una compra dentro de una aplicación móvil. Esto activa un journey que envía un agradecimiento y recomendaciones de productos relacionados.

     - **Notas importantes sobre las Entry Sources**:

       - Cada journey puede tener solo una Entry Source.
       - Una vez activado el journey, la Entry Source no puede ser editada. Para realizar cambios, es necesario crear una nueva versión del journey.
       - Las Entry Sources deben alinearse con los objetivos del journey y garantizar que los datos sean precisos y estén actualizados.

   - **`Actividades clave`**:

     1. **Waits (Decisión de tiempo)**:Configuran pausas estratégicas antes del siguiente paso dentro del journey. Estas pausas pueden establecerse en función de un período fijo o de una fecha específica.**Utilidad**:Permite espaciar las interacciones con los contactos para evitar sobrecarga de mensajes y sincronizar envíos en momentos estratégicos.**Ejemplo real**:

        - Enviar un recordatorio 24 horas después de una compra pendiente.
        - Esperar hasta el cumpleaños de un cliente para enviarle un mensaje de felicitación personalizado.

     2. **Decision Splits**:Segmentan contactos en diferentes rutas según atributos o acciones específicas que definan su comportamiento o características.**Utilidad**:Permite crear experiencias altamente personalizadas adaptando el contenido a las necesidades o preferencias de cada segmento.**Ejemplo real**:

        - Dividir contactos según idioma (español o inglés) para campañas locales.
        - Crear rutas distintas para nuevos clientes y clientes recurrentes.

     3. **Engagement Splits**:Filtran contactos en función de su nivel de interacción previo con campañas, como aperturas de correos, clics en enlaces o conversiones.**Utilidad**:Ayuda a reenganchar a contactos poco comprometidos y a optimizar los mensajes para aquellos que ya han mostrado interés.**Ejemplo real**:

        - Los clientes que no abrieron un correo inicial reciben un mensaje de seguimiento.
        - Los clientes que hicieron clic en una promoción son dirigidos a un journey de agradecimiento con contenido adicional.

     4. **Pruebas A/B**:Experimentan con diferentes variantes de contenido, como líneas de asunto, diseños de correo o llamadas a la acción. Esto permite identificar qué opción tiene mejor rendimiento antes de implementarla a gran escala.**Utilidad**:Incrementa la efectividad de las campañas al optimizar elementos clave basados en datos reales.**Ejemplo real**:

        - Probar el impacto de "¡Solo por hoy!" vs. "Última oportunidad para ahorrar."
        - Comparar dos diseños de correos electrónicos para determinar cuál genera más clics.

     5. **Einstein STO (Send Time Optimization)**:Utiliza inteligencia artificial para predecir el mejor momento para enviar mensajes a cada contacto, basado en su comportamiento histórico.**Utilidad**:Maximiza las tasas de apertura y clics al enviar mensajes cuando los contactos tienen más probabilidades de interactuar.**Ejemplo real**:

        - Enviar un correo promocional a las 10:00 a.m. para clientes que suelen abrir correos por la mañana y a las 7:00 p.m. para aquellos que prefieren la noche.

     6. **Einstein Scoring Split**:Clasifica contactos según la probabilidad de realizar acciones específicas, como completar una compra o registrarse en un evento.**Utilidad**:Mejora la segmentación al priorizar esfuerzos en los contactos con mayor probabilidad de conversión.**Ejemplo real**:

        - Dividir contactos en categorías de "Alta probabilidad de compra" y "Baja probabilidad" para ajustar la intensidad de las comunicaciones.

     7. **Update Contact**:Modifica o actualiza los datos de un contacto en una Data Extension a medida que avanza en el journey.**Utilidad**:Permite registrar dinámicamente interacciones o cambios en los datos de los contactos, como actualizaciones de preferencias o estados.**Ejemplo real**:

        - Cambiar el estado de un cliente a "Activo" tras realizar una compra.

     8. **Journey Goal**:Permite establecer metas dentro del journey para evaluar si los contactos logran el objetivo deseado, como realizar una compra o completar un registro.**Utilidad**:Ayuda a medir la efectividad de los journeys en tiempo real y a ajustar estrategias si los resultados no son los esperados.**Ejemplo real**:

        - Definir como meta que al menos el 20% de los contactos completen una encuesta.

     9. **Exit Criteria**:Establece condiciones para que los contactos salgan automáticamente del journey una vez que cumplen ciertos requisitos.**Utilidad**:Evita que los contactos sigan recibiendo mensajes innecesarios si ya lograron el objetivo.**Ejemplo real**:

        - Retirar a los contactos de una campaña de renovación si ya renovaron su suscripción.

     Estas actividades permiten a las marcas diseñar journeys más inteligentes, personalizados y efectivos, asegurando que cada cliente reciba el mensaje correcto en el momento adecuado.

   ***

2. ### **`Update Contact: Actualización dinámica de datos`**

   - **`¿Qué es Update Contact?`**
     Es una actividad que permite actualizar datos de un contacto en una Data Extension cuando este avanza en un journey.
   - **`Características clave`**:

     - **Actualización inteligente**:
       - Si el contacto ya existe, se modifican sus datos.
       - Si no existe, se agrega un nuevo registro.
     - **Registro de hora actual**:
       - La herramienta puede añadir automáticamente un timestamp para registrar la interacción del contacto.
     - **Buena práctica**:
       - Usar una Data Extension diferente de la fuente de entrada para evitar errores.

   - **`Ejemplo real`**:

     - **Caso**: Encuesta de satisfacción posventa.
     - **Objetivo**: Registrar la satisfacción del cliente según su respuesta.
     - **Implementación**:

       1. Un cliente recibe un correo pidiéndole calificar su experiencia.
       2. Según su respuesta, el sistema actualiza su nivel de satisfacción en la DE.

       ```json
       {
         "ContactoID": "12345",
         "NivelSatisfacción": "Alta",
         "Timestamp": "2024-12-08T10:00:00Z"
       }
       ```

   ***

3. ### **`Journey Builder vía API`**

   - **`¿Qué es el API Event?`**
     Permite inyectar contactos en un journey de forma dinámica y en tiempo real, utilizando datos enviados desde otras plataformas.
   - **`Configuración de un API Event`**:

     - **Estructura del evento**:
       Incluye información como la definición del evento y datos del cliente.
     - **Ejemplo real**:
     - **Caso**: Recuperación de carritos abandonados.
     - **Implementación**:
       Un cliente abandona un carrito con los siguientes productos:

     ```json
     {
       "eventDefinitionKey": "AbandonoCarrito",
       "data": {
         "email": "cliente@example.com",
         "productos": [
           { "nombre": "Zapatos", "precio": 50 },
           { "nombre": "Bolso", "precio": 75 }
         ]
       }
     }
     ```

     El cliente es inyectado automáticamente en un journey que le envía un correo recordándole completar su compra.

   - **`Pruebas con Postman`**:

     - **Uso real**:Probar y validar llamadas API simulando un evento.
     - **Ejemplo real**:
       Enviar una solicitud para verificar que el journey se activa correctamente cuando un cliente agrega un producto al carrito.

   ***

4. ### **`Gestión y optimización de journeys`**

   - **`Creación y manejo de versiones`**:

     - Las versiones permiten iterar journeys para optimizarlos.
     - **Funcionamiento real**:
       - Una tienda en línea lanza una campaña de descuento. Después de analizar la baja tasa de conversión, crean una nueva versión con un descuento mayor y un diseño más atractivo.

   - **`Duplicación de actividades y journeys`**:

     - **Ejemplo real**:
       Una empresa tiene una campaña de bienvenida que funciona bien y decide duplicarla para adaptarla a nuevos mercados.

   - **`Pausar y detener journeys`**:

     - **Pausar**:
       - Detener temporalmente la entrada de contactos.
         **Ejemplo real**:
         Durante el mantenimiento del sistema, se pausa un journey para evitar errores en las interacciones.
     - **Parar**:
       - Termina el journey y expulsa a todos los contactos.
         **Ejemplo real**:
         Una campaña programada para el Black Friday se detiene inmediatamente después del evento.

   ***

5. ### **`Monitoreo y reportes`**

   - **`Visualización de resultados`**:

     - **Resultados en tiempo real**:
       - Permiten analizar entradas y errores en - **Entry Source**.
       - **Ejemplo real**:
         Una empresa detecta que una lista de contactos no está correctamente segmentada y corrige los errores antes de continuar.

   - **`Reportes estándar`**:

     - **Journey Builder Email Send Summary**:
       - Analiza tasas de apertura y clics.
       - **Ejemplo real**:
         Evaluar el éxito de un correo promocional para ajustar la estrategia futura.

   - **`Journey Builder Email Sends per Day`**:

     - **Identifica patrones de interacción por días:**
       - **Ejemplo real**:
         Un eCommerce descubre que los martes tienen mayores tasas de conversión y programa sus envíos en consecuencia.

   - **`Intelligence Reports`**:

     - **Herramienta visual avanzada**:
       - Permite identificar cuellos de botella o puntos críticos en journeys complejos.
       - **Ejemplo real**:
         Una empresa optimiza su campaña de retención al identificar que los clientes no completan un formulario clave.

# **Guía detallada para implementar un Journey con API Event como Entry Source en Salesforce Marketing Cloud (SFMC)**

1. #### **Inicia sesión en Salesforce Marketing Cloud (SFMC)**:

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
   - Dirígete a **Setup** y controla que tengas una Aplicación disponible. De lo contrario, más abajo se explica cómo crearla.

2. #### **Define el API Event**:

   - Un **API Event** en Journey Builder es un evento que permite que el Journey sea activado por una llamada API. El primer paso es crear un **Event Definition** que permita recibir y procesar los datos de consultas API que contengan un ID único que crearemos bajo el apartado de **Event Definition Key**. Ese ID nos permite referenciar la consulta con el Journey.
   - En **Journey Builder**, dirígete a **Journey Builder > Journey Builder > Events > Entry Sources** y haz clic en **+ New Event**. Ahora te aparecerá la posibilidad de elegir cómo se proporcionará ese evento. En este caso elegiremos **API Event**.
   - Configuramos el evento:

     - **Event Name**: Ingresa un nombre descriptivo para tu evento, por ejemplo, "Pedido Confirmado".
     - **Event Definition Key**: Aquí crearás un identificador único para el evento. Este código se usará cuando realices la llamada API para activar el Journey usando Postman, por ejemplo.

   - Elige una **Sendable DE** que se utilizará en el Journey para realizar las comunicaciones. Por ejemplo, `DE_exercise_day18_ApìEvent_FinContratoEncuesta`. Los usuarios de esta Data Extension recibirán un email que los enviará a una CloudPage para proporcionar una encuesta de satisfacción.
   - Selecciona un filtro en particular si deseas filtrar la DE que se utiliza desde el inicio en **Contact Filter**. Esto es opcional.

3. #### **Obtener el Access Token para autenticar la llamada API**:

   - Para realizar una llamada API a SFMC, necesitarás un **Access Token**. Para ello, primero tendrás que crearte una App para poder obtener el `ClientID` y el `ClientSecret`.
   - Ve a **Setup > Platform Tools > Apps > Installed Package** y elige la App que usarás. Si aún estás sin tu App de pruebas, crea una en **New**.

     - Dale un nombre a tu App
     - Crea un Componente como **API Integration** (es donde aparecerá el `ClientID` y el `ClientSecret`) y elige su privacidad y utilidad. Puede ser **Public**, **Web** o **Server-to-server**.
     - Elige qué se va a poder hacer en esa App con el **Scope**. Desde editar y borrar correos, o push, o SMS hasta crear Data Extensions y manejar datos sensibles. En este caso, seleccionaremos todas las casillas para poder jugar con la App y probarlo todo.
     - Ahora podrás utilizar la URI **Authentication Base URI** para hacer la consulta y recibir el **AccessToken**. Además, necesitarás el **ClientID**, el **ClientSecret** y el **MID Business Unit** para llevar a cabo la consulta HTTP.

   - Realiza una solicitud `POST` para obtener el token. Aquí tienes un ejemplo de cómo hacerlo con Postman:

     - **Request Body**: POST https://{{Subdomain}}.auth.marketingcloudapis.com/v2/token

     ```json
     {
       "account_id": "{{MID_BusinessUnit}}",
       "client_id": "{{App_ClientId}}",
       "client_secret": "{{App_ClientSecret}}",
       "grant_type": "client_credentials",
       "scope": "tracking_events_write event_notification_subscription_delete event_notification_subscription_update event_notification_subscription_read event_notification_subscription_create event_notification_callback_delete event_notification_callback_update event_notification_callback_read event_notification_callback_create marketing_cloud_connect_send marketing_cloud_connect_write marketing_cloud_connect_read ott_channels_write ott_channels_read ott_chat_messaging_send ott_chat_messaging_read workflows_read tags_read approvals_read tags_write approvals_write workflows_write webhooks_write webhooks_read users_write users_read accounts_write accounts_read campaign_write campaign_read calendar_write calendar_read tracking_events_read file_locations_write file_locations_read data_extensions_write data_extensions_read list_and_subscribers_write list_and_subscribers_read web_write web_publish social_write social_read social_publish social_post sms_write sms_send sms_read push_write push_send push_read email_write email_send email_read journeys_write journeys_read journeys_execute automations_write automations_read automations_execute saved_content_write saved_content_read documents_and_images_write documents_and_images_read offline"
     }
     ```

     - **Response**: Aquí recibes el **Access Token** que te permite utilizar la API REST.

     ```json
     {
       "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IjQiLCJ2ZXIiOiIxIiwidHlwIjoiSldUIn0.eyJhY2Nlc3NfdG9rZW4iOiJYWlAwTHBMeG9ZdUV3NHFiSUdjMjNsczMiLCJjbGllbnRfaWQiOiIwYWFhdzRnOG5oZmNxM3IwNGI5Zzl3dTgiLCJlaWQiOjUxMDAwMTQ0NCwic3RhY2tfa2V5IjoiUzUwIiwicGxhdGZvcm1fdmVyc2lvbiI6MiwiY2xpZW50X3R5cGUiOiJTZXJ2ZXJUb1NlcnZlciIsInBpZCI6MzIwfQ.y7wSlTmUNRRlwSHa4rrBq18WFXNKp7r_DY1X7OMH0eU.6ov2Yewf06usRgpVRpPMJTO9I7XY6SHN9HsTiMXwD1DN7ZXorIMUxPGF5AFtS5aofHa5qkCJiwFpKW1wDErmuze5iFj-5HivqF7EUgUfX6jlagtON2QQQ2GTfoMWo7imnijKtMM9qpj-CQHixTn7ScnFiqE-mITSqUT2a",
       "token_type": "Bearer",
       "expires_in": 1079,
       "scope": "tracking_events_write event_notification_subscription_delete event_notification_subscription_update event_notification_subscription_read event_notification_subscription_create event_notification_callback_delete event_notification_callback_update event_notification_callback_read event_notification_callback_create marketing_cloud_connect_send marketing_cloud_connect_write marketing_cloud_connect_read ott_channels_write ott_channels_read ott_chat_messaging_send ott_chat_messaging_read workflows_read tags_read approvals_read tags_write approvals_write workflows_write webhooks_write webhooks_read users_write users_read accounts_write accounts_read campaign_write campaign_read calendar_write calendar_read tracking_events_read file_locations_write file_locations_read data_extensions_write data_extensions_read list_and_subscribers_write list_and_subscribers_read web_write web_publish social_write social_read social_publish social_post sms_write sms_send sms_read push_write push_send push_read email_write email_send email_read journeys_write journeys_read journeys_execute automations_write automations_read automations_execute saved_content_write saved_content_read documents_and_images_write documents_and_images_read offline",
       "soap_instance_url": "https://mcm3-rvv-d4cz50jm6nszgy0rzn4.soap.marketingcloudapis.com/",
       "rest_instance_url": "https://mcm3-rvv-d4cz50jm6nszgy0rzn4.rest.marketingcloudapis.com/"
     }
     ```

4. #### **Realiza una consulta API para cargar usuarios en la DE no triggered**:

   - Con el **Access Token** podemos realizar una llamada API que nos permita poblar nuestra Data Extension.
   - Haz el set del **Authorization** como **Bearer Token** y pon ahí el JWT que te devuelve en la response de la petición auth bajo el nombre de **access_token**.
   - Recuerda que tenemos un tiempo determinado en el cual es posible realizar peticiones con ese Token. Una vez que termine, cualquier petición devolverá un **401 Unauthorized** y deberás volver a realizar la consulta al Auth para obtener otro Token. En pocas palabras, se acaba la sesión y debes reiniciarla.

     - **Request**: POST https://{{Subdomain}}.rest.marketingcloudapis.com/hub/v1/dataevents/key:{{ExternalKey}}/rowset
     - El `ExternalKey` en la URI es el **External Key** propio de la **Data Extension de tipo NORMAL (NO TRIGGERED)** (se usa para poderla referenciar). Si utilizamos una DE normal, nos pedirá que los contactos sean reales cuando se conecte al Journey porque necesita un **ContactKey** en la llamada de conexión al Journey. Para ello, deberemos crearlos manualmente desde **Email Studio > Email > Subscribers > All Subscribers** y **Create**.

     `** Recuerda: el SubscriberKey deberá ser igual al que hayas creado manualmente`.

     ```json
     [
       {
         "keys": {
           "SubscriberKey": "f666db28-e841-4e21-bcb6-789f7f1b54ez"
         },
         "values": {
           "NumContrato": "J-7898258",
           "Email": "user1@mail.com",
           "Nombre": 666333555,
           "Contactable": 1
         }
       },
       {
         "keys": {
           "SubscriberKey": "f333db28-e841-4e20-bcb6-789f7f1b54jk"
         },
         "values": {
           "NumContrato": "K-7898369",
           "Email": "user2@mail.com",
           "Nombre": 666777333,
           "Contactable": 0
         }
       }
     ]
     ```

   - **Response**: Si la llamada es exitosa, se obtendrá un código parecido al de arriba mostrando la información pertinente.

5. #### **Crea el Journey**

   - Entra en **Journey Builder > Journey Builder**.
   - Haz clic en **Create New Journey** para empezar con la creación y elegimos el **Multi-Step Journey**. Le damos un nombre y continuamos.
   - Selecciona el **Entry Sources** en la pantalla de entrada del Journey y elige **API Event** como el **Entry Source**.
   - Selecciona el Evento creado y continúa con la configuración del Journey:

     - **Wait Until Event**: Espera hasta que el evento haya terminado.
     - **Frequency Split**: Utiliza la AI de Einstein para ver si el usuario está muy saturado en las comunicaciones recibidas.
     - **Email**: Se envían distintos correos en base a la saturación del usuario.
     - **Decision Split**: Si está próximo a estar saturado, se envía la comunicación y se comprueba que el usuario haya dado de baja las comunicaciones comerciales. Además, si el usuario sigue siendo contactable, se realiza una espera de 12h y se manda otra comunicación con una oferta especial para mantener el usuario cercano y activo.
     - **Update Contact**: Se utiliza en el mismo Decision Split de arriba en el caso que el usuario haya decidido cancelar la suscripción para actualizar la tabla y mantener la información actualizada en tiempo real.

6. #### **Realiza la conexión del Journey con el API Event usando una consulta HTTP**

   - Para realizar la conexión al Journey utilizando el Entry Source **API Event** es necesario tener usuarios reales. Eso quiere decir que tendremos que crear un contacto verdadero en **Email Studio > Email > Subscribers > All Subscribers**. Recuerda que al crear el **Contact Key** del usuario, se está definiendo un ID único para buscarlo y éste mismo será igual al **Subscriber Key** porque es exactamente lo mismo, sólo que el Subscriber Key se usa sólo para emails debido a la antigua plataforma ExactTarget.
   - **Request**: POST https://{{Subdomain}}.rest.marketingcloudapis.com/interaction/v1/events
   - El `ContactKey` es el **ContactKey/SubscriberKey** del usuario real (creado manualmente antes). Si te hubieras olvidado de éste dato, lo puedes encontrar en **Email Studio > Email > Subscribers > All Subscribers** buscando el contacto creado y viendo su información.

   ```json
   {
     "ContactKey": "subscriber_exercise_day18",
     "EventDefinitionKey": "exercise_day18",
     "Data": {
       "SubscriberKey": "subscriber_exercise_day18",
       "NumContrato": "J-7893215",
       "Email": "manolo28@mail.com",
       "Nombre": "628351578",
       "Contactable": "True"
     }
   }
   ```

7. #### **Monitoreo en Journey Builder**:

- Accede a **Journey Builder > Journey Builder** y busca un icono que diga **Journey Analytics** para revisar el progreso de los contactos.
- Asegúrate de que los contactos que activan el Journey mediante la llamada API estén entrando correctamente en el flujo.

8. #### **Activa el Journey**:

   - Una vez que el Journey esté completamente configurado y probado, haz clic en **Activate** para comenzar a procesar los contactos que ingresen a través del API Event.

9. #### **Revisa el Journey**:

   - Asegúrate de que todas las actividades estén correctamente configuradas.
   - Realiza pruebas con datos de ejemplo para verificar que el Journey se activa correctamente mediante la llamada API.

# **Guía detallada para configurar Google Analytics Tracking en Salesforce Marketing Cloud (SFMC)**

1. #### **Configuración inicial de Google Analytics en Salesforce Marketing Cloud**

   - La integración de **Google Analytics Tracking** en SFMC permite rastrear el rendimiento de los correos electrónicos y enlaces en los journeys agregando automáticamente **parámetros UTM**. Además, esta integración te brinda una visión más clara del tráfico y las conversiones generadas por tus campañas en Google Analytics (GA).
   - **Accede a Setup en SFMC**:

     - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
     - Ve al menú principal y selecciona **Setup > Platform Tools > Apps > Google Analytics Integration**.

   - **Habilita Google Analytics Integration**:

     - Este proceso nos llevará a **Administration > Data Management > Parameter Management**.
     - Vamos a **Google Analytics Tracking** y **Edit**. Esto nos lleva a una página que muestra cómo se integra el tracking en una URI a través de Query Params y que nos deja elegir qué analítica usar. En este caso, elegimos GA4 (Google Analytics 4).
     - Volvemos a **Platform Tools > Apps > Google Analytics Integration** y le damos a **Manage**.
     - Seleccionamos la cuenta a asociar, el checkbox y guardamos.

   - **Define los parámetros UTM predeterminados**:

     - Ve a **Administration > Data Management > Parameter Management > Google Analytics Tracking** y dale a **Edit**.
     - En la sección de configuración, especifica los valores predeterminados para los siguientes campos UTM:
       - **utm_source**: Define la fuente (por ejemplo, `salesforce` o `email_marketing`).
       - **utm_medium**: Especifica el medio (generalmente `email`).
       - **utm_campaign**: Define cómo se nombrarán las campañas (puedes usar macros dinámicas como el nombre del email o del journey).
     - Guarda la configuración.

2. #### **Parámetros UTM predeterminados**

   Cuando activas Google Analytics Tracking, SFMC agrega automáticamente los siguientes parámetros UTM a los enlaces rastreados:

   | **Parámetro UTM** | **Descripción**                 | **Valor asignado por SFMC**              |
   | ----------------- | ------------------------------- | ---------------------------------------- |
   | `utm_source`      | Fuente del tráfico              | `salesforce` (o el valor configurado)    |
   | `utm_medium`      | Medio de marketing              | `email`                                  |
   | `utm_campaign`    | Nombre de la campaña            | Nombre del email o del Journey           |
   | `utm_term`        | Término de búsqueda (opcional)  | Personalizable si lo configuras en la DE |
   | `utm_content`     | Contenido del enlace específico | Descripción del enlace o botón           |

   - **Ejemplo de un enlace modificado**:
     ```plaintext
     https://example.com/product?utm_source=salesforce&utm_medium=email&utm_campaign=promo_julio&utm_content=cta1
     ```

3. #### **Configura Google Analytics Tracking en tu Journey**

   - **Accede al Journey Builder**:

     - Ve a **Journey Builder > Journey Builder** y abre el Journey que deseas configurar.

   - **Activa Google Analytics Tracking**:

     - Haz clic en el botón **Settings** en la esquina superior derecha del Journey.
     - En esta sección a parte de poder configurar los **re-entry** de los Journeys y los números para los SMS, podemos seleccionar el tracking a través de la casilla **Track links for messages in this journey** en **Google Analytics Tracking**.
     - Esta parte te pedirá que escribas un dominio. Ése dominio, es el dominio de los enlaces pertinentes a los links dentro de las comunicaciones en el Journey.

4. #### **Configuración en Google Analytics**

   - **Accede a Google Analytics**:

     - Inicia sesión en tu cuenta de **Google Analytics**.
     - Ve a **Email Studio > Email > Admin > Tracking Configuration** para ver qué pasa con eso. Eventualmente, inmediatamente abajo en **Salesforce Integration** podemos editar y marcar el **Scope By User**.

   - **Link**

     - [Integración de Google Analytics 4 GA4 Marketing Cloud](https://help.salesforce.com/s/articleView?id=sf.mc_gai_google_analytics_integration_tracking.htm&language=es&type=5)

5. #### **Revisión y pruebas**

   - **Pruebas en SFMC**:

     - Envía un correo de prueba desde SFMC a una cuenta que puedas monitorear.
     - Verifica que los enlaces incluyan correctamente los parámetros UTM configurados.

   - **Pruebas en Google Analytics**:

     - Accede a **Acquisition > Campaigns > All Campaigns** para revisar el tráfico generado.
     - Asegúrate de que los clics desde el correo electrónico estén registrados con la fuente y medio correctos.

6. #### **Monitoreo y análisis de resultados**

   - **Desde Journey Builder**:

     - Accede a **Journey Builder > Journey Analytics**.
     - Analiza métricas clave como:
       - Cantidad de contactos que ingresaron al Journey.
       - Tasa de conversión en cada actividad.

   - **Desde Email Studio**:

     - Ve a **Email Studio > Tracking > Reports**.
     - Genera reportes detallados de rendimiento, como:
       - Tasa de apertura.
       - Clics.
       - Correos rebotados.

   - **Desde Tracking Send**:

     - En **Email Studio > Tracking**, revisa los resultados de envíos individuales realizados durante el Journey.

   - **Desde Datorama** (si está habilitado):

     - Configura un dashboard para analizar el rendimiento general del Journey:
       - Métricas personalizadas como ROI, conversiones, y rendimiento por canal.
       - Comparativa entre múltiples Journeys.

   - **En Google Analytics**:

     - Analiza el tráfico, conversiones y comportamiento de los usuarios provenientes de los correos rastreados en **Acquisition > Campaigns**, por ejemplo.

   - **Acciones correctivas**:

     - Identifica tasas de abandono altas en actividades específicas y ajusta los tiempos de espera o las condiciones en los **Decision Splits**.

# **Guía detallada para implementar Update Contact en Salesforce Marketing Cloud (SFMC)**

1. #### **Utilizar Customer Updates > Update Contact en un Journey**

   - **Definición del caso de uso**:

     - **Objetivo**: Actualizar el estado de un cliente después de que realice una encuesta de satisfacción.
     - **Escenario**: Los datos de la encuesta se capturan en una CloudPage y deben reflejarse automáticamente en la DE `Clientes`.

   - **Preparar la Data Extension**:

     - Crea una DE llamada `Clientes` con los siguientes campos:
       - **SubscriberKey** (Primary Key).
       - **Email**.
       - **Estado** (activo/inactivo).

   - **Diseña el Journey**:

     - **Entry Source**:
       - Usa una DE llamada `Encuestas_Completadas` para almacenar contactos que respondieron la encuesta.
     - **Update Contact Activity**:
       - Arrastra la actividad **Update Contact** al Journey.
       - Configura la actividad para actualizar el campo **Estado** de `Clientes` a "activo".

   - **Configura la CloudPage**:

     - Usa AMPscript para insertar datos en la DE `Encuestas_Completadas`. Ejemplo:

       ```ampscript
       SET @SubKey = _subscriberkey
       INSERTDE("Encuestas_Completadas", "SubscriberKey", @SubKey, "Estado", "activo")
       UpsertDE("Encuestas_Completadas", 1, "SubscriberKey", @SubKey, "Estado", "activo")
       ```

       ```ampscript
       SET @SubKey = _subscriberkey
       UpsertDE("Encuestas_Completadas", 1, "SubscriberKey", @SubKey, "Estado", "activo")
       ```

     - **Monitoreo**:
     - Supervisa en **Journey Analytics** que los contactos pasen correctamente por la actividad **Update Contact** y que el campo **Estado** se actualice en la DE `Clientes`.

# Guía detallada para accionar un Journey desde una ThankUPage, pasando por una CloudPage y realizando el Auth correspondiente en Salesforce Marketing Cloud

1. #### Flujo de Trabajo Propuesto (Resumido)

   1. **CloudPage:**
      - Genera un dato encriptado y redirige al usuario a la ThankUPage con un parámetro (`data`) en la URL.
   
   2. **ThankUPage:**
      - Desencripta los datos recibidos y realiza las siguientes acciones:
        - Autentica con la API de Marketing Cloud para obtener un Access Token.
        - Actualiza información del usuario en una Data Extension específica (`DE_Captacion_Solar`).
        - Llama al **API Event** para iniciar un Journey y enviar un email al usuario.

2. #### Observaciones

   - **1. Validación y Manejo de Errores en CloudPage**
      - Asegúrate de validar que el valor encriptado (`@EncryptedData`) no esté vacío antes de construir la URL de redirección.
      - En lugar de redirigir automáticamente con `Redirect()`, puedes usar un enlace `<a>` para que el usuario tenga control, especialmente si la encriptación falla.
   
   - **2. Seguridad en la Encriptación**
      - Usa una clave segura (por ejemplo, 32 caracteres aleatorios).
      - Implementa validaciones para asegurar que los datos no hayan sido manipulados.
   
   - **3. ThankUPage: Lógica del Access Token**
      - El código debe autenticar con la API de Marketing Cloud para obtener un Access Token. Valida siempre el estado HTTP (`@HttpStatus`) y que el token (`@AccessToken`) no esté vacío antes de continuar.
      - Para reutilización, guarda el token en una variable de AMPscript global o en una variable de sesión si planeas usarlo varias veces en la página.
   
   - **4. Actualización o añadir información en la Data Extension**
      - Añadir información:
        - Hay que estar seguros que los campos de la DE donde se ingresará la información sean correctos y estén bien escritos.
        - Ejemplo para añadir info en la Data Extension:
          ```ampscript

          ``` 

      - Actualizar información:
        - Asegúrate de que los datos desencriptados (`@FirstName`, `@LastName`, `@Email`) provenientes de la CloudPage sean válidos antes de ejecutar un `UpsertData()` o `UpdateData()` en la Data Extension.
        - Ejemplo para actualizar la Data Extension:
          ```ampscript
          UpsertData("DE_Captacion_Solar", 1, "EmailAddress", @Email, "FirstName", @FirstName, "LastName", @LastName, "Birthday", @Birthday, "GameReward", @GameReward, "SolarProduct", @SolarProduct, "PreContract", @PreContract)
          ```
   
   - **5. Inicio del Journey (API Event)**
      - Usa el Access Token obtenido para enviar la llamada al API Event.
      - Ejemplo de configuración del `Payload`:
        ```ampscript
        SET @Payload = CONCAT('{
          "ContactKey": "', @Email, '",
          "EventDefinitionKey": "', @EventKey, '",
          "Data": {
            "EmailAddress": "', @Email, '",
            "FirstName": "', @FirstName, '",
            "LastName": "', @LastName, '",
            "Birthday": "', @Birthday, '",
            "GameReward": "', @GameReward, '",
            "SolarProduct": "', @SolarProduct, '",
            "PreContract": "', @PreContract, '"
          }
        }')
        ```
   
   - **6. Mensajes al Usuario**
      - Asegúrate de mostrar mensajes claros si ocurre algún error, tanto en la actualización de la Data Extension como en el inicio del Journey.

3. #### Versión del Código

   - **CloudPage**:

      ```ampscript
      %%[
      /* Configurar los datos para encriptar */
      SET @DataToEncrypt = "promotional-code"
      
      /* Clave de encrypt */
      SET @EncryptKey = "YOUR_SECURE_KEY"
      
      /* Encriptar los datos */
      SET @EncryptedData = Base64Encode(EncryptSymmetric(@DataToEncrypt, "AES", @EncryptKey, "Base64"))
      
      /* Construir URL de redirección */
      SET @RedirectUrl = CONCAT("https://YOUR_DOMAIN/thankyoupage?data=", URLEncode(@EncryptedData))
      
      /* Redirigir al usuario */
      Redirect(@RedirectUrl)
      ]%%
      ```

   - **ThankUPage**:

      ```html
      <!-- START FORM -->
      <form action="%%=RedirectTo(CloudPagesURL(9802))=%%" method="POST" role="form">
        <!-- El action="" tiene el ID de la misma ThankUPage porque se procesan ahí los datos -->
        <label for="firstName">Nombre*</label>
        <input type="text" id="firstName" name="firstName" value="%%=v(@FirstName)=%%" required />

        <label for="lastName">Apellidos*</label>
        <input type="text" id="lastName" name="lastName" value="%%=v(@LastName)=%%" required /><br /><br />

        <label for="email">Email*</label>
        <input type="email" id="email" name="email" value="%%=v(@Email)=%%" required /><br /><br />

        <label for="birthday">Fecha de nacimiento*</label>
        <input type="date" id="birthday" name="birthday" value="%%=v(@Birthday)=%%" /><br /><br />

        <input
          hidden
          type="text"
          id="gameReward"
          name="gameReward"
          value="%%=v(@GameReward)=%%"
          readonly /><br /><br />

        <input hidden type="text" id="preContract" name="preContract" value="%%=v(@PreContract)=%%" /><br /><br />

        <label for="isPolicy">Consentimientos del tratamiento de datos personales:</label>
        <input type="checkbox" name="isPolicy" id="isPolicy">

        <button type="submit" name="submit">Enviar</button>
      </form>
      <!-- END FORM -->
      ```

      ```ampscript
      %%[
      /* Verificar si el formulario fue enviado */
      IF RequestParameter("submit") != "" THEN
      
          /* Recoger los datos del formulario */
          SET @FirstName = RequestParameter("firstName")
          SET @LastName = RequestParameter("lastName")
          SET @Email = RequestParameter("email")
          SET @Birthday = RequestParameter("birthday")
          SET @GameReward = RequestParameter("gameReward")
          SET @PreContract = RequestParameter("preContract")
          SET @IsPolicy = RequestParameter("isPolicy")
          
          /* Procesar los datos: Actualizar Data Extension */
          UpsertData("DE_Captacion_Solar", 1, "EmailAddress", @Email, "FirstName", @FirstName, "LastName", @LastName, "Birthday", @Birthday, "GameReward", @GameReward, "PreContract", @PreContract)
          
          /* Obtener el Access Token y llamar al API Event */
          SET @ClientId = "YOUR_CLIENT_ID"
          SET @ClientSecret = "YOUR_CLIENT_SECRET"
          SET @Payload = CONCAT('{
              "grant_type": "client_credentials",
              "client_id": "', @ClientId, '",
              "client_secret": "', @ClientSecret, '"
          }')
      
          HTTPPost2('https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/token', 'application/json', @Payload, @HttpStatus, @Response)
      
          IF @HttpStatus == 200 THEN
              SET @AccessToken = FIELD(@Response, "access_token")
              
              /* Iniciar el Journey */
              SET @EventKey = "YOUR_EVENT_DEFINITION_KEY"
              SET @Payload = CONCAT('{
                  "ContactKey": "', @Email, '",
                  "EventDefinitionKey": "', @EventKey, '",
                  "Data": {
                      "EmailAddress": "', @Email, '",
                      "FirstName": "', @FirstName, '",
                      "LastName": "', @LastName, '",
                      "Birthday": "', @Birthday, '",
                      "GameReward": "', @GameReward, '",
                      "PreContract": "', @PreContract, '"
                  }
              }')
      
              HTTPPost2('https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com/interaction/v1/events', 'application/json', @Payload, @HttpStatus, @ApiResponse, @AccessToken)
      
              IF @HttpStatus == 201 THEN
                  OUTPUT("<p>¡Gracias! Tu información ha sido procesada exitosamente.</p>")
              ELSE
                  OUTPUT("<p>Error al accionar el Journey. Inténtalo nuevamente.</p>")
              ENDIF
          ELSE
              OUTPUT("<p>Error: No se pudo obtener el Access Token.</p>")
          ENDIF
      ELSE
          OUTPUT("<p>Por favor, complete el formulario para continuar.</p>")
      ENDIF
      ]%%
      ```
