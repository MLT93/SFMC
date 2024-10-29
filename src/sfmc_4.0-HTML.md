# **`HTML para Marketing Automation en Salesforce Marketing Cloud (SFMC)`**

#### Introducción:

Esta guía proporciona una referencia esencial sobre HTML y **mejores prácticas SEO** para la creación de correos electrónicos y páginas optimizadas en **Salesforce Marketing Cloud (SFMC)**. Con el uso de HTML y configuraciones específicas de SEO, es posible mejorar la estructura, visibilidad y accesibilidad del contenido, asegurando que las campañas lleguen de manera efectiva a los usuarios.

---

1. ### **`Estructura Básica de HTML`**:

   - **`Etiqueta <!DOCTYPE>`**  
     La etiqueta `<!DOCTYPE html>` informa al navegador sobre la versión de HTML utilizada, en este caso HTML5.

     - **Ejemplo**:
       ```html
       <!DOCTYPE html>
       ```

   - **`Etiqueta <html>`**  
     Es la etiqueta raíz que contiene todas las etiquetas y contenido de un documento HTML.

     - **Ejemplo**:
       ```html
       <html lang="es">
         <!-- Todo el contenido del documento HTML -->
       </html>
       ```
     - **Nota**: Es recomendable incluir el atributo `lang=""` para indicar el idioma del documento, ayudando así a los motores de búsqueda y tecnologías de asistencia a traducir la página.

   ***

2. ### **`Sección de Cabecera (<head>)`**:

   - **`Etiqueta <head>`**  
     La sección `<head>` contiene metadatos importantes que no se ven directamente en la página, pero son cruciales para **SEO, accesibilidad** y **carga de recursos**. Incluye etiquetas como `<title>`, `<meta>`, y enlaces a archivos CSS o JavaScript en alguna ocasión.

     - **Ejemplo**:
       ```html
       <head>
         <title>Título de la pestaña del navegador</title>
         <meta charset="UTF-8" />
       </head>
       ```

   - **`Etiqueta <title>`**  
     Define el título que aparece en la pestaña del navegador y es fundamental en SEO. Este título es uno de los factores que los motores de búsqueda consideran para el posicionamiento.

     - **Ejemplo**:
       ```html
       <title>Título de la pestaña del navegador</title>
       ```

   - **`Etiqueta <meta charset>`**  
     Establece la codificación de caracteres (usualmente `UTF-8`), asegurando una correcta visualización de caracteres especiales.

     - **Ejemplo**:
       ```html
       <meta charset="UTF-8" />
       ```

   - **`Etiqueta <meta name="description">`**  
     Proporciona una breve descripción del contenido de la página, visible en los resultados de búsqueda. La longitud recomendada es de entre **150 y 160 caracteres** para una óptima visualización en motores de búsqueda.

     - **Ejemplo**:
       ```html
       <meta
         name="description"
         content="Descripción breve de la página para mejorar el SEO y atraer usuarios." />
       ```

   - **`Etiqueta <meta name="keywords">`**  
     Permite definir palabras clave relevantes para la página. Aunque ya no es tan crucial para SEO, algunos motores de búsqueda aún la consideran en ciertos casos.

     - **Ejemplo**:
       ```html
       <meta name="keywords" content="Marketing, HTML, Salesforce, SEO, automatización" />
       ```

   - **`Etiqueta <meta name="author">`**  
     Indica el autor del documento, lo cual puede ser útil en proyectos corporativos o académicos.

     - **Ejemplo**:
       ```html
       <meta name="author" content="Nombre del autor o empresa" />
       ```

   - **`Etiqueta <meta name="robots">`**  
     Controla cómo los motores de búsqueda deben rastrear e indexar la página. Algunas opciones comunes son **index** (para indexación), **noindex** (para evitar indexación), **follow** (para seguir enlaces), y **nofollow** (para ignorar enlaces).

     - **Ejemplo**:
       ```html
       <meta name="robots" content="index, follow" />
       ```

   - **`Etiqueta <link rel="canonical">`**  
     Ayuda a evitar problemas de contenido duplicado al especificar la URL preferida para la página. Esto indica a los motores de búsqueda cuál es la versión principal de la página.

     - **Ejemplo**:
       ```html
       <link rel="canonical" href="https://www.ejemplo.com/mi-pagina" />
       ```

   ***

3. ### **`Meta Tags para Redes Sociales: Open Graph y Twitter Cards`**

   Las **etiquetas Open Graph** y **Twitter Cards** son importantes para mejorar la visualización de la página al compartir el contenido en redes sociales. Estas etiquetas ayudan a definir cómo aparecerá el contenido en plataformas como Facebook, Twitter y LinkedIn.

   - **`Open Graph`**  
     Las etiquetas Open Graph, originalmente desarrolladas por Facebook, permiten controlar el aspecto visual y descriptivo del enlace compartido.

     - **Ejemplo de etiquetas Open Graph**:
       ```html
       <meta property="og:title" content="Título optimizado para redes sociales" />
       <meta property="og:description" content="Descripción breve y atractiva para captar la atención." />
       <meta property="og:image" content="https://www.ejemplo.com/imagen.jpg" />
       <meta property="og:url" content="https://www.ejemplo.com/mi-pagina" />
       <meta property="og:type" content="website" />
       ```

   - **`Twitter Cards`**  
     Las Twitter Cards permiten un control similar en el contenido compartido en Twitter.

     - **Ejemplo de etiquetas de Twitter Cards**:
       ```html
       <meta name="twitter:card" content="summary_large_image" />
       <meta name="twitter:title" content="Título para Twitter" />
       <meta name="twitter:description" content="Descripción optimizada para Twitter" />
       <meta name="twitter:image" content="https://www.ejemplo.com/imagen.jpg" />
       ```

   ***

4. ### **`Cuerpo del Documento HTML (<body>)`**:

   - **`Etiqueta <body>`**  
     Contiene todo el contenido visible de la página, como texto, imágenes y enlaces.

     - **Ejemplo**:
       ```html
       <body>
         <h1>Bienvenido</h1>
         <p>Esta es una página de ejemplo.</p>
       </body>
       ```

   - **`Etiqueta <article>`**  
     Representa un contenido independiente y autocontenido, que podría distribuirse o reutilizarse fuera del contexto de la página sin perder su significado. Hablamos de publicaciones de blog, noticias, comentarios, artículos de revista o cualquier contenido que tenga sentido por sí mismo y pueda leerse de forma aislada.

     - **Ejemplo**:
       ```html
       <article class="cambio-climatico-2023">
         <h1>El Cambio Climático en 2023</h1>
         <section class="historia">
           <h2>Contexto Histórico</h2>
           <p>El cambio climático ha sido un problema desde hace décadas...</p>
         </section>
         <section class="entrevistas">
           <h2>Entrevistas con Expertos</h2>
           <p>Los científicos han expresado su preocupación...</p>
         </section>
       </article>
       ```

   - **`Etiqueta <section>`**  
     Es un contenedor utilizado para agrupar contenido relacionado temáticamente dentro de una página o un `<article>`. Es un apartado dependiente del contexto de la página y forma parte de un todo.

     - **Ejemplo**:
       ```html
       <section class="productos">
         <h2>Características del Producto</h2>
         <p>Nuestro producto es innovador...</p>
       </section>
       ```

   - **`Etiqueta <div>`**  
     Es un contenedor genérico utilizado para organizar contenido y "dividirlo". El SEO tampoco tiene cuenta de este tag en cuánto a semántica.

     - **Ejemplo**:

       ```html
       <div class="contenedor">
         <p>Sección de contenido</p>
       </div>
       ```

       ```html
       <nav>
         <div class="contenedor-nav-izq">
           <ul>
             <li>Link 1</li>
             <li>Link 2</li>
             <li>Link 3</li>
           </ul>
         </div>
         <div class="contenedor-nav-dcha">
           <ul>
             <li>Link 4</li>
             <li>Link 5</li>
             <li>Link 6</li>
           </ul>
         </div>
       </nav>
       ```

   ***

5. ### **`Etiquetas de Texto`**:

   - **`Encabezados (<h1> a <h6>)`**  
     Los encabezados ayudan a estructurar el contenido según su importancia, de `<h1>` (más importante) a `<h6>` (menos importante).

     - **Ejemplo**:
       ```html
       <h1>Título principal</h1>
       <h2>Subtítulo</h2>
       ```

   - **`Párrafo (<p>)`**  
     Utilizado para bloques de texto en un documento HTML.

     - **Ejemplo**:
       ```html
       <p>Este es un párrafo de ejemplo.</p>
       ```

   - **`Etiqueta <span>`**  
     Para aplicar estilos a texto específico sin ocupar toda la línea.

     - **Ejemplo**:
       ```html
       <p>Esto es un <span style="color: red;">texto destacado</span> en rojo.</p>
       ```

   ***

6. ### **`Imágenes`**:

   - **`Etiqueta <img>`**  
     Inserta imágenes en el documento y debe incluir `src` (ruta de la imagen) y `alt` (texto alternativo). El atributo `alt` es crucial para SEO, ya que ayuda a los motores de búsqueda y a los usuarios con tecnologías de asistencia a comprender el contenido de la imagen.

     - **Ejemplo**:

       ```html
       <!-- Forma normal -->
       <img src="imagen.jpg" alt="Descripción de la imagen" />
       ```

       ```html
       <!-- Mapeo de imágenes -->
       <!-- Para editar imágenes utiliza: https://www.photopea.com/ -->
       <!-- Más info en: https://www.w3schools.com/html/html_images_imagemap.asp -->
       <img src="./img/iphone15.jpeg" alt="Móvil" usemap="#workmap" />
       <!-- La referencia a `<img>` se hace a través del tag `name=""` en vez del ID -->
       <map name="workmap">
         <!-- Con `shape="poly"` hay que usar todas las coordenadas necesarias para recortar la imagen -->
         <!-- Debes utilizar todas las coordenadas (X, Y) para recortar de la imagen y crear el link (desde la esquina superior izq. en sentido horario hasta la esquina inferior izq.) -->
         <!-- MAP GENERATOR: https://www.fla-shop.com/image-map/ -->
         <area
           shape="poly"
           coords="57,32,258,34,275,229,264,440,68,443,62,241"
           href="https://www.backmarket.es/es-es/p/gb/c5bf14e0-7818-48a0-9001-368d2f04b997?shopping=gmc&msclkid=b42427c8bcdd10d42d2f4214f2ae82a8&utm_source=bing&utm_medium=cpc&utm_campaign=ES_SA_SHOP_G_GEN_iPhone_PMAX&utm_term=2331583126622563&utm_content=iPhone#l=12"
           alt="Iphone-15"
           target="_blank" />
       </map>
       ```

       ```html
       <img src="workplace.jpg" alt="Workplace" usemap="#workmap" />
       <map name="workmap">
         <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm" />
         <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" />
         <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm" />
       </map>
       ```

       ```html
       <!-- <figure> se usa para incluir contenido gráfico o visual, como imágenes, gráficos o diagramas. <figcaption> proporciona una leyenda descriptiva para el contenido de <figure>. -->
       <figure>
         <img src="imagen.jpg" alt="Descripción de la imagen" />
         <figcaption>Figura 1: Un diagrama explicativo</figcaption>
       </figure>
       ```

   ***

7. ### **`Enlaces`**:

   - **`Etiqueta <a>`**  
     Crea hipervínculos para enlazar a otras páginas.

     - **Ejemplo**:

       ```html
       <a
         href="https://www.ejemplo.com"
         aria-label="Lo que indica el enlace (Accesibilidad)"
         title="Mensaje emergente con info adicional"
         >Visita nuestra página</a
       >
       ```

       ```html
       <address>
         <a
           href="mailto:marcos@example.com"
           class="footer__contact"
           aria-label="Link para enviar un correo directamente"
           title="Este link contactará a esta persona"
           >Contácteme</a
         >
       </address>
       ```

   ***

8. ### **`Formularios`**:

   - **`Etiqueta <form>`**  
     Envuelve un formulario y define el destino y método de envío de datos.

     - **Ejemplo**:
       ```html
       <form action="/pagDondeSeMandaLaInfo" method="POST">
         <label for="name">Titulo del input</label>
         <input type="text" name="nombre" id="name" placeholder="Nombre" />
         <button
           type="submit"
           name="submit"
           aria-label="Envío del formulario"
           title="Este botón enviará el formulario">
           Enviar
         </button>
         <!-- <input type="submit" value="Enviar" name="submit" aria-label="Envío del formulario" title="Botón de envío" /> -->
       </form>
       ```

   ***

9. ### **`Atributos de Accesibilidad: aria-label y title`**

   - **`aria-label`**  
     Proporciona una **etiqueta accesible** para elementos interactivos o de contenido, especialmente útil en elementos sin texto visible, como íconos o botones sin etiquetas. Los lectores de pantalla utilizan este texto para describir el propósito o la función del elemento a usuarios con discapacidades visuales.

     - **Ejemplo**:

       ```html
       <button aria-label="Cerrar ventana">✖️</button>
       ```

     - **Función**: Invisible para los usuarios que no usan lectores de pantalla, `aria-label` mejora la experiencia de accesibilidad al proporcionar descripciones contextuales precisas para los usuarios de tecnologías de asistencia.

   - **`title`**  
     Añade una **descripción emergente** que se muestra cuando el usuario pasa el cursor sobre el elemento. Aunque algunos lectores de pantalla lo leen, no es una solución de accesibilidad confiable, ya que no todos los dispositivos lo interpretan de la misma forma.

     - **Ejemplo**:

       ```html
       <img src="imagen.jpg" alt="Foto de un bosque" title="Un bosque en otoño" />
       ```

     - **Función**: El atributo `title` puede ofrecer información adicional y visible, pero **no garantiza accesibilidad**, ya que su visualización depende de la interacción del usuario (pase del cursor) y del lector de pantalla en uso.

   - **¿Cuándo Usar `aria-label` y `title`?**

     - **Usa `aria-label`** cuando necesitas **mejorar la accesibilidad directamente para usuarios de lectores de pantalla** en elementos interactivos clave.
     - **Usa `title`** cuando deseas proporcionar **información adicional visible para todos los usuarios** al pasar el cursor, sin depender de este atributo para accesibilidad completa.

   - **Ejemplo Comparativo**:

     ```html
     <!-- Con aria-label para accesibilidad -->
     <button aria-label="Enviar formulario">📧</button>

     <!-- Con title para información adicional -->
     <button title="Este botón enviará el formulario">Enviar</button>
     ```

   ***

10. ### **`Listas en HTML`**:

    Las listas en HTML permiten organizar elementos en secuencias ordenadas, no ordenadas o de definiciones.

    - **`Listas Ordenadas (<ol>)`**  
      Representan una lista en la que el orden es importante. Cada elemento está enumerado automáticamente.

      - **Ejemplo**:
        ```html
        <ol>
          <li>Primer elemento</li>
          <li>Segundo elemento</li>
          <li>Tercer elemento</li>
        </ol>
        ```

    - **`Listas Desordenadas (<ul>)`**  
      Se utilizan cuando el orden no importa. Cada elemento aparece con una viñeta predeterminada.

      - **Ejemplo**:
        ```html
        <ul>
          <li>Elemento uno</li>
          <li>Elemento dos</li>
          <li>Elemento tres</li>
        </ul>
        ```

    - **`Lista de Definición (<dl>)`**  
      Representa una lista de términos y sus respectivas definiciones, lo cual es ideal para glosarios o términos con descripciones.

      - **Ejemplo**:

        ```html
        <dl>
          <dt>HTML</dt>
          <dd>Lenguaje de marcado utilizado para estructurar contenido web.</dd>
          <dt>CSS</dt>
          <dd>Lenguaje de estilos usado para diseñar el aspecto visual de las páginas web.</dd>
        </dl>
        ```

      - **Componentes principales**:
        - **Etiqueta `<dt>` (definition term)**: Define el término que está siendo descrito. Es el nombre o el término clave que se quiere explicar.
        - **Etiqueta `<dd>` (definition description)**: Proporciona la descripción o definición del término que se ha especificado con `<dt>`. Aquí es donde se escribe la explicación o la información relacionada con el término.

   ***

11. ### **`Estructura Semántica`**:

    ```html
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Marcos Lambir Torres" />
        <meta name="description" content="Explicación HTML" />
        <meta name="keywords" content="HTML, SEMÁNTICA, TAGS, META" />
        <link rel="stylesheet" href="src/css/style.css" />
        <link rel="shortcut icon" href="public/favicon_io/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/svg+xml" href="public/favicon_io/favicon-32x32.png" />
        <link rel="shortcut icon" href="public/favicon_io/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="public/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="public/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="public/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="public/favicon_io/site.webmanifest" />
        <link rel="stylesheet" href="./css/style.css" />
        <title>Estructura Base HTML</title>
      </head>
      <body>
        <!-- Encabezado de la página -->
        <!-- Puede contener una navegación, el  -->
        <header>
          <div>
            <h1>Mi Sitio Web</h1>
          </div>
        </header>

        <!-- Navegación de la página -->
        <!-- Generalmente una lista de enlaces para moverse entre las páginas o las partes del sitio web -->
        <nav>
          <ul>
            <li>
              <a href="/home" aria-label="Lo que indica el enlace (Accesibilidad)" title="Msg emergente"
                >Home</a
              >
            </li>
            <li>
              <a href="/contact" aria-label="Lo que indica el enlace (Accesibilidad)" title="Msg emergente"
                >Contacto</a
              >
            </li>
            <li>
              <a href="/products" aria-label="Lo que indica el enlace (Accesibilidad)" title="Msg emergente"
                >Productos</a
              >
            </li>
          </ul>
        </nav>

        <!-- Contenido relacionado con el contenido principal sin ser parte del flujo principal de la página. Como un método estático en una clase -->
        <!-- Puede ser una barra lateral con enlaces, notas adicionales, publicidad -->
        <aside>
          <div></div>
        </aside>

        <!-- Contiene el contenido principal de la página -->
        <!-- Sólo puede haber uno por página y excluye contenido repetido como menús, encabezados y pies de página -->
        <main>
          <div></div>
          <article></article>
          <section></section>
        </main>

        <!-- Contiene el pie de página -->
        <!-- Suele contener los derechos de la página,  -->
        <footer>
          <section></section>
        </footer>

        <!-- Enlace al archivo JS que gestiona la lógica de la página -->
        <script type="module" src="src/js/script.js"></script>
      </body>
    </html>
    ```

12. ### **`Enlaces de Referencia`**:

   - **`HTML y CSS`**:
     - [Mozilla HTML](https://developer.mozilla.org/es/docs/Web/HTML)
     - [W3Schools HTML](https://www.w3schools.com/html/default.asp)

   - **`Cheat Sheet`**:
     - [HTML Cheat Sheet](https://htmlcheatsheet.com/)

   ***
