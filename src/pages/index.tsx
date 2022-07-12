import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Cliente from "../core/Cliente"
import Form from "../components/Form"

const clientes = [
  new Cliente('Ana',34,'1'),
  new Cliente('Bia',42,'2'),
  new Cliente('Carlos',28,'3'),
  new Cliente('JP',30,'4')
]

function clienteSelecionado(cliente:Cliente) {
  console.log(cliente.name)
}

function clienteExcluido(cliente:Cliente) {
  console.log(`Excluir ${cliente.name}`)
}

export default function Home() {

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title="Cadastro">
        <div className="flex justify-end">
        <Botao cor="green" className="mb-4">New Client</Botao>
        </div>
        <Table clientes={clientes} 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
        ></Table>
        <Form cliente={clientes[2]}></Form>
      </Layout>
    </div>
  )
}
