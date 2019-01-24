import { Request, Response, RequestHandler, ErrorRequestHandler, NextFunction }  from 'express'
import * as jwt from 'jwt-simple'
import * as HttpStatus from 'http-status'
import * as bcrypt from 'bcrypt'

class Handlers {

    authFail(req: Request, res: Response) {
        res.sendStatus(HttpStatus.UNAUTHORIZED)
    }

    authSuccess(res: Response, credentials: any, data: any) {
        const isMatch = bcrypt.compareSync(credentials.password, data.password)
    
        if(isMatch) {
            const payload = { id: data.id }
            res.json({
                token: jwt.encode(payload, config.secret)
            })
        } else {
            res.sendStatus(HttpStatus.UNAUTHORIZED)
        }
    }

    onError(res: Response, message: string, err: any) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(message)
    }

    onSuccess(res: Response, data: any) {
        res.status(HttpStatus.OK).json({
            payload: data
        })
    }

    errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
        console.error(`API error handler foi executada: ${err}`)
        res.status(500).json({
            errorCode: 'ERR-01',
            message: 'Erro interno do Servidor'
        })
    }

    dbErrorHandler(res: Response, err: any) {
        console.log(`Um erro aconteceu: ${err}`)
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            code: 'ERR-01',
            message: 'Erro ao criar usuário'
        })
    }

}

export default new Handlers()