import { useState } from "react"

const Form = ({ pagos, setPagos }) => {
  const [ servicio, setServicio ] = useState('')
  const [ monto, setMonto ] = useState('')
  const [ fecha, setFecha ] = useState('')
  const [id , setId ] = useState('')

  const generarId = () => {
    const random = Math.random().toString(36).slice(2);
    const fecha = Date.now().toString(36)
    
    return random + fecha
  }

  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setId(generarId)
    setPagos([...pagos,{servicio,monto,fecha,id}])
  }

  return (
    <div className="p-3 mx-auto h-auto">
        <h2 className="mb-5 text-center text-xl font-semibold">Servicios</h2>
            <form 
              onSubmit={handleSubmit} 
              className="bg-gray-200 shadow-lg rounded-md border border-black py-4 px-3 flex flex-col gap-4 "
              >
                <select 
                className="p-1 w-auto text-md text-center border border-gray-400 rounded-md"
                  onChange={e=>setServicio(e.target.value)}
                  required>
                    <option >Elige una opcion</option>
                    <option value='Gas'>Gas</option>
                    <option value='Luz'>Luz</option>
                    <option value='Agua'>Agua</option>
                    <option value='Internet'>Internet</option>
                </select>
                <input
                  className="p-1 w-auto text-md text-center border border-gray-400 rounded-md placeholder:text-black" 
                  type="number" 
                  placeholder="Indica el monto pagado"
                  required
                  value={monto}
                  onChange={e=>setMonto(Number(e.target.value))}
                  />
                <input 
                  className="p-1 w-auto text-md text-center border border-gray-400 rounded-md"
                  type="date" 
                  required
                  value={fecha}
                  onChange={e=>setFecha(e.target.value)}
                  />
                <input 
                  className="border text-white border-slate-700 rounded-md bg-slate-800 cursor-pointer hover:bg-slate-900" 
                  type="submit" 
                  value='Enviar' 
                />
            </form>
        <hr/>
    </div>
  )
}

export default Form
