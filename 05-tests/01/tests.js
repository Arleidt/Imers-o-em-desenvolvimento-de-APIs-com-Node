/* 
Essencia do teste é garantir uma funcionalidade
proprio node ja vem com alguns modulos de asserção
assert.ok(true) passa se colocar falso ele ja fala que a asserção não passou
a gnt consegue fazer sem instalar nenhum modulo de teste trabalhar com asserções dentro do node.js também
mas pra que a gnt consiga trabalhar com esse framework pra automatizar as ferramentas a gente precisa instalar globalmente
npm install -g mocha global para eu conseguir rodar o comando mocha mas para que o proj entenda que estou usando mocha eu preciso instalar ele 
como dependencia de desenvolvimento npm i --save-dev mocha, pq save dev? pq quando a gnt publica nossas aplicações em produção quando vai divulgar para outros usuarios um website em um serviço
a gnt n instala modulos de teste pq vai mandar pra producao entao vai ser o menor pacote possivel somente com o que a gente precisar 
*/
const assert = require('assert')
//assert.ok(false)
/*
pra começar com o mocha primeiro colocar um describe e qual a switch de teste
*/
describe('Star Wars Tests', function () { //dentro dele defino as sub-switchs, os testes que vão rodar propriamente dito
    /* vou colocar um it dentro dele e vou definir um nome desse teste o que ele tem que fazer, 
    obj ir la no star wars e trazer um mapeamento pouco diferente do que traz por default*/
    it('deve buscar o r2d2 com o formato correto', async () => { //vou falar que vou criar um funcao assicrona sei que é uma fn pelo arrow function => agora posso usar async await dentro dele
        const expected = [{}] //qual o meu estado esperado
    })

})
