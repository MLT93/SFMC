# **`Email Studio`**

#### Introducción:

Salesforce Marketing Cloud (SFMC) es una plataforma de **marketing automation** que permite gestionar campañas de marketing digital a través de múltiples canales como correo electrónico, SMS, y redes sociales. Dentro de SFMC, **Email Studio** es la herramienta clave para crear, enviar y rastrear campañas de correo electrónico personalizadas y automatizadas. Este documento aborda las configuraciones esenciales y prácticas para utilizar Email Studio de manera efectiva.

---

1. ### **`Elementos clave de Email Studio`**:

   - **`Send Classifications`**
     Permite definir los parámetros generales para clasificar los envíos de emails como:

     - **Comerciales**: Para correos promocionales o newsletters. Necesitan un link en el footer para darse de baja.
     - **Transaccionales**: Para confirmaciones de compra.

     - **Componentes Clave**:
       - **Sender Profile**: Especifica el nombre y la dirección "From" (de quién proviene el correo).
       - **Delivery Profile**: Determina la dirección IP usada para enviar los emails y define el encabezado y pie de página del correo.
       - **Send Classifications**: Asegura el cumplimiento de las leyes anti-spam **CAN-SPAM**, como incluir un enlace para cancelar suscripciones y la dirección física de la empresa.

     **Aplicaciones**:

     - Clasificar campañas de marketing en **comerciales** (requieren un enlace de baja) o **transaccionales** (no requieren).

   - **`Sender Profiles`**
     Define quién envía el correo (nombre del remitente y dirección). Permite utilizar diferentes remitentes sin modificar la configuración de usuario.

     - **Configuración**:
       - **From Name** y **From Email**: Se pueden definir manualmente o seleccionar de una lista de remitentes verificados en SFMC.
       - **Verificación del Dominio**: Es fundamental verificar el dominio de envío para asegurarse de que los correos lleguen al destinatario.

     **Aplicaciones**:

     - Útil para personalizar las comunicaciones según el remitente que los clientes reconozcan.

   - **`Delivery Profiles`**
     Define la dirección IP y el manejo del encabezado/pie de página para los correos electrónicos enviados. Permite asegurar que los correos cumplan con las políticas de la empresa.

     - **Funcionalidades**:
       - Selección de **IP**: Se pueden configurar IPs específicas para campañas transaccionales o comerciales.
       - Configuración de **encabezados y pies de página**: Incluye enlaces, direcciones físicas y el pie legal requerido.

     **Aplicaciones**:

     - Es esencial para mantener consistencia en la entrega de correos y cumplir con la normativa CAN-SPAM.

   - **`Opt-in y Opt-out`**
     Se refiere al proceso por el cual los suscriptores se suscriben (opt-in) o se dan de baja (opt-out) de las listas de correos.

     - **Doble Opt-In**: Requiere que los usuarios confirmen su suscripción haciendo clic en un enlace en el correo que reciben tras suscribirse.
     - **Doble Opt-Out**: Funciona de manera similar pero para confirmar la baja.

     **Aplicaciones**:

     - Mejora la **calidad de la lista de suscriptores**, asegurando que solo las personas que realmente desean recibir correos se mantengan en la lista.

   - **`SAP (Sender Authentication Package)`**
     Es un conjunto de herramientas que permite la autenticación del dominio de envío, asegurando que los correos sean legítimos y protegidos contra fraudes.

     - **Componentes**:
       - **Dominio privado** para envíos y CloudPages.
       - **IP dedicada**.
       - **Marca personalizada** para enlaces e imágenes.

     **Aplicaciones**:

     - Mejora la **entregabilidad** del correo y protege la **reputación del dominio**.

   - **`Reply Mail Management (RMM)`**
     Administra las respuestas a los correos electrónicos enviados desde SFMC, incluyendo la gestión de respuestas automáticas y solicitudes de baja.

     - **Configuración**:
       - Filtrado de respuestas automáticas.
       - Procesamiento manual de solicitudes de baja.
       - Respuestas personalizadas.

     **Aplicaciones**:

     - Facilita la interacción con los suscriptores y garantiza que las solicitudes de baja se procesen correctamente.

   ***

2. ### **`Diferencia entre Elementos Clave`**:

   - **`Sender Profile vs Delivery Profile`**:
     - **Sender Profile** se enfoca en quién envía el correo (nombre y dirección de correo), mientras que **Delivery Profile** se encarga de cómo se entrega el correo (IP y configuración de encabezados/pies de página).

   ***

3. ### **`Configuraciones Importantes en Email Studio`**:

   - **Delegar Subdominio**:
     El subdominio es necesario para realizar envíos de correo con la marca de la empresa. Delegar el subdominio implica redirigir parte del dominio a los servidores DNS de **Marketing Cloud** para autenticar los correos enviados.

     **Aplicaciones**:

     - Garantiza que los correos enviados desde SFMC provengan de un dominio autenticado, mejorando la **entregabilidad**.

   ***

4. ### **`From Address Management y Domains`**:

   - **`From Address Management`**:
     Gestiona las direcciones "From" (remitentes) utilizadas en los correos electrónicos. Es crucial asegurarse de que la dirección de envío esté verificada y autenticada.

     - **Funcionalidades**:
       - **Verificación de la Dirección de Correo**: El dominio de la dirección de envío debe estar verificado.
       - **Gestión de Múltiples Remitentes**: Permite configurar y utilizar diferentes direcciones de correo de manera eficiente.

     **Aplicaciones**:

     - Esto asegura que los correos electrónicos no sean marcados como **spam** y que el remitente sea reconocido y confiable.

   - **`Domains`**:
     Son los dominios desde los cuales se envían los correos en SFMC. Son fundamentales para la autenticación del correo electrónico y la **entregabilidad**. Con esto, puedes enviar email con distintos correos pertenecientes al mismo dominio.
     Para confirmar un dominio es necesario registrar uno a través de **From Address Management > Register Domain** dentro del **Setup** de SFMC.

     - **Verificación del Dominio**: El dominio desde el que se envían correos debe ser verificado en **Marketing Cloud**. Esto ocurre después de crear el dominio. SFMC comprobará el **DNS** configurado en tu dominio.
     - **Autenticación DKIM y SPF**: Ayuda a evitar que los correos se marquen como **phishing** o **spam**, protegiendo la reputación del remitente.

   - **`Add Email Address`**:
     Son los correos específicos desde los cuales mandarás información a los subscribers. La diferencia con los **Domains** es que aquí simplemente se agrega un único correo de envío a SFMC.
     Para confirmar un correo único es necesario registrar uno a través de **From Address Management > Add Email Address** dentro del **Setup** de SFMC y esperar el correo de verificación que envía Salesforce.

     **Aplicaciones**:

     - Mejora la **entregabilidad**, asegurando que los correos no sean bloqueados por los filtros de spam y lleguen correctamente a la bandeja de entrada del destinatario.

   ***

5. ### **`Casos Prácticos`**:

   - **Configurar una campaña de Email**:
     Para configurar una campaña básica en Email Studio, se necesita:
     - Un **Sender Profile** verificado.
     - Un **Delivery Profile** que utilice una IP dedicada o compartida.
     - Clasificar el envío como **comercial** o **transaccional** con **Send Classification**.
     - Opcionalmente, configurar un **Reply Mail Management** para gestionar las respuestas.

   Este flujo asegura que las campañas de email cumplan con los requisitos legales y de marca, mientras optimiza la **entregabilidad** y la **gestión de respuestas**.

# Guía detallada para configurar aspectos esenciales de Email Studio en Salesforce Marketing Cloud (SFMC):

1. #### **Accede a la Configuración de SFMC**:

   - Inicia sesión en tu cuenta de **Salesforce Marketing Cloud**.
   - Dirígete a **Setup** en la esquina superior derecha.
   - Navega a **Platform Tools > Feature Settings > Email Studio**.

2. #### **Configurar From Address Management > Register Domain**:

   - **Accede a From Address Management**:

     - En la pestaña de **Setup**, selecciona **From Address Management**.
     - Encontrarás en la esquina superior dcha tres opciones: **Register Domain**, **Import** y **Add Email Address**.

     En **From Address Management** de Salesforce Marketing Cloud (SFMC), las opciones **Register Domain** y **Add Email Address** tienen diferencias clave en cuanto a lo que configuran y cómo se utilizan para el envío de correos electrónicos.
     La opción **Import** se refiere a la capacidad de importar múltiples direcciones de correo electrónico para su uso como remitentes en las campañas de email, es innecesaria más explicación.

   - **Register Domain (Registrar Dominio)**:

     - **Propósito**: Registrar un dominio permite que SFMC reconozca el dominio desde el cual se enviarán los correos electrónicos (por ejemplo, **tudominio.com**).
     - **Alcance**: Este paso asegura que tienes la propiedad de todo el dominio y que puedes usar cualquier dirección de correo electrónico que esté bajo ese dominio (por ejemplo, **info@tudominio.com**, **soporte@tudominio.com**, etc.).
     - **Verificación**:
       - Salesforce enviará un enlace de verificación al propietario del dominio (un email de confirmación).
       - Generalmente Salesforce realiza una verificación a nivel de **DNS** y proporcionará un registro TXT o CNAME que deberás añadir en la configuración DNS de tu dominio. Este registro se añade a la configuración DNS en el panel de administración del dominio o en el proveedor de hosting (por ejemplo, cPanel, GoDaddy, AWS Route 53, Cloudflare, etc.).
     - **Ventajas**: Una vez que el dominio está registrado y verificado, puedes utilizar cualquier dirección de correo que pertenezca a ese dominio sin necesidad de registrar cada dirección individualmente.

   - **Add Email Address (Añadir Dirección de Correo Electrónico)**:

     - **Propósito**: Añadir una dirección de correo específica te permite configurar y utilizar una dirección de correo concreta para los envíos de email (por ejemplo, **ventas@tudominio.com**).
     - **Alcance**: En este caso, SFMC solo reconoce y valida esa dirección específica de correo, no el dominio completo.
     - **Verificación**:
       - Para verificar la dirección de correo electrónico, SFMC envía un correo de confirmación a esa dirección. Deberás hacer clic en el enlace de verificación recibido para confirmar su validez.
     - **Ventajas**: Es útil si solo necesitas utilizar una o algunas direcciones de correo específicas para los envíos sin gestionar la configuración de todo el dominio.

   - **Principales Diferencias**:

     | Característica   | Register Domain                                                                         | Add Email Address                                     |
     | ---------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
     | **Alcance**      | Verifica todo el dominio                                                                | Verifica solo una dirección específica                |
     | **Propósito**    | Permite enviar desde cualquier dirección bajo ese dominio (ej. cualquier@tudominio.com) | Solo permite enviar desde esa dirección en particular |
     | **Verificación** | Requiere cambios en el DNS y confirmación del dominio                                   | Solo requiere confirmación por email de esa dirección |
     | **Uso Común**    | Empresas que envían desde múltiples direcciones bajo el mismo dominio                   | Organizaciones con una o pocas direcciones de envío   |
     | **Ejemplo**      | Verificar **empresa.com**                                                               | Verificar **soporte@empresa.com**                     |

3. #### **Configurar Sender Profiles**

   - **Navega a Email Studio > Admin > Sender Profiles**:

     - Ve a **Sender Profiles** para configurar un nuevo perfil de remitente.

   - **Crear un Perfil de Remitente**:

     - Haz clic en **Create** (Crear) para generar un nuevo perfil.
     - **Nombre del Perfil**: Introduce un nombre descriptivo para el perfil. Ejemplo: "Remitente Marketing".
     - **From Name**: Nombre que aparecerá como remitente en los correos enviados.
     - **From Email**: Dirección de correo electrónico desde la que se enviarán los correos.
     - **Custom Reply Mail Management Settings > Use custom settings below > Choose from list**: Dirección a la que los destinatarios pueden responder. Por defecto aparece la propia.

   - Haz clic en **Save** (Guardar) para completar la configuración.

4. #### **Configurar Delivery Profiles**

   - **Navega a Email Studio > Admin > Delivery Profiles**:

     - Accede a **Delivery Profiles** desde el menú de administración.

   - **Crear un Perfil de Entrega**:

     - Haz clic en **Create** (Crear) para crear un nuevo perfil de entrega.
     - **Name**: Introduce un nombre para el perfil de entrega, como "Perfil de Entrega de Promociones".
     - **Sender Profile**: Selecciona el perfil de remitente creado previamente.
     - **Domain**: Elige el dominio registrado que será utilizado para los correos enviados.
     - **IP de Envío**: Si tienes configuraciones específicas de IPs dedicadas, selecciona la IP correcta para el envío.

   - Guarda el perfil con **Save**.

5. #### **Configurar Send Classifications**

   - **Navega a Email Studio > Admin > Send Classifications**:

     - Accede a **Send Classifications** desde el menú de administración.

   - **Crear una Clasificación de Envío**:

     - Haz clic en **Create** (Crear) para crear una nueva clasificación.
     - **Nombre**: Introduce un nombre como "Clasificación Transaccional" o "Clasificación Promocional".
     - **Delivery Profile**: Selecciona el perfil de entrega asociado.
     - **Send Type**: Define si el tipo de envío será **Commercial** (newsletter, productos, etc.) o **Transactional** (pagos, transacciones monetarias, etc.).
     - **CAN-SPAM**: Elige si el correo necesita cumplir con las regulaciones de **CAN-SPAM**:

       - Con Commercial deberás introducir un link para darse de baja en el footer del correo y la dirección de la empresa.
       - Con Transactional es innecesario algún link.

     - Guarda la configuración con **Save**.

6. #### **Configurar Reply Mail Management**

   Aquí tienes la explicación de cómo configurar **Reply Mail Management** en **Salesforce Marketing Cloud** (SFMC), con el desglose de los puntos que mencionas. **Reply Mail Management (RMM)** te ayuda a gestionar las respuestas de tus correos electrónicos de manera eficiente, incluyendo las respuestas automáticas, la gestión de las solicitudes de baja, y el enrutamiento de las respuestas.

   - **Acceso a Reply Mail Management**:

     1. **Navega a Email Studio**:

        - Ve al menú superior y selecciona **Email Studio**.
        - Dentro de **Email Studio**, selecciona **Admin** (esta es otra forma de acceder a la config).

     2. **Selecciona Reply Mail Management (RMM)**:

        - Una vez en Admin, busca y selecciona **Reply Mail Management**.

   - **Configuración de Reply Mail Management**:

   - **Paso 1: Definir la Reply Address (Reply Address Definition)**

     Este es el primer paso para configurar tu dirección de respuesta. Aquí deberás definir varios campos clave:

     - **Email Display Name (required)**:

       - Este es el nombre que aparecerá como remitente cuando los destinatarios reciban correos electrónicos de respuesta.
       - **Ejemplo**: "Equipo de Soporte - Tu Empresa".

     - **Reply Subdomain (required)**:

       - El subdominio que será usado para gestionar las respuestas a tus correos electrónicos. Este subdominio debe estar configurado y verificado previamente en Salesforce.
       - **Ejemplo**: Si tu dominio es **tudominio.com**, podrías usar algo como **respuestas.tudominio.com**.

     - **Email Reply Address (required)**:

       - La dirección de correo electrónico a la que se enviarán las respuestas. Esta será la dirección que los destinatarios verán cuando respondan a tus mensajes.
       - **Ejemplo**: **respuestas@tudominio.com**.
       - **Redireccionamiento**: Las respuestas enviadas a esta dirección serán reenviadas automáticamente a la dirección interna que configures en el campo **Routing Address for Remaining Replies** dentro de RMM.

     - **DNS Record Redirect Complete**:
       - Antes de que Reply Mail Management funcione correctamente, deberás asegurarte de que la redirección de los registros **DNS** se haya completado. Salesforce proporcionará un **registro DNS TXT o CNAME** que debes añadir a la configuración del DNS de tu dominio. Esto confirma que tienes control sobre el dominio que estás utilizando.
       - Aquí puedes encontrar más detalles sobre cómo completar la redirección de registros DNS: [Completar la Redirección de DNS](https://help.salesforce.com/s/articleView?id=sf.mc_es_request_DNS_changes_from_ISP.htm&type=5).

   - **Paso 2: Filtros de Respuesta (Reply Filter)**

     En esta sección puedes definir cómo gestionar ciertos tipos de respuestas comunes, como las respuestas automáticas de fuera de la oficina o las solicitudes de baja.

     - **Delete Auto-Replies and Out-of-Office**:

       - Activa esta opción para que las respuestas automáticas, como las de "fuera de la oficina", se eliminen y no sean procesadas.

     - **Unsubscribe Manual Requests**:

       - Define cómo se gestionarán las solicitudes de baja (unsubscribe) que los usuarios envíen al responder a tus correos electrónicos.
       - **Ejemplo**: Si un usuario responde con la palabra "Unsubscribe", puedes configurar que Salesforce procese automáticamente esta solicitud y elimine al usuario de futuras comunicaciones.

     - **Terms**:
       - Aquí puedes definir ciertas palabras clave o términos que se utilizarán para detectar automáticamente solicitudes de baja o respuestas no deseadas. Ejemplo: "Unsubscribe", "Baja", "Stop".

   - **Paso 3: Respuestas Automáticas (Response)**

     Aquí puedes configurar un correo de respuesta automática para aquellos casos donde se detecte que no es necesario reenviar la respuesta manualmente.

     - **Automated Response Email for Remaining Replies**:

       - Si un usuario responde a tu correo electrónico y su mensaje no cumple con los criterios definidos en los filtros anteriores, puedes optar por enviarle una respuesta automática.
       - Esto es útil para dar una confirmación inmediata o un aviso de que su correo ha sido recibido.
       - **Ejemplo de mensaje automático**:
         - "Gracias por su respuesta. Hemos recibido su correo y nuestro equipo de soporte le contactará en breve".

     - **Paso 4: Enrutamiento (Routing)**

       En esta sección, defines a dónde se enviarán las respuestas que no sean filtradas o respondidas automáticamente.

     - **Routing Address for Remaining Replies (required)**:

       - Especifica la dirección de correo a la que serán enviadas las respuestas restantes que no se eliminaron, no generaron una baja automática, o no recibieron una respuesta automatizada.
       - **Ejemplo**: Si las respuestas deben ser gestionadas por un equipo de atención al cliente, puedes dirigirlas a una dirección como **soporte@tudominio.com**.

     - **Paso 5: Guardar y Verificar la Configuración**

       - Después de completar todos los pasos anteriores, haz clic en **Save** para guardar la configuración.
       - **Verificación**: Envía un correo de prueba desde **Email Studio** para asegurarte de que las respuestas se gestionen correctamente según la configuración establecida. Verifica que:
         - Las respuestas automáticas se envían correctamente.
         - Las respuestas se reenvían a la dirección de enrutamiento que configuraste.

   - **Más Información: Reply Mail Management Trailhead**

     Puedes aprender más sobre **Reply Mail Management** y seguir una guía paso a paso en el recurso oficial de Salesforce en este enlace:
     [Reply Mail Management Trailhead](https://help.salesforce.com/s/articleView?id=sf.mc_es_reply_mail_management.htm&type=5).

7. ### **Resumen de Especificaciones**

   - **From Address Management**: Dominio verificado y listo para usarse en envíos de correos.
   - **Sender Profiles**: Perfil de remitente configurado con nombre y dirección de correo específicos.
   - **Delivery Profiles**: Perfil de entrega creado y vinculado con un perfil de remitente y dominio.
   - **Send Classifications**: Clasificaciones configuradas para separar envíos promocionales de transaccionales.
   - **Reply Mail Management**: Gestión de respuestas automatizada y configurada para manejar correos entrantes.

Este flujo te permite gestionar y optimizar los envíos de correo en Salesforce Marketing Cloud mediante la correcta configuración de dominios, perfiles de remitente y entrega, clasificaciones de envío y gestión de respuestas.
