document.getElementById('guardar').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const puesto = document.getElementById('puesto').value;
    const salario = document.getElementById('salario').value;

    if(nombre && fecha && puesto && salario) {
        const tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];
        const nuevaFila = tabla.insertRow();

        nuevaFila.innerHTML = `
            <td>${nombre}</td>
            <td>${fecha}</td>
            <td>${puesto}</td>
            <td>${salario}</td>
        `;

        // Limpiar el formulario
        document.getElementById('nombre').value = '';
        document.getElementById('fecha').value = '';
        document.getElementById('puesto').value = '';
        document.getElementById('salario').value = '';
    } else {
        alert('Por favor completa todos los campos.');
    }
});

document.getElementById('eliminarPrimero').addEventListener('click', function() {
    const tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];
    if(tabla.rows.length > 0) {
        tabla.deleteRow(0);
    } else {
        alert('No hay registros para eliminar.');
    }
});

document.getElementById('eliminarUltimo').addEventListener('click', function() {
    const tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];
    const cantidadFilas = tabla.rows.length;
    if(cantidadFilas > 0) {
        tabla.deleteRow(cantidadFilas - 1);
    } else {
        alert('No hay registros para eliminar.');
    }
});
