
NO IMPACTAMOS A:
- Personas con deudas
- Si la persona busca info para darse de baja del servicio
- Incidencias en facturas
- Lista Robinson
- Personas dadas de baja
- RGPD (Reglamento General de Protección de Datos)


En el mes 10 del contrato hay un pico de bajas en Endesa.

RETENCIÓN:
1. Aproximadamente a los 9 meses podemos mandar una encuesta al usuario (ad hoc) para ver su satisfacción y que nos propongan mejoras.

En base a esto:

	1. Programa de fidelización para evitar bajas cerca del mes 10 y conseguir que se quede.

	2. Acción de rebaja sobre la factura (dependiendo del cliente y qué problemas tiene). Elegir una cantidad de descuento en base a esto.

	3. Comunicación de WhatsApp para agradecer su interés y avisar sobre el proceso acordado o establecido.

2. Reimpactar al usuario después de X tiempo_

	1. Sería interesante enviar un correo para el cumpleaños del usuario que establezca el ahorro obtenido después de adherir a esta campaña, más allá de las felicitaciones. Además, se podría añadir otra campaña para reducir los gastos eléctricos en casa u ofertar algún suministro más haciendo incapié sobre las ventajas de estar con Endesa.

CAPTACIÓN:
tarifa más barata que se posee (Conecta). Ver en CNMC (ranking de tarifas de todas las comercializadoras)
Renderizar el usuario con email al tarificador de Endesa

*** Manejar correctamente los condicionales (ej. si el usuario evita hacer click en el enlace del email, si tampoco hace click en el botón CTA, etc...)
*** Generar registros manualmente (cargar CSV a una DE) o a través de Postman


JOURNEY 

Cuando se activa se hace una foto con esos datos "Journey Data" (los datos estáticos) y empieza a funcionar el Journey. Posteriormente, es necesario tirar de DE relacionadas "Contact Data" (los datos actualizados) para utilizar datos reales. El ejemplo sería: Tenemos un Journey que dura 6 meses y al empezar (la primera foto) al Subscriber se le puede enviar emails. Después de 3 meses, quizás el usuario se agregó a la lista Robinson, por lo tanto ya será imposible contactarlo. Utilizar los datos actualizados nos facilita obtener esa información y poder obrar en consecuencia.

*Siempre un Journey tendrá una Campaña asociada

0. DE de entrada (los subscribers que serán contactados)
1. Saturación (Decision Split "IF"). Esto elige un camino u otro si el Subscriber (usuario) ha recibido demasiados correos o menos.
2. Canal (Decision Split "IF"). Se elige el canal de envío (email, push, sms, etc...)

3. Grupo de Control (Random Split). Esto "lamina" los envíos que recibirán los Subscribers (evita enviar todo de golpe). Controlar bien siempre los períodos y los tiempos, así realizamos bien cada envío
4. Einstein STO (Elige automáticamente la mejor hora de envío). Esto se hace siempre antes de un envío de email o push. Jamás se utiliza junto a una "laminación hecha en el Journey" porque omite la laminación creada, sería inútil (hay que elegir entre una "laminación" o un Einstein STO). Otra cosa es si se hace una "laminación por SQL"

5. 1 Day (Wait by duration). Siempre 1 antes del envío y 1 después
6. (Engagement Split). Esto realiza un re-impacto
7. (Object Activity). Se utiliza para que nos genere un código que captura el registro de un campo de la DE de entrada
8. (Update Contact). Después del Object Activity podremos actualizar la fecha o el cuándo ha entrado el Subscribers dentro del CRM a través del utilizo de ese código generado (se pone el código en el apartado del valor del campo). Viene bien para saber qué camino ha tomado el usuario y para actualizar el campo de "Acumulados". Si cambia la DE de entrada o se cambia la Automation asociada, volver a setear el _ContactKey con el nuevo código generado.
