import { testDouble, expect } from './config/helpers'
import User from '../../server/modules/User/service'

describe('Testes Unitários do Controller', () => {
    describe('Método Create', () => {
        it('Deve criar um novo Usuário', () => {
            const novoUsuario = {
                id: 1,
                name: 'Novo usuário',
                email: 'novousuario@email.com',
                password: '1234'
            }
            const user = new User()
            return user.create(novoUsuario)
                        .then(data => {
                            expect(data.dataValues).to.have.all.keys(
                                ['id', 'name', 'email', 'password', 'updatedAt', 'createdAt']
                            )
                        })
        })
    })

    describe('Método Update', () => {
        it('Deve atualizar um Usuário', () => {
            const usuarioAtualizado = {
                name: 'Nome Atualizado',
                email: 'atualizado@email.com'
            }
            const user = new User()
            return user.update(1, usuarioAtualizado).then(data => {
                expect(data[0]).to.be.equal(1)
            })
        })
    })

    describe('Método GET Users', () => {
        it('Deve retornar uma lista com todos os Usuários', () => {
            const user = new User()
            return user.getAll().then(data => {
                expect(data).to.be.an('array')
                expect(data[0]).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                )
            })
        })
    })

    describe('Método getById', () => {
        it('Retornar um usuário de acordo com o ID passado', () => {
            const user = new User()
            return user.getById(1).then(data => {
                expect(data).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                )
                expect(data.id).to.be.equal(1)
            })
        })
    })

    describe('Método getByEmail', () => {
        it('Retornar um usuário de acordo com o E-mail passado', () => {
            const user = new User()
            return user.getByEmail('atualizado@email.com').then(data => {
                expect(data.email).to.be.equal('atualizado@email.com')
            })
        })
    })

    describe('Método Delete', () => {
        it('Deve deletar um Usuário', () => {
            const user = new User()
            return user.delete(1).then(data => {
                expect(data).to.be.equal(1)
            })
        })
    })
})