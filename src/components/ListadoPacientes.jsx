import Pacientex from "./Pacientex";



const ListadoPacientes=({Parceros,setIndividual,eliminaPaciente})=>{
  

  return(
 
     
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
       { Parceros && Parceros.length?(
    <>
    <h2 className="font-black   text-3xl  text-center">Listado de Pacientes</h2>
    <p className="text-xl mt-5 text-center mb-10">
        Administra tus  {''}
        <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
        </p> 

     {    Parceros.map( paciente=>(<Pacientex 
     
     key={paciente.id} 
     ivan={paciente}
     setIndividual={setIndividual}
     eliminaPaciente={eliminaPaciente}
     


     
     />) )} 
    </>
       ):
       (
     <>
     <h2 className="font-black   text-3xl  text-center">Listado de Pacientes</h2>
    <p className="text-xl mt-5 text-center mb-10">
        No hay Pacientes{ '  '}
        <span className="text-indigo-600 font-bold ">Inscriba un Paciente</span>
        </p> 
     
     </>
)}
  
    
   </div>
  )
  
    
      
  
    
  }
  export default ListadoPacientes;


