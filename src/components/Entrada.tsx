interface EntradaProps {
    type?: 'text' | 'number'
text: string
valor: any
className?: string
somenteLeitura?:boolean
valorMudou?: (valor:any)=> void
}

export default function Entrada(props:EntradaProps){
return (
    <div className="flex flex-col">
<label className="mb-2">
{props.text}

</label>
<input type={props.type??'text'} 
value={props.valor}
readOnly={props.somenteLeitura}
onChange={e=>props.valorMudou?.(e.target.value)}
className={`
border border-purple-500 rounded-lg
focus:outline-none bg-green-50
px-4 py-2
${props.somenteLeitura ? '':'focus:bg-white'}
`}
/>
    </div>
)
}