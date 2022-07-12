import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Form from "../components/Form"
import useCadastroClientes from "../hooks/useCadastroClientes"



export default function Home() {

  const {clienteSelecionado,clienteExcluido,novoCliente,salvarCliente,cliente,clientes,tabelaVisivel,exibirTabela} = useCadastroClientes()

 
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title="Cadastro">
        {tabelaVisivel ? (
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
        cancelado={exibirTabela}
        />)}
      
       
      </Layout>
    </div>
  )
}
