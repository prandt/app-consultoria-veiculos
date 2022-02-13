import { ClienteModel } from "./cliente.model"

export class ApoliceModel {
    id: string
	numeroApolice: string
	inicioVigencia: any
	fimVigencia: any
	placaVeiculo: string
    valor: number
    cliente: ClienteModel
	clienteId: string
}