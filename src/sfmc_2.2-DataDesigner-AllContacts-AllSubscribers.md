# **`Data Designer, All Contacts y All Subscribers en SFMC`**

#### Introducción:

En Salesforce Marketing Cloud (SFMC), la gestión de datos es crucial para crear estrategias de marketing efectivas. Las herramientas **Data Designer**, **All Contacts** y **All Subscribers** son fundamentales para organizar, almacenar, relacionar y gestionar la información de los clientes. A continuación, exploraremos cada una de estas herramientas, sus diferencias y cómo se utilizan en la práctica.

---

1. ### **`Data Designer`**:

   **Data Designer** es una herramienta que permite a los usuarios visualizar y gestionar las conexiones entre diferentes Data Extensions dentro de SFMC. Se centra en el modelado de datos, permitiendo crear un esquema de relaciones que optimiza la segmentación y el análisis de la información.

   - **`Funcionalidades`**:

     - **Conexiones entre tablas**: Permite establecer relaciones entre Data Extensions existentes, facilitando la integración de datos.
     - **Visualización de datos**: Proporciona un esquema visual que muestra cómo se interrelacionan las distintas tablas de datos, lo que ayuda a los usuarios a comprender mejor su estructura de datos.
     - **Configuración de relaciones**: Los usuarios pueden definir cómo se relacionan los datos, lo que permite segmentaciones más sofisticadas.

   - **`Aplicaciones`**:

     - Organizar información de clientes provenientes de diversas fuentes, como formularios web o sistemas CRM.
     - Facilitar la segmentación avanzada para campañas personalizadas mediante la comprensión de las relaciones entre diferentes conjuntos de datos.

   - **Ejemplo**: Imagina que tienes un negocio de suscripción de libros. Tienes una Data Extension llamada "Clientes" que contiene datos básicos (nombre, correo electrónico, etc.) y otra llamada "Preferencias de Género". Con Data Designer, puedes establecer una relación entre estas dos tablas para segmentar y enviar correos personalizados según los intereses de lectura de cada cliente.

   ***

2. ### **`All Contacts`**:

   **All Contacts** es un módulo dentro de SFMC que centraliza toda la información de contacto de los clientes. Esta vista proporciona acceso completo a todos los datos relevantes de los contactos que has recopilado.

   - **`Funcionalidades`**:

     - Almacenamiento de información básica sobre cada contacto, como nombre, correo electrónico, número de teléfono y preferencias de comunicación.
     - Posibilidad de actualizar y gestionar los datos de contacto en tiempo real.
     - Segmentación de contactos según criterios diversos.
     - Todos los **Subscribers** pueden estar en All Contacts. Al contrario es imposible.

   - **`Aplicaciones`**:

     - Mantener una base de datos de contactos limpia y actualizada.
     - Facilitar el envío de campañas dirigidas basadas en información de contacto.

   - **Ejemplo**: Si tienes un restaurante, en All Contacts puedes tener la información de todos tus clientes, como su nombre, correo y preferencias de platos. Esto te permitirá enviar promociones específicas (por ejemplo, un descuento en platos vegetarianos) a aquellos que han mostrado interés en ese tipo de comida.

   ***

3. ### **`All Subscribers`**:

   **Subscribers** se refiere únicamente a los contactos que han optado por recibir comunicaciones de marketing a través del email. Es esencial para la gestión de consentimientos y preferencias de los usuarios.

   - **`Funcionalidades`**:

     - Almacena información sobre las preferencias de suscripción de cada contacto (opt-in y opt-out).
     - Permite segmentar suscriptores en función de su comportamiento e interacciones previas.
     - Facilita la gestión de listas de suscriptores para asegurar el cumplimiento de normativas sobre privacidad y marketing.

   - **`Aplicaciones`**:

     - Enviar correos solo a aquellos que han dado su consentimiento para recibir información.
     - Personalizar las comunicaciones según las preferencias de los suscriptores.

   - **Ejemplo**: Siguiendo con el ejemplo del restaurante, un cliente que se suscribe a tu boletín de noticias se convierte en un "Subscriber". Si expresa que prefiere recibir información sobre eventos especiales, puedes enviarle solo las ofertas que se alineen con sus intereses, como noches de música en vivo o degustaciones.

   ***

4. ### **`Diferencias entre Data Designer, Contacts y All Subscribers`**:

   - **`Data Designer`**: Se centra en la creación de conexiones (Foreign Key) entre Data Extensions (Tablas) existentes, permitiendo a los usuarios visualizar y gestionar la relación entre diferentes conjuntos de datos. Es una herramienta para modelar datos.
   - **`All Contacts`**: Proporciona una vista general de todos los contactos en la instancia de SFMC, almacenando información básica y permitiendo la gestión de esos datos. Se trata de una base de datos de contactos que ayuda en la gestión de la información general.
   - **`All Subscribers`**: Se especializa en los contactos que han optado por recibir comunicaciones email. Se enfoca en las preferencias de suscripción y consentimientos, asegurando que las campañas se envíen a las personas adecuadas y cumpliendo con regulaciones de marketing.

   ***

5. ### **`Ejemplo Integrado`**:

   Imaginemos una plataforma de cursos en línea.

   1. **`Data Designer`**: Se crean Data Extensions como "Usuarios" (con datos básicos) y "Inscripciones" (donde se almacena información sobre los cursos a los que se ha inscrito cada usuario). Con Data Designer, se establece una relación entre estas dos tablas para analizar el comportamiento de compra de cada usuario.
   2. **`All Contacts`**: Aquí se almacenan todos los usuarios registrados, con información como nombres, correos electrónicos y preferencias de aprendizaje (por ejemplo, cursos de diseño gráfico o programación).
   3. **`All Subscribers`**: Dentro de esta sección, se encuentran aquellos usuarios que se han suscrito al boletín informativo. Puedes enviarles promociones específicas sobre nuevos cursos basados en sus intereses.

   Este enfoque integrado permite maximizar la eficacia de las campañas de marketing, asegurando que la comunicación sea relevante y personalizada.

6. ### **`¿Qué es All Subscribers, All Contacts y Data Designer?`**

   - **`All Subscribers`**:
     En SFMC, los suscriptores son individuos que han optado por recibir comunicaciones a través de uno o más canales, como correo electrónico o SMS. Cada suscriptor tiene un perfil único que incluye información de contacto y preferencias de comunicación.

     - **Ejemplo**:
       Imagina que tienes una tienda online y un cliente se suscribe a tu boletín de noticias. Este cliente se convierte en un suscriptor y puedes enviarle correos electrónicos promocionales y actualizaciones de productos.

   - **`All Contacts`**:
     Los contactos en SFMC son registros que representan a individuos con los que interactúas a través de cualquier canal disponible en la plataforma. A diferencia de los suscriptores, los contactos pueden incluir datos de múltiples fuentes y canales, no solo de suscripciones.

     - **Ejemplo**:
       Supongamos que el mismo cliente de la tienda online también interactúa contigo a través de redes sociales y SMS. En SFMC, este cliente sería un contacto, ya que tienes información de él desde varios canales, no solo del correo electrónico.

   - **`Data Designer`**:
     Data Designer es una herramienta dentro de Contact Builder que permite definir y gestionar la estructura de los datos de tus contactos. Puedes crear relaciones entre diferentes conjuntos de datos y diseñar cómo se almacenará y utilizará la información.

     - **Ejemplo**:
       Si quieres relacionar la información de compras de tus clientes con sus datos de suscripción y comportamiento en redes sociales, usarías Data Designer para crear estas relaciones y tener una vista completa de cada cliente.

7. ### **`Relación entre All Contacts y All Subscribers`**:

   - **`All Subscribers`**:
     - Contiene a todos los contactos que han optado por recibir comunicaciones de marketing. Esto significa que cada **Subscriber** ha dado su consentimiento para ser contactado, ya sea a través de correos electrónicos, SMS u otros canales.
   - **`All Contacts`**:
     - Incluye a todos los contactos en tu base de datos, sin importar si han optado o no por recibir comunicaciones. Esto puede incluir usuarios que se han registrado en tu plataforma, pero que no han aceptado recibir mensajes de marketing.

8. ### **`Conclusión`**:

   - **Todos los Subscribers están en All Contacts**: Esto es correcto, ya que los Subscribers son parte de la base de datos más amplia de contactos.
   - **No todos los Contacts son Subscribers**: Esto significa que hay contactos que pueden estar en All Contacts pero no en Subscribers, especialmente si no han dado su consentimiento para recibir comunicaciones.

   Esta diferenciación es clave para cumplir con regulaciones de privacidad y para asegurar que las campañas de marketing se dirijan solo a aquellos que han mostrado interés en recibir información. Si tienes más preguntas o necesitas más información, ¡estaré encantado de ayudarte!

# Guía detallada para gestionar All Contacts & All Subscribers en Salesforce Marketing Cloud (SFMC):

1. #### **Crear un Subscriber Manualmente**:

   - Ve a **Email Studio > Email > Subscribers > All Subscribers**.
   - Haz clic en **Create** para añadir un nuevo contacto para los emails.
   - Introduce un **ID numérico de 14 posiciones** (puede ser inventado, por ejemplo, `SubscriberKey_1234`).
   - Introduce tu email de Jakala en el campo de correo electrónico.
   - Completa cualquier otro campo requerido y guarda el contacto.
   - Elige dónde almacenar ese contacto para emails.
   - Realiza un Logout y un Login para verificar si se ha cargado todo correctamente.

   - Se puede buscar y encontrar en **Audience Builder > Contact Builder > All Contacts**.

2. #### **Verificar ContactKey y ContactID**:

   - Ve a **Audience Builder > Contact Builder > All Contacts**
   - Después de crear el contacto, busca el contacto recién creado en el input **Search** (Buscar). En alternativa puedes buscarlo en **Today** (Hoy).
   - Selecciona el contacto y revisa los detalles.
   - **ContactKey**: Este es el identificador único que has introducido (por ejemplo, `SubscriberKey_1234`).
   - **ContactID**: Este es un identificador único generado automáticamente por SFMC.

3. #### **Copiar ContactKey y ContactID**:

   - Copia ambos valores para tu ejercicio.

4. #### **Intentar Borrar el Contacto**:

   - Intenta borrar el contacto que acabas de crear. ¿Porqué no puedes?
   - **Razón por la que no puedes borrarlo**: En SFMC, los contactos no se pueden borrar directamente desde Contact Builder debido a las políticas de retención de datos y la integridad de los datos. Los contactos pueden estar vinculados a múltiples Data Extensions y actividades, lo que impide su eliminación directa para evitar inconsistencias en los datos.

5. #### Resumen de Pasos

   - **Accede a Contact Builder**.
   - **Crea un Subscriber con un ID numérico de 14 posiciones**.
   - **Verifica y copia ContactKey y ContactID**.
   - **Intenta borrar el contacto y comprende por qué no es posible**.
