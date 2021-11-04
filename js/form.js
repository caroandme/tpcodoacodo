/*FORMULARIO CONTACTO*/

window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const apellido= document.getElementById('apellido')
    const email = document.getElementById('email')
    const mensaje= document.getElementById('mensaje')
  

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim()
        const apellidoValor = apellido.value.trim()
        const emailValor = email.value.trim()
        const mensajeValor = mensaje.value.trim();
       
     
        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
        if(!usuarioValor){
            //console.log('CAMPO VACIO')
            validaFalla(usuario, 'Campo vacío')
        }else{
            validaOk(usuario)
        }

        //validando campo apellido
        //(!apellidoValor) ? console.log('CAMPO VACIO') : console.log(apellidoValor)
        if(!apellidoValor){
            //console.log('CAMPO VACIO')
            validaFalla(apellido, 'Campo vacío')
        }else{
            validaOk(apellido)
        }

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Campo vacío')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }
         //validando campo mensaje
             
         if(mensajeValor.length>450) {
             validaFalla(mensaje, 'Pasó el límite de 450 caracteres')
         } else {
             validaOk(mensaje)
         }

    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})