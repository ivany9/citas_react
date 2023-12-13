import {useState,useEffect} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';



function App() {

  const [Pacientes,setPaciente]=useState([]);
  const[individual,setIndividual]=useState({})

useEffect(()=>{

 const obtenerLocal=()=>{
 
const pacientesls=JSON.parse(localStorage.getItem('Pacientes')) ?? [];
setPaciente(pacientesls)
}

 obtenerLocal()
},[])


   useEffect(()=>{

  localStorage.setItem('Pacientes',JSON.stringify(Pacientes))
  console.log(Pacientes)
   },[Pacientes])

   const eliminaPaciente=id =>{
  const pacientesActualizados=Pacientes.filter(paciente=>paciente.id!==id)
  setPaciente(pacientesActualizados)

   }

  return (
  
      <div className='container mx-auto mt-20 bg-gray-100'>
        <Header/>

        <div className='mt-12 md:flex px-10'>
         <Formulario 
          Pacientes={Pacientes}
          setPaciente={setPaciente}
          individual={individual}
          setIndividual={setIndividual}
            />
         <ListadoPacientes
               Parceros={Pacientes}
               setIndividual={setIndividual}
               eliminaPaciente={eliminaPaciente} 
               

         />
         </div>
        </div>
      
  )
}

export default App
