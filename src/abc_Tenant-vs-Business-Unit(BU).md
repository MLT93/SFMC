# Tenant VS Business Unit (BU) wft???

En **Salesforce Marketing Cloud (SFMC)**, los términos **Tenant** y **Business Unit** se refieren a diferentes niveles de organización y gestión de datos y recursos dentro de la plataforma, pero tienen un propósito distinto:

### 1. **Tenant**:
Un **Tenant** en SFMC es esencialmente el entorno principal que agrupa todos los recursos de una cuenta de Marketing Cloud. Es la capa superior de la infraestructura organizativa de Salesforce. Cada tenant puede incluir una o más **Business Units**.

#### Características del Tenant:
- Es la **cuenta raíz** o el espacio compartido donde están alojadas las **Business Units**.
- Todos los datos, activos y configuraciones básicas de la cuenta se encuentran dentro del Tenant.
- Un **Tenant** puede ser **Enterprise 1.0** o **Enterprise 2.0**, dependiendo de cómo esté configurada la cuenta. Estas versiones afectan la forma en que se manejan los datos entre las Business Units.
- Un Tenant puede estar configurado para un solo dominio de envío (por ejemplo, si todas las unidades comparten el mismo dominio de correo electrónico).
- **Tipos de Tenant**:
  - **Enterprise 2.0 Tenant**: Este tipo de Tenant tiene la capacidad de tener múltiples Business Units y compartir datos, pero también puede restringir el acceso a ciertos datos entre unidades.
  - **Enterprise 1.0 Tenant**: Aquí, las unidades de negocio suelen compartir más recursos y datos sin tantas restricciones entre unidades.

### 2. **Business Unit**:
Una **Business Unit** es una subcuenta dentro del Tenant que permite a una empresa dividir y gestionar diferentes equipos, marcas, productos o regiones dentro de SFMC. Cada Business Unit tiene su propia configuración y puede operar de manera independiente dentro del Tenant.

#### Características de la Business Unit:
- Permite la segmentación de diferentes **equipos o departamentos** (por ejemplo, marketing regional, marketing por producto o marca).
- Cada Business Unit puede tener sus propios **activos**, como listas de contactos, campañas, correos electrónicos, Data Extensions, y Journeys.
- **Datos y permisos independientes**: Puedes establecer diferentes configuraciones de permisos para usuarios en cada Business Unit. Esto permite que ciertos equipos tengan acceso solo a los datos o funcionalidades relevantes para ellos.
- **Segmentación de envíos y comunicaciones**: Cada Business Unit puede gestionar sus propias campañas de marketing, flujos de trabajo de automatización y reportes, aislando la información de las otras unidades si es necesario.
- **Compartición de recursos**: Dependiendo de la configuración del Tenant, es posible compartir algunos recursos como plantillas o datos entre Business Units, pero cada unidad también puede tener sus propios activos independientes.

### Diferencias clave entre Tenant y Business Unit:

| Aspecto               | Tenant                                           | Business Unit                                       |
|-----------------------|--------------------------------------------------|-----------------------------------------------------|
| **Nivel**              | Es la capa superior del entorno SFMC             | Es una subcuenta o segmento dentro de un Tenant     |
| **Propósito**          | Agrupa todas las Business Units y datos globales | Divide el trabajo por marcas, productos, regiones   |
| **Datos**              | Tiene acceso a todos los datos del entorno       | Puede tener datos compartidos o restringidos        |
| **Configuración**      | Se aplica a nivel global (dominio, IP, etc.)     | Puede tener configuraciones locales para cada unidad|
| **Uso**                | Usado para gestionar todos los recursos y datos  | Usado para gestionar equipos o campañas específicas |
| **Acceso a recursos**  | Controla el acceso general de las Business Units | Acceso controlado y limitado a los recursos necesarios |

### Ejemplo práctico:
- **Tenant**: Una gran empresa internacional tiene un Tenant que agrupa todas sus operaciones de marketing digital.
- **Business Unit**: Dentro de ese Tenant, tiene Business Units para diferentes regiones: América del Norte, Europa, Asia, etc. Cada unidad de negocio puede manejar sus propias campañas de email y automatizaciones, pero de forma independiente o compartiendo ciertos recursos, según cómo esté configurado el Tenant.

De esta manera, **Tenant** es el nivel más amplio que administra la infraestructura general de SFMC, mientras que **Business Unit** permite la separación y gestión granular de equipos, marcas o regiones dentro de esa estructura.
