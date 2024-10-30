Explica esto:

```
1. Vamos a crear un email y con un bloque HTML.
2.Crearemos un bloque de AMPScript con un par de variables (@n y @a) con nuestro nombre y apellido.
3.Crearemos un bloque de SSJS donde recuperaremos las variables y las mostraremos con Write()
4.Sobrescribiremos las variables de AMPScript por ‘Hola’ y ‘Mundo’.
5.Crearemos otro bloque AMPScript donde sobre una variable nueva concatenaremos las variables para hacer la frase ‘Hola Mundo!’ y lo visualizaremos.
6. Nota: Esta multi ejecución de bloques de código de diferentes lenguajes con comunicación entre ellos tiene un límite, por lo que hay que optimizar los procesos que se quieran realizar.
7. Refs.: https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ssjs_utilitiesVariable.html
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
