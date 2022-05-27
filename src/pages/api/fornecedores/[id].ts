import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/prisma";


export default async function handler(req: NextApiRequest, res: NextApiResponse){
	const id = req.query.id

	if(req.method === 'DELETE') {
		const data = await prisma.fornecedor.delete({
			where: {id: Number(id)}
		})
		res.json(data)
	} else {
		console.log("Note could not be created");
	}
}