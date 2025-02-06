## (SLIDE 1, INTRO)
Hola y bienvenidos a todos, gracias por estar acá

Me llamo Marcos Lambir Torres y seré vuestro analista Salesforce favorito o lo intentaré

Vengo del mundo del desarrollo web y he participado en varios proyectos creando soluciones eficaces

Desde Endesa, surge la necesidad de crear una captación para Placas Solares y un Storytelling

Éste es el año de las energías solares porque es la primera vez en la historia que éstas serán el sustento principal en España y Endesa será el líder!

Vamos a verlo!

## (SLIDE 2, ÍNDICE)
He decidido agrupar ambos casos en un desarrollo único, creando una solución eficaz a 360º 

Hoy veremos porqué Endesa será imbatible éste año, analizando la propuesta de la siguiente forma:
- Veremos el flujo general del usuario
- El diseño de cada journey por caso de uso
- Las creatividades
- Dando pié a las demos
- Las ventajas
- Y dejaremos un espacio para preguntas

## (SLIDE 4, LOS CASOS A NIVEL FOCUS)

En el primer caso nos enfocaremos en sensibilizar el usuario con una gamificación
Lo fidelizaremos con la propuesta del ahorro en luz y carburante
Y también generaremos una venta cruzada a través de la App de Endesa utilizando el sistema de puntos en la existente en la opción PARA TI

El segundo caso busca obtener un feedback del usuario en relación con el servicio prestado, lo cual nos permite emprender acciones de retención para evitar la baja contractual

Esto crea una solución completa para cada usuario

## (SLIDE 5, DIAGRAMA DE FLUJO)

Con éste focus, pasamos al diagrama de flujo del proceso completo

Ex-cliente y no-cliente poseedores de placas solares

Desde la página de tarifas, el usuario interesado en el doble ahorro jugará a un juego simple donde obtendrá su ventaja solar. El proceso acciona un evento API para una comunicación rápida y eficaz. Se realizan comprobaciones para evaluar la apertura de los correos y la activación del contrato porque se genera un pre-contrato en la misma Cloud Page

Después de esto se espera entre 10 y 11 meses para volver a comunicar el usuario con la encuesta de satisfacción y realizar las acciones pertinentes

## (SLIDE 7, JOURNEY CASO DE USO 1)

A partir de éstos usuarios (indicarlos) el objetivo principal será aumentar la tasa de contratación en autoconsumo y los secundarios serán fidelizar el usuario y generar venta cruzada.
En éste caso será muy importante evaluar la tasa de apertura de los correos para evaluar la eficacia las comunicaciones

A nivel técnico, vemos la composición del journey en Salesforce, las estrellitas son debidas a la falta de permisos en el entorno JTalent

(breve explicación de los puntos importantes en el journey)

## (SLIDE 9, JOURNEY CASO DE USO 2)

El caso dos se enlaza con el primero a través del contrato activo enfocándose en la recepción de feedbacks para poder mejorar la implementación y poder asistir al usuario en cada caso intentando mejorar la fidelidad, dando una respuesta directa y efectiva evitando la baja

A nivel técnico el journey viene alimentado por una automation con la query SQL que ven en pantalla, evaluando las fechas de los contratos en un rango determinado para poder tomar cartas en el asunto tempestivamente. Evaluamos la apertura del correo y en caso negativo derivamos a Endesa el contacto para que se realice una llamada telefónica. De lo contrario, enviamos una comunicación WhatsApp con un mensaje por puntuación apoyándonos en un chatbot

## (SLIDE 12, CREATIVIDADES)

Nuestra Cloud Page viene accionada desde la página de tarifas de autoconsumo. Endesa nos habilita un CTA para cada tarifa.
Toda la estructura además de ser responsive está desarrollada en HTML, CSS y JS nativos, utilizando para el juego la API Canvas

Los correos acá son una parte importante. Se introduce una personalización sobre la img principal permitiendo crear texto sobre de ella. 
Los primeros dos son muy similares cambiando el texto
El 'recordatorio bis' además de dar la posibilidad de contratar fomenta la posibilidad de un contacto más personal
El último es un correo transaccional que comunica la activación del contrato
Además todos los correos también tienen código MSO para que se facilite la visión desde el entorno Microsoft

## (SLIDE 12, CREATIVIDADES)

El enfoque del correo es parecido a los anteriores. Acá se invita al usuario a realizar la encuesta en la Cloud Page nos presenta el form con unos input radio amigables y fáciles de ver

La respuesta en la ThankUPage será diferente dependiendo de la puntuación recibida favoreciendo la interacción con el usuario

## (SLIDE 16, DEMOS)

!Llegamos al momento de la verdad! Vamos a ver ambas demos en función

Desde la pag web de Endesa 
apreciamos las tarifas correspondientes
La tabla de precios
Los botones proporcionados por Endesa dejando fácil acceso a quien desee contratar directamente
y por otro lado, nuestro plus que llama la atención
Entramos, realizamos el juego, obtenemos la ventaja, se nos abre el formulario, mantenemos un botón con el resumen de lo que obtuvimos y enviamos la info con el evento API accionado con SSJS
Se guarda la info en la tabla que posee los campos de fechas de tipo text para poder manipularlos a gusto

En éste caso partiendo de la automation nos llega el correo para realizar la encuesta, guardamos los datos y se accionará la comunicación WhatsApp o el caso de Endesa

## (SLIDE 19, VENTAJAS)

La propuesta además de las tarifas existentes añade una cantidad de dinero bajo forma de cashback dentro de la App de entesa con el sistema de puntos para que sea utilizada en las gasolineras adheridas o bajo la opción PARA TI

Todo esto proporcionará un mayor porcentaje de clientes
Incrementando la ganancia por excedentes debido al mayor número de clientes
Impactamos sobre un nicho de personas con Placas Solares y Vehículos eléctricos
Diversificamos ingresos con las ventas cruzadas apoyándonos en PARA TI
Reducimos los costes al utilizar Cloud Page, Apps y WhatsApp
Y mejoramos el valor de la marca bajo el movimiento "green" de éste año
haciendo a el líder absoluto

## (PREGUNTAS 5min)

## (GRACIAS)


