export const Historial = ({ pagos }) => {
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', { 
        style : 'currency',
        currency: 'USD'
    })

}
  return (
    <div className="mt-4 mx-auto flex justify-center" >
        <table className="w-full mx-3 border-black text-center "> 
            <tr className="text-left ">
                <th className="border border-black text-center p-2">Servicio</th>
                <th className="border border-black text-center p-2">Monto</th>
                <th className="border border-black text-center p-2">Fecha</th>
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