/*
Object
    propriedades / atributos
    funcoes / metodos

    {propriedades: "valor"}
*/

let pessoa = {
    name: "Lucas",
    idade: "27",
    andar: function() {
        console.log('Anda');
    }
};

console.log(`
${pessoa};

a ${pessoa.name} anda? ${pessoa.andar}
`)