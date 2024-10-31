# **`AMPScript y SSJS Marketing Automation`**

#### Introducción:

Este documento se explica temas como los lenguajes de programación usados en SFMC, la detección y manejo de errores en AMPScript y Server-Side JavaScript (SSJS), funciones útiles para optimizar procesos y la creación de Cloud Pages para experiencias personalizadas en sitios web.

---

1. ### **`Lenguajes de Programación en SFMC`**:

   - **`Lenguajes de Servidor (BackEnd)`**:
     Son lenguajes que se ejecutan en el servidor y manipulan datos para entregar resultados al cliente. Incluyen **AMPScript**, **Server-Side JavaScript (SSJS)**, **Guide Template Language (GTL)**, **PHP**, **JAVA** y **WSProxy**.

   - **`Lenguajes de Cliente (FrontEnd)`**:
     Se ejecutan en el navegador del cliente y permiten la interacción con el servidor. En SFMC, se utiliza principalmente **JavaScript** (puede verse adaptado en distintos frameworks o bibliotecas que ayudan a la programación como Angular, React, Vue, JQuery, etc...).

   ***

2. ### **`Server-Side JavaScript (SSJS)`**:

   - **`Propósito`**: SSJS permite realizar operaciones avanzadas donde el AMPScript queda limitado como en la detección de errores, la manipulación de datos y generación de scripts en emails, SMS y Cloud Pages.

     ```html
     <script runat="server">
       Platform.Load('Core', '1');
       // Ambas formas de abajo funcionan. La primera es la más ortodoxa
       Platform.Response.Write('Hola Mundo!');
       Write('Hola Mundo!');
     </script>
     ```

   ***

3. ### **`Errores y Cómo Detectarlos en AMPScript`**:

   - **`Tipos de Errores`**: Incluyen bugs, excepciones y errores comunes de codificación. Identificarlos y resolverlos requiere una combinación de lectura cuidadosa, comentarios en el código, y seguimiento de valores.

   - **`Debugging con Tracking`**: Una técnica efectiva en AMPScript es crear una variable de **tracking** que permita verificar puntos clave en el flujo del código. Esta variable (ej. @EntraEnElFlujo), se puede ubicar en varias secciones del código (antes o después de cada bloque) y luego ejecutar el código para ver si el flujo de ejecución está pasando correctamente por cada paso.

     ```html
     <!-- Bloque de AMPScript para seguimiento de flujo -->
     %%[
       SET @EntraEnElFlujo = "Aquí Entra"
     ]%%
     
     <!-- Este código lo pasaremos desde arriba hasta abajo por todo el archivo -->
     <!-- Esto nos permite descubrir dónde el flujo de ejecución se detiene -->
     <p>Tracking: %%=V(@EntraEnElFlujo)=%%</p>
     ```

   - **Captura de errores con `try-catch` en SSJS**: Aunque AMPScript no tiene manejo de excepciones, SSJS permite capturar errores con la estructura **try-catch**. Utilizar SSJS para capturar errores y manejar excepciones es ideal para errores más complejos.

     ```html
     <!-- Bloque de SSJS con manejo de errores -->
     <script runat="server">
       Platform.Load("Core", "1");
       try {
         var nombre = Variable.GetValue("@Nombre"); // Recupera la variable de AMPScript
         
         // Simula un error si el nombre es vacío o no definido
         if (!nombre) {
           throw "El nombre no está definido o está vacío.";
         }
     
         Platform.Response.Write("Hola, " + nombre + "!");
       } catch (error) {
         Platform.Response.Write("Error capturado: " + Stringify(error)); // Muestra el error en la salida
       }
     </script>
     ```

   ***

4. ### **`Errores Comunes en AMPScript`**:

   - **`Principales Errores`**:

     - Código ilegible: falta de tabulación, variables poco descriptivas y ausencia de comentarios.
     - Errores lógicos en condiciones y asignación incorrecta de valores.
     - Problemas con las Data Extensions: insertar o actualizar sin clave primaria, tipos de datos incompatibles, o campos obligatorios sin valores.

   - **`Buenas Prácticas`**: Usa **código limpio**, **planifica antes de codificar** y **pide ayuda** cuando sea necesario.

   ***

5. ### **`Funciones Útiles de AMPScript`**:

   - **`AttributeValue()`**:

     - **Descripción**: Devuelve el valor de un atributo específico de una Data Extension. Si el valor no existe, no genera errores, lo que lo hace útil para evitar interrupciones en la ejecución del script.

       ```ampscript
       SET @Email = AttributeValue("EmailAddress")
       ```

   - **`GUID()`**:

     - **Descripción**: Genera un identificador único global (GUID) aleatorio. Este identificador es útil para crear registros únicos en Data Extensions o para realizar seguimiento en campañas.

       ```ampscript
       SET @UniqueId = GUID()
       ```

   - **`Random(min, max)`**:

     - **Descripción**: Devuelve un número aleatorio entre los valores especificados, **min** y **max**. Esta función puede ser útil para personalizar contenido o para seleccionar elementos al azar en campañas.

       ```ampscript
       SET @RandomNumber = Random(1, 100)
       ```

   - **`RaiseError()`**:

     - **Descripción**: Permite forzar un error en la ejecución de AMPScript. Esto puede ser útil para evitar el envío de un email cuando se detecta una condición indeseada.

       ```ampscript
       RaiseError("El valor no es válido", true)
       ```

   - **`Iif(condición, verdadero, falso)`**:

     - **Descripción**: Es una función condicional que evalúa una condición y devuelve uno de los dos valores proporcionados según si la condición es verdadera o falsa. Ideal para situaciones sencillas. Es el **operador ternario** de AMScript.

       ```ampscript
       SET @Age = 20
       SET @Status = Iif(@Age >= 18, "Adulto", "Menor") // Operador Ternario
       ```

   ***

6. ### **`Cloud Pages en Marketing Cloud`**:

   - **`Función`**: Las Cloud Pages permiten crear páginas web personalizadas, desde formularios hasta experiencias interactivas, aprovechando la capacidad de personalización de SFMC.

   - **`Integración Web`**: Cloud Pages se pueden integrar con Google Analytics, Google Tag Manager y bibliotecas de diseño como Bootstrap para enriquecer la experiencia del usuario.

# Guía para crear un email dinámico con AMPScript y SSJS en Salesforce Marketing Cloud:

1. #### **Crea un Email**:

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
   - Dirígete a **Email Studio** y selecciona **Create** para iniciar un nuevo email.
   - Añade un bloque **HTML** donde puedas insertar código personalizado.

2. #### **Crea un Bloque de AMPScript**:

   - Inserta un bloque de AMPScript y define un par de variables:
     ```ampscript
     SET @N = "TuNombre" /* Reemplaza con tu nombre */
     SET @A = "TuApellido" /* Reemplaza con tu apellido */
     ```

3. #### **Crea un Bloque de SSJS**:

   - Añade un bloque de Server-Side JavaScript (SSJS) para recuperar las variables de AMPScript y mostrarlas:
     ```javascript
     <script runat="server">
     var nombre = Variable.GetValue("@N");
     var apellido = Variable.GetValue("@A");
     Write("Nombre: " + nombre + " " + apellido);
     </script>
     ```

4. #### **Sobrescribe las Variables de AMPScript**:

   - Modifica las variables de AMPScript con nuevos valores:
     ```ampscript
     SET @N = "Hola"
     SET @A = "Mundo"
     ```

5. #### **Concatena las Variables**:

   - Crea otro bloque de AMPScript donde concatenes las variables para formar la frase "Hola Mundo!" y muéstrala:

     ```ampscript
     SET @Frase = Concat(@N, " ", @A)
     Output(Concat("Frase: ", @Frase))
     ```

6. #### **Nota Importante**:

   - Esta multi ejecución de bloques de código de diferentes lenguajes con comunicación entre ellos tiene un límite, por lo que hay que optimizar los procesos que se quieran realizar.

7. #### **Referencias**:

   - [Documentación de Utilidades de SSJS en Salesforce](https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ssjs_utilitiesVariable.html)
