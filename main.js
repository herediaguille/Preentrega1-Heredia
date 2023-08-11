// Datos de local gastronomico
// compras = 15360457
// stockInicial = 22959655
// stockFinal = 23018619
// ventatotal = 48885159

while (true) {
    let local = prompt("Ingrese el nombre del local o escriba 'salir' para terminar:");
  
    if (local === "salir") {
      break; // Terminar el bucle si se ingresa 'salir'
    }
  
    switch (local) {
      case "deadeveras":
      case "museobar":
      case "jbg":
        let localInfo = {
          nombre: local,
          stockInicial: parseFloat(prompt("Ingrese el stock inicial:")),
          stockFinal: parseFloat(prompt("Ingrese el stock final:")),
          ventasTotales: parseFloat(prompt("Ingrese el total de ventas:")),
          comprasPorRubro: {} // Objeto para almacenar las compras por rubro
        };
  
        // Ingresar compras por rubro
        let numRubros = parseInt(prompt("Ingrese la cantidad de rubros de compras:"));
        for (let i = 0; i < numRubros; i++) {
          let rubro = prompt(`Ingrese el nombre del rubro ${i + 1}:`);
          let monto = parseFloat(prompt(`Ingrese el monto de compras para el rubro ${rubro}:`));
          localInfo.comprasPorRubro[rubro] = monto;
        }
  
        function calcularCostoMercaderia(stockInicial, stockFinal, ventasTotales) {
          let comprasTotales = 0;
          for (let rubro in localInfo.comprasPorRubro) {
            comprasTotales += localInfo.comprasPorRubro[rubro];
          }
  
          let costoMercaderia = ((stockInicial + comprasTotales - stockFinal) / ventasTotales) * 100;
          return costoMercaderia.toFixed(2); 
        }
  
        let costoPorcentaje = parseFloat(calcularCostoMercaderia(localInfo.stockInicial, localInfo.stockFinal, localInfo.ventasTotales));
  
        alert(`El costo de mercadería para el local ${localInfo.nombre} es ${costoPorcentaje}%.`);
  
        if (costoPorcentaje > 35) {
          alert("¡Atención! El costo de mercadería es mayor al 35%.");
        }
  
        // Mostrar compras por rubro
        let comprasTexto = "Compras por rubro:\n";
        let totalCompras = 0;
        let rubroMaximo = null;
        let montoMaximo = 0;
        for (let rubro in localInfo.comprasPorRubro) {
          comprasTexto += `${rubro}: $${localInfo.comprasPorRubro[rubro]}\n`;
          totalCompras += localInfo.comprasPorRubro[rubro];
  
          if (localInfo.comprasPorRubro[rubro] > montoMaximo) {
            montoMaximo = localInfo.comprasPorRubro[rubro];
            rubroMaximo = rubro;
          }
        }
        comprasTexto += `Total de compras: $${totalCompras}\n`;
  
        // Mostrar resumen completo
        alert(`Resumen del local ${localInfo.nombre}:
  Stock Inicial: ${localInfo.stockInicial}
  Compras Totalizadas: $${totalCompras}
  Stock Final: ${localInfo.stockFinal}
  Costo Porcentaje: ${costoPorcentaje}%
  ${comprasTexto}`);
  
        if (rubroMaximo !== null) {
          alert(`¡Atención! El rubro con el monto máximo de compras es "${rubroMaximo}" con $${montoMaximo}. Cuidado con este rubro.`);
        }
        
        break;
  
      default:
        alert("Local no reconocido. Por favor, ingrese un local válido.");
    }
  }
  
  
  
  
  