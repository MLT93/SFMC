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

-- NOT IN => Negación de todo lo que esté en los paréntesis
SELECT
  IDCliente,
  Nombre
FROM
  SQL_Cliente
WHERE
  Provincia NOT IN ('Madrid', 'Sevilla');

-- IN => Lo contrario de NOT IN
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
