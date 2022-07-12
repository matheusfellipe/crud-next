import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormProps {
cliente:Cliente
clienteMudou?:(cliente:Cliente)=>void
cancelado?:()=> void
}

export default function Form(props: FormProps){
    const id = props.cliente?.id ?? null
    const [nome,setNome] = useState(props.cliente?.name??'')
    const [idade,setIdade] = useState(props.cliente?.age??0)
    return (
        <div>
            {id? (
                <Entrada 
                somenteLeitura 
                text="Código" 
                valor={id}
                className="mb-5"
                />
            ):false}

             <Entrada 
             text="Nome" 
             valor={nome} 
             valorMudou={setNome}
             className="mb-5"
             />

            <Entrada 
            text="Idade" 
            type="number" 
            valor={idade} 
            valorMudou={setIdade}
            
            />

            <div className=" flex justify-end mt-3">
                <Botao cor="blue" className="mr-2" 
                onClick={()=>props.clienteMudou?.(new Cliente(nome,idade,id))}>
                    {id?'Alterar':'Salvar'}</Botao>
                <Botao onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}