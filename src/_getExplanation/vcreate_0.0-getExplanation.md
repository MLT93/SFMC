Explica esto:

```
Componer un Jounrey Builder desde cero:
1. El caso de uso es un Journey de cumpleaños con los siguientes requerimientos del cliente:
2. La comunicación (vía email) del envío se tiene que diferenciar según el género, hombre o mujer, y si tiene más o menos de 40 años.
3. La creatividad por defecto será la correspondiente para hombres menores de 40 años.
4. Si la persona tiene 40 años, se le enviará la creatividad de menos de 40.
5. Os adjunto una base de datos que será la fuente de datos para este caso de uso.
6. Tened en cuenta que hay que crear los HTML, la Data Extension o Data Extensions, según lo veáis necesario, el Automation y el Journey. 
7. Como ya vimos, no hay una única manera válida de sacar el caso de uso, echadle imaginación e id escogiendo aquella manera que consideréis más buena, más óptima o que os convenza más. Y sobre todo aprended mucho en el proceso.
8. El objetivo principal del ejercicio es que seáis capaces de realizar un flujo completo, pasando desde el entendimiento de requerimientos, el diseño y el desarrollo de un caso de uso real.
```

Replica este modelo para la explicación con su indentación, letra y tamaño:

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
