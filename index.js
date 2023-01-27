const aplicacion = document.querySelector('.container')

const url = 'https://random-data-api.com/api/v2/users'

fetch(url)
.then(res => res.json())
.then(data => {
    
       //console.log(data);

    const nombreyapellido = document.createElement('p')
    nombreyapellido.innerHTML = "Nombre y Apellido: "+data.first_name+" "+data.last_name      
    const Apellido = document.createElement('p')
    Apellido.innerHTML = "Apellido: "+data.last_name 
    const fechaNacimiento = document.createElement('p')
    fechaNacimiento.innerHTML = "Fecha de nacimiento: "+data.date_of_birth 
    const genero = document.createElement('p')
    genero.innerHTML = "Genero: "+data.gender 
    const mail = document.createElement('p')
    mail.innerHTML = "Email: "+data.email 
    const telefonos = document.createElement('p')
    telefonos.innerHTML = "Telefono laboral: "+data.phone_number+" / Telefono Urgencias: "+data.social_insurance_number 
    const te_particular = document.createElement('p')
    te_particular.innerHTML = "Telefono particular: " +data.social_insurance_number
    const cargo = document.createElement('p')
    cargo.innerHTML = "cargo: " +data.employment.title
    const domicilio = document.createElement('p')
    domicilio.innerHTML = "Calle: " +data.address.street_name+" Numero: "+data.address.street_address
    const ciudad = document.createElement('p')
    ciudad.innerHTML = "Ciudad: "+data.address.city
    const calle = document.createElement('p')
    calle.innerHTML = "Domicilio calle: " +data.address.street_name
    const numero = document.createElement('p')
    numero.innerHTML = "Domicilio numero: " +data.address.street_address
    const codigo_postal = document.createElement('p')
    codigo_postal.innerHTML = "Codigo Postal: " +data.address.zip_code
    const estado = document.createElement('p')
    estado.innerHTML = "Estado: " +data.address.state
    const pais = document.createElement('p')
    pais.innerHTML = "Pais: " +data.address.country

    aplicacion.appendChild(nombreyapellido)
    aplicacion.appendChild(fechaNacimiento)
    aplicacion.appendChild(genero)
    aplicacion.appendChild(mail)
    aplicacion.appendChild(telefonos)
    aplicacion.appendChild(domicilio)
    aplicacion.appendChild(ciudad)
    aplicacion.appendChild(estado)
    aplicacion.appendChild(pais)
    
});
  
const cargo = '{"cargo":"Presidente", "cargo1":"Copresidente", "cargo2":"Director General", "cargo3":"Director Ejecutivo"}';
        const obj = JSON.parse(cargo);

       // console.log(obj);

        document.getElementById("experiencia1").innerHTML =
        " SpaceX: Cargo: "+obj.cargo2;
        document.getElementById("experiencia2").innerHTML =
        " Tesla: Cargo: " +obj.cargo2;
        document.getElementById("experiencia3").innerHTML =
        " SolarCity: Cargo: "+obj.cargo; 
        document.getElementById("experiencia4").innerHTML =
        " OpenAI: Cargo: "+obj.cargo3;
        document.getElementById("experiencia5").innerHTML =
        " Neuralink: Cargo: "+obj.cargo1;
        document.getElementById("experiencia6").innerHTML =
        " Boring Company: Cargo: "+obj.cargo2;
        document.getElementById("experiencia7").innerHTML =
        " Twitter: Cargo: "+obj.cargo3;

        
        document.getElementById('boton').onclick = function() {
            
            //console.log("MIRAME EN EL SIGUIENTE VIDEO");
            
            document.getElementById('habilidad').innerHTML= "MIRAME EN EL SIGUIENTE VIDEO"; 
        }

        