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
    produtos = produtos.filter((p) => {
        let x = p.id != id;
        return x;
    });
}

function editarProduto(id, qtd){
    const produtoIndex = produtos.findIndex(produto => produto.id === id);
    if (produtoIndex !== -1){
        produtos[produtoIndex].qtd = qtd;
        return `Quantidade atualizada para ${qtd}`
    }else{
        return `Produto com o ID ${ID} não encontrado.`;
    }
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
};