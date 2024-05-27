let seguirSeleccionando = false;

const armas = {
    'RIFLE DE ASALTO': {
        'ACR': ['Mira Holográfica', 'Empuñadura delantera', 'Culata táctica'],
        'RAM-7': ['Mira Reflex', 'Silenciador ligero', 'Cañón extendido']
    },
    'SUBFUSIL': {
        'MP5': ['Mira Reflex', 'Cargador ampliado', 'Empuñadura punteada'],
        'HRM-9': ['Mira Holográfica', 'Empuñadura punteada', 'Silenciador ligero']
    },
    'FRANCOTIRADOR': {
        'KAR-97': ['Mira de francotirador x8', 'Bipode', 'Culata acolchada'],
        'MORS': ['Visor térmico', 'Silenciador pesado', 'Cañón pesado']
    }
};

function mostrarArmasDisponibles(categoria) {
    let armasDisponibles = '';
    if (categoria === 'RIFLE DE ASALTO') {
        armasDisponibles = 'ACR, RAM-7';
    } else if (categoria === 'SUBFUSIL') {
        armasDisponibles = 'MP5, HRM-9';
    } else if (categoria === 'FRANCOTIRADOR') {
        armasDisponibles = 'KAR-97, MORS';
    }
    return armasDisponibles;
}

function mostrarAccesorios(accesorios) {
    let accesoriosLista = '';
    for (let i = 0; i < accesorios.length; i++) {
        accesoriosLista += accesorios[i];
        if (i < accesorios.length - 1) {
            accesoriosLista += ', ';
        }
    }
    return accesoriosLista;
}

function seleccionarClase() {
    let categoria = '';
    let arma = '';
    let accesorios = [];

    categoria = prompt('Categorías disponibles: rifle de asalto, subfusil, francotirador').toUpperCase();
    if (!(categoria in armas)) {
        alert('Por favor, seleccione una categoría válida.');
        return;
    }

    const armasDisponibles = mostrarArmasDisponibles(categoria);
    arma = prompt('Armas disponibles en la categoría ' + categoria + ': ' + armasDisponibles).toUpperCase();
    if (!(arma in armas[categoria])) {
        alert('Por favor, seleccione un arma válida.');
        return;
    }

    accesorios = armas[categoria][arma];
    const accesoriosLista = mostrarAccesorios(accesorios);

    alert('Los mejores accesorios para el arma ' + arma + ' son los siguientes: ' + accesoriosLista);
}

do {
    seleccionarClase();
    seguirSeleccionando = confirm('¿Quieres seleccionar otra arma?');
} while (seguirSeleccionando);

alert('Gracias por utilizar el selector de clases para Warzone 2.0!');