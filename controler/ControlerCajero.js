import { ConsultaSaldo } from "../model/ModelConsultaSaldo.js";
console.log(ConsultaSaldo)


let ConsultarSaldo = document.getElementById('ConsultarSaldo')
ConsultarSaldo.addEventListener('click', function () {
    document.getElementById('sectionConsultarSaldo').innerHTML = ''
    document.getElementById('sectionConsultarSaldo').style.zIndex = '3'
    document.getElementById('sectionRetirarDinero').style.zIndex = '2'
    document.getElementById('sectionTransferirACuentasInscritas').style.zIndex = '2'
    document.getElementById('sectionConsignarACuentaPropia').style.zIndex = '2'
    ConsultaSaldo.map((Csaldo) => {
        let usuario = document.createElement('p')
        let saldo = document.createElement('p')
        let movimiento = document.createElement('p')
        let fecha = document.createElement('p')
        let card = document.createElement('article')
        usuario.textContent = Csaldo.usuario
        saldo.textContent = Csaldo.saldo
        movimiento.textContent = Csaldo.movimiento
        fecha.textContent = Csaldo.fecha
        card.classList.add('card')
        card.append(usuario, saldo, movimiento, fecha)
        document.getElementById('sectionConsultarSaldo').append(card)



    })

})




let RetirarDinero = document.getElementById('RetirarDinero')
RetirarDinero.addEventListener('click', function (RetirarDinero) {
    document.getElementById('sectionRetirarDinero').innerHTML = ''
    document.getElementById('sectionRetirarDinero').style.zIndex = '3'
    document.getElementById('sectionConsultarSaldo').style.zIndex = '2'
    document.getElementById('sectionTransferirACuentasInscritas').style.zIndex = '2'
    document.getElementById('sectionConsignarACuentaPropia').style.zIndex = '2'
    
    function mostrarSaldoActual() {
        console.log("Su saldo es: " + saldo);
    }
    // ConsultaSaldo.map((Csaldo) => {
    //     let saldo = document.createElement('p')
    //     let movimiento = document.createElement('p')
    //     let fecha = document.createElement('p')
    //     let card = document.createElement('article')
    //     saldo.textContent = Csaldo.saldo
    //     movimiento.textContent = Csaldo.movimiento
    //     fecha.textContent = Csaldo.fecha
    //     card.classList.add('card')
    //     card.append(saldo, movimiento, fecha)
    //     document.getElementById('sectionRetirarDinero').append(card)

        function retirarDinero() {
            let valorRetiro = Number(prompt("Ingrese el valor a retirar: "));
            if (valorRetiro <= saldo) {
                saldo -= valorRetiro;
                console.log("Su nuevo saldo es: " + saldo);
            } else {
                console.log("Fondos insuficientes");
            }
        }
        ConsultaSaldo.map((Csaldo) => {
            let saldo = document.createElement('p');
            let movimiento = document.createElement('p');
            let fecha = document.createElement('p');
            let card = document.createElement('article');
            saldo.textContent = Csaldo.saldo;
            movimiento.textContent = Csaldo.movimiento;
            fecha.textContent = Csaldo.fecha;
            card.classList.add('card');
            card.append(saldo, movimiento, fecha);
            document.getElementById('sectionRetirarDinero').append(card);
            mostrarSaldoActual();
            retirarDinero();
        });
    });
        
        // function saldoAcutual() {
        // console.log("su saldo es: " + saldo)
        //  }
        //  function RetirarDinero() {
        //   let valorRetiro = Number(prompt("ingrese el valor a retirar: "))
        //   if(valorRetiro <= saldo){
        //   saldo -= valorRetiro
        // console.log("Su nuevo saldo es: " + saldo)
        //  }else{
        //   console.log("Fondos insuficientes")
        //  }
        //  }
        //  let opcion = Number(prompt("seleccione: \n1- consultar saldo\n2- retirar dinero"))
        //  switch (opcion) {
        //   case 1: 
        //   ConsultarSaldo()
        //     break;
        //  case 2: 
        //  retirarDinero()
        //  break; 
        //  default:
        //   console.log("esta opción no existe")
        //     break;
        //  }



//     })

// })



let TransferirACuentasInscritas = document.getElementById('TransferirACuentasInscritas')
TransferirACuentasInscritas.addEventListener('click', function (RetirarDinero) {
    document.getElementById('sectionTransferirACuentasInscritas').innerHTML = ''
    document.getElementById('sectionTransferirACuentasInscritas').style.zIndex = '3'
    document.getElementById('sectionConsultarSaldo').style.zIndex = '2'
    document.getElementById('sectionRetirarDinero').style.zIndex = '2'
    document.getElementById('sectionConsignarACuentaPropia').style.zIndex = '2'
    ConsultaSaldo.map((Csaldo) => {
        let usuario = document.createElement('p')
        let saldo = document.createElement('p')
        let movimiento = document.createElement('p')
        let fecha = document.createElement('p')
        let card = document.createElement('article')
        usuario.textContent = Csaldo.usuario
        saldo.textContent = Csaldo.saldo
        movimiento.textContent = Csaldo.movimiento
        fecha.textContent = Csaldo.fecha
        card.classList.add('card')
        card.append(usuario, saldo, movimiento, fecha)
        document.getElementById('sectionTransferirACuentasInscritas').append(card)



    })

})
let ConsignarACuentaPropia = document.getElementById('ConsignarACuentaPropia')
ConsignarACuentaPropia.addEventListener('click', function (RetirarDinero) {
    document.getElementById('sectionConsignarACuentaPropia').innerHTML = ''
    document.getElementById('sectionConsignarACuentaPropia').style.zIndex = '3'
    document.getElementById('sectionConsultarSaldo').style.zIndex = '2'
    document.getElementById('sectionRetirarDinero').style.zIndex = '2'
    document.getElementById('sectionTransferirACuentasInscritas').style.zIndex = '2'
    ConsultaSaldo.map((Csaldo) => {
        let usuario = document.createElement('p')
        let saldo = document.createElement('p')
        let movimiento = document.createElement('p')
        let fecha = document.createElement('p')
        let card = document.createElement('article')
        usuario.textContent = Csaldo.usuario
        saldo.textContent = Csaldo.saldo
        movimiento.textContent = Csaldo.movimiento
        fecha.textContent = Csaldo.fecha
        card.classList.add('card')
        card.append(usuario, saldo, movimiento, fecha)
        document.getElementById('sectionConsignarACuentaPropia').append(card)



    })

})