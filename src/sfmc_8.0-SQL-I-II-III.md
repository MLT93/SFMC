# **`Automatización de Marketing y SQL en SFMC`**

#### Introducción:
Salesforce Marketing Cloud (SFMC) utiliza SQL para gestionar datos almacenados en **Data Extensions (DE)**, permitiendo segmentar audiencias, combinar tablas y generar métricas personalizadas. Este documento explora en detalle el uso de SQL en SFMC, cubriendo conceptos clave, ejemplos prácticos y mejores prácticas.

---

## **1. Uso básico de SQL en SFMC**

### **Consulta básica: Seleccionar columnas**
**Ejemplo:**
Seleccionar los nombres de clientes que residen en Madrid:
```sql
SELECT id_cliente, nombre, email
FROM DE_Clientes
WHERE ciudad = 'Madrid';
```
- **`SELECT`**: Indica las columnas que deseas recuperar.
- **`WHERE`**: Filtra los registros según un criterio.

---

## **2. Uso de funciones de agregación y `GROUP BY`**

### **¿Qué es `GROUP BY` y cuándo se utiliza?**
`GROUP BY` organiza los datos en grupos basados en valores únicos de una columna. Esto es obligatorio cuando se usan funciones de agregación como `SUM`, `COUNT`, `AVG`, etc.

### **Ejemplo 1: Contar clientes por contrato**
```sql
SELECT id_contrato, COUNT(id_cliente) AS total_clientes
FROM DE_Contratos
GROUP BY id_contrato;
```
- Agrupa los datos por contrato y cuenta cuántos clientes están asociados a cada uno.

### **Ejemplo 2: Contratos con más de 3 clientes**
Usa `HAVING` para filtrar después de la agregación:
```sql
SELECT id_contrato, COUNT(id_cliente) AS total_clientes
FROM DE_Contratos
GROUP BY id_contrato
HAVING COUNT(id_cliente) > 3;
```

### **Ejemplo 3: Sumar montos agrupados por región**
```sql
SELECT region, SUM(monto) AS total_monto
FROM DE_Contratos
GROUP BY region;
```
- Calcula el monto total de contratos por región.

---

## **3. Funciones de fechas: `DATEDIFF` y `DATEADD`**

### **`DATEDIFF`: Calcular diferencias entre fechas**
**Ejemplo 1:**
Calcular cuántos días han pasado desde la fecha de alta:
```sql
SELECT id_cliente, DATEDIFF(DAY, fecha_alta, GETDATE()) AS dias_activo
FROM DE_Clientes;
```
- **`DATEDIFF(DAY, fecha_alta, GETDATE())`**: Calcula el número de días entre la fecha de alta y hoy.

**Ejemplo 2:**
Obtener clientes con contratos activos en los últimos 6 meses:
```sql
SELECT id_cliente, id_contrato
FROM DE_Contratos
WHERE DATEDIFF(MONTH, fecha_alta, GETDATE()) <= 6;
```

### **`DATEADD`: Sumar intervalos de tiempo**
**Ejemplo práctico:**
Añadir 3 meses a la fecha de alta para calcular el próximo contacto:
```sql
SELECT id_cliente, DATEADD(MONTH, 3, fecha_alta) AS proximo_contacto
FROM DE_Clientes;
```

---

## **4. Uso avanzado de `CASE`**

### **¿Qué es `CASE` y cómo se utiliza?**
`CASE` permite realizar evaluaciones condicionales dentro de una consulta.

### **Ejemplo 1: Categorizar contratos**
```sql
SELECT id_contrato,
    CASE 
        WHEN estado = 'Activo' THEN 'Vigente'
        WHEN estado = 'Finalizado' THEN 'Inactivo'
        ELSE 'Pendiente'
    END AS estado_contrato
FROM DE_Contratos;
```
- Clasifica contratos según su estado.

### **Ejemplo 2: Evaluar antigüedad**
```sql
SELECT id_cliente, 
    CASE 
        WHEN DATEDIFF(YEAR, fecha_alta, GETDATE()) >= 5 THEN 'Cliente Antiguo'
        ELSE 'Cliente Nuevo'
    END AS categoria_cliente
FROM DE_Clientes;
```

---

## **5. Eliminación de duplicados con `DISTINCT`**

### **¿Qué hace `DISTINCT`?**
Elimina registros duplicados devolviendo combinaciones únicas de columnas.

**Ejemplo práctico:**
Obtener una lista única de clientes y contratos:
```sql
SELECT DISTINCT id_cliente, id_contrato
FROM DE_Contratos;
```

---

## **6. Combinación de tablas con `JOIN`**

### **¿Qué es un `JOIN`?**
Un `JOIN` conecta tablas relacionadas mediante una clave común.

### **Tipos comunes de `JOIN`:**
1. **`INNER JOIN`:** Devuelve solo los registros que coinciden en ambas tablas.
2. **`LEFT JOIN`:** Devuelve todos los registros de la tabla izquierda y las coincidencias de la derecha.

### **Ejemplo 1: Combinar clientes y contratos**
```sql
SELECT c.id_cliente, c.nombre, co.id_contrato
FROM DE_Clientes AS c
INNER JOIN DE_Contratos AS co
ON c.id_cliente = co.id_cliente;
```

### **Ejemplo 2: Clientes sin contratos activos**
```sql
SELECT c.id_cliente, c.nombre
FROM DE_Clientes AS c
LEFT JOIN DE_Contratos AS co
ON c.id_cliente = co.id_cliente
WHERE co.id_contrato IS NULL;
```

---

## **7. Subconsultas y `WITH`**

### **¿Qué son las subconsultas?**
Son consultas anidadas dentro de otra consulta.

### **Regla general de las subconsultas en SQL:**

Las **subconsultas** pueden ser de dos tipos principales:

1. **Subconsultas correlacionadas**: Dependen de la tabla externa y utilizan columnas de la tabla externa dentro de la subconsulta.
2. **Subconsultas no correlacionadas**: Son independientes de la tabla externa y no utilizan ninguna columna de la consulta principal.

### **¿Puedes usar columnas de la tabla externa en cualquier subconsulta?**
- **En subconsultas correlacionadas** (como en tu caso, cuando las subconsultas están dentro del `SELECT`, `WHERE`, `HAVING`, etc.), **sí puedes usar columnas de la tabla externa**, pero debes tener en cuenta **cómo se escriben** estas subconsultas.

#### **Subconsultas correlacionadas:**
Una **subconsulta correlacionada** se **refiere a columnas de la tabla externa**, es decir, dentro de la subconsulta, usas valores de la tabla principal en la consulta externa. Sin embargo, estas subconsultas **deben estar correctamente correlacionadas**, y esa relación tiene que hacerse explícita.

**Una sub-consulta o sub-query relacionada debe estar dentro del SELECT**

Por ejemplo:
```sql
SELECT
  comports.id_cliente,
  (
    SELECT TOP 1 fecha_baja
    FROM DE_Contrato20241120 AS co
    WHERE co.id_cliente = comports.id_cliente -- con correlación
    AND co.gasto6meses > 1000
    ORDER BY co.fecha_baja DESC
  ) AS f_baja_contrato
FROM DE_Comportamiento20241120 AS comports;
```

En este caso:
- **`co.id_cliente = comports.id_cliente`** es una **relación explícita** entre la subconsulta y la tabla externa. La subconsulta usa el campo `id_cliente` de la tabla externa **`DE_Comportamiento20241120`** (aliased como `comports`), y esta relación es válida.

### **Errores comunes al usar subconsultas correlacionadas:**
- El **error más común** ocurre cuando intentas **referenciar** columnas de la tabla externa fuera del contexto adecuado. Por ejemplo, si intentas hacer una subconsulta sin correlacionarla adecuadamente con la tabla principal, o si tratas de usar una columna de la tabla principal en un lugar donde no está permitido.

### **Subconsultas no correlacionadas:**
Las **subconsultas no correlacionadas** no dependen de la tabla externa, ya que devuelven un valor o conjunto de valores independiente de los registros de la tabla principal.

Una sub-consulta o sub-query sin correlacionar debe estar en el WHERE

```sql
SELECT
  id_cliente,
  (
    SELECT MAX(fecha_baja)
    FROM DE_Contrato20241120
    WHERE tipo_contrato = 'PRESHIPOTECA' -- sin correlación
  ) AS fecha_baja_max
FROM DE_Comportamiento20241120;
```

En este caso, la subconsulta no depende de ninguna columna de la tabla externa **`DE_Comportamiento20241120`**. Solo obtiene el **valor máximo de `fecha_baja`** de la tabla **`DE_Contrato20241120`** donde el tipo de contrato sea `'PRESHIPOTECA'`. Esta es una **subconsulta no correlacionada**, ya que no hace referencia a ninguna columna externa.

### **Resumen y reglas**:

1. **Subconsulta correlacionada**:
   - **Sí puedes usar columnas de la tabla externa**, pero debe haber una relación clara y explícita entre la subconsulta y la tabla principal. **La subconsulta debe estar correlacionada correctamente**.
   - En el caso de subconsultas **en el `SELECT`**, la condición **debe estar bien definida** para que la subconsulta funcione correctamente con la tabla externa.

2. **Subconsulta no correlacionada**:
   - **No depende de la tabla externa**, por lo que puedes hacer la subconsulta sin tener que correlacionar columnas. Esta subconsulta es **independiente** y se puede usar directamente en el `SELECT`, `WHERE`, etc.

### **¿Cuándo no puedes usar columnas de la tabla externa en una subconsulta?**

El problema generalmente ocurre cuando intentas usar columnas de la tabla externa **sin una relación clara**. Es decir, cuando no hay una **referencia explícita** entre las columnas de la subconsulta y las de la tabla externa, el motor de base de datos no sabe cómo relacionarlas, lo que lleva a un error.

Por ejemplo, esto sería incorrecto:

```sql
SELECT
  id_cliente,
  (
    SELECT fecha_baja
    FROM DE_Contrato20241120
    WHERE tipo_contrato = comports.tipo_contrato -- Esto está mal si comports no es parte de la subconsulta
  ) AS f_baja_contrato
FROM DE_Comportamiento20241120 AS comports;
```

En este caso, **`comports.tipo_contrato`** no es referenciado correctamente en la subconsulta, porque **la subconsulta no está correlacionada adecuadamente**.

### **Ejemplo: Contratos con monto mayor al promedio**
```sql
SELECT id_contrato, monto
FROM DE_Contratos
WHERE monto > (
    SELECT AVG(monto)
    FROM DE_Contratos
);
```

### **`WITH`: Consultas reutilizables**
Define un conjunto de datos temporal para reutilizarlo.

**Ejemplo: Contrato más reciente por cliente**
```sql
WITH ContratosRecientes AS (
    SELECT id_cliente, id_contrato, ROW_NUMBER() OVER (PARTITION BY id_cliente ORDER BY fecha_alta DESC) AS rn
    FROM DE_Contratos
)
SELECT id_cliente, id_contrato
FROM ContratosRecientes
WHERE rn = 1;
```

---

## **8. Mejores prácticas en SQL para SFMC**

1. **Usar `GROUP BY` lógicamente:**
   - Agrupa por el campo que representa la clave del análisis.
2. **Evitar duplicados con `DISTINCT`:**
   - Especialmente útil al trabajar con combinaciones de tablas.
3. **Validar con subconsultas o `HAVING`:**
   - Filtra resultados después de aplicar funciones de agregación.
4. **Utilizar `JOIN` eficientemente:**
   - Combina datos relevantes para análisis cruzados.

# Guía detallada para crear consultas SQL en Query Studio y SQL Activity de Automation Studio

### **SQL Query 1**: Manejo de datos de préstamos personales

1. #### **Importar los ficheros .csv**:
   - Sube los tres ficheros **.csv** en **Data Extensions** (DEs) dentro de Marketing Cloud.  
   - Configura cada DE asegurándote de que coincidan los campos con los datos del archivo.

2. #### **Obtener los IDs de los contratos de préstamo personal**:
   - Crea una consulta en Query Studio o SQL Activity que filtre los contratos con tipo **préstamo personal**:
     ```sql
     SELECT ID_CONTRATO
     FROM DE_CONTRATOS
     WHERE TIPO_CONTRATO = 'Préstamo Personal'
     ```
   - Los resultados se guardan en una nueva Data Extension de destino (Target DE).

3. #### **Generar el alias IDIOMA_COMPLETO**:
   - En la misma o una nueva consulta, utiliza una cláusula `CASE` para asignar valores según el idioma:
     ```sql
     SELECT 
         ID_CONTRATO, 
         IDIOMA,
         CASE 
             WHEN IDIOMA = 'ES' THEN 'CASTELLANO'
             WHEN IDIOMA = 'EN' THEN 'INGLÉS'
             ELSE 'NO APLICA'
         END AS IDIOMA_COMPLETO
     FROM DE_CONTRATOS
     ```
   - Configura el Target DE para agregar y actualizar los datos, seleccionando la opción "Update and Append".

4. #### **Evitar la sobrescritura en la Data Extension de destino**:
   - Al crear la SQL Activity, asegúrate de seleccionar la opción **Update Only** o **Add and Update** según la lógica deseada.

### **SQL Query 2**: Análisis de contratos dados de baja

1. #### **Diferencia de meses entre la baja y la fecha actual**:
   - Calcula la diferencia de meses utilizando `DATEDIFF` con `GETDATE()`:
     ```sql
     SELECT 
         ID_CONTRATO, 
         DATEDIFF(MONTH, FECHA_BAJA, GETDATE()) AS MESES_DESDE_BAJA
     FROM DE_CONTRATOS
     WHERE ESTADO = 'Baja'
     ```

2. #### **Fecha del último uso de los contratos dados de baja**:
   - Selecciona la fecha más reciente de uso para estos contratos:
     ```sql
     SELECT 
         ID_CONTRATO, 
         MAX(FECHA_USO) AS FECHA_ULTIMO_USO
     FROM DE_USO_CONTRATOS
     WHERE ID_CONTRATO IN (SELECT ID_CONTRATO FROM DE_CONTRATOS WHERE ESTADO = 'Baja')
     GROUP BY ID_CONTRATO
     ```

3. #### **Consulta consolidada**:
   - Combina los datos relevantes en una única consulta:
     ```sql
     SELECT 
         C.ID_CLIENTE, 
         C.NOMBRE, 
         C.ID_CONTRATO, 
         C.TIPO_CONTRATO, 
         U.FECHA_ULTIMO_USO, 
         G.GASTO_MES
     FROM DE_CONTRATOS C
     JOIN DE_USO_CONTRATOS U ON C.ID_CONTRATO = U.ID_CONTRATO
     JOIN DE_GASTOS G ON C.ID_CONTRATO = G.ID_CONTRATO
     WHERE C.ESTADO = 'Baja'
     ```
   - Exporta el resultado a una nueva Data Extension.

4. #### **Consulta adicional interesante**:
   - Identifica clientes activos con gastos mensuales superiores al promedio del último trimestre:
     ```sql
     SELECT 
         C.ID_CLIENTE, 
         C.NOMBRE, 
         C.ID_CONTRATO, 
         AVG(G.GASTO_MES) AS PROMEDIO_GASTOS
     FROM DE_CONTRATOS C
     JOIN DE_GASTOS G ON C.ID_CONTRATO = G.ID_CONTRATO
     WHERE C.ESTADO = 'Activo'
         AND G.FECHA_GASTO >= DATEADD(MONTH, -3, GETDATE())
     GROUP BY C.ID_CLIENTE, C.NOMBRE, C.ID_CONTRATO
     HAVING AVG(G.GASTO_MES) > (
         SELECT AVG(GASTO_MES) 
         FROM DE_GASTOS 
         WHERE FECHA_GASTO >= DATEADD(MONTH, -3, GETDATE())
     )
     ```
   - **Explicación**:
     - Se unen tablas de contratos y gastos.
     - Se calcula el gasto promedio por contrato de clientes activos.
     - La condición filtra aquellos con gastos superiores al promedio global del último trimestre.

# Guía detallada sobre Data Views, la función Convert() y subqueries en SQL

1. #### **Utilidad de las Data Views en SQL (SFMC)**:

   - **Definición**:  
     Las Data Views son tablas del sistema en Salesforce Marketing Cloud que contienen información clave sobre eventos y actividades de los suscriptores, como envíos, aperturas, clics y bajas. Son útiles para generar reportes personalizados y analizar métricas de campañas.

   - **Uso práctico**:  
     Se utilizan para responder preguntas como:  
       - ¿Qué suscriptores abrieron una campaña específica?  
       - ¿Qué enlaces generaron más clics?  
       - ¿Qué contactos han sido marcados como no válidos (bounces)?  

   - **Ejemplo de consulta**:  
     Para obtener la lista de suscriptores que abrieron un email en la última semana:  
     ```sql
     SELECT 
         SubscriberKey, 
         EventDate, 
         JobID, 
         EmailName
     FROM _Open
     WHERE EventDate >= DATEADD(DAY, -7, GETDATE())
     ```
     - **_Open**: Data View que registra aperturas de emails.
     - **Conclusión**: Estas tablas son esenciales para obtener métricas avanzadas y optimizar estrategias de marketing.

---

2. #### **El parámetro "Style" en la función Convert()**:

   - **Función Convert()**:  
     Se utiliza para convertir valores de un tipo de datos a otro, como de `DATETIME` a `VARCHAR`, y el parámetro **Style** define el formato del resultado.

   - **Resumen del parámetro "Style"**:  
     - Especifica el formato de salida para datos de tipo fecha o número al convertirlos a texto.  
     - Los valores varían entre idiomas, pero los más comunes incluyen:  
       - `101`: MM/DD/YYYY  
       - `103`: DD/MM/YYYY  
       - `112`: YYYYMMDD (sin separadores)  

   - **Ejemplo**: Convertir una fecha a formato `DD/MM/YYYY`:  
     ```sql
     SELECT 
         CONVERT(VARCHAR, GETDATE(), 103) AS FechaFormateada
     ```

---

3. #### **Definición y creación de una subquery**:

   - **Definición**:  
     Una subquery es una consulta SQL anidada dentro de otra consulta. Sirve para filtrar o calcular datos que se usan en la consulta principal.

   - **Ejemplo con un archivo `.csv`**:  
     - Considerando un archivo llamado **Clientes.csv** importado en la DE **DE_Clientes**, queremos obtener los clientes con contratos activos y gastos mayores al promedio.

     ```sql
     SELECT 
         ID_CLIENTE, 
         NOMBRE, 
         GASTO_MENSUAL 
     FROM DE_Clientes
     WHERE GASTO_MENSUAL > (
         SELECT AVG(GASTO_MENSUAL)
         FROM DE_Clientes
         WHERE ESTADO_CONTRATO = 'Activo'
     )
     ```
     - **Explicación**:
       - La subquery calcula el gasto promedio de clientes con contratos activos.
       - La consulta principal selecciona solo los clientes cuyo gasto supera ese promedio.
