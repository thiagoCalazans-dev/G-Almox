import { Fornecedor } from "../../interfaces/Fornecedores";
import { prisma } from "../prisma";

export async function getAllFornecedores() {
  const data = await prisma.fornecedor.findMany();
  return data;
}

export async function createFornecedor(data: Fornecedor) {
  const { nome, cnpj, cep, bairro, cidade, endereco, numero, complemento } =
    data;
  const fornecedorExists = await prisma.fornecedor.findFirst({
    where: {
      cnpj: data.cnpj,
    },
  });

  if (fornecedorExists) {
    throw new Error("Fornecedor já existe");
  }

  const fornecedor = await prisma.fornecedor.create({
    data: {
      nome,
      cnpj,
      cep,
      bairro,
      cidade,
      endereco,
      numero,
      complemento,
    },
  });

  return fornecedor;
}
