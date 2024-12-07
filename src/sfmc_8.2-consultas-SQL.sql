-- AS => Alias para definir el nombre que se utiliza en la consulta. Es una forma más fácil de trabajar
/* Ten en cuenta que un Alias sólo se usa para nombrar los campos en `los `SELECT` y para nombrar las tablas en los `FROM` */
/* En un `WHERE` el Alias es innecesario */
-- LIKE => Busca patrones específicos dentro de registros de tipo texto
/* % = Representa cero, uno o múltiples caracteres */
/* * = Representa un solo carácter */
SELECT
  IDCliente,
  Nombre
FROM
  SQL * Cliente
WHERE
  --Busca nombres que comiencen con "a".
  Nombre LIKE 'a%'
  --Busca nombres que tengan "a" como segundo carácter
  OR Nombre LIKE '_a%';

-- CASE WHEN ... THEN ... END AS ...
SELECT
  id_cliente,
  nombre,
  CASE
    WHEN idioma = 'ES' THEN 'Castellano'
    WHEN idioma = 'EN' THEN 'Inglés'
    WHEN idioma IS NULL
    OR idioma = '' THEN 'NO APLICA'
  END AS idioma_completo
FROM
  DE_Cliente_20241120;

-- IS NULL
SELECT
  id_cliente,
  nombre,
  CASE
    WHEN idioma = 'ES' THEN 'Castellano'
    WHEN idioma = 'EN' THEN 'Inglés'
    WHEN idioma IS NULL
    OR idioma = '' THEN 'NO APLICA'
  END AS idioma_completo
FROM
  DE_Cliente_20241120;

-- ISNULL(campo_a_evaluar, valor_de_reemplazo) => boolean
SELECT
  id_contrato,
  fecha_alta,
  DATEDIFF (
    MONTH,
    ISNULL (fecha_baja, 'Campo nulo'),
    GETDATE ()
  ) AS cantidad_meses_baja
FROM
  DE_Contrato20241120;

-- NOT IN (...) => Negación de todo lo que esté en los paréntesis
SELECT
  IDCliente,
  Nombre
FROM
  SQL_Cliente
WHERE
  Provincia NOT IN ('Madrid', 'Sevilla');

-- IN (...) => Aceptación de todo lo que haya dentro de los paréntesis. Es como decir: 'Todo lo que esté aquí adentro'
SELECT
  IDCliente,
  Nombre
FROM
  SQL_Cliente
WHERE
  Provincia IN ('Madrid', 'Sevilla');

-- ORDER BY
SELECT
  TOP 100 IDCliente,
  Nombre
FROM
  SQL_Cliente
WHERE
  Provincia NOT IN ('Madrid', 'Sevilla')
ORDER BY
  Nombre ASC;

-- SUB-CONSULTA => Conseguir datos de tablas sin relación. Tener cuidado al obtener datos de tablas sin relacionar porque pueden no ser datos que puedan tener relación con lo que deseamos hacer.
/* Tips: Una buena forma de enlazar o relacionar los campos de tablas sin una relación específica es relacionarlas a través de algún campo que puedan tener en común */
/* Sub-Consulta relacionada en el SELECT */
/* Sub-Consulta sin correlación en el WHERE */
SELECT
  clnts.id_cliente,
  (
    SELECT
      co.fecha_alta
    FROM
      DE_Contrato20241120 AS co
    WHERE
      co.id_cliente = clnts.id_cliente -- con correlación
      AND co.tipo_contrato = 'PRESHIPOTECA'
    ORDER BY
      co.fecha_alta DESC -- Asegúrate de que se obtiene el contrato más reciente, si hay más de uno
    LIMIT
      1
  ) AS contrato_hipoteca
FROM
  DE_Cliente_20241120 AS clnts;

SELECT
  id_cliente,
  nombre,
  provincia
FROM
  DE_Clientes
WHERE
  id_cliente IN (
    SELECT
      id_cliente
    FROM
      DE_Contratos
    WHERE
      tipo_contrato = 'PRESHIPOTECA' -- sin correlación
  )
  AND provincia = 'GRANADA';

SELECT
  comports.id_cliente,
  comports.tipo_contrato,
  (
    SELECT 
      co.fecha_baja
    FROM
      DE_Contrato20241120 AS co
    WHERE
      co.id_cliente = comports.id_cliente -- con correlación
      AND CONVERT(DATE, co.fecha_alta) = CONVERT(DATE, DATEADD(MONTH, -6, GETDATE()))
  ) AS ultima_baja_desde6meses
FROM
  DE_Comportamiento20241120 AS comports
WHERE
  comports.id_cliente IN (
    SELECT
      cs.id_cliente
    FROM
      DE_Cliente_20241120 AS cs
    WHERE
      cs.provincia IN ('GRANADA') -- sin correlación
  )

