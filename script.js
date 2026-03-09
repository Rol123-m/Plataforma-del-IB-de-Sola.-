// script.js - Lógica principal de la página

// Cargar anuncios en la página principal
function cargarAnuncios() {
    const contenedorAnuncios = document.getElementById('contenedor-anuncios');
    if (!contenedorAnuncios) return;

    contenedorAnuncios.innerHTML = '';
    
    DATOS_INSTITUTO.anuncios.forEach(anuncio => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-anuncio';
        tarjeta.innerHTML = `
            <h3>${anuncio.titulo}</h3>
            <div class="fecha">${anuncio.fecha}</div>
            <p>${anuncio.contenido}</p>
        `;
        contenedorAnuncios.appendChild(tarjeta);
    });
}

// Cargar asignaturas activas en la página principal
function cargarAsignaturasActivas() {
    const contenedorAsignaturas = document.getElementById('contenedor-asignaturas');
    if (!contenedorAsignaturas) return;

    contenedorAsignaturas.innerHTML = '';
    
    // Filtrar solo asignaturas activas
    const asignaturasActivas = DATOS_INSTITUTO.asignaturas.filter(asignatura => asignatura.activa);
    
    asignaturasActivas.forEach(asignatura => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-asignatura';
        tarjeta.onclick = () => window.location.href = `asignatura.html?id=${asignatura.id}`;
        
        // Contar clases disponibles
        const clasesDisponibles = asignatura.clases.filter(c => c.disponible).length;
        const totalClases = asignatura.clases.length;
        
        tarjeta.innerHTML = `
            <div class="contenido-asignatura">
                <span class="codigo-asignatura">${asignatura.codigo}</span>
                <h3>${asignatura.nombre}</h3>
                <div class="profesor">Prof. ${asignatura.profesor}</div>
                <p class="descripcion">${asignatura.descripcion.substring(0, 100)}...</p>
                <div class="info-creditos">
                    <span class="creditos">${asignatura.creditos} créditos</span>
                    <span class="modulo">Módulo ${asignatura.modulo}</span>
                </div>
                <div class="progreso-clases">
                    <span class="etiqueta-clases">${clasesDisponibles}/${totalClases} clases disponibles</span>
                </div>
                <span class="etiqueta-activa">En curso</span>
            </div>
        `;
        contenedorAsignaturas.appendChild(tarjeta);
    });
}

// Función para obtener parámetros de la URL
function obtenerParametroURL(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}

// Cargar detalles de una asignatura específica
function cargarDetalleAsignatura() {
    const contenedorDetalle = document.getElementById('detalle-asignatura');
    if (!contenedorDetalle) return;

    const idAsignatura = obtenerParametroURL('id');
    if (!idAsignatura) {
        window.location.href = 'index.html';
        return;
    }

    const asignatura = DATOS_INSTITUTO.asignaturas.find(a => a.id === idAsignatura);
    
    if (!asignatura || !asignatura.activa) {
        window.location.href = 'index.html';
        return;
    }

    // Actualizar título de la página
    document.title = `${asignatura.nombre} - Instituto Bíblico`;

    // Generar HTML de clases (marcando las no disponibles)
    const clasesHTML = asignatura.clases.map(clase => {
        if (clase.disponible) {
            return `<li><a href="${clase.url}" class="clase-disponible" target="_blank">${clase.nombre}</a></li>`;
        } else {
            return `<li><span class="clase-no-disponible">🔒 ${clase.nombre} (Próximamente)</span></li>`;
        }
    }).join('');

    // Generar HTML de recursos
    const recursosHTML = asignatura.recursos.map(recurso => {
        let icono = "📄";
        if (recurso.tipo === "requerido") icono = "📘";
        if (recurso.tipo === "recomendado") icono = "📙";
        if (recurso.tipo === "consulta") icono = "📚";
        if (recurso.tipo === "material") icono = "🔗";
        
        return `<li><a href="${recurso.url}" target="_blank">${icono} ${recurso.nombre}</a></li>`;
    }).join('');

    // Generar HTML de valores
    const valoresHTML = asignatura.valores ? asignatura.valores.map(valor => 
        `<span class="valor-etiqueta">${valor}</span>`
    ).join('') : '';

    // Información específica para Introducción a la Biblia
    const infoEspecifica = asignatura.id === "introduccion-biblia" ? `
        <div class="info-horario">
            <h3>⏰ Horario de Clases</h3>
            <p>${asignatura.horario || 'Por confirmar'}</p>
        </div>
        <div class="info-evaluacion">
            <h3>📝 Sistema de Evaluación</h3>
            <p>${asignatura.silabo?.evaluacion || 'Asistencia y participación (20%) | Trabajo Práctico (40%) | Actividades en clase (20%) | Preguntas escritas (20%)'}</p>
        </div>
    ` : '';

    contenedorDetalle.innerHTML = `
        <a href="index.html" class="boton-volver">← Volver a Inicio</a>
        <div class="detalle-asignatura">
            <div class="cabecera-asignatura">
                <span class="codigo-grande">${asignatura.codigo}</span>
                <h2>${asignatura.nombre}</h2>
                <span class="creditos-badge">${asignatura.creditos} créditos · Módulo ${asignatura.modulo}</span>
            </div>
            
            <div class="info-asignatura">
                <p><strong>Profesor:</strong> ${asignatura.profesor}</p>
                <p><strong>Período:</strong> ${asignatura.periodo || 'Marzo – Mayo 2026'}</p>
                <p><strong>Descripción:</strong> ${asignatura.descripcion}</p>
                ${asignatura.silabo?.objetivo_general ? `<p><strong>Objetivo General:</strong> ${asignatura.silabo.objetivo_general}</p>` : ''}
            </div>
            
            ${infoEspecifica}
            
            <div class="enlaces-clase">
                <h3>📹 Clases del Curso</h3>
                <ul class="lista-enlaces">
                    ${clasesHTML}
                </ul>
            </div>
            
            <div class="recursos-extra">
                <h3>📚 Recursos y Materiales</h3>
                <ul class="lista-recursos">
                    ${recursosHTML}
                </ul>
            </div>
            
            ${valoresHTML ? `
            <div class="valores-asignatura">
                <h3>🌟 Valores del Curso</h3>
                <div class="valores-container">
                    ${valoresHTML}
                </div>
            </div>
            ` : ''}
        </div>
    `;
}

// Inicialización según la página actual
document.addEventListener('DOMContentLoaded', () => {
    // Detectar en qué página estamos
    const path = window.location.pathname;
    
    if (path.includes('asignatura.html')) {
        cargarDetalleAsignatura();
    } else if (path.includes('malla-curricular.html')) {
        // Si existe la función para cargar malla curricular
        if (typeof cargarMallaCurricular === 'function') {
            cargarMallaCurricular();
        }
    } else {
        cargarAnuncios();
        cargarAsignaturasActivas();
    }
});