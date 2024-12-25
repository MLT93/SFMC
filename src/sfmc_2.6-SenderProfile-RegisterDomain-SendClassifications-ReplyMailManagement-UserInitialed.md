# **`Sender Profiles, Registered Domains, Send Classifications, Reply Mail Management y User-Initiated Sends en SFMC`**

#### Introducción:

Salesforce Marketing Cloud (SFMC) es una plataforma potente para la gestión del marketing digital, que permite a las empresas crear, automatizar y optimizar campañas a través de múltiples canales. Entre sus herramientas clave, se encuentran **Sender Profiles**, **Registered Domains**, **Send Classifications** y **User-Initiated Sends**, que ayudan a definir la manera en que los correos electrónicos son enviados y gestionados.

1. ### **`Sender Profiles`**:

   Un **Sender Profile** en SFMC especifica el nombre y la dirección de correo electrónico que los destinatarios verán cuando reciban un mensaje. Define el remitente del correo, tanto en la parte visible del "From" (De), como en la dirección de respuesta. [Help Salesforce Config Sender Profile](https://help.salesforce.com/s/articleView?id=sf.mc_dm_create_distributed_marketing_sender_profile.htm&type=5).

   - **Funcionalidades**:

     - Definir el **nombre del remitente** visible para los destinatarios.
     - Establecer una **dirección de correo electrónico** de respuesta, que puede ser diferente del remitente.
     - Permite **personalizar** estas opciones en función de campañas, departamentos o marcas.

   - **Ejemplo**:
     Imagina que tienes una campaña de marketing para una tienda de ropa llamada "ModaX". El **Sender Profile** podría tener los siguientes datos:

     - **From Name**: "Equipo ModaX"
     - **From Email**: "info@modax.com"
     - **Reply-to Email**: "respuestas@modax.com"

     De esta manera, cuando los usuarios reciban el correo, verán que proviene del "Equipo ModaX" y podrán responder directamente a "respuestas@modax.com".

   ***

2. ### **`Registered Domains en From Address Management`**:

   Un **Registered Domain** es un dominio verificado que utilizas para enviar correos electrónicos desde SFMC. El dominio registrado y verificado asegura que los correos enviados sean reconocidos como legítimos por los servidores de correo de los destinatarios, lo que mejora la entregabilidad y evita que los correos sean marcados como spam. [Help Salesforce Config Domain](https://help.salesforce.com/s/articleView?id=sf.mc_es_register_a_domain.htm&type=5).

   - **Funcionalidades**:

     - Mejora la **entregabilidad** de los correos electrónicos al utilizar un dominio registrado y verificado.
     - **Protección de marca** mediante la autenticación de los correos enviados.
     - Es parte del **proceso de configuración de DKIM** (DomainKeys Identified Mail) para autenticar los correos electrónicos.

   - **Ejemplo**:
     Si "ModaX" envía correos desde el dominio **"modax.com"** o para pruebas **"modaxtesting.com"**, este dominio debe estar registrado y verificado en SFMC (esto se hace en **Setup > Platform Tools > Feature Settings > Email Studio > From Address Management** y crear un dominio en **Register Domain**). De esta manera, los correos enviados desde **"info@modax.com"** tendrán una mejor tasa de entrega, evitando ser bloqueados por filtros de spam.

   `** Recuerda que esta parte debe ser completada después de configurar el usuario que envía el correo en **Sender Profiles**`.

   ***

3. ### **`Send Classifications`**:

   Las **Send Classifications** en SFMC son configuraciones que determinan cómo se enviarán los correos electrónicos, ya sea como correos de marketing o transaccionales. También define el **Sender Profile**, el **Delivery Profile** y las opciones de gestión de correos no entregados con sus respuestas por defecto. [Help Salesforce Create a Send Classification](https://help.salesforce.com/s/articleView?id=sf.mc_es_create_send_classification.htm&type=5). Una **Send Classification** al fina es la mezcla entre el Sender Profile, el Delivery Profile y una configuración de cómo le debe llegar al cliente la comunicación y la información asociada (el head, el footer, el remitente, etc). [Crear Clasificación de Envío SFMC](https://help.salesforce.com/s/articleView?id=sf.mc_es_send_classifications.htm&type=5).

   Las clasificaciones de envío incluyen los componentes que se indican a continuación:

   - **Perfil de entrega.**
   - **Perfil de remitente.**
   - **Clasificación CAN-SPAM (control de ataques de pornografía y marketing no solicitados).**

   Las clasificaciones de envío definen parámetros para un trabajo de correo electrónico específico. Aquí defines cómo será la comunicación

   - **Configuración**:

     - Clasificar los envíos como **Comerciales** o **Transactionales**.
     - Definir cómo se gestionan las **bajas de suscripción** y las respuestas.
     - Asignar un **Sender Profile** y un **Delivery Profile**.

   - **Crear Delivery Profile**: [¿Qué es un Delivery Profile?](https://help.salesforce.com/s/articleView?id=sf.mc_es_delivery_profiles.htm&type=5) | [Crear Delivery Profile](https://help.salesforce.com/s/articleView?id=sf.mc_es_create_delivery_profile.htm&type=5). Perfil de entrega con el footer y head específicos para comuicaciones comerciales.
   - **Crear Sender Profile**: [¿Qué es un Sender Profile?](https://help.salesforce.com/s/articleView?id=sf.mc_es_sender_profile.htm&type=5) | [Crear Delivery Profile](https://help.salesforce.com/s/articleView?id=sf.mc_es_create_sender_profile.htm&type=5). Perfil con la información del remitente.
   - **Ejemplo**:

     Para la tienda "ModaX", puedes crear dos **Send Classifications**:

     - **Marketing Emails**: Para envíos de promociones y novedades, que podrían utilizar un Sender Profile con el remitente "Promociones ModaX".
     - **Transactional Emails**: Para envíos de confirmaciones de pedido, con un remitente como "Pedidos ModaX". Las comunicaciones transaccionales evitan que los usuarios se den de baja, ya que son necesarias para completar cualquier transacción.

   ***

4. ### **`Reply Mail Management (RMM)`**:

   **Reply Mail Management (RMM)** te ayuda a gestionar las respuestas de tus correos electrónicos de manera eficiente incluyendo respuestas automáticas, la gestión de las solicitudes de baja, y el enrutamiento de las respuestas. [Gestión del Correo de Respuestas](https://help.salesforce.com/s/articleView?id=sf.mc_es_reply_mail_management.htm&type=5).

   - **Acceso a Reply Mail Management**:

     - Inicia sesión en SFMC, navega a **Email Studio** > **Admin** > **Reply Mail Management**.

   - **Definir la Email Reply Address**:

     - Antes de empezar es necesario ponerse en contacto con el ejecutivo de cuenta para solicitar un paquete Autenticación de remitente o una solicitud de servicios de RMM **si no adquirió el producto SAP**. El representante de cuentas reenvía la solicitud de SAP o de acceso de RMM
     - [Realizar Configuración RMM](https://help.salesforce.com/s/articleView?id=sf.mc_es_rmm_perform_initial_configuration.htm&type=5).
     - Configura el **Email Display Name** (nombre del remitente), el **Reply Subdomain** (subdominio de respuesta), y la **Email Reply Address** (dirección de correo para respuestas).
     - Asegúrate de haber completado la **redirección de DNS** con los registros TXT o CNAME que te proporcione SFMC.
     - **Redireccionamiento**: Las respuestas enviadas a esta dirección serán reenviadas automáticamente a la dirección interna que configures en el campo **Routing Address for Remaining Replies** dentro de RMM.

   - **Configurar los Filtros de Respuesta**:

     - Elimina las respuestas automáticas y las de fuera de oficina.
     - Gestiona automáticamente las solicitudes de baja (unsubscribe) basadas en palabras clave como "Unsubscribe".

   - **Configurar Respuestas Automáticas**:

     - Configura una **respuesta automática** que se enviará a las respuestas que no hayan sido filtradas.

   - **Definir el Enrutamiento**:

     - Especifica una dirección de correo a la que se reenviarán las respuestas restantes que no reciban una respuesta automática ni sean eliminadas.

   - **Guardar y Verificar**:

     - Guarda la configuración y envía correos de prueba para asegurarte de que todo funcione correctamente.

   ***

5. ### **`User-Initiated`**:

   Un **User-Initiated** es un tipo de envío programado manualmente en SFMC. Permite definir cuándo y cómo se enviarán los correos electrónicos a una audiencia específica y con una configuración determinada. Es útil para correos planificados con antelación o campañas recurrentes. [Video YouTube Enable User-Initialed](https://www.youtube.com/watch?v=P8qoVpNsSkg).

   - **Funcionalidades**:

     - Envío de correos a una audiencia definida en un momento específico.
     - Posibilidad de **programar** correos para ser enviados en el futuro.
     - Se utiliza principalmente para **campañas de marketing masivas** o eventos específicos.

   - **Ejemplo**:

     Supongamos que "ModaX" quiere enviar una promoción especial de "Black Friday". Con un **User-Initiated Send**, puedes programar el envío de este correo el viernes por la mañana a las 8:00 AM a todos los suscriptores que han mostrado interés en promociones anteriores.

   ***

### Resumen:

- **Sender Profiles** definen quién es el remitente de los correos y a dónde responderán los destinatarios.
- **Registered Domains** aseguran que el dominio desde el que se envían los correos sea reconocido como legítimo.
- **Send Classifications** clasifican los correos como promocionales o transaccionales y controlan cómo se gestionan las respuestas.
- **RMM** construye las respuestas automáticas.
- **User-Initiated Sends** permiten programar envíos de correos a una audiencia en un momento específico, generalmente utilizados para campañas planificadas.

Estos componentes son esenciales para una estrategia efectiva de envío de correos. Para enviar uno, mira este [Video YouTube Send Email](https://www.youtube.com/watch?v=oMaZMz7z9yY).
