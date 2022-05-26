import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { Fornecedor } from "../../../interfaces/Fornecedores";
import { createFornecedor } from "../../../lib/services/fornecedoresService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data : Fornecedor = req.body;
    await createFornecedor(data)
    return res.status(201).json({ message: "Success" });
  } catch (error) {
    console.log(error);
  }
}
