Ahora eres una profesional de blueprints explicativos, tecnicos y del mercado energético, especialmente el mercado que concierne Endesa energía en España:

Ayúdame a crear un blueprint agregando datos coherentes con el contexto y que añadas información útil del mercado de la energía renovable, concretamente sobre las Placas Solares y sobre las métricas que podrían interesarle a una empresa para utilizar el producto expuesto.

Añade también un prólogo relacionado y unas conclusiones impactantes y significativas para un comprador (Endesa).

# TFM PLACAS SOLARES ENDESA para Particulares y Empresas desde Salesforce Marketing Cloud

## Campaign Limpia el planeta!

### Placas Solares desde la web (primer caso de uso)

- Captación de ex-cliente y no-cliente poseedor de placas solares desde el acceso público en la página web de ENDESA.
- Aquí estaremos en la pag de 4 tarifas (https://www.endesa.com/es/luz-y-gas/catalogo-solar/endesa-solar). Al hacer click en algun link de las tarifas (Saber más) se abrirá un modal con una gamificación de LIMPIA EL PLANETA la cual proporciona un porcentaje de descuento del 20%(ENDESA proporciona un max de descuento hipotético). ¿Coste de captación cero durante X tiempo (1 año)?

  - Gamificación en modal:

    - Opción 1: Que el usuario enchufe su placa solar dentro de un recuadro en la pag web (después de confirmar política de privacidad) y que aparezca un planeta más limpio o un mensaje de felicitación.
- La información recibida a través de un nologged desde la CloudPage nos enviará a una ThakU Page donde crearemos un formulario para consentimientos, privacy y almacenamiento de la información del usuario para poblar las tablas (Data Extensions):

  - DE_Captacion_Solar
  - DE_Open_Tracking
  - DE_Clientes_Cartera
  - DE_Contratos_Vigor_Total
  - DE_Interactions_Web
  - DE_LoyaltyProgramMember_Salesforce
  - DE_TransactionJournal
- API Event (conexión de DE con Journey a través de la thank U page). Éste Journey hace un Split y envía un correo comercial por cada prod para finalizar el registro del contrato. "REAL TIME".
- El tracking del journey tendrá los dominios de las paginas web y el dominio del api event que conecta el journey con las páginas web. El re-entry será nulo porque en ésta campaña el usuario sólo se podrá entrar una vez.

- Espera de 3 días para darle tiempo al usuario a contestar.
- Engagement Split para comprobar la apertura del primer correo enviado. Si aún queda sin abrir, se envía el mismo email con distinto asunto "Última fecha para contratar con el % de descuento obtenido".

  - También se crea un automation que se ejecutará periódicamente para comprobar las aperturas de los correos utilizando la Data View _Open para realizar un tracking del proceso activándose unos minutos más tarde que el Journey para permitir evaluar los correos enviados correctamente. Además, tendrá una ejecución horaria para comprobar correctamente los envíos. Esto es crucial para poder realizar correctamente el engagement realizado.
    ```sql
    SELECT
        s.SubscriberKey,
        s.EventDate AS EmailSentDate,
        CASE
            WHEN o.EventDate IS NOT NULL AND DATEDIFF(DAY, o.EventDate, GETDATE()) <= 3 THEN 'True'
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
- Se envía al usuario en caso de aceptación un email para avisarle que en breves será contactado y felicitarlo. Además, habría que mandar una comunicación o aviso a Endesa para que empiece un procedimiento de contacto al cliente en caso del éxito de la respuesta. De éste modo se facilita la contratación y el contacto humano con el cliente, lo cual favorece la relación entre Empresa y usuario.
- Esperar otros 3 días
- Realizar un Split comprobando si el usuario ya es cliente en la tabla de cartera de clientes o posee un contrato activo. Ésto se elabora así porque a veces los procesos en los cuales los datos entran en una tabla son lentos y de ésta forma comprobamos rápidamente si tenemos algún resultado activo. 
  - Comprobamos el SubscriberKey en la tabla de Clientes o el ContractId en la tabla de Contratos Vigor. Si existe, el usuario es cliente y por consecuencia ya es parte de Endesa y se le comunica con un email transaccional la elaboración de su contrato. De lo contrario, se envía un email final como último aviso.
- Se crea Intelligence Reports para evaluar las métricas y KPIs par mantener una constancia de beneficios o para evaluar nuevas versiones o mantener constancia de los resultados obtenidos. Éste informe se enviará el 1 de cada mes en relación a los journeys utilizados (captación y feedback)
- ##### Notas:

  - Tratar de evitar envíos los días viernes (estatísticamente está comprobado que es poco saludable para la empresa)
  - Para tomar la info que viene de la CloudPage enviar todo a través de Query Params (ej. SET @email = RequestParameter('email'))
  - Se mejora alguna pequeña falla en la página web original como el z-index que corresponde al modal que abre la elección de los idiomas  en la página oficial (queda por debajo del subnav), haciéndolo más vistoso también.

### Feedback (segundo caso de uso) Story-Telling

- Después de la instalación de las placas solares se envía un formulario de satisfacción
- Al año de ser cliente se manda encuesta (caritas) para evaluar el estado del usuario con respecto a la empresa y se actualiza la de de clientes con la probabilidad de baja. Se envía info de riesgos de baja a la atención al cliente de Endesa y se genera posible evento de rescate.
  - Automation que evalúa a través de SQL y de la DE ContratosVigentes cada día fechaContrtación - 1 año (Otro Journey que enviará el email con caritas)

#### ¿Qué tengo para antes de ser cliente?

- Logs

  - Recibir periódicamente información sobre cómo se resuelven los eventos
  - Analytics
  - Oferta comercial con la ventaja de limpiar el planeta, reducir gastos y ayudar el medioambiente

#### ¿Qué tengo mientras soy cliente?

- Logs

  - Recibir periódicamente información sobre cómo se resuelven los eventos
  - Analytics
  - Una atención al ususario fenomenal por parte de Endesa, con resolución de incidencias y asistencia personalizada para el mismo usuario. Además, un año de ventajas sobre el gasto producido con las Placas Solares

#### ¿Qué tengo para después de ser cliente?

- Logs

  - Recibir periódicamente información sobre cómo se resuelven los eventos
  - Analytics
  - Un rescate del ususario para evitar bajas y considerar posibles servicios adicionales implementados a través de atención telefónica o personal directamente con la atención al cliente de Endesa (contacto personal)

## Objetivos y analítica

#### Tratar de aumentar significativamente que tanto empresas, clientes y no-clientes adhieran al programa

- Tasa de participación

#### Aumentar la cantidad de contratos realizados

- Tasa de firma de nuevos contratos
- Mejora de contratos para empresas que ya tengan dicho contrato
- Insight, opens, sends

## Pasos realizados

- Crear BU: TFM_Endesa_MarcosLambirTorres
- Configuración de la seguridad para los correos y el servidor de envío: Se debería crear un dominio apósito para estas comunicaciones con configuración SAP y una dirección de correo a posta (ej. info@endesa.comunicaciones.com)
- Crear Roles para la BU y Usuarios (éstos roles serán designados para cada departamento, estará quien dirige el design de las comunicaciones, quien dirigirá el apartado de márketing, quien será el director supremo, etc...)
- Tanto las comunicaciones Comerciales como Transaccionales se realizarán desde la misma BU para facilitar el desarrollo y la maquetación de las comunicaciones teniendo en cuenta que cada comunicación tendrá su Send Classification.
- Se registran todos los dominios necesarios para la BU inherentes a información para el cliente, comunicaciones transaccionales, comunicaciones comerciales y soporte. De éste modo, se evitan complicaciones en la entrega de comunicaciones utilizando Salesforce porque permite diferenciar dichas comunicaciones.
- Se realiza la conexión de la ORG (CRM) para futuros intercambios de datos.
- Se crear un Send Classification con su Sender Profile, Delivery Profile y Reply Mail Management para cada comunicación. Tendremos configuración para comunicaciones informativas, comerciales y transaccionales.
- Configurar FTP:

  1. Email: marcos.lambir@jakala.com
  2. User: 51001124
  3. Pass: 1234asdf####
  4. Info server: mcm3-rvv-d4cz50jm6nszgy0rzn4.ftp.marketingcloudops.com
  5. Port: 22
- Crear DEs para el caso de uso:

  1. DE_Clientes_Cartera
  2. DE_Contratos_Vigor
  3. DE_Interactions_Web
  4. DE_LoyaltyProgramMember_Salesforce
  5. DE_TransactionJournal
  6. DE_Captacion_Solar
  7. DE_Open_Tracking
- Crear correos

  1. Correo comercial de captación
  2. Correo de engagement
- Crear Journey

  1. Journey que se encargue de enviar las comunicaciones relacionadas con el evento que se activa al recibir un pre-contrato nuevo. Éste journey se realizará con un API Event por velocidad y tiempos de respuesta inmediatos (más adelante se comparte el código Postman para ejecutarla). Además, ésto ayuda a poder accionar el journey directamente en la salida de la thank U page para evitar perder el usuario y que la acción sea veloz y permite agregar usuarios velozmente. Además nos ayuda a crear tests con un usuario que posee credenciales reales siendo ficticio.
     - API EVT: APIEvent-cdccc77a-22aa-882c-e9c5-27d4cd65d03f
     - Código de Postman:
     ```cURL
     # Request para realizar el Auth
     curl --location 'https://mcm3-rvv-d4cz50jm6nszgy0rzn4.auth.marketingcloudapis.com/v2/token' \
     --header 'Content-Type: application/json' \
     --data '{
         "grant_type": "client_credentials",
         "account_id": "510011124",
         "client_id":"trbcn36l0xvhaav9dkjbvt9w",
         "client_secret":"vMYA6wjVqU0iKUmSujR1QuUT",
         "scope": "tracking_events_write event_notification_subscription_delete event_notification_subscription_update event_notification_subscription_read event_notification_subscription_create event_notification_callback_delete event_notification_callback_update event_notification_callback_read event_notification_callback_create marketing_cloud_connect_send marketing_cloud_connect_write marketing_cloud_connect_read ott_channels_write ott_channels_read ott_chat_messaging_send ott_chat_messaging_read workflows_read tags_read approvals_read tags_write approvals_write workflows_write webhooks_write webhooks_read users_write users_read accounts_write accounts_read campaign_write campaign_read calendar_write calendar_read tracking_events_read file_locations_write file_locations_read data_extensions_write data_extensions_read list_and_subscribers_write list_and_subscribers_read web_write web_publish social_write social_read social_publish social_post sms_write sms_send sms_read push_write push_send push_read email_write email_send email_read journeys_write journeys_read journeys_execute automations_write automations_read automations_execute saved_content_write saved_content_read documents_and_images_write documents_and_images_read offline"
     }'
     ```
     ```cURL
     # Request para realizar la Request
     curl --location 'https://mcm3-rvv-d4cz50jm6nszgy0rzn4.rest.marketingcloudapis.com/interaction/v1/events' \
     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjQiLCJ2ZXIiOiIxIiwidHlwIjoiSldUIn0.eyJhY2Nlc3NfdG9rZW4iOiJYUEltM3F4RERpeWRRYUQ5VVNVNzNqczUiLCJjbGllbnRfaWQiOiJ0cmJjbjM2bDB4dmhhYXY5ZGtqYnZ0OXciLCJlaWQiOjUxMDAwMTQ0NCwic3RhY2tfa2V5IjoiUzUwIiwicGxhdGZvcm1fdmVyc2lvbiI6MiwiY2xpZW50X3R5cGUiOiJTZXJ2ZXJUb1NlcnZlciIsInBpZCI6MzUwfQ.jMbBE-9dA1_PEfNrWkHJVDKeIv2JGKicbAMsXJrZRXg.1TddfmBuFmTKqbf49G3HMRXOq9B3YT7eBNfmtg2Enrtfc_Rhl6pKHZ2LgvDwSi5eRKzDGoCKe3P5f3qJh2BXRgr8mYF5Zppqg40z699N7bqoiHJhwIM61PiAZxcwwJY9NDzm9LCs5N0RWZfzV4-Uq5LA4P7t9YWHwcWJ-' \
     --header 'content-type: application/json' \
     --data-raw '{
         "ContactKey": "80d2c948-5d53-4605-aa88-55c2aae635a1",
         "EventDefinitionKey": "APIEvent-cdccc77a-22aa-882c-e9c5-27d4cd65d03f",
         "Data": {
             "SubscriberKey": "44d6b3a3-5bb4-458f-bf58-fe3dd7cf3f03",
             "EmailAddress": "markos_laviana@yahoo.es",
             "FirstName": "Wilburn.Kihn51",
             "LastName": "Kilback",
             "Birthday": "20 May 1980 16:25",
             "GameReward": "15%",
             "SolarProduct": " Solar Plus",
             "PreContract": "CT600004",
             "isPolicy": "false",
             "CreatedDate": "01 January 2025 16:25"
         }
     }'
     ```
     - Código introducido den la Thank U Page:
     ```js
     /* SSJS */
     <script runat="server">
       Platform.Load('Core', '1');
     
       try {
         var email = Request.GetQueryStringParameter('email');
         var authEndpoint = 'https://mcm3-rvv-d4cz50jm6nszgy0rzn4.auth.marketingcloudapis.com';
         var payload = {
           account_id: '510011124',
           client_id: 'trbcn36l0xvhaav9dkjbvt9w',
           client_secret: 'vMYA6wjVqU0iKUmSujR1QuUT',
           grant_type: 'client_credentials',
         };
     
         var url = authEndpoint + '/v2/token';
         var contentType = 'application/json';
     
         var accessTokenRequest = HTTP.Post(url, contentType, Stringify(payload));
         if (accessTokenRequest.StatusCode == 200) {
           var tokenResponse = Platform.Function.ParseJSON(accessTokenRequest.Response[0]);
           var accessToken = tokenResponse.access_token;
           var rest_instance_url = tokenResponse.rest_instance_url;
         }
     
         var headerNames = ['Authorization'];
         var headerValues = ['Bearer ' + accessToken];
         var jsonBody = {
           ContactKey: email,
           EventDefinitionKey: 'APIEvent-cdccc77a-22aa-882c-e9c5-27d4cd65d03f',
           Data: {
             campoDE: 'valueDE',
           },
         };
     
         var requestUrl = rest_instance_url + '/interaction/v1/events';
         var fireEntryEvent = HTTP.Post(requestUrl, contentType, Stringify(jsonBody), headerNames, headerValues);
     
         if (fireEntryEvent.StatusCode == 201) {
           Write('201');
         }
       } catch (error) {
         Write('401 Error');
       }
     </script>

     ```
  2. Se crea otro journey encargado de manejar el story-telling del usuario. Éste journey estará conectado con una automation que filtrará utilizando SQL diariamente para evaluar el tiempo transcurrido desde la firma del nuevo contrato hasta el presente con un límite de 1 año. Ésto nos ayuda a automatizar las interacciones con los usuarios y evitar la pérdida de información.
  
     - Automation que segmentará la Data Extension de DE_Contratos_Vigor_Total en una DE que servirá como entry source del Journey
     ```sql
     SELECT Capos_de_la_tabla_contratos_vigor
     FROM DE_Contratos_Vigor_Total
     WHERE FechaFirmaContrato = DATEADD(day, -365, GETDATE());
     ```
       Esta consulta resta 365 días a la fecha actual y nos proporcionará la información correcta para comunicarle al cliente y realizar nuestro story-telling
     - Ésta Automation activará un Journey según las fechas límite que mandará un correo para recibir evaluación:
       - "¡Después de un año contigo queremos saber qué tal nos portamos!" (email)
       - Redirección a web de satisfacción
       - Almacenamiento de los datos en la segunda DE con los mismos campos de la DE segmentada
     - Éste Journey enviará comunicaciones por Push y SMS (porque se supone que el usuario ya tendrá la App. DE lo contrario se lo invita a usarla con una comunicación email)
       - Las comunicaciones descritas servirán para que el usuario contrate otro producto (un producto en voga en ése momento). De éste modo se limita la pérdida de usuarios y se fortifica la relación entre el cliente y la empresa.
