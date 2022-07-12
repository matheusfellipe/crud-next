import Cliente from '../core/Cliente'
import { IconsEdit, IconsTrash } from './Icons'

interface TableProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente:Cliente)=> void
    clienteExcluido?: (cliente:Cliente)=> void
}

export default function Table(props:TableProps){

const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

    function cabecalhoRender(){
        return (
<tr>
            <th className='text-left p-4'>Code</th>
            <th className='text-left p-4'>Name</th>
            <th className='text-left p-4'>Age</th>
            {exibirAcoes ? <th className='p-4'>Ações</th>:false}
            
        </tr>
        )
    }

    function dataRender(){
        return props.clientes?.map((cliente,i)=>{
return (
    <tr key={cliente.id} 
    className={`${i%2 ===0 ? 'bg-purple-200':'bg-purple-100'}`}>
        <td className='text-left p-4'>{cliente.id}</td>
        <td className='text-left p-4'>{cliente.name}</td>
        <td className='text-left p-4'>{cliente.age}</td>
        {exibirAcoes? actionsRender(cliente):false}
    </tr>
)
        })
    }

    function actionsRender(cliente:Cliente){
        return (
            <td className='flex justify-center'>
                {props.clienteSelecionado?(
                <button 
                onClick={()=>props.clienteSelecionado?.(cliente)}
                className={`flex justify-center 
                items-center text-green-600 rounded-full p-2 m-1
                hover:bg-purple-50
                `} >
                    {IconsEdit}
                    </button>):false}

                    {props.clienteExcluido?(
                <button  onClick={()=>props.clienteExcluido?.(cliente)}
                className={`flex justify-center 
                items-center text-red-500 rounded-full p-2 m-1
                hover:bg-purple-50
                `}>
                    {IconsTrash}
                    </button>):false}
                
                
            </td>
        )
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