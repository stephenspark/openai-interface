import type { Server, Request, Response, Next } from 'restify'

export default function (server: Server) {
  server.get('/status', (req: Request, res: Response, next: Next) => {
    res.send(200, {
      status: 'ok',
    })
    return next()
  })
}
