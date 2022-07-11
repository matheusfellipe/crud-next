import Cliente from '../core/Cliente'

interface TableProps {
    clientes: Cliente[]
}

export default function Table(props:TableProps){
    function cabecalhoRender(){
        return (
<tr>
            <th>Code</th>
            <th>Name</th>
            <th>Age</th>
        </tr>
        )
    }

    function dataRender(){
        return props.clientes?.map((cliente,i)=>{
return (
    <tr key={cliente.id}>
        <td>{cliente.id}</td>
        <td>{cliente.name}</td>
        <td>{cliente.age}</td>
    </tr>
)
        })
    }
return(
    <table>
        <thead>
        {cabecalhoRender()}
        </thead>
        <tbody>
            {dataRender()}
        </tbody>
    </table>
)
}