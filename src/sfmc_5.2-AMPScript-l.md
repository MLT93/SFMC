# **`AMPScript I en SFMC`**

#### Introducción:

AMPScript es un lenguaje de scripting exclusivo de **Salesforce Marketing Cloud (SFMC)**, diseñado para personalizar contenido en campañas de marketing digital. Se utiliza para adaptar dinámicamente los mensajes en correos electrónicos, páginas de destino (CloudPages), y SMS/Push/WhatsApp, lo que permite mostrar contenido relevante a cada usuario. La personalización avanzada de AMPScript es clave en SFMC para aumentar la efectividad de las campañas al mejorar la segmentación y optimizar la experiencia del usuario.
En este documento se verán algunas características la sintaxis, control de flujo, bucle FOR, funciones de texto, de fecha, matemáticas y para Data Extensions.

---

1. ### **`Características y Ventajas de AMPScript`**:

   - **`Personalización Avanzada`**  
     Permite acceder a datos de las **Data Extensions** y de los perfiles de suscriptores para personalizar el contenido del Mensaje en tiempo real.

     - **Ventajas**:
       - **Flexibilidad en los mensajes**: A través de lógica condicional, se puede mostrar contenido personalizado para diferentes segmentos de usuarios.
       - **Simplicidad**: Es más fácil de aprender en comparación con otros lenguajes de scripting como JavaScript o SQL, lo cual lo hace accesible para más equipos de marketing y personas sin experiencia.

   - **`Convención`**  
     Al ser un lenguaje **key Insensitive**, permite que todo se pueda escribir sin tener cuenta de mayúsculas o minúsculas. Para tener un orden, muchas empresas optan por establecer una convención.
     
       - **Por ejemplo**: Se utilizará el **Pascal Case** para todo, los verbos se escribirán en mayúsculas (SET, VAR, DO, THEN, FOR, etc...), se nombrará el tipo de la variable con **Prefijos/Sufijos** (StrNombre, ArrClientes, IntEdad, IsSendable, etc...) y las variables serán **Verbosity** (explicativas como @NombreDelCampoJefeAdministrativo).
     
     Si presentas alguna duda mira este link: [Tipos de notación](https://www.neoguias.com/tipos-notacion-nombres/).

   ***

2. ### **`Conceptos Básicos: Sintaxis, Variables y Operadores`**:

   - **`Sintaxis`**  
     El código AMPScript se coloca entre delimitadores `%%[` y `]%%` para ejecutarse en bloques. Las variables se declaran con `VAR` y se acceden utilizando `v(@variable)`.

     - **Ejemplo**:
       ```html
       %%[ 
       VAR @Nombre, @Apellido 
       SET @Nombre = "Juan" 
       SET @Apellido = "Pérez" 
       ]%%
       <p>Hola, %%=v(@Nombre)=%% %%=v(@Apellido)=%%</p>
       ```

   - **`Tipos de Variables`**  
     Las variables pueden almacenar diferentes tipos de datos:

     - **Numéricas**: Ej. `123`
     - **Texto**: Ej. `"Hola Mundo"`
     - **Booleanas**: `true` o `false`

   - **`Operadores`**  
     Incluyen operadores de comparación (`==`, `!=`), matemáticos (`+`, `-`, `*`, `/`), y booleanos (`AND`, `OR`, `NOT`) para crear condiciones lógicas.
   
   - **`Operadores usados conjuntamente`**:
     Recuerda que **AND == multiplicación** y **OR == suma**. Esto es necesario saberlo cuando se hace un conjunto de operaciones lógicas entre sí para saber qué operación se evalúa antes que otra. Por lo tanto, un **AND** se ejecutará antes que un **OR**.

     ```ampscript
     /* Comparaciones simples */
     @Day == 23 AND @Month == 10 AND @Year == 2024
     @Day == 23 OR @Day == 24 OR @Day == 25
     
     /* Cuando se mezclan distintos comparadores booleanos se utilizan los paréntesis */
     (@Day == 23 OR @Day == 24 ) AND @Month == 10 AND @Year == 2024
     ```

   ***

3. ### **`Control de Flujo: IF y FOR`**:

   - **`IF`**  
     Permite definir condiciones para mostrar contenido específico basado en criterios.

     - **Ejemplo**:
       ```html
       %%[ 
       VAR @Nombre
       SET @Nombre = "Juan"
       IF @Nombre == "Juan" THEN 
       ]%%
       <p>¡Bienvenido, Juan!</p>
       %%[ 
       ELSE 
       ]%%
       <p>¡Bienvenido, visitante!</p>
       %%[ 
       ENDIF 
       ]%%
       ```

   - **`FOR`**  
     Ejecuta un bloque de código varias veces, útil para listas y tablas de datos.

     - **Ejemplo**:
       ```html
       %%[ 
       /* Ascendente */
       VAR @Num
       SET @Num = 5 
       FOR @i = 1 TO @Num DO
       ]%%
       <p>Elemento %%=v(@i)=%%</p>
       %%[ 
       NEXT @i 
       ]%%
       ```

       ```html
       %%[ 
       /* Descendente */
       VAR @Num
       SET @Num = 1
       FOR @i = 5 DOWNTO @Num DO
       ]%%
       <p>Elemento %%=v(@i)=%%</p>
       %%[ 
       NEXT @i 
       ]%%
       ```

   ***

4. ### **`Funciones de Texto`**:

   - **`Concatenación de texto Concat()`**  
     Une varias cadenas de texto en una sola.

     - **Ejemplo**:
       ```html
       %%[ 
       VAR @Nombre, @Saludo
       SET @Nombre = "Juan" 
       SET @Saludo = Concat("Hola ", @Nombre) 
       ]%%
       <p>%%=v(@Saludo)=%%</p>
       ```

   - **`Modificación de Texto`**
     - **Uppercase/Lowercase**: Cambia el texto a mayúsculas o minúsculas.
     - **Replace**: Reemplaza una sub-cadena de texto por otra.
     - **ProperCase**: Cambia el texto para que tenga la primer letra en mayúsculas y el resto en minúsculas.

     - **Ejemplo**:
       ```html
       %%[ 
       VAR @TextoOriginal, @TextoMayuscula, @TextoReemplazado
       SET @TextoOriginal = "Hola Mundo" 
       SET @TextoMayuscula = Uppercase(@TextoOriginal) 
       SET @TextoReemplazado = Replace(@TextoOriginal, "Mundo", "Juan") 
       ]%%
       <p>Mayúsculas: %%=v(@TextoMayuscula)=%%</p>
       <p>Reemplazo: %%=v(@TextoReemplazado)=%%</p>
       ```

   ***

5. ### **`Funciones Matemáticas`**:

   - **`Operaciones Básicas`**  
     Incluye funciones como `Add`, `Subtract`, `Multiply`, `Divide` y `Mod` para operaciones matemáticas.

     - **Ejemplo**:
       ```html
       %%[
       VAR @Num1, @Num2, @ResultadoSuma, @ResultadoMultiplicacion
       SET @Num1 = 5 
       SET @Num2 = 3 
       SET @ResultadoSuma = Add(@Num1, @Num2) 
       SET @ResultadoMultiplicacion = Multiply(@Num1, @Num2) 
       ]%%
       <p>Suma: %%=v(@ResultadoSuma)=%%</p>
       <p>Multiplicación: %%=v(@ResultadoMultiplicacion)=%%</p>
       ```

   ***

6. ### **`Funciones de Data Extensions`**:

   - **`Acceso a Datos`**  
     Las funciones `Lookup`, `LookupRows`, y `LookupOrderedRows` permiten extraer datos de una **Data Extension** basándose en condiciones.

     - **Ejemplo de Lookup**:
       ```html
       %%[ 
       VAR @UserID, @Email
       SET @UserID = "12345" 
       SET @Email = Lookup("Usuarios", "Email", "ID", @UserID) 
       ]%%
       <p>Email del usuario con ID 12345: %%=v(@Email)=%%</p>
       ```
    
     - **Ejemplo de LookupRows**
      ```html
      %%[
      VAR @Rows, @Region, @NumFilas,
      SET @Rows = LookupRows('Paises', 'Region', @Region)
      SET @NumFilas = RowCount(@Rows)
      FOR @i=1 TO @numFilas1 DO /* En un FOR es innecesaria la declaración previa de la variable @i */
      SET @Row = Row(@rows, @i)
      Output(Field(@row, 'Capital'))
      NEXT @i
      ]%%
      ```


   - **`Modificación de Datos`**  
     Funciones como `InsertDE`, `UpdateDE`, `UpsertDE`, y `DeleteDE` permiten crear, actualizar, o eliminar registros en una Data Extension.

     - **Ejemplo de InsertDE**:
       ```html
       %%[ 
       InsertDE("Usuarios", "ID", "12346", "Nombre", "Carlos", "Email", "carlos@example.com") 
       ]%%
       ```

   ***

7. ### **`Funciones de Fecha y Hora`**:

   - **`Fecha Actual Now()`**  
     Devuelve la fecha y hora actuales en formato CST.

   - **`Operaciones con Fechas`**

     - **DateAdd**: Suma o resta un intervalo de tiempo a una fecha.
     - **DateDiff**: Calcula la diferencia entre dos fechas.
     - **FormatDate**: Permite dar formato específico a una fecha.

     - **Ejemplo**:
       ```html
       %%[ 
       SET @FechaHoy = Now() 
       SET @FechaFutura = DateAdd(@FechaHoy, 7, "D") 
       ]%%
       <p>Fecha de hoy: %%=FormatDate(@FechaHoy, "MM-DD-YYYY")=%%</p>
       <p>Fecha en una semana: %%=FormatDate(@FechaFutura, "MM-DD-YYYY")=%%</p>
       ```

   ***

8. ### **`Ejemplo Práctico`**:

   - **`Ejercicio de Personalización`**  
     Crear un correo que personalice el Saludo en función del valor de una variable `@Animal`. Basado en su valor, el correo muestra un Mensaje específico para "Perro", "Gato", o "Pato".

     - **Ejemplo**:

       ```html
       %%[ 
       VAR @Animal 
       SET @Animal = "Gato" 
       
       IF @Animal == "Perro" THEN 
         SET @Mensaje = "¡Guau! Eres un amigo fiel."
       ELSEIF @Animal == "Gato" THEN 
         SET @Mensaje = "¡Miau! Eres independiente y curioso."
       ELSEIF @Animal == "Pato" THEN 
         SET @Mensaje = "¡Cuac! Eres divertido y peculiar."
       ELSE 
         SET @Mensaje = "Animal no reconocido"
       ENDIF 
       ]%%
       <p>Sonido del Animal: %%=v(@Mensaje)=%%</p>
       ```

   ***

9. ### **`Conclusión`**:

   AMPScript en **Salesforce Marketing Cloud** proporciona herramientas avanzadas de personalización que permiten adaptar el contenido de marketing a las necesidades específicas de cada cliente. Con funciones que van desde la manipulación de datos y el control de flujo, hasta operaciones con fechas y condicionales, AMPScript es fundamental para mejorar la experiencia del usuario en campañas de marketing digital.

# Guía detallada para utilizar LookupRows y obtener datos de cualquier Data Extension en SFMC

1. #### **Definir la Región y Recuperar Datos de la Data Extension**:

   - Define la región para filtrar los pedidos (en este ejemplo, "Europa") y utiliza `LookupRows` para obtener todos los registros que coincidan en la Data Extension `ENT.DE_JTalent24_Tienda`, ya sea una Data Extension de tipo sendable o unsendable.

     ```ampscript
     %%[
     SET @Region = "Europa"
     SET @RowSet = LookupRows("ENT.DE_JTalent24_Tienda", "Region", @Region)
     SET @QuantityRows = RowCount(@RowSet)
     ]%%
     ```

2. #### **Inicializar Variables y Crear un Bucle para Procesar cada Pedido**:

   - Inicializa variables para almacenar los datos de cada pedido, como `@NumPedido`, `@NumArticulo`, `@Precio`, `@ArticuloUno`, `@ArticuloDos`, y `@IsOk`. Utiliza un bucle `FOR` para iterar sobre cada registro en `@RowSet`.

     ```ampscript
     FOR @i = 1 TO @QuantityRows DO
         SET @Element = Row(@RowSet, @i)
     ```

3. #### **Recuperar y Asignar Valores de cada Pedido**:

   - En cada iteración, extrae los valores del pedido actual usando `Field` para los campos `NumPedido`, `NumArticulos`, `Precio`, `Articulo1`, y `Articulo2`.

     ```ampscript
         SET @NumPedido = Field(@Element, "NumPedido")
         SET @NumArticulo = Field(@Element, "NumArticulos")
         SET @Precio = Field(@Element, "Precio")
         SET @ArticuloUno = Field(@Element, "Articulo1")
         SET @ArticuloDos = Field(@Element, "Articulo2")
     ```

4. #### **Evaluar Condición y Establecer el Estado del Pedido (OK o KO)**:

   - Evalúa la condición `@Precio > 25 OR @NumArticulo > 1`. Si se cumple, establece `@IsOk` como `"OK"`, de lo contrario, como `"KO"`.

     ```ampscript
         IF @Precio > 25 OR @NumArticulo > 1 THEN
             SET @IsOk = "OK"
         ELSE
             SET @IsOk = "KO"
         ENDIF
     ```

5. #### **Concatenar los Detalles del Pedido en una Línea de Texto Formateada**:

   - Usa `Concat` para construir una línea de texto con los detalles del pedido, separando cada dato con un guión y utilizando `<br />` para hacer un salto de línea. Si `@ArticuloDos` tiene un valor, se agrega a la cadena; de lo contrario, se omite.

     ```ampscript
         SET @Msg = Concat("El valor obtenido es: <b>", @NumPedido, "-", @NumArticulo, "-", @Precio, "-", @ArticuloUno)
         IF NOT Empty(@ArticuloDos) THEN
             SET @Msg = Concat(@Msg, "-", @ArticuloDos)
         ENDIF
         SET @Msg = Concat(@Msg, "-", @IsOk, "</b><br />")
     ```

6. #### **Imprimir la Línea de Texto para cada Pedido**:

   - Usa `Output` para mostrar la línea de texto construida para cada pedido.

     ```ampscript
         Output(Concat(@Msg))
     NEXT @i
     ]%%
     ```

7. #### **Resumen de Especificaciones**:

   - **Región Definida**: Europa.
   - **Variables de Pedido**: @NumPedido, @NumArticulo, @Precio, @ArticuloUno, @ArticuloDos, @IsOk.
   - **Condición Evaluada**: OK si el precio es mayor a 25 o si hay más de un artículo.
   - **Mensaje Formateado**: Los detalles de cada pedido se imprimen en una línea separada con guiones.
