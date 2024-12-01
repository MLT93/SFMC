# **`CSS en Marketing Automation con SFMC`**

#### Introducción:

Este documento explora los fundamentos del uso de **CSS (Cascading Style Sheets)** dentro de la plataforma **Salesforce Marketing Cloud (SFMC)**. CSS permite el diseño y la presentación visual de las páginas web, trabajando en conjunto con HTML para definir colores, márgenes, tamaños, bordes, y otras propiedades que determinan la apariencia del contenido. En SFMC, CSS debe adaptarse para asegurar compatibilidad y buena visualización en múltiples dispositivos y clientes de correo electrónico, particularmente en el uso de **CSS en línea** e **incrustado**.

---

1. ### **`Introducción a CSS`**:

   - **`Definición`**  
     CSS, abreviatura de **Cascading Style Sheets**, es un lenguaje de estilos que define el aspecto de los elementos HTML en una página web. La aplicación "en cascada" permite definir reglas generales y específicas, que se aplican de manera jerárquica a los elementos.

   - **Funcionalidades principales**:
     - **Estilos básicos**: Colores, fuentes, tamaños, márgenes y bordes.
     - **Maquetación**: Control del ancho y altura de los elementos.
     - **Efectos visuales**: Sombreado, opacidades y transiciones.
     - **Responsividad**: Mediante media queries para adaptar el contenido a distintos dispositivos.

   ***

2. ### **`Tipos de Selectores en CSS`**:

   - **`Selectores de etiquetas`**  
     Aplica estilos a todas las instancias de una etiqueta específica.

     ```css
     h1 {
       color: grey;
     }
     ```

   - **`Selectores de clase`**  
     Permite aplicar estilos a cualquier elemento con una clase específica. Se indican con el símbolo `.` antes del nombre de la clase.

     ```css
     .texto-centrado {
       text-align: center;
     }
     ```

   - **`Selectores de ID`**  
     Especifica un estilo único para un elemento único en la página, utilizando el símbolo `#` antes del nombre del ID.
     ```css
     #principal {
       background-color: blue;
     }
     ```

   ***

3. ### **`Aplicación de CSS en HTML: Métodos`**:

   - **CSS en línea (`inline`)**

     - **Descripción**: Permite aplicar estilos directamente en la etiqueta HTML mediante el atributo `style`, sin utilizar selectores.
     - **Ventajas**: Útil para cambios rápidos y específicos en un elemento.
     - **Desventajas**: Dificulta el mantenimiento y la reutilización, ya que cada elemento debe incluir sus propios estilos.
     - **Ejemplo**:
       ```html
       <p style="color: grey; font-size: 14px;">Texto con estilo en línea</p>
       ```

   - **CSS en la cabecera (`<style>` en `<head>`)**

     - **Descripción**: Define estilos en la sección `<head>` del HTML, aplicando las reglas CSS a nivel de documento.
     - **Ventajas**: Organización del estilo en un solo bloque, permite aplicar estilos a múltiples elementos.
     - **Ejemplo**:
       ```html
       <head>
         <style>
           p {
             color: grey;
           }
         </style>
       </head>
       ```

   - **Archivo CSS externo**
     - **Descripción**: Utiliza un archivo `.css` separado para almacenar estilos, enlazándolo al HTML con `<link>`.
     - **Nota importante en SFMC**: **Email Studio** solo admite **CSS en línea o en la cabecera**; los archivos externos no son compatibles.
     - **Ejemplo**:
       ```html
       <link rel="stylesheet" href="estilos.css" />
       ```

   ***

4. ### **`CSS en SFMC (Email Studio)`**:

   - **CSS en línea**  
     Es la forma recomendada de aplicar estilos dentro de **Email Studio** en SFMC. Los correos electrónicos deben usar **CSS en línea** para asegurar la compatibilidad con distintos clientes de correo, algunos de los cuales no soportan estilos en `<head>` ni archivos CSS externos.

   - **Estilos en la cabecera**  
     Aunque menos compatible, también se pueden incluir estilos dentro de la etiqueta `<style>` en `<head>`. Esto puede funcionar en algunos clientes de correo, pero no se garantiza total compatibilidad.

   ***

5. ### **`Media Queries`**:

   - **Descripción**  
     Las **media queries** permiten adaptar el diseño de una página o correo electrónico a diferentes dispositivos o tamaños de pantalla. Usan reglas condicionales para aplicar estilos solo cuando se cumplen ciertas condiciones, como el ancho del viewport.

   - **Media Types comunes**:

     - `all`: Aplica los estilos en todos los dispositivos.
     - `print`: Destinado a dispositivos de impresión.
     - `screen`: Aplicable solo a pantallas.
     - `speech`: Aplicable a dispositivos de síntesis de voz.

   - **Ejemplo**:
     ```css
     @media screen and (max-width: 600px) {
       p {
         font-size: 12px;
       }
     }
     ```

   ***

6. ### **`Principales Propiedades CSS`**:

   - **Dimensiones**: Controla el tamaño de los elementos HTML.

     - **Evita dimensiones fijas** (como `px`) para permitir que el contenido se adapte a diferentes tamaños de pantalla y sea responsivo. Usa unidades flexibles como `%` o `vh/vw`.
     - **width**: Define el ancho de un elemento.
     - **height**: Define la altura de un elemento.
     - **max-width** y **min-width**: Limita el tamaño máximo y mínimo.
     - **Ejemplo**:
       ```css
       .caja {
         width: 50%; /* adaptable */
         max-width: 300px; /* evita que exceda */
       }
       ```

   - **Espaciado**:

     - **margin**: Espacio fuera del borde del elemento.
     - **padding**: Espacio dentro del borde del elemento.
     - **Ejemplo**:
       ```css
       .contenedor {
         margin: 10px;
         padding: 15px;
       }
       ```

   - **Bordes y Sombra**:
     - **border**: Añade un borde alrededor del elemento.
     - **box-shadow**: Aplica sombra alrededor del elemento.
     - **Ejemplo**:
       ```css
       .elemento {
         border: 1px solid black;
         box-shadow: 0px 3px 12px 3px grey;
       }
       ```

   **Display y Position**

   - **`Display`**

     - **block**: Ocupa todo el ancho de su contenedor.
     - **inline**: Ocupa solo el espacio necesario sin iniciar una nueva línea.
     - **flex** y **grid**: Permiten crear diseños de disposición avanzada, ideales para layouts responsivos. **Grid** es para alinear contenedores padres y la página principal. **Flex** es para alinear contenedores hijos y contenido.
     - **Ejemplo**:
       ```css
       /* Para contenedor padre y estructura de la página */
       .grid-container {
         width: 100%;

         display: grid;
         grid-template-rows: repeat(auto-fit, 1fr);
         grid-template-columns: repeat(3, 1fr);
         gap: 8px;
       }
       ```

       ```css
       /* Para contenedores hijos y contenido */
       .flex-container {
         width: 100%;
         display: flex;
         justify-content: space-around;
       }
       ```

   - **`Position`**
     - Controla la colocación exacta de un elemento. Los valores comunes son **static**, **relative**, **absolute** y **fixed**.
  
        `** Recuerda: **absolute** toma referencia de la ventana de la página web y **relative** toma referencia de sí mismo, pudiendo convertirse en el contenedor de un absolute`.

     - **Ejemplo**:
       ```css
       .absoluto {
         position: absolute;
         top: 10px;
         left: 10px;
       }
       ```

   ***

7. ### **`Enlaces de Referencia`**:

   - **HTML y CSS**:

     - [Mozilla CSS](https://developer.mozilla.org/es/docs/Web/CSS)
     - [W3Schools CSS](https://www.w3schools.com/css/default.asp)

   - **Herramientas de diseño**:

     - [Paleta de Colores](https://colorhunt.co/palettes/popular)

   - **Cheat Sheet**:

     - [CSS Cheat Sheet](https://htmlcheatsheet.com/css/)

   - **Maquetador Layout**:
     - [Layouts Generator](https://layout.bradwoods.io/)

   ***

8. ### **`Conclusión`**:

   Este documento destaca la importancia de **CSS** para personalizar y optimizar el diseño de correos electrónicos y páginas web en **SFMC**. En **Email Studio**, se recomienda principalmente el uso de CSS en línea y, cuando sea posible, en la cabecera del HTML. Usar **display flex o grid**, propiedades **position** de manera controlada y **dimensiones relativas** en lugar de fijas ayuda a que los diseños sean responsivos, adaptándose a distintos dispositivos. Entender cómo funcionan los selectores, las media queries y las propiedades CSS permite crear contenido visualmente atractivo y compatible con una amplia gama de dispositivos y clientes de correo electrónico.
