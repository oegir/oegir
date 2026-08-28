const fs = require('node:fs')
const http = require('node:http')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const port = Number(process.env.PORT || 8001)

http.createServer((request, response) => {
  const requestedPath = decodeURIComponent(request.url.split('?')[0].split('#')[0])
  const filePath = path.resolve(root, '.' + (requestedPath === '/' ? '/index.html' : requestedPath))

  if (!filePath.startsWith(root + path.sep)) {
    response.writeHead(403)
    response.end()
    return
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404)
      response.end()
      return
    }

    response.writeHead(200)
    response.end(content)
  })
}).listen(port, '127.0.0.1')
