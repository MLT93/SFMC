# **`Creación y Conexión de una Instancia CRM con SFMC`**

#### Introducción:

La creación de una instancia de CRM (Customer Relationship Management) y su conexión con Salesforce Marketing Cloud (SFMC) es un proceso crucial para integrar las funciones de ventas, servicio al cliente y marketing en una plataforma unificada. Este proceso permite una gestión más eficiente de los datos del cliente y una mejor coordinación entre los equipos de ventas y marketing.

---

1. ### **`Necesidad de Crear una Instancia CRM`**:

   - **`Gestión centralizada de datos`**:

     - Proporciona un repositorio único para toda la información del cliente.
     - Facilita el seguimiento de interacciones, ventas y servicio al cliente.

   - **`Mejora en la toma de decisiones`**:

     - Ofrece una visión completa del ciclo de vida del cliente.
     - Permite análisis más profundos y precisos de las relaciones con los clientes.

   - **`Automatización de procesos`**:
     - Simplifica tareas repetitivas en ventas y servicio al cliente.
     - Mejora la eficiencia operativa.

   ***

2. ### **`Conexión con SFMC`**:

   Es muy común y, de hecho, es una práctica recomendada conectar instancias de CRM (Customer Relationship Management) con Salesforce Marketing Cloud (SFMC) por varias razones importantes:

   - **`Integración de datos`**:

     - La conexión permite que los datos del cliente almacenados en el CRM (como información de contacto, historial de compras, preferencias) estén disponibles en SFMC para su uso en campañas de marketing.
     - Esto asegura que las campañas de marketing se basen en la información más actualizada y precisa del cliente.

   - **`Personalización mejorada`**:

     - Con acceso a datos detallados del CRM, SFMC puede crear campañas de marketing altamente personalizadas y relevantes.
     - Por ejemplo, se pueden segmentar clientes basándose en su historial de compras o interacciones previas con la empresa.

   - **`Seguimiento del ciclo de vida del cliente`**:

     - La integración permite un seguimiento completo de los Journeys del cliente, desde el primer contacto hasta la conversión y más allá.
     - Esto facilita la creación de estrategias de marketing más efectivas en cada etapa del ciclo de vida del cliente.

   - **`Automatización de procesos`**:

     - La conexión CRM-SFMC permite automatizar muchos procesos de marketing basados en eventos o cambios en el CRM.
     - Por ejemplo, un cambio en el estado de un cliente en el CRM puede desencadenar automáticamente una campaña específica en SFMC.

   - **`Análisis y reportes unificados`**:

     - Al tener los sistemas conectados, es posible realizar análisis más completos que abarquen tanto las actividades de ventas como las de marketing.
     - Esto proporciona una visión más holística del impacto de las estrategias de marketing en las ventas y viceversa.

   - **`Coherencia en la comunicación`**:

     - Asegura que todos los departamentos (ventas, servicio al cliente, marketing) tengan acceso a la misma información actualizada del cliente.
     - Esto lleva a una comunicación más coherente y efectiva con los clientes a través de todos los puntos de contacto.

   - **`Optimización de recursos`**:

     - Al tener una visión unificada del cliente, las empresas pueden optimizar sus esfuerzos de marketing y ventas, evitando duplicaciones y mejorando la eficiencia.

   ***

3. ### **`Salesforce Classic VS Lightning`**:

   Aquí hay que explicar también la funcionalidad de Salesforce Marketing Cloud (SFMC). La plataforma ha evolucionado a lo largo del tiempo, ofreciendo dos interfaces principales: **Classic** y **Lightning**. Esta dualidad responde a la necesidad de modernizar la aplicación mientras se mantiene la compatibilidad con sistemas y procesos existentes.

   - **`Interfaz de usuario`**:

     - **Classic**: Interfaz más tradicional y basada en texto.
     - **Lightning**: Diseño moderno, intuitivo y con más funcionalidades visuales.

   - **`Rendimiento`**:

     - **Lightning**: Generalmente más rápido y eficiente, especialmente en dispositivos móviles.

   - **`Funcionalidades`**:

     - **Lightning**: Ofrece características adicionales como el Generador de Aplicaciones Lightning y componentes personalizados.

   - **`Experiencia móvil`**:
     - **Lightning**: Diseñado para ser completamente responsivo en dispositivos móviles.

   `** Debido a este cambio, en Trailhead es posible encontrar mini-cursos realizados con la interfaz "Classic"`.

   ***

4. ### **`Los Objetos Sincronizados`**:

   Es muy común y crucial que los clientes compartan su información a través de objetos sincronizados entre el CRM y Salesforce Marketing Cloud (SFMC). Esta práctica es fundamental para una estrategia de marketing efectiva y personalizada. Aquí te explico por qué es tan importante:

   - **`Propósito`**:

     - Permiten la transferencia bidireccional de datos entre el CRM y SFMC.
     - Aseguran que ambos sistemas tengan información actualizada y coherente.

   - **`Objetos comúnmente sincronizados`**:

     - **Account**: Información de la empresa o cliente.
     - **Contact**: Detalles de contactos individuales.
     - **Lead**: Información de prospectos potenciales.
     - **Opportunity**: Datos sobre oportunidades de venta.

   - **`Proceso de sincronización`**:

     - Generalmente, el cliente configura qué campos específicos de cada objeto desea sincronizar con SFMC.
     - La sincronización puede ser bidireccional, permitiendo que los datos actualizados en SFMC también se reflejen en el CRM.

   - **`Consideraciones de privacidad y seguridad`**:

     - Es crucial que los clientes consideren cuidadosamente qué datos sincronizar, especialmente en lo que respecta a información personal sensible.
     - Deben asegurarse de cumplir con regulaciones de protección de datos como GDPR o CCPA.

   - **`Impacto en las estrategias de marketing`**:

     - Con datos sincronizados, las empresas pueden crear Journeys de cliente más sofisticados y relevantes.
     - Permite un enfoque de marketing más holístico, considerando todas las interacciones del cliente con la empresa.

# Guía Detallada para crear una ORG (instancia de CRM) de pruebas y conectarla a SFMC

1. #### **Crea una ORG de pruebas**:

   - Visita el [sitio de registro de Salesforce](https://developer.salesforce.com/signup).
   - Completa el formulario para crear una nueva cuenta. Esto te proporcionará una ORG de pruebas (una instancia del CRM).
   - Entra en tu instancia (realiza el login) y ve a **Setup** (configuración) que se encuentra al lado del icono del usuario en la esquina dcha de la página web (es el segundo icono de dcha a izq). Recuerda que al hacer login es la pantalla por defecto.
   - Ve a **ADMINISTRATION > Users > Users** (esto se encuentra en el nav que está a la izq).
   - Dale a **New User** y configura el usuario o sigue este video [Video YouTube](https://www.youtube.com/watch?v=borUUDvYPbE&t=4s).
     - **User License**: Salesforce.
     - **Profile**: System Administrator.
     - Controla que los datos sean correctos y que los checkboxes que aparecen en la información del usuario estén bien configurados.
   - Instala este paquete (colección de componentes y aplicaciones que hacen que la conexión entre las cuentas de Salesforce CRM): [Paquete Gestionado](https://sfdc.co/MCC).
   - Ahora vamos de nuevo a **Setup** y al lado de **Home**, encontramos **Object Manager**.
   - Dentro de **Object Manager** encontramos todos los objetos (las tablas, entidades, obj de CRM) relacionados con Salesforce. Existen varios tipos.
     - **Standard Object**: Son los objetos que vienen predefinidos con Salesforce y son utilizados para gestionar datos comunes en las organizaciones. Algunos ejemplos incluyen:
       1. `Account (Cuenta)`: Almacena información sobre empresas o individuos con los que haces negocios.
       2. `Contact (Contacto)`: Contiene datos sobre personas asociadas a cuentas.
       3. `Opportunity (Oportunidad)`: Registra posibles ventas o negocios en curso.
     - **Custom Object**: Son objetos que los usuarios crean para satisfacer necesidades específicas de su organización. Estos objetos permiten a las empresas almacenar datos que no están cubiertos por los objetos estándar. Por ejemplo, una empresa podría crear un objeto personalizado llamado Project (Proyecto) para gestionar información sobre sus proyectos internos.
   - Entramos en **Account > Page Layouts > Account (Marketing) Layout**.

2. #### **Conéctate a tu Business Unit de SFMC**:

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud (abre una ventana paralela).
   - Dirígete al **Setup** (configuración). Se encuentra en el desplegable de tu icono de usuario.
   - Busca el apartado **Platform Tools** y selecciona **Apps > Salesforce Integrations**.
   - Dale a **Connect Account** (conectar cuenta) e inicia sesión con tus credenciales de tu ORG.
   - Sigue las instrucciones en el [Trailhead](https://trailhead.salesforce.com/es/content/learn/modules/marketing-cloud-connect) para conectar tu ORG de Salesforce a SFMC. Ten en cuenta que el punto 7 de la explicación "Arrastre Marketing Cloud Engagement for AppExchange User (Usuario de Marketing Cloud Engagement para AppExchange) hasta la misma sección." está hecho con el formato de Salesforce antiguo (Classic) y por defecto nosotros trabajamos con el nuevo (Lightning).
     - Para modificar el formato de Salesforce hay que hacer clic en icono del usuario y buscar **Switch to Salesforce Classic**.
     - Para realizar los pasos de Trailhead hacer clic en **Setup** en la pantalla principal del Classic y seguimos la ruta desde el nav izq **Build > Customize > Users > Page Layouts** le damos a **Edit** en la sección **User Page Layouts**.
     - Arrastramos **Marketing Cloud Engagement for AppExchange Admin (Administrador de Marketing Cloud Engagement para AppExchange)** en **Additional Information (Header visible on edit only)**.
     - Para volver a la versión nueva hacer clic en **Switch to Lightning Experience** desde el **Setup**.

3. #### **Sincroniza el objeto Account**:

   - Una vez establecida la conexión, dirígete a la sección de **Audience Builder > Contact Builder > Data Sources** en SFMC. Aquí encontrarás todos los objetos relacionados con Salesforce.
   - Selecciona la opción **Synchronized**. Elige la opción **Synchronized Data Source**.
   - Haz clic en **Set Up Object** (configura objeto). Asegúrate de tener todas las entidades relacionadas en sincronía previamente.
     - Cuando intentas seleccionar una entidad de Salesforce CRM para sincronizar (por ejemplo, Account o un objeto personalizado), el sistema puede mostrarte el mensaje diciéndote que primero debes sincronizar otras entidades. Esto sucede porque la entidad que intentas sincronizar depende de otros objetos relacionados que deben estar sincronizados primero.
       - Ejemplo: Si intentas sincronizar Account, podrías necesitar primero sincronizar User, Contact, DandBCompany y OperatingHours ya que Account está relacionado con ellas en Salesforce CRM.
   - Ahora busca el objeto **Account** y selecciona los campos que deseas sincronizar. Asegúrate de incluir:
     - Todos los campos por defecto.
     - El campo **Name**.
   - Inicia el proceso de sincronización y verifica que los datos se transfieran correctamente entre la ORG de Salesforce y SFMC.

4. ### Resumen de Especificaciones

   - **ORG de Pruebas**: Creada en Salesforce.
   - **Conexión**: Establecida entre la ORG de Salesforce y SFMC.
   - **Objeto Sincronizado**: Account, incluyendo todos los campos por defecto y el campo **Name**.

   Siguiendo estos pasos, podrás crear y conectar tu ORG de pruebas a SFMC y sincronizar el objeto Account sin problemas. Si necesitas más detalles sobre cada paso, consulta los enlaces proporcionados o el módulo de Trailhead sobre Marketing Cloud Connect.
