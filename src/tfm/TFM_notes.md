# TFM PLACAS SOLARES ENDESA para Particulares y Empresas

## Campaign Limpia el planeta!

### Placas Solares (primer caso de uso)

- Gamificación en modal:

  - Opción 1: Que el usuario enchufe su placa solar dentro de un recuadro en la pag web (después de confirmar política de privacidad) y que aparezca un planeta más limpio o un mensaje de felicitación
  - Opción 2: Que el usuario limpie un recuadro que figura un planeta sucio y que cuanto más limpie mejor precio tendrá
- Captación poseedora de placas solares desde el acceso público en la página de ENDESA. Para no-cliente.
- Nos lleva a la pag de tarifas y ésta nos proporciona un modal con una gamificación de LIMPIA EL PLANETA la cual proporciona un porcentaje de descuento del 20%(ENDESA proporciona un max de descuento hipotético). Coste de captación cero durante X tiempo (1 año)
- La información recibida a través de un nologged desde from en CloudPage para crear las tablas:

  - ClientesLead(email, tel, isContactable, nombre, apellidos) Sentable
  - DescuentosCampaign(descuentoGanado)
  - ProductosPlacasSolares(nombreProducto, precio).
- Creación de contacto real "contactKey"
- API Event (conexión de DE con Journey). Éste Journey con Split y envío de correo comercial por cada prod para finalizar compra. "REAL TIME"
- Se realiza la solicitud de Contrato que comunique a ENDESA que el usuario desea contratar (Att. cliente y cierre contrato). Normalmente se informa al CRM y se realiza Campaign de Captación.
- Espera de 3 días
- Split para comprobar el subscriberKey en la tabla de ContratosVigentes (inventado) (id_contrato, id_ususario, num_contrato). De lo contrario, envío el mismo email con distinto asunto "Última fecha para contratar con 20%".
- Split comprobando si el usuario
- Engagement Split si no abre la comunicación enviar un reminder

### Feedback (segundo caso de uso) Story-Telling

- Después de la instalación de las placas
- Al año de ser cliente se manda encuesta (caritas) se envía info de riesgos de baja a la atención al cliente de Endesa y se genera posible
- Automation que evalúa a través de SQL y de la DE ContratosVigentes cada día fechaContrtación -1 año -> otro Journey que enviará el email con caritas

#### ¿Qué tengo para antes de ser cliente?

- Logs

  - Recibir periódicamente información sobre cómo se resuelven los eventos
  - Analytics

#### ¿Qué tengo mientras soy cliente?

- Logs

  - Recibir periódicamente información sobre cómo se resuelven los eventos
  - Analytics

#### ¿Qué tengo para después de ser cliente?

- Logs

  - Recibir periódicamente información sobre cómo se resuelven los eventos
  - Analytics

## Objetivos y analítica

#### Tratar de aumentar significativamente que tanto empresas, clientes y no-clientes adhieran al programa

- Tasa de participación

#### Aumentar la cantidad de contratos realizados

- Tasa de firma de nuevos contratos
- Mejora de contratos para empresas que ya tengan dicho contrato
- Insight, opens, sends


## Pasos realizados

- Crear BU: TFM_Endesa_MarcosLambirTorres

- Configuración de la seguridad para los correos y el servidor de envío: Se debería crear un dominio apósito para estas comunicaciones con configuración SAP y una dirección de correo a posta (ej. info@endesa.comunicaciones.com)

- Crear Roles para la BU y Usuarios (éstos roles serán designados para cada departamento, estará quien dirige el design de las comunicaciones, quien dirigirá el apartado de márketing, quien será el director supremo, etc...)

- Tanto las comunicaciones Comerciales como Transaccionales se realizarán desde la misma BU para facilitar el desarrollo y la maquetación de las comunicaciones teniendo en cuenta que cada comunicación tendrá su Send Classification.

- Se registran todos los dominios necesarios para la BU inherentes a información para el cliente, comunicaciones transaccionales, comunicaciones comerciales y soporte. De éste modo, se evitan complicaciones en la entrega de comunicaciones utilizando Salesforce porque permite diferenciar dichas comunicaciones.

- Se realiza la conexión de la ORG (CRM) para futuros intercambios de datos.

- Se crear un Send Classification con su Sender Profile, Delivery Profile y Reply Mail Management para cada comunicación. Tendremos configuración para comunicaciones informativas, comerciales y transaccionales.

- Configurar FTP con email marcos.lambir@jakala.com y pass asfdasdf123412342# para poder utilizar un servidor para intercambiar archivos e información.

- Crear Usuarios con ContactKey Real para poder utilizar la API de Salesforce: Se crearán 4 usuarios considerando el envío de 4 productos distintos y así poder ver la ejecución de todo el flujo de la campaña.
  1. subscriber_tfm_01 | marcos.lambir@jakala.com
  2. subscriber_tfm_02 | marcos.lambir@jakala.com
  3. subscriber_tfm_03 | marcos.lambir@jakala.com
  4. subscriber_tfm_04 | marcos.lambir@jakala.com

- Crear DEs para el caso de uso:
