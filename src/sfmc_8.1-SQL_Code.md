## IN

- Puede ser todo lo que esté dentro los paréntesis ("que sea todo esto, o esto, o esto otro..."). Es el OR abreviado

```sql
SELECT IDCliente, Nombre
FROM SQL_Cliente
WHERE Provincia IN (
'Madrid',
'Sevilla'
)
```

## NOT IN

- La negación de todo lo que esté dentro los paréntesis ("que sea distinto a todo esto..."). Es el AND negado

```sql
SELECT IDCliente, Nombre
FROM SQL_Cliente
WHERE Provincia NOT IN (
'Madrid',
'Sevilla'
)
```

## LIKE

- Se utiliza en consultas para buscar patrones específicos dentro de registros de tipo texto

```sql
SELECT IDCliente, Nombre
FROM SQL*Cliente
WHERE
/* % = Representa cero, uno o múltiples caracteres */
/* * = Representa un solo carácter */
Nombre LIKE 'a%' --Busca nombres que comiencen con "a".
OR
Nombre LIKE '_a%' --Busca nombres que tengan "a" como segundo carácter
```

<div style="page-break-after: always;"></div>

## IS NULL | IS NOT NULL

- El campo No Ha sido inicializado Nunca | El campo es distinto a No Ha sido inicializado Nunca. Para definir si es "undefined" se pone el campo vacío ('')

```sql
SELECT IDCliente, Nombre
FROM SQL_Cliente
WHERE
idioma IS NULL // No tiene registro (no ha sido inicializado nunca)
OR
idioma = '' // Tiene un registro vacío
```

```sql
SELECT id_cliente, nombre,
CASE
WHEN idioma = 'ES' THEN 'Castellano'
WHEN idioma = 'EN' THEN 'Inglés'
WHEN idioma IS NULL OR idioma = '' THEN 'NO APLICA'
END AS idioma_completo
FROM DE_Cliente_20241120
```

## ISNULL(campo_a_evaluar, valor_de_reemplazo)

```sql
SELECT id_contrato, fecha_alta,
DATEDIFF(MONTH, ISNULL(fecha_baja, 'Campo nulo'), GETDATE()) AS cantidad_meses_baja
FROM DE_Contrato20241120
```

## ORDER BY

- El TOP es obligatorio para definir la cantidad de registros devueltos, es como el LIMIT en SQL. Se puede añadir ASC o DESC también

```sql
SELECT
  TOP 100 IDCliente,
  Nombre
FROM
  SQL_Cliente
WHERE
  Provincia NOT IN ('Madrid', 'Sevilla')
ORDER BY
  Nombre ASC
```

<div style="page-break-after: always;"></div>

## COUNT(), MAX(), MIN(), AVG(), SUM()

```sql
SELECT COUNT(IDCliente)
FROM SQL_Cliente
WHERE Provincia NOT IN (
'Madrid',
'Sevilla'
)
```

```sql
SELECT MIN(fecha), AVG(operaciones), SUM(gasto)
FROM SQL Operaciones
```

## CONVERT(nuevo_tipo_de_dato, campo_a_convertir, style(opcional))

- El parámetro "style" en la función CONVERT() de SQL Server es un argumento opcional de tipo INT que sirve para especificar el formato de salida de los datos, especialmente cuando se trabaja con conversiones de fecha y hora a cadenas de caracteres. Sigue esta guía: https://www.sqlshack.com/sql-convert-function/

```sql
SELECT id_contrato, fecha_alta,
    CASE
        WHEN fecha_baja IS NOT NULL THEN CONVERT(VARCHAR(20), DATEDIFF(MONTH, fecha_baja, GETDATE()))
        ELSE 'Contrato Activo'
    END AS cantidad_meses_baja
FROM DE_Contrato20241120
```

<div style="page-break-after: always;"></div>

## CASE WHEN ... THEN ... END AS ...

- Es como una mezcla entre If-Else_If-Else y un switch. Importante: En cuanto cumple una condición, sale de la ejecución. El AS nos proporciona un Alias donde se reflejará el resultado.
  El CASE se sitúa siempre en la parte del SELECT (lo que devuélves)

```sql
SELECT EmployeeID, Name,
    CASE
        WHEN Salary > 5000 THEN 'High Salary'
        WHEN Salary BETWEEN 3000 AND 5000 THEN 'Medium Salary'
        ELSE 'Low Salary'
    END AS SalaryCategory
FROM Employees
```

```sql
SELECT OrderID, Amount,
    CASE
        WHEN Amount >= 1000 THEN 1
        ELSE 0
    END AS IsLargeOrder
FROM Orders
```

```sql
SELECT OrderID, Amount,
    CASE
        WHEN Amount >= 1000 THEN 'TRUE'
        ELSE 'FALSE'
    END AS IsLargeOrder
FROM Orders
```

<div style="page-break-after: always;"></div>

## DATEADD(datepart(unidad de tiempo MONTH, DAY...), number(cantidad a sumar o a restar sobre la unidad de tiempo), startdate(fecha de inicio))

```sql
SELECT
DATEADD(DAY, 7, GETUTCDATE()) AS future_date
```

## FORMAT(valor_a_formatear, 'string para definir el formato que queramos. Ej. "yyyy-MM-dd"', 'locale(optional)')

```sql
SELECT
GETUTCDATE() AS OriginalUTCDate,
FORMAT(GETUTCDATE(), 'yyyy-MM-dd') AS FormattedUTCDate,
FORMAT(GETUTCDATE(), 'dddd, dd MMMM yyyy', 'es-ES') AS SpanishUTCFormat
```

## GETUTCDATE()

- Devuelve la fecha de Greenwitch

## DATEDIFF(datepart(unidad de tiempo MONTH, DAY...), startdate, enddate)

- DATEDIFF devuelve únicamente valores numéricos enteros (integers)
- La función calcula la diferencia entre dos fechas y retorna el resultado como un número entero que representa la cantidad de unidades de tiempo especificadas (como días, meses o años) entre las fechas proporcionadas
- DATEDIFF(day, '2023-01-01', '2023-01-10') devolvería 9, indicando que hay 9 días entre las dos fechas.

```sql
SELECT id_contrato, fecha_alta,
DATEDIFF(MONTH, fecha_baja,GETDATE()) AS cantidad_meses_baja
FROM DE_Contrato20241120
```

<div style="page-break-after: always;"></div>

## GROUP BY y HAVING

- Agrupa los resultados según un campo específico y HAVING, que es el WHERE o condición del GROUP BY.
- El uso de GROUP BY en SQL es necesario cuando estás calculando valores agregados (como COUNT, AVG, SUM, etc.) y prácticamente siempre se agrupa por el id buscado o por el campo buscado con el cual se desea segmentar

```sql
SELECT Region, SUM(Amount) AS TotalSales
FROM Sales
GROUP BY Region;
```

```sql
SELECT Region, SUM(Amount) AS TotalSales
FROM Sales
GROUP BY Region
HAVING SUM(Amount) > 400
```

```sql
SELECT Region, SUM(Amount) AS TotalSales
FROM Sales
WHERE Amount > 100 -- Filtra filas con Amount mayor a 100
GROUP BY Region
HAVING SUM(Amount) > 400; -- Filtra grupos con TotalSales mayor a 400
```

```sql
SELECT Department, AVG(Salary) AS AvgSalary
FROM Employees
GROUP BY Department
HAVING AVG(Salary) > 5000
```

```sql
SELECT Region,
SUM(Amount) AS TotalSales,
AVG(Amount) AS AvgSales
FROM Sales
GROUP BY Region
HAVING SUM(Amount) > 400 AND AVG(Amount) > 150;
```

<div style="page-break-after: always;"></div>

```sql
SELECT ID_CLEINTE, COUNT(ID_CONTRATO)
FROM SQL_CONTRATO
GROUP BY ID_CLIENTE
HAVING COUNT(ID_CONTRATO) > 1
```

```sql
SELECT Region,
SUM(Amount) AS TotalSales,
AVG(Amount) AS AvgSales
FROM Sales
GROUP BY Region
HAVING SUM(Amount) > 400 OR AVG(Amount) > 200;
```

```sql
SELECT Region,
SUM(Amount) AS TotalSales,
AVG(Amount) AS AvgSales,
COUNT(Product) AS ProductCount
FROM Sales
GROUP BY Region
HAVING SUM(Amount) > 500
AND (AVG(Amount) > 200 OR COUNT(Product) >= 3);
```

```sql
SELECT
id_cliente,
COUNT(id_contrato) AS TotalContratos
FROM Contratos
GROUP BY id_cliente; // Dame el cliente, que tenga la cantidad de X contratos y agruparlo por cliente
```

<div style="page-break-after: always;"></div>

## WITH

- El WITH en SQL se utiliza para definir sub-consultas comunes (o CTEs, por sus siglas en inglés: Common Table Expressions). Estas sub-consultas permiten escribir consultas más legibles y estructuradas al darles un nombre y, en muchos casos, hacerlas reutilizables dentro de una consulta más compleja.

```sql
-- Definición de la sub-consulta o CTE
WITH nombre_cte AS (
    -- Subconsulta que define los datos temporales
    SELECT columna1, columna2
    FROM tabla
    WHERE condición
)
-- Aquí puedes hacer uso de la CTE como si fuera una tabla normal
SELECT columna1, columna2
FROM nombre_cte
WHERE otra_condición;
```

```sql
-- Definición de la CTE para deduplicar registros
WITH Deduplicated AS (
    SELECT
        id_cliente,
        nombre,
        fecha_registro,
        ROW_NUMBER() OVER (PARTITION BY id_cliente ORDER BY fecha_registro DESC) AS row_num
    FROM Clientes
)

-- Consulta principal que utiliza la CTE
SELECT
    id_cliente,
    nombre,
    fecha_registro
FROM Deduplicated
WHERE row_num = 1;  -- Filtra para obtener solo el registro más reciente por cliente
```

<div style="page-break-after: always;"></div>

## SUB-QUERIES

- En cuanto a las sub-queries:
- Son consultas anidadas dentro de otras y sirven para realizar queries más complejas o que están sin relacionar, como los JOINS
- Se realizan abriendo paréntesis y creando la otra consulta dentro de ellos.
- Recuerda que el último comando al ejecutarse dentro de una consulta es el SELECT (lo que devuélve la consulta). Por lo tanto, cada subconsulta deberá devolver una fila, una columna o una lista de valores que a su vez será utilizado en la consulta padre
- Pueden aparecer en varias partes de una consulta SQL, dependiendo de lo que necesites lograr

```
SELECT
nombre,
(SELECT AVG(salario) FROM Empleados WHERE departamento_id = e.departamento_id) AS SalarioPromedio
FROM Empleados e;
```

```sql
SELECT
nombre,
salario
FROM Empleados e
WHERE salario > (
SELECT AVG(salario)
FROM Empleados
WHERE departamento_id = e.departamento_id
);
```

<div style="page-break-after: always;"></div>

## ROW_NUMBER()

- Quita duplicados de una tabla. Para ello, creamos grupos/particiones "PARTITION" de la tabla. El orden de cada partición se marcará a través de una condición asignada con "ORDER BY". Esto me devolverá en del "SELECT" cada partición ordenada a través de un número. Ese número es el número de la línea/row/fila que yo quiero devolver. Debido a esto, se consigue la eliminación de duplicados. Cada parte, debe de estar dentro de una subconsulta para que pueda funcionar, y es debido a que el "SELECT" es la última ejecución que realiza SQL. Si deseara ejecutar una consulta sin obtener previamente el resultado deseado, obtendría valores distintos. Por eso se hacen las sub-consultas

```sql
SELECT ID_CLIENTE, ID_CONTRATO, TIPO_CONTRATO, FECHA_ALTA, FECHA_BAJA, BAJA, tipo_contrato_ordenado
FROM (
SELECT
ID_CLIENTE, ID_CONTRATO, TIPO_CONTRATO, FECHA_ALTA, FECHA_BAJA, BAJA,
CASE
WHEN TIPO_CONTRATO = 'Tarjeta' THEN 1
WHEN TIPO_CONTRATO = 'Prestamo Personal' THEN 2
WHEN TIPO_CONTRATO = 'Prestamo Hipoteca' THEN 3
ELSE 4 -- Si hay otros tipos de contrato
END AS tipo_contrato_ordenado, -- Calcula una prioridad numérica para los tipos de contrato
ROW_NUMBER() OVER (PARTITION BY ID_CLIENTE ORDER BY FECHA_ALTA DESC) AS mi_orden -- Asigna un número basado en FECHA_ALTA
FROM nombre_de_tu_tabla -- Reemplaza con el nombre real de la tabla
) AS y
WHERE mi_orden = 1; -- Selecciona el registro más reciente para cada cliente
```

```sql
ROW_NUMBER() OVER (PARTITION BY id_cliente ORDER BY prioridad DESC, fecha_registro DESC) AS row_num
```

<div style="page-break-after: always;"></div>

## DISTINCT

- Cuando se aplica a una columna o combinación de columnas, analiza los registros y devuelve solo las filas donde los valores (de 1 o todas las columnas que evalúa) sean únicos
- Si seleccionas varias columnas con DISTINCT, SQL evalúa todas las columnas juntas para identificar filas únicas
- Dos filas serán consideradas duplicadas solo si todos los campos tienen los mismos valores

```sql
SELECT DISTINCT id_cliente, id_contrato
FROM DE_Contrato20241120;
```

<div style="page-break-after: always;"></div>

## JOINS

- Forma de enlazar tablas que tengan una relación establecida (Foreign Key o FK). En SFMC se enlazan con el Data Designer para establecer el Modelo de Datos

```sql
SELECT
comprts.id_cliente AS id_comportamiento_cliente,
comprts.id_contrato AS id_contrato_cliente,
comprts.fecha_ultimo_uso,
contrs.fecha_baja,
contrs.tipo_contrato
FROM De_comportamiento20241120 AS comprts
INNER JOIN DE_Contrato20241120 AS contrs ON comprts.id_cliente = contrs.id_cliente
WHERE contrs.fecha_baja IS NOT NULL OR contrs.fecha_baja != ''
```

```sql
SELECT
comprts.id_cliente AS id_comportamiento_cliente,
comprts.id_contrato AS id_contrato_cliente,
clients.nombre,
comprts.fecha_ultimo_uso,
comprts.gasto_anio,
contrs.tipo_contrato
FROM De_comportamiento20241120 AS comprts
INNER JOIN DE_Contrato20241120 AS contrs ON comprts.id_cliente = contrs.id_cliente
INNER JOIN DE_Cliente_20241120 AS clients ON comprts.id_cliente = clients.id_cliente
WHERE contrs.fecha_baja IS NOT NULL OR contrs.fecha_baja != ''
```

```sql
SELECT
comprts.id_cliente AS id_cliente,
comprts.id_contrato AS id_contrato_cliente,
clients.nombre,
clients.movil,
comprts.fecha_ultimo_uso,
comprts.gasto_anio,
contrs.tipo_contrato,
CASE
WHEN contrs.fecha_baja IS NULL OR contrs.fecha_baja = '' THEN 'Contrato Activo'
WHEN comprts.num_ope_anio > 80 THEN 'Buen Movimiento'
ELSE 'Llamar para ofrecer nueva tarjeta'
END AS posibilidades_de_venta
FROM De_comportamiento20241120 AS comprts
INNER JOIN DE_Contrato20241120 AS contrs ON comprts.id_cliente = contrs.id_cliente
INNER JOIN DE_Cliente_20241120 AS clients ON comprts.id_cliente = clients.id_cliente
```

<div style="page-break-after: always;"></div>

## UNION

- Junta dos tablas una arriba de la otra sin más

```sql
SELECT ID_CLIENTE, ID_CONTRATO, TIPO_CONTRATO
FROM SQL_TARJETA
WHERE TIPO_CONTRATO = 'TARJETA'
UNION ALL
SELECT ID_CLIENTE, ID_CONTRATO; TIPO_CONTRATO
FORM SQL_PRESTAMO_PERSONAL
WHERE TIPO_CONTRATO = 'PRESPERSONAL'
UNION ALL
```
