export const Historial = ({ pagos }) => {
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', { 
        style : 'currency',
        currency: 'USD'
    })

}
  return (
    <div className="p-3 mt-4 mx-auto flex flex-col align-middle justify-center " >
      <h2 className="mb-3 text-xl font-semibold ">Historial de pagos </h2>
        <table className="w-full border-black text-center "> 
            <tr className="text-left ">
                <th className="border border-black text-center font-medium p-2">Servicio</th>
                <th className="border border-black text-center font-medium p-2">Monto</th>
                <th className="border border-black text-center font-medium p-2">Fecha</th>
            </tr>
                {pagos.map(pago => (
                         <tr 
                         key={pago.id}>
                            <td className="border border-black  p-2">{pago.servicio}</td>    
                            <td className="border border-black  p-2">{formatearCantidad(pago.monto)}</td>
                            <td className="border border-black  p-2">{pago.fecha}</td> 
                         </tr>
                ))}
        </table>
    </div>
  )
}

export default Historial