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
