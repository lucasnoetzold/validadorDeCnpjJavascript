window.validaCNPJ = (e => {
    let encontraDigito = (cnpj, digitos) => {

        let
                soma = digitos.reduce((ac, v, i) => ac + v * cnpj[i], 0),
                resto = soma % 11;

        return resto < 2 ? 0 : 11 - resto;
    };
    return cnpj => {

        cnpj = cnpj.replace(/[^\d]+/g, '').split("");

        return cnpj.length === 14
                && encontraDigito(cnpj, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]) == cnpj[12]
                && encontraDigito(cnpj, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]) == cnpj[13];
    };
})();
