import type { ResourceArticle } from "@/lib/content/resourcesEn";

// NOTE: Only the 30 articles currently included in the live sitemap are localized here.
export const RESOURCE_ARTICLES_ES: ResourceArticle[] = [
  {
    slug: "asphalt-driveway-tons-guide",
    title: "Guía de toneladas para entrada de asfalto (espesor y camiones)",
    description:
      "Guía práctica para estimar una entrada de asfalto: por qué el espesor manda la tonelada y qué cambia entre repavimentar y reconstruir.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "El espesor define las toneladas",
        paragraphs: [
          "El asfalto normalmente se compra por peso (toneladas). El área y el espesor compactado determinan la tonelada. La misma entrada a 2\" vs 3\" puede cambiar mucho el pedido.",
        ],
      },
      {
        heading: "Espesores compactados típicos (para planificar)",
        table: {
          columns: ["Tipo de proyecto", "Espesor compactado típico", "Nota"],
          rows: [
            [
              "Sobrecapa (base en buen estado)",
              "1.5–2 in",
              "Los problemas de base siguen apareciendo",
            ],
            [
              "Entrada residencial",
              "2–3 in",
              "Tráfico y clima pueden requerir más",
            ],
            [
              "Uso pesado / subrasante débil",
              "3–4+ in",
              "A menudo también pide base más fuerte",
            ],
          ],
        },
      },
      {
        heading: "Repavimentar vs reconstruir",
        bullets: [
          "Una sobrecapa puede ser más delgada, pero no corrige una base mala.",
          "Una reconstrucción completa suele requerir estimar base de grava aparte (y la base puede costar más que el asfalto).",
          "El drenaje casi siempre importa más que afinar 0.5\" de espesor.",
        ],
      },
      {
        heading: "Chequeo rápido de toneladas (sanidad)",
        paragraphs: [
          "Volumen (ft³) = área (ft²) × espesor (in/12). Luego convierte a toneladas con una densidad realista (varía por mezcla y compactación).",
          "Ejemplo: 600 ft² a 3\" es 600 × (3/12) = 150 ft³. Si usas ~145 lb/ft³ como referencia: 150 × 145 = 21,750 lb ≈ 10.9 toneladas (antes de márgenes y confirmación con proveedor).",
        ],
      },
      {
        heading: "Checklist de compra",
        bullets: [
          "Confirma el espesor compactado objetivo (no “más o menos”).",
          "Confirma mezcla, unidad (short ton vs tonelada métrica) y mínimo de pedido.",
          "Planifica acceso de camión, descarga y ritmo de extendido/compactación.",
          "Agrega margen para bordes, transiciones y zonas trabajadas a mano.",
        ],
      },
    ],
    related: [
      {
        label: "Calculadora de entrada de asfalto",
        href: "/calculators/home-improvement/asphalt-driveway",
      },
      {
        label: "Calculadora de grava (base)",
        href: "/calculators/home-improvement/gravel",
      },
      { label: "Metodología", href: "/methodology" },
    ],
  },
  {
    slug: "baseboard-trim-waste-tips",
    title:
      "Consejos de desperdicio para zócalos y molduras (ingletes, esquinas y piezas)",
    description:
      "Cómo las esquinas y cortes en inglete aumentan el desperdicio, por qué el largo de la pieza importa y cómo planificar compras de molduras.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Por qué el largo de la pieza importa",
        paragraphs: [
          "La moldura se vende en largos fijos. Aunque tus pies lineales estén bien, puedes quedarte corto si no planificas cómo se reparten esas piezas entre esquinas, puertas y tramos cortos.",
        ],
      },
      {
        heading: "De pies lineales a piezas (método simple)",
        paragraphs: [
          "Piezas ≈ (pies lineales totales ÷ largo de pieza) × (1 + desperdicio). Redondea hacia arriba. El desperdicio sube con más esquinas y tramos cortos.",
          "Ejemplo: 180 ft con piezas de 16 ft → 180/16 = 11.25 → 12 piezas. Si hay muchos cortes, 10–15% extra puede ser más seguro: 12 × 1.15 = 13.8 → 14 piezas.",
        ],
        bullets: [
          "Confirma longitudes disponibles (8/12/16 ft) para ese perfil.",
          "Cuenta esquinas internas/externas y tramos cortos que generan retazos inutilizables.",
          "Si el color/tinte debe coincidir, compra extra del mismo lote cuando sea posible.",
        ],
      },
      {
        heading: "Qué genera desperdicio",
        bullets: [
          "Esquinas internas y externas (retazos de inglete).",
          "Tramos cortos donde no puedes reutilizar sobrantes.",
          "Cuartos fuera de escuadra que obligan a recortar y ajustar.",
        ],
      },
      {
        heading: "Rangos típicos de desperdicio (puntos de partida)",
        table: {
          columns: ["Complejidad", "Desperdicio común", "Por qué sube"],
          rows: [
            ["Tramos largos y simples", "5–10%", "Mejor reutilización de sobrantes"],
            [
              "Cuarto típico",
              "10–15%",
              "Esquinas y puertas agregan piezas cortas",
            ],
            [
              "Diseño muy fragmentado",
              "15–25%",
              "Muchos closets, esquinas y tramos cortos",
            ],
          ],
        },
      },
      {
        heading: "Checklist de compra",
        bullets: [
          "Confirma el perfil y los largos disponibles antes de comprar.",
          "Planifica transiciones (marcos de puerta, chimenea, escalera) donde el tramo se corta.",
          "Agrega extra por piezas defectuosas, puntas dañadas y reparaciones futuras.",
        ],
      },
    ],
    related: [
      {
        label: "Calculadora de zócalos y molduras",
        href: "/calculators/home-improvement/baseboard-trim",
      },
      {
        label: "Calculadora de pisos (relacionado)",
        href: "/calculators/home-improvement/flooring",
      },
    ],
  },
  {
    slug: "board-feet-explained",
    title: "Board feet explicado (fórmula simple y ejemplos)",
    description:
      "Qué es un board foot, la fórmula y errores comunes al calcular madera y costos.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "La fórmula de board feet",
        paragraphs: [
          "Board feet mide volumen. Fórmula típica: board feet = (espesor en pulgadas × ancho en pulgadas × largo en pies) / 12.",
        ],
      },
      {
        heading: "Ejemplo rápido",
        paragraphs: [
          "Una tabla de 2×6 de 8 ft: (2 × 6 × 8) / 12 = 8 board feet (con medidas nominales). Si la madera está cepillada, el tamaño real suele ser menor.",
        ],
      },
      {
        heading: "Nominal vs real (por qué cambia)",
        paragraphs: [
          "La madera blanda se vende por tamaño nominal (2×4, 2×6), pero la medida real después del cepillado es menor. Si comparas por board feet, confirma si estás usando nominal o real.",
        ],
        table: {
          columns: ["Nominal", "Real aproximado", "Notas"],
          rows: [
            ["2×4", "1.5×3.5 in", "Estructura (framing)"],
            ["2×6", "1.5×5.5 in", "Estructura y decks (varía)"],
            ["4×4", "3.5×3.5 in", "Postes pueden variar por proveedor"],
          ],
        },
      },
      {
        heading: "Errores comunes",
        bullets: [
          "Mezclar medidas nominales y reales sin darte cuenta.",
          "Confundir pulgadas/pies en la fórmula.",
          "No agregar margen por defectos, cortes y selección de veta/color.",
        ],
      },
      {
        heading: "Cómo estimar para un proyecto",
        bullets: [
          "Haz una lista de piezas (espesor × ancho × largo) con cantidades.",
          "Convierte cada pieza a board feet y suma.",
          "Agrega desperdicio según el tipo de trabajo (mueble fino suele requerir más).",
        ],
      },
    ],
    related: [
      {
        label: "Calculadora de board feet",
        href: "/calculators/home-improvement/board-feet",
      },
      { label: "Calculadora de deck", href: "/calculators/home-improvement/deck" },
    ],
  },
  {
    slug: "concrete-bag-yield-guide",
    title: "Guía de rendimiento de bolsas de concreto (cuántas bolsas necesitas)",
    description:
      "Cómo estimar bolsas de concreto: por qué el rendimiento por bolsa importa, tamaños comunes y cuándo conviene ready‑mix.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "El rendimiento es el número clave",
        paragraphs: [
          "El concreto en bolsa se vende por peso, pero tú necesitas volumen. El rendimiento (ft³ por bolsa) del fabricante varía por producto, así que es más confiable que una tabla genérica.",
        ],
      },
      {
        heading: "Volumen rápido por 100 ft² (espesores comunes)",
        table: {
          columns: ["Espesor", "Volumen por 100 ft²", "Notas"],
          rows: [
            ["3\" (0.25 ft)", "0.93 yd³", "Losa delgada; confirma uso"],
            ["4\" (0.33 ft)", "1.23 yd³", "Muy común para losas"],
            ["5\" (0.42 ft)", "1.54 yd³", "Cargas mayores"],
            ["6\" (0.50 ft)", "1.85 yd³", "Trabajo más pesado"],
          ],
        },
      },
      {
        heading: "Reglas rápidas (usa la etiqueta si puedes)",
        bullets: [
          "Bolsas de 80 lb suelen rendir ~0.60 ft³ (varía).",
          "Bolsas de 60 lb suelen rendir ~0.45 ft³ (varía).",
          "Bolsas de 50 lb suelen rendir ~0.375 ft³ (varía).",
        ],
      },
      {
        heading: "No olvides bordes engrosados (error típico)",
        paragraphs: [
          "Muchas losas incluyen bordes engrosados o zapatas. Si los ignoras, te puedes quedar corto aunque el volumen de la losa esté bien. Estímalos como un volumen aparte.",
        ],
        bullets: [
          "Losa: área × espesor.",
          "Borde engrosado: longitud × ancho × (profundidad engrosada − espesor de losa).",
          "Suma todas las zonas engrosadas al final.",
        ],
      },
      {
        heading: "Cómo calcular bolsas (paso a paso)",
        paragraphs: [
          "1) Calcula el volumen total (ft³). 2) Divide por el rendimiento (ft³/bolsa). 3) Redondea hacia arriba y agrega margen.",
          "Ejemplo: 40 ft³ con bolsas de 0.60 ft³ → 40/0.60 = 66.7 → 67 bolsas (más margen).",
        ],
      },
    ],
    related: [
      {
        label: "Calculadora de bolsas de concreto",
        href: "/calculators/home-improvement/concrete-bags",
      },
      {
        label: "Calculadora de concreto",
        href: "/calculators/home-improvement/concrete",
      },
    ],
  },
  {
    slug: "concrete-cure-vs-dry-time",
    title: "Curado vs secado del concreto (lista de planificación)",
    description:
      "Nota práctica: curar no es lo mismo que secar, y el calendario importa más de lo que parece.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Curar vs secar",
        paragraphs: [
          "Curar es el proceso de ganancia de resistencia. Secar es la salida de humedad. Un piso puede sentirse “seco” arriba antes de tener resistencia útil, y puede tardar más en secar para ciertos recubrimientos.",
        ],
      },
      {
        heading: "Hitos típicos de curado (referencia)",
        table: {
          columns: ["Tiempo (típico)", "Qué suele pasar", "Recordatorio"],
          rows: [
            [
              "24–48 h",
              "Tránsito ligero (según proyecto)",
              "Protege bordes y no arrastres herramientas",
            ],
            ["3–7 días", "Ganancia inicial", "Cargas puntuales aún pueden dañar"],
            [
              "28 días",
              "“Resistencia de diseño” típica",
              "Sigue ganando resistencia después",
            ],
          ],
        },
      },
      {
        heading: "Secado para pisos y recubrimientos (no adivines)",
        paragraphs: [
          "Muchos epoxis, adhesivos y sistemas de piso son sensibles a la humedad. En vez de “tocar”, sigue la guía del producto y prueba humedad cuando sea necesario.",
        ],
        bullets: [
          "Losas más gruesas y clima frío/húmedo secan más lento.",
          "Selladores y barreras cambian el comportamiento de secado.",
          "Planifica pruebas temprano para no atrasar la instalación.",
        ],
      },
      {
        heading: "Errores comunes",
        bullets: [
          "Quitar protección demasiado pronto y secar la superficie muy rápido (riesgo de grietas).",
          "Agregar agua durante el acabado para “cerrar” la superficie (debilita).",
          "Instalar recubrimientos antes de cumplir límites de humedad (fallas de adhesión).",
        ],
      },
      {
        heading: "Nota rápida",
        paragraphs: [
          "Si vas a instalar un recubrimiento (epoxi, vinílico, madera, adhesivos), trata el secado como un hito separado del curado: confirma límites de humedad del producto y planifica pruebas con tiempo.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de concreto", href: "/calculators/home-improvement/concrete" },
      { label: "Guía de concreto", href: "/guides/home-improvement/concrete" },
    ],
  },
  {
    slug: "concrete-psi-and-mix-choice",
    title: "PSI del concreto y elección de mezcla (nota de planificación)",
    description:
      "Checklist práctico para ready‑mix: resistencia (PSI/MPa), slump, fibra y aditivos que cambian costo, trabajabilidad y desempeño.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Lo que normalmente te preguntan",
        bullets: [
          "Resistencia (PSI/MPa) y tamaño de agregado.",
          "Slump (trabajabilidad) y si quieres fibra.",
          "Aditivos (acelerante/retardante) según clima y tiempos.",
        ],
      },
      {
        heading: "Resistencia (PSI/MPa): qué aclarar",
        paragraphs: [
          "La resistencia no es solo un número: afecta costo, ventana de acabado y, a veces, el contenido mínimo de cemento. Confirma si el PSI es requisito de código, preferencia del contratista o necesidad del uso.",
          "Para trabajo estructural (zapatas, pilotes, muros), sigue requisitos locales y especificaciones; para trabajos menores, el proveedor suele recomendar una mezcla estándar.",
        ],
        bullets: [
          "Aclara si es estructural o no (losa, zapata, poste, etc.).",
          "En zonas con hielo/deshielo, pregunta por aire incorporado (air‑entrained).",
          "Si hay acero muy junto o moldes pequeños, confirma tamaño máximo de agregado.",
        ],
      },
      {
        heading: "Slump: trabajabilidad sin “agregar agua”",
        paragraphs: [
          "Un slump alto facilita colocar en algunos casos, pero agregar agua en obra suele bajar resistencia y aumentar retracción. Si necesitas más fluidez, es mejor planear aditivos antes de que llegue el camión.",
        ],
      },
      {
        heading: "Fibra, refuerzo y grietas",
        paragraphs: [
          "La fibra puede ayudar con microfisuras plásticas, pero no reemplaza automáticamente el refuerzo. El control de grietas depende de juntas, espesor, base, curado y estrategia de refuerzo.",
        ],
        bullets: [
          "Planifica juntas de control y su trazado antes del vaciado.",
          "Planifica método de curado (especialmente con calor/viento).",
          "Confirma si el proyecto requiere malla o varilla (práctica local varía).",
        ],
      },
      {
        heading: "Rangos típicos (solo para conversar)",
        table: {
          columns: ["Uso (típico)", "Rango común", "Notas"],
          rows: [
            ["Patios y andadores", "3000–3500 PSI", "Base y curado siguen mandando"],
            ["Entradas (driveways)", "3500–4500 PSI", "Hielo/deshielo puede requerir aire"],
            ["Zapatas / pilotes", "3000–4000 PSI", "Espaciamiento de acero importa"],
          ],
        },
      },
    ],
    related: [
      {
        label: "Calculadora de concreto",
        href: "/calculators/home-improvement/concrete",
      },
      { label: "Guía de concreto", href: "/guides/home-improvement/concrete" },
    ],
  },
  {
    slug: "deck-mud-coverage-chart",
    title: "Tabla de rendimiento de deck mud (mortero dry pack)",
    description:
      "Tabla rápida de cobertura, notas de mezcla y consejos para estimar deck mud por área y espesor promedio.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Tabla rápida de cobertura",
        paragraphs: [
          "El deck mud (dry pack) se estima por volumen: área × espesor promedio. La tabla es una referencia rápida para planificar espesores comunes.",
        ],
        table: {
          columns: ["Cobertura", "Espesor 1\"", "Espesor 1.5\"", "Espesor 2\""],
          rows: [
            ["50 ft²", "4.17 ft³", "6.25 ft³", "8.33 ft³"],
            ["100 ft²", "8.33 ft³", "12.5 ft³", "16.67 ft³"],
            ["150 ft²", "12.5 ft³", "18.75 ft³", "25 ft³"],
          ],
        },
      },
      {
        heading: "Regla mental rápida",
        paragraphs: [
          "Regla útil: 100 ft² a 1\" ≈ 8.33 ft³. Escala por espesor. Ej.: 80 ft² a 1.5\" → 8.33 × 0.8 × 1.5 ≈ 10 ft³.",
        ],
      },
      {
        heading: "Proporción de mezcla y consistencia",
        paragraphs: [
          "El dry pack se hace con poca agua y se compacta. Un punto de partida común es 5:1 arena:cemento por volumen, pero sigue las guías de tu sistema (impermeabilización, drenaje) para trabajos críticos.",
        ],
        bullets: [
          "Usa un recipiente constante para medir por volumen y controla el agua por lote.",
          "Prueba de “apretón”: debe compactar sin soltar agua.",
          "Planifica pendiente con espesor promedio (borde alto y bajo).",
        ],
      },
      {
        heading: "Detalle que evita problemas",
        paragraphs: [
          "No mezcles más de lo que puedas colocar y compactar en una tanda. Si el material empieza a endurecer antes de compactar, pierde densidad y el acabado puede quedar frágil.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de deck mud", href: "/calculators/home-improvement/deck-mud" },
      {
        label: "Calculadora de mud y tape (drywall)",
        href: "/calculators/home-improvement/drywall-mud-tape",
      },
    ],
  },
  {
    slug: "deck-planning-materials-and-layout-guide",
    title: "Guía de planificación de deck (diseño, separación, escaleras y lista)",
    description:
      "Guía práctica: dirección de tablas, separación (gap), desperdicio en diagonal, escaleras y los materiales que se suelen olvidar.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Dirección de tablas y bordes cambian el desperdicio",
        paragraphs: [
          "Un deck recto en un rectángulo simple suele desperdiciar menos que un diseño diagonal. Marcos tipo “picture frame”, descansos y escaleras aumentan cortes y desperdicio.",
        ],
      },
      {
        heading: "Separación y ancho real cambian la cobertura",
        paragraphs: [
          "La cobertura depende del ancho real de la tabla (no nominal) y del gap. Compuesto y madera tienen reglas distintas; sigue el manual del producto para expansión/contracción.",
        ],
      },
      {
        heading: "Desperdicio típico por diseño (referencia rápida)",
        table: {
          columns: ["Diseño", "Desperdicio típico", "Notas"],
          rows: [
            ["Recto", "5–10%", "Menos cortes en ángulo"],
            ["Diagonal", "10–15%", "Más recortes"],
            ["Marco + diagonal", "12–20%", "Ingletes se acumulan"],
          ],
        },
      },
      {
        heading: "Estructura y herrajes (no solo tablas)",
        bullets: [
          "Viguetas (joists), vigas (beams) y postes (posts) según luces y espaciado.",
          "Herrajes: colgadores, tornillos/clavos, bases de poste, anclajes.",
          "Ledger vs deck independiente (cambia flashing e impermeabilización).",
          "Barandal y escaleras (bloqueos y conectores extra).",
        ],
      },
      {
        heading: "Checklist rápido antes de comprar",
        bullets: [
          "Define material (madera/compuesto), ancho real y separación recomendada por el fabricante.",
          "Decide patrón (recto/diagonal) y si habrá marco, descansos o escaleras (afectan desperdicio).",
          "Confirma alturas y número de escalones; si necesitas barandal, planifica herrajes extra.",
          "Elige sistema de fijación (tornillos, clips ocultos) y compra un margen.",
          "Si hay ledger contra muro, revisa flashing y separación del suelo para drenaje.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de deck", href: "/calculators/home-improvement/deck" },
      { label: "Guía de deck", href: "/guides/home-improvement/deck" },
    ],
  },
  {
    slug: "drywall-materials-and-finishing-guide",
    title: "Guía de materiales y acabado de drywall (placas, juntas, mud y tape)",
    description:
      "Guía práctica: tamaños de placa, niveles de acabado y cómo estimar juntas, cinta y compuesto de forma realista.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Tamaño de placa: menos juntas vs manejo",
        paragraphs: [
          "Placas más grandes reducen juntas y pueden bajar tiempo de acabado, pero pesan más y son más difíciles de mover (especialmente en techo). Elige un tamaño que puedas instalar con seguridad.",
        ],
        table: {
          columns: ["Tamaño", "Cobertura", "Trade‑off"],
          rows: [
            ["4×8", "32 ft²", "Más fácil; más juntas"],
            ["4×10", "40 ft²", "Menos juntas; requiere espacio"],
            ["4×12", "48 ft²", "Menos juntas; pesado/incómodo"],
          ],
        },
      },
      {
        heading: "El nivel de acabado cambia el consumo",
        paragraphs: [
          "Un nivel más alto suele requerir más manos de compuesto, más lijado y más tiempo. Un acabado liso (Level 4/5) suele consumir bastante más que un acabado básico.",
        ],
      },
      {
        heading: "Tipos de placa y techo (rápido)",
        bullets: [
          "Resistente a humedad no reemplaza impermeabilización en ducha.",
          "Para cielos con 24\" OC, 5/8\" suele ayudar contra pandeo (revisa código/producto).",
          "Las esquinas y butt joints suelen consumir más compuesto para “desaparecer”.",
        ],
      },
      {
        heading: "Nota de acabado",
        paragraphs: [
          "Si vas a usar luz rasante, pintura brillante o un acabado muy liso, planifica más preparación (y más compuesto). Imperfecciones pequeñas que no se notan con pintura mate suelen aparecer después.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de drywall", href: "/calculators/home-improvement/drywall" },
      {
        label: "Calculadora de mud y tape",
        href: "/calculators/home-improvement/drywall-mud-tape",
      },
    ],
  },
  {
    slug: "fence-post-hole-concrete-guide",
    title: "Guía de concreto para hoyos de postes de cerca (profundidad y diámetro)",
    description:
      "Cómo planificar postes: por qué esquinas/portones agregan postes, qué cambia el tamaño del hoyo y cómo se acumula el volumen de concreto.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "El conteo de postes no es solo largo / espaciado",
        bullets: [
          "Esquinas, extremos y portones agregan postes extra.",
          "Postes de portón suelen requerir poste más robusto y más concreto.",
          "Pendientes y paneles escalonados cambian diseño y espaciado.",
        ],
      },
      {
        heading: "Tamaño del hoyo: no hay un único estándar",
        paragraphs: [
          "La profundidad depende de heladas (frost line), altura de cerca, viento y suelo. El diámetro depende del tamaño de poste y del sistema de cimentación. Confirma práctica local si es crítico.",
        ],
      },
      {
        heading: "Volumen rápido (cilindro)",
        paragraphs: [
          "Aproxima el hoyo como cilindro: volumen = π × radio² × profundidad. Convierte a ft³ y luego a bolsas usando el rendimiento de tu producto.",
          "Ejemplo: diámetro 12\" y profundidad 36\" → radio 0.5 ft y profundidad 3 ft → volumen ≈ 3.14 × (0.5²) × 3 ≈ 2.36 ft³ por hoyo (antes de base de grava o forma acampanada).",
        ],
        bullets: [
          "Si usas base de grava, resta esa profundidad al concreto.",
          "Hoyo acampanado (bell) aumenta volumen vs cilindro.",
          "Redondea hacia arriba: quedarte corto con el concreto “fraguando” es caro.",
        ],
      },
      {
        heading: "Checklist de instalación",
        bullets: [
          "Marca esquinas/portones primero y luego alinea los tramos rectos con cuerda.",
          "Presenta el poste y ajusta altura antes de mezclar.",
          "Aploma en dos direcciones y arriostra mientras fragua.",
          "Forma un “capuchón” con pendiente para que el agua no se acumule junto al poste.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de cerca", href: "/calculators/home-improvement/fence" },
      { label: "Guía de cerca", href: "/guides/home-improvement/fence" },
      { label: "Calculadora de bolsas de concreto", href: "/calculators/home-improvement/concrete-bags" },
    ],
  },
  {
    slug: "mulch-bag-coverage-guide",
    title: "Guía de cobertura de bolsas de mulch (¿cuántas bolsas necesitas?)",
    description:
      "Cómo planificar mulch en bolsa: tamaños de bolsa, cómo la profundidad cambia la cobertura y por qué el asentamiento importa.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Primero: el tamaño de la bolsa",
        paragraphs: [
          "El mulch en bolsa se vende por volumen (por ejemplo 2 ft³ o 3 ft³). Convierte tu cama a volumen en ft³ y divide por el volumen de la bolsa; redondea hacia arriba.",
        ],
      },
      {
        heading: "Tabla rápida (bolsas por 100 ft²)",
        paragraphs: [
          "Bolsas = (área × profundidad en pies) ÷ (ft³ por bolsa). Convierte la profundidad: 1\" = 1/12 ft.",
        ],
        table: {
          columns: ["Profundidad", "Bolsas de 2 ft³", "Bolsas de 3 ft³"],
          rows: [
            ["1\" (0.083 ft)", "≈ 5 bolsas", "≈ 3–4 bolsas"],
            ["2\" (0.167 ft)", "≈ 9 bolsas", "≈ 6 bolsas"],
            ["3\" (0.25 ft)", "≈ 13 bolsas", "≈ 9 bolsas"],
          ],
        },
      },
      {
        heading: "Elegir profundidad (1\" vs 2\" vs 3\")",
        table: {
          columns: ["Profundidad", "Uso común", "Recordatorio"],
          rows: [
            ["1\"", "Reponer/renovar", "Puede no suprimir maleza por sí solo"],
            ["2\"", "Camas típicas", "Balance común entre costo y cobertura"],
            [
              "3\"+",
              "Aspecto más profundo / control (según caso)",
              "Evita apilar contra troncos; cuida drenaje",
            ],
          ],
        },
      },
      {
        heading: "Ejemplo",
        paragraphs: [
          "Cama de 300 ft² a 2\" → volumen = 300 × (2/12) = 50 ft³. Con bolsas de 2 ft³: 50/2 = 25 bolsas (más un pequeño margen).",
        ],
      },
      {
        heading: "Granel vs bolsa",
        bullets: [
          "1 yd³ = 27 ft³: cuando el volumen es grande, bolsa suele salir caro y pesado de cargar.",
          "Granel suele ser más barato por unidad, pero necesitas acceso para descarga y mover desde la pila.",
          "Compra suficiente del mismo lote si el color importa.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de mulch", href: "/calculators/home-improvement/mulch" },
      {
        label: "Guía de profundidad de mulch",
        href: "/guides/home-improvement/mulch-depth",
      },
    ],
  },
  {
    slug: "gravel-yards-to-tons-guide",
    title: "Guía de grava: de yardas a toneladas (por qué varía la conversión)",
    description:
      "Por qué la conversión de yardas a toneladas cambia, qué significa densidad y cómo obtener el número correcto de tu proveedor.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Por qué varía la conversión",
        paragraphs: [
          "La grava se planifica por volumen (yd³) pero suele venderse por peso (ton). La conversión depende de densidad, que cambia por tipo de material, humedad y compactación.",
        ],
      },
      {
        heading: "Rangos típicos (solo planificación)",
        table: {
          columns: ["Material", "Toneladas por yd³ (típico)", "Notas"],
          rows: [
            ["Piedra triturada", "1.2–1.5", "Estimación común"],
            ["Grava tipo pea gravel", "1.2–1.4", "Suele ser un poco más ligera"],
            ["Base de camino (road base)", "1.3–1.6", "Varía por finos y humedad"],
          ],
        },
      },
      {
        heading: "Ton vs tonelada métrica (ojo con la unidad)",
        paragraphs: [
          "“Ton” puede ser short ton (2000 lb) o tonelada métrica (2204.62 lb). Confundirlas cambia el número ~10%.",
        ],
        table: {
          columns: ["Unidad", "Equivale a", "Nota"],
          rows: [
            ["1 short ton (US)", "2000 lb", "Común en EE. UU."],
            ["1 tonelada métrica", "2204.62 lb", "Común fuera de EE. UU."],
          ],
        },
      },
      {
        heading: "Mejor práctica",
        bullets: [
          "Pide al proveedor la conversión para ese material específico.",
          "Si hay capas (base + acabado), estima por separado y no mezcles productos.",
          "Agrega margen por irregularidades y compactación.",
        ],
      },
      {
        heading: "Fórmula rápida",
        paragraphs: [
          "Si tienes densidad: toneladas (short ton) = yd³ × (lb/yd³) ÷ 2000. Ej.: 5 yd³ a 2800 lb/yd³ → 5×2800/2000 = 7.0 ton.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de grava (volumen)", href: "/calculators/home-improvement/gravel" },
      { label: "Calculadora de grava en toneladas", href: "/calculators/home-improvement/gravel-tons" },
    ],
  },
  {
    slug: "sand-density-and-weight-guide",
    title: "Guía de densidad y peso de arena (yardas, toneladas y compactación)",
    description:
      "Por qué la densidad de la arena cambia, cómo convertir volumen a peso y qué confirmar con tu proveedor.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Por qué cambia la densidad",
        paragraphs: [
          "La densidad cambia por humedad, tipo de arena (masonry, concrete, play) y compactación. Por eso una sola conversión genérica puede fallar.",
        ],
      },
      {
        heading: "Rangos típicos (suelto)",
        table: {
          columns: ["Material", "lb por yd³ (aprox.)", "Notas"],
          rows: [
            ["Arena seca", "2400–2800", "Varía por gradación y humedad"],
            ["Arena húmeda", "2700–3200", "Más pesada por agua"],
          ],
        },
      },
      {
        heading: "Cómo convertir yardas a toneladas (rápido)",
        paragraphs: [
          "Peso (lb) = yd³ × (lb/yd³). Luego toneladas (short ton) = lb ÷ 2000. Ej.: 3 yd³ a 3000 lb/yd³ → 9000 lb → 4.5 ton.",
        ],
      },
      {
        heading: "Tipos de arena (qué comprar)",
        table: {
          columns: ["Tipo", "Uso típico", "Qué confirmar"],
          rows: [
            ["Masonry sand", "Mortero y cama", "Finos y gradación varían"],
            ["Concrete sand", "Mezclas y base", "Suele ser más gruesa"],
            ["Play sand", "Areneros", "Lavada; no es base estructural"],
            ["Polymeric/joint sand", "Juntas de adoquín", "Sigue instrucciones"],
          ],
        },
      },
      {
        heading: "Compactación y espesor",
        bullets: [
          "La arena entregada está suelta; la capa final se compacta y se regla.",
          "Mide espesor después de compactar cuando importa (según proyecto).",
          "Ordena un margen y redondea a mínimos de entrega.",
        ],
      },
      {
        heading: "Tip de compra",
        paragraphs: [
          "Cuando el proveedor vende por tonelada, pide la densidad o conversión para esa arena específica. La humedad puede cambiar el peso y los mínimos de entrega suelen obligar a redondear.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de arena", href: "/calculators/home-improvement/sand" },
      { label: "Guía de base para adoquines", href: "/resources/paver-base-depth-guide" },
    ],
  },
  {
    slug: "paver-base-depth-guide",
    title: "Guía de espesor de base para adoquines (¿qué tan gruesa?)",
    description:
      "Guía práctica: rangos comunes, compactación y por qué drenaje y suelo mandan más que una fórmula.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Rangos comunes (regla general)",
        table: {
          columns: ["Uso", "Base compactada típica", "Notas"],
          rows: [
            ["Patio / andador (uso ligero)", "4–6 in", "Suelos y heladas pueden subir"],
            ["Entrada (tráfico vehicular)", "8–12 in", "Más profundo en suelos débiles o heladas"],
          ],
        },
      },
      {
        heading: "Por qué suelo y drenaje importan",
        paragraphs: [
          "La profundidad depende de la subrasante y del agua. Si el suelo es blando o húmedo, se asienta. Prioriza drenaje, separación con geotextil si aplica y compactación por capas.",
        ],
      },
      {
        heading: "Arena de cama vs “nivelar”",
        table: {
          columns: ["Capa", "Espesor típico", "Notas"],
          rows: [
            ["Base compactada", "4–12 in", "Depende de uso y suelo"],
            ["Arena de cama", "≈ 1 in", "No es capa estructural gruesa"],
          ],
        },
      },
      {
        heading: "Errores comunes",
        bullets: [
          "Usar arena gruesa para corregir pendientes en vez de arreglar la base.",
          "No compactar por capas (o compactar solo arriba).",
          "Ignorar drenaje y saturar la base.",
          "No instalar borde (edge restraint) y ver que los adoquines se abren.",
        ],
      },
      {
        heading: "Detalle de compactación",
        paragraphs: [
          "La base se compacta por capas (lifts). Para una base gruesa, compactar en una sola capa suele dejar zonas blandas. Planifica el espesor final como “compactado”, no como material suelto recién extendido.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de base para adoquines", href: "/calculators/home-improvement/paver-base" },
      { label: "Calculadora de arena", href: "/calculators/home-improvement/sand" },
    ],
  },
  {
    slug: "topsoil-coverage-chart",
    title: "Tabla de cobertura de topsoil (yardas cúbicas por área y profundidad)",
    description:
      "Reglas prácticas y tabla rápida para profundidades comunes, con tips para nivelación y bolsas.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Tabla rápida (por 100 ft²)",
        table: {
          columns: ["Profundidad", "Volumen de topsoil", "Notas"],
          rows: [
            ["1 in", "0.31 yd³", "Topdressing ligero"],
            ["2 in", "0.62 yd³", "Nivelación común"],
            ["3 in", "0.93 yd³", "Relleno más pesado"],
            ["4 in", "1.23 yd³", "Relleno significativo (revisa drenaje)"],
            ["6 in", "1.85 yd³", "Relleno mayor (plan compacción/asentamiento)"],
          ],
        },
      },
      {
        heading: "Regla mental rápida",
        paragraphs: [
          "Atajo útil: 100 ft² a 1\" ≈ 0.31 yd³. Escala por profundidad. Ej.: 250 ft² a 2\" → 0.62 yd³ por 100 ft² × 2.5 ≈ 1.55 yd³.",
          "Para compra real, agrega margen: el terreno no es perfecto y el material se asienta.",
        ],
      },
      {
        heading: "Tip para no sobrecomprar",
        paragraphs: [
          "No midas solo desde el punto más bajo. Haz varias mediciones y usa un espesor promedio; un solo “hoyo” puede inflar mucho el pedido.",
        ],
      },
      {
        heading: "Bolsas: conversiones rápidas",
        paragraphs: [
          "Convierte primero a ft³: 1 yd³ = 27 ft³. 1 ft³ ≈ 28.3 L. Luego divide por el volumen por bolsa y redondea hacia arriba.",
        ],
        table: {
          columns: ["Litros", "ft³ (aprox.)", "Nota"],
          rows: [
            ["25 L", "0.88 ft³", "Bolsa pequeña"],
            ["40 L", "1.41 ft³", "Tamaño común"],
            ["50 L", "1.77 ft³", "Tamaño común"],
            ["60 L", "2.12 ft³", "Bolsa grande"],
          ],
        },
      },
      {
        heading: "Pequeño extra que vale la pena",
        paragraphs: [
          "En nivelaciones, guardar una parte para retoques suele ahorrar tiempo: después de lluvia y riego, aparecen zonas bajas. Comprar un poco más del mismo material evita diferencias de textura.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de topsoil", href: "/calculators/home-improvement/topsoil" },
      { label: "Guía de nivelación con topsoil", href: "/guides/home-improvement/topsoil-leveling" },
    ],
  },
  {
    slug: "roofing-materials-checklist-and-estimate",
    title: "Checklist de materiales para techo (lo que se olvida al estimar)",
    description:
      "Checklist práctico para pedidos de tejas: squares, bundles, desperdicio y accesorios que suelen faltar en estimaciones básicas.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Squares y bundles (revisa la etiqueta)",
        paragraphs: [
          "Un “square” son 100 ft² de superficie de techo. Muchas tejas se empaquetan para que cierto número de bundles cubra 1 square, pero varía por producto. Confirma en el empaque o ficha técnica.",
        ],
      },
      {
        heading: "Desperdicio (puntos de partida)",
        table: {
          columns: ["Complejidad", "Desperdicio común", "Por qué sube"],
          rows: [
            ["A dos aguas simple", "10–15%", "Menos cortes y valles"],
            ["Techo mixto típico", "15–20%", "Más bordes y penetraciones"],
            ["Techo complejo", "20–25%+", "Valles, buhardillas, muchos cortes"],
          ],
        },
      },
      {
        heading: "Accesorios que se olvidan",
        bullets: [
          "Starter strips",
          "Ridge cap (o sistema de cumbrera)",
          "Underlayment (fieltro o sintético)",
          "Ice & water shield (según clima/código)",
          "Drip edge",
          "Flashing (chimenea, paredes, valles) según proyecto",
          "Ventilación (ventilas, ridge vent y piezas)",
          "Clavos y selladores",
        ],
      },
      {
        heading: "Pendiente: el área de planta no es el área de techo",
        paragraphs: [
          "En techos inclinados, el área de superficie es mayor que el footprint. Usa multiplicador de pendiente o mide cada plano. El error más grande es mezclar medidas de planta con medidas en pendiente.",
        ],
      },
      {
        heading: "Ejemplo rápido (squares → bundles)",
        paragraphs: [
          "Si tu techo es 22 squares (2200 ft²) y tu teja es 3 bundles por square: 22 × 3 = 66 bundles. Luego aplica desperdicio y redondea a bundles completos.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de roofing", href: "/calculators/home-improvement/roofing" },
      { label: "Guía de roofing", href: "/guides/home-improvement/roofing" },
    ],
  },
  {
    slug: "flooring-installation-planning-and-moisture",
    title:
      "Planificación de instalación de piso (humedad, aclimatación y underlayment)",
    description:
      "Guía práctica: desperdicio, controles de humedad, aclimatación, elección de underlayment y los ítems que causan retrasos.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Por qué fallan los pisos (no es solo el área)",
        paragraphs: [
          "Muchos problemas vienen de humedad, planitud del subpiso y falta de transiciones/molduras. El cálculo de área importa, pero rara vez es lo único que define costo y tiempo.",
        ],
      },
      {
        heading: "Aclimatación y humedad",
        paragraphs: [
          "Muchos productos exigen aclimatación y límites de humedad antes de instalar. Saltarse esto puede causar abombamiento, separaciones o fallas. Sigue el manual del fabricante y verifica condiciones del subpiso.",
        ],
      },
      {
        heading: "Underlayment: debe coincidir con el sistema",
        bullets: [
          "Concreto: la barrera de vapor/humedad suele ser prioridad (según producto).",
          "Subpiso de madera: planitud y ruidos pueden importar más que vapor.",
          "Condominios: requisitos acústicos pueden dictar el material.",
          "Calefacción radiante: confirma límites de temperatura y compatibilidad.",
        ],
      },
      {
        heading: "Checklist que se olvida",
        bullets: [
          "Underlayment o barrera de vapor (según producto y subpiso).",
          "Transiciones, reducers y narices de escalón.",
          "Zócalo / shoe molding / quarter round si aplica.",
          "Compuesto autonivelante para subpiso irregular (presupuesto aparte).",
        ],
      },
      {
        heading: "Regla de compra en cajas (ejemplo)",
        paragraphs: [
          "Área × (1 + desperdicio) ÷ cobertura por caja → redondea hacia arriba. Ej.: 420 ft² con 10% → 462 ft². Si la caja cubre 20 ft²: 462/20 = 23.1 → 24 cajas.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de flooring", href: "/calculators/home-improvement/flooring" },
      { label: "Guía de flooring", href: "/guides/home-improvement/flooring" },
      { label: "Guía de cajas de piso", href: "/guides/home-improvement/flooring-boxes" },
      { label: "Calculadora de zócalos", href: "/calculators/home-improvement/baseboard-trim" },
    ],
  },
  {
    slug: "gravel-driveway-layering-and-compaction",
    title: "Capas y compactación en entrada de grava (base vs superficie)",
    description:
      "Guía práctica para estimar grava por capas: base vs capa superior, compactación, drenaje y conversiones a toneladas.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Piensa en capas (base y superficie no son lo mismo)",
        paragraphs: [
          "Muchos proyectos fallan por usar una sola profundidad para todo. Una entrada suele tener base y capa superior (a veces materiales distintos). Estima cada capa por separado para pedir el producto correcto.",
        ],
      },
      {
        heading: "Compactación: suelto vs terminado",
        paragraphs: [
          "La compactación reduce el espesor. Si quieres 4\" compactado, probablemente debes colocar más suelto. El factor depende del material y del compactador; un margen suele ser más barato que otra entrega.",
        ],
      },
      {
        heading: "Volumen y toneladas",
        paragraphs: [
          "Empieza por área × espesor promedio para volumen. Si el proveedor vende por toneladas, usa su conversión específica (densidad real).",
        ],
        table: {
          columns: ["Producto", "Rango típico ton/yd³", "Nota"],
          rows: [
            ["Piedra triturada / base", "1.3–1.6", "Humedad cambia densidad"],
            ["Pea gravel", "1.2–1.4", "Comportamiento distinto (rodado)"],
            ["Road base", "1.3–1.6", "Suele compactar bien"],
          ],
        },
      },
      {
        heading: "Base vs capa superior (elige bien el material)",
        table: {
          columns: ["Capa", "Material común", "Por qué importa"],
          rows: [
            ["Base", "Triturado con finos", "Se traba y compacta"],
            [
              "Superior",
              "Triturado más limpio o pea gravel (según caso)",
              "Apariencia y tracción",
            ],
            ["Separación (opcional)", "Geotextil (según caso)", "Reduce mezcla con subrasante"],
          ],
        },
      },
      {
        heading: "Checklist",
        bullets: [
          "Mide varios espesores y usa promedio.",
          "Estima base y capa superior por separado.",
          "Pide al proveedor la conversión yd³↔ton de su material.",
          "Agrega margen por bordes y compactación.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de grava", href: "/calculators/home-improvement/gravel" },
      { label: "Guía de conversión a toneladas", href: "/resources/gravel-yards-to-tons-guide" },
    ],
  },
  {
    slug: "soil-mix-ratio-for-raised-beds",
    title: "Proporciones de mezcla de suelo para camas elevadas (puntos de partida)",
    description:
      "Mezclas iniciales para camas elevadas y cómo ajustarlas para drenaje y fertilidad.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Mezclas comunes (por volumen)",
        table: {
          columns: ["Mezcla", "Sirve para", "Nota"],
          rows: [
            ["50% compost + 50% topsoil", "Camas generales", "Inicio simple"],
            [
              "40% topsoil + 40% compost + 20% aireación",
              "Mejor drenaje",
              "Ajusta según clima",
            ],
          ],
        },
      },
      {
        heading: "Reglas simples para ajustar",
        bullets: [
          "Si queda muy húmedo, aumenta material estructural/aireación (no solo compost).",
          "Si se seca rápido, mejora retención de agua y planifica mulching.",
          "Si el compost es muy fino o fresco, baja porcentaje y agrega estructura.",
        ],
      },
      {
        heading: "Qué es “aireación” (opciones)",
        table: {
          columns: ["Material", "Por qué se usa", "Ojo con"],
          rows: [
            ["Corteza compostada gruesa", "Estructura + drenaje", "Se degrada con el tiempo"],
            ["Pómez / perlita", "Porosidad ligera", "Polvo/costo"],
            ["Arena gruesa", "Peso y drenaje", "Arena fina densifica"],
            ["Cáscara de arroz / biochar", "Estructura", "Calidad varía"],
          ],
        },
      },
      {
        heading: "Cómo calcular volúmenes",
        paragraphs: [
          "1) Volumen de la cama (largo × ancho × profundidad). 2) Convierte a ft³ o yd³. 3) Multiplica por cada porcentaje.",
        ],
      },
      {
        heading: "Consejo para no equivocarte",
        paragraphs: [
          "Si compras por partes (compost/topsoil/aireación), usa el mismo recipiente para medir volúmenes y evita mezclar materiales muy finos. Una mezcla demasiado “polvosa” puede compactarse y drenar peor.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de mezcla de suelo", href: "/calculators/home-improvement/soil-mix" },
      { label: "Tabla de cobertura de topsoil", href: "/resources/topsoil-coverage-chart" },
    ],
  },
  {
    slug: "topsoil-leveling-step-by-step-guide",
    title: "Nivelación con topsoil paso a paso (cómo evitar sobrecomprar)",
    description:
      "Guía paso a paso: medir profundidad promedio, difuminar bordes (feather), asentamiento y cómo planificar retoques.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Por qué se sobrecompra",
        paragraphs: [
          "El error más grande es usar el punto más bajo como profundidad para toda el área. En vez de eso, usa un espesor promedio y calcula relleno extra solo donde realmente hace falta.",
        ],
      },
      {
        heading: "Paso 1: identifica altos y bajos",
        bullets: [
          "Usa cuerda, regla larga o nivel para ver la pendiente.",
          "Marca las zonas bajas como áreas separadas (relleno puntual).",
        ],
      },
      {
        heading: "Paso 2: elige un espesor promedio",
        paragraphs: [
          "Ej.: 1\" como topdressing general. Luego estima las zonas bajas por separado con su propio espesor promedio.",
        ],
      },
      {
        heading: "Paso 3: feathering consume material",
        paragraphs: [
          "Difuminar la transición evita “bordes” que luego se vuelven baches. También consume material, por eso casi siempre necesitas un margen más allá de la matemática del espesor promedio.",
        ],
      },
      {
        heading: "Paso 4: asentamiento y retoques",
        bullets: [
          "Riega ligeramente y vuelve a revisar después de asentarse.",
          "Guarda un poco para retoques tras la primera lluvia.",
          "En rellenos profundos, puede requerir varias pasadas o resiembra (según caso).",
        ],
      },
    ],
    related: [
      { label: "Calculadora de topsoil", href: "/calculators/home-improvement/topsoil" },
      { label: "Tabla de cobertura", href: "/resources/topsoil-coverage-chart" },
    ],
  },
  {
    slug: "paint-planning-complete-guide",
    title: "Guía completa para planificar pintura (manos, primer, brillo y preparación)",
    description:
      "Guía práctica para estimar pintura: cómo decidir manos y primer, elegir brillo y medir bien para comprar lo correcto.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Mide superficie pintable (no área de piso)",
        paragraphs: [
          "La pintura se determina por área de paredes (y a veces techo y molduras), no por el tamaño del piso. Mide cada pared (ancho × alto) y suma. Si quieres afinar, resta aberturas grandes, pero muchos lo dejan como margen.",
        ],
      },
      {
        heading: "Cuántas manos necesitas",
        bullets: [
          "Cambio grande de color: suele requerir más manos o primer.",
          "Pared porosa o drywall nuevo: primer reduce “flashing”.",
          "Textura fuerte: baja cobertura real y sube consumo.",
          "Brillos altos muestran más defectos: preparación manda.",
        ],
      },
      {
        heading: "Planifica primer como partida separada",
        paragraphs: [
          "El primer mejora adherencia y cobertura en casos específicos, pero es un paso y material aparte. Si lo necesitas y solo presupuestas galones de pintura, vas a subcomprar.",
        ],
      },
      {
        heading: "Checklist de compra",
        bullets: [
          "Define paredes/techo/molduras como líneas separadas si usan productos distintos.",
          "Confirma cobertura por galón/litro y número de manos (mejor ser conservador).",
          "Compra del mismo lote si el color exacto importa.",
          "Guarda un poco para retoques futuros (misma marca y brillo).",
        ],
      },
      {
        heading: "Dos cosas que cambian el resultado",
        bullets: [
          "Textura y porosidad: suelen bajar la cobertura real más que el número “promedio” por galón.",
          "Herramienta: rodillo vs brocha y el tamaño del pelo influyen en consumo y retoques.",
        ],
      },
      {
        heading: "Error típico",
        paragraphs: [
          "No uses primer para “ahorrar” pintura si el problema es solo cobertura. El primer se suma como producto, y su valor suele estar en adherencia y uniformidad, no en reemplazar manos de acabado.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de pintura", href: "/calculators/home-improvement/paint" },
      { label: "Guía de primer vs pintura", href: "/resources/primer-vs-paint-when-to-prime" },
    ],
  },
  {
    slug: "primer-vs-paint-when-to-prime",
    title: "Primer vs pintura (cuándo aplicar primer para mejor cobertura)",
    description:
      "Nota práctica: el primer puede mejorar cobertura y adherencia, pero es un paso/material aparte.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Cuándo ayuda el primer",
        bullets: [
          "Drywall nuevo y parches (reduce flashing).",
          "Manchas (usa stain‑block si aplica).",
          "Cambios fuertes de color (puede reducir manos).",
          "Superficies brillosas (mejora adherencia con preparación).",
          "Superficies crudas o porosas (uniforma absorción).",
        ],
      },
      {
        heading: "Primer vs una mano extra (cómo decidir)",
        paragraphs: [
          "Si el problema es absorción o adherencia, el primer suele ser lo correcto. Si el problema es solo cubrimiento por cambio de color, a veces basta una mano extra, pero primer también puede ayudar.",
        ],
        table: {
          columns: ["Situación", "Plan común", "Por qué"],
          rows: [
            ["Parches/drywall nuevo", "Primer + 2 manos", "Reduce brillo desigual"],
            ["Manchas", "Stain‑block + manos", "Evita que traspase"],
            ["Moldura brillante", "Lijado + bonding primer", "Mejor adherencia"],
            ["Repintado mismo color", "1–2 manos", "Primer suele no ser necesario"],
          ],
        },
      },
      {
        heading: "Tip de estimación",
        paragraphs: [
          "Trata el primer como producto separado con su propia cobertura y manos. Primer no “reemplaza” galones de pintura; se suma al plan.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de pintura", href: "/calculators/home-improvement/paint" },
      { label: "Guía de pintura de molduras", href: "/resources/paint-trim-enamel-selection-and-prep" },
    ],
  },
  {
    slug: "paint-trim-enamel-selection-and-prep",
    title: "Guía de pintura para molduras (esmalte, preparación y durabilidad)",
    description:
      "Guía práctica para molduras: elección de esmalte, preparación sobre brillo y cómo planear manos y retoques para un acabado durable.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "La moldura no es la misma pintura que la pared",
        paragraphs: [
          "La pintura de molduras suele ser esmalte: más dura, lavable y sensible a la preparación. Si la superficie está sucia o brillosa, el riesgo de pelado sube.",
        ],
      },
      {
        heading: "Checklist de preparación",
        bullets: [
          "Limpiar (grasa y residuos reducen adherencia).",
          "Lijar/desbastar (especialmente si hay brillo).",
          "Imprimar donde corresponde (madera expuesta, manchas, reparaciones).",
          "Elegir brillo (satin/semigloss son comunes).",
        ],
      },
      {
        heading: "Estimar molduras por separado",
        paragraphs: [
          "Los perfiles aumentan superficie. Atajo útil: área ≈ pies lineales × ancho visible promedio (en pies). Ej.: 300 ft con 3.5\" → 300 × (3.5/12) ≈ 87.5 ft² por mano.",
        ],
      },
      {
        heading: "Elegir esmalte (resumen)",
        table: {
          columns: ["Tipo", "Ventajas", "Trade‑offs"],
          rows: [
            ["Acrílico al agua", "Seca rápido, poco olor", "Puede ser menos duro"],
            ["Alquídico/uretano al agua", "Acabado más liso, curado duro", "Curado más largo"],
            ["Base aceite (donde se usa)", "Muy duro y autonivelante", "Olor/VOC, amarilleo"],
          ],
        },
      },
      {
        heading: "Tip para un acabado durable",
        paragraphs: [
          "Respeta el tiempo de curado del esmalte: puede “secar” rápido al tacto, pero tarda más en endurecer. Evita limpieza agresiva o golpes en los primeros días.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de pintura (paredes)", href: "/calculators/home-improvement/paint" },
      { label: "Guía de primer", href: "/resources/primer-vs-paint-when-to-prime" },
    ],
  },
  {
    slug: "tile-project-planning-guide",
    title: "Guía de planificación de proyecto de azulejo (layout, overage y lista)",
    description:
      "Guía práctica: elegir overage, evitar errores de cobertura por caja y armar una lista completa de materiales.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Empieza por el layout (define desperdicio)",
        paragraphs: [
          "El desperdicio suele venir de cortes y diseño. Recto en un área simple desperdicia menos que diagonal, espiga o proyectos con muchos nichos y penetraciones.",
        ],
        table: {
          columns: ["Tipo de instalación", "Overage típico", "Notas"],
          rows: [
            ["Piso recto", "10%", "Sube con muchas esquinas"],
            ["Diagonal / patrones", "15–20%", "Más cortes"],
            ["Muros con nichos/penetraciones", "15–25%", "Difícil reutilizar piezas pequeñas"],
            ["Formato grande", "10–15%", "Menos piezas, pero riesgo de rotura"],
          ],
        },
      },
      {
        heading: "Cobertura por caja: manda la etiqueta",
        paragraphs: [
          "No calcules cobertura solo por tamaño de pieza. La cobertura por caja varía por producto y piezas por caja. Usa ft²/m² por caja del fabricante y redondea a cajas completas.",
        ],
      },
      {
        heading: "Lista completa (lo que falta en el “solo azulejo”)",
        bullets: [
          "Thinset/mortero (según azulejo y sustrato)",
          "Grout (tipo y ancho de junta cambian consumo)",
          "Impermeabilización (zonas húmedas) y/o membrana desacoplante",
          "Backer board/preparación de sustrato",
          "Trim, transiciones y juntas de movimiento",
          "Espaciadores, sistema de nivelación y silicón en cambios de plano",
        ],
      },
      {
        heading: "Detalle que evita desperdicio",
        paragraphs: [
          "Antes de comprar, decide dónde irá la primera línea y cómo terminarán los cortes en bordes visibles. Un pequeño ajuste de layout puede reducir cortes feos y también bajar el overage necesario.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de azulejo", href: "/calculators/home-improvement/tile" },
      { label: "Guía de grout", href: "/resources/tile-grout-selection-and-coverage-guide" },
    ],
  },
  {
    slug: "tile-waterproofing-and-membranes-guide",
    title: "Impermeabilización y membranas en azulejo (requerido vs opcional)",
    description:
      "Guía práctica de impermeabilización en proyectos de azulejo: duchas, áreas húmedas, tipos de membrana y por qué la preparación define durabilidad.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Impermeabilizar es un sistema, no un producto",
        paragraphs: [
          "Muchas fallas vienen de agua detrás del azulejo. La impermeabilización debe tratarse como sistema: sustrato + membrana + uniones + penetraciones.",
        ],
      },
      {
        heading: "Tipos comunes (alto nivel)",
        table: {
          columns: ["Tipo", "Uso común", "Notas"],
          rows: [
            ["Membrana en lámina", "Duchas/zonas húmedas", "Espesor consistente; sellar uniones"],
            ["Membrana líquida", "Muros/pisos húmedos", "Depende de espesor; requiere curado"],
            ["Membrana desacoplante", "Pisos", "Manejo de movimiento; no siempre impermeable"],
          ],
        },
      },
      {
        heading: "Checklist antes de comprar",
        bullets: [
          "Define exposición al agua (ducha vs salpicadura).",
          "Confirma sustrato permitido (cement board, foam board, drywall donde aplica).",
          "Lista penetraciones (válvulas, nichos, banca) y cómo se sellan.",
          "Elige thinset compatible con membrana/azulejo.",
        ],
      },
      {
        heading: "Por qué grout y silicón no son impermeabilización",
        paragraphs: [
          "El grout y el sellador ayudan en superficie y juntas de movimiento, pero no sustituyen una membrana y detalles correctos en zonas mojadas.",
        ],
      },
      {
        heading: "Error típico: membrana líquida demasiado delgada",
        bullets: [
          "Sigue la cobertura del fabricante para lograr el espesor de película seca.",
          "Respeta tiempos de curado (temperatura y humedad importan).",
          "Usa refuerzo donde el sistema lo pida (esquinas y uniones).",
        ],
      },
      {
        heading: "Tip de durabilidad",
        paragraphs: [
          "En duchas, los detalles mandan: esquinas, nichos y penetraciones deben sellarse según el sistema. No mezcles productos incompatibles (thinset, membrana, selladores) sin confirmar compatibilidad.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de azulejo", href: "/calculators/home-improvement/tile" },
      { label: "Guía de proyecto de azulejo", href: "/resources/tile-project-planning-guide" },
    ],
  },
  {
    slug: "studs-corners-and-openings-guide",
    title: "Studs: esquinas y aberturas (por qué falla el cálculo simple)",
    description:
      "Nota práctica de framing: esquinas, intersecciones en T y aberturas agregan studs más allá de largo/espaciado.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "De dónde salen studs extra",
        bullets: [
          "Esquinas (detalle de 2 vs 3 studs).",
          "Intersecciones en T y necesidades de backing/blocking.",
          "Aberturas (puertas/ventanas) con king/jack studs y soporte de header.",
        ],
      },
      {
        heading: "Qué te da el cálculo (y qué no)",
        paragraphs: [
          "Un cálculo por espaciado estima bien los studs “de campo” en tramos rectos. En obra real se agregan studs donde hay carga, donde el drywall necesita apoyo y donde las aberturas requieren estructura.",
        ],
      },
      {
        heading: "Método simple para ajustar",
        bullets: [
          "Agrega un extra por cada esquina (según tu detalle).",
          "Agrega un extra por cada puerta/ventana (king/jack, header y cripples si aplica).",
          "Agrega blocking si habrá gabinetes, barandales o fijaciones pesadas.",
        ],
      },
      {
        heading: "No olvides plates (top/bottom)",
        paragraphs: [
          "Las placas (bottom plate y a menudo doble top plate) se compran en largos estándar y necesitan empalmes. Estímalas como partida aparte: longitud de muro × número de corridas, luego convierte a piezas y agrega margen.",
        ],
      },
      {
        heading: "Consejo práctico",
        paragraphs: [
          "Si tu pared tiene varias aberturas, trata cada una como un “paquete”: king + jack + header y, a veces, cripples. Contarlas explícitamente suele ser más preciso que agregar un porcentaje global.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de studs", href: "/calculators/home-improvement/studs" },
      { label: "Calculadora de drywall", href: "/calculators/home-improvement/drywall" },
      { label: "Metodología", href: "/methodology" },
    ],
  },
  {
    slug: "fence-planning-posts-gates-and-materials-guide",
    title: "Guía de planificación de cerca (postes, portones y checklist)",
    description:
      "Guía práctica: paneles vs pickets, espaciado de postes, portones y esquinas, y los materiales que más se olvidan.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Define panel vs picket antes de estimar",
        paragraphs: [
          "Cercas de panel se estiman por secciones (6/8 ft). Cercas de pickets se estiman por cantidad de tablas y longitud de rieles. Cambia la matemática y la lista de compras.",
        ],
      },
      {
        heading: "Panel vs picket (qué cambia)",
        table: {
          columns: ["Estilo", "Cantidad principal", "Extras comunes"],
          rows: [
            [
              "Panel",
              "Paneles/secciones",
              "Brackets, ajustes por pendiente (step/rack)",
            ],
            [
              "Picket",
              "Cantidad de pickets + rieles",
              "Tornillos, separador, pickets extra por daño",
            ],
          ],
        },
        bullets: [
          "Portones y esquinas suelen requerir postes extra y refuerzo.",
          "En pendiente, el sistema (stepped vs racked) cambia layout y desperdicio.",
        ],
      },
      {
        heading: "Postes: no es solo largo ÷ espaciado",
        paragraphs: [
          "Esquinas, extremos y portones agregan postes y, a menudo, concreto. La profundidad depende de altura y línea de helada local; eso cambia largo de poste y volumen de concreto.",
        ],
      },
      {
        heading: "Portones: herrajes y holguras",
        bullets: [
          "Postes de portón suelen ser más robustos o más profundos (según caso).",
          "Herrajes (bisagras, pestillo) son partida aparte.",
          "Pendiente cambia holguras y dirección de apertura.",
        ],
      },
      {
        heading: "Checklist rápido",
        bullets: [
          "Cuenta postes especiales: esquinas, extremos, portones.",
          "Estima concreto como partida aparte y redondea hacia arriba.",
          "Incluye herrajes, brackets, tornillos y tratamiento de madera si aplica.",
          "Planifica drenaje y profundidad según práctica local.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de cerca", href: "/calculators/home-improvement/fence" },
      { label: "Guía de hoyos y concreto", href: "/resources/fence-post-hole-concrete-guide" },
    ],
  },
  {
    slug: "tile-grout-selection-and-coverage-guide",
    title: "Guía de grout para azulejo (sanded vs unsanded, junta y cobertura)",
    description:
      "Cómo elegir grout, dimensionar juntas y entender por qué la cobertura cambia con tamaño de azulejo y ancho de junta.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Tipo de grout: sanded vs unsanded vs especial",
        paragraphs: [
          "La elección depende de ancho de junta, tipo de azulejo y ambiente. En zonas de alto uso o manchas, un grout especial o epóxico puede valer la pena.",
        ],
        table: {
          columns: ["Tipo", "Uso común", "Trade‑off"],
          rows: [
            ["Unsanded", "Juntas estrechas y ciertos pulidos", "Más liso; no para todos los anchos"],
            ["Sanded", "Juntas más anchas / muchos pisos", "Más fuerte en juntas anchas"],
            ["Epóxico/especial", "Húmedo / resistencia a manchas", "Más caro; otra ventana de trabajo"],
          ],
        },
      },
      {
        heading: "Por qué la cobertura varía",
        paragraphs: [
          "El consumo lo manda el volumen total de juntas, no el área. Azulejo pequeño = más metros lineales de junta. Junta más ancha o profunda = más grout.",
        ],
      },
      {
        heading: "Reglas prácticas",
        bullets: [
          "Confirma tamaño real de azulejo y ancho de junta que vas a instalar.",
          "Estima mosaicos por separado: incrementan juntas drásticamente.",
          "Redondea a bolsas completas y guarda un poco para retoques.",
          "Juntas de movimiento usan silicón/caulk, no grout.",
        ],
      },
      {
        heading: "Tip de compra",
        paragraphs: [
          "La cobertura por bolsa cambia mucho entre marcas. Para no quedarte corto, usa la tabla/etiqueta de tu producto y guarda una pequeña cantidad del mismo lote para reparaciones.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de grout", href: "/calculators/home-improvement/tile-grout" },
      { label: "Calculadora de azulejo", href: "/calculators/home-improvement/tile" },
    ],
  },
  {
    slug: "topsoil-vs-compost-blends-for-lawns-and-beds",
    title: "Topsoil vs mezcla con compost (césped vs camas de jardín)",
    description:
      "Cuándo usar topsoil puro, cuándo una mezcla ayuda y cómo planear proporciones sin excederte con orgánicos.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Topsoil y compost hacen trabajos distintos",
        paragraphs: [
          "Topsoil se usa para relleno y nivelación; compost para materia orgánica y estructura. La mezcla adecuada depende de si es césped o cama de jardín.",
        ],
      },
      {
        heading: "Césped vs camas (guía rápida)",
        table: {
          columns: ["Proyecto", "Enfoque común", "Recordatorio"],
          rows: [
            ["Topdressing de césped", "Mayormente topsoil + poco compost", "Demasiado compost asienta y queda blando"],
            ["Nivelación", "Topsoil para relleno + compost puntual", "Mide profundidad promedio + feathering"],
            ["Camas de jardín", "Topsoil + compost", "Ajusta por plantas y suelo existente"],
          ],
        },
      },
      {
        heading: "Proporciones simples (inicio)",
        table: {
          columns: ["Uso", "Compost típico (vol.)", "Por qué"],
          rows: [
            ["Césped (topdressing)", "10–25%", "Aporta sin ablandar demasiado"],
            ["Capa superior nuevo césped", "10–30%", "Ayuda a enraizar (según caso)"],
            ["Camas de verduras", "25–50%", "Fertilidad + estructura (según calidad)"],
          ],
        },
      },
      {
        heading: "Checklist",
        bullets: [
          "Mide profundidad promedio en varios puntos.",
          "Si mezclas, calcula volúmenes por separado (topsoil vs compost).",
          "Agrega margen por asentamiento y feathering.",
          "Calidad importa: confirma topsoil cribado y compost bien terminado.",
        ],
      },
      {
        heading: "Tip de mezcla",
        paragraphs: [
          "Para césped, menos suele ser más: demasiado compost puede asentarse y dejar una capa esponjosa. Si quieres mejorar el suelo, aplica compost en capas delgadas y repite según temporada.",
        ],
      },
    ],
    related: [
      { label: "Tabla de cobertura de topsoil", href: "/resources/topsoil-coverage-chart" },
      { label: "Calculadora de mezcla de suelo", href: "/calculators/home-improvement/soil-mix" },
    ],
  },
  {
    slug: "wallpaper-rolls-by-wall-height",
    title: "Rollos de papel tapiz según altura de pared (por qué paredes altas requieren más)",
    description:
      "Por qué la altura cambia tiras por rollo y cómo el patrón (repeat) aumenta desperdicio.",
    lastUpdated: "Última actualización: ene 2026",
    sections: [
      {
        heading: "Por qué la altura cambia el conteo",
        paragraphs: [
          "El papel se corta en tiras de altura completa. Pared más alta = menos tiras por rollo (más recorte y, a veces, más desperdicio).",
        ],
      },
      {
        heading: "El pattern repeat puede mandar más que la altura",
        paragraphs: [
          "Si hay repetición de patrón, debes alinear el dibujo y pierdes longitud útil por tira. Mientras mayor el repeat, mayor desperdicio.",
        ],
      },
      {
        heading: "Cuándo subir el pedido",
        bullets: [
          "Repeat grande.",
          "Muchas ventanas/puertas y esquinas (más tiras separadas).",
          "Si quieres material para reparaciones futuras (importa el lote).",
        ],
      },
      {
        heading: "Método práctico: cuenta tiras primero",
        bullets: [
          "Cuenta tiras por pared (ancho de pared ÷ ancho del rollo) y redondea.",
          "Determina tiras por rollo con altura + margen + repeat.",
          "Redondea a rollos completos y compra extra si el lote debe coincidir.",
        ],
      },
      {
        heading: "Detalle que sube el pedido",
        paragraphs: [
          "Suma un margen por recortes arriba/abajo y por paredes fuera de plomo. En casas antiguas, unos centímetros extra por tira pueden cambiar tiras por rollo.",
        ],
      },
    ],
    related: [
      { label: "Calculadora de rollos de papel tapiz", href: "/calculators/home-improvement/wallpaper-rolls" },
      { label: "Calculadora de pintura (alternativa)", href: "/calculators/home-improvement/paint" },
    ],
  },
];
