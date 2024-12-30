Explica esto:

```
La primera tarea como os comenté durante la clase es la siguiente:
Crear unas credenciales con los scopes de Journey y List and Subscribers marcadas.
Crear una Data Extensión que se pueda usar para disparar Journeys.
Seleccionar un Email que tengáis de otra práctica o crear uno sencillo con varios campos.
Editar la Data Extensión con dichos campos.
Crear un Journey con entrada por API, que use la DE creada como entrada y lance el email.
Pasar en el documento las credenciales, el Event Definition Key del Journey, los campos de la DE y el ID de vuestra BU.
Con ello yo lanzaré la llamada API a vuestro Journey como si fuera una empresa externa que se está "integrando" en vuestro sistema, y si está bien hechos veréis que ha entrado mi registro y se ha disparado el Journey.
Si todo funciona este parte de la práctica estará aprobada, y os pasaré la llamada API necesaria para disparar vuestro Journey.

EXTRA:
Para los que estéis interesados en practicar un paso más, podéis crear en Postman la llamada API y probar a disparar vuestro Journey, pero esto no califica para nota.

API Reference => https://developer.salesforce.com/docs/marketing/marketing-cloud/references/mc_rest_interaction/postEvent.html

Librería Postman => https://www.postman.com/salesforce-developers/salesforce-developers/request/gerh7b0/fire-entry-event

NOTA: Tener en cuenta que al llevar campos extra, si estos son obligatorios deben ir en el cuerpo de la llamada.

IMPORTANTE:
Si alguien quiere hacer esta segunda parte pero no tiene suficiones nociones técnicas que me lo diga, y lo vemos en una llamada.
```

Usa el siguiente formato de texto para la explicación:

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
