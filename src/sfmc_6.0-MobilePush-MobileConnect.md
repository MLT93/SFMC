# **`Mobile Push y Mobile Connect en SFMC`**

#### Introducción:

Salesforce Marketing Cloud (SFMC) integra los canales de Mobile Push y Mobile Connect para potenciar la **automación en marketing móvil dentro de Mobile Studio**. Estas herramientas permiten a las marcas alcanzar a sus usuarios directamente en sus dispositivos móviles, ya sea a través de notificaciones push dentro de aplicaciones móviles (Mobile Push) o mediante mensajes de texto SMS (Mobile Connect), asegurando una conexión directa, relevante y personalizada con el cliente.

---

1. ### **`Mobile Push`**

   Mobile Push es una herramienta de SFMC que permite enviar notificaciones directamente a dispositivos móviles, incluso cuando la aplicación asociada está cerrada. Esto permite a las marcas **interactuar con sus usuarios a través de mensajes personalizados desde la App**, integrados dentro de una estrategia de marketing móvil más amplia.

   - **`Envío de notificaciones push personalizadas`**: Mobile Push permite el envío de notificaciones breves que se muestran en el dispositivo cuando la aplicación pertinente está cerrada. Estas notificaciones pueden incluir contenido enriquecido como imágenes, videos o incluso enlaces directos a páginas específicas dentro de la app.

     - **Funcionalidades**:

       - **Notificaciones push outbound**: Se envían desde SFMC y aparecen en la pantalla de bloqueo del dispositivo.
       - **Mensajes in-app**: Tipo banner o pop-up que se muestran dentro de la app mientras el usuario la utiliza.
       - **Bandeja de entrada (Inbox)**: Mensajes que permanecen en una sección específica dentro de la app, permitiendo al usuario consultarlos en cualquier momento.
       - **Geo-referenciación y beacons**: Envío de mensajes específicos según la ubicación del usuario o cuando pasa cerca de un beacon (dispositivo de proximidad).

   - **`Administración de audiencia`**:
     Mobile Push permite **segmentar audiencias** en función de distintos criterios de usuario y comportamiento, facilitando el envío de notificaciones push solo a quienes cumplan con características específicas.

     - **Funcionalidades**:

       - **Segmentación avanzada**: Desde Contact Builder se puede segmentar a los usuarios en función de características demográficas, comportamiento dentro de la app o eventos específicos.
       - **Envío a dispositivos asociados a un contacto**: Cada usuario puede recibir notificaciones en todos los dispositivos donde tiene la app instalada.
       - **Configuración de triggers automáticos**: Permite el envío de notificaciones push en función de eventos específicos (por ejemplo, después de una compra o al abandonar un carrito de compras).

   - **`Tipos de Envíos en Mobile Push`**:

     - **Alert**: Envío de una notificación de texto desde la app hacia el dispositivo del usuario.
     - **Alert + CloudPage**: Notificación de alerta que abre una CloudPage específica dentro de SFMC al abrir la app.
     - **DeepLink + OpenDirect URL**: Notificación que incluye una URL de destino, la cual redirige al usuario a una página específica dentro de la app cuando hace clic en la notificación.

   ***

2. ### **`Mobile Connect`**

   Mobile Connect es la herramienta de SFMC para gestionar y enviar mensajes SMS a dispositivos móviles, incluyendo desde notificaciones transaccionales hasta mensajes promocionales. Su enfoque es establecer un canal de comunicación más tradicional pero efectivo, permitiendo **interacciones bidireccionales y personalizadas**.

   - **`Gestión de campañas de SMS`**: Mobile Connect facilita la creación y ejecución de campañas de SMS, con distintos tipos de mensajes que incluyen confirmaciones de pedidos, recordatorios de citas, promociones y mensajes de seguridad.

     - **Mensajes transaccionales**: Mensajes automáticos para confirmar acciones específicas como compras, citas o entregas.
     - **Mensajes comerciales**: Mensajes promocionales o de re-engagement, diseñados para incentivar la participación del usuario mediante ofertas o descuentos.
     - **Mensajes de seguridad**: Envío de códigos de autenticación (MFA) u otras notificaciones de seguridad como cambios de contraseña.

   - **`Optimización de entrega y respuesta`**:
     Mobile Connect permite personalizar el proceso de suscripción (opt-in) y cancelación (opt-out), y automatizar respuestas a interacciones específicas de los usuarios para mejorar la efectividad de las campañas.

     - **Funcionalidades**:

       - `Opt-in y Opt-out`: Proceso mediante el cual los usuarios se suscriben (opt-in) o cancelan (opt-out) la recepción de mensajes SMS.
       - `Códigos cortos (Short Code) y largos (Long Code)`: Configuración de números desde los que se envían mensajes SMS; los códigos cortos son más comunes en campañas masivas.
       - `Keywords personalizadas`: Palabras clave que los usuarios pueden enviar por SMS para suscribirse o cancelar, o para responder a promociones específicas.

     - **Aplicaciones**:

       - **Ofrecer interacciones bidireccionales en campañas de SMS**, permitiendo a los usuarios responder con palabras clave para obtener más información o participar en promociones.
       - **Monitorear el rendimiento de las campañas** para optimizar estrategias y maximizar el retorno de inversión (ROI) en marketing SMS.

   ***

3. ### **`SDK de Salesforce Mobile Push`**

   - El **SDK de Salesforce Mobile Push** permite la integración entre una aplicación móvil y Salesforce Marketing Cloud (SFMC) para gestionar la comunicación bidireccional entre la aplicación y la plataforma de marketing.

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

4. ### **`Links útiles`**:

   - **`Más sobre Mobile Push en`**: [Help Salesforce Mobile Push](https://help.salesforce.com/s/articleView?id=sf.mc_mp_mobilepush.htm&type=5).
   - **`Más sobre Mobile Connect en`**: [Help Salesforce Mobile Connect](https://help.salesforce.com/s/articleView?id=sf.mc_moc_mobileconnect.htm&type=5).
