import { useState,useEffect } from "react";
import Error from "./Error";
import { object } from "prop-types";



const Formulario =({Pacientes,setPaciente,individual,setIndividual})=> {

const [nombre,setNombre]=useState('');
const [propietario,setPropietario]=useState("")
const [email,setEmail]=useState("")
const [fecha,setFecha]=useState("")
const [sintomas,setSintomas]=useState("")
const [error,setError]=useState(false)

useEffect (()=>{

 if(Object.keys(individual).length>0){

    setNombre(individual.nombre)
    setPropietario(individual.propietario)
    setEmail(individual.email)
    setFecha(individual.fecha )
    setSintomas(individual.sintomas)
 }
 else 
 console.log("no hay nada") 


},[individual])


const generarId=()=>{
   const random=Math.random().toString(36).substring(2);
   const fecha=Date.now().toString(36);

   return random+fecha;

    

}

const handleSubmit=(e)=>{
e.preventDefault();



if([nombre,propietario,email,fecha,sintomas].includes('')){
  
   setError(true);
}
  else 
  {
  setError(false);

 const Objetopaciente={
  nombre,
  propietario,
  email,
  fecha,
  sintomas,

 }
 if(individual.id){
   Objetopaciente.id=individual.id
   const pacientesActualizados =Pacientes.map(pacienteState => pacienteState.id===individual.id ? Objetopaciente : pacienteState)
   setPaciente(pacientesActualizados)
   setIndividual({})

 }else {
 Objetopaciente.id=generarId()
 setPaciente([...Pacientes,Objetopaciente]);

 }

 
}
 
   setNombre('')
   setPropietario('')
   setEmail('')
   setFecha('')
   setSintomas('')

}

  return (
    <div className="md:w-1/2 lg:w-2/">
     <h2  className="font-black   text-3xl  text-center">Seguimineto de Pacientes</h2  >
     <p className='text-lg mt-5 text-center mb-10'>Anade Pacientes {''}
     <span className='text-indigo-600 font-bold  '>Administrarlos</span></p>
     <form
     
     onSubmit={handleSubmit}
     className='bg-white shadow-md rounded-lg px-5 mb-5 py-10 border-amber-50 mt-5 mx-5'>
      { error && <Error mensaje={'Debe Ingresar Todos los Campos'}/>      }
         <div className='mb-5'>
          <label htmlFor='mascota' className='text-gray-700 block uppercase font-bold '>Nombre Mascota{"  "+nombre}</label>
          <input  id="mascota" 
                 className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                 type="text"
                 placeholder='Nombre de la mascota'
                 value={nombre}
                 onChange={(e)=>setNombre(e.target.value)}

          />
          </div>
          <div className='mb-5'>
          <label htmlFor='propietario' className='text-gray-700 block uppercase font-bold '>Nombre Propietario</label>
          <input  id="propietario" 
                 className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                 type="text"
                 placeholder='Nombre del propietario'
                 value={propietario}
                 onChange={(e)=>setPropietario(e.target.value)}
          />

         </div>
         
         <div className='mb-5'>
          <label htmlFor='email' className='text-gray-700 block uppercase font-bold '>Email</label>
          <input  id="email" 
                 className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                 type="email"
                 placeholder='Email'
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
          />

         </div>
         <div className='mb-5'>
          <label htmlFor='Descripcion' className='text-gray-700 block uppercase font-bold '>Fecha</label>
          <input  id="fecha" 
                 className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                 type="date"
                 value={fecha}
                 onChange={(e)=>setFecha(e.target.value)}
                
          />
          
         </div>

         <div className='mb-5'>
          <label htmlFor='descripcion' className='text-gray-700 block uppercase font-bold mb-5 '>Descripcion</label>
             <textarea id='descripcion'className='bg-white w-full rounded-md border-2 p-2 ' placeholder='Describe los Sintomas'
             value={sintomas}
              onChange={(e)=>setSintomas(e.target.value)}>
                 </textarea>
         </div>
     
         <input   
            type='submit'
            value={individual.id?"Editar Paciente" :"Agregar Paciente"}
            className='bg-indigo-600 w-full p-3 font-bold text-white uppercase hover:bg-indigo-700 cursor-pointer transition-opacity rounded-md ' 
          
       />
   
  
     </form>
    
    </div>
  )
}

export default Formulario
