# `Business Units en Marketing Automation Salesforce Marketing Cloud`

#### Introducción

Salesforce Marketing Cloud (SFMC) es una plataforma de **marketing automation** diseñada para gestionar y optimizar las interacciones con los clientes a través de diversos canales como correo electrónico, SMS, redes sociales y web. Es ampliamente utilizada por empresas para crear experiencias personalizadas y relevantes para sus clientes a lo largo de todo el ciclo de vida del cliente. Una de las características más importantes de SFMC es la capacidad de crear y gestionar **Business Units (BUs)**, que permiten segmentar y organizar las actividades de marketing dentro de la plataforma, proporcionando una gestión más eficiente y orientada a los objetivos de negocio específicos.

---

1. ### **`Características de las Business Units`**:

   - **`Segmentación de Clientes`**
     Las BUs permiten a las empresas segmentar sus audiencias y gestionar campañas específicas para diferentes grupos de clientes.

     - **Funcionalidades**:
       - Crear listas de suscriptores y Data Extensions específicas para cada BU.
       - Configurar preferencias de suscripción y desuscripción a nivel de BU.
       - Personalizar el contenido de los correos electrónicos y las campañas según la BU.
     - **Aplicaciones**:
       - Envío de comunicaciones específicas a diferentes regiones o segmentos de mercado.
       - Manejo de campañas diferenciadas para distintas líneas de negocio.

   - **`Control de Acceso y Seguridad`**
     Cada BU tiene sus propios niveles de acceso y permisos, lo que permite gestionar quién puede ver y editar la información dentro de cada unidad.

     - **Funcionalidades**:
       - Definir roles y permisos para usuarios específicos dentro de cada BU.
       - Configurar diferentes flujos de trabajo y procesos según las necesidades de cada unidad.
     - **Aplicaciones**:
       - Proteger información sensible y restringir el acceso a campañas o datos de clientes específicos.
       - Facilitar la colaboración entre equipos de marketing sin comprometer la seguridad de los datos.

   - **`Informes y Análisis`**
     Las BUs permiten generar informes y análisis específicos para medir el rendimiento de las campañas en cada unidad.

     - **Funcionalidades**:
       - Monitorear el rendimiento de campañas y correos electrónicos a nivel de BU.
       - Realizar análisis de segmentación y comportamiento de los clientes.
     - **Aplicaciones**:
       - Evaluar la efectividad de las campañas en diferentes mercados o segmentos.
       - Tomar decisiones informadas basadas en datos sobre futuras estrategias de marketing.

   - **`Configuración de Branding y Estilo`**
     Las BUs pueden tener configuraciones específicas de branding, lo que permite mantener la consistencia en la comunicación visual.

     - **Funcionalidades**:
       - Personalizar el nombre del remitente y la dirección de respuesta para cada BU.
       - Configurar direcciones físicas y mensajes de desuscripción específicos.
     - **Aplicaciones**:
       - Garantizar que todas las comunicaciones sean coherentes con la identidad de marca de la unidad específica.
       - Mejorar la experiencia del cliente al recibir comunicaciones relevantes y coherentes.

   - **`Integración con otras herramientas de SFMC`**
     Las BUs se integran fácilmente con otras herramientas y funcionalidades dentro de SFMC, lo que optimiza la ejecución de campañas.

     - **Funcionalidades**:
       - Sincronización con herramientas como Email Studio, Mobile Studio, y Analytics Builder.
       - Posibilidad de automatizar flujos de trabajo entre diferentes BUs.
     - **Aplicaciones**:
       - Ejecutar campañas multicanal que abarcan diferentes BUs y canales de comunicación.
       - Optimizar la eficiencia de las campañas mediante la automatización de procesos.

   ***

2. ### **`Ventajas de utilizar Business Units en SFMC`**:

   - **`Organización Eficiente`**: Permite gestionar múltiples marcas, productos o regiones desde una sola cuenta de SFMC, mejorando la estructura organizativa y la eficiencia operativa.
   - **`Flexibilidad en la Gestión`**: Facilita la creación de campañas personalizadas y la gestión de listas de suscriptores específicas para cada BU.
   - **`Análisis Detallado`**: Proporciona la capacidad de analizar el rendimiento de las campañas de forma granular, ayudando a tomar decisiones informadas.
   - **`Control de Seguridad y Acceso`**: Permite mantener el control sobre la información sensible y asegurar que solo los usuarios autorizados tengan acceso a ciertas funciones y datos.

   ***

3. ### **`Casos de uso comunes`**:

   - **`Marketing Multicanal`**: Permite gestionar campañas a través de diferentes canales y regiones sin complicaciones, asegurando que cada segmento reciba el mensaje adecuado.
   - **`Gestión de Marca`**: Facilita la gestión de diferentes marcas dentro de una misma empresa, garantizando que cada una mantenga su identidad y tono de comunicación.
   - **`Estrategias Localizadas`**: Las empresas que operan en múltiples regiones pueden crear BUs para adaptarse a las preferencias y comportamientos de los clientes locales, optimizando así la relevancia de sus campañas.

4. ### **`Resumen`**:

   La implementación de Business Units en Salesforce Marketing Cloud es crucial para las empresas que buscan maximizar la eficacia de sus estrategias de marketing, permitiendo un enfoque más personalizado y organizado en la gestión de las interacciones con los clientes.

# Guía detallada para crear una Business Unit (BU) en Salesforce Marketing Cloud (SFMC):

En definitiva una Business Unit es una instancia de Marketing Cloud donde crear la empresa, estrategias de ella y demás. Eventualmente, también se pueden crear sub empresas al interno. Esto serviría por ejemplo para empresas pertenecientes a la misma marca en distintos países.

1. #### **Accede a la Configuración de SFMC**:

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
   - Dirígete al **Setup** (Configuración) desde el menú principal, en el desplegable debajo del nombre de usuario.

2. #### **Navega a Business Units**:

   - En el panel de configuración, busca y selecciona **Business Units** bajo la sección de **Administration**.

3. #### **Crea una Nueva Business Unit**:

   - Haz clic en el botón **Create** (Crear).
   - **Nombre de la BU**: Introduce un nombre para tu BU. Por ejemplo, "MarketingGlobal".
   - **Parent Business Unit**: Selecciona **BXpert** como la BU padre.

4. #### **Configura la Información del Email**:

   - **Email Information**: Introduce la información necesaria para los correos electrónicos.
     - nombre del remitente.
     - Dirección de respuesta.
   - **Physical Address**: Proporciona la dirección física de la empresa.

     ```
     MarketingGlobal Inc.
     1234 Calle Ficticia
     Ciudad, Estado, Código Postal
     País
     ```

5. #### **Configura las Preferencias de Desuscripción**:

   - Dentro de la configuración de la BU, busca la sección de **Subscription Management**.

   - Asegúrate de que la opción **Unsubscribe from this Business Unit only** (Desuscribirse solo de esta unidad de negocio) esté seleccionada. Esto garantiza que los suscriptores que se desuscriban lo hagan únicamente de esta BU y no de otras BUs en tu cuenta de SFMC.

6. #### **Guarda la Nueva BU**:

   - Revisa toda la información ingresada y haz clic en **Save** (Guardar).

7. #### **Verifica la Creación**:

   - Cierra sesión y vuelve a iniciar sesión para asegurarte de que la nueva BU aparezca en el selector de Business Units.

8. #### **Modificar el Parent de una BU**

   Hay veces que en un mismo proyecto posee varias BUs, las cuales al cabo de un tiempo pueden quedar en desuso debido a la evolución del mismo. Entonces necesitamos modificar las de **Parent** (Padre) para poderlas utilizar en otras cosas. [Enlace explicativo](https://help.salesforce.com/s/articleView?id=000381684&type=1)

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
   - Dirígete al **Setup** (Configuración) desde el menú principal, en el desplegable debajo del nombre de usuario.
   - En el panel de configuración, busca y selecciona **Business Units** bajo la sección de **Administration**.
   - Elige la BU que desees modificar. Aparecerá un recuadro debajo de **Business Unit Parent** (Padre de la Unidad de Negocio).
   - Selecciona el nuevo padre y listo. Ten en cuenta que estas operaciones requieren de permisos más específicos para poder realizarlas
   - Revisa toda la información ingresada y haz clic en **Save** (Guardar).

### Resumen de Especificaciones

- **Nombre de la BU**: MarketingGlobal
- **BU Padre**: BXpert
- **Email Information**: Configurado con el nombre del remitente y la dirección de respuesta.
- **Physical Address**: Dirección física proporcionada.
- **Preferencias de Desuscripción**: Configuradas para desuscribirse solo de esta BU.
