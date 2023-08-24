import { useState } from 'react'
import Form from './components/Form'
import Historial from './components/Historial';


function App() {
  const [pagos, setPagos] = useState([]);


  return (
    <div className='pb-2 h-full w-auto bg-gray-300'>
      <h1 className="mb-3 pt-3 text-3xl font-bold text-center">Registro de pagos</h1>
      <Form
        pagos = {pagos}
        setPagos = {setPagos}
      />
      {
        pagos && pagos.length ? (
          <>
            <hr className="h-0.5 my-8 bg-gray-700 border-1"/>
            <Historial 
              pagos = {pagos}
            />
          </>
        ) : null
      }
    </div>
  )
}

export default App