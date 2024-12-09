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

---

2. ### **`Tipos de Journey y cuándo utilizarlos`**:

   - **`Multi-Step Journey`**:
     Diseñado para procesos complejos con múltiples pasos y acciones. Es ideal para:
     - **Retención de clientes**: Campañas que buscan reenganchar a clientes inactivos.
     - **Promociones por ciclos de vida**: Como recordatorios de renovación o cumpleaños.

     **Ejemplo práctico**:  
     Una campaña de renovación de contrato que envía recordatorios 30, 15 y 5 días antes de la fecha límite.

   - **`Transactional Send Journey`**:
     Centrado en envíos únicos basados en interacciones puntuales del cliente, como:
     - Confirmaciones de compra.
     - Cambios de contraseña o actualizaciones de perfil.

     **Ejemplo práctico**:  
     Confirmar la recepción de una orden en un eCommerce inmediatamente después de la compra.

   - **`Single Send Journey`**:
     Pensado para comunicaciones simples y directas, como:
     - Envío de promociones únicas.
     - Notificaciones de eventos.

     **Ejemplo práctico**:  
     Informar a todos los clientes de una oferta especial limitada a través de un solo correo.

---

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
                 {"producto": "Laptop", "precio": 1200},
                 {"producto": "Mouse", "precio": 25}
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

---

4. ### **`Optimización y seguimiento de Journey Builder`**:

   - **`Metas y criterios de salida`**:
     - Las metas permiten medir el éxito de un journey (por ejemplo, completar una compra).
     - Los criterios de salida eliminan contactos que cumplen condiciones específicas, evitando la redundancia.

   - **`History & Audit Logs`**:
     Proporcionan un registro detallado de todas las interacciones en el journey, facilitando la solución de problemas.

   - **`Pruebas y validación`**:
     Journey Builder incluye un modo de prueba que simula envíos con hasta 10 contactos seleccionados para garantizar que los flujos estén configurados correctamente.

---

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

# Guía detallada para crear un Journey Builder para una campaña de cumpleaños personalizada

1. #### **Accede a Salesforce Marketing Cloud (SFMC)**:

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
   - Dirígete a **Journey Builder > Journey Builder** desde el menú principal para comenzar a crear el journey.

2. #### **Entiende los requerimientos del cliente**:

   - El caso de uso es una campaña de cumpleaños con las siguientes especificaciones:
     - La comunicación será enviada por **email**.
     - El contenido se debe diferenciar según el **género** (hombre o mujer) y si tiene **más o menos de 40 años**.
     - **Creatividad por defecto**: la creatividad de la campaña será para **hombres menores de 40 años**.
     - Si la persona tiene **exactamente 40 años**, se le enviará la creatividad para **menos de 40 años**.
   
3. #### **Crea una Data Extension (DE)**:

   - En este caso, necesitamos una **Data Extension** que almacene la información relevante de los contactos, como género, edad y fecha de nacimiento.
   - **Pasos para crear la DE**:
     - Entra en **Email Studio** y selecciona **Data Extensions**.
     - Crea una nueva Data Extension con los siguientes campos:
       - **SubscriberKey** (clave única del contacto)
       - **FirstName** (primer nombre)
       - **LastName** (apellido)
       - **Email** (correo electrónico)
       - **Gender** (género)
       - **BirthDate** (fecha de nacimiento)
   - **Formato de los datos**:
     ```csv
     SubscriberKey, FirstName, LastName, Email, Gender, BirthDate
     12345, Juan, Pérez, juan.perez@example.com, Male, 1985-12-01
     67890, María, García, maria.garcia@example.com, Female, 1980-06-15
     ```

4. #### **Crea las creatividades/piezas (HTML)**:

   - **Para hombres menores de 40 años**:  
     Crea una plantilla de correo electrónico que sea dinámica y contenga contenido específico para hombres jóvenes.  
     - **Asunto**: "¡Feliz cumpleaños, Juan! Celebra tu día con un regalo especial."
     - **Cuerpo del email**: "Juan, disfruta de nuestro descuento exclusivo para celebrar tu cumpleaños."

   - **Para mujeres menores de 40 años**:  
     Crea una plantilla similar pero con contenido adaptado para mujeres jóvenes.  
     - **Asunto**: "¡Feliz cumpleaños, María! Te tenemos una sorpresa de cumpleaños."
     - **Cuerpo del email**: "María, gracias por ser parte de nuestra comunidad. ¡Celebra tu día con nosotros!"

   - **Para personas con 40 años**:  
     Personaliza el correo para que se adapte específicamente a personas que cumplen 40 años.  
     - **Asunto**: "¡40 años de éxitos, Juan! Celebra con nosotros."
     - **Cuerpo del email**: "Juan, 40 años es un gran logro, y queremos celebrarlo contigo."

5. #### **Crea el Journey**:

   - **Paso 1**: Accede a **Journey Builder > Journey Builder** y haz clic en **Create New Journey**.
   - **Paso 2**: Elige una **Multi-Step Journey** para crear un flujo con múltiples etapas.
   - **Paso 3**: Define la **Entry Source**:
     - Utiliza el Entry Source **Data Extension** para utilizar la DE creada anteriormente como fuente de entrada, de modo que los contactos ingresen automáticamente a este journey según su fecha de nacimiento.
   
6. #### **Añadir un Split de Decisión basado en edad y género**:

   - **Paso 1**: En el Journey Builder, añade un **Decision Split** después de la entrada.
   - **Paso 2**: Configura la condición del **Decision Split** para que divida a los contactos en dos grupos:
     - **Grupo 1**: Personas menores de 40 años.
     - **Grupo 2**: Personas exactamente de 40 años.
   - **Paso 3**: Añade condiciones adicionales en los **Decision Splits** para dividir por **género** (hombre o mujer).

7. #### **Enviar los correos electrónicos**:

   - **Paso 1**: Para cada grupo del **Decision Split**, asigna el correo electrónico correspondiente:
     - Para hombres menores de 40 años, selecciona la plantilla con contenido para hombres.
     - Para mujeres menores de 40 años, selecciona la plantilla con contenido para mujeres.
     - Para personas de 40 años, selecciona la plantilla correspondiente a esa edad.
   - **Paso 2**: Asegúrate de que las plantillas de correo estén personalizadas correctamente utilizando **Dynamic Content** según los criterios definidos.

8. #### **Configura un Automation para activar el Journey**:

   - **Paso 1**: Crea una **Automation** para ejecutar el Journey automáticamente cada vez que un nuevo contacto se agregue a la Data Extension de cumpleaños.
   - **Paso 2**: Configura la **Automation** para que se ejecute cada día o en la frecuencia necesaria para manejar los cumpleaños.

9. #### **Revisión y pruebas**:

   - **Paso 1**: Revisa el Journey y las condiciones de los **Decision Splits**.
   - **Paso 2**: Realiza pruebas con un pequeño grupo de contactos para asegurarte de que las creatividades y los mensajes se envíen correctamente según los criterios de edad y género.

10. #### **Activar el Journey**:

   - Una vez que todo esté configurado y probado, **activa el Journey** para que comience a enviar correos electrónicos automáticamente a los contactos según sus cumpleaños.

11. #### **Monitoreo y optimización**:

   - **Paso 1**: Monitorea el rendimiento del Journey usando los **Reportes de Email Send** y los **Event Results**.
   - **Paso 2**: Si es necesario, realiza ajustes en las creatividades o en la segmentación para mejorar los resultados del Journey.

12. ### **Resumen de especificaciones**:

- **Data Extension**: `DE_Cumpleaños_2024` con campos: SubscriberKey, FirstName, LastName, Email, Gender, BirthDate.
- **Journey**: Journey de cumpleaños con Decision Splits basados en género y edad.
- **Creatividad**: Correos electrónicos diferenciados para hombres, mujeres y personas de 40 años.
- **Automatización**: Automatización para activar el Journey y enviar los correos electrónicos de cumpleaños. 
