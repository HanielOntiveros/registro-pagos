import { useState,useEffect } from 'react'
import Form from './components/Form'
import Historial from './components/Historial';


function App() {
  const [pagos, setPagos] = useState(JSON.parse(localStorage.getItem('pagos')) ?? []);
  useEffect(() => {
    localStorage.setItem('pagos',JSON.stringify(pagos))
  },[pagos])

  const resetPagos = () => {
    setPagos([])
  }

  return (
    <div className='pb-2 h-full w-auto bg-slate-200'>
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
            <button 
              className='relative left-1/2 p-1 border text-white border-slate-700 rounded-md bg-slate-800 cursor-pointer hover:bg-slate-900'
              type='submit' 
              onClick={resetPagos}
            >
              Reset
            </button>
          </>
        ) : null
      }
    </div>
  )
}

export default App
