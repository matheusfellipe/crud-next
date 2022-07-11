import Cliente from '../core/Cliente'

interface TableProps {
    clientes: Cliente[]
}

export default function Table(props:TableProps){
    function cabecalhoRender(){
        return (
<tr>
            <th className='text-left p-4'>Code</th>
            <th className='text-left p-4'>Name</th>
            <th className='text-left p-4'>Age</th>
        </tr>
        )
    }

    function dataRender(){
        return props.clientes?.map((cliente,i)=>{
return (
    <tr key={cliente.id} className={`${i%2 ===0 ? 'bg-purple-200':'bg-purple-100'}`}>
        <td className='text-left p-4'>{cliente.id}</td>
        <td className='text-left p-4'>{cliente.name}</td>
        <td className='text-left p-4'>{cliente.age}</td>
    </tr>
)
        })
    }
return(
    <table className='w-full rounded-xl overflow-hidden'>
        <thead className={`bg-gradient-to-r from-purple-500 to-purple-800`}>
        {cabecalhoRender()}
        </thead>
        <tbody>
            {dataRender()}
        </tbody>
    </table>
)
}