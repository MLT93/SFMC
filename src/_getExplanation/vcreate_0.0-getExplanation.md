Explica esto:

```
Landing de baja

En el email realizado en el caso de uso de la encuesta de satisfacción, incluir un enlace a la landing de baja.
La landing de baja debe pedir al usuario el motivo de la misma, proporcionando distintas opciones y dando
la posibilidad al usuario de escribir el motivo.

La baja se reflejará en All Subscribers y se recogerá en
una data extension junto con el jobId del email origen de
la baja.
Una vez dado de baja, no se dará la posibilidad de
resuscribirse ni de volver a darse de baja desde ningún
email; se mostrará un mensaje.
Leer la siguiente documentación:
https://developer.salesforce.com/docs/marketing/mar

keting-
cloud/guide/unsubscribing_and_logging_an_unsubeve

nt_with_a_logunsubevent_execute_call.html
https://gist.github.com/zuzannamj/17f78dddc9ceb3a0c7ec80092b4efca5
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
