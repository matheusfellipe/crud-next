import Layout from "../components/Layout"
import Table from "../components/Table"
import Cliente from "../core/Cliente"

const clientes = [
  new Cliente('Ana',34,'1'),
  new Cliente('Bia',42,'2'),
  new Cliente('Carlos',28,'3'),
  new Cliente('JP',30,'4')
]

export default function Home() {
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title="Cadastro">
        <Table clientes={clientes}></Table>
      </Layout>
    </div>
  )
}
