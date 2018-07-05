 export interface Produto {
// tenho uma chave, e esse ?: quer dizer que ela é particular, pois é um objeto opcional
    key?: string; 
    nome: string;
    descricao: string;
    preco: number;
    percentual: number;
    saldo: number;
 }