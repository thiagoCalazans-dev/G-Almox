import type { NextApiRequest, NextApiResponse } from "next";
import { Fornecedor } from "../../../interfaces/Fornecedores";
import { createFornecedor, getAllFornecedores } from "../../../server/services/fornecedorService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method} = req;

  if (method === "GET")
  try {    
    const data = await getAllFornecedores()
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
  else if (method === "POST")
  try {
    const data : Fornecedor = req.body;
    const f = await createFornecedor(data)
    return res.status(201).json({ f });
  } catch (error) {
    console.log(error);
  }

  return res.status(404).json({message: 'Route not found'})
}
