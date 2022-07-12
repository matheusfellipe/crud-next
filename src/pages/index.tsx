import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Cliente from "../core/Cliente"
import Form from "../components/Form"
import { useState } from "react"

const clientes = [
  new Cliente('Ana',34,'1'),
  new Cliente('Bia',42,'2'),
  new Cliente('Carlos',28,'3'),
  new Cliente('JP',30,'4')
]

export default function Home() {

  const [cliente,setCliente] = useState<Cliente>(Cliente.void())
  const [visivel,setVisivel] = useState<'table'|'form'>('table')

  function clienteSelecionado(cliente:Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  
  function clienteExcluido(cliente:Cliente) {
    console.log(`Excluir ${cliente.name}`)
  }

  function novoCliente() {
    setCliente(Cliente.void())
    setVisivel('form')
  }
  
  function salvarCliente(cliente:Cliente) {
    console.log(cliente)
    setVisivel('table')
  }

 
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title="Cadastro">
        {visivel==='table' ? (
            <>
            <div className="flex justify-end">
            <Botao cor="green" className="mb-4"
            onClick={novoCliente}
            >New Client</Botao>
            </div>
            <Table clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
            ></Table>
            </>
        ):( <Form 
          cliente={cliente}
          clienteMudou={salvarCliente}
        cancelado={()=>setVisivel('table')}
        />)}
      
       
      </Layout>
    </div>
  )
}
