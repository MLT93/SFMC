# **`UAT en SFMC`**

#### Introducción:

User Acceptance Testing (UAT), o Pruebas de Aceptación del Usuario, es una etapa esencial en el desarrollo y despliegue de soluciones digitales, incluida la implementación de campañas y automatizaciones en **Salesforce Marketing Cloud (SFMC)**. Este proceso permite que los usuarios finales validen que las funcionalidades cumplen con los requisitos del negocio y operan como se espera en condiciones reales.

En el contexto de SFMC, UAT asegura la calidad y el éxito de las estrategias de marketing al verificar que los journeys, automatizaciones, contenido dinámico e integraciones funcionen correctamente antes de su despliegue en producción. Además, ofrece la oportunidad de identificar y corregir errores en un entorno controlado, evitando problemas en campañas reales y garantizando una experiencia óptima para los clientes finales.

La ejecución de UAT en SFMC no solo garantiza que las campañas cumplen con los objetivos del negocio, sino que también contribuye a construir confianza en las soluciones implementadas, optimizando su rendimiento y eficiencia.

---

1. ### **`¿Para qué sirve UAT?`**

   - **Validación de requisitos:**  
     Garantiza que la solución final cumpla con los requerimientos establecidos por los stakeholders.

   - **Prevención de errores:**  
     Identifica y corrige problemas funcionales antes del lanzamiento oficial, evitando errores en producción.

   - **Garantía de calidad:**  
     Confirma que las funcionalidades y flujos están optimizados para el uso real del sistema.

   - **Feedback de usuarios:**  
     Permite a los usuarios clave evaluar la solución, aportando mejoras y confirmando su adecuación a las necesidades reales.

   ***

2. ### **`Diseño e implementación`**

   Una configuración efectiva de Salesforce Marketing Cloud asegura que la plataforma cumpla con las metas de negocio, lo que requiere:

   - **`Cumplimiento de objetivos`**:

     - Garantizar que las funcionalidades implementadas estén alineadas con las necesidades comerciales.

   - **`Optimización del ROI`**:
     - Reducir costos operativos al automatizar procesos y personalizar las campañas basadas en datos.

   ***

3. ### **`Pruebas de aceptación de usuario (UAT)`**

   Las **UAT (User Acceptance Testing)** son un paso crítico para validar las configuraciones y flujos antes de su implementación en un entorno de producción.

   - **`Importancia`**:

     - Detectar errores antes del lanzamiento reduce costos y asegura la calidad del proyecto.
     - Garantizar que las funcionalidades implementadas cumplan con los requerimientos del negocio.

   - **`Ciclo de entornos en Salesforce`**:

     - **DEV**:

       - Configuración inicial y pruebas técnicas con datos simulados.

     - **UAT/PRE-PROD**:

       - Validación con datos reales en un entorno de pruebas controlado.

     - **PROD**:
     - Implementación en vivo y monitoreo de resultados.

   - **`Aspectos clave a validar`**:

     - **Flujos de automatización**:
       - Confirmar que las secuencias de trabajo (journeys y automations) se ejecuten como se espera.
     - **Contenido personalizado**:
       - Verificar que los mensajes dinámicos sean precisos y relevantes.
     - **Integraciones**:
       - Validar la transferencia de datos entre SFMC y sistemas externos.

   ***

4. ### **`Escalabilidad`**

   La **escalabilidad** en SFMC permite a las empresas ajustar su infraestructura y flujos de trabajo conforme crecen sus necesidades de marketing.

   - **`Arquitectura de datos`**:

     - Diseñar una estructura que permita la fácil gestión de grandes volúmenes de datos.

   - **`Automatización expandible`**:

     - Garantizar que las automatizaciones existentes soporten un mayor volumen de interacciones sin comprometer el rendimiento.

   - **`Integraciones flexibles`**:
     - Adaptar la plataforma para incorporar nuevos sistemas o servicios a medida que evolucionan las estrategias de marketing.

   ***

5. ### **`Integración en SFMC`**

   La integración entre SFMC y otros sistemas es crucial para proporcionar una experiencia unificada y eficiente.

   - **`Integración con Salesforce CRM`**:

     - Facilita la sincronización de datos entre Marketing Cloud y las nubes de Sales y Service, asegurando una vista completa del cliente.

   - **`APIs externas`**:
     - Permiten la transferencia de datos en tiempo real para personalización y segmentación avanzada.

   ***

6. ### **`Creación y gestión de campañas`**

   La ejecución de campañas en SFMC requiere seguir pasos claros para garantizar su efectividad:

   - **`Definir la audiencia`**:

     - Identificar grupos objetivos basándose en comportamiento, intereses y datos demográficos.

   - **`Diseñar contenido efectivo`**:

     - Crear mensajes claros y persuasivos que motiven la acción.

   - **`Configurar la ejecución`**:

     - Asegurarse de que la segmentación y la frecuencia de envío estén optimizadas para cada canal.

   - **`Monitorear resultados`**:
     - Analizar métricas clave como clics, aperturas y conversiones para ajustar las estrategias.

   ***

7. ### **`Herramientas clave para UAT en SFMC`**

   - **`Journey Builder:`**  
     Diseñar y validar recorridos del cliente.

   - **`Email Studio:`**  
     Crear y enviar correos de prueba para evaluar contenido dinámico.

   - **`Automation Studio:`**  
     Configurar y probar flujos automatizados.

   - **`Analytics Builder:`**  
     Revisar métricas relacionadas con las pruebas realizadas.

   ***

8. ### **`Mejores prácticas para UATs`**

   - **`Planificación exhaustiva`**:

     - Definir criterios claros para las pruebas, incluyendo objetivos y métricas de éxito.

   - **`Involucrar a usuarios clave`**:

     - Asegurar que las pruebas reflejen escenarios reales, involucrando a representantes de los equipos de negocio.

   - **`Documentación completa`**:

     - Registrar todos los resultados y problemas detectados para su resolución.

   - **`Iteración continua`**:

     - Repetir las pruebas hasta que todas las funcionalidades estén aprobadas.

     ***

9. ### **`Ejemplo práctico de UAT en SFMC`**

   - **`Objetivo de UAT:`**  
     Validar un journey que envía un correo de bienvenida al registrarse en una página web.

   - **`Pasos:`**

     1. Crear un registro de prueba en la base de datos.
     2. Ingresar al journey configurado.
     3. Confirmar que el correo se envía correctamente con los datos personalizados.

   - **`Resultado esperado:`**
     - El journey se activa.
     - El correo incluye el nombre del usuario y datos correctos.
     - Se genera un reporte de entrega con métricas válidas.

   ***

10. ### **`Checklist y cierre`**

    - **`Checklist`**:

      - Revisar la documentación del proyecto.
      - Revisar el plan de pruebas.
      - Obtener aprobación del patrocinador.
      - Comprobar la configuración del sistema.
      - Verificar la capacidad del usuario final para realizar tareas.
      - Revisar la documentación de formación.
      - Probar la integración con otros sistemas.
      - Realizar pruebas de rendimiento.
      - Verificar la calidad de los datos.
      - Verificar la Personalización.
      - Verificar el correcto flujo de datos.
      - Validación de Journeys.

    - **`Cierre`**:

      - Es importante seguir la lista de verificación previa y detallar los pasos seguidos para conseguir superar cada "check" para tener trazabilidad de los procesos antes de la puesta en producción. De éste modo se garantiza que todos los pasos críticos se completen antes de lanzar la implementación en producción y, si hubiera algún fallo se podría remediar tempestivamente.

    ***

11. ### **`Conclusión`**

    Las UATs son esenciales para garantizar la calidad y precisión en la ejecución de campañas en SFMC. Al implementar estas pruebas como parte del ciclo de desarrollo, las empresas pueden minimizar riesgos y asegurar que la experiencia del cliente cumpla con los estándares más altos.

# **Guía detallada para crear un documento de pruebas UAT en Salesforce Marketing Cloud (SFMC)**

1. #### **Preparación del Documento de Pruebas**

   - **Propósito**:  
     Elaborar un documento de pruebas o checklist para validar que las aplicaciones y elementos relacionados con la campaña multicanal estén configurados correctamente y libres de errores.  

   - **Enfoque**:  
     Identificar y listar todos los elementos a probar con el nivel de detalle necesario. Este documento servirá como evidencia para el cliente del trabajo previo realizado y garantizará que los elementos estén listos antes de la activación de la campaña.

   - **Documento**:
     El documento suele presentarse en formato Excel y con la checklist completada. Además, se suele añadir los nombres de ls productos o elementos con los cuales se ha realizado el testing y las evidencias de ello. 

2. #### **Metodología para UAT en Implementaciones de Salesforce**

   - **Contexto ejemplo**:  
     SNOW CLUB tiene planificada una campaña multicanal recurrente (Email, SMS, Push), que se ejecutará diariamente. Antes de la activación, se realizará una sesión de **User Acceptance Testing (UAT)** para verificar la correcta ejecución de cada componente de la campaña.

   - **Pasos Clave**:
     1. **Identificar los elementos clave**:
        - Templates de Email, SMS y Push.
        - Configuración en Journey Builder.
        - Sincronización de datos en Data Extensions.
     2. **Probar funcionalidad**:
        - Confirmar envíos correctos y activaciones de disparadores.
     3. **Registrar observaciones**:
        - Documentar los resultados, especificando qué pruebas están aprobadas y cuáles requieren ajustes.

   - **Entregable**:  
     Un archivo Excel titulado:  
     **`JTALENT_Apellido1_NombreAlumno_UAT_Checklist`**, que documentará las validaciones realizadas.

3. #### **Cómo Crear el Documento de Pruebas**

   - **Software Recomendado**:  
     Utiliza **Microsoft Excel** u otra herramienta de hojas de cálculo como Google Sheets.  

   - **Estructura del Documento**:
     1. **Información Básica**:  
        - Nombre del Proyecto: **Campaña Multicanal SNOW CLUB**.  
        - Descripción: **Validación de elementos clave antes de la activación diaria**.  
        - Fecha de Pruebas: **[Fecha específica]**.  
     2. **Encabezados Principales**:  
        - **Elemento**: Describe lo que se está probando (e.g., template de email, activación en journey).  
        - **Descripción de Prueba**: Explica qué se espera validar en el elemento.  
        - **Estado**: Indica si la prueba fue **Aprobada**, **Requiere Corrección** o **Rechazada**.  
        - **Comentarios**: Observaciones adicionales o detalles sobre el resultado.

     ```s
     | Elemento         | Descripción                          | Estado             | Comentarios                          |
     |------------------|--------------------------------------|--------------------|---------------------------------------|
     | Template Email   | Validar campos dinámicos y diseño    | Aprobado           | Diseño responsivo validado            |
     | Push Notification| Probar envío a lista de prueba       | Requiere Corrección| Error en el campo dinámico del mensaje|
     | Journey Builder  | Revisar configuración de triggers    | Aprobado           | Todo listo para activación            |
     ```

   - **Pasos para Crear el Documento**:  
     1. Abre una hoja de cálculo en **Excel** o **Google Sheets**.  
     2. Define los encabezados principales: **Elemento**, **Descripción de Prueba**, **Estado**, **Comentarios**.  
     3. Lista todos los elementos de la campaña en la columna **Elemento**.  
     4. Para cada elemento, escribe una breve descripción en **Descripción de Prueba**.  
     5. Realiza las pruebas correspondientes e indica el resultado en **Estado**.  
     6. Agrega cualquier observación o detalle relevante en la columna **Comentarios**.

4. #### **Ejecución de la Sesión de UAT**

   - **Validación de Elementos**:  
     Durante la sesión, asegúrate de que:
     - Los emails, SMS y notificaciones push se envían correctamente.
     - Los journeys están configurados adecuadamente, y los disparadores funcionan según lo esperado.
     - Los datos en las Data Extensions están sincronizados y preparados.

   - **Registro de Resultados**:  
     Documenta cualquier problema identificado durante las pruebas y actualiza el documento con los ajustes realizados.

5. #### **Resultados y Beneficios**

   - **Resultados esperados**:  
     Un documento completo que refleje:
     - Elementos aprobados.  
     - Ajustes realizados.  
     - Elementos pendientes de corrección.  

   - **Beneficios**:  
     - **Organización**: Proporciona una estructura clara para validar los elementos de la campaña.  
     - **Evidencia**: Permite mostrar al cliente el trabajo previo realizado.  
     - **Prevención**: Minimiza errores en producción y garantiza la calidad antes de la activación.
