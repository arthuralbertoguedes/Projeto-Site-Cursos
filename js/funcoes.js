function abrirCursos(cursoClicado){
    cursoClicado.classList.toggle("listaCursos-visivel")
}

function animations(){
    let element = document.querySelector('#animatedElement')
    let body = document.querySelector('body')

    body.addEventListener('scroll',e=>{
        e.preventDefault();
        element.style.animation = "animateTitle 2s"
        
    })
}