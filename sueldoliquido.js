document.getElementById('calcular').addEventListener('click', function() {
    const salario = parseFloat(document.getElementById('salario').value) || 0;
    const bonificacion = parseFloat(document.getElementById('bonificacion').value) || 0;
    const comisiones = parseFloat(document.getElementById('comisiones').value) || 0;
    const ahorro = parseFloat(document.getElementById('ahorro').value) || 0;
    const prestamos = parseFloat(document.getElementById('prestamos').value) || 0;

    // Cálculos
    const totalGanado = salario + bonificacion + comisiones;
    const igss = salario * 0.0483;
    const totalDescuentos = ahorro + prestamos + igss;
    const sueldoLiquido = totalGanado - totalDescuentos;

    // Mostrar resultados
    document.getElementById('resultados').innerHTML = `
        <p><strong>Total ganado:</strong> Q${totalGanado.toFixed(2)}</p>
        <p><strong>IGSS (4.83%):</strong> Q${igss.toFixed(2)}</p>
        <p><strong>Total descuentos:</strong> Q${totalDescuentos.toFixed(2)}</p>
        <p><strong>Sueldo líquido:</strong> Q${sueldoLiquido.toFixed(2)}</p>
    `;
});
