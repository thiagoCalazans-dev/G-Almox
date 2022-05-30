import { error } from "console";
import { Fornecedor } from "../../interfaces/Fornecedores";
import { prisma } from "../prisma";

export async function getAllFornecedores() {
  const data = await prisma.fornecedor.findMany();
  return data;
}

export async function getFornecedorByCNPJ (cnpj: string){
  const data = await prisma.fornecedor.findUnique({
    where: {cnpj}
  })
  return data
}

export async function deleteFornecedor(cnpj: string) {
  const data = await prisma.fornecedor.delete({
    where: {cnpj}
  })
  return data
}

export async function createFornecedor(data: Fornecedor) {
  const { nome, cnpj, cep, bairro, cidade, endereco, numero, complemento } =
    data;
  const fornecedorExists = await prisma.fornecedor.findUnique({
    where: {
      cnpj: data.cnpj,
    },
  });

  if (fornecedorExists) {
    throw error("forcecedor ja existe")
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




