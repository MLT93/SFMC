# **`AMPScript I en SFMC`**

#### Introducción:

AMPScript es un lenguaje de scripting exclusivo de **Salesforce Marketing Cloud (SFMC)**, diseñado para personalizar contenido en campañas de marketing digital. Se utiliza para adaptar dinámicamente los mensajes en correos electrónicos, páginas de destino (CloudPages), y SMS/Push/WhatsApp, lo que permite mostrar contenido relevante a cada usuario. La personalización avanzada de AMPScript es clave en SFMC para aumentar la efectividad de las campañas al mejorar la segmentación y optimizar la experiencia del usuario.

---

1. ### **`Características y Ventajas de AMPScript`**:

   - **`Personalización Avanzada`**  
     Permite acceder a datos de las **Data Extensions** y de los perfiles de suscriptores para personalizar el contenido del mensaje en tiempo real.

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
       VAR @nombre, @apellido 
       SET @nombre = "Juan" 
       SET @apellido = "Pérez" 
       ]%%
       <p>Hola, %%=v(@nombre)=%% %%=v(@apellido)=%%</p>
       ```

   - **`Tipos de Variables`**  
     Las variables pueden almacenar diferentes tipos de datos:

     - **Numéricas**: Ej. `123`
     - **Texto**: Ej. `"Hola Mundo"`
     - **Booleanas**: `true` o `false`

   - **`Operadores`**  
     Incluyen operadores de comparación (`==`, `!=`), matemáticos (`+`, `-`, `*`, `/`), y booleanos (`AND`, `OR`, `NOT`) para crear condiciones lógicas.
     Recuerda que **AND = multiplicación** y **OR = suma** (esto es necesario saberlo cuando se hace un conjunto de operaciones lógicas entre sí para saber qué operación se evalúa antes que otra).

   ***

3. ### **`Control de Flujo: IF y FOR`**:

   - **`IF`**  
     Permite definir condiciones para mostrar contenido específico basado en criterios.

     - **Ejemplo**:
       ```html
       %%[ 
       VAR @nombre
       SET @nombre = "Juan"
       IF @nombre == "Juan" THEN 
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
       SET @num = 3 
       FOR @i = 1 TO @num DO 
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
       SET @nombre = "Juan" 
       SET @saludo = Concat("Hola ", @nombre) 
       ]%%
       <p>%%=v(@saludo)=%%</p>
       ```

   - **`Modificación de Texto`**
     - **Uppercase/Lowercase**: Cambia el texto a mayúsculas o minúsculas.
     - **Replace**: Reemplaza una sub-cadena de texto por otra.
     - **ProperCase**: Cambia el texto para que tenga la primer letra en mayúsculas y el resto en minúsculas.

     - **Ejemplo**:
       ```html
       %%[ 
       SET @textoOriginal = "Hola Mundo" 
       SET @textoMayuscula = Uppercase(@textoOriginal) 
       SET @textoReemplazado = Replace(@textoOriginal, "Mundo", "Juan") 
       ]%%
       <p>Mayúsculas: %%=v(@textoMayuscula)=%%</p>
       <p>Reemplazo: %%=v(@textoReemplazado)=%%</p>
       ```

   ***

5. ### **`Funciones Matemáticas`**:

   - **`Operaciones Básicas`**  
     Incluye funciones como `Add`, `Subtract`, `Multiply`, `Divide` y `Mod` para operaciones matemáticas.

     - **Ejemplo**:
       ```html
       %%[ 
       SET @num1 = 5 
       SET @num2 = 3 
       SET @resultadoSuma = Add(@num1, @num2) 
       SET @resultadoMultiplicacion = Multiply(@num1, @num2) 
       ]%%
       <p>Suma: %%=v(@resultadoSuma)=%%</p>
       <p>Multiplicación: %%=v(@resultadoMultiplicacion)=%%</p>
       ```

   ***

6. ### **`Funciones de Data Extensions`**:

   - **`Acceso a Datos`**  
     Las funciones `Lookup`, `LookupRows`, y `LookupOrderedRows` permiten extraer datos de una **Data Extension** basándose en condiciones.

     - **Ejemplo de Lookup**:
       ```html
       %%[ 
       SET @userID = "12345" 
       SET @email = Lookup("Usuarios", "Email", "ID", @userID) 
       ]%%
       <p>Email del usuario con ID 12345: %%=v(@email)=%%</p>
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
       SET @fechaHoy = Now() 
       SET @fechaFutura = DateAdd(@fechaHoy, 7, "D") 
       ]%%
       <p>Fecha de hoy: %%=FormatDate(@fechaHoy, "MM-DD-YYYY")=%%</p>
       <p>Fecha en una semana: %%=FormatDate(@fechaFutura, "MM-DD-YYYY")=%%</p>
       ```

   ***

8. ### **`Ejemplo Práctico`**:

   - **`Ejercicio de Personalización`**  
     Crear un correo que personalice el saludo en función del valor de una variable `@animal`. Basado en su valor, el correo muestra un mensaje específico para "Perro", "Gato", o "Pato".

     - **Ejemplo**:

       ```html
       %%[ 
       VAR @animal 
       SET @animal = "Gato" 
       
       IF @animal == "Perro" THEN 
         SET @mensaje = "¡Guau! Eres un amigo fiel."
       ELSEIF @animal == "Gato" THEN 
         SET @mensaje = "¡Miau! Eres independiente y curioso."
       ELSEIF @animal == "Pato" THEN 
         SET @mensaje = "¡Cuac! Eres divertido y peculiar."
       ELSE 
         SET @mensaje = "Animal no reconocido"
       ENDIF 
       ]%%
       <p>Sonido del animal: %%=v(@mensaje)=%%</p>
       ```

   ***

9. ### **`Conclusión`**:

   AMPScript en **Salesforce Marketing Cloud** proporciona herramientas avanzadas de personalización que permiten adaptar el contenido de marketing a las necesidades específicas de cada cliente. Con funciones que van desde la manipulación de datos y el control de flujo, hasta operaciones con fechas y condicionales, AMPScript es fundamental para mejorar la experiencia del usuario en campañas de marketing digital.
