# **`Cloud Pages en SFMC y sus características`**

#### Introducción:

Salesforce Marketing Cloud (SFMC) incluye **Web Studio**, un módulo que permite gestionar y diseñar páginas web interactivas, formularios, y micrositios para fortalecer la interacción con los clientes. Esta herramienta se centra en optimizar la experiencia del usuario, ofreciendo funciones avanzadas para personalizar contenido, medir interacciones y gestionar recursos. **Cloud Pages**, parte de Web Studio, es fundamental para la creación y administración de estas páginas.

---

1. ### **`Características principales de Cloud Pages`**

   Cloud Pages es una solución dentro de Web Studio que habilita la creación de contenido digital para diversos propósitos:

   - **Landing Pages**

     - Páginas web accesibles desde navegadores o enlazadas en correos electrónicos.
     - Uso destacado:
       - Formularios de recogida de datos con AMPScript.
       - Páginas de baja.
       - Centros de preferencias.

   - **Microsites**

     - Sitios web independientes con su propia URL, utilizados principalmente para campañas específicas.
     - Características:
       - Contenido limitado y enfocado en una función concreta.
       - Tiempo de vida determinado, enfocado en promociones o lanzamientos.

   - **Interactive Email Pages**
     - Formularios interactivos integrados directamente en correos electrónicos creados con Content Builder.

   ***

2. ### **`Gestión y Creación en Cloud Pages`**

   - **Acceso a Cloud Pages**

     - Desde la página de inicio de SFMC, selecciona **Web Studio > CloudPages**.

   - **Creación de Contenido**

     - **Colecciones**: Estructuras de nivel superior que organizan páginas y recursos relacionados.
     - Dentro de una colección, se pueden incluir:
       - Landing Pages.
       - Microsites.
       - Interactive Email Pages.
       - Recursos de Código (Code Resources).

   - **Code Resources**

     - Permite incluir y gestionar archivos JavaScript, CSS, JSON, y otros recursos en las páginas.
     - Soporte para:
       - Hoja de estilos CSS.
       - Scripts en JavaScript.
       - Archivos de texto y feeds RSS.

   ***

3. ### **`Landing Pages`**

   - **Creación de Landing Pages**

     - Pasos:
       1. Crear contenido utilizando bloques en Content Builder.
       2. Seleccionar un diseño (layout).
       3. Guardar y programar o publicar la página.

   - **Smart Capture**

     - Bloque de contenido que permite diseñar formularios interactivos.
     - Función:
       - Recoge datos y los almacena en Data Extensions.
       - Fuente de entrada para Journeys.

   - **Propiedades de una Landing Page**

     - Información clave:
       - **Estado**: Publicada o no.
       - **Fecha de creación y actualización**.
       - **URL única**.
       - **Opciones SEO**:
         - Título, palabras clave, y descripción.
         - Opción de ocultar la página de motores de búsqueda.

   - **Publicación**

     - Opciones:
       - Publicar de inmediato.
       - Programar para una fecha y hora específica.

   ***

4. ### **`Analítica en Cloud Pages`**

   - **CloudPages Analytics**

     - Permite medir interacciones con las páginas dentro de las colecciones.
     - Para acceder:
       - Navegar a las propiedades de la página dentro de la colección.
       - Seleccionar la pestaña **Actividad**.

   - **Informes en Analytics Builder**

     - Informes específicos para Cloud Pages:
       - **CloudPages Impressions by Page**: Muestra las impresiones por página.
       - **CloudPages Smart Capture Submissions**: Resumen de envíos realizados a través de formularios.

   ***

5. ### **`Casos de Uso Prácticos`**

   - **Encuesta de Satisfacción**

     - Objetivo: Recoger opiniones de clientes cuyos contratos están a punto de finalizar.
     - Pasos:

       1. Crear un email personalizado con un CTA hacia la encuesta.
       2. Diseñar la encuesta en una landing page utilizando Smart Capture.
       3. Configurar una página de agradecimiento para confirmar el envío de datos.

     - Elementos clave:
       - Uso de PURLs para pasar parámetros personalizados. Una PURL (Personalized URL) es una URL personalizada que se utiliza para redirigir a los usuarios a una página web única y adaptada específicamente a ellos. Las PURLs se suelen utilizar en campañas de marketing digital, especialmente en correos electrónicos, para proporcionar una experiencia personalizada, mejorar el engagement y aumentar las conversiones.
       - Configuración de Data Extensions para almacenar las respuestas.

   - **Landing de Baja**

     - Requisitos:
       1. Página que permita al usuario indicar el motivo de su baja.
       2. Almacenamiento de datos en **All Subscribers** y una Data Extension específica.
       3. Bloquear resuscripciones posteriores.

   ***

6. ### **PURL (Personalized URL)**

   - **`Propósito de las PURLs`**:

     1. **Personalización del Contenido**:
        - Las PURLs permiten personalizar la experiencia de los usuarios, redirigiéndolos a una página web que incluye información específica para ellos, como su nombre, preferencias, o historial de interacciones.
     2. **Mejora del Engagement**:

        - Al ofrecer una URL personalizada, se crea una sensación de relevancia y atención al usuario, lo que aumenta la probabilidad de que interactúe con el contenido y realice la acción deseada (compra, registro, encuesta, etc.).

     3. **Facilitación de Seguimiento y Análisis**:

        - Las PURLs permiten rastrear de manera precisa la actividad de cada usuario, como quién hizo clic en el enlace, cuánto tiempo pasó en la página, qué productos vio o qué acciones realizó. Esto facilita un análisis más detallado del comportamiento del cliente.

     4. **Automatización de Procesos de Marketing**:
        - Las PURLs son muy útiles en campañas automatizadas, como en **Journeys** de Salesforce Marketing Cloud, donde se pueden crear de manera dinámica para cada usuario.

   - **`Casos de Uso Comunes de las PURLs`**:

     1. **Campañas de Correos Electrónicos Personalizados**:

        - Ofrecer ofertas o promociones personalizadas. Ejemplo: un cliente recibe un correo con una PURL que lo lleva a una página que muestra productos recomendados basados en sus compras previas.

     2. **Encuestas o Formularios Personalizados**:

        - Enviar encuestas o formularios en los que la URL personalizada contenga información prellenada del usuario, como su nombre o preferencias.

     3. **Programas de Fidelización**:

        - Crear una página personalizada para un cliente que ofrece información sobre su historial de compras o puntos de fidelidad.

     4. **Seguimiento Post-Evento o Post-Compra**:
        - Enviar un correo con una PURL que redirija al cliente a una página con más detalles sobre el producto adquirido o información relevante del evento al que asistió.

   - **`Cómo Crear PURLs en Salesforce Marketing Cloud (SFMC)`**:

     1. **Preparar la Data Extension**:
        - Primero, necesitas una **Data Extension** que contenga los datos del usuario, como su nombre, email, preferencias o cualquier otra información relevante.
     2. **Crear la Página de Destino Personalizada**:

        - En **CloudPages**, crea una página que sirva como destino para las PURLs. Esta página debe estar diseñada para mostrar contenido dinámico basado en los parámetros de la URL. Para esto, puedes utilizar **AMPscript** para mostrar información personalizada de la **Data Extension** en la página.

        Ejemplo de AMPscript para mostrar el nombre del usuario en la página:

        ```ampscript
        %%=v(@FirstName)=%%
        ```

     3. **Generar la PURL con AMPScript**:

        - Utiliza **AMPScript** para generar la PURL dinámica en el correo electrónico. La PURL generalmente incluye parámetros de identificación, como el **SubscriberKey** o cualquier otra información única del usuario que permita generar una URL exclusiva para cada destinatario.

        Ejemplo de AMPScript para generar una PURL:

        ```ampscript
        %%=RedirectTo(CloudPagesURL(PageId, "Email", emailAddr, "SubscriberKey", SubscriberKey))=%%
        ```

        En este caso, la URL redirige a la página personalizada de CloudPages, con los parámetros `Email` y `SubscriberKey` para personalizar la página.

     4. **Enviar la Campaña**:

        - Envío de la campaña de correo electrónico donde cada destinatario recibe su PURL única.

     5. **Medición de Resultados**:
        - Puedes medir el rendimiento de las PURLs usando **Tracking** de SFMC para ver qué usuarios han interactuado con la página personalizada, cómo se comportaron y qué acciones realizaron.

   - **`Ventajas de las PURLs`**:

     - **Personalización a Escala**: Aunque la personalización parece un proceso manual, las PURLs permiten hacerlo de manera automática y a gran escala.
     - **Mayor Engagement**: Los usuarios suelen sentirse más conectados a una campaña cuando la experiencia está personalizada.
     - **Mejor Seguimiento y Análisis**: Puedes rastrear el comportamiento de cada usuario individualmente, lo que te proporciona datos más útiles para mejorar futuras campañas.

   - **`Limitaciones de las PURLs`**:

     - **Dependencia de la Precisión de los Datos**: Para que las PURLs funcionen de manera efectiva, los datos de los usuarios deben estar bien estructurados y ser precisos.
     - **Compatibilidad**: Aunque la mayoría de los navegadores y clientes de correo soportan PURLs, algunos problemas de redirección pueden surgir dependiendo de la configuración del servidor o del navegador del usuario.

   ***

7. ### **Encriptación y Desencriptación de PURLs**

   En una **PURL** (Personalized URL), puedes encriptar información sensible para proteger los datos que se transmiten a través de la URL. Esto se logra en dos pasos: **encriptar** la información antes de incluirla en la URL y luego **desencriptarla** cuando se recibe en la página de destino.

   - **`Encriptar la Información con AMPscript`**

     - La encriptación se realiza en el correo electrónico antes de generar la PURL. En este caso, usaremos **AES (Advanced Encryption Standard)** como algoritmo y una clave de encriptación.

     ```ampscript
     %%[
       VAR @encryptedSubscriberKey, @encodedSubscriberKey, @purl
       SET @subscriberKey = AttributeValue("SubscriberKey") /* Extraer el SubscriberKey del usuario */
       SET @encryptedSubscriberKey = Encrypt(@subscriberKey, "AES", "mySecretKey") /* Encriptar */
       SET @encodedSubscriberKey = Base64Encode(@encryptedSubscriberKey) /* Codificar en Base64 */
       SET @purl = Concat("https://www.mysite.com/landingpage?p=", @encodedSubscriberKey)
     ]%%
     ```

     - **`Encrypt`**: Encripta el valor con el algoritmo AES usando una clave secreta (`mySecretKey`).
     - **`Base64Encode`**: Convierte los datos encriptados en una cadena legible apta para una URL.
     - **`Concat`**: Genera la PURL con el parámetro encriptado.

     El resultado será una URL como esta:

     ```
     https://www.mysite.com/landingpage?p=ENCRYPTED_VALUE
     ```

   - **`Desencriptar la información con AMPscript`**:

     - Cuando el usuario hace clic en la PURL, el parámetro encriptado (`p`) debe ser desencriptado en el servidor o en la página de destino. En **AMPscript**, puedes desencriptar la información si estás trabajando con **CloudPages**.

     ```ampscript
     %%[
       VAR @encryptedParam, @decryptedSubscriberKey
       SET @encryptedParam = QueryParameter("p") /* Extraer el parámetro encriptado de la URL */
       SET @decodedParam = Base64Decode(@encryptedParam) /* Decodificar Base64 */
       SET @decryptedSubscriberKey = Decrypt(@decodedParam, "AES", "mySecretKey") /* Desencriptar */
     ]%%

     Hola %%=v(@decryptedSubscriberKey)=%%, ¡Bienvenido a tu página personalizada!
     ```

     - **`QueryParameter`**: Extrae el valor del parámetro `p` de la URL.
     - **`Base64Decode`**: Decodifica el valor encriptado de vuelta a su forma original.
     - **`Decrypt`**: Usa la misma clave secreta (`mySecretKey`) para desencriptar el valor.

   - **`Ejemplo Completo: Flujo de Envío y Recepción`**

     - **Correo Electrónico**:

       - En el correo, generamos una PURL dinámica con el parámetro encriptado.
       - La PURL enviada al cliente podría ser:
         ```
         https://www.mysite.com/landingpage?p=Q29kZW9FbmNyeXB0ZWRWYWx1ZQ==
         ```

     - **Página de Destino (CloudPages)**:

       - Cuando el usuario hace clic en el enlace, la página de destino recibe el parámetro `p` encriptado.
       - AMPscript en la página:

         ```ampscript
         %%[
           VAR @encryptedParam, @decodedParam, @decryptedSubscriberKey
           SET @encryptedParam = QueryParameter("p")
           SET @decodedParam = Base64Decode(@encryptedParam)
           SET @decryptedSubscriberKey = Decrypt(@decodedParam, "AES", "mySecretKey")
         ]%%
         Hola %%=v(@decryptedSubscriberKey)=%%, ¡Gracias por tu interés!
         ```

       - El texto visible en la página para el cliente sería:
         ```
         Hola 12345, ¡Gracias por tu interés!
         ```

       Donde `12345` es el valor desencriptado del `SubscriberKey`.

   - **`Ventajas de Encriptar PURLs`**

     1. **Protección de Datos**: Los datos personales (como el **SubscriberKey**) están seguros y no son visibles en texto plano.
     2. **Cumplimiento Normativo**: Cumples con estándares de privacidad (como GDPR) al evitar exponer información sensible.
     3. **Prevención de Manipulaciones**: Los usuarios no pueden modificar fácilmente los parámetros de la URL.

   - **`Recomendaciones Adicionales`**

     - **`Clave de Encriptación Segura`**:

       - Usa una clave secreta segura y no la incluyas en el código fuente visible de la página.
       - La clave debe estar almacenada en un entorno seguro.

     - **`HTTPS`**:

       - Asegúrate de que las PURLs utilicen **HTTPS** para cifrar toda la comunicación entre el cliente y el servidor.

     - **`Control de Errores`**:
       - Implementa manejo de errores si la desencriptación falla (por ejemplo, si el parámetro está mal formado).

   ***

8. ### **`Gestión de Datos en Salesforce Marketing Cloud (SFMC) sin Usuarios Reales`**

   Cuando no se cuenta con usuarios reales (es decir, usuarios con **Contact Key** o suscriptores identificados dentro de SFMC), es posible guardar y gestionar información básica utilizando las **Query Parameters** en la **URI**. Aquí explicamos cómo hacerlo y cómo se pueden realizar pruebas en entornos de desarrollo.

   - **`Uso de Query Parameters para Capturar Datos`**

     Los **Query Parameters** permiten pasar información directamente desde una URL. Esto es útil para identificar y gestionar datos de usuarios cuando no existen registros en SFMC.

     - **Ejemplo de URL con Query Parameters**:

       ```
       https://mi-landing-page.com?email=test@example.com&name=Juan
       ```

     - **Uso de AMPScript para Capturar Datos**:
       En lugar de utilizar variables internas como `emailaddr` (que depende de registros en SFMC), puedes capturar parámetros de la URL con `RequestParameter`.

       ```ampscript
       %%[
       /* Capturar datos desde la URL */
       SET @email = RequestParameter('email')
       SET @name = RequestParameter('name')

       /* Opcional: Almacenar los datos en una Data Extension */
       INSERTDE(
         "DE_DataExtension",
         "Email", @email,
         "Name", @name,
         "Fecha", Now()
       )
       ]%%
       ```

   - **`Creación de Usuarios de Prueba con Correos Reales`**

     Si deseas realizar pruebas en SFMC, puedes enviarte correos a tu propia dirección de email personal. Esto creará automáticamente un registro de suscriptor en **All Subscribers**, que puedes usar para realizar pruebas.

     - **Pasos**:

       1. Diseña un email con un enlace que incluya **Query Parameters**:

       ```html
       <a href="%%=RedirectTo(CloudPagesURL(PageId, 'email', 'test@example.com', 'name', 'Juan'))=%%"
         >Ir a la landing</a
       >
       ```

       2. Envía el correo a tu dirección personal.
       3. Cuando accedas a la landing desde el email, los parámetros se capturarán y podrán ser usados en AMPScript.

     - **Nota Importante**: Si estás trabajando con **All Subscribers**, asegúrate de no sobrescribir datos esenciales como el **SubscriberKey**.

   - **`Almacenamiento y Gestión de Datos`**

     - **Identificación Básica**:  
       Si el usuario no tiene un **Contact Key**, utiliza **Query Parameters** para generar identificadores temporales o almacenarlos en una **Data Extension**.

     - **Estructura de la Data Extension**:
       Asegúrate de incluir campos relevantes como:

       - `Email` (Primary Key)
       - `Name`
       - `Fecha`
       - `Source` (opcional, para identificar la fuente de la captura de datos)

     - **Ejemplo de Creación con AMPScript**:

       ```ampscript
       %%[
       /* Generar un identificador único si no existe */
       VAR @contactKey
       SET @contactKey = _SubscriberKey

       IF EMPTY(@contactKey) THEN
         SET @contactKey = GUID()
       ENDIF

       /* Almacenar los datos en la Data Extension */
       INSERTDE(
         "DE_UsuariosDePrueba",
         "ContactKey", @contactKey,
         "Email", @email,
         "Name", @name,
         "Fecha", Now()
       )
       ]%%
       ```

   - **`Buenas Prácticas`**

     - **Evitar Información Sensible en Query Parameters**:  
       Aunque es tentador, evita pasar datos sensibles como contraseñas o información personal detallada. Opta por usar identificadores encriptados si es necesario.

     - **Limpieza de Datos de Prueba**:  
       Los registros generados a partir de pruebas pueden desordenar tus tablas. Asegúrate de eliminarlos una vez que hayas terminado las pruebas.

     - **Verificación de Datos**:  
       Siempre verifica que los parámetros pasados por la URL sean válidos antes de procesarlos.

   ***

9. ### **`Interactive Email Page`**

   - **`Propósito de la Interactive Email Page`**

     1. **Facilitar Interacciones Directas**:

        - Permite a los usuarios realizar acciones simples como responder encuestas, calificar productos, o completar formularios básicos directamente desde el email.
        - Evita que el usuario sea redirigido a una landing page externa para completar estas acciones.

     2. **Recopilar Información en Tiempo Real**:

        - Los datos introducidos por el usuario se pueden capturar y enviar directamente a Salesforce Marketing Cloud sin necesidad de redireccionarlos a otra página.

     3. **Mejorar la Experiencia del Usuario (UX)**:

     - Ofrece una experiencia fluida y sin interrupciones dentro del cliente de correo, reduciendo la fricción para los usuarios y aumentando la probabilidad de interacción.

   - **`Casos de Uso Comunes`**

     1. **Encuestas o Calificaciones**:

        - Recopilar feedback rápido sobre un producto, servicio o campaña.
        - Ejemplo: "¿Qué tan satisfecho estás con nuestro servicio? Califícanos del 1 al 5."

     2. **RSVP o Confirmación de Asistencia**:

        - Solicitar respuestas rápidas para eventos o reuniones.
        - Ejemplo: "¿Asistirás a nuestro webinar? Sí / No."

     3. **Preferencias de Suscripción**:

        - Permitir que los usuarios actualicen sus intereses o elijan el tipo de comunicaciones que desean recibir.

     4. **Pruebas A/B de Contenido**:

        - Probar diferentes diseños o mensajes y recopilar interacciones directamente desde el email.

     5. **Promociones Personalizadas**:
        - Ofrecer descuentos o códigos promocionales únicos en función de las interacciones dentro del email.

   - **`Cómo Configurar una Interactive Email Page`**

     1. - **Acceso a CloudPages**:
        - Ve a **CloudPages** dentro de Salesforce Marketing Cloud.
        - Haz clic en **Create Collection** o selecciona una colección existente.

     2. - **Añadir una Interactive Email Page**:
        - Selecciona **Add Content** > **Interactive Email Page**.
        - Asigna un nombre a la página para identificar su propósito.

     3. - **Diseño y Configuración**:
        - Usa los bloques de contenido disponibles, como formularios, botones y encuestas.
        - Personaliza el diseño con **HTML**, **CSS** o mediante las herramientas de drag-and-drop.
        - Configura los eventos de envío o las respuestas que se almacenarán en una **Data Extension**.

     4. - **Publicación y Vinculación**:
        - Publica la página una vez que esté lista.
        - Usa la función **CloudPagesURL** en AMPScript para vincular la página a un botón o enlace en el correo electrónico:
        ```ampscript
        %%=RedirectTo(CloudPagesURL(PageId, 'Param1', Value1))=%%
        ```

   - **`Ventajas de Usar Interactive Email Pages`**

     - **Aumenta el Engagement**: Al reducir la fricción, los usuarios están más dispuestos a interactuar con el contenido.
     - **Reducción de Tiempos**: Los usuarios no necesitan abrir su navegador ni cambiar de aplicación para realizar una acción.
     - **Integración Directa con SFMC**: Los datos recopilados se pueden almacenar automáticamente en **Data Extensions** o integrarse con **Journeys**.

   - **`Limitaciones`**

     - **Compatibilidad**:
       - No todos los clientes de correo electrónico soportan interactividad avanzada. Por ejemplo, Gmail y Apple Mail suelen ser más compatibles, mientras que Outlook tiene limitaciones significativas.
     - **Simplicidad de las Interacciones**:
       - Diseñado para interacciones rápidas. No es ideal para procesos complejos que requieran múltiples pasos.

   ***

10. ### **`Microsite`**

    - **`Propósito de un Microsite** en CloudPages`\*\*:

      1. **Ofrecer una Experiencia Web Completa**:

         - Los microsites permiten crear páginas web con más libertad y flexibilidad, ideales para campañas que requieren más que simples interacciones, como promociones, concursos, o páginas de agradecimiento.

      2. **Recopilar Información Más Completa**:

         - Se pueden implementar formularios complejos que recopilen una mayor variedad de datos, como registros completos o encuestas más detalladas.

      3. **Personalización Avanzada**:

         - Utiliza **AMPscript**, **HTML**, **CSS** y **JavaScript** para personalizar la experiencia del microsite y ofrecer interacciones y contenido dinámico según los datos del usuario.

      4. **Redirección de Usuarios**:

      - Un microsite se utiliza más como una página de destino completa (landing page) a la que los usuarios acceden a través de un enlace desde un correo electrónico o desde otros canales de marketing.

    - **`Casos de Uso Comunes para Microsites`**:

      1. **Promociones y Ofertas Especiales**:

         - Ofrecer códigos de descuento, cupones o promociones especiales donde los usuarios puedan ver más información, registrarse o realizar compras directamente en el microsite.

      2. **Concursos y Sorteos**:

         - Los microsites permiten la gestión de concursos en línea, con formularios de inscripción y la presentación de reglas o premios.

      3. **Registros a Eventos**:

         - Ideal para páginas de inscripción a eventos donde los usuarios pueden ver detalles del evento, registrarse y recibir confirmaciones.

      4. **Encuestas Complejas o Formularios de Registro**:
         - Permite crear formularios más detallados que los que se pueden integrar en una **Interactive Email Page**.

    - **`Cómo Configurar un Microsite en CloudPages`**:

      1. **Acceso a CloudPages**:

         - Dirígete a **CloudPages** y selecciona **Create Collection** o elige una colección existente.

      2. **Crear una Página de Microsite**:

         - Elige **Add Content** y selecciona la opción de **Microsite**.
         - Asigna un nombre adecuado y una URL para identificar la página.

      3. **Diseño y Personalización**:

         - Utiliza herramientas de **drag-and-drop**, o personaliza el microsite mediante código (HTML, CSS, JS) o **AMPscript** para contenido dinámico.
         - Implementa formularios, botones y otros elementos interactivos que se ajusten al objetivo del microsite.

      4. **Publicación y Redirección**:
         - Publica el microsite y asegúrate de vincularlo a tu campaña a través de **Email Studio** o anuncios con enlaces hacia el microsite.

    - **`Ventajas de los Microsites`**:

      - **Flexibilidad y Personalización**: Los microsites ofrecen más control sobre el diseño y las funcionalidades.
      - **Recopilación de Datos Completa**: Ideal para formularios extensos y encuestas complejas.
      - **Mayor Experiencia de Usuario**: Ofrecen un entorno web más inmersivo en comparación con las limitaciones de un correo electrónico.

    - **`Limitaciones de los Microsites`**:

      - **Requiere Mayor Desarrollo**: La creación de un microsite puede ser más compleja en términos de diseño y desarrollo que una **Interactive Email Page**.
      - **Dependencia de la Conectividad**: A diferencia de las **Interactive Email Pages**, los microsites requieren que el usuario sea redirigido a una nueva página y que esta cargue correctamente en su navegador.

# **Guía detallada para implementar una Cloud Page para una encuesta de satisfacción en Salesforce Marketing Cloud (SFMC) sin encriptación para facilitar la comprensión**

1. #### **Definición del Caso de Uso**

   - **Objetivo**: Realizar una encuesta de satisfacción a clientes cuyo contrato está próximo a finalizar.
     - El cliente recibirá un email personalizado con un enlace (CTA) a una encuesta.
     - La encuesta recogerá un puntaje del 1 al 10 y un comentario.
     - Los resultados se almacenarán en una Data Extension (DE).
     - Si el cliente ya ha respondido la encuesta, se le mostrará un mensaje indicando que no puede rellenarla de nuevo.

2. #### **Preparativos Previos**

   - **`Entrar en Web Studio > CloudPages`**

     - Seleccionamos la carpeta donde cargaremos los recursos o creamos una.

   - **`Crear y publicar recursos necesarios`**:

     - Añadir desde **Add Content** el código CSS y JavaScript como recursos **Code Resource** en Cloud Pages.
     - Añadir desde **Add Content** el HTML como **Landing Page**.
     - Imágenes subidas y referenciadas desde **Content Builder**.

   - **`Data Extensions`**:
     - Una **DE Sendable** para envíos del email (DE_FinContratoEncuesta).
     - Otra **DE para almacenar los resultados** de la encuesta (DE_FinContratoRespuestas).

3. #### **Configuración del Email con CTA**

   - **`Personalización del Email`**:

     - Incluir el nombre del cliente y el número de contrato usando variables en AMPScript.
     - Crear un botón CTA que redirija a la encuesta utilizando **PURLs** (URL personalizada) y parámetros encriptados.

     ```html
     <a href="%%=RedirectTo(CloudPagesURL(PageId, 'nc', NumContrato))=%%"> Accede a la encuesta </a>
     ```

   - **Estructura de la URL personalizada (PURL)**:  
     URL/SiteKey?param1=valor1&param2=valor2  
     Ejemplo:  
     `https://cloud.e.bmind.es/BXpert_encuesta?SubscriberKey=003654rte654gtr&Contrato=123456`

4. #### **Creación del formulario para la Encuesta**

   - **Formulario HTML**:

     - Crear un formulario que envíe los datos de la encuesta (puntuación y texto libre) a una página de agradecimiento.
     - Uso de campos ocultos para pasar información como contrato y cliente.

     ```html
     <form action="%%=CloudPagesURL(ThankYouPageId)=%%" method="POST">
       <input type="hidden" name="Contrato" value="%%=RequestParameter('nc')=%%" />
       <label for="puntuacion">Nivel de Satisfacción (1-10):</label>
       <input type="number" id="puntuacion" name="Puntuacion" min="1" max="10" required />
       <label for="comentario">Tu Opinión:</label>
       <textarea id="comentario" name="Comentario"></textarea>
       <button type="submit">Enviar</button>
     </form>
     ```

   - **Uso de Recursos Externos**:
     - Referenciar CSS y JS en la página mediante **RedirectTo** y **CloudPagesURL**.
     ```html
     <link rel="stylesheet" href="%%=RedirectTo(CloudPagesURL(PageId))=%%" />
     <script src="%%=RedirectTo(CloudPagesURL(PageId))=%%"></script>
     ```

5. #### **Thank You Page y Almacenamiento de Datos**

   - **Mensaje de Agradecimiento**:  
     Mostrar un mensaje dinámico confirmando la recepción de la encuesta.

   - **Almacenamiento de Datos**:  
     Utilizar **AMPScript** para insertar la respuesta en la DE de resultados.
     ```ampscript
     %%[
     VAR @contrato, @puntuacion, @comentario
     SET @contrato = RequestParameter("Contrato")
     SET @puntuacion = RequestParameter("Puntuacion")
     SET @comentario = RequestParameter("Comentario")
     INSERTDE("FinContratoRespuestas", "Contrato", @contrato, "Puntuacion", @puntuacion, "Comentario", @comentario, "Fecha", Now())
     ]%%
     ```

6. #### **Validación de Respuestas Únicas**

   - **Evitar Respuestas Duplicadas**:  
     Comprobar en la DE si el cliente ya ha enviado su respuesta. Si es así, mostrar un mensaje indicando que no puede volver a responder.
     ```ampscript
     %%[
     VAR @rows, @rowCount
     SET @rows = LookupRows("FinContratoRespuestas", "Contrato", @contrato)
     SET @rowCount = RowCount(@rows)
     IF @rowCount > 0 THEN
     ]%%
     <p>Ya has completado esta encuesta. ¡Gracias!</p>
     %%[ ELSE ]%%
     <!-- Mostrar formulario -->
     %%[ ENDIF ]%%
     ```

7. #### **Consideraciones Técnicas**

   - **Funciones Relevantes de AMPScript**:

     - `RedirectTo`: Redirige a URLs completas almacenadas o calculadas.
     - `CloudPagesURL`: Genera URLs seguras para Cloud Pages con parámetros encriptados.
     - `RequestParameter`: Obtiene valores de parámetros enviados por query string o POST.
     - `InsertDE`: Inserta registros en una DE.
     - `LookupRows` y `RowCount`: Recupera y cuenta filas en una DE.

   - **Parámetros encriptados en PURLs**:  
     No pasar información sensible como texto plano en la URL. Usar encriptación o parámetros internos.

8. #### **Validación Final y Publicación**

   - Verificar:

     - Publicación de todos los recursos (CSS, JS, imágenes).
     - Integridad de las URLs y funcionamiento de PURLs.
     - Funcionamiento de redirecciones y almacenamiento de datos.

   - **Pruebas UAT**:  
     Probar con diferentes escenarios para garantizar que:
     - Los datos se almacenan correctamente.
     - Los mensajes dinámicos funcionan según el caso.
     - Las redirecciones son correctas.

# **Guía detallada para crear un link dentro de un email que referencie una Landing de Baja en SFMC**

1. #### **Enlace desde el Email**

   - **Enlace básico en el email**

     Incluye un enlace simple para redirigir a la Landing Page de Baja.

     ```html
     <a href="%%=RedirectTo(CloudPagesURL(pageId))=%%">Darse de baja</a>
     ```

   - **Enlace con datos encriptados**

     Para mayor seguridad, encripta los parámetros sensibles antes de enviarlos. Utiliza AMPscript para generar un enlace encriptado:

     ```ampscript
     %%[
       VAR @subscriberKey, @encryptedData
       SET @subscriberKey = AttributeValue("_subscriberkey")
       SET @encryptedData = Base64Encode(@subscriberKey) /* Encripta SubscriberKey */

       /* Genera la URL con datos encriptados */
       SET @encryptedURL = CloudPagesURL(PageId, 'encryptedKey', @encryptedData)
     ]%%
     <a href="%%=RedirectTo(@encryptedURL)=%%">Darse de baja</a>
     ```

   - **Nota:** Puedes usar métodos más avanzados de encriptación como AES con la función **EncryptSymmetric()**, pero el ejemplo utiliza Base64 por simplicidad.

2. #### **Configuración de la Landing Page de Baja**

   - **Formulario de Baja**

     El formulario debe capturar el motivo de la baja y los comentarios opcionales, además de recibir los parámetros encriptados.

     ```html
     <form action="%%=CloudPagesURL(ThankYouPageId)=%%" method="POST">
       <label for="motivo">Motivo de la baja:</label>
       <select id="motivo" name="Motivo" required>
         <option value="No estoy interesado">No estoy interesado</option>
         <option value="Recibo demasiados emails">Recibo demasiados emails</option>
         <option value="Otro">Otro</option>
       </select>
       <label for="comentario">Comentarios:</label>
       <textarea id="comentario" name="Comentario"></textarea>
       <input type="hidden" name="EncryptedKey" value="%%=RequestParameter('encryptedKey')=%%" />
       <button type="submit">Enviar</button>
     </form>
     ```

   - **Uso de AMPScript para procesar la baja**

     Desencripta los datos y registra la baja en **All Subscribers** y en una Data Extension:

     ```ampscript
     %%[
       VAR @encryptedKey, @subscriberKey, @motivo, @comentario

       /* Obtén y desencripta el SubscriberKey */
       SET @encryptedKey = RequestParameter("EncryptedKey")
       SET @subscriberKey = Base64Decode(@encryptedKey)

       /* Captura otros datos */
       SET @motivo = RequestParameter("Motivo")
       SET @comentario = RequestParameter("Comentario")

       /* Registrar la baja en All Subscribers */
       SET @rows = UpdateData(
         "All Subscribers",
         1,
         "SubscriberKey", @subscriberKey,
         "Status", "Unsubscribed"
       )

       /* Registrar información en una Data Extension */
       INSERTDE(
         "DE_Bajas",
         "SubscriberKey", @subscriberKey,
         "Motivo", @motivo,
         "Comentario", @comentario,
         "Fecha", Now()
       )
     ]%%
     ```

   - **Nota:** Puedes reemplazar `Base64Decode` por un método más seguro si estás utilizando una clave encriptada avanzada (e.g., AES) con la función **EncryptSymmetric()**.

3. #### **Thank You Page**

   - **Confirmación de Baja**

     Muestra un mensaje confirmando que la baja se ha procesado correctamente.

     ```html
     <p>Gracias. Tu baja ha sido procesada correctamente.</p>
     ```

   - **Validación de Reinscripciones**

     Comprueba si el usuario ya está dado de baja.

     ```ampscript
     %%[
       VAR @rows, @rowCount
       SET @rows = LookupRows("DE_Bajas", "SubscriberKey", @subscriberKey)
       SET @rowCount = RowCount(@rows)

       IF @rowCount > 0 THEN
     ]%%
     <p>Ya te has dado de baja anteriormente. No es posible realizar esta acción nuevamente.</p>
     %%[ ELSE ]%%
     <!-- Formulario o mensaje -->
     %%[ ENDIF ]%%
     ```

4. #### **Almacenamiento de Información en Data Extensions**

   - **Configuración de Data Extension**

     Crea una Data Extension con las siguientes columnas:

     - `DE_Bajas`:
       - **SubscriberKey** (Primary Key)
       - **Motivo**
       - **Comentario**
       - **Fecha**

5. #### **Enlace a la Documentación Relevante**

   - [Unsubscribing and Logging an Unsub Event](https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/unsubscribing_and_logging_an_unsubevent_with_a_logunsubevent_execute_call.html)
   - [Ejemplo práctico en Gist](https://gist.github.com/zuzannamj/17f78dddc9ceb3a0c7ec80092b4efca5)

6. #### **Pruebas y Validación**

   - **Escenarios a probar:**

     1. Baja desde el email con parámetros encriptados.
     2. Validación de que los datos se desencriptan correctamente.
     3. Registro en **All Subscribers** y **Data Extension**.
     4. Reintento de baja muestra un mensaje adecuado.

   - **Validación de datos almacenados:**

     - Motivo, comentarios y fecha se registran correctamente.

# **Guía detallada para crear una Landing de Baja en Salesforce Marketing Cloud usando AMPScript y SSJS**

1. #### **Enlace desde el Email**

   - **Enlace básico con parámetros encriptados (AMPScript)**

     Utilizamos AMPScript para generar un enlace que incluya datos sensibles encriptados. Esto permite proteger información como el `SubscriberKey`.

     ```ampscript
     %%[
       VAR @subscriberKey, @encryptedData
       SET @subscriberKey = AttributeValue("_subscriberkey")
       SET @encryptedData = Base64Encode(@subscriberKey) /* Encripta SubscriberKey */

       /* Genera URL con datos encriptados */
       SET @encryptedURL = CloudPagesURL(PageId, 'encryptedKey', @encryptedData)
     ]%%
     <a href="%%=RedirectTo(@encryptedURL)=%%">Darse de baja</a>
     ```

2. #### **Configuración de la Landing Page**

   - **Formulario para capturar motivos de baja (HTML)**

     Este formulario envía datos al servidor para procesar la baja. Incluye un campo oculto para el parámetro `encryptedKey` recibido desde el email.

     ```html
     <form action="%%=RequestParameter('PageURL')=%%" method="POST">
       <label for="motivo">Motivo de la baja:</label>
       <select id="motivo" name="Motivo" required>
         <option value="No estoy interesado">No estoy interesado</option>
         <option value="Recibo demasiados emails">Recibo demasiados emails</option>
         <option value="Otro">Otro</option>
       </select>
       <label for="comentario">Comentarios:</label>
       <textarea id="comentario" name="Comentario"></textarea>
       <input type="hidden" name="EncryptedKey" value="%%=RequestParameter('encryptedKey')=%%" />
       <button type="submit">Enviar</button>
     </form>
     ```

3. #### **Procesamiento de la Baja**

   Aquí combinamos **SSJS** para manejar lógica avanzada y **AMPScript** para personalización simple.

   - **SSJS para procesar datos**

     ```javascript
     <script runat="server">
       Platform.Load("Core", "1.1.1");

       try {
         // Obtener parámetros enviados
         var encryptedKey = Request.GetFormField("EncryptedKey");
         var subscriberKey = Platform.Function.Base64Decode(encryptedKey);
         var motivo = Request.GetFormField("Motivo");
         var comentario = Request.GetFormField("Comentario");

         // Validar que el SubscriberKey existe
         if (!subscriberKey) {
           Platform.Response.Write("<p>Error: No se pudo identificar al usuario.</p>");
           return;
         }

         // Actualizar estado en All Subscribers
         var statusUpdate = [
           { "SubscriberKey": subscriberKey, "Status": "Unsubscribed" }
         ];
         Platform.Function.UpdateData("All Subscribers", ["SubscriberKey"], ["Status"], statusUpdate);

         // Guardar información de baja en una Data Extension
         var dataExtension = "DE_Bajas";
         Platform.Function.InsertDE(dataExtension, {
           "SubscriberKey": subscriberKey,
           "Motivo": motivo,
           "Comentario": comentario,
           "Fecha": Platform.Function.Now()
         });

         // Mostrar mensaje de confirmación
         Platform.Response.Write("<p>Gracias. Tu baja ha sido procesada correctamente.</p>");

       } catch (e) {
         // Manejo de errores
         Platform.Response.Write("<p>Error al procesar la baja: " + Stringify(e) + "</p>");
       }
     </script>
     ```

4. #### **Validación adicional con AMPScript**

   - **Comprobación de bajas duplicadas**

     Utilizamos AMPScript para verificar si el usuario ya está dado de baja antes de procesar la solicitud.

     ```ampscript
     %%[
       VAR @subscriberKey, @rows, @rowCount
       SET @subscriberKey = RequestParameter("SubscriberKey")
       SET @rows = LookupRows("DE_Bajas", "SubscriberKey", @subscriberKey)
       SET @rowCount = RowCount(@rows)

       IF @rowCount > 0 THEN
     ]%%
     <p>Ya te has dado de baja anteriormente. No es posible realizar esta acción nuevamente.</p>
     %%[ ELSE ]%%
     <p>Procesando tu solicitud...</p>
     %%[ ENDIF ]%%
     ```

5. #### **Data Extension para registrar bajas**

   - **Estructura de la Data Extension (`DE_Bajas`)**

     Crea una **Data Extension** con las siguientes columnas:

     - **SubscriberKey** (Primary Key)
     - **Motivo**
     - **Comentario**
     - **Fecha**

     Esta estructura te permite registrar las bajas junto con los motivos y comentarios de los usuarios.

6. #### **Thank You Page**

   - **Confirmación personalizada**

     Personaliza la experiencia del usuario después de procesar la baja.

     ```html
     <p>Gracias, %%=RequestParameter('SubscriberKey')=%%. Tu baja ha sido procesada correctamente.</p>
     ```

7. #### **Escenarios de Prueba**

   - **Asegúrate de probar:**
     1. **Baja desde el email con datos encriptados.**
        - Valida que el enlace lleva a la Landing Page y desencripta los datos correctamente.
     2. **Comprobación de duplicados.**
        - Asegúrate de que un usuario ya dado de baja no pueda repetir la acción.
     3. **Registro correcto en All Subscribers y Data Extension.**
        - Confirma que los cambios de estado y los datos adicionales se guardan correctamente.
     4. **Manejo de errores.**
        - Verifica cómo responde la página ante errores, como datos encriptados incorrectos.
