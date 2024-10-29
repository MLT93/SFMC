# **`AMPScript para Marketing Cloud: Una Explicación Detallada`**

1. ### **`Introducción a AMPScript`**:

   AMPScript es un lenguaje de scripting específico de Marketing Cloud utilizado para personalizar los correos electrónicos, SMS y páginas de destino. Permite la manipulación de datos y la personalización dinámica dentro de las comunicaciones para ofrecer una experiencia más específica a los usuarios.

2. ### **`Importancia de AMPScript`**:

   AMPScript es crucial en Marketing Cloud para personalizar contenido con base en datos de los suscriptores. Ayuda a generar contenido dinámico y a mostrar información relevante, como el Nombre de un cliente, productos recomendados o detalles específicos de una campaña, mejorando así la tasa de conversión y el engagement.

3. ### **`Sintaxis y Ejecución de AMPScript`**:

   AMPScript se inserta dentro del contenido utilizando bloques `%%[ ... ]%%`. Las funciones AMPScript permiten recuperar, manipular y mostrar datos almacenados en Marketing Cloud o en bases de datos externas.

   Ejemplo básico:

   ```ampscript
   /* Declaración variables */
   VAR @rowSet, @numPedido, @numArticulo, @precio, @articuloUno, @articuloDos, @isOk, @msg
   /* Buscar en una DE (ya sea sendable o menos) */
   SET @region = "Europa"
   SET @rowSet = LookupRows('ENT.DE_JTalent24_Tienda', 'Region', @region)
   /* Busca en una DE y obtiene las filas de la Tabla según un filtro (los argumentos posteriores) */
   SET @quantityRows = RowCount(@rowSet)
   FOR @i = 1 TO @quantityRows DO
     /* Devuelve una fila (con todos los campos de ese index) en cada iteración a trvés de Row() */
     SET @element = Row(@rowSet, @i)
     /* Inicialización del resto de variables con Field() (toma un campo de la fila) */
     SET @numPedido = Field(@element, 'NumPedido')
     SET @numArticulo = Field(@element, 'NumArticulos')
     SET @precio = Field(@element, 'Precio')
     SET @articuloUno = Field(@element, 'Articulo1')
     SET @articuloDos = Field(@element, 'Articulo2')
     /* Comprobaciones */
     IF @precio > 25 OR @numArticulo > 1 THEN /* @precio > 25 OR @articuloDos != "" || @precio > 25 OR NOT Empty(@articuloDos) */
       SET @isOk = "OK"
     ELSE
       SET @isOk = "KO"
     ENDIF
     /* Msg */
     SET @msg = Concat(
       "El valor obtenido es: <b>",
       @numPedido, "-", @numArticulo, "-", @precio, "-", @articuloUno
     )
     IF NOT Empty(@articuloDos) THEN
       SET @msg = Concat(@msg, "-", @articuloDos)
     ENDIF
     SET @msg = Concat(@msg, "-", @isOk, "</b><br />")
     /* Print */
     Output(Concat(@msg))
   NEXT @i
   ```

   Este script busca el Nombre del suscriptor basado en su dirección de correo electrónico y lo inserta en el contenido del Mensaje.

4. #### **`Funciones de Lookup en AMPScript`**:

   Las funciones `Lookup` permiten buscar valores específicos en bases de datos o listas de Marketing Cloud. `LookupRows`, `LookupOrderedRows`, y `LookupValue` son algunas de las funciones comunes para recuperar información.

   Ejemplo de `Lookup`:

   ```ampscript
   %%[
   VAR @Nombre
   SET @Nombre = Lookup("Subscribers", "FirstName", "SubscriberKey", _SubscriberKey)
   ]%%
   ```

   En este ejemplo, `Lookup` extrae el Nombre del suscriptor con base en su `SubscriberKey`.

5. #### **`Condicionales en AMPScript`**:

   Los condicionales permiten personalizar el contenido según los datos del suscriptor. `IF` y `ELSE` son estructuras comunes para manejar diferentes escenarios dentro de una campaña de Marketing Cloud.

   Ejemplo de `IF`:

   ```ampscript
   %%[
   IF @Nombre == "Juan" THEN
      SET @Mensaje = "¡Hola, Juan!"
   ELSE
      SET @Mensaje = "¡Hola, estimado cliente!"
   ENDIF
   ]%%
   %%=v(@Mensaje)=%%
   ```

   Dependiendo del valor de `@Nombre`, se personaliza el Mensaje.

6. #### **`Funciones de Manipulación de Fechas`**:

   AMPScript permite trabajar con fechas y horas utilizando funciones como `Now()`, `DateAdd()`, y `FormatDate()` para obtener, modificar y mostrar fechas personalizadas.

   Ejemplo:

   ```ampscript
   %%[
   VAR @FechaActual, @FechaFutura
   SET @FechaActual = Now()
   SET @FechaFutura = DateAdd(@FechaActual, 7, "D")
   ]%%
   Fecha actual: %%=v(@FechaActual)=%%, fecha futura: %%=v(@FechaFutura)=%%.
   ```

7. #### **`Manejo de Bucles`**:

   AMPScript permite iterar sobre colecciones de datos con `FOR` o `FOR EACH`. Esto es útil cuando necesitas mostrar múltiples productos o registros en un correo electrónico.

   Ejemplo de `FOR`:

   ```ampscript
   %%[
   SET @i = 1
   FOR @i = 1 TO 5 DO
      VAR @Producto
      SET @Producto = Lookup("Productos", "Nombre", "ID", @i)
      Output(Concat("Producto ", @i, ": ", @Producto, "<br>"))
   NEXT @i
   ]%%
   ```

   Aquí, se recorre una lista de productos para mostrarlos en el contenido del correo electrónico.

8. #### **`Funciones para Mensajes Dinámicos`**:

   `ContentBlockByKey()` y `ContentBlockById()` son funciones que permiten insertar bloques de contenido reutilizable dentro de los correos, lo que facilita la administración del contenido en campañas de gran escala.

   Ejemplo:

   ```ampscript
   %%=ContentBlockByKey("footer_block")=%%
   ```

   Esto inserta un bloque de contenido predefinido (como un pie de página) usando su clave única.

9. #### **`Validación de Datos`**:

   AMPScript incluye funciones como `IsNull()`, `IsNumeric()`, y `IsEmailAddress()` para validar datos antes de utilizarlos en el contenido. Esto es esencial para evitar errores y mejorar la personalización.

   Ejemplo:

   ```ampscript
   %%[
   VAR @Email
   SET @Email = "example@domain.com"
   IF IsEmailAddress(@Email) THEN
      OutputLine("El Email es válido.")
   ELSE
      OutputLine("El Email no es válido.")
   ENDIF
   ]%%
   ```

10. #### **`Conexiones Externas y Web Services`**:

    AMPScript permite realizar llamadas a servicios web externos mediante `HTTPGet()` o `HTTPPost()`. Esto es útil para integrar datos en tiempo real desde fuentes externas en el contenido de Marketing Cloud.

    Ejemplo de `HTTPGet`:

    ```ampscript
    %%[
    VAR @Response
    SET @Response = HTTPGet("https://api.ejemplo.com/data")
    ]%%
    ```

11. #### **`Combinación con SQL y Query Activities`**:

    Para campañas avanzadas, es común combinar AMPScript con SQL en Query Activities dentro de Marketing Cloud. Esto permite preprocesar datos y luego utilizarlos en correos personalizados.

    Ejemplo:

    ```sql
    SELECT FirstName, LastName, EmailAddress
    FROM Subscribers
    WHERE Status = 'Active'
    ```

12. #### **`Manejo de Errores y Debugging`**:

    AMPScript ofrece funciones como `RaiseError()` para manejar errores de forma controlada y `OutputLine()` para depurar el contenido.

    Ejemplo:

    ```ampscript
    %%[
    IF IsNull(@firstName) THEN
        RaiseError("El Nombre no se encontró.")
    ENDIF
    ]%%
    ```

13. #### **`Optimización del Rendimiento`**:

    AMPScript puede impactar el rendimiento si no se utiliza adecuadamente. Evitar el uso excesivo de bucles y consultas a bases de datos grandes ayuda a mejorar la eficiencia de las campañas.

14. #### **`Consideraciones Finales`**:

    Aunque AMPScript es extremadamente poderoso, su sintaxis puede volverse complicada en campañas grandes. Para casos complejos, Marketing Cloud también soporta lenguajes como Server-Side JavaScript (SSJS) y Automation Studio para tareas automatizadas.
