export interface ProdutoModel {
    id: number;
    nome: string;
    descricao?: string;
    preco: number;
    urlImagem: string;
}