export interface Fornecedor {
  id: number;
  nome: string,
  cnpj: string,
  cep: string,
  cidade: string,
  endereco: string,
  bairro: string,
  numero: string,
  complemento: string,
}

export interface FornecedorFormData {
  nome: string,
  cnpj: string,
  cep: string,
  cidade: string,
  endereco: string,
  bairro: string,
  numero: string,
  complemento: string,
}