document.addEventListener('DOMContentLoaded', (e) => {
  /* CLASS */
  class CanvasTemplate {
    // ATTRIBUTES
    id;
    posX;
    posY;
    width;
    height;
    img;
    endX;
    endY;
    lineWidth;
    color;
    firstPoint;
    secondPoint;
    defaultImg = new Image();
    visible;

    // CONSTRUCTOR
    constructor(
      id = 'Undefined',
      posX = 0,
      posY = 0,
      width = 0,
      height = 0,
      img = '/src/tfm/web/src/assets/error_img.png',
      endX = 0,
      endY = 0,
      lineWidth = 0,
      color = '',
      firstPoint = { x: 0, y: 0 },
      secondPoint = { x: 0, y: 0 },
      visible = true,
    ) {
      this.id = id ?? null;
      this.posX = posX ?? null;
      this.posY = posY ?? null;
      this.width = width ?? null;
      this.height = height ?? null;
      this.img = img ?? null;
      this.endX = endX ?? null;
      this.endY = endY ?? null;
      this.lineWidth = lineWidth ?? null;
      this.color = color ?? null;
      this.visible = visible ?? null;

      // Creación de los objs de coordenadas
      if (firstPoint !== undefined) {
        this.firstPoint = firstPoint;
      }
      if (secondPoint !== undefined) {
        this.secondPoint = secondPoint;
      }

      // Imagen de error
      this.defaultImg.src = '/src/tfm/web/src/assets/error_img.png';
    }

    // METHODS
    effectRotateImg(ctx, speed = 0.05) {
      if (!this.visible) return;

      // Si no se pasa un valor de rotación, inicializamos en 0
      var rotation = 0;

      // Actualizar el valor de rotación al llegar a 360
      rotation += speed;
      if (rotation >= 360) rotation = 0; // Restablecer después de dar una vuelta completa

      ctx.save();
      ctx.translate(this.posX + this.width / 2, this.posY + this.height / 2);
      ctx.rotate((rotation * Math.PI) / 180); // Convertir grados a radianes
      ctx.translate(-(this.posX + this.width / 2), -(this.posY + this.height / 2));

      // Restaurar el estado del canvas
      ctx.restore();
    }

    effectRotateImg(ctx, speed = 1) {
      if (!this.visible) return;

      // Creamos prop de rotación para que almacene el estado global del valor
      if (typeof this.rotation === 'undefined') {
        this.rotation = 0;
      }

      // Actualizar el valor de rotación
      this.rotation += speed;
      if (this.rotation >= 360) {
        this.rotation = 360; // Reiniciar después de una vuelta completa
      }

      ctx.save(); // Guardar el estado del objeto
      ctx.translate(this.posX + this.width / 2, this.posY + this.height / 2);
      ctx.rotate((this.rotation * Math.PI) / 180); // Convertir grados a radianes
      ctx.translate(-(this.posX + this.width / 2), -(this.posY + this.height / 2));
      ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
      ctx.restore(); // Restaurar el estado del objeto
    }

    // STATIC METHODS
    static drawImg = (ctx, arr) => {
      // Imgs: Dibujar imágenes en Canvas
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        // Se dibuja si hay contexto, existe el array y el elemento está visible
        if (ctx && arr && element.visible) {
          // Si la img está cargada dibujo
          if (element.img.complete) {
            // drawImage(image, posX, posY, width, height, recorteImgEnX, recorteImgEnY, recorteWidth, recorteHeight) syntax is used to clip the source image, before it is placed on the canvas.
            ctx.drawImage(element.img, element.posX, element.posY, element.width, element.height);
          } else {
            // De lo contrario, asigno el evento onload
            element.img.onload = () => {
              if (element.img.complete) {
                ctx.drawImage(element.img, element.posX, element.posY, element.width, element.height);
              }
            };
          }
        }
      }
    };

    static drawCanvasElement = (ctx, arr) => {
      // Elementos: Dibujar lineas y curvas en Canvas
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (ctx && arr) {
          ctx.beginPath();
          // Punto de inicio del elemento
          ctx.moveTo(element.posX, element.posY);
          // Curvatura del elemento
          ctx.bezierCurveTo(
            element.firstPoint.x, // Primer controlPoint X (curvatura)
            element.firstPoint.y, // Primer controlPoint Y (curvatura)
            element.secondPoint.x, // Segundo controlPoint X (curvatura)
            element.secondPoint.y, // Segundo controlPoint Y (curvatura)
            element.endX, // Final del elemento en X
            element.endY, // Final del elemento en Y
          );
          ctx.lineWidth = element.lineWidth;
          ctx.strokeStyle = element.color;
          ctx.stroke();
          ctx.closePath();
        }
      }
    };

    static updateDirection = (obj, speed, directionX = '+', directionY = '+') => {
      if (!obj) return;

      const validDirections = ['+', '-'];

      // Validar direcciones
      if (!validDirections.includes(directionX) || !validDirections.includes(directionY)) {
        throw new Error("directionX and directionY must be '+' or '-'");
      }

      const modifierX = directionX === '+' ? 1 : -1;
      const modifierY = directionY === '+' ? 1 : -1;

      // Actualizar las posiciones
      obj.posX += modifierX * speed;
      obj.posY += modifierY * speed;
    };

    static updatePosition = (obj, positions) => {
      // Mueve el objeto actualizando las posiciones dadas
      if (obj && positions) {
        Object.entries(positions).forEach(([key, value]) => {
          // Si la propiedad es un objeto anidado, aplica recursivamente
          if (typeof obj[key] === 'object' && obj[key] !== null) {
            CanvasTemplate.updatePosition(obj[key], value); // Llamada recursiva
          } else {
            obj[key] = value;
          }
        });
      }
    };
  }

  /* CANVAS */
  const ctx = document.getElementById('gameCanvas').getContext('2d');
  ctx.canvas.width = 600;
  ctx.canvas.height = 400;

  // BACKGROUND CANVAS
  const cW = ctx.canvas.width;
  const cH = ctx.canvas.height;
  ctx.canvas.style.background = '#57d4ef';
  ctx.canvas.style.borderRadius = '0.2rem';
  ctx.fillRect(0, 0, cW, cH);

  // REFERENCIAS DE IMGs
  const imgBackground = document.getElementById('treesBackground');
  const imgPanelSolar = document.getElementById('panelSolar');
  const imgPlanetaSucio = document.getElementById('planetaSucio');
  const imgPlanetaLimpio = document.getElementById('planetaLimpio');
  const imgEnchufe = document.getElementById('enchufe');
  const imgSchuko = document.getElementById('schuko');

  // BORDE CANVAS
  ctx.canvas.style.border = '1px solid #c2cddd'; // Para delimitar el Canvas

  // CREACIÓN DE IMGs
  const objBackground = new CanvasTemplate('background', 0, 0, cW, cH, imgBackground);
  const objPanel = new CanvasTemplate('panel_solar', cW - 270, 105, 300, 300, imgPanelSolar);
  const objPlanetaSucio = new CanvasTemplate('planetaSucio', 130, 50, 160, 160, imgPlanetaSucio);
  const objPlanetaLimpio = new CanvasTemplate(
    'planetaLimpio',
    130,
    53,
    160,
    160,
    imgPlanetaLimpio,
    null,
    null,
    null,
    null,
    null,
    null,
    false,
  );
  const objEnchufe = new CanvasTemplate('enchufe', 0, 240, 130, 70, imgEnchufe);
  const objSchuko = new CanvasTemplate('schuko', 70, 300, 55, 70, imgSchuko);

  // CREACIÓN DE ELEMENTOS
  const objCable = new CanvasTemplate(
    'cable',
    230,
    cH,
    5,
    10,
    null, // Img
    objEnchufe.endX + 97, // Punto final del cable en X
    350, // Punto Final del cable en Y
    4, // Grosor de la línea
    '#5f5f5f',
    { x: 100, y: 300 }, // Punto de la primera curvatura
    { x: 100, y: 450 }, // Punto de la segunda curvatura
  );

  // ARRAYS DE REFERENCIA
  const arrCanvasImgs = [objBackground, objPanel, objPlanetaSucio, objPlanetaLimpio, objEnchufe, objSchuko];
  const arrCanvasElements = [objCable];

  /* FUNCIÓN PARA PINTAR (esto se acciona cuando se abre el modal) */
  const animateCanvas = () => {
    // Limpio el lienzo
    ctx.clearRect(0, 0, cW, cH);

    // Dibujo los elementos
    CanvasTemplate.drawImg(ctx, arrCanvasImgs);
    CanvasTemplate.drawCanvasElement(ctx, arrCanvasElements);

    // Acciono efecto visual
    objPlanetaLimpio.effectRotateImg(ctx);

    // Vuelvo a pintar el lienzo continuamente
    requestAnimationFrame(animateCanvas);
  };

  /* MODAL */
  const openModalButton = document.getElementById('openModal');
  const modal = document.getElementById('modal');
  const closeModalButton = document.getElementById('closeModal');

  // ABRIR MODAL
  openModalButton.addEventListener('click', (e) => {
    modal.style.display = 'flex';

    // Se ejecuta el dibujo cuando se abre el modal
    animateCanvas();

    /* ESPACIO PEGAJOSO EN EL CANVAS (PARA MOVER OBJs DENTRO DE ÉL) */
    const rect = ctx.canvas.getBoundingClientRect(); // Esto corresponde a la distancia entre el inicio del canvas y la ventana del dispositivo

    const mousePosition = (e) => {
      return {
        // Restamos a las coordenadas del mouse las coordenadas del Canvas (el punto inicial es la esquina superior izquierda. Ése es el punto 0.0)
        x: e.offsetX - rect.left,
        y: e.offsetY - rect.top,
      };
    };

    let isMoving = false; // Sirve para referenciar si el mouse tiene algo agarrado y está en movimiento después del primer 'click'
    let offsetX = 0; // Distancia entre el obj y el cursor del mouse en X
    let offsetY = 0; // Distancia entre el obj y el cursor del mouse en Y

    // TOMA DE LA POSICIÓN DEL MOUSE DENTRO DEL CANVAS
    ctx.canvas.addEventListener('mousedown', (e) => {
      var mp = mousePosition(e);

      isMoving = true;
      offsetX = mp.x - objSchuko.posX;
      offsetY = mp.y - objSchuko.posY;
    });

    // ACTUALIZA LA POSICIÓN DEL OBJ MIENTRAS SE MUEVE EL MOUSE + VISIBILIDAD DE PLANETA LIMPIO Y DESCUENTO
    ctx.canvas.addEventListener('mousemove', (e) => {
      if (isMoving) {
        console.log('¡OBJ enganchado!');

        var mp = mousePosition(e);

        imgSchuko.style.cursor = 'pointer';

        // Actualiza la posición del objeto
        objSchuko.posX = mp.x - offsetX;
        objSchuko.posY = mp.y - offsetY;

        // Detectar si el Schuko está cerca del enchufe
        const distance = Math.sqrt(
          Math.pow(objSchuko.posX - objEnchufe.posX, 2) + Math.pow(objSchuko.posY - objEnchufe.posY, 2),
        );

        if (distance < 70) {
          // Distancia exacta para que se pegue el cable al enchufe
          objSchuko.posX = objEnchufe.posX + 66;
          objSchuko.posY = objEnchufe.posY + 15;

          isMoving = false;

          // Hacer aparecer el planeta limpio (por defecto accionará el efecto de effectRotateImg())
          objPlanetaLimpio.visible = true;
          // Mostrar Descuento
          const descuento = document.getElementById('descuento');
          descuento.style.transition = 'all 0.7s ease 0.3s';
          descuento.style.fontWeight = '600'
          descuento.style.color = 'var(--color-magenta)'
          descuento.style.visibility = 'visible';
        }

        // Actualizar posición elementos
        CanvasTemplate.updatePosition(objSchuko, offsetX, offsetY);
        CanvasTemplate.updatePosition(objCable, {
          posX: objCable.posX, // Punto inicial en X
          posY: objCable.posY, // Punto inicial en Y
          firstPoint: {
            x: objSchuko.posX + objSchuko.width / 2 + 30, // Curvatura ajustada
            y: objSchuko.posY + objSchuko.height / 2 + 50,
          },
          secondPoint: {
            x: objSchuko.posX + objSchuko.width / 2 + 10, // Segunda curvatura ajustada
            y: objSchuko.posY + objSchuko.height / 2 + 50,
          },
          endX: objSchuko.posX + 29, // Final en X
          endY: objSchuko.posY + 70, // Final en Y
        });

        // Re-dibuja el canvas
        animateCanvas();
      }
    });

    // STOP AL MOVIMIENTO Y EL ARRASTRE
    ctx.canvas.addEventListener('mouseup', (e) => {
      isMoving = false;
    });
  });

  // CERRAR MODAL CON BOTÓN
  closeModalButton.addEventListener('click', (e) => {
    if (modal.style.display === 'flex') {
      modal.style.display = 'none';
      ctx.clearRect(0, 0, cW, cH);
    }
  });

  // CERRAR MODAL HACIENDO CLICK FUERA DE ÉL
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      ctx.clearRect(0, 0, cW, cH);
    }
  });
});
