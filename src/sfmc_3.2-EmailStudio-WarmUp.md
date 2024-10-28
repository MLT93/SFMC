# **`Email Archiving y Warm Up en Salesforce Marketing Cloud`**

#### Introducción:

Este documento profundiza en el uso avanzado de **Salesforce Marketing Cloud (SFMC)**, específicamente en _Email Studio III_, para llevar a cabo estrategias de marketing por correo electrónico de alto impacto mediante el archivado de correos electrónicos, el calentamiento de IP (_IP Warm Up_), y la monitorización exhaustiva de la reputación de IP. La correcta implementación de estas prácticas garantiza una alta entregabilidad, minimiza riesgos de bloqueos y optimiza la experiencia de usuario.

---

1. ### **`Email Archiving: Archivado de Correos en Email Studio`**

   - **`Propósito`**: Email Archiving facilita el almacenamiento seguro de cada mensaje de correo electrónico enviado a través de la cuenta de _Marketing Cloud_, proporcionando una copia accesible en un servidor seguro (_SFTP_) del cliente. Este archivo puede usarse para auditorías, análisis de envíos pasados y para mejorar la trazabilidad.

   - **`Detalles técnicos`**:

     - **Formato de archivo**: La copia de cada correo se guarda en formato **EML**, y en algunos casos en **HTML**. Los archivos se agrupan en un **ZIP diario** depositado en el servidor **SFTP**, en una carpeta denominada **Export/EmailArchive**.
     - **Configuración**: La opción de archivado de correos (Archive Email) es una funcionalidad avanzada que requiere configuración a través del soporte de Salesforce. Una vez activada la opción de archivado, podrás configurar en cada **Send Classifications** si deseas archivar o no ciertos tipos de correos, como transaccionales o comerciales.
     - **Costo y disponibilidad**: Esta función tiene un costo adicional, por lo que el cliente debe activar el servicio. En cada archivo ZIP se incluye un manifiesto en Excel con un índice detallado de cada correo archivado y campos de registro de envío relevantes.

   - **`Consideraciones específicas`**:
     - Los mensajes archivados pueden contener **PII** (información de identificación personal).
     - La fecha de generación de los archivos se establece en el horario de Indianápolis (UTC-5), sin posibilidad de modificarlo.
     - Es posible que algunos archivos no generen contenido si no hubo envíos ese día, y los archivos ZIP se omiten en tales casos.

   ***

2. ### **`IP Warm Up: Calentamiento de Direcciones IP para Optimización de Entregabilidad`**

   - **`Objetivo`**: El calentamiento de IP es un proceso gradual diseñado para construir una reputación de envío sólida en una IP nueva. Las IP nuevas suelen levantar sospechas en los proveedores de servicios de Internet (ISP), dado que no tienen historial, lo que puede llevar al filtrado de correos como spam.

   - **`Pasos técnicos detallados`**:

     - **Asignación por dominio ISP**: Segmentar la base de datos según el dominio del correo (por ejemplo, Gmail, Yahoo, Microsoft, etc.) permite personalizar el volumen de envío según las restricciones específicas de cada ISP.
     - **Incremento diario del volumen de envíos**: Comenzar con 500 correos electrónicos el primer día y aumentar progresivamente, siguiendo una curva de calentamiento. Por ejemplo, alcanzar volúmenes de hasta 2 millones de correos diarios en un mes siguiendo este esquema:
       - **Día 1 a 3**: 500 correos al día.
       - **Día 4 a 5**: 1,000 correos.
       - **Día 6 a 8**: 1,500 a 4,000 correos.
       - **Día 10 a 12**: hasta 12,000 correos y escalar diariamente hasta 2 millones. A los 2M hay que usar otra IP.
     - **Sincronización y control de volúmenes**: Un aumento excesivo o inesperado puede activar filtros de los ISP y aumentar la probabilidad de que los correos sean filtrados como spam.

   - **`Consideraciones operativas`**:
     - Garantizar la sincronización de listas de suscripción para evitar quejas.
     - Revisar métricas de rendimiento por ISP para identificar posibles bloqueos o problemas de entregabilidad específicos de cada dominio.
     - **Tasas de apertura y rebote**: Monitorizar estas métricas para ajustar los volúmenes de envío o abrir un caso de soporte con Salesforce en caso de problemas.

   ***

3. ### **`Ejemplos Prácticos de Planificación del Calentamiento de IP`**

   - **`Estrategia de segmentación y programación de envíos`**:

     - Identificar clientes más comprometidos dentro de la base de datos para comenzar el proceso de calentamiento con audiencias de alta interacción.
     - Diseñar una secuencia de envíos ajustada con creatividades específicas para mantener la relevancia en cada envío y evitar el desgaste de la audiencia.
     - Cada plan de calentamiento puede variar en estructura, frecuencia de envíos y creatividades utilizadas, dependiendo de la estrategia de cada cliente y de las necesidades de su base de datos.

   - **`Tareas de monitoreo`**:
     - Durante el proceso de calentamiento, revisar cada envío, monitorear el rendimiento de la IP y ajustar los subsegmentos según sea necesario.
     - Finalizado el proceso de calentamiento, los envíos pueden realizarse a la base de datos completa sin la necesidad de segmentaciones intermedias.

   ***

4. ### **`Herramientas para la Monitorización de la Reputación de IP`**

   - **`Análisis de rendimiento por dominio`**:

     - Usar informes de rendimiento por dominio permite rastrear el impacto del envío en cada grupo específico de ISP y tomar acciones específicas en caso de bloqueos o bajas tasas de apertura.

   - **`Herramientas de diagnóstico`**:

     - **Smart Network Data Services (SNDS)**: Para abordar problemas específicos con dominios de Microsoft o Gmail, que suelen ser más estrictos en las políticas de entregabilidad.
     - **Bounce Detective**: Función de alerta que notifica sobre tasas de rebote elevadas en tiempo real, lo que permite al equipo de marketing ajustar los envíos.
     - **Revisión de listas negras**: Consultar herramientas gratuitas como **mxtoolbox.com** o **talosintelligence.com** para verificar si la IP está en listas negras y, de ser necesario, seguir los pasos recomendados para salir de ellas.

   - **`Gestión de autenticación y protocolos de seguridad`**:
     - En casos de bloqueo, Salesforce puede solicitar la validación de autenticación mediante DKIM y el cumplimiento de DMARC para garantizar la legitimidad de los envíos.

   ***

5. ### **`Tarea Práctica: Implementación de un Plan de Calentamiento de IP`**

   - **`Contexto del caso práctico`**:

     - Para una empresa ficticia con una base de datos de aproximadamente 393,000 usuarios, diseñar un plan de calentamiento de IP teniendo en cuenta que cerca de 116,000 usuarios no son contactables.
     - Establecer un cronograma semanal de envíos con volúmenes diarios máximos recomendados, dividiendo la DE en **Split** (subsegmentos) o **Random Data Extension** y después añadir todo en una carpeta compartida de Salesforce (ej., Shared Data Extensions).

   - **`Entregable del caso`**: Crear un archivo en Excel que detalle el diseño del calentamiento de IP, junto con los subsegmentos, creatividades y un calendario de envíos segmentados, alineado con las prácticas recomendadas de Salesforce Marketing Cloud.

# Guía para montar un Warm Up en Salesforce Marketing Cloud (SFMC)

Salesforce Marketing Cloud ha actualizado sus recomendaciones para realizar un **IP Warm Up**, optimizando el proceso de calentamiento de IP mediante volúmenes diarios controlados. A continuación, se describe el procedimiento siguiendo las especificaciones actuales y destacando las diferencias en comparación con el método anterior, que requería segmentación por ISP.

1. #### **Planifica la Estrategia de Warm Up**

   - **Objetivo**: Crear una reputación de envío positiva para una IP nueva mediante un aumento gradual del volumen de correos electrónicos enviados.
   - **Consideraciones**: Asegúrate de contar con creatividades y calendarios de envío antes de iniciar el calentamiento, para evitar cambios que puedan afectar la reputación de la IP.

2. #### **Configura el Proceso de Warm Up en SFMC**

   - **Separación de Volúmenes por Días**: En la actualidad, SFMC recomienda aumentar el volumen de envío progresivamente día a día, sin necesidad de segmentar por ISP.
   - **Cronograma de Envío Diario**:
     - **Días 1-3**: 500 correos electrónicos diarios.
     - **Días 4-5**: 1,000 correos electrónicos diarios.
     - **Días 6-8**: 1,500-4,000 correos electrónicos diarios, incrementando de forma gradual.
     - Continúa siguiendo la curva de volumen recomendada hasta alcanzar los 2 millones de correos electrónicos diarios en aproximadamente 31 días. Si llegas a los 2 millones, será necesaria otra IP.

3. #### **Diferencias con el Método Anterior**

   - **Segmentación por ISP**:
     - **Antes**: Era necesario segmentar la base de datos por ISP (ej., Gmail, Yahoo, Microsoft) y aplicar volúmenes de envío por cada uno. Esto requería una administración más compleja y la creación de subsegmentos adicionales para cada proveedor.
     - **Ahora**: Salesforce simplifica el proceso al permitir un volumen total diario sin necesidad de segmentar por ISP, permitiendo un calentamiento homogéneo de la IP en todos los proveedores de correo.

4. #### **Monitorización Continua de la Reputación de la IP**

   - **Métricas a Vigilar**: Realiza un seguimiento constante de la tasa de apertura, tasa de rebote y posibles quejas de spam. Estas métricas indican la salud de la IP y su receptividad por parte de los ISPs.
   - **Herramientas de Monitoreo**:
     - Activa **Bounce Detective** para recibir alertas sobre rebotes elevados y usa herramientas de reputación como **Smart Network Data Services (SNDS)** en caso de problemas específicos con dominios de Microsoft o Gmail.

5. #### **Ajuste de Estrategia Según Resultados**

   - **Sincronización de Cancelaciones**: Asegúrate de sincronizar las listas de suscriptores que se desuscriben para evitar quejas.
   - **Solicitud de Soporte**: Si encuentras bloqueos recurrentes en un ISP, abre un caso con Salesforce para obtener soporte adicional y resolver problemas de autenticación.

6. #### **Resumen de la Estrategia de Warm Up en SFMC**

   - **Cronograma de Volúmenes**: Incremento gradual diario hasta alcanzar el volumen total.
   - **Sin Segmentación por ISP**: El proceso actual permite un volumen único diario para todas las IPs sin segmentación por proveedor.
   - **Monitorización Activa**: Mantén bajo control las métricas de rendimiento y solicita soporte en caso de incidencias.
