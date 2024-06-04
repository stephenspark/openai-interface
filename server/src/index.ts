import restify from 'restify'
import statusRoute from './routes/status'

const server = restify.createServer()

statusRoute(server)

server.listen(process.env.PORT || 3001, () => {
  console.log(
    `Server is running at http://localhost:${process.env.PORT || 3001}`
  )
})

export default server
