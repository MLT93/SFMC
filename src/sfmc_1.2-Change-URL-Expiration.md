# **`URL Expiration en Salesforce Marketing Cloud`**

#### Introducción:

La función de URL Expiration en Salesforce Marketing Cloud (SFMC) es esencial para la gestión de enlaces dentro de las campañas de marketing. Permite establecer un tiempo limitado para que los enlaces sean accesibles, contribuyendo así a la seguridad y efectividad de las comunicaciones. Esta característica es especialmente útil para controlar el acceso a contenido exclusivo y promociones temporales.

---

1. ### **`Uso de URL Expiration`**:

   - **`Definición`**: URL Expiration permite a los usuarios establecer una fecha y hora específicas en las que un enlace dejará de ser válido.

   - **`Funcionalidades`**:

     - Configuración de fechas de caducidad para enlaces en correos electrónicos y páginas web.
     - Redirección automática a una página predeterminada o mensaje de error una vez que el enlace ha expirado.
     - Personalización de la experiencia del usuario al acceder a contenido caducado.

   - **`Aplicaciones`**:

     - Promociones limitadas en el tiempo, donde los clientes reciben un enlace que solo es válido por un período específico.
     - Contenido exclusivo que debe ser accesible solo durante un tiempo determinado.

   ***

2. ### **`Importancia de URL Expiration`**:

   - **`Seguridad`**:

     - Limita el acceso a contenido sensible o promociones caducadas, protegiendo así la información y la integridad de la marca.
     - Reduce el riesgo de fraudes al evitar que usuarios no autorizados accedan a ofertas antiguas.

   - **`Control sobre campañas`**:

     - Permite gestionar mejor las ofertas temporales, asegurando que los clientes solo puedan acceder a contenido vigente.
     - Aumenta la urgencia en las campañas, motivando a los clientes a actuar rápidamente.

   - **`Análisis preciso`**:

     - Proporciona datos más claros sobre el rendimiento de las campañas al limitar el tiempo de interacción con los enlaces.
     - Facilita la medición del éxito de las promociones temporales y su impacto en la conversión.

   ***

3. ### **`Mejores prácticas`**:

   - **`Comunicación clara`**: Informar a los destinatarios sobre la caducidad del enlace para evitar confusiones.
   - **`Períodos razonables`**: Establecer tiempos adecuados para cada campaña, considerando el tipo de contenido y audiencia.

   - **`Monitoreo constante`**: Revisar regularmente las métricas relacionadas con los enlaces expirados para ajustar estrategias futuras.

   - **`Pruebas previas`**: Realizar pruebas antes del lanzamiento para asegurar que los enlaces funcionen como se espera.

   La implementación efectiva de URL Expiration no solo mejora la seguridad y control sobre las campañas, sino que también optimiza la experiencia del cliente, asegurando que siempre interactúen con contenido relevante y actualizado.

# Guía detallada para cambiar la expiración de la URL y configurar una redirección en SFMC

1. #### **Accede a la Configuración de SFMC**:

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
   - Dirígete al **Setup** (Configuración) desde el menú principal.

2. #### **Navega a Email Studio**:

   - En el panel de configuración, busca y selecciona **Email Studio** bajo la sección de **Channel**.

3. #### **Configura la Expiración de la URL**:

   - Dentro de Email Studio, ve a **Admin** (Administración).
   - Selecciona **URL Expiration** (Expiración de URL).
   - **Establece la Expiración**: Cambia el valor de expiración de la URL a **90 días**. Esto significa que los enlaces en los correos electrónicos expirarán 90 días después de ser enviados. [URL Expiration Help Salesforce](https://help.salesforce.com/s/articleView?id=sf.mc_es_url_expiration.htm&language=es&type=5).

4. #### **Configura la Redirección Personalizada**:

   - En la misma sección de **URL Expiration**, busca la opción para configurar una redirección personalizada.
   - **Custom Defined URL**: Introduce la URL de redirección personalizada, en este caso, `https://jakala.es/`. Esto redirigirá a los usuarios a esta página cuando intenten acceder a un enlace expirado.

5. #### **Guarda los Cambios**:

   - Revisa toda la configuración y haz clic en **Save** (Guardar) para aplicar los cambios.

### Resumen de Especificaciones

- **Expiración de URL**: 90 días.
- **Redirección Personalizada**: `https://jakala.es/`.
