# **`Mobile Push en SFMC`**

#### Introducción:

Salesforce Marketing Cloud (SFMC) integra una herramienta dedicada a la gestión de notificaciones push en dispositivos móviles (iOS y Android). Permite a los equipos de marketing enviar notificaciones personalizadas a los usuarios, basadas en segmentación, comportamientos y eventos. MobilePush facilita la interacción en tiempo real, lo que ayuda a mejorar el engagement y la experiencia del usuario. **Mobile Studio > MobilePush**.

---

1. ### **`Mobile Push`**

   Mobile Push es una herramienta de SFMC que permite enviar notificaciones directamente a dispositivos móviles, incluso cuando la aplicación asociada está cerrada. Esto permite a las marcas **interactuar con sus usuarios a través de mensajes personalizados desde la App**, integrados dentro de una estrategia de marketing móvil más amplia.

   - **`Envío de notificaciones push personalizadas`**: Mobile Push permite el envío de notificaciones breves que se muestran en el dispositivo cuando la aplicación pertinente está cerrada. Estas notificaciones pueden incluir contenido enriquecido como imágenes, videos o incluso enlaces directos a páginas específicas dentro de la app.

     - **Outbound**: Se envían desde SFMC y aparecen en la pantalla de bloqueo del dispositivo, siempre que la app tenga habilitadas las configuraciones de Mobile Push y el usuario haya dado permiso para recibir notificaciones.
     - **In-App**: Tipo banner o pop-up que se muestran dentro de la app mientras el usuario la utiliza.
     - **Inbox**: Mensajes que permanecen en una sección específica dentro de la app (ej. la campanita de notificaciones), permitiendo al usuario consultarlos en cualquier momento desde la app.
     - **Geo-localización**:
       - `Beacon`: Notificaciones push a través de dispositivos beacons (dispositivos de proximidad) que detectan al usuario cuando tiene el Bluetooth activado. Ej. Un supermercado.
       - `Location-Entry`: Envía un push cuando el usuario se encuentre en una localización. Ej. Entrada al Barrio Chamberí.
       - `Location-Exit`: Envía un push cuando el usuario sale de una localización.

   - **`Administración de audiencia`**:
     Mobile Push permite **segmentar audiencias** en función de distintos criterios de usuario y comportamiento, facilitando el envío de notificaciones push solo a quienes cumplan con características específicas.

     - **Segmentación avanzada**: Desde Contact Builder se puede segmentar a los usuarios en función de características demográficas, comportamiento dentro de la app o eventos específicos.
     - **Envío a dispositivos asociados a un contacto**: Cada usuario puede recibir notificaciones en todos los dispositivos donde tiene la app instalada.
     - **Configuración de triggers automáticos**: Permite el envío de notificaciones push en función de eventos específicos (por ejemplo, después de una compra o al abandonar un carrito de compras).

   - **`Tipos de Envíos en Mobile Push`**:

     - **Alert**: Es una notificación push básica que envía un mensaje simple al dispositivo del usuario. Esta notificación aparece en la pantalla de bloqueo o en el centro de notificaciones del dispositivo, y no contiene enlaces ni contenido adicional. Al tocarla, generalmente solo abre la aplicación sin dirigir a una página específica o contenido adicional dentro de SFMC.
     - **Alert + Inbox**: Este es un tipo de notificación en Mobile Push que combina dos métodos de entrega. Con Alert + Inbox, el mensaje push se envía como una alerta que aparece en la pantalla del dispositivo del usuario (como una notificación estándar) y, al mismo tiempo, se almacena en la bandeja de entrada de la aplicación móvil, si esta tiene una sección de inbox o mensajes.
     - **Alert + CloudPage**: Es una notificación push que, al ser abierta por el usuario, redirige a una CloudPage específica (página web), pero no se abre directamente dentro de la app. Al hacer clic en la notificación, el usuario es llevado a una página web alojada en SFMC, fuera de la aplicación, que puede contener contenido personalizado como promociones, detalles de productos o información específica.
     - **DeepLink + OpenDirect URL**: Aparece como notificación en la pantalla de bloqueo o en la barra de notificaciones del dispositivo. Cuando el usuario interactúa con esta notificación, se abre un enlace profundo (DeepLink) que redirige al usuario a una sección específica de la app o a una URL particular, proporcionando acceso rápido al contenido deseado sin necesidad de navegar manualmente por la app.
     - **Notificación Enriquecida**: Es una notificación push que incluye multimedia o interactividad adicional (Rich Notification) y que aparece fuera de la app (en la pantalla de bloqueo o en la barra de notificaciones). Proporciona mayor atractivo y más personalización. Al interactuar con esta notificación, el usuario puede ver más contenido visual o elegir acciones, como abrir una sección específica de la app o visitar una página web.

   - **`Opciones para enviar notificaciones push dependiendo de la necesidad de la campaña`**

     1. **MobilePush**:

        - **Envío manual** de notificaciones push desde el módulo de **MobilePush** en SFMC.
        - Permite **definir el contenido del mensaje**, seleccionar la audiencia a la que deseas llegar, y programar el envío de manera personalizada.
        - Ideal para **campañas puntuales** o mensajes específicos en los que se necesita mayor control manual sobre el contenido y la segmentación.

     2. **Journey Builder**:

        - Utilizado para **enviar notificaciones push automatizadas** a través de flujos de trabajo en SFMC.
        - Permite integrar las notificaciones push como parte de un **viaje multicanal** que involucra a todos los dispositivos asociados a un contacto.
        - Ideal para **campañas basadas en el recorrido del cliente**, ya que los mensajes pueden dispararse automáticamente en momentos clave (ej. bienvenida, recordatorios de actividad, etc.).

     3. **Automation Studio**:

        - Permite configurar **flujos de trabajo automatizados** para el envío de notificaciones push en momentos específicos, como:
          - `Después de un registro en la app`.
          - Al `realizar una acción específica`, como completar un formulario o interactuar con contenido.
        - Muy útil para **campañas recurrentes o basadas en condiciones predefinidas**, en donde es necesario que la notificación se envíe en un tiempo o acción específicos sin intervención manual.

     4. **Los Triggers**:

        - **Configurar disparadores** (triggers) para enviar notificaciones push basadas en eventos sea desde un **Journey Builder** (en base a una programación específica de envío) o una **Automation** (en base a eventos y condiciones).
          - `Ejemplos`:
            - Envío automático **después de una compra o cuando el usuario abandona un carrito**.
            - Envío después de un período de inactividad en la app para **reactivar al usuario**.
            - Ideal **para mensajes transaccionales o de reactivación**.
          - `Uso de la API de Salesforce`:
            - SFMC ofrece una API que permite enviar notificaciones push de manera programática.
            - Con la API, puedes seleccionar de forma específica el **dispositivo al que deseas enviar la notificación** usando el **System Token**, lo cual permite una segmentación granular y precisa. Opción útil para **integraciones avanzadas** donde otras aplicaciones o sistemas externos necesitan enviar notificaciones push a dispositivos específicos.

   ***

2. ### **`Conexión App y Salesforce: Paso a Paso`**

   - **`Registro del Dispositivo`**

     - Cuando el usuario abre la app por primera vez, el **SDK de Salesforce MobilePush** (integrado en la app) solicita un token único de dispositivo:
       - `iOS`: Obtiene un **Device Token** a través de **APNS** (Apple Push Notification Service).
       - `Android`: Obtiene un **Registration Token** a través de **FCM** (Firebase Cloud Messaging).

   - **`Envío del Token a SFMC`**

     - La app envía el token de dispositivo a **SFMC** junto con un identificador único del usuario (como un ID de cliente).

   - **`Almacenamiento en SFMC`**

     - **SFMC** guarda el token en una **Data Extension** junto con los datos del usuario, relacionando el dispositivo con el perfil del usuario.

   - **`Creación de Notificación`**

     - El equipo de marketing configura una campaña de notificaciones en **SFMC MobilePush** (a través de Journey Builder o Automation Studio).
     - SFMC selecciona a los usuarios a notificar basándose en reglas, segmentación y eventos de comportamiento.

   - **`Envío de Notificación a APNS/FCM`**

     - Cuando se lanza una notificación, SFMC envía el contenido (mensaje, título, imagen, etc.) a:
       - `APNS` para dispositivos iOS.
       - `FCM` para dispositivos Android.
     - SFMC incluye el token de dispositivo, asegurando que la notificación llegue al usuario correcto.

   - **`Entrega a la App`**

     - **APNS/FCM** recibe la notificación desde SFMC y la entrega al dispositivo correspondiente. La aplicación recibe la notificación de acuerdo con el sistema operativo (APNS para iOS o FCM para Android).

   - **`Interacción del Usuario`**

     - El usuario ve e interactúa con la notificación. Si realiza alguna acción (clic), esa información puede devolverse a **SFMC** para analizar la interacción.

   - **`Reporte y Optimización`**
     - SFMC registra métricas clave, como qué usuarios recibieron, abrieron o interactuaron con la notificación, ayudando a mejorar futuras campañas.

   ***

3. ### **`Requisitos para la Conexión`**

   - **`App`**:

     - Integrar el **SDK de Salesforce MobilePush** en la aplicación para iOS y Android, permitiendo la recepción de notificaciones y la gestión de la relación entre el dispositivo y SFMC.
     - Utilizar un **ID de Usuario o Cliente** para identificar a cada usuario y asociar su dispositivo con su perfil en SFMC.

   - **`APNS/FCM`**:
     - Obtener el **Device Token** o **Registration Token** cuando el usuario se registra.
     - **APNS** (para iOS) y **FCM** (para Android) actúan como intermediarios, entregando las notificaciones de SFMC al dispositivo móvil.

   ***

4. ### **`Uso de Data Views y SendLogs en el Seguimiento de Notificaciones`**

   - **`Data Views`**

     - Las **Data Views** en SFMC son tablas internas que almacenan datos de eventos relacionados con interacciones de los usuarios, como envíos y aperturas de notificaciones push. Usando Data Views, se pueden crear consultas de SQL avanzadas que extraen métricas de rendimiento en tiempo real de las campañas. Estas consultas ayudan a personalizar campañas futuras basándose en el comportamiento de los usuarios.

   - **`SendLogs`**

     - El **SendLogPush** es una tabla específica que registra información detallada sobre cada notificación push enviada. Entre los datos incluidos están:
       - `ID del mensaje`: Un identificador único para cada notificación push.
       - `Estado`: Información sobre si la notificación fue entregada, abierta, o si hubo algún error.
       - `Timestamp`: Fecha y hora del envío.
       - `Identificador del dispositivo`: Asociado con el usuario que recibió la notificación.
     - El SendLog facilita el análisis detallado de las notificaciones, permitiendo identificar patrones en la interacción del usuario, lo cual es esencial para optimizar las campañas futuras y mejorar la personalización. Además facilita el **Reporting**.

   ***

5. ### **`Flujo de Registro`**

   1. **`Registro del Dispositivo`**
      - El SDK registra el dispositivo al abrirse la app y obtiene el **Device Token** (iOS) o el **Registration Token** (Android), enviándolo a **SFMC** junto con el ID de usuario.
   2. **`Asignación de Contact ID/Key Provisional`**

      - Al dispositivo se le asigna temporalmente un **Contact ID/Key**, que será provisional hasta que el usuario esté identificado.

   3. **`Identificación del Usuario`**
      - El Contact ID provisional se asocia con el ContactKey final del usuario, consolidando los datos.

   ***

6. ### **`SDK de Salesforce Mobile Push`**

   - **`El SDK de Salesforce Mobile Push`** permite la integración entre una aplicación móvil y Salesforce Marketing Cloud (SFMC) para gestionar la comunicación bidireccional entre la aplicación y la plataforma de marketing.

   - **`¿Qué es un SDK y para qué se usa?`**

     - **SDK (Software Development Kit)**: Es un conjunto de herramientas, bibliotecas, documentación y ejemplos de código que los desarrolladores utilizan para integrar funcionalidades específicas dentro de sus aplicaciones. En el caso de Salesforce, el SDK de Mobile Push permite incorporar todas las capacidades de notificaciones push y seguimiento de eventos de SFMC en aplicaciones móviles. A través del SDK, los desarrolladores pueden:

       - `Enviar notificaciones push` de forma segmentada y personalizada.
       - `Recopilar datos de interacción` en tiempo real (como registros de apertura de notificaciones o eventos de usuario).
       - `Vincular datos de usuario` con SFMC para optimizar el marketing basado en comportamientos o perfiles específicos.

     - **Además incluye**: Herramientas para gestionar configuraciones, como el manejo de permisos de notificaciones y la vinculación de dispositivos con perfiles de usuarios, para una experiencia de usuario más coherente y personalizada en todas las interacciones.

   - **`Canal de entrega de notificaciones push en Android (Firebase) e iOS (APNS)`**

     1. **Android**:

        - Android utiliza **Firebase Cloud Messaging (FCM)** para entregar notificaciones. FCM es el servicio de mensajería de Google que permite el envío de mensajes o notificaciones push desde SFMC a dispositivos Android.
        - Una vez que SFMC envía una notificación push a un dispositivo Android, esta pasa a través de Firebase, que gestiona la entrega al dispositivo de destino. Esto asegura que las notificaciones puedan llegar incluso cuando la aplicación está en segundo plano o cerrada.

     2. **iOS**:
        - En dispositivos iOS, las notificaciones push se envían a través de **Apple Push Notification Service (APNS)**, el sistema de mensajería de Apple.
        - SFMC envía el mensaje a APNS, y luego este lo dirige al dispositivo iOS registrado. APNS garantiza que el mensaje llegue con alta confiabilidad y seguridad.

   - **`Ventajas de utilizar el SDK de Salesforce Mobile Push`**

     - **Identificación del usuario en múltiples dispositivos**: Permite que un mismo usuario sea identificado y seguido en varios dispositivos, centralizando sus interacciones en SFMC.
     - **Registro de eventos específicos**: El SDK permite registrar eventos de usuario, como la visualización de un producto o la finalización de una compra, en tiempo real.
     - **Recopilación y sincronización de datos**: Los datos se sincronizan automáticamente con SFMC, ofreciendo insights para personalizar futuras campañas en función del comportamiento reciente del usuario.

   ***

7. ### **`Métricas y Reporting`**

   - **`Métricas Clave`**:

     - **Recepciones**: Número de dispositivos que reciben la notificación.
     - **Aperturas**:
       - En iOS: Al deslizar o tocar la notificación.
       - En Android: Al tocar la notificación.
     - **Visitas**: Si la notificación contiene un **OpenDirect URL**, se puede rastrear la visita a esa página.

   - **`Reportes Disponibles`**:

     - **Push Account Summary**: Resumen general de la operativa de notificaciones.
     - **Push Message Detail**: Reporte detallado por suscriptor según el JobId.
     - **Push Message Summary**: Información agregada de notificaciones en un período específico.

   ***

8. ### **`Links útiles`**:

   - **`Más sobre Mobile Push en`**: [Help Salesforce Mobile Push](https://help.salesforce.com/s/articleView?id=sf.mc_mp_mobilepush.htm&type=5).

# Guía detallada para crear comunicaciones Push en Salesforce Marketing Cloud (SFMC)

1. #### **Requisitos Previos:**

   - **Gestión de permisos**:
      - Es indispensable que el usuario haya aceptado recibir notificaciones push desde la aplicación móvil. Esto debe ser gestionado a través del SDK configurado en la app, donde los usuarios pueden otorgar el permiso al instalar la app o activarlo desde la configuración del dispositivo.  
      - El estado de permiso (opt-in) debe estar registrado en la base de datos, normalmente en un campo como `Opt-in Status`.

   - **Estructura de la Data Extension o Lista de contactos**:
      - **Campos necesarios en una Data Extension**:
        - **ContactKey o SubscriberKey** (Texto): Identificador único del usuario.
        - **DeviceID** (Texto): Identificador único del dispositivo móvil.
        - **Opt-in Status** (Booleano): Para verificar que el usuario permite recibir notificaciones push.
        - **AppID** (Texto): Identificador de la aplicación, en caso de que trabajes con varias apps.
      - Si usas una lista de contactos, asegúrate de que contenga los datos relevantes como mínimo: ContactKey y DeviceID, además del estado opt-in.

2. #### **Caso de Uso: Enviar una notificación push utilizando una Data Extension**

   - Accede a **Mobile Studio** y selecciona **Mobile Push**.
   - Haz clic en **Create Message** para iniciar un nuevo mensaje push.
   - Selecciona la plantilla **Outbound** para enviar notificaciones push desde SFMC al dispositivo móvil que tenga la aplicación instalada.
   - Define las propiedades del mensaje, incluyendo:
     - **Nombre del mensaje**.
     - **Método de envío**: Usa **Schedule** si deseas programarlo o envíalo de inmediato.
     - **Tipo de notificación**: Selecciona **Alert** para una notificación simple de texto.
   - En **Define Content**, personaliza el mensaje e incluye un **Deeplink**:
     - **¿Qué es un Deeplink?**: Es un enlace que redirige al usuario a una sección específica dentro de la app.
     - **Dónde se configura**: En la sección de contenido, agrega el esquema del enlace, por ejemplo, `myapp://ofertas/navidad`.  
     - **Nota**: El SDK de la aplicación debe estar configurado para manejar este enlace y realizar la redirección correcta.
   - En **Select Audience**, selecciona la **Data Extension** con los datos requeridos (ContactKey, DeviceID y Opt-in Status).
   - Finalmente, revisa y envía el mensaje en **Review and Send**.

3. #### **Caso de Uso: Enviar una notificación push utilizando una lista de contactos**

   - Accede a **Mobile Studio** y selecciona **Mobile Push**.
   - Haz clic en **Create Message** para crear un mensaje push.
   - Selecciona la plantilla **Inbox** para que el mensaje se almacene en la bandeja de entrada de la app.
   - Define las propiedades del mensaje, incluyendo:
     - **Nombre del mensaje** y la **aplicación móvil** correspondiente.
     - **Método de envío**: Selecciona **Schedule** si necesitas programar el mensaje.
   - En **Select Audience**, usa una **Contact Filtered List** y asegúrate de incluir campos clave como:
     - **ContactKey o SubscriberKey**.
     - **DeviceID**.
     - **Opt-in Status**.
   - Personaliza el contenido en **Define Content**, y si el mensaje debe incluir un Deeplink, asegúrate de configurarlo correctamente.
   - Revisa y procede con el envío en **Review and Send**.
