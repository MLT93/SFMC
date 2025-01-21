Explica esto:

```
La actividad **Fire Event** no solicita directamente el **Event Definition Key** porque esta configuración se gestiona en el **Journey Builder** al configurar el **Data Extension Entry Source**. Aquí está cómo funciona realmente y cómo debes configurarlo correctamente:

---

### **Configuración en Automation Studio**
1. **Start Source: Schedule**
   - Selecciona el **Schedule** como disparador para definir cuándo debe ejecutarse la Automation.

2. **Agregar actividad "Fire Event"**:
   - Arrastra la actividad **Fire Event** al flujo de la Automation.
   - En esta actividad:
     - Simplemente seleccionas la **Data Extension** que contendrá los datos que deseas enviar al Journey.
     - Esta es la Data Extension que el Journey está monitoreando para activar entradas.

3. **Guarda y activa la Automation.**

---

### **Configuración en Journey Builder**
1. **Selecciona la Entry Source como "Data Extension Entry Event":**
   - Configura el **Entry Source** del Journey como **Data Extension Entry Event**.
   - Durante la configuración:
     - Selecciona la **Data Extension** que configuraste en la actividad **Fire Event** de la Automation.
     - Define las reglas de entrada (opcional). Por ejemplo, podrías filtrar registros según ciertas condiciones antes de que ingresen al Journey.

2. **Publica el Journey:**
   - Asegúrate de que el Journey esté en estado **Published** antes de que la Automation se ejecute. Si el Journey no está publicado, no podrá recibir los contactos enviados desde la Data Extension.

---

### **Cómo Funciona Este Flujo**
1. La **Automation** se ejecuta según el Schedule configurado.
2. La actividad **Fire Event** envía los datos de la Data Extension al sistema de entrada de eventos de Journey Builder.
3. El **Journey** escucha los nuevos registros en la Data Extension especificada y los procesa según las reglas configuradas.

---

### **Puntos Importantes**
- **Data Extension Entry Event:** La configuración clave de este flujo está en el Journey. Esta opción le indica al Journey qué Data Extension debe escuchar.
- **Entry Data Validations:** La Data Extension debe estar configurada como **Sendable**, con una columna **Primary Key** mapeada como **ContactKey**.
- **Orden de Configuración:** Siempre publica el Journey antes de ejecutar la Automation.

Si configuraste la misma **Data Extension** en **Fire Event** y en el Entry Event del Journey, el flujo funcionará sin necesidad de especificar un **Event Definition Key** manualmente.
```

ES IMPERATIVO QUE UTILICES EL SIGUIENTE FORMATO DE TEXTO PARA REALIZAR LA EXPLICACIÓN:

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
