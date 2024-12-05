# **Automatización de Marketing y SQL en SFMC**

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
