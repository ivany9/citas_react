

const Pacientex = ({ivan,setIndividual,eliminaPaciente}) => {
    

    const handleEliminar =()=>{
 const respuesta = confirm("Deseas Eliminar ese paciente")
    if (respuesta)
    eliminaPaciente(ivan.id)
    
    }
     
    
  return (
    
      
     <div className="m-5 bg-white shadow-md   rounded-md p-2">
     <p className="font-bold mb-3 text-gray-700 uppercase">
         Nombre: {ivan.nombre}
         <span className="font-normal normal-case"></span>
     </p>
     <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario:{ivan.propietario}
         <span className="font-normal normal-case"></span>
     </p>
     <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{ivan.email }
         <span className="font-normal normal-case"></span>
     </p>
     <p className="font-bold mb-3 text-gray-700 uppercase">
         Fecha:{ivan.fecha}
         <span className="font-normal normal-case"></span>
     </p>

     <p className="font-bold mb-3 text-gray-700 uppercase">
         Sintomas:{ivan.sintomas}
         <span className="font-normal normal-case"></span>
     </p>
        <div className="flex justify-between">
           <button  onClick={()=>{setIndividual(ivan)} }  className="bg-indigo-600 uppercase rounded p-2 mt 10 text-white font-bold hover:bg-indigo-700">Editar</button  >
           <button onClick={handleEliminar} className="bg-red-600 uppercase hover:bg-red-500 rounded p-2 mt 10 text-white font-bold">Eliminar</button  >

        </div>
     </div> 
         


    
    

  )
}

export default Pacientex
