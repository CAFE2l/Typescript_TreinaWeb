enum produtoStatus {
    Ativo = 1,
    Inativo = 2,
    EmBreve = 3,
}

function checarProdutoStatus(status: produtoStatus){
    switch(status){
        case produtoStatus.Ativo:
            return "Disponivel";
            break;
        case produtoStatus.Inativo:
            return "Indisponivel";
            break;
        case produtoStatus.EmBreve:
            return "Em breve";
            break;
        default:
            return "Erro"
    }
}

console.log(checarProdutoStatus(produtoStatus.Inativo));