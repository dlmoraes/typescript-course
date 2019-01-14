import { Application, Request, Response } from 'express'

class Routes {
    constructor(app: Application) {
        this.getRoutes(app)
    }

    getRoutes(app: Application): void {
        app.route('/').get((req: Request, res: Response) => res.send('Hello, world!'))
        app.route('/ola/:nome').get((req: Request, res: Response) => res.send(`Hello, ${req.params.nome}`))

        /* Rotas de Usuários */    
        app.route('/api/users/all').get(this.router.index())
        app.route('/api/users/create').post(this.router.create)
        app.route('/api/users/:id').get(this.router.findOne)
        app.route('/api/users/:id/update').put(this.router.update)
        app.route('/api/users/destroy').delete(this.router.destroy)
    }
}

export default Routes