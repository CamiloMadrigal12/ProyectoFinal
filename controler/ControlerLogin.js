import { ConsultaSaldo } from "../model/ModelConsultaSaldo.js";
console.log(ConsultaSaldo)

let btnIniciar = document.getElementById('btnIniciar')
btnIniciar.addEventListener('click', function () {
    console.log('iniciaste section')
    // let usuario = document.getElementById('usuario').value;
    // if (usuario == 'lucas') {
    //     let contrasena = document.getElementById('contrasena').value;
    //     if (contrasena == '1234') {
    //         console.log(usuario, contrasena )
            document.getElementById('spinner').style.display = 'block';

            setTimeout(() => {
                document.getElementById('spinner').style.display = 'none';
                document.getElementById('login').style.display = 'none';
                document.getElementById('panel').style.display = 'block';
            },
            // 1000
            );

           
    //     } else {
    //         console.log('Datos incorrectos')
    //     }
    // } else {
    //     console.log('Datos incorrectos')
    // }
})

let cerrarSeccion = document.getElementById('cerrarSeccion')
cerrarSeccion.addEventListener('click', () => {
    document.getElementById('spinner').style.display = 'block';

    setTimeout(() => {
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('login').style.display = 'block';
        document.getElementById('panel').style.display = 'none';
    },1000);
})


