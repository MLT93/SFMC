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
    firstPoint = new Object();
    secondPoint = new Object();
    defaultImg = new Image();

    // CONSTRUCTOR
    constructor(id, posX, posY, width, height, img, endX, endY, lineWidth, color, firstPoint, secondPoint) {
      this.id = id || null;
      this.posX = posX || null;
      this.posY = posY || null;
      this.width = width || null;
      this.height = height || null;
      this.img = img || null;
      this.endX = endX || null;
      this.endY = endY || null;
      this.lineWidth = lineWidth || null;
      this.color = color || null;

      // Creación de los objs de coordenadas
      if (firstPoint) {
        this.firstPoint.x = firstPoint.x || null;
        this.firstPoint.y = firstPoint.y || null;
      }
      if (secondPoint) {
        this.secondPoint.x = secondPoint.x || null;
        this.secondPoint.y = secondPoint.y || null;
      }

      // Imagen de error
      this.defaultImg.src = '/src/tfm/web/src/assets/error_img.png';
    }

    // STATIC METHODS
    static drawImg = (ctx, arr) => {
      // Imgs: Dibujar imágenes en Canvas
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (ctx && arr) {
          // Si la img está cargada dibujo
          if (element.img.complete) {
            // drawImage(image, posX, posY, width, height, recorteImgEnX, recorteImgEnY, recorteWidth, recorteHeight) syntax is used to clip the source image, before it is placed on the canvas.
            ctx.drawImage(element.img, element.posX, element.posY, element.width, element.height);
          } else {
            // De lo contrario, asigno el evento onload
            element.img.onload = () => {
              ctx.drawImage(element.img, element.posX, element.posY, element.width, element.height);
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

    /*     // hitTest: Detección de si el mouse está sobre el objeto
    static hitTest = (mouseX, mouseY, element) => {
      return (
        mouseX >= element.posX &&
        mouseX <= element.posX + element.width &&
        mouseY >= element.posY &&
        mouseY <= element.posY + element.height
      );
    };

    // Espacio Pegajoso: Mover objeto al área objetivo
    static stickyArea = (element, targetX, targetY, threshold = 50) => {
      const distance = Math.sqrt(Math.pow(element.posX - targetX, 2) + Math.pow(element.posY - targetY, 2));
      if (distance < threshold) {
        element.posX = targetX - element.width / 2;
        element.posY = targetY - element.height / 2;
      }
    }; */
  }

  /* CANVAS */
  const ctx = document.getElementById('gameCanvas').getContext('2d');
  ctx.canvas.width = 600;
  ctx.canvas.height = 400;

  // BACKGROUND
  const cW = ctx.canvas.width;
  const cH = ctx.canvas.height;
  ctx.fillStyle = '#eee';
  ctx.fillRect(0, 0, cW, cH);

  // REFERENCIA DE IMGs
  // const imgBackground = document.getElementById('planetaLimpio');
  const imgPanelSolar = document.getElementById('panelSolar');
  // const imgCasaPanel = document.getElementById('casaPanel');
  // const imgEnchufe = document.getElementById('planetaLimpio');
  // const imgConector = document.getElementById('planetaLimpio');
  const imgPlanetaLimpio = document.getElementById('planetaLimpio');
  const imgPlanetaSucio = document.getElementById('planetaSucio');

  // BORDE CANVAS
  ctx.canvas.style.border = '1px solid black'; // Para ver el Canvas

  // CREACIÓN DE IMGs
  const objPanel = new CanvasTemplate('panel_solar', cW - 400, 100, 300, 300, imgPanelSolar);
  const objPlanetaSucio = new CanvasTemplate('planetaSucio', 15, 14, 160, 160, imgPlanetaSucio);
  const objPlanetaLimpio = new CanvasTemplate('planetaLimpio', 10, 10, 170, 170, imgPlanetaLimpio);

  // CREACIÓN DE ELEMENTOS
  const panelEndX = objPanel.posX + objPanel.width - 23;
  const panelEndY = objPanel.posY + objPanel.height;
  const objCable = new CanvasTemplate(
    'cable',
    panelEndX + 2,
    panelEndY - 4.5,
    5,
    10,
    null,
    panelEndX + 30, // Final del cable en X
    panelEndY - 70, // Final del cable en Y
    4,
    '#5f5f5f',
    { x: panelEndX + 90, y: panelEndY + 80 }, // Primera curvatura
    { x: panelEndX - 35, y: panelEndY + 10 }, // Segunda curvatura
  );

  // ARRAYS DE REFERENCIA
  const arrCanvasImgs = [objPanel, objPlanetaSucio, objPlanetaLimpio];
  const arrCanvasElements = [objCable];

  /*   // MOVER OBJs
  let isDragging = false; // Sirve para saber si el mouse tiene el objeto bajo 'click'
  let offsetX = 0; // Distancia entre el obj y el cursor del mouse en X
  let offsetY = 0; // Distancia entre el obj y el cursor del mouse en Y */

  /*   // MANEJO DEL ARRASTRE
  canvas.addEventListener('mousedown', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    // Verifica si el click es dentro del obj deseado
    if (CanvasTemplate.hitTest(mouseX, mouseY, conector)) {
      isDragging = true;
      offsetX = mouseX - conector.posX;
      offsetY = mouseY - conector.posY;
    }
  });

  // MOVIMIENTO RATÓN
  canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const mouseX = e.offsetX;
      const mouseY = e.offsetY;
      conector.posX = mouseX - offsetX;
      conector.posY = mouseY - offsetY;

      // Verificar el área sticky y mover el objeto si está cerca del obj objetivo
      CanvasTemplate.stickyArea(
        conector,
        enchufe.posX + enchufe.width / 2,
        enchufe.posY + enchufe.height / 2,
        50,
      );
    }
  }); */

  // DETENER ARRASTRE
  /*   canvas.addEventListener('mouseup', () => {
    isDragging = false;
  }); */

  // PINTAR
  const animateCanvas = () => {
    // Limpio el lienzo
    ctx.clearRect(0, 0, cW, cH);
    CanvasTemplate.drawImg(ctx, arrCanvasImgs);
    CanvasTemplate.drawCanvasElement(ctx, arrCanvasElements);

    // Coordino la animación para mejorar el rendimiento
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
  });

  // CERRAR MODAL CON BOTÓN
  closeModalButton.addEventListener('click', (e) => {
    if (modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });

  // CERRAR MODAL HACIENDO CLICK FUERA DE ÉL
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
