# **`List, Data Extension, Attribute Group`**

#### Introducción:

En Salesforce Marketing Cloud (SFMC), tanto las Listas como las Data Extensions son **herramientas clave para organizar y gestionar los datos de los suscriptores**, pero tienen diferencias importantes en términos de complejidad, flexibilidad y casos de uso

---

1. ### **`Listas y Data Extensions en Salesforce Marketing Cloud`**:

   - **`Listas`**
     Las listas en Salesforce Marketing Cloud son una forma básica de gestionar audiencias y contactos, especialmente en **Email Studio**. Las listas son útiles cuando se manejan datos de contacto de forma sencilla y no se requiere una estructura avanzada como en las **Data Extensions**. Dentro de SFMC, existen diferentes tipos de listas, cada una con una función específica.

     - **Tipos de Listas**:

       1. **`All Subscribers`**: Es la lista principal donde se almacenan todos los contactos suscritos a tus comunicaciones. Cada contacto en esta lista tiene un `Subscriber Key` único, que generalmente es el correo electrónico.
       2. **`Publication Lists`**: Son listas que permiten gestionar la suscripción a diferentes publicaciones o campañas de email dentro de la organización. Los usuarios pueden elegir a qué tipo de correos quieren suscribirse.
       3. **`Suppression Lists`**: Estas listas contienen contactos a los que no se les debe enviar comunicaciones. Se utilizan para excluir ciertos destinatarios, como aquellos que se han dado de baja de una lista de suscripción.
       4. **`Auto-suppression Lists`**: Similar a las suppression lists, pero se aplican automáticamente a ciertas campañas o envíos sin necesidad de configurarlas manualmente cada vez.

     - **Funcionalidades**:

       - Organizar contactos de manera sencilla y accesible.
       - Segmentación básica basada en atributos simples como nombre, correo electrónico, o fecha de nacimiento.
       - Envíos rápidos y fáciles a una audiencia general sin segmentación avanzada.
       - Manejo de suscripciones y exclusiones a nivel de campañas y comunicaciones.

     - **Aplicaciones**:
       - Uso ideal para pequeñas empresas con bases de datos más pequeñas y sin necesidades complejas de segmentación.
       - Envío de newsletters o correos masivos a suscriptores generales.
       - Gestión de listas de exclusión para cumplir con políticas de privacidad y cumplimiento legal (como GDPR).

   - **`Data Extensions`**
     Las **Data Extensions (DE)** son una herramienta más avanzada y flexible que las listas. Se utilizan para almacenar grandes volúmenes de datos y para realizar segmentaciones complejas y personalizadas en campañas multicanal. Mientras que las listas son limitadas en capacidad de segmentación y manejo de datos, las Data Extensions permiten la creación de estructuras personalizadas similares a tablas de bases de datos.

     - **Tipos de Data Extensions**:

       1. **`Text`**: Se usa para almacenar datos alfanuméricos, como nombres o direcciones.
       2. **`Number`**: Campos numéricos que almacenan valores enteros, como la cantidad de productos comprados.
       3. **`Date`**: Almacena fechas, como la fecha de nacimiento o la fecha de una transacción.
       4. **`Boolean`**: Representa valores de "verdadero" o "falso", útil para estados como `isSubscribed`.
       5. **`EmailAddress`**: Un tipo especializado para almacenar correos electrónicos.
       6. **`Phone`**: Almacena números de teléfono en formatos válidos.
       7. **`Decimal`**: Almacena valores numéricos con decimales, como precios o tasas de descuento.
       8. **`Locale`**: Guarda información sobre las preferencias de idioma o localización geográfica del contacto.

     - **Funcionalidades**:

       - Capacidad para almacenar grandes volúmenes de datos con múltiples tipos de campo, permitiendo un almacenamiento más estructurado y robusto.
       - Estructuras personalizables que permiten almacenar datos no solo de contactos, sino también de transacciones, comportamientos de los clientes, y más.
       - Segmentación avanzada basada en SQL, lo que permite segmentar contactos en función de datos demográficos, históricos de compras, y otras variables.
       - Integración con **Journey Builder** para crear automatizaciones avanzadas basadas en eventos o comportamientos del cliente.

     - **Aplicaciones**:
       - Ideal para grandes empresas que gestionan grandes volúmenes de datos y necesitan realizar segmentaciones avanzadas.
       - Utilización en campañas de **email marketing**, **SMS**, o **web** donde es importante realizar personalizaciones basadas en múltiples variables de cliente, como historial de compras o ubicación.
       - Permite automatizar campañas personalizadas como correos de abandono de carrito, recomendaciones de productos o actualizaciones en tiempo real basadas en el comportamiento del usuario.

   ***

2. ### **`Diferencia entre Listas y Data Extensions`**:

   - **`Listas`**: Son una forma más sencilla de gestionar contactos y suscripciones. Están limitadas en términos de capacidad y flexibilidad, pero son adecuadas para audiencias pequeñas y campañas simples. Se utilizan principalmente cuando los datos son simples y no se necesita segmentación avanzada ni personalización compleja.

     - **Ejemplo**: Una pequeña organización que envía boletines informativos a sus suscriptores utilizando campos básicos como nombre, dirección de correo electrónico y preferencias generales de suscripción.

   - **`Data Extensions`**: Son más flexibles y permiten manejar grandes volúmenes de datos, con estructuras personalizadas y segmentaciones avanzadas. Se usan cuando se necesita realizar segmentaciones basadas en múltiples variables y cuando los datos son complejos y variados.

     - **Ejemplo**: Una tienda online que gestiona millones de clientes y utiliza datos de compra, comportamiento de navegación, ubicación, y preferencias de idioma para crear campañas altamente personalizadas.

   ***

3. ### **`Ventajas de usar Listas y Data Extensions en Marketing Automation`**:

   - **`Listas`**: Son una solución rápida y sencilla para pequeñas empresas o campañas con audiencias limitadas y necesidades de segmentación básicas.

   - **`Data Extensions`**: Ofrecen mayor flexibilidad y permiten la personalización avanzada de campañas, con capacidad para almacenar y manejar grandes volúmenes de datos detallados, además de realizar segmentaciones complejas y personalizadas.

   ***

4. ### **`Casos de uso comunes`**:

   - **`Listas`**:

     - Envío de boletines informativos semanales a una audiencia general.
     - Gestionar suscripciones a diferentes campañas de email a través de **Publication Lists**.
     - Excluir contactos específicos de campañas mediante **Suppression Lists**.

   - **`Data Extensions`**:
     - Creación de campañas de re-engagement basadas en la inactividad del cliente almacenada en campos de **Date**.
     - Envío de correos personalizados a clientes basados en su historial de compras almacenado en campos de **Number** y **Decimal**.
     - Automatización de campañas de recomendaciones de productos en función de preferencias almacenadas en campos **Text**, **Boolean** y **Locale**.

   ***

5. ### **`Grupos de Atributos`**:

   Los Grupos de Atributos se crean en **Data Designer** de Salesforce Marketing Cloud. Son una herramienta fundamental para organizar y relacionar datos entre tablas. Permiten estructurar la información de manera lógica y establecer conexiones entre diferentes conjuntos de datos.
   Son las **Foreign Keys** en Salesforce.

   - **`Características principales`**:

     - **Organización de datos**: Agrupan lógicamente fuentes de datos (tablas) relacionadas.
     - **Relaciones entre datos**: Permiten configurar cómo se conectan diferentes conjuntos de datos.
     - **Visualización**: Ofrecen una representación visual de la estructura de datos en Contact Builder.
     - **Integración con Journey Builder**: Facilitan el uso de datos en automatizaciones y recorridos del cliente.

   - **`Funcionalidades`**:

     - **Creación de grupos personalizados**: Permite agrupar Data Extensions relacionadas.
     - **Establecimiento de relaciones**: Define cómo se conectan los datos (uno a uno, uno a muchos, muchos a muchos).
     - **Vinculación con el Contact Model**: Conecta los datos con el registro principal del contacto.
     - **Personalización**: Ofrece opciones para nombrar y asignar iconos a los grupos.

   - **`Aplicaciones`**:

     - **Estructuración de datos complejos**: Ideal para organizar información de clientes, transacciones, productos, etc.
     - **Segmentación avanzada**: Facilita la creación de segmentos basados en múltiples fuentes de datos.
     - **Personalización de comunicaciones**: Permite acceder a datos relacionados para crear mensajes más relevantes.
     - **Análisis de datos**: Mejora la comprensión de las relaciones entre diferentes conjuntos de datos.

   - **`Ejemplo de uso`**:

     Una empresa de comercio electrónico podría crear grupos de atributos para:

     1. **Datos de cliente**: Información demográfica y preferencias.
     2. **Historial de compras**: Transacciones y productos adquiridos.
     3. **Comportamiento en el sitio web**: Páginas visitadas y productos vistos.

     Estos grupos se relacionarían entre sí utilizando el **ContactKey**, permitiendo una visión completa del cliente y facilitando la creación de campañas personalizadas y segmentadas.

# Guía detallada para crear una Lista, una Data Extension y un Grupo de Atributos en Salesforce Marketing Cloud (SFMC):

1. #### **Accede a la Configuración de SFMC**:

   - Inicia sesión en tu cuenta de **Salesforce Marketing Cloud**.
   - Dirígete al menú principal y selecciona la opción **Email Studio** o **Contact Builder**, dependiendo de la tarea.

2. #### **Crear una Lista**:

   - **Navega a Email Studio**:

     - En el panel principal, selecciona **Email Studio** y luego **Email**.
     - Ve al desplegable **Subscribers** en el menú lateral del header y selecciona **Lists**.

   - **Crear una Nueva Lista**:
     - Haz clic en el botón **Create** (Crear) para generar una nueva lista.
     - **Nombre de la Lista**: Introduce el nombre de la lista. Ejemplo: "ClientesVIP".
     - **External Key**: Identificador único que se utiliza para referirse a objetos de una SFMC.
     - **Opciones de Suscripción**: Define si la lista será **pública** o **privada**, dependiendo de si los suscriptores podrán unirse o no a ella.
     - **Descripción**: Añade una breve descripción de la lista para especificar su propósito (opcional).
     - Haz clic en **Save** (Guardar).

3. #### **Crear una Data Extension**

   - **Navega a Audience Builder > Contact Builder**:

     - Ve a la sección **Data Extensions** en el panel lateral en el header.

   - **Crear una Nueva Data Extension**:

     - Haz clic en **Create** (Crear).
     - **Creation Method**: Diferentes opciones disponibles para establecer cómo se va a crear la DE.
       1. `Create from New`: Permite crear una Data Extension desde cero
       2. `Create from Existing`: Puedes crear una nueva DE basándote en una Data Extension que ya existe. Se copian los campos de otra DE.
       3. `Create from Template`: Esta opción permite crear una nueva Data Extension utilizando una plantilla predefinida. Permite rapidez sobre formatos ya creados y testados.
     - **Name**: Introduce un nombre. Ejemplo: "DatosClientesVIP".
     - **External Key**: Identificador único que se utiliza para referirse a objetos de una SFMC.
     - **Descripción**: Añade una breve descripción del propósito de esta data extension.
     - **Location**: Locación donde se guardará esa DE (Data Extension).
     - **Props de envío y testing**: Son dos propiedades para enviar comunicaciones.
       1. `Is Sendable`: Permite el envío real de mensajes a los registros de esa misma DE (Data Extension).
       2. `Is Testable`: Permite que se utilice para enviar mensajes de prueba si la opción **Is Sendable** está seleccionada, lo cual es útil para verificar que los mensajes se envían correctamente antes de realizar un envío masivo.
     - **Tipo de Retención**: Selecciona si los datos serán conservados por tiempo indefinido o definidos para purgarse después de cierto tiempo. Es buena práctica definir el tiempo de duración de la tabla.
     - **Campos**: Añade los campos necesarios, especificando el **tipo de dato** (por ejemplo: **Text, Number, Date, Boolean**):
       - Ejemplo:
         1. `Nombre` - Tipo: Text
         2. `Correo Electrónico` - Tipo: EmailAddress
         3. `Fecha de Registro` - Tipo: Date
     - Haz clic en **Save** (Guardar) para completar la creación.
     - Añade registros a la tabla a través de **Import** (Importar) en la esquina sup. dcha.
     - Obtendremos dos opciones:

       1. `Import Into Data Extension`

          - **Uso Rápido**: Esta opción es ideal para importaciones rápidas y únicas.
          - **Proceso**: Seleccionas el archivo, mapeas los campos y cargas los datos directamente a la Data Extension haciendo click en **Start Import**.
          - **Configuración**: No requiere configuración adicional ni se guarda para futuros usos.
          - **Ideal Para**: Importaciones ad-hoc o cuando no necesitas repetir el proceso regularmente.

       2. `Create Import Definition`
          - **Uso Recurrente**: Esta opción es útil si necesitas importar datos de manera regular.
          - **Proceso**: Define el nombre y descripción, configura la fuente de datos (archivo, FTP, etc.), mapea los campos y otras configuraciones. Puedes ejecutar la importación inmediatamente o programarla para más tarde.
          - **Configuración**: La definición se guarda y puede ser reutilizada en el futuro, lo que ahorra tiempo y asegura consistencia.
          - **Ideal Para**: Importaciones programadas o recurrentes, y cuando necesitas automatizar el proceso.

4. #### **Crear un Grupo de Atributos y Vincular una Data Extension**

   - **Navega a Audience Builder > Contact Builder > Data Designer**:

     - Una vez dentro, tendrás a la vista todas las relaciones de tu DB.

   - **Crear un Grupo de Atributos**:

     - Haz clic en **Create Attribute Group** (Crear Grupo de Atributos).
     - **Nombre del Grupo de Atributos**: Introduce un nombre, por ejemplo, "AtributosClientesVIP".
     - **Icono**: Selecciona un icono representativo para ese grupo.

   - **Vincular una Data Extension al Grupo de Atributos**:

     - Después de crear el grupo, selecciona la **Data Extension** que deseas vincular (en este caso, "DatosClientesVIP").
     - Establece las **relaciones** de los campos entre la Data Extension y otros atributos del cliente, como el **Subscriber Key** o **Contact ID**. Recuerda que deben ser del mismo **Data Type** (mismo tipo de dato) para poder relacionarse.

     - **Explicación**:
       En el contexto de vincular una **Data Extension (DE)** a un **Grupo de Atributos** en Salesforce Marketing Cloud, se utilizan conceptos similares a las **foreign keys** en bases de datos relacionales:

       1. `Definición de Relaciones`:
          - Al vincular una Data Extension a un Grupo de Atributos, estableces relaciones entre los campos de la DE y los atributos del cliente en el sistema. Esto permite que los datos de diferentes fuentes se conecten y se utilicen de manera efectiva en las campañas.
       2. `Foreign Keys`:
          - Las **foreign keys** son campos en una tabla (o DE) que se utilizan para establecer una relación con otra tabla. En este caso, puedes considerar que el **Subscriber Key** o **Contact ID** actúan como claves foráneas:
            - **Subscriber Key**: Identifica de manera única a un suscriptor y puede ser utilizado para vincular datos en la DE con información en otros grupos o DEs.
            - **Contact ID**: Identifica de manera única a un contacto en el sistema, permitiendo que la DE se relacione con la información de contacto.
       3. `Ejemplo de Vinculación`:
          - Si tienes una Data Extension llamada **"DatosClientesVIP"**, puedes vincularla a un Grupo de Atributos seleccionando campos que actúan como claves de relación (por ejemplo, **Subscriber Key** o **Contact ID**).
          - Al establecer esta relación, puedes realizar consultas, segmentaciones y personalizaciones en tus campañas, basándote en los datos de **"DatosClientesVIP"** y otros atributos del cliente.

   - **Beneficios de la Vinculación**

     - **Segmentación Precisa**: Al vincular la DE con atributos clave, puedes segmentar más eficazmente tus audiencias y dirigir campañas específicas a grupos relevantes.
     - **Análisis y Reporting**: Las relaciones permiten generar informes y análisis más completos al integrar datos de diferentes fuentes.
     - **Personalización**: Facilita la personalización de las interacciones con los clientes basadas en un conjunto más amplio de datos.

   - **Guardar y Verificar**:
     - Revisa la configuración y haz clic en **Save** (Guardar).
     - Verifica que la Data Extension esté correctamente vinculada al grupo de atributos.

5. #### **Resumen de Especificaciones**

   - **Lista**: ClientesVIP creada con opciones de suscripción definidas.
   - **Data Extension**: DatosClientesVIP con campos específicos como nombre y correo electrónico.
   - **Grupo de Atributos**: AtributosClientesVIP vinculado correctamente a la Data Extension para su uso en diversas automatizaciones y campañas.

   Este flujo permite gestionar suscriptores y datos a través de listas y Data Extensions, y vincular la información mediante grupos de atributos, optimizando así la segmentación y personalización en tus campañas de marketing.
