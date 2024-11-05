# **`Creación de Roles y Usuarios en Salesforce Marketing Cloud: Una Explicación Detallada`**

#### Introducción:

En Salesforce Marketing Cloud (SFMC), los usuarios y roles son esenciales para gestionar el acceso a las herramientas y funciones del sistema. Los roles determinan qué áreas y acciones dentro de la plataforma están disponibles para cada usuario. Crear una estructura de roles bien organizada facilita el control de seguridad y la eficiencia operativa dentro de una organización.

---

1. ### **`Importancia de los Roles y Usuarios`**:

   Asignar roles y permisos adecuados en Salesforce Marketing Cloud es crucial para garantizar que los usuarios solo accedan a las herramientas necesarias para sus responsabilidades. Esto no solo refuerza la seguridad de los datos, sino que también evita errores operativos que podrían surgir si un usuario tiene acceso no autorizado a funciones críticas, como la gestión de bases de datos o la ejecución de campañas masivas.

   ***

2. ### **`Creación de Usuarios en Salesforce Marketing Cloud`**:

   Los usuarios en Salesforce Marketing Cloud se configuran a través de una combinación de roles predeterminados o personalizados. Para crear un nuevo usuario, se requiere información básica como el nombre, dirección de correo electrónico, y el tipo de rol asignado.

   **Pasos básicos para la creación de usuarios**:

   - Navega al menú `Administration` y selecciona `Users`.
   - Haz clic en `Create`.
   - Ingresa los datos del nuevo usuario, incluyendo el nombre completo, correo electrónico, y la asignación de roles.
   - Define el acceso del usuario a diferentes funciones, como `Email Studio`, `Journey Builder`, y otras herramientas de SFMC.

   ***

3. ### **`Tipos de Roles en Salesforce`**:

   Marketing Cloud (MC) e Email Studio tienen diferentes roles y permisos asociados, aunque ambos están dentro del ecosistema de Salesforce Marketing Cloud. Los roles dentro de cada entorno controlan el acceso y las capacidades que un usuario puede tener.

   - **`Roles en Marketing Cloud`**:
     En **Marketing Cloud**, los roles determinan el acceso a toda la plataforma y a diferentes componentes, como Email Studio, Automation Studio, Journey Builder, Contact Builder, etc. Los principales roles predefinidos son:

     - **MC Administrator**
       - Acceso total a todas las funciones y herramientas de Marketing Cloud.
       - Permisos para configurar usuarios, gestionar cuentas, crear entornos de trabajo, y administrar la seguridad.
       - Puede configurar integraciones y realizar tareas de mantenimiento.
     - **MC Content Editor/Publisher**
       - **Editor**: Puede crear, editar y guardar contenido, como emails, landing pages y bloques de contenido.
       - **Publisher**: Además de crear y editar, también puede publicar contenido (envío de emails, publicar landing pages).
     - **MC Viewer**
       - Solo tiene permisos de lectura para revisar campañas, informes y configuraciones.
       - No puede editar ni ejecutar ninguna acción.
     - **MC Channel Manager**
       - Administra y tiene permisos sobre un canal específico (por ejemplo, Email Studio, Mobile Studio).
       - Puede crear y gestionar mensajes para su canal asignado.
     - **MC Analyst**
       - Puede acceder y generar informes detallados y análisis de campañas.
       - Tiene permisos para ejecutar y visualizar informes, pero no puede modificar o enviar contenido.
     - **MC Data Manager**
       - Acceso a las herramientas de datos y bases de contactos dentro de Contact Builder y Audience Builder.
       - Puede gestionar audiencias, importar datos y realizar segmentaciones, pero no puede ejecutar campañas.

   - **`Roles en Email Studio`**:
     **Email Studio** es una de las aplicaciones dentro de Marketing Cloud, centrada en la creación, administración y envío de campañas de email. Los roles en Email Studio son más específicos a las tareas de administración y análisis dentro del módulo de email.

     - **Administrator (Administrador de Email Studio)**
       - Acceso completo a Email Studio, con la capacidad de configurar permisos, gestionar usuarios, y administrar las configuraciones de cuenta y envíos.
       - Controla el acceso a plantillas, campañas, y datos relacionados con los correos electrónicos.
     - **Content Creator**
       - Responsable de crear contenido de correos electrónicos, como diseños de plantillas, edición de texto, y bloques de contenido.
       - No tiene permisos para enviar campañas o publicar contenido.
     - **Publisher**
       - Puede crear, editar y **enviar** campañas de correo electrónico.
       - Tiene la capacidad de publicar y ejecutar los envíos de email, además de tener acceso a la gestión del contenido.
     - **Analyst**
       - Solo tiene acceso a los datos y métricas de desempeño de las campañas de email.
       - Puede generar informes, visualizar resultados de envíos y realizar análisis de rendimiento.
       - No tiene acceso a la creación o edición de correos electrónicos.
     - **Viewer**
       - Solo puede visualizar contenido, plantillas y campañas de correos electrónicos.
       - No tiene permisos para editar, enviar o realizar configuraciones en la cuenta.

   - **`Comparación Clave entre Roles de Marketing Cloud y Email Studio`**:

   | **Características**       | **Marketing Cloud**                                                                     | **Email Studio**                                 |
   | ------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------ |
   | **Enfoque**               | Administración a nivel plataforma, canales múltiples (Email, Mobile, Social, etc.)      | Solo enfocado en la gestión de campañas de email |
   | **Rol más alto**          | MC Administrator: acceso completo a toda la plataforma.                                 | Administrator: acceso completo a Email Studio    |
   | **Creación de contenido** | MC Content Editor/Publisher: puede crear y publicar contenido en diversos canales.      | Content Creator: solo crea contenido para email  |
   | **Análisis**              | MC Analyst: genera informes para todos los canales.                                     | Analyst: genera informes solo para Email Studio  |
   | **Gestión de datos**      | MC Data Manager: gestiona datos a nivel plataforma (Contact Builder, Audience Builder). | No hay un rol similar para la gestión de datos.  |
   | **Acceso limitado**       | MC Viewer: solo puede visualizar contenido y configuraciones a nivel plataforma.        | Viewer: solo puede visualizar campañas y emails. |

   En resumen, los roles en **Marketing Cloud** tienden a ser más amplios y enfocados en la administración de la plataforma en su totalidad, mientras que en **Email Studio**, los roles son más especializados y están enfocados en la creación, administración y análisis de campañas de email específicas. Los roles de Marketing Cloud ofrecen una vista más holística de la plataforma, mientras que los roles de Email Studio son más operacionales y enfocados solo en el correo electrónico.

   ***

4. ### **`Creación de Roles Personalizados`**:

   Crear roles personalizados permite ajustar el acceso y los permisos de los usuarios para que se alineen con las funciones específicas de su puesto de trabajo.

   **Pasos para crear un rol personalizado**:

   - Dirígete al menú de **Administration** y selecciona **Roles**.
   - Haz clic en **Create**.
   - Define un nombre y descripción para el nuevo rol.
   - Asigna permisos específicos a cada función dentro de la plataforma, como el acceso a diferentes estudios, la capacidad de crear o eliminar contenido, o gestionar usuarios.

   ***

5. ### **`Permisos Granulares dentro de Salesforce Marketing Cloud`**:

   Los roles personalizados permiten definir permisos a un nivel granular. Esto es útil cuando necesitas otorgar a ciertos usuarios permisos limitados o específicos sobre determinadas funcionalidades. Por ejemplo, puedes otorgar acceso solo a **Journey Builder** para un usuario encargado de configurar las automatizaciones, sin darles acceso a otras partes de la plataforma como **Data Management** o **Content Builder**.

   ***

6. ### **`Estrategias de Administración de Roles`**:

   Gestionar roles de forma eficiente es clave para mantener el orden y la seguridad dentro de la plataforma. Aquí algunos enfoques recomendados:

   - **Segregación de funciones**: Otorga permisos mínimos necesarios para que los usuarios realicen sus tareas. Esto reduce el riesgo de errores operativos y asegura que los usuarios solo accedan a lo que necesitan.
   - **Revisión periódica de roles**: Realiza auditorías frecuentes para asegurar que los permisos y roles asignados sigan siendo apropiados para las responsabilidades actuales de los usuarios.
   - **Uso de roles predeterminados cuando sea posible**: Salesforce Marketing Cloud ofrece varios roles predeterminados que cubren la mayoría de las funciones operativas, lo que facilita la configuración inicial de usuarios sin necesidad de roles personalizados.

   ***

7. ### **`Delegación de Acceso y Subusuarios`**:

   Además de los roles principales, Salesforce Marketing Cloud permite la creación de **subusuarios**, lo que permite una mayor flexibilidad en la delegación de acceso. Estos subusuarios son particularmente útiles en grandes organizaciones donde puede ser necesario dar permisos temporales o reducidos a colaboradores externos, agencias o consultores.

   ***

8. ### **`Auditoría y Monitoreo de Roles y Usuarios`**:

   Una vez que se han configurado los usuarios y roles, es importante mantener un monitoreo constante para asegurarse de que los usuarios no abusen o excedan sus permisos. Salesforce Marketing Cloud ofrece herramientas de auditoría que permiten revisar cambios, acceder a informes de actividad y detectar cualquier uso indebido de los permisos asignados.

   ***

9. ### **`Prácticas Recomendadas para la Creación de Usuarios y Roles`**:

   - **Establecer una jerarquía clara de roles**: Define una estructura de roles que refleje la jerarquía y las responsabilidades de tu equipo. Esto facilitará la asignación de permisos adecuados y reducirá la complejidad a medida que la plataforma crezca.
   - **Crear plantillas de roles**: Utiliza roles personalizados como plantillas que puedas reutilizar cuando ingresen nuevos usuarios con responsabilidades similares.
   - **Capacitación continua**: Asegúrate de que los usuarios comprendan los alcances de los permisos que se les otorgan para evitar posibles problemas o malentendidos.

   ***

10. ### **`Ejemplos de Uso en Organizaciones`**:

    Supongamos que tienes una empresa de marketing con diferentes equipos: el equipo de creación de contenido, el equipo de análisis de datos y el equipo de administración de campañas. Podrías crear roles específicos para cada equipo:

    - El equipo de creación de contenido necesita acceso a **Content Builder** y **Email Studio**, pero no debería tener permisos para gestionar bases de datos.
    - El equipo de análisis de datos podría tener acceso completo a **Data Management**, pero sin capacidad para ejecutar campañas o enviar correos electrónicos.
    - El equipo de administración de campañas tendría permisos completos en **Journey Builder** y acceso parcial a la creación de contenido para ajustar mensajes, pero sin permisos de administración de usuarios o roles.

    ***

11. ### **`Mantenimiento y Escalabilidad`**:

    A medida que la organización crece, es probable que necesites ajustar los roles y usuarios para adaptarlos a nuevas funciones o equipos. Es importante que los roles sean escalables y permitan ajustes rápidos sin necesidad de cambios radicales en la configuración del sistema.

12. ### **`Resumen`**:

    En resumen, la creación de roles y usuarios en Salesforce Marketing Cloud es un proceso fundamental para la correcta gestión de accesos y permisos dentro de la plataforma. La flexibilidad de Salesforce permite asignar roles predefinidos o personalizados para ajustar las necesidades de cualquier equipo, lo que asegura una administración eficiente y segura del sistema.

# Guía detallada para el manejo de Usuarios y Roles

1. #### **Accede a la Configuración de SFMC**:

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
   - Dirígete al **Setup** (Configuración) desde el menú principal.

2. #### **Navega a Users**:

   - En el panel de configuración, busca y selecciona **Users** bajo la sección de **Administration**.

3. #### **Añade Nuevos Usuarios**:

   - Haz clic en el botón **Create** (Crear).
   - Introduce la información de cada compañero:
     - Name.
     - Reply Email Address (Dirección de correo donde se recibirán las respuestas de los destinatarios).
     - Notification Email Address (el mismo que el Reply Email Address).
     - Username (Puede ser igual al email).
     - Password de 8 dígitos con Uppercase, Lowercase, Num & Symbol (es provisional la primera password).

   **Recuerda**:

   - Si el usuario ya existe, simplemente has de buscarlo en el input de **Search** (Buscar).

4. #### **Asigna una BU (Business Unit) al usuario deseado**:

   - En el panel de configuración, busca y selecciona **Users** bajo la sección de **Administration**.
   - Encuentra y selecciona el usuario al que deseas asignar a una BU específica.
   - Haz clic en **Manage Business Units** (Gestionar Unidades de Negocio).
   - Aparecerá una lista de todas las BUs disponibles en tu cuenta.
   - Marca la casilla junto a la BU a la que deseas asignar al usuario.
   - Puedes seleccionar una BU predeterminada para el usuario si es necesario.
   - Revisa la configuración y haz clic en **Save** (Guardar) para aplicar los cambios.

   **Recuerda**:

   - **Default Business Unit**: Unidad de negocio principal y predeterminada al iniciar sesión en SFMC.
   - **Associate Business Unit**: Unidades de negocio adicionales a las que el usuario puede acceder, además de la predeterminada.

5. #### **Asigna Roles a Cada Compañero**:

   - En el panel de configuración, busca y selecciona **Users** bajo la sección de **Administration**.
   - Encuentra y selecciona el usuario al que deseas asignar algún rol.
   - Haz clic en **Manage Roles** (Gestionar Roles).
   - Aparecerá un desplegable para elegir la BU a la cual deseas asignar el o los roles.
   - Una vez elegida la BU, podrás asignar Roles y Permisos específicos (estos aparecen automáticamente cuando elegimos un rol y se pueden modificar a voluntad) para cada rol.
   - Revisa la configuración y haz clic en **Save** (Guardar) para aplicar los cambios.

   Ejemplos:

   - **Compañero 1: Ana López**

     - **Rol**: **Content Creator**
     - **Tareas**: Ana podrá crear y gestionar contenido en Email Studio, incluyendo la creación de plantillas de correo electrónico y la gestión de imágenes y otros activos.

   - **Compañero 2: Juan Pérez**

     - **Rol**: **Data Analyst**
     - **Tareas**: Juan tendrá acceso a Contact Builder y Analytics Builder, permitiéndole gestionar datos de suscriptores, crear segmentos y analizar el rendimiento de las campañas.

   - **Compañero 3: María García**
     - **Rol**: **Campaign Manager**
     - **Tareas**: María podrá gestionar campañas en Journey Builder y Automation Studio, incluyendo la creación y ejecución de journeys y automatizaciones de marketing.

6. #### **Configura los Permisos de Acceso**:

   - Para cada usuario, asegúrate de asignar los permisos adecuados según el rol. Esto incluye acceso a las herramientas y funciones necesarias para realizar sus tareas.
   - En Salesforce Marketing Cloud (SFMC), las **permissions** (permisos) son fundamentales para controlar el acceso de los usuarios a diferentes funciones y datos dentro de la plataforma. Aquí tienes una explicación detallada de su propósito y uso:

   Ventajas:

   - **Control Granular**: Permite definir qué acciones puede realizar cada usuario.
   - **Roles y Permisos**: Roles predefinidos con permisos específicos para diferentes tareas.
   - **Seguridad**: Limita el acceso a información sensible.
   - **Flexibilidad**: Permite ajustar permisos según las necesidades específicas mediante Permission Sets.

   Ejemplos:

   - **Content Creator**:

     - **Permisos**: Crear y editar emails, gestionar plantillas y activos en Email Studio.
     - **Acciones Permitidas**: Crear campañas de email, gestionar contenido visual y textual.

   - **Data Analyst**:

     - **Permisos**: Acceso a Contact Builder, Analytics Builder, y herramientas de segmentación.
     - **Acciones Permitidas**: Analizar datos de suscriptores, crear segmentos de audiencia, generar informes de rendimiento.

   - **Campaign Manager**:
     - **Permisos**: Gestionar Journey Builder y Automation Studio.
     - **Acciones Permitidas**: Crear y gestionar journeys, configurar automatizaciones de marketing.

7. #### **Guarda y Verifica**:

   - Revisa toda la información ingresada y haz clic en **Save** (Guardar).
   - Verifica que los nuevos usuarios puedan acceder a la BU y realizar las tareas asignadas.

8. #### Resumen de Especificaciones

   - **Compañero 1**: Ana López, Rol: Content Creator, Tareas: Gestión de contenido en Email Studio.
   - **Compañero 2**: Juan Pérez, Rol: Data Analyst, Tareas: Gestión de datos y análisis en Contact Builder y Analytics Builder.
   - **Compañero 3**: María García, Rol: Campaign Manager, Tareas: Gestión de campañas en Journey Builder y Automation Studio.
