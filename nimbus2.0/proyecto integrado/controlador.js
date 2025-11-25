let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    alert("hiciste click")

    let cajaUsuario=document.getElementById("cajausuario")
    let cajaCorreo=document.getElementById("cajacorreo")
    let cajaCiudad=document.getElementById("cajaciudad")
    let cajaTelefono=document.getElementById("cajatelefono")
    let cajaContraseña=document.getElementById("cajacontraseña")

    let datosDelFormulario={
        usuario:cajaUsuario.valuer,
        correo:cajaCorreo.valuer,
        ciudad:cajaCiudad.valuer,
        telefono:cajaTelefono.valuer,
        cajaContraseña:cajaContraseña.valuer,
    }

Swal.fire({
  title: "BIENVENIDO!",
  text: "Haz sido registrado!",
  icon: "success"
});


})