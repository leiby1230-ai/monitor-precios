# Ingeniería Inversa · CamelCamelCamel

> Análisis con Chrome DevTools sobre **CamelCamelCamel** (`https://camelcamelcamel.com`) como referencia para **Monitor de Precios (PrecioAlerta)**.

## 1. Hallazgos con DevTools (10 hallazgos)

1. **Estructura superior y rejilla de ofertas (Elements):** Usa barra de navegación horizontal con buscador prominente y tarjetas de productos en bajada de precio.
2. **Densidad visual alta:** Presenta bloques densos de texto, anuncios y tablas extensas que recargan la vista inicial.
3. **Sistema de diseño clásico (Styles/Computed):** Paleta basada en azul/verde corporativo y bordes grises con tipografía sans-serif tradicional.
4. **Gráficos de histórico estáticos:** Las curvas de precio histórico se renderizan como imágenes pre-generadas en lugar de gráficos vectoriales interactivos (SVG).
5. **Peticiones de red elevadas (Network):** Al recargar sin caché (`Ctrl + Shift + R`), carga decenas de recursos externos, banners y scripts de analítica.
6. **Peso de transferencia:** La carga de scripts de terceros y recursos publicitarios incrementa el tiempo de carga inicial.
7. **Persistencia en el navegador (Application):** Utiliza cookies y `localStorage` para recordar país/moneda, filtros de tienda y preferencias de sesión.
8. **Interacción por recarga:** Varios filtros y cambios de vista disparan recargas completas de página en lugar de actualizar el DOM al instante.
9. **Auditoría Lighthouse original:** El puntaje de Rendimiento y Prácticas recomendadas se ve afectado por scripts de terceros y anuncios.
10. **Experiencia en móvil (375 px):** Las tablas comparativas y los formularios de alerta requieren demasiado desplazamiento y zoom en pantallas pequeñas.

![DevTools CamelCamelCamel](capturas01-camel-devtools.png)
![Lighthouse CamelCamelCamel Original](capturas02-lighthouse-original.png)

---

## 2. Tres problemas corregidos en `clon/` (PrecioAlerta)

1. **Rendimiento sin scripts de terceros:** Eliminación de anuncios y librerías externas usando HTML, CSS y JS puro con gráfico SVG ligero.
2. **Accesibilidad y semántica:** Etiquetas semánticas (`header`, `nav`, `main`, `section`), atributos `aria-label` y alto contraste en textos y precios.
3. **Diseño móvil a 375 px:** Menú colapsable, tarjetas adaptables y tabla de alertas con scroll controlado.

![Vista móvil 375px de PrecioAlerta](capturas03-clon-movil.png)

---

## 3. Comparativa Lighthouse (Antes vs. Después)

| Métrica | CamelCamelCamel (Antes) | PrecioAlerta `clon/` (Después) | Mejora |
| --- | :---: | :---: | :---: |
| Rendimiento | `[21]` | `[99]` | `+[78]` |
| Accesibilidad | `[95]` | `[100]` | `+[5]` |
| Prácticas recomendadas | `[73]` | `[96]` | `+[23]` |
| SEO | `[92]` | `[100]` | `+[8]` |

![Lighthouse PrecioAlerta Después](capturas04-lighthouse-clon.png)