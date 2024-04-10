let produtos = [];

function criarProduto(id, nome, qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function adicionarProduto(p) {
    produtos.push(p);
}

function listarProdutos(){
    return produtos;
}

function removerProduto(id){
    produtos.filter((p) => {
        let x = p.id != id;
        return x;
    });
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto
};