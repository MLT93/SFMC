# TFM PLACAS SOLARES ENDESA para Particulares y Empresas

## Limpia el planeta!

### Placas Solares (primer caso de uso)

- Gamificación en modal:
  - Opción 1: Que el usuario enchufe su placa solar dentro de un recuadro en la pag web (después de confirmar política de privacidad) y que aparezca un planeta más limpio o un mensaje de felicitación
  - Opción 2: Que el usuario limpie un recuadro que figura un planeta sucio y que cuanto más limpie mejor precio tendrá
- Captación poseedora de placas solares desde el acceso público en la página de ENDESA. Para cliente y no-cliente.
- Nos lleva a la pag de tarifas y ésta nos proporciona un modal con una gamificación de LIMPIA EL PLANETA la cual proporciona un porcentaje de descuento del 20%(ENDESA proporciona un max de descuento hipotético). Coste de captación cero durante X tiempo (1 año)
- Se rellena el form
- Información recibida a través de un nologged desde from en CloudPage (email, tel, prod, isContactable(privacy), nombre, apellidos, descuentoGanado). Esto se almacena en una DE Sendable
- Crear tabla Contratos para cada usuario (id_contrato, id_ususario, num_contrato) SQL
- API Event Journey con Split y envío de correo comercial por cada prod para finalizar compra.
- Espera de 3 días
- Split para comprobar si el campo numContrato de la tabla Contratos está relleno. De lo contrario, envío el mismo email con distinto asunto
- Update Contact para actualizar tabla
- Engagement Split si no abre la comunicación enviar un reminder

### Feedback (segundo caso de uso) Story-Telling

- Después de la instalación de las placas
- Al año de ser cliente se manda encuesta (caritas) se envía info de riesgos de baja a la atención al cliente de Endesa y se genera posible

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
