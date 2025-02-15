## **Content Builder en Salesforce Marketing Cloud: Una Explicación Detallada**

#### Introducción:

**Content Builder** es la herramienta de creación y gestión de contenido dentro de Salesforce Marketing Cloud (SFMC). Proporciona a los usuarios una plataforma para crear, organizar y reutilizar activos de marketing como correos electrónicos, plantillas, imágenes y bloques de contenido. Es un sistema visual e intuitivo, que permite a los profesionales de marketing diseñar experiencias personalizadas sin necesidad de conocimientos técnicos avanzados.

---

2. ### **`Importancia de Content Builder`**:

   Content Builder es crucial para campañas de marketing omnicanal. Facilita la creación de contenido consistente que puede reutilizarse en múltiples canales como email, SMS, o redes sociales. Su capacidad para segmentar y personalizar contenido permite a los equipos de marketing ejecutar campañas altamente dirigidas, mejorando la relevancia del mensaje y aumentando el retorno de inversión (ROI).

   ***

3. ### **`Estructura y Organización de Content Builder`**:

   La plataforma utiliza una **estructura jerárquica** que ayuda a organizar contenido de manera eficiente:

   - **Carpetas**: Permiten organizar los activos de forma lógica según categorías o campañas específicas.
   - **Bloques de contenido**: Son fragmentos de contenido reutilizables que pueden incluir texto, imágenes, botones o scripts personalizados. Estos bloques facilitan la personalización y agilizan la creación de correos electrónicos.
   - **Plantillas**: Son diseños preestablecidos que se pueden utilizar como punto de partida para crear correos electrónicos personalizados.

   ***

4. ### **`Creación de Correo Electrónico con Content Builder`**:

   Para crear un correo electrónico en Content Builder, puedes seguir estos pasos:

   - **Paso 1**: Ve a Content Builder y selecciona "Create Email". Aquí podrás elegir entre comenzar desde una **plantilla** predefinida o desde cero con una **lona en blanco**.
   - **Paso 2**: Añade **bloques de contenido** al área de diseño arrastrando y soltando los elementos. Puedes elegir entre bloques de texto, imágenes, botones, o contenido dinámico.
   - **Paso 3**: Personaliza el diseño ajustando colores, fuentes, o agregando tu propio HTML si lo deseas. Content Builder ofrece una interfaz visual que facilita la creación sin la necesidad de escribir código.
   - **Paso 4**: **Prueba tu correo electrónico** utilizando la funcionalidad de vista previa o haciendo un envío de prueba. Aquí también puedes verificar que los enlaces y el contenido dinámico funcionen correctamente.
   - **Paso 5**: Guarda y categoriza tu correo electrónico en una carpeta específica para futuras referencias o modificaciones.

   ***

5. ### **`Bloques de Contenido Reutilizables`**:

   Una de las características más poderosas de Content Builder es la capacidad de crear bloques de contenido reutilizables. Estos bloques permiten a los equipos de marketing mantener una coherencia de marca a lo largo de todas las campañas y canales. Puedes crear un bloque de texto con el mensaje de bienvenida de la marca, un bloque de imágenes con el logotipo de la empresa, o un bloque dinámico que cambie según el comportamiento del usuario.

   ```s
   Ejemplo de bloque de contenido reutilizable:
   Un bloque de "header" para correos electrónicos que incluya el logo y el enlace a la página principal de la empresa.
   ```

   ***

6. ### **`Personalización Dinámica y Reglas de Contenido`**:

   Content Builder permite personalizar contenido en función de atributos de los clientes, como su nombre, ubicación, historial de compras, entre otros. Esto se logra utilizando **AMPscript** o **Content Blocks dinámicos** que cambian según los datos del cliente.

   - **AMPscript**: Es un lenguaje de scripting que se utiliza dentro de Marketing Cloud para personalizar contenido y crear reglas condicionales basadas en los datos del destinatario.
   - **Content Blocks Dinámicos**: Permiten mostrar diferentes versiones del contenido dentro de un correo según los datos del usuario. Por ejemplo, puedes mostrar una oferta distinta dependiendo de si el destinatario es un cliente frecuente o un cliente nuevo.

   Ejemplo de uso de **AMPscript**:

   ```AMPscript
   %%[IF @userType == "New" THEN]%%
      ¡Bienvenido a nuestra tienda! Aprovecha un 10% de descuento en tu primera compra.
   %%[ELSE]%%
      ¡Gracias por seguir comprando con nosotros! Aquí tienes un 15% de descuento.
   %%[ENDIF]%%
   ```

   ***

7. ### **`Pruebas A/B en Content Builder`**:

   Salesforce Marketing Cloud también permite realizar pruebas A/B para optimizar tus campañas. Puedes enviar diferentes versiones de un mismo correo electrónico a una pequeña porción de tu audiencia y luego analizar cuál obtiene mejores resultados (por ejemplo, mayor tasa de apertura o clics).

   Los elementos que puedes probar incluyen:

   - **Líneas de asunto**.
   - **Contenido de los correos** (texto, imágenes, etc.).
   - **Llamados a la acción** (botones, links).

   ***

8. ### **`Pruebas y Visualización Multi-dispositivo`**:

   Una función clave de Content Builder es la capacidad de realizar pruebas en **diferentes dispositivos** y **clientes de correo electrónico**. Esto asegura que los correos electrónicos se vean bien tanto en computadoras de escritorio como en dispositivos móviles. Puedes usar la herramienta de vista previa para ver cómo se verá tu correo electrónico en Gmail, Outlook, dispositivos iOS, Android, entre otros.

   ***

9. ### **`Gestión de Imágenes y Archivos`**:

   **Content Builder** tiene una sección dedicada a la **gestión de activos multimedia**. Aquí puedes almacenar imágenes, videos y otros archivos multimedia que utilizarás en tus campañas. La plataforma también permite comprimir automáticamente las imágenes para mejorar la velocidad de carga del correo sin perder calidad.

   ***

10. ### **`Automatización con Content Builder`**:

    Puedes integrar Content Builder con la herramienta de **Automation Studio** dentro de Marketing Cloud para automatizar el envío de correos electrónicos. Por ejemplo, puedes configurar que ciertos correos se envíen automáticamente tras la compra de un producto o en fechas especiales como cumpleaños.

    ***

11. ### **`Consideraciones sobre Rendimiento y Tamaño del Correo`**:

    Aunque Content Builder permite crear correos visualmente atractivos, es importante considerar el **tamaño** del correo electrónico y la **cantidad de imágenes** que incluyes. Los correos demasiado grandes o con muchas imágenes pueden ralentizar la carga y reducir la tasa de apertura. Por eso, es recomendable utilizar imágenes optimizadas y mantener el tamaño total del correo lo más bajo posible.

    ***

12. ### **`Mejores Prácticas para Organizar el Contenido`**:

    A medida que creas más correos y activos, es esencial mantener una buena organización en tus carpetas dentro de Content Builder. Utiliza convenciones de nombres consistentes, categoriza los activos por tipo de campaña o audiencia, y elimina activos que ya no estén en uso para evitar confusiones.

    ***

13. ### **`Compatibilidad con Otras Herramientas de Marketing Cloud`**:

    Content Builder se integra fácilmente con otras herramientas de Salesforce Marketing Cloud, como **Journey Builder** para la creación de recorridos personalziados de envíos hacia el cliente, **Automation Studio** para automatizar la segmentación de los datos del cliente o de la misma audiencia y **Mobile Studio** para enviar mensajes SMS. Esta integración permite crear experiencias de marketing personalizadas y cohesivas en múltiples canales.

# **`Email Studio - Content Builder`**

#### Introducción:

Email Studio en Salesforce Marketing Cloud (SFMC) permite a los usuarios crear, personalizar y enviar correos electrónicos de manera efectiva. Este resumen se centra en la creación de contenido utilizando Content Builder, incluyendo Email Messages, Email Templates, Content Blocks y Uploads. También se describen los métodos para enviar pruebas, correos reales y la creación de Journeys para automatizar envíos.

---

1. ### **`Content Builder en Email Studio`**:

   - **`Acceso`**:
     - Desde Email Studio > Email > Content
     - Desde Content Builder > Content Builder

   ***

2. ### **`Creación de Contenido`**:

   - **`Email Message`**:

     - **Uso**: Contenido final que se enviará a los subscriptores.
     - **Métodos de creación**:
       - A partir de una plantilla existente
       - HTML
       - Texto plano
       - Con tecnología AMP para interactividad avanzada (muy poco utilizada). Es como ingresar un **iframe** dentro del email.

   - **`Email Template`**:

     - **Uso**: Plantilla Email reutilizable para mantener consistencia en los correos electrónicos.
     - **Métodos de creación**:
       - Desde cero usando el editor visual
       - A partir de HTML
       - Usando una plantilla existente

   - **`Content Blocks`**:

     - **Uso**: Bloques reutilizables que se pueden insertar en múltiples emails.
     - **Tipos**: HTML, texto, imágenes, botones, etc.
     - **Creación**: Se pueden crear mientras se configura un email o desde el menú "Create".

   - **`Uploads`**:
     - **Uso**: Importar archivos externos (imágenes, documentos) para usarlos en emails.
     - **Métodos**: Arrastrar y soltar o usar la opción **Upload** en Content Builder.

   ***

3. ### **`Envío de Pruebas (Preview and Test)`**:

   - **`Proceso`**:

     - Seleccionar el email en Content Builder.
     - Hacer clic en la flecha correspondiente de la dcha del todo. Busca **Preview and Test**.
     - En esa ventana hay un recuadro a la izq que corresponde a 3 iconos. Selecciona el icono correspondiente a **Test Send** (es el del medio).
     - Elegir destinatarios de prueba o una audience.
     - Personalizar datos de prueba si es necesario.
     - Enviar la prueba con el botón al fondo del mismo recuadro. El que dice **Send Test**.

   - **`Importancia`**: Permite verificar el diseño y contenido antes del envío real.

   ***

4. ### **`Envío de Correos Reales`**:

   - **`Métodos de Envío`**:

     - Envío inmediato (one-time send)
     - Envío programado
     - Envío recurrente

   - **`Pasos para enviar un correo real`**:
     1. Seleccionar el email en Content Builder.
     2. Elegir "Send".
     3. Definir audiencia (Data Extension o lista de suscriptores).
     4. Configurar opciones de envío (fecha, hora, etc.).
     5. Revisar y confirmar.

   ***

5. ### **`Creación de Journeys para Envíos Automatizados`**:

   - **`Acceso`**: Journey Builder en SFMC.

   - **`Pasos de Creación`**:

     1. Iniciar un nuevo Journey.
     2. Definir el punto de entrada (ej. suscripción a newsletter).
     3. Agregar actividades de email (usando los emails creados en Content Builder).
     4. Configurar lógica de decisión y esperas.
     5. Añadir actividades adicionales (SMS, push notifications, etc.).
     6. Validar y activar el Journey.

   - **`Tipos Comunes de Journeys`**:
     - Bienvenida
     - Reactivación de clientes
     - Nurturing de leads
     - Recordatorios de carrito abandonado

   ***

6. ### **`Mejores Prácticas`**:

   - Usar plantillas para mantener la consistencia de marca.
   - Implementar personalización dinámica utilizando Content Blocks y campos de merge.
   - Realizar pruebas A/B para optimizar tasas de apertura y clics.
   - Monitorear métricas de rendimiento y ajustar estrategias según sea necesario.

Email Studio en SFMC proporciona una suite completa para crear, probar, enviar y automatizar campañas efectivas por correo electrónico. La combinación del uso eficiente del Content Builder y las capacidades del Journey Builder permite a los marketers ofrecer experiencias personalizadas que mejoran la interacción con los clientes.

# **`Creación de Contenido Dinámico y Envío de Tests en Email Studio de SFMC`**

#### Introducción:

Email Studio en Salesforce Marketing Cloud (SFMC) permite crear contenido dinámico y personalizado, así como realizar pruebas efectivas antes de los envíos reales. Este resumen se enfoca en la creación de contenido dinámico, la selección de filtros y la elección de audiencias para tests.

---

1. ### **`Creación de Contenido Dinámico`**:

   - **`Definición`**: Contenido que cambia según las características o comportamientos del destinatario.

   - **`Proceso de Creación`**:

     1. Seleccionar el bloque de contenido en el email.
     2. Hacer clic en "Dynamic Content" en la barra lateral.
     3. Elegir la fuente de datos (Data Extension o atributo de suscriptor).
     4. Definir reglas para mostrar contenido específico basado en condiciones.

   - **`Tipos de Contenido Dinámico`**:
     - Texto personalizado
     - Imágenes dinámicas
     - Ofertas personalizadas
     - Recomendaciones de productos

   ***

2. ### **`Selección de Filtros`**:

   - **`Propósito`**: Segmentar la audiencia para enviar contenido más relevante.

   - **`Proceso de Selección`**:

     1. En la sección de Data Extension desde Email Studio, seleccionar "Create" y "Filtered Data Extension".
     2. Selecciona la DE a segmentar. Elegir el campo para filtrar (ej. edad, ubicación, historial de compras, permite_publicidad, etc.).
     3. Definir los criterios del filtro (ej. edad is equal to 30, ubicación is no empty, etc.).

   - **`Ejemplos de Filtros`**:
     - Clientes que han comprado en los últimos 30 días
     - Suscriptores que no han abierto emails en los últimos 3 meses
     - Usuarios de una región geográfica específica

   ***

3. ### **`Elección de Audiencia para Tests`**:

   - **`Propósito`**: Verificar el contenido, diseño y funcionalidad del email antes del envío masivo.

   - **`Proceso de Selección de Audiencia para Test`**:

     1. En la sección "Preview and Test", seleccionar entre los 3 iconos de la izquierda "Send Test".
     2. Elegir el método de selección de audiencia:
        - Introducir direcciones de correo manualmente
        - Seleccionar de una lista predefinida de testers
        - Usar una Data Extension específica para pruebas

   - **`Importancia de la Selección de Audiencia para Test`**:
     - Representatividad: Incluir destinatarios que representen diferentes segmentos de la audiencia real.
     - Variedad de dispositivos: Asegurar que el email se pruebe en diferentes clientes de correo y dispositivos.
     - Verificación de personalización: Comprobar que el contenido dinámico funciona correctamente para diferentes perfiles.

   ***

4. ### **`Mejores Prácticas para Tests`**:

   - Realizar pruebas A/B de asunto, contenido o diseño.
   - Utilizar herramientas de previsualización para diferentes dispositivos.
   - Verificar los enlaces y la funcionalidad interactiva.
   - Comprobar la renderización de imágenes y el texto alternativo.
   - Revisar la personalización y el contenido dinámico con datos de prueba variados.

   ***

5. ### **`Análisis Post-Test`**:

   - Revisar las métricas de los envíos de prueba (tasa de apertura, clics).
   - Solicitar feedback a los destinatarios de prueba.
   - Realizar ajustes basados en los resultados antes del envío final.

   ***

6. ### **`Resumen`**:
   La creación de contenido dinámico, la selección cuidadosa de filtros y la elección adecuada de audiencias para tests son elementos cruciales en Email Studio de SFMC. Estas prácticas permiten a los marketers optimizar sus campañas de email, asegurando que el contenido sea relevante, personalizado y funcione correctamente antes de llegar a la audiencia final. La combinación de estos elementos contribuye significativamente a mejorar la efectividad y el impacto de las campañas de email marketing.

# Guía detallada para utilizar Content Builder, Dynamic Content y crear un footer con AMPScript en SFMC:

1. #### **Accede a Content Builder**:

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
   - Navega a **Content Builder > Content Builder** desde el menú principal.

2. #### **Crea un nuevo email**:

   - Haz clic en **Create** y selecciona **Email Message**.
   - Elige una plantilla o comienza desde cero.

3. #### **Utiliza Content Builder**:

   - Arrastra y suelta bloques de contenido predefinidos.
   - Personaliza el diseño y el contenido según tus necesidades.
   - Utiliza el editor HTML para un control más preciso.

4. #### **Implementa Dynamic Content**:

   - Selecciona un área del email donde quieras contenido dinámico.
   - Haz clic en **Dynamic Content** en la barra de herramientas.
   - Define las reglas para mostrar contenido diferente basado en atributos (campos de la tabla) del suscriptor.

5. #### **Crea el footer con AMPScript**:

   - En el editor HTML, añade el siguiente código para el footer:

     ```html
     <footer class="footer">
       <p>&copy; %%=Format(Now(), "yyyy")=%% %%=v(@CompanyName)=%%. Todos los derechos reservados.</p>
       <p>
         <a href="%%=RedirectTo(@PrivacyPolicyURL)=%%" style="color: #007bff">Política de Privacidad</a> |
         <a href="%%=RedirectTo(@UnsubscribeURL)=%%" style="color: #007bff">Darse de baja</a>
       </p>
       <p>
         Si deseas actualizar tus preferencias o darte de baja, visita tu
         <a href="%%profile_center_url%%">Centro de Preferencias</a>.
       </p>
       <p>
         Este correo fue enviado desde: <br />
         <strong>%%Member_Busname%%</strong> <br />
         %%Member_Addr%%<br />
         %%Member_City%%, %%Member_State%% %%Member_PostalCode%%, %%Member_Country%%
       </p>
     </footer>
     ```

6. #### **Configura las variables AMPScript**:

   - Antes del encabezado del email, añade el siguiente código AMPScript en un bloque previo a la cabecera (es común definir previamente todas las variables que se utilizarán en el contenido):

     ```ts
     %%[
     VAR @CompanyName, @PrivacyPolicyURL, @UnsubscribeURL
     SET @CompanyName = "Nike"
     SET @PrivacyPolicyURL = "https://www.ejemplo.com/privacy"
     SET @UnsubscribeURL = "https://www.ejemplo.com/unsubscribe"
     ]%%
     ```

   - Aquí una explicación interesante: [Help Salesforce Headers and Footers](https://help.salesforce.com/s/articleView?id=sf.mc_es_headers_footers.htm&type=5).

7. #### **Personaliza el Sender Profile**:

   - En la configuración del email, selecciona o crea un Sender Profile comercial.
   - Asegúrate de que la información del remitente sea clara y reconocible.

8. #### **Prueba y revisa**:

   - Utiliza la función de vista previa para verificar el contenido dinámico y el footer.
   - Envía emails de prueba a diferentes clientes de correo.

9. #### **Guarda y activa**:

   - Guarda tu email en Content Builder.
   - Activa el email para su uso en campañas.

10. #### **Resumen de Especificaciones**

    - **Tipo de Email**: Comercial con contenido dinámico
    - **Footer**: Personalizado con AMPScript, incluyendo información legal y enlaces de desuscripción
    - **Dynamic Content**: Implementado según atributos del suscriptor
    - **Sender Profile**: Configurado para uso comercial
    - **Cumplimiento Legal**: Incluye política de privacidad, opción de desuscripción y dirección física

Este proceso asegura la creación de un email profesional y conforme a las regulaciones, utilizando las capacidades de Content Builder y Dynamic Content de SFMC, junto con un footer personalizado y legalmente compliant mediante AMPScript.

Aquí tienes la explicación paso a paso para montar un email para **Endesa** en **Content Builder** de **Salesforce Marketing Cloud (SFMC)**, utilizando **personalización**, **bloques de contenido** y **contenido dinámico**.

# **Montar un Email para Endesa en Content Builder de SFMC**

1. #### **Acceso a Content Builder**:

   - Inicia sesión en tu cuenta de **Salesforce Marketing Cloud**.
   - Desde el menú principal, selecciona **Content Builder**.

2. #### **Crear un Nuevo Email**:

   - En **Content Builder**, haz clic en **Create** y selecciona **Email**.
   - Nombra el correo como **Creatividad_Endesa_NombreAlumno** para identificar fácilmente tu trabajo.
   - Elige una **plantilla** que se ajuste al estilo de Endesa o empieza desde cero si lo prefieres.

3. #### **Añadir Personalización**:

   - a. **Uso de Campos Personalizados**:

   - Utiliza campos personalizados como el **nombre del destinatario** para que el correo esté personalizado.
   - Inserta campos de personalización como **"%%FirstName%%"** para que el correo salude a los destinatarios por su nombre.

   - **Ejemplo**:

     - "Hola, %%FirstName%%, tenemos novedades para ti."

4. #### **Agregar Bloques de Contenido**:

   - a. **Bloques de Imagen**:

   - Inserta el **logo de Endesa** desde la página oficial: [Endesa](https://www.endesa.com/es).
   - Añade el logotipo al principio del correo para alinearlo con la identidad visual de la marca.

   - b. **Bloques de Texto**:

   - Crea un bloque de texto para describir las ofertas o servicios que Endesa quiere comunicar.
   - **Ejemplo**: "Descubre nuestras nuevas tarifas sostenibles que se adaptan a tus necesidades."

   - c. **Bloques de Botón**:

   - Agrega un **botón CTA** (Call To Action) con texto como "Ver Más" o "Suscríbete Ahora".
   - Personaliza el botón con colores que se alineen con el **look & feel** de Endesa.

5. #### **Configurar Contenido Dinámico**:

   - a. **Segmentación de Audiencia**:

   - Crea diferentes versiones del correo según los segmentos de audiencia de Endesa.
   - **Ejemplo**: Muestra ofertas distintas para clientes residenciales y comerciales.

   - b. **Reglas de Contenido Dinámico**:

   - Configura reglas para que los bloques de contenido cambien según las preferencias del usuario.
   - **Ejemplo**: Si el cliente ha mostrado interés en tarifas de energía solar, muestra contenido específico para esas tarifas.

6. #### **Estilo y Diseño**:

   - Asegúrate de que el **diseño general** del email esté alineado con la **imagen corporativa de Endesa**.
   - Utiliza colores y fuentes similares a los que se encuentran en su página web.

7. #### **Revisión y Prueba**:

   - Utiliza la función de **previsualización** para ver cómo se verá el correo personalizado para diferentes destinatarios.
   - Envía un **email de prueba** para asegurarte de que los bloques de contenido y la personalización funcionan correctamente.

8. #### **Compartir con la BU BXPERT**:

   - Finalmente, comparte el email con la Business Unit **BXPERT** para revisión y corrección.

9. #### **Resumen de Pasos**:

   - Accede a **Content Builder** en SFMC.
   - Crea un email y nómbralo como **Creatividad_Endesa_NombreAlumno**.
   - Añade personalización utilizando campos como **"%%FirstName%%"**.
   - Inserta bloques de contenido: **imagen, texto y botón**.
   - Configura **contenido dinámico** según la segmentación de audiencia.
   - Asegúrate de que el diseño esté alineado con la **imagen de Endesa**.
   - Prueba y comparte el correo con la **BU BXPERT** para corrección.
