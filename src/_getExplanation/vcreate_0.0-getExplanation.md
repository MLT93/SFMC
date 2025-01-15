Explica esto:

```
### Opciones para Accionar un Journey desde una Cloud Page

1. **Usar la Entry Source "API Event"**
   - La Entry Source "API Event" en el Journey Builder permite iniciar un Journey mediante una llamada a la REST API de Marketing Cloud. Este método es ideal para accionar un Journey desde una Cloud Page.
   
   ##### Pasos:
   1. **Configurar el Journey**
      - Ve a **Journey Builder** y selecciona **API Event** como la Entry Source.
      - Configura el Event Definition Key (un identificador único para tu API Event).
      - Publica el Journey.

   2. **Obtener el Access Token**
      - En la Cloud Page, usa AMPscript o Server-Side JavaScript (SSJS) para autenticarte y obtener un Access Token necesario para las llamadas a la REST API.
      - Ejemplo de AMPscript para obtener el token:
        ```ampscript
        %%[
        SET @payload = CONCAT('{
          "grant_type": "client_credentials",
          "client_id": "', @clientId, '",
          "client_secret": "', @clientSecret, '"
        }')

        SET @accessTokenResponse = HTTPPost2('https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/token', 'application/json', @payload, @httpStatus, @response)
        SET @accessToken = FIELD(@accessTokenResponse, "access_token")
        ]%%
        ```

   3. **Enviar los Datos a la API Event**
      - Con el Access Token, realiza una llamada POST a la REST API para accionar el Journey.
      - Ejemplo de llamada:
        ```ampscript
        %%[
        SET @eventKey = "YOUR_EVENT_DEFINITION_KEY"
        SET @payload = CONCAT('{
          "ContactKey": "', @contactKey, '",
          "EventDefinitionKey": "', @eventKey, '",
          "Data": {
            "attribute1": "', @value1, '",
            "attribute2": "', @value2, '"
          }
        }')

        SET @apiUrl = CONCAT('https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com/interaction/v1/events')
        SET @apiResponse = HTTPPost2(@apiUrl, 'application/json', @payload, @httpStatus, @response, @accessToken)
        ]%%
        ```

   4. **Configurar la Cloud Page**
      - Integra el AMPscript en la Cloud Page para ejecutar la lógica al cargarse o al enviar un formulario.

---

2. **Usar Data Extension como Entry Source**
   - Alternativamente, puedes usar una Data Extension (DE) como Entry Source y actualizarla desde la Cloud Page.

   ##### Pasos:
   1. **Configurar el Journey**
      - Selecciona una DE como Entry Source en el Journey.
      - Publica el Journey.

   2. **Actualizar la Data Extension desde la Cloud Page**
      - Usa AMPscript para insertar o actualizar registros en la DE.
      - Ejemplo:
        ```ampscript
        %%[
        INSERTDATA('YourDataExtension', 'Email', @email, 'FirstName', @firstName, 'LastName', @lastName)
        ]%%
        ```

   3. **Configurar la Cloud Page**
      - Implementa un formulario o lógica que inserte los datos en la DE.

   4. **Configurar un Automation (Opcional)**
      - Si el Journey no se acciona automáticamente, puedes configurar un Automation para que procese los registros nuevos en la DE.

---

3. **Caso de uso práctico**

Desarrolla también un caso de uso específico para una captación de clientes con lo comentado arriba, aplicando todo los pasos necesarios para conseguir el objetivo.

El objetivo: Captación de clientes no-clientes poseedores de placas solares a través de un juego. Cuando el usuario realiza el juego y gana, obtendrá la posibilidad de apretar un botón para ser renderizado a una thank you page donde enviará sus datos (a través de un form) en el cual también consentirá el consentimiento de los datos personales y al apretar el botón de submit para confirmar el envío de la información, se accionará el API Event que se encargará de comenzar el flujo de un Journey que a su vez enviará un correo con los datos recopilados de la cloudPage (las tarifas posibles son 4)
```

"Usa el siguiente formato de texto para la explicación:" !important

# Guía detallada para crear una Business Unit (BU) en Salesforce Marketing Cloud (SFMC):

1. #### **Accede a la Configuración de SFMC**:

   - Inicia sesión en tu cuenta de Salesforce Marketing Cloud.
   - Dirígete al **Setup** (Configuración) desde el menú principal.

2. #### **Navega a Business Units**:

   - En el panel de configuración, busca y selecciona **Business Units** bajo la sección de **Administration**.

3. #### **Crea una Nueva Business Unit**:

   - Haz clic en el botón **Create** (Crear).
   - **Nombre de la BU**: Introduce un nombre para tu BU. Por ejemplo, "MarketingGlobal".
   - **Parent Business Unit**: Selecciona **BXpert** como la BU padre.

4. #### **Configura la Información del Email**:

   - **Email Information**: Introduce la información necesaria para los correos electrónicos, como el nombre del remitente y la dirección de respuesta.
   - **Physical Address**: Proporciona la dirección física de la empresa.

     ```s
     MarketingGlobal Inc.
     1234 Calle Ficticia
     Ciudad, Estado, Código Postal
     País
     ```

5. #### **Configura las Preferencias de Desuscripción**:

   - Dentro de la configuración de la BU, busca la sección de **Subscription Management**.

   - Asegúrate de que la opción **Unsubscribe from this Business Unit only** (Desuscribirse solo de esta unidad de negocio) esté seleccionada. Esto garantiza que los suscriptores que se desuscriban lo hagan únicamente de esta BU y no de otras BUs en tu cuenta de SFMC.

6. #### **Guarda la Nueva BU**:

   - Revisa toda la información ingresada y haz clic en **Save** (Guardar).

7. #### **Verifica la Creación**:

   - Cierra sesión y vuelve a iniciar sesión para asegurarte de que la nueva BU aparezca en el selector de Business Units.

8. #### Resumen de Especificaciones

   - **Nombre de la BU**: MarketingGlobal
   - **BU Padre**: BXpert
   - **Email Information**: Configurado con el nombre del remitente y la dirección de respuesta.
   - **Physical Address**: Dirección física proporcionada.
   - **Preferencias de Desuscripción**: Configuradas para desuscribirse solo de esta BU.
