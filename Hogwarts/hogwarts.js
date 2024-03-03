/* 
Eres estudiante de Hogwarts, tienes la edad suficiente para entrar a estudiar,
tienes padres, y un linaje de sangre, aun no sabes tu casa, ni tu animal patronus,
también tienes cualidades, que son muy importantes para que el sombrero
seleccionador te asigne una casa.
Crear un objeto, con Nombre, edad, familia, linaje, casa, animal patronus,
cualidades:
Gryffindor ("Valor, fuerza, audacia" Linaje: Mestizo, muggle, Sangre pura )
Hufflepuff("Justicia, Lealtad, Paciencia" Linaje: Mestizo, muggle)
Ravenclaw(“Creatividad, Erudición, Inteligencia" Linaje: Mestizo, muggle, Sangre
pura)
Slytherin ("Ambición, Determinación, Astucia" Linaje: "Sangre Pura") */

const animalPatronus = [

    {
        nombre: "Conejo",
        imagen: "Animales/conejo.jpg"
    },
    {
        nombre: "Caballo",
        imagen: "Animales/caballo.jpg"
    },
    {
        nombre: 'Aguila',
        imagen: 'Animales/aguila.jpg'
    },
    {
        nombre: 'Gato',
        imagen: 'Animales/gato.jpg'
    },
    {
        nombre: 'Lobo',
        imagen: 'Animales/lobo.jpg'
    },
    {
        nombre: 'Nutria',
        imagen: 'Animales/Nutria_Patronus.webp'
    },
    {
        nombre: 'Oso',
        imagen: 'Animales/oso.jpg'
    },
    {
        nombre: 'Unicornio',
        imagen: 'Animales/unicornio.jpg'
    }
]

let datos = []
let primerBloque = document.querySelector('.information')
let linajeEstudiante = document.querySelector("#linaje")
let linajeP = document.querySelector('.linajeLabel')
let tituloPrincipal = document.querySelector('.titulo-principal')

let cualidad = document.querySelector('#cualidad')
let cualidadP = document.querySelector('.cualidadesLabel')

let cualidadTexto = cualidad.options [cualidad.selectedIndex].text

let SeleccionAnimalJava = document.querySelector('.seleccionAnimal')
let alerta = document.querySelector('.datosEstudiante')
let edadP = document.querySelector('.edadLabel')
let nombreP = document.querySelector('.nombreLabel')
let botonesMenu = document.querySelector('.seleccionBoton')

const containerAnimal = document.querySelector('.modalContainer')
const modalAnimal = document.querySelector('.modalAnimal')
const botonAnimalPatronus = document.querySelector('.animalPatronus')
const lucharBoggart = document.querySelector('.luchaBoggart')

const luchaBoggartContain = document.querySelector('.luchaBoggartContain')
const modalLuchaBoggart = document.querySelector('.modalLuchaBoggart')
const seccionCasa = document.querySelector('.seleccionCasa')
const studentHouse = document.querySelector('.studentHouse')
const botonDatos = document.querySelector('.verDatosPersonales')

const containDatos = document.querySelector('.containVerDatosEstudiante')
const divDatos = document.querySelector('.verDatosEstudiante')




botonesMenu.style.visibility = 'hidden'


function botonCerrar(elemento, contenedor, botones){

    let botonSalida = document.createElement('button')
    botonSalida.classList.add('botonSalidaJava')
    botonSalida.textContent = "X"
    elemento.appendChild(botonSalida)

    botonSalida.addEventListener("click", () => {
        
        elemento.style.display = 'none'
        contenedor.style.display = 'none'
        botones.style.visibility = 'visible'

    })
}

function random(max, min){

    num = Math.floor(Math.random() * (max-min + 1) + min )
    return num
}

function mostrarModal(modal){

    modal.classList.add('modalShow')
}

function ocultarModal(modal){

    modal.classList.remove('modalShow')
}

botonDatos.addEventListener('click', () => {

    divDatos.style.display = 'flex'
    let nombreEstudiante = datos[0]
    let edadEstudiante = datos[1]
    let linajeEstudiante = datos[2]
    let cualidadEstudiante = datos[3]

 

    divDatos.innerHTML = `

    <div class='containerData'>
        <div class='headerDatosEstudiante'>
            <img src = 'Casas/cuenta.jpg' width= '150px' class='imagenUser'>
            <h3> ${nombreEstudiante} </h3>
        </div>
        <div class='detallesDatosEstudiante'>
            <h3> Edad: <br> </h3>
            <p> ${edadEstudiante} </p>
            <h3> Linaje: <br> </h3>
            <p> ${linajeEstudiante}  </p>
            <h3> Cualidades: <br> </h3>
            <p> ${cualidadEstudiante} </p>
        </div>
    </div>
  
    `

    containDatos.style.opacity = '1'
    containDatos.style.pointerEvents = 'inherit'

    botonCerrar(divDatos)

    

})

let button = document.querySelector("form")

button.addEventListener("submit", function (event){

    event.preventDefault();
    let nombre = document.querySelector("#nombre").value
    let edad = document.querySelector("#edad").value   


    let nombreTexto = document.createElement('label')
    nombreTexto.textContent = nombre;
    nombreP.appendChild(nombreTexto)
    datos.push(nombre)

    let edadTexto = document.createElement('label')
    edadTexto.textContent = edad;
    edadP.appendChild(edadTexto)
    datos.push(edad)

    let cualidadText = document.createElement('label')
    cualidadText.textContent = cualidad.value;
    cualidadP.appendChild(cualidadText)
    datos.push(cualidadTexto)

    let linajeTexto = document.createElement('label')
    linajeTexto.textContent = linajeEstudiante.value;
    linajeP.appendChild(linajeTexto)
    datos.push(linajeEstudiante.value)

    
    alerta.style.display = "flex"
    tituloPrincipal.style.display = 'none'
    

})

let buttonCasa = document.querySelector('.selectHouse')


buttonCasa.addEventListener("click", () => {

       
        let imagenCasa = document.createElement('img')

        if (cualidad.value === "audacia" ){
    
            estudiante.casa = "Gryffindor";
            estudiante.casaImagen = 'Casas/griffindor.webp';

            
        } else if ((linajeEstudiante.value != "sangrePura")  &&  cualidad.value === "paciencia"){
            
                estudiante.casa = "Hufflepuff";
                estudiante.casaImagen = 'Casas/hufflepuff.webp';
         
                
        } else if (cualidad.value === "inteligencia"){
            
                estudiante.casa = "Ravenclaw";
                estudiante.casaImagen = 'Casas/ravenclaw.webp';
            
                
        } else if ((linajeEstudiante.value == "sangrePura") &&  cualidad.value === "astucia"){
            
                estudiante.casa = "Slytherin";
                estudiante.casaImagen = 'Casas/slytherin.webp';
             
                
        } else {

                studentHouse.textContent = 'No eres admitido en Hogwarts 👋'
                alert("Tu linaje no coincide con ninguna casa")
                buttonCasa.style.display = 'none'
                return;
                                                                                       
        }

        studentHouse.textContent = 'Tu casa seleccionada es:'
        buttonCasa.style.display = 'none'
        imagenCasa.src = estudiante.casaImagen
        seccionCasa.appendChild(imagenCasa)

        botonCerrar(alerta, primerBloque, botonesMenu)

       
})


const numero = random(1,8)
let animalPatronusNombre = '';
let animalPatronusImagen = '';

botonAnimalPatronus.addEventListener('click', (e) => {

    e.preventDefault()
   
   const animal = animalPatronus[numero]
   animalPatronusNombre = animal.nombre;
   animalPatronusImagen = animal.imagen;

   containerAnimal.innerHTML = `
   <h3>Tu Animal Patronus Elegido es: </h3>
   <img src='${animalPatronusImagen}' >
   <p>${animalPatronusNombre}</p>
   <button class='botonVolver'> Volver </button>
   `

    mostrarModal(modalAnimal)

   const botonSalida = document.querySelector('.botonVolver')

   botonSalida.addEventListener('click', () => {

    ocultarModal(modalAnimal)

})
})

lucharBoggart.addEventListener('click', (e) => {

    modalLuchaBoggart.style.opacity = '1'
    modalLuchaBoggart.style.pointerEvents = 'inherit'
    e.preventDefault()
    luchaBoggartContain.innerHTML = `

            <h3> ¿Encontraste un Boggart? </h3>
            <img src='Casas/boggart.jpg'>
    <div class='groupBoggart'>
        <div class='botonesBoggart'> 
            <button class='botonModalBoggart boggartSi'>SI</button>
            <button class='botonModalBoggart boggartNo'>NO</button>
        </div>
        <div class='nombreBoggart'> 
            
        </div>
    </div>
    

            `
    modalLuchaBoggart.classList.add('mostrarModal')
    const boggartSi = document.querySelector('.boggartSi')
    const boggartNo = document.querySelector('.boggartNo')

    boggartSi.addEventListener('click', () => {

        boggartNo.style.opacity = '0'
        boggartSi.style.opacity = '0'
        const nombreBoggart = document.querySelector('.nombreBoggart')
        nombreBoggart.innerHTML = `
        <div class='containBoggartName'>
            <label>Ingresa tu Boggart: </label>
            <input type='text' class='idBoggart' placeholder= 'Ingresa tu boggart'>
            <label>Ingresa algo que te haga feliz</label>
            <input type='text' class='cosaFeliz'  placeholder='¿Que te hace feliz?'> 
            <button class='botonModalBoggart lanzarHechizo'> Lanzar </button>
        </div>
      `
 
      const lanzarHechizo = document.querySelector('.lanzarHechizo')

        lanzarHechizo.addEventListener('click', () => {


            const cosaFeliz = document.querySelector('.cosaFeliz').value
            const idBoggart = document.querySelector('.idBoggart').value
            const botonesBoggart = document.querySelector('.botonesBoggart')
            const containBoggartName = document.querySelector('.containBoggartName')

            const groupBoggart = document.querySelector('.groupBoggart')
            containBoggartName.style.display = 'none'
            botonesBoggart.style.display = 'none'

            groupBoggart.innerHTML =  `
            <div class='ataqueBoggart'>
                <h3>Atacaste al Boggart ${idBoggart} con: <br> 
                🌟${cosaFeliz}🌟</h3>
                <button class='botonSelect backBotton'>Volver</button>
            </div>
            `

            const backBoton = document.querySelector('.backBotton')
            backBoton.addEventListener('click', () => {

                modalLuchaBoggart.style.opacity = '0'
                modalLuchaBoggart.style.pointerEvents = 'none'
                

            })
        })

            
        


    })

 
    boggartNo.addEventListener('click', () => {

        modalLuchaBoggart.style.opacity = '0'
        modalLuchaBoggart.style.pointerEvents = 'none'
    })



})

const estudiante = {

    nombre: "Thomas",
    edad: 25,
    familia: "",
    linaje: "Mestizo",
    animalPatronus: "",
    cualidades: ["valor, fuerza, audacia"],
    casa: "",
    casaImagen: ""
    
}

const clases = {

    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout" 
    
}


/* primer día de clases: vas temprano a clase de transformaciones, en clase de
transformaciones que es un objeto, con transformaciones con boggarts, «Altera
la habilidad de un boggart para cambiar de forma y provoca risa para derrotarlo.»
esto se logra con el encantamiento "Riddikulus".


- Definir la clase de Transformaciones
En este paso, estás creando un objeto llamado claseTransformaciones que
representa la clase de Transformaciones. Estableces el nombre del profesor,
el horario y una propiedad para rastrear la transformación de los boggarts.



- Paso 2: Crear una función para realizar la transformación con "Riddikulus"
Aquí defines una función realizarTransformacionRiddikulus dentro de
claseTransformaciones. Esta función verifica si hay un boggart presente y, si
es así, realiza la transformación con el encantamiento "Riddikulus".


- Paso 3: Crear una función para enfrentar un boggart
Aquí defines otra función enfrentarBoggart dentro de
claseTransformaciones. Esta función toma un boggart como argumento,
muestra un mensaje con la forma original del boggart, realiza la
transformación y muestra el resultado.


- Paso 4: Uso y llamada a las funciones
En este paso, creas un objeto boggartEjemplo y luego llamas a la función
enfrentarBoggart de claseTransformaciones para enfrentar el boggart. */

/* const claseTransformaciones = {

    nombre: "Juanchito",
    horario: "9PM - 12PM",
    transformaciones: "",
    hechizo: "",
    riddikulus: function realizarTransformacionRiddikulus (){
        
        let eleccion = prompt("Encontraste un Boggart?: \n 1 = Si \n 2 = No")

        if (eleccion == 1){

            nombreBoggart = prompt("Ingresa el Boggart: ")
            claseTransformaciones.transformaciones = "Riddikulus"
            alegria = prompt("Ingresa algo que te alegre: ")
            console.log(`Lanzaste el hechizo ${this.transformaciones}`)

        }

        else if (eleccion == 2){

            claseTransformaciones.transformaciones = ""
            console.log(`No hay Boggart`)
        }

        return nombreBoggart, alegria;

    },

    enfrentar: function enfrentarBoggart(nombreFunction, felicidad){

        if (this.transformaciones == "Riddikulus"){

            console.log(`El boggart es una ${nombreFunction}`)
            console.log(`Convertiste al Boggart ${nombreFunction} con ${felicidad}`)

        }

        else {

            console.log("No hay boggart")
        }

    }

} */

/* puedes ir agregando las demás clases, pero es importante que vayas a la clase de
defensa contra las artes oscuras, para puedas defenderte de los dementores que
han escapado de Azkaban.
crear un objeto con nombre defensaContraLasArtesOscuras con la función de
generar un animal de patronus, lo genere random y llenar la variable, de la
propiedad animalPatronus */



/* 
claseTransformaciones.riddikulus()
claseTransformaciones.enfrentar(nombreBoggart, alegria) */