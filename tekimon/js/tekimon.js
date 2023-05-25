   
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

        //eventos click botones

function iniciarJuego()
    { let sectionSeleccionarMascota = document.getElementById('ataques🦾')
      sectionSeleccionarMascota.style.display = 'none'

      let sectionReiniciar = document.getElementById('reinicio')
      sectionReiniciar.style.display = 'none'
        
        let botonTekimonJugador = document.getElementById('boton_tekimon')
        botonTekimonJugador.addEventListener('click', seleccionarTekimonJugador)

        let botonFuego = document.getElementById('boton_fuego')
        botonFuego.addEventListener('click', ataqueFuego)
        let botonAgua = document.getElementById('boton_agua')
        botonAgua.addEventListener('click', ataqueAgua)
        let botonTierra = document.getElementById('boton_tierra')
        botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton_reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    }
        //variables y selección de mascotas

function seleccionarTekimonJugador()
    {let sectionSeleccionarMascota = document.getElementById('tekimones🐾')
    sectionSeleccionarMascota.style.display = 'none'
    
        let sectionSeleccionarAtaque = document.getElementById('ataques🦾')
        sectionSeleccionarAtaque.style.display = 'flex'
        
        let inputVulvasaur = document.getElementById('vulvasaur')
        let inputTermite = document.getElementById('termite')
        let inputDoge = document.getElementById('doge')
        let spanMascotaJugador = document.getElementById('mascota_jugador')
    
        // Mostrar mascota escogida junto con las vidas:
    
        if (inputVulvasaur.checked)
        {   spanMascotaJugador.innerHTML = 'Vulvasaur'
        } 
            else if (inputTermite.checked)
        {   spanMascotaJugador.innerHTML = 'Termite'
        }
            else if (inputDoge.checked)
        {   spanMascotaJugador.innerHTML = 'Doge'
        }
            else 
        {   alert('Selecciona una Mascota')
        }

        seleccionarTekimonEnemigo ()  

}

function seleccionarTekimonEnemigo () 
    {   let mascotaAleatoria = aleatorio (1,3)
        let spanMascotaEnemigo = document.getElementById('mascota_enemigo')

        if (mascotaAleatoria == 1) 
            { spanMascotaEnemigo.innerHTML = 'Vulvasaur'
            }
            else if (mascotaAleatoria == 2)
                {spanMascotaEnemigo.innerHTML = 'Termite'
                }
            else
                {spanMascotaEnemigo.innerHTML = 'Doge'
                }
    }

function ataqueFuego()
    {ataqueJugador = 'FUEGO'
        ataqueAleatorioEnemigo()
    }
function ataqueAgua()
    {ataqueJugador = 'AGUA'
        ataqueAleatorioEnemigo()
    }
function ataqueTierra()
    {ataqueJugador = 'TIERRA'
        ataqueAleatorioEnemigo()
    }

function ataqueAleatorioEnemigo () 
    {let ataqueAleatorio = aleatorio(1,3)

        if (ataqueAleatorio == 1)
        {ataqueEnemigo = 'FUEGO'    
        }
            else if (ataqueAleatorio == 2)
            {ataqueEnemigo = 'AGUA'
            }
            else 
            {ataqueEnemigo = 'TIERRA'
            }

            combate ()
    }

    //resultados (1:fuego, 2:Agua, 3:Tierra)
function combate ()
    {let spanVidasJugador = document.getElementById('vidas_jugador')
     let spanVidasEnemigo = document.getElementById('vidas_enemigo')

        if(ataqueEnemigo == ataqueJugador)
        {crearMensaje("EMPATE")
        }
            else if ((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') || (ataqueJugador == 'TIERRA' & ataqueEnemigo == 'AGUA'))
            {crearMensaje("GANASTE")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo
            }
            else 
            {crearMensaje("PERDISTE")
                vidasJugador--
                spanVidasJugador.innerHTML = vidasJugador
            }

        revisarVidas ()
    }

function revisarVidas ()
    {if (vidasEnemigo == 0)
        {crearMensajeFinal("FELICITACIONES! Ganaste :)")
        }
        else if (vidasJugador == 0)
        {crearMensajeFinal('Lo siento, perdiste :(')
        }

    }
    
        //mensaje resultados del duelo
function crearMensaje (resultado)
    {   let sectionMensajes = document.getElementById('mensajes')

        let parrafo = document.createElement('p')
        parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota enemiga atacó con ' + ataqueEnemigo + ' - ' + resultado
        
        sectionMensajes.appendChild(parrafo)
    }

function crearMensajeFinal(resultadoFinal) 
    {let sectionMensajes = document.getElementById('mensajes')
     let parrafo = document.createElement('p')
         parrafo.innerHTML = resultadoFinal
    
        sectionMensajes.appendChild(parrafo)

        let botonFuego = document.getElementById('boton_fuego')
        botonFuego.disabled = true
        let botonAgua = document.getElementById('boton_agua')
        botonAgua.disabled = true
        let botonTierra = document.getElementById('boton_tierra')
        botonTierra.disabled = true

        let sectionReiniciar = document.getElementById('reinicio')
        sectionReiniciar.style.display = 'block'
    }

function reiniciarJuego()
    {location.reload()
    }
    
function aleatorio(min, max)
    {   return Math.floor(Math.random() * (max - min + 1) + min);

    }
    window.addEventListener('load', iniciarJuego);


    //alert("Escogiste a: ")
    //background-image: url("depositphotos_9575708-stock-photo-collage-background.jpg")