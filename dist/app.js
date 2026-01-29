"use strict";
var produtoStatus;
(function (produtoStatus) {
    produtoStatus[produtoStatus["Ativo"] = 1] = "Ativo";
    produtoStatus[produtoStatus["Inativo"] = 2] = "Inativo";
    produtoStatus[produtoStatus["EmBreve"] = 3] = "EmBreve";
})(produtoStatus || (produtoStatus = {}));
function checarProdutoStatus(status) {
    switch (status) {
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
            return "Erro";
    }
}
console.log(checarProdutoStatus(produtoStatus.Inativo));
