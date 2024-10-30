# **`AMPScript II en SFMC`**

#### Introducción:

AMPScript es un lenguaje de scripting usado principalmente en el entorno de SFMC para personalizar contenidos de emails, automatizar tareas y manejar datos en tiempo real. Aquí veremos Funciones para definir si un valor existe, los bloques de ejecución,  las cloud pages y alguna función avanzada.

---

1. ### **`Funciones principales de AMPScript`**

   - **`Funciones de Validación`**:
     AMPScript cuenta con funciones específicas para validar y verificar datos en tiempo real.

     - **IsNull**: Comprueba si el valor de una variable es nulo, especialmente útil para campos en Data Extensions.
       - **Ejemplo**:
         ```ampscript
         %%=IsNull(@field)=%%
         ```
     - **Empty**: Similar a `IsNull`, valida si una variable está vacía o contiene un valor nulo.

   - **`Bloques de contenido`**:
     En AMPScript, los bloques de contenido permiten organizar el código y gestionar la persistencia de variables.

     - **Características**:
       - Las variables mantienen su valor desde el primer bloque donde se asignan.
       - Los bloques de AMPScript (`%%[ ]%%`) deben iniciarse y cerrarse en el mismo bloque de contenido.

   - **`Orden de operaciones`**:
     Define el orden en que los elementos de un email se procesan:
       1. **HTML Body** (incluye el preheader).
       2. **Text Body**.
       3. **Subject**.

2. ### **`CloudPages y parámetros en URLs`**

   - **`CloudPagesURL`**: AMPScript ofrece esta función para crear URLs personalizadas que incluyan parámetros específicos.

   - **`Parámetros y variables`**: Permite la personalización de URLs mediante la inserción de valores dinámicos en los enlaces, como nombres o ID de clientes.

     - **Ejemplo de CloudPagesURL**:
       ```ampscript
       %%[
       SET @url = CloudPagesURL(214, 'nombre', 'Juan', 'idCliente', '12345')
       ]%%
       <a href="%%=v(@url)=%%">Botón</a>
       ```

3. ### **`Otras funciones avanzadas de AMPScript`**

   - **`RetrieveSalesforceObjects`**: Facilita la recuperación de datos desde objetos de Salesforce, conectando AMPScript con los datos del CRM.

   - **`ClaimRow`**: Diseñada para recuperar códigos de cupones de una Data Extension, permitiendo asignar códigos únicos a clientes de manera dinámica.

     - **Ejemplo de ClaimRow**:
       ```ampscript
       %%[
       SET @couponRow = ClaimRow("DE_Cupones", "IsClaimed", "SubscriberKey", @subscriberKey)
       ]%%
       ```
# Guía detallada para aplicar conceptos de AMPScript en SFMC:

1. #### **Definir Variables de Nombre y Apellido**:

   - Crea variables para almacenar el nombre y apellido del destinatario. Esto permitirá personalizar el contenido del email utilizando los datos del suscriptor.

     ```ampscript
     %%[
     SET @Nombre = "Juan"
     SET @Apellido = "Pérez"
     ]%%
     ```

2. #### **Personalizar URLs con Parámetros en un Enlace HTML**:

   - Utiliza las variables definidas para crear una URL personalizada que incluya parámetros dinámicos. Esto facilita la personalización de la experiencia del usuario al interactuar con el contenido.

     ```ampscript
     %%[
     SET @Url = CloudPagesURL(214, 'nombre', @Nombre, 'apellido', @Apellido)
     ]%%
     <a href="%%=v(@Url)=%%">Visita tu página personalizada</a>
     ```

3. #### **Recuperar Cupones Únicos y Aplicarlos en el Contenido del Email**:

   - Implementa la función `ClaimRow` para obtener un código de cupón de una Data Extension. Esto permite ofrecer descuentos personalizados a cada destinatario. El valor de `@SubscriberKey` proviene generalmente del contexto del envío de email, donde `_SubscriberKey` (que proviene de los Objetos/Tablas del CRM de Salesforce) se usa para capturar el identificador único del suscriptor.

     ```ampscript
     %%[
     SET @SubscriberKey = _SubscriberKey
     SET @CouponRow = ClaimRow("DE_Cupones", "IsClaimed", "SubscriberKey", @SubscriberKey)
     IF NOT EMPTY(@CouponRow) THEN
         SET @CouponCode = Field(@CouponRow, "CouponCode")
     ENDIF
     ]%%
     Código de cupón: %%=v(@CouponCode)=%%
     ```

4. #### **Resumen de Especificaciones**:

   - **Variables Definidas**: @Nombre = "Juan", @Apellido = "Pérez".
   - **URL Personalizada**: Generada con parámetros dinámicos para una experiencia personalizada.
   - **Código de Cupón**: Recuperado y mostrado en el contenido del email.
