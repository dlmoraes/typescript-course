import { Request, Response, RequestHandler, ErrorRequestHandler, NextFunction }  from 'express'

export function errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    console.error(`API error handler foi executada: ${err}`)
    res.status(500).json({
        errorCode: 'ERR-01',
        message: 'Erro interno do Servidor'
    })
}