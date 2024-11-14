### **`Mobile Connect en SFMC`**

#### Introducción:

Salesforce Marketing Cloud (SFMC) integra una plataforma de mensajería para enviar SMS, MMS, y mensajes de texto automatizados a los usuarios móviles. Permite gestionar campañas de mensajería, automatizar flujos de trabajo de mensajes y personalizar la comunicación con los clientes a través de canales de mensajería directa, como los mensajes de texto. **Mobile Studio > MobileConnect**.

---

1. ### **`Características principales de SFMC MobileConnect`**

   - **`Tipos de Mensajes SMS`**

     MobileConnect permite el envío de diferentes tipos de mensajes para cubrir distintas necesidades de comunicación:

     - **Mensajes Transaccionales**:
       - Usados para confirmaciones de compra, citas, o notificaciones de entrega. Son mensajes automáticos y de bajo nivel de personalización, pensados para brindar información crítica en el momento adecuado.
     - **Mensajes Comerciales**:
       - Enfocados en campañas de reactivación, estos mensajes buscan incentivar a los clientes mediante ofertas, descuentos y encuestas, dirigiéndolos también a sitios web o páginas de destino.
     - **Mensajes de Seguridad**:

       - Incluyen notificaciones de autenticación multifactor (MFA), recordatorios de seguridad o directrices, útiles para transacciones seguras o contenido sensible.

     - **Aplicaciones**:
       - Confirmaciones de citas, compras y entregas.
       - Campañas de retención con descuentos y encuestas.
       - Seguridad y autenticación en comunicaciones críticas.

   - **`Templates para SMS`**

     MobileConnect ofrece plantillas predefinidas para facilitar la creación de campañas:

     - **Outbound**: Ideal para mensajes de salida estándar a los suscriptores.
     - **Text Response**: Responde automáticamente a mensajes entrantes.
     - **Vote Survey**: Recoge respuestas de votación o encuesta de los usuarios.
     - **Mobile Opt-In**: Facilita la suscripción a la lista de SMS mediante una palabra clave.
     - **Info Capture**: Permite la captura de información adicional mediante respuestas interactivas.
     - **Email Opt-In**: Invita a los usuarios a suscribirse a comunicaciones por correo electrónico.
     - **Send Email**: Envía un correo electrónico activado tras la interacción de los usuarios.

     - **Aplicaciones**:
       - Interacciones de salida, encuestas y respuestas automáticas.
       - Suscripciones SMS y email opt-in para enriquecer el perfil del usuario.

   ***

2. ### **`Conceptos clave de configuración de SMS`**

   - **Opt-In y Opt-Out**:

     - **Single Opt-In**: Los usuarios se suscriben mediante una palabra clave o formulario.
     - **Double Opt-In**: Requiere confirmación adicional para asegurar la suscripción del usuario.
     - **Double Opt-In Age Validation**: Validación de edad durante el proceso de suscripción, útil para productos restringidos por edad.

   - **Códigos SMS y Supermensajes**:

     - **Short Code**: Número corto (5-6 dígitos) para campañas masivas de alta frecuencia.
     - **Long Code**: Número largo (11-13 dígitos) con prefijo de país, adecuado para comunicaciones menos frecuentes y bidireccionales.
     - **Private o Dedicated Code**: Exclusivo para campañas de alto volumen, sin compartirlo con otras cuentas.
     - **Shared Code**: Código compartido entre cuentas para optimizar recursos.
     - **Súper Mensajes**: Los SMS consumen súper mensajes, calculados según país y volumen de envío.

   - **Restricciones de caracteres**:

     - **GSM 3.38**: Máximo de 160 caracteres; si se supera, el mensaje se dividirá.
     - **Unicode**: Permite 70 caracteres (ideal para emoticonos y caracteres especiales), limitados a 67 caracteres si se concatena.

     **Aplicaciones**:

     - Comunicación masiva con Short Codes o Long Codes para comunicaciones menos frecuentes.
     - Control de volumen y segmentación mediante el uso de supermensajes y códigos dedicados.

   ***

3. ### **`Keywords en MobileConnect`**

   - **Keywords** son palabras o frases que permiten la interacción directa con el canal SMS y la suscripción automática de usuarios:

     - **Keyword de Ayuda**: Ej. “HELP” o “AYUDA”, brinda acceso rápido a soporte.
     - **Keyword de Baja (Opt-Out)**: Ej. “STOP” o “BAJA”, permite cancelar la suscripción.
     - **Keyword de Suscripción**: Ej. “SIGNUP” o “ALTA”, facilita la suscripción inicial y la segmentación de la audiencia.

     **Aplicaciones**:

     - Soporte inmediato, cancelación rápida y suscripción simplificada para el usuario.

   ***

4. ### **`Administración del Envío`**

   **Modelo de Datos para Contactos**:

   Cuando un usuario se suscribe a Mobile Studio, su información se registra en All Contacts dentro de Contact Builder. Los campos principales incluyen MobileNumber, Locale y ContactID.

   **Envíos desde una Data Extension (DE) o Lista**:

   - **Data Extension (DE)**: Requiere campos como MobileNumber y Locale. Ideal para audiencias segmentadas, con datos específicos.
   - **Lista**: Usada para campañas con datos limitados. Solo se incluyen los campos estándar de Contact Builder.

   **Restricciones**:

   - **GSM** permite 160 caracteres y **Unicode** 70 caracteres. Las concatenaciones en GSM permiten 153 caracteres por mensaje.
   - **Emojis y caracteres especiales** en Unicode reducen el límite a 67 caracteres por mensaje.

   **Creación de SMS**:

   MobileConnect permite visualizar y concatenar mensajes, además de ajustar las configuraciones de envío.

   - **Aplicaciones**:
     - Envíos personalizados desde Data Extensions y listas preconfiguradas.
     - Creación y administración flexible de mensajes para optimizar la experiencia del usuario.

   ***

5. ### **`Formas de Envío de SMS`**

   Existen varios métodos de envío en MobileConnect:

   - **MobileConnect**: Permite envíos y recepción de SMS directamente desde el sistema.
   - **Journey Builder (JB) SMS Activity**: Automatiza el envío en Journey Builder, permitiendo una personalización avanzada basada en el recorrido del cliente.
   - **SMS API**: Conectividad para envíos de alto volumen y automatización de mensajes transaccionales.
   - **Automation Studio**: Automatización avanzada de SMS en base a eventos o triggers.
   - **Journey Builder**: Envía mensajes dentro de journeys personalizados, con opciones avanzadas de segmentación.

   - **Aplicaciones**:
     - Automatización de flujos de mensajes y envíos masivos en campañas personalizadas.

   Para enviar un SMS desde **Journey Builder** en Salesforce Marketing Cloud, se utilizan diferentes métodos para controlar cuándo y cómo se envía el mensaje. Estos son los métodos que puedes aplicar:
   
   1. **Schedule (Programación)**:
      - En **Journey Builder**, el SMS puede programarse para enviarse en un momento específico o después de ciertos eventos dentro del flujo de Journey. Por ejemplo, podrías configurar un SMS para enviarse un día después de que el usuario se registre, utilizando un paso de **Wait** (espera) dentro del Journey.
   
   2. **API Trigger**:
      - Journey Builder permite integrar eventos externos, disparados por API, para iniciar un Journey o un paso dentro del mismo. En este caso, un **API Event** podría activar el Journey y enviar el SMS en respuesta a una acción realizada por el usuario en otra plataforma, como una compra en un sitio web o una actualización en el sistema CRM.
   
   3. **Automation Studio**:
      - Aunque menos común para Journey Builder, Automation Studio se usa en Salesforce Marketing Cloud para gestionar tareas repetitivas y envíos de SMS, especialmente cuando se requiere una integración compleja de datos o acciones recurrentes. Automation Studio también puede iniciar un Journey que luego envíe el SMS según el flujo.
   
   4. **Ejemplo con Journey Builder**:

      - Journey Builder actúa como el principal orquestador. Después de crear y guardar el SMS en **Content Builder**, configuras el Journey como un flujo **multi-step** y defines cuándo se envía el SMS según las reglas y los pasos de Journey Builder, como la espera, el split de engagement, y otros puntos de decisión. Una vez activado el Journey, el SMS se envía automáticamente al cliente en el momento adecuado.

   ***

6. ### **`Reporting y Métricas`**

   MobileConnect ofrece informes detallados que permiten analizar el rendimiento de las campañas SMS:

   - **SMS Account Summary**: Resumen de actividad total, incluyendo el número de suscriptores y mensajes enviados y recibidos.
   - **SMS Message Detail Report**: Detalles a nivel de suscriptor, con métricas sobre el estado de los mensajes enviados.
   - **SMS Message Summary**: Comparación del rendimiento de campañas basadas en keywords.
   - **Sendlog SMS**: Almacena automáticamente la información de los mensajes enviados, accesible sin configuraciones adicionales.

   **Aplicaciones**:

   - Seguimiento de efectividad de cada mensaje, optimización de campañas y comparación de keywords para mejorar la segmentación.

   ***

7. ### **`Best Practices para MobileConnect`**

   - **Obtener consentimiento (Opt-In)** antes de enviar mensajes, respetando la privacidad del usuario.
   - **Definir objetivos claros** para cada mensaje y asegurar su alineación con la estrategia de la campaña.
   - **Frecuencia de envío adecuada**: Encontrar un balance en la cadencia de los mensajes.
   - **Incluir opción de baja (Opt-Out)** en cada mensaje, permitiendo al usuario cancelar su suscripción.
   - **Personalización y segmentación**: Aumenta la relevancia del mensaje adaptándolo al perfil del usuario.
   - **Análisis constante**: Monitorear KPIs y ajustar la campaña en base a las métricas.

   - **Aplicaciones**:
     - Optimización continua de las campañas SMS mediante prácticas recomendadas y un análisis de datos proactivo para mejorar la experiencia del cliente y la efectividad de la comunicación.

   ***

8. ### **`Links útiles`**

   - **Más sobre Mobile Connect en**: [Help Salesforce Mobile Connect](https://help.salesforce.com/s/articleView?id=sf.mc_moc_mobileconnect.htm&type=5).

# Guía detallada para crear comunicaciones SMS en Salesforce Marketing Cloud (SFMC)

1. #### **Caso de Uso: Enviar un SMS comercial utilizando una Data Extension**

   - Dirígete a **Mobile Studio** y selecciona **Mobile Connect**.
   - Haz clic en **Create Message** para crear un nuevo mensaje SMS.
   - Elige la plantilla **Outbound** para enviar un mensaje comercial.
   - Define las propiedades del mensaje, como el nombre del mensaje, el **short/long code** (número de teléfono asignado por Salesforce) y elige **Schedule** para programarlo.
   - En **Select Audience**, selecciona una **Data Extension** que contenga los datos de contacto.
   - En **Define Content**, personaliza el texto del SMS para que sea directo y conciso.
   - Finalmente, revisa y envía el mensaje.

2. #### **Caso de Uso: Crear un SMS en Content Builder para usar en un Journey**

   - Accede a **Content Builder** y selecciona **Create** para iniciar un nuevo mensaje.
   - Escoge **SMS Message** y personaliza el contenido del mensaje, ajustándolo si es necesario para respetar el límite de caracteres.
   - Guarda el mensaje y luego ve a **Journey Builder** para crear un Journey que integre este SMS.
   - Configura el Journey como **multi-step** (con múltiples pasos) y selecciona una **Data Extension** como audiencia.
   - Personaliza el flujo del Journey para enviar el SMS en un momento adecuado, por ejemplo, al confirmar un registro o recordatorio de evento.
   - Activa el Journey y el cliente recibirá el SMS según las reglas del flujo.
