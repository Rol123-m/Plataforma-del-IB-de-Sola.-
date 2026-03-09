// data.js - Archivo de configuración de datos
// Instituto Bíblico "Iglesia Bautista de Sola"

const DATOS_INSTITUTO = {
    // ============================================
    // INFORMACIÓN DEL INSTITUTO
    // ============================================
    instituto: {
        nombre: "Instituto Bíblico 'Iglesia Bautista de Sola'",
        subtitulo: "Bajo los auspicios del Seminario Teológico Bautista de Cuba Oriental (STBCOr)",
        duracion: "24-30 meses",
        titulo: "Bachiller en Teología"
    },

    // ============================================
    // SECCIÓN DE ANUNCIOS
    // ============================================
    anuncios: [
        {
            titulo: "📢 Inicio del Módulo 1",
            fecha: "4 de Marzo, 2026",
            contenido: "¡Comenzamos! Tres asignaturas: Introducción a la Biblia (2 turnos), Liderazgo de Servicio y Técnica de Estudio."
        },
        {
            titulo: "📚 Horario del Módulo",
            fecha: "Actualizado",
            contenido: "1er y 2do turno: Introducción a la Biblia | 3er y 4to turno: Liderazgo y Técnica de Estudio (alternados)"
        },
        {
            titulo: "🙏 Clases del próximo encuentro",
            fecha: "18 de marzo",
            contenido: "Primer y segundo turno: Introducción al estudio de la Biblia. Tercer y cuarto turno: Técnica de Estudio"
        },
        {
            titulo: "📝 Tarea Liderazgo",
            fecha: "4 de marzo",
            contenido: "Leer capítulo 2 del libro y hacer diagnóstico de estilo de liderazgo. Esta tarea debe estar lista para el 1ro de abril"
        },
        {
            titulo: "📝 Guía de estudio disponible para la pregunta escrita de IB-BI-001",
            fecha: "18 de marzo",
            contenido: "En la sección de recursos, en la asignatura, puede encontrar la guía para la pregunta escrita "
        }
    ],

    // ============================================
    // ASIGNATURAS DEL MÓDULO 1 (TODAS ACTIVAS)
    // ============================================
    asignaturas: [
        // ASIGNATURA 1: Introducción al estudio de la Biblia (6 clases - 12 horas)
        {
            id: "introduccion-biblia",
            codigo: "IB-BI-001",
            nombre: "Introducción al estudio de la Biblia",
            profesor: "Lic. Rolando Y. Desdín García (MET en proceso)",
            descripcion: "Puerta de entrada a todo el programa de estudios teológicos. Establece una base sólida sobre la naturaleza, origen, transmisión y manejo general de la Biblia.",
            creditos: 2,
            horas_totales: "12 horas",
            horas_presenciales: "10 horas",
            modulo: 1,
            periodo: "Marzo – Mayo 2026",
            horario: "1er y 2do turno (3:00 PM - 4:20 PM)",
            total_clases: 6,
            activa: true,
            proximas_clases: [
                { fecha: "4 de marzo", tema: "¿Por qué estudiar la Biblia? / Origen Divino" },
                { fecha: "18 de marzo", tema: "¿Cómo nos llegó la Biblia? Originales-manuscritos-traducciones" },
                { fecha: "1 de abril", tema: "¿Cómo nos llegó la Biblia (Parte 2) Transmisión y Panorama del AT" },
                { fecha: "15 de abril", tema: "Período Intertestamentario y Panorama del NT" },
                { fecha: "29 de abril", tema: "Principios, Herramientas y Obstáculos" },
                { fecha: "13 de mayo", tema: "Conclusión y Evaluación Final" }
            ],
            silabo: {
                objetivo_general: "Establecer una base sólida y motivadora sobre la naturaleza, origen, transmisión y manejo general de la Biblia.",
                metodologia: "Clases presenciales interactivas, lectura dirigida, trabajo práctico con herramientas bíblicas.",
                evaluacion: "Asistencia (20%) | Trabajo Práctico/Ensayo (40%) | Actividades en clase (20%) | Preguntas escritas (20%)"
            },
            clases: [
                { 
                    numero: 1,
                    nombre: "Clase 1: ¿Por qué estudiar la Biblia? (Hora 1)",
                    fecha: "4 de marzo",
                    hora: "3:00 PM - 3:40 PM",
                    url: "clases/introduccion-biblia/clase-1-hora-1.html",
                    temas: ["La Biblia como alimento (1 P 2:2)", "Lámpara (Sal 119:105)"],
                    disponible: true
                },
                { 
                    numero: 1,
                    nombre: "Clase 1: El Origen Divino de la Biblia (Hora 2)",
                    fecha: "4 de marzo",
                    hora: "3:45 PM - 4:20 PM",
                    url: "clases/introduccion-biblia/clase-1-hora-2.html",
                    temas: ["Revelación, Inspiración e Iluminación"],
                    disponible: true
                },
                { 
                    numero: 2,
                    nombre: "Clase 2: ¿Cómo nos llegó la Biblia? - Parte 1",
                    fecha: "18 de marzo",
                    hora: "3:00 PM - 4:20 PM",
                    url: "#",
                    temas: ["Idiomas originales", "Materiales de escritura", "Rollos del Mar Muerto", "La Septuaginta"],
                    disponible: false
                },
                { 
                    numero: 3,
                    nombre: "Clase 3: Transmisión y Panorama del AT",
                    fecha: "1 de abril",
                    hora: "3:00 PM - 4:20 PM",
                    url: "#",
                    temas: ["Crítica textual", "Versiones", "Argumento del AT"],
                    disponible: false
                },
                { 
                    numero: 4,
                    nombre: "Clase 4: Período Intertestamentario y Panorama del NT",
                    fecha: "15 de abril",
                    hora: "3:00 PM - 4:20 PM",
                    url: "#",
                    temas: ["400 años de silencio", "Grupos políticos", "Argumento del NT"],
                    disponible: false
                },
                { 
                    numero: 5,
                    nombre: "Clase 5: Principios, Herramientas y Obstáculos",
                    fecha: "29 de abril",
                    hora: "3:00 PM - 4:20 PM",
                    url: "#",
                    temas: ["Observación, Interpretación, Aplicación", "Herramientas básicas"],
                    disponible: false
                },
                { 
                    numero: 6,
                    nombre: "Clase 6: Conclusión y Evaluación Final",
                    fecha: "13 de mayo",
                    hora: "3:00 PM - 4:20 PM",
                    url: "#",
                    temas: ["Presentación de trabajos", "Evaluación final"],
                    disponible: false
                }
            ],
            recursos: [
                { nombre: "📖 guía de estudio para la pregunta escrita No 1", url: "https://rol123-m.github.io/repaso-del-IB-clase-uno/", tipo: "requerido" },
                { nombre: "📖 Biblia NVI (obligatorio)", url: "#", tipo: "requerido" },
                { nombre: "📘 Manual de la asignatura", url: "#", tipo: "requerido" },
                { nombre: "📙 Fee & Stuart - La lectura eficaz de la Biblia", url: "#", tipo: "recomendado" },
                { nombre: "📗 Grudem - Teología Sistemática", url: "#", tipo: "consulta" }
            ]
        },
        
        // ASIGNATURA 2: Liderazgo de Servicio (5 clases - 7 horas)
        {
            id: "liderazgo-servicio",
            codigo: "IB-MT-702",
            nombre: "Liderazgo de Servicio",
            profesor: "Lic. Yordanka Álvarez Pérez MMin (en proceso) METh (en proceso)",
            descripcion: "Desarrolla habilidades de liderazgo basadas en el ejemplo de Jesús, enfocándose en el servicio, la formación de discípulos y el liderazgo transformacional.",
            creditos: 2,
            horas_totales: "7 horas",
            modulo: 1,
            periodo: "Marzo – Mayo 2026",
            horario: "3er y 4to turno (alternado según calendario)",
            total_clases: 5,
            activa: true,
            proximas_clases: [
                { fecha: "4 de marzo", tema: "Introducción al Liderazgo de Servicio", turno: "3er y 4to turno" },
                { fecha: "1 de abril", tema: "Estilos de liderazgo", turno: "3er turno" },
                { fecha: "15 de abril", tema: "Formando equipos de servicio", turno: "4to turno" },
                { fecha: "29 de abril", tema: "Motivar a otros/liderar el cambio", turno: "3er turno" },
                { fecha: "13 de mayo", tema: "Integridad y rendición de cuentas", turno: "4to turno" }
            ],
            clases: [
                {
                    numero: 1,
                    nombre: "Clase 1: Introducción al Liderazgo de Servicio",
                    fecha: "4 de marzo",
                    hora: "4:30 PM - 6:00 PM (3er y 4to turno)",
                    url: "clases/liderazgo-servicio/clase-1.html",
                    temas: ["¿Qué es el liderazgo?", "Liderazgo de servicio", "Estudio de caso", "Niveles de liderazgo"],
                    disponible: true
                },
                {
                    numero: 2,
                    nombre: "Introducción a los estilos de liderazgo",
                    fecha: "1 de abril",
                    hora: "4:30 PM - 5:15 PM (3er turno)",
                    url: "#",
                    temas: ["Estilos de liderazgo", "Conócete a tí mismo"],
                    disponible: false
                },
                {
                    numero: 3,
                    nombre: "Clase 3: Formando equipos de servicio",
                    fecha: "15 de abril",
                    hora: "5:15 PM - 6:00 PM (4to turno)",
                    url: "#",
                    temas: ["El corazón del líder", "Humildad y servicio"],
                    disponible: false
                },
                {
                    numero: 4,
                    nombre: "Clase 4: Motivando a otros",
                    fecha: "29 de abril",
                    hora: "4:30 PM - 5:15 PM (3er turno)",
                    url: "#",
                    temas: ["Delegación", "Desarrollo de equipos"],
                    disponible: false
                },
                {
                    numero: 5,
                    nombre: "Clase 5: Integridad y rendición de cuentas",
                    fecha: "13 de mayo",
                    hora: "5:15 PM - 6:00 PM (4to turno)",
                    url: "#",
                    temas: ["Integridad en el liderazgo", "Plan de desarrollo"],
                    disponible: false
                }
            ],
            recursos: [
                { nombre: "📖 Libro: Liderazgo de Servicio (capítulos 1-2)", url: "#", tipo: "requerido" },
                { nombre: "📝 Diagnóstico de estilo de liderazgo", url: "#", tipo: "material" },
                { nombre: "📄 Estudio de caso: ¿Líder o Jefe?", url: "recursos/estudio-caso-1.html", tipo: "material" }
            ]
        },

        // ASIGNATURA 3: Técnica de Estudio (3 clases - 7 horas)
        {
            id: "tecnica-estudio",
            codigo: "IB-IN-800",
            nombre: "Técnica de Estudio",
            profesor: "Raúl Isnel Viera de la Rosa.",
            descripcion: "Desarrolla habilidades y métodos efectivos de estudio para optimizar el aprendizaje y la retención de contenidos teológicos.",
            creditos: 2,
            horas_totales: "7 horas",
            modulo: 1,
            periodo: "Marzo – Mayo 2026",
            horario: "3er turno (alternado)",
            total_clases: 3,
            activa: true,
            proximas_clases: [
                { fecha: "18 de marzo", tema: "Técnica de Estudio", turno: "3er turno" },
                { fecha: "1 de abril", tema: "Técnica de Estudio", turno: "3er turno" },
                { fecha: "15 de abril", tema: "Técnica de Estudio", turno: "3er turno" }
            ],
            clases: [
                {
                    numero: 1,
                    nombre: "Clase 1: Fundamentos del Estudio Efectivo",
                    fecha: "18 de marzo",
                    hora: "4:30 PM - 5:15 PM",
                    url: "#",
                    temas: ["Métodos de estudio", "Organización del tiempo", "Técnicas de memorización"],
                    disponible: false
                },
                {
                    numero: 2,
                    nombre: "Clase 2: Lectura Comprensiva y Análisis",
                    fecha: "1 de abril",
                    hora: "4:30 PM - 5:15 PM",
                    url: "#",
                    temas: ["Lectura activa", "Subrayado", "Mapas conceptuales"],
                    disponible: false
                },
                {
                    numero: 3,
                    nombre: "Clase 3: Preparación para Evaluaciones",
                    fecha: "15 de abril",
                    hora: "4:30 PM - 5:15 PM",
                    url: "#",
                    temas: ["Métodos de repaso", "Preparación de exámenes", "Manejo de ansiedad"],
                    disponible: false
                }
            ],
            recursos: [
                { nombre: "📘 Manual de Técnicas de Estudio", url: "#", tipo: "requerido" },
                { nombre: "📝 Plantilla de organización semanal", url: "#", tipo: "material" }
            ]
        }
    ],

    // ============================================
    // CALENDARIO COMPLETO DEL MÓDULO 1
    // ============================================
    calendario_modulo: [
        { 
            fecha: "4 de marzo", 
            clases: [
                { turno: "1er turno (3:00-3:40)", asignatura: "Introducción a la Biblia - Hora 1", disponible: true },
                { turno: "2do turno (3:45-4:20)", asignatura: "Introducción a la Biblia - Hora 2", disponible: true },
                { turno: "3er turno (4:30-5:15)", asignatura: "Liderazgo de Servicio - Parte 1", disponible: true },
                { turno: "4to turno (5:15-6:00)", asignatura: "Liderazgo de Servicio - Parte 2", disponible: true }
            ]
        },
        { 
            fecha: "18 de marzo", 
            clases: [
                { turno: "1er y 2do turno", asignatura: "Introducción a la Biblia - Clase 2", disponible: false },
                { turno: "3er turno", asignatura: "Técnica de Estudio - Clase 1", disponible: false }
            ]
        },
        { 
            fecha: "1 de abril", 
            clases: [
                { turno: "1er y 2do turno", asignatura: "Introducción a la Biblia - Clase 3", disponible: false },
                { turno: "3er turno", asignatura: "Técnica de Estudio - Clase 2", disponible: false }
            ]
        },
        { 
            fecha: "15 de abril", 
            clases: [
                { turno: "1er y 2do turno", asignatura: "Introducción a la Biblia - Clase 4", disponible: false },
                { turno: "3er turno", asignatura: "Técnica de Estudio - Clase 3", disponible: false },
                { turno: "4to turno", asignatura: "Liderazgo de Servicio - Clase 3", disponible: false }
            ]
        },
        { 
            fecha: "29 de abril", 
            clases: [
                { turno: "1er y 2do turno", asignatura: "Introducción a la Biblia - Clase 5", disponible: false },
                { turno: "3er turno", asignatura: "Liderazgo de Servicio - Clase 4", disponible: false }
            ]
        },
        { 
            fecha: "13 de mayo", 
            clases: [
                { turno: "1er y 2do turno", asignatura: "Introducción a la Biblia - Clase 6", disponible: false },
                { turno: "4to turno", asignatura: "Liderazgo de Servicio - Clase 5", disponible: false }
            ]
        }
    ],

    // ============================================
    // MALLA CURRICULAR (se mantiene igual)
    // ============================================
     mallaCurricular: {
        troncales: [
            { codigo: "IB-BI-001", nombre: "Introducción al estudio de la Biblia", creditos: 2 },
            { codigo: "IB-AT-101", nombre: "Antiguo Testamento I (Génesis – Ester)", creditos: 3 },
            { codigo: "IB-AT-102", nombre: "Antiguo Testamento II (Job – Malaquías)", creditos: 3 },
            { codigo: "IB-NT-201", nombre: "Nuevo Testamento", creditos: 3 },
            { codigo: "IB-TE-301", nombre: "Teología Sistemática I: Doctrina de Dios y Soteriología", creditos: 3 },
            { codigo: "IB-TE-302", nombre: "Teología Sistemática II: Cristología y Espíritu Santo", creditos: 3 },
            { codigo: "IB-TE-303", nombre: "Teología Sistemática III: Ángeles, Hombre y Pecado", creditos: 3 },
            { codigo: "IB-TE-304", nombre: "Teología Sistemática IV: Iglesia y Escatología", creditos: 3 },
            { codigo: "IB-HM-401", nombre: "Hermenéutica Bíblica", creditos: 2 },
            { codigo: "IB-HI-601", nombre: "Historia de la Iglesia", creditos: 3 },
            { codigo: "IB-MT-702", nombre: "Liderazgo de Servicio", creditos: 2 },
            { codigo: "IB-IN-800", nombre: "Técnica de Estudio", creditos: 2 },
            { codigo: "IB-IN-801", nombre: "Metodología de la Investigación", creditos: 2 },
            { codigo: "IB-FP-901", nombre: "Vida Espiritual Personal (transversal)", creditos: 1 }
        ],
        especializaciones: {
            pastoral: [
                { codigo: "IB-MT-710", nombre: "Consejería Bíblica", creditos: 2 },
                { codigo: "IB-MT-711", nombre: "Ética Cristiana", creditos: 2 },
                { codigo: "IB-MT-712", nombre: "Teología Pastoral", creditos: 2 },
                { codigo: "IB-MT-705", nombre: "Introducción a Misiones", creditos: 2 },
                { codigo: "IB-MT-703", nombre: "Discipulado", creditos: 2 },
                { codigo: "IB-MT-704", nombre: "Evangelismo", creditos: 2 },
                { codigo: "IB-MT-701", nombre: "Homilética", creditos: 2 },
                { codigo: "IB-MT-713", nombre: "Plantación y Desarrollo de Iglesias", creditos: 2 }
            ],
            infantil: [
                { codigo: "IB-MT-720", nombre: "Psicología de las Edades", creditos: 2 },
                { codigo: "IB-MT-721", nombre: "Didáctica Cristiana", creditos: 2 },
                { codigo: "IB-MT-722", nombre: "Juego y Aprendizaje Bíblico", creditos: 2 },
                { codigo: "IB-MT-723", nombre: "Misiones en la Infancia", creditos: 2 },
                { codigo: "IB-MT-724", nombre: "Formación Espiritual del Niño", creditos: 2 }
            ],
            musica: [
                { codigo: "IB-MT-730", nombre: "El Corazón del Artista Cristiano", creditos: 2 },
                { codigo: "IB-MT-731", nombre: "Teología de la Adoración", creditos: 2 },
                { codigo: "IB-MT-732", nombre: "Santas Convocaciones", creditos: 2 },
                { codigo: "IB-MT-733", nombre: "Solfeo I", creditos: 2 },
                { codigo: "IB-MT-734", nombre: "Solfeo II", creditos: 2 }
            ],
            educacion: [
                { codigo: "IB-MT-740", nombre: "Pedagogía Bíblica", creditos: 2 },
                { codigo: "IB-ED-501", nombre: "Metodología de la Enseñanza", creditos: 2 },
                { codigo: "IB-MT-741", nombre: "Diseño Curricular Cristiano", creditos: 2 },
                { codigo: "IB-MT-742", nombre: "Evaluación en la Enseñanza Bíblica", creditos: 2 }
            ],
            juvenil: [
                { codigo: "IB-MT-750", nombre: "Ministerio Juvenil", creditos: 2 },
                { codigo: "IB-MT-751", nombre: "Acompañamiento Pastoral", creditos: 2 },
                { codigo: "IB-MT-752", nombre: "Familia y Juventud", creditos: 2 }
            ]
        },
        optativas: [
            { codigo: "IB-OP-001", nombre: "Español Básico", creditos: 2 },
            { codigo: "IB-OP-002", nombre: "Inglés Básico", creditos: 2 },
            { codigo: "IB-OP-003", nombre: "Inglés Bíblico", creditos: 2 },
            { codigo: "IB-OP-004", nombre: "Informática para el Ministerio", creditos: 2 },
            { codigo: "IB-OP-005", nombre: "Redacción de Sermones", creditos: 2 },
            { codigo: "IB-OP-006", nombre: "Introducción al Griego Bíblico", creditos: 2 },
            { codigo: "IB-OP-007", nombre: "Introducción al Hebreo Bíblico", creditos: 2 }
        ],
        organizacionModular: [
            { modulo: 1, asignaturas: ["IB-BI-001", "IB-IN-801"], creditos: 4 },
            { modulo: 2, asignaturas: ["IB-AT-101", "IB-FP-901"], creditos: 4 },
            { modulo: 3, asignaturas: ["IB-NT-201", "IB-HM-401"], creditos: 5 },
            { modulo: 4, asignaturas: ["IB-AT-102", "IB-ED-501"], creditos: 5 },
            { modulo: 5, asignaturas: ["IB-TE-301", "IB-TE-302"], creditos: 6 },
            { modulo: 6, asignaturas: ["IB-TE-303", "IB-TE-304"], creditos: 6 },
            { modulo: 7, asignaturas: ["IB-HI-601", "IB-MT-701"], creditos: 5 },
            { modulo: 8, asignaturas: ["IB-MT-702", "IB-MT-703"], creditos: 4 },
            { modulo: 9, asignaturas: ["IB-MT-704", "IB-MT-705"], creditos: 4 },
            { modulo: 10, asignaturas: ["Especialización (2-3)"], creditos: "4-6" },
            { modulo: 11, asignaturas: ["Optativas / Trabajo Final"], creditos: "4-6" }
        ]
    }
};
 