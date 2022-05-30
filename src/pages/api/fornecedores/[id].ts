import { NextApiRequest, NextApiResponse } from "next";
import { deleteFornecedor, getFornecedorByCNPJ } from "../../../server/services/fornecedorService";


export default async function handler(req: NextApiRequest, res: NextApiResponse){
	const cnpj = req.query.id

	if(req.method === 'DELETE') {
		const data = await deleteFornecedor(String(cnpj))
		res.json(data)
	} else {
		console.log("naõ deu pra deletar");
	}

	if(req.method === 'GET') {
		const data = await getFornecedorByCNPJ(String(cnpj))
		res.json(data)
	} else {
		console.log("naõ deu pra encontrar");
	}
}

