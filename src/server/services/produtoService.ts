import { Produto } from "../../interfaces/Produto";
import { prisma } from "../prisma";

export async function getAllFornecedores() {
  const data = await prisma.produto.findMany();
  return data;
}

export async function createFornecedor(data: Produto) {
  const { nome, unidade } =
    data;
  const produtoExists = await prisma.produto.findFirst({
    where: {
        nome: data.nome,
    },
  });

  if (produtoExists) {
    throw new Error("Produto já existe");
  }

  const produto = await prisma.produto.create({
    data: {
      nome,
      unidade,
    },
  });

  return produto;
}
