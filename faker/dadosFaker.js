const {faker} = require('@faker-js/faker')
const fakerBr = require('faker-br');
const db = require('../infraestrutura/conexao')


function fakerUser() {
    for (let i = 0; i < 100; i++) {
        const usuario = {
            nome: faker.name.findName(),
            email: faker.internet.email(),
            sexo: faker.name.gender(true),
            descricao_usuario: faker.lorem.paragraph(),
            telefone: faker.phone.number('###########'),
            cpf: fakerBr.br.cpf(),
            idade:faker.date.birthdate({ min: 18, max: 100, mode: 'age' }).getDate(),
        }
        console.log(usuario)
        if(usuario.sexo == "male"){
            usuario.sexo = 0 
        }
        else {
            usuario.sexo = 1
        }
    
        db('usuario').insert(usuario).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}

function fakeImoveis() {
    for (let i = 0; i < 2; i++) {
        const imovel = {
            rua: faker.address.streetName(),
            bairro: faker.address.cityName(),
            numero: faker.address.buildingNumber(),
            cidade: faker.address.city(),
            estado: faker.address.stateAbbr(),
            cep:   faker.address.zipCode(),
            quantidade_quartos: faker.random.numeric(1),
            quantidade_banheiros: faker.random.numeric(1),
            garagem_vaga: faker.datatype.boolean(),
            tipo_imovel: faker.random.alpha(7),
            usuario_id_usuario: faker.random.numeric(1),
        }
        console.log(imovel)
        db('imovel').insert(imovel).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}


        

module.exports = {fakerUser,fakeImoveis}