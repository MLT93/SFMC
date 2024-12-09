# **`Journey Builder: Aplicaciones avanzadas y ejemplos reales`**

#### Introducción:

Journey Builder es una herramienta avanzada dentro de Salesforce Marketing Cloud (SFMC) que permite diseñar y ejecutar campañas de marketing automatizadas y personalizadas. Este módulo, **Journey Builder II**, profundiza en las funcionalidades avanzadas como **actualización dinámica de datos**, **inyecciones vía API en tiempo real**, y estrategias de gestión optimizada para campañas complejas. Estas características permiten a las marcas ofrecer comunicaciones relevantes y efectivas en cada etapa del ciclo de vida del cliente.

A lo largo de esta explicación, se presentan ejemplos reales aplicados a contextos de marketing, como campañas de retención, recuperación de clientes inactivos y optimización de experiencias.

---

1. ### **`Creación de un Journey en SFMC`**

   - **`Componentes esenciales`**:

     - **Data Extensions (DE)**:
       - Son bases de datos utilizadas para almacenar información relevante de los contactos.
       - **Estructura organizada**:  
         Para garantizar claridad, las DE deben seguir una nomenclatura consistente.  
         **Ejemplo real**:  
         Para una campaña de fin de año:
         - `DE_Mkt_Campaña_FinAño_2024`
         - `DE_Mkt_Segmento_VIP_2024`

   - **`Contenido creativo`**:

     - Incluye emails, bloques de contenido, imágenes y plantillas personalizadas.
     - **Ejemplo real**:  
       En una campaña de ventas:
       - **Email 1**: "Aprovecha nuestras ofertas exclusivas."
       - **Email 2**: "Última oportunidad, ¡las promociones terminan hoy!"

   - **`Estructura del Journey`**:

     Las Entry Sources son puntos de entrada que determinan cómo los contactos ingresan al journey. Estas definen el origen de los datos y establecen el flujo inicial de la trayectoria. Elegir la Entry Source adecuada es esencial para garantizar que los contactos entren correctamente en el journey y que este responda a sus necesidades específicas.

     - **Formulario en una landing page**:

       - **Descripción**: Los contactos ingresan al journey después de completar un formulario en una página web o landing page. Los datos recolectados, como nombre y correo electrónico, se almacenan en una Data Extension (DE).
       - **Utilidad**: Ideal para campañas de generación de leads, promociones o registros de eventos.
       - **Ejemplo real**:  
         Un cliente completa un formulario para recibir un catálogo de productos de temporada. Automáticamente es añadido a un journey que le envía un correo de bienvenida con el catálogo en formato digital.

     - **Inyección vía API**:

       - **Descripción**: Los contactos son agregados dinámicamente a un journey mediante una llamada API. Este método es ideal para flujos basados en eventos en tiempo real, como compras, abandono de carritos o interacciones en aplicaciones móviles.
       - **Utilidad**: Perfecto para activar journeys en tiempo real y basados en acciones específicas.
       - **Ejemplo real**:  
         Un cliente abandona su carrito de compras en un sitio web. Una API envía su información al journey, que le envía un correo con un descuento para motivarlo a completar la compra.

     - **Data Extension (DE)**:

       - **Descripción**: Utiliza una DE como fuente de datos para iniciar el journey. Los contactos en la DE pueden ser incluidos en base a criterios de filtrado específicos.
       - **Utilidad**: Ideal para campañas basadas en segmentos predefinidos o listas actualizadas automáticamente.
       - **Ejemplo real**:  
         Una empresa lanza una promoción dirigida solo a clientes VIP almacenados en una DE específica. Estos contactos ingresan al journey y reciben un correo promocional personalizado.

     - **Date-Based Event**:

       - **Descripción**: Los contactos son añadidos al journey en función de una fecha almacenada en la DE, como cumpleaños, aniversarios o fechas de renovación de contrato.
       - **Utilidad**: Excelente para campañas programadas como recordatorios o celebraciones.
       - **Ejemplo real**:  
         Un cliente cuyo cumpleaños es detectado en la DE es añadido al journey y recibe un mensaje de felicitación con un cupón de descuento.

     - **Salesforce Entry Source**:

       - **Descripción**: Conecta datos directamente desde Salesforce CRM, como leads o contactos, para iniciar el journey.
       - **Utilidad**: Es especialmente útil para sincronizar acciones de marketing con el equipo de ventas o servicio al cliente.
       - **Ejemplo real**:  
         Un lead es generado en Salesforce CRM y automáticamente ingresado a un journey que lo nutre con información relevante antes de que el equipo de ventas lo contacte.

     - **CloudPages Form Submission**:

       - **Descripción**: Similar al formulario en landing pages, pero específico de formularios creados en CloudPages dentro de SFMC.
       - **Utilidad**: Ideal para integrar formularios directamente con campañas en SFMC sin necesidad de herramientas externas.
       - **Ejemplo real**:  
         Un cliente se registra para un evento a través de un formulario de CloudPages. Esto activa un journey que envía confirmaciones y recordatorios del evento.

     - **MobileConnect List**:

       - **Descripción**: Usa listas de contactos de MobileConnect como fuente de entrada.
       - **Utilidad**: Ideal para campañas de SMS o notificaciones push segmentadas.
       - **Ejemplo real**:  
         Los contactos que optaron por recibir notificaciones SMS ingresan al journey y reciben actualizaciones promocionales directamente en sus dispositivos móviles.

     - **Event-Based API Entry**:

       - **Descripción**: Los contactos son añadidos al journey en respuesta a eventos específicos detectados en aplicaciones, como compras, descargas o interacciones.
       - **Utilidad**: Perfecto para aplicaciones móviles que necesitan journeys altamente personalizados.
       - **Ejemplo real**:  
         Un cliente realiza una compra dentro de una aplicación móvil. Esto activa un journey que envía un agradecimiento y recomendaciones de productos relacionados.

     - **Notas importantes sobre las Entry Sources**:
       - Cada journey puede tener solo una Entry Source.
       - Una vez activado el journey, la Entry Source no puede ser editada. Para realizar cambios, es necesario crear una nueva versión del journey.
       - Las Entry Sources deben alinearse con los objetivos del journey y garantizar que los datos sean precisos y estén actualizados.

   - **`Actividades clave`**:

     1. **Waits (Decisión de tiempo)**:  
        Configuran pausas estratégicas antes del siguiente paso dentro del journey. Estas pausas pueden establecerse en función de un período fijo o de una fecha específica.  
        **Utilidad**:  
        Permite espaciar las interacciones con los contactos para evitar sobrecarga de mensajes y sincronizar envíos en momentos estratégicos.  
        **Ejemplo real**:

        - Enviar un recordatorio 24 horas después de una compra pendiente.
        - Esperar hasta el cumpleaños de un cliente para enviarle un mensaje de felicitación personalizado.

     2. **Decision Splits**:  
        Segmentan contactos en diferentes rutas según atributos o acciones específicas que definan su comportamiento o características.  
        **Utilidad**:  
        Permite crear experiencias altamente personalizadas adaptando el contenido a las necesidades o preferencias de cada segmento.  
        **Ejemplo real**:

        - Dividir contactos según idioma (español o inglés) para campañas locales.
        - Crear rutas distintas para nuevos clientes y clientes recurrentes.

     3. **Engagement Splits**:  
        Filtran contactos en función de su nivel de interacción previo con campañas, como aperturas de correos, clics en enlaces o conversiones.  
        **Utilidad**:  
        Ayuda a reenganchar a contactos poco comprometidos y a optimizar los mensajes para aquellos que ya han mostrado interés.  
        **Ejemplo real**:

        - Los clientes que no abrieron un correo inicial reciben un mensaje de seguimiento.
        - Los clientes que hicieron clic en una promoción son dirigidos a un journey de agradecimiento con contenido adicional.

     4. **Pruebas A/B**:  
        Experimentan con diferentes variantes de contenido, como líneas de asunto, diseños de correo o llamadas a la acción. Esto permite identificar qué opción tiene mejor rendimiento antes de implementarla a gran escala.  
        **Utilidad**:  
        Incrementa la efectividad de las campañas al optimizar elementos clave basados en datos reales.  
        **Ejemplo real**:

        - Probar el impacto de "¡Solo por hoy!" vs. "Última oportunidad para ahorrar."
        - Comparar dos diseños de correos electrónicos para determinar cuál genera más clics.

     5. **Einstein STO (Send Time Optimization)**:  
        Utiliza inteligencia artificial para predecir el mejor momento para enviar mensajes a cada contacto, basado en su comportamiento histórico.  
        **Utilidad**:  
        Maximiza las tasas de apertura y clics al enviar mensajes cuando los contactos tienen más probabilidades de interactuar.  
        **Ejemplo real**:

        - Enviar un correo promocional a las 10:00 a.m. para clientes que suelen abrir correos por la mañana y a las 7:00 p.m. para aquellos que prefieren la noche.

     6. **Einstein Scoring Split**:  
        Clasifica contactos según la probabilidad de realizar acciones específicas, como completar una compra o registrarse en un evento.  
        **Utilidad**:  
        Mejora la segmentación al priorizar esfuerzos en los contactos con mayor probabilidad de conversión.  
        **Ejemplo real**:

        - Dividir contactos en categorías de "Alta probabilidad de compra" y "Baja probabilidad" para ajustar la intensidad de las comunicaciones.

     7. **Update Contact**:  
        Modifica o actualiza los datos de un contacto en una Data Extension a medida que avanza en el journey.  
        **Utilidad**:  
        Permite registrar dinámicamente interacciones o cambios en los datos de los contactos, como actualizaciones de preferencias o estados.  
        **Ejemplo real**:

        - Cambiar el estado de un cliente a "Activo" tras realizar una compra.

     8. **Journey Goal**:  
        Permite establecer metas dentro del journey para evaluar si los contactos logran el objetivo deseado, como realizar una compra o completar un registro.  
        **Utilidad**:  
        Ayuda a medir la efectividad de los journeys en tiempo real y a ajustar estrategias si los resultados no son los esperados.  
        **Ejemplo real**:

        - Definir como meta que al menos el 20% de los contactos completen una encuesta.

     9. **Exit Criteria**:  
        Establece condiciones para que los contactos salgan automáticamente del journey una vez que cumplen ciertos requisitos.  
        **Utilidad**:  
        Evita que los contactos sigan recibiendo mensajes innecesarios si ya lograron el objetivo.  
        **Ejemplo real**:
        - Retirar a los contactos de una campaña de renovación si ya renovaron su suscripción.

     Estas actividades permiten a las marcas diseñar journeys más inteligentes, personalizados y efectivos, asegurando que cada cliente reciba el mensaje correcto en el momento adecuado.

   ***

2. ### **`Update Contact: Actualización dinámica de datos`**

   - **`¿Qué es Update Contact?`**
     Es una actividad que permite actualizar datos de un contacto en una Data Extension cuando este avanza en un journey.

   - **`Características clave`**:

     - **Actualización inteligente**:
       - Si el contacto ya existe, se modifican sus datos.
       - Si no existe, se agrega un nuevo registro.
     - **Registro de hora actual**:
       - La herramienta puede añadir automáticamente un timestamp para registrar la interacción del contacto.
     - **Buena práctica**:
       - Usar una Data Extension diferente de la fuente de entrada para evitar errores.

   - **`Ejemplo real`**:
     - **Caso**: Encuesta de satisfacción posventa.
     - **Objetivo**: Registrar la satisfacción del cliente según su respuesta.
     - **Implementación**:
       1. Un cliente recibe un correo pidiéndole calificar su experiencia.
       2. Según su respuesta, el sistema actualiza su nivel de satisfacción en la DE.
       ```json
       {
         "ContactoID": "12345",
         "NivelSatisfacción": "Alta",
         "Timestamp": "2024-12-08T10:00:00Z"
       }
       ```

   ***

3. ### **`Journey Builder vía API`**

   - **`¿Qué es el API Event?`**
     Permite inyectar contactos en un journey de forma dinámica y en tiempo real, utilizando datos enviados desde otras plataformas.

   - **`Configuración de un API Event`**:

     - **Estructura del evento**:
       Incluye información como la definición del evento y datos del cliente.
     - **Ejemplo real**:
     - **Caso**: Recuperación de carritos abandonados.
     - **Implementación**:  
       Un cliente abandona un carrito con los siguientes productos:

     ```json
     {
       "eventDefinitionKey": "AbandonoCarrito",
       "data": {
         "email": "cliente@example.com",
         "productos": [
           { "nombre": "Zapatos", "precio": 50 },
           { "nombre": "Bolso", "precio": 75 }
         ]
       }
     }
     ```

     El cliente es inyectado automáticamente en un journey que le envía un correo recordándole completar su compra.

   - **`Pruebas con Postman`**:
     - **Uso real**:  
       Probar y validar llamadas API simulando un evento.
     - **Ejemplo real**:  
       Enviar una solicitud para verificar que el journey se activa correctamente cuando un cliente agrega un producto al carrito.

---

4. ### **`Gestión y optimización de journeys`**

   - **`Creación y manejo de versiones`**:

     - Las versiones permiten iterar journeys para optimizarlos.
     - **Funcionamiento real**:
       - Una tienda en línea lanza una campaña de descuento. Después de analizar la baja tasa de conversión, crean una nueva versión con un descuento mayor y un diseño más atractivo.

   - **`Duplicación de actividades y journeys`**:

     - **Ejemplo real**:
       Una empresa tiene una campaña de bienvenida que funciona bien y decide duplicarla para adaptarla a nuevos mercados.

   - **`Pausar y detener journeys`**:
     - **Pausar**:
       - Detener temporalmente la entrada de contactos.  
         **Ejemplo real**:  
         Durante el mantenimiento del sistema, se pausa un journey para evitar errores en las interacciones.
     - **Parar**:
       - Termina el journey y expulsa a todos los contactos.  
         **Ejemplo real**:  
         Una campaña programada para el Black Friday se detiene inmediatamente después del evento.

   ***

5. ### **`Monitoreo y reportes`**

   - **`Visualización de resultados`**:

     - **Resultados en tiempo real**:
       - Permiten analizar entradas y errores en - **Entry Source**.
       - **Ejemplo real**:  
         Una empresa detecta que una lista de contactos no está correctamente segmentada y corrige los errores antes de continuar.

   - **`Reportes estándar`**:

     - **Journey Builder Email Send Summary**:
       - Analiza tasas de apertura y clics.
       - **Ejemplo real**:  
         Evaluar el éxito de un correo promocional para ajustar la estrategia futura.

   - **`Journey Builder Email Sends per Day`**:

     - **Identifica patrones de interacción por días:**
       - **Ejemplo real**:  
         Un eCommerce descubre que los martes tienen mayores tasas de conversión y programa sus envíos en consecuencia.

   - **`Intelligence Reports`**:
     - **Herramienta visual avanzada**:
       - Permite identificar cuellos de botella o puntos críticos en journeys complejos.
       - **Ejemplo real**:  
         Una empresa optimiza su campaña de retención al identificar que los clientes no completan un formulario clave.
