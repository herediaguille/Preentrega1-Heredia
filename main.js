// Datos de local gastronomico
// compras = 15360457
// stockInicial = 22959655
// stockFinal = 23018619
// ventatotal = 48885159
let local = prompt("Ingrese el local")
//while (local != "Museobar"){
//    alert("Local no reconocido");
//    local = prompt("Ingrese el local");
//}
while (local != "Museobar"){
    switch (local) {
        case "deadeveras":
            alert("Cargue los datos del local deadeveras");
            function cmv (stockI, compras, stockF, ventatotal){

                let resultado = (((stockI + compras - stockF) / ventatotal) * 100);
                alert (`El CMV es %${resultado}`)
                if(resultado <= 35){
                    alert("Correcto")
                }else{
                    alert("Bajar el costo de mercaderia")
                };
            }
            
            let stockI = parseInt(prompt("Ingrese el stock inicial en pesos"));
            let compras = parseInt(prompt("Ingrese el total de compras en pesos"));
            let stockF = parseInt(prompt("Ingrese el stock final en pesos"));
            let ventatotal = parseInt(prompt("Ingrese la venta total del mes"));
            
            cmv(stockI, compras, stockF, ventatotal);
            
            break;
        case "jbg":
            alert("Cargue los datos del local jbg");
            function cmv (sIJbg, comprasjbg, sFJbg, ventaJbg){
                let resultadojbg = (((sIJbg + comprasjbg - sFJbg) / ventaJbg) * 100);
                alert (`El CMV del local ${local} es %${resultadojbg}`)
                if(resultadojbg <= 35){
                    alert("Correcto")
                }else{
                    alert("Bajar el costo de mercaderia")
                };
            }
            
            let sIJbg = parseInt(prompt("Ingrese el stock inicial en pesos"));
            let comprasjbg = parseInt(prompt("Ingrese el total de compras en pesos"));
            let sFJbg = parseInt(prompt("Ingrese el stock final en pesos"));
            let ventaJbg = parseInt(prompt("Ingrese la venta total del mes"));
            
            cmv(sIJbg, comprasjbg, sFJbg, ventaJbg);
            break;
        default:
            alert("Local no reconocido");
            local = prompt("Ingrese el local");
            Break;
    }
    local = prompt("Ingrese el local");
}

function cmv (stockI, compras, stockF, ventatotal){

    let resultado = (((stockI + compras - stockF) / ventatotal) * 100);
    alert (`El CMV es %${resultado}`)
    if(resultado <= 35){
        alert("Correcto")
    }else{
        alert("Bajar el costo de mercaderia")
    };
}

let stockI = parseInt(prompt("Ingrese el stock inicial en pesos"));
let compras = parseInt(prompt("Ingrese el total de compras en pesos"));
let stockF = parseInt(prompt("Ingrese el stock final en pesos"));
let ventatotal = parseInt(prompt("Ingrese la venta total del mes"));

cmv(stockI, compras, stockF, ventatotal);