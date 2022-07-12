import Cliente from "../core/Cliente"
import { useEffect, useState } from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../firebase/db/ColecaoCliente"
import useTableOrForm from "./useTableorForm"


export default function useCadastroClientes() {
    const repo : ClienteRepositorio = new ColecaoCliente()

    const {tabelaVisivel,formularioVisivel,exibirFormulario,exibirTabela} = useTableOrForm()

  const [cliente,setCliente] = useState<Cliente>(Cliente.void())
  const [clientes,setClientes] = useState<Cliente[]>([])


  useEffect(getAll,[])


  function getAll() {
    repo.obterTodos().then(clientes=>{
      setClientes(clientes)
      exibirTabela()
    })
  }
    


  function clienteSelecionado(cliente:Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }
  
  async function clienteExcluido(cliente:Cliente) {
   await repo.excluir(cliente)
   getAll()
  }

  function novoCliente() {
    setCliente(Cliente.void())
    exibirFormulario()
  }
  
 async function salvarCliente(cliente:Cliente) {
   await repo.salvar(cliente)
   getAll()
  }
  return {
    tabelaVisivel,
    exibirTabela,
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    clienteExcluido,
    clienteSelecionado
  }
}

