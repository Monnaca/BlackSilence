import express, { Express, Response, Request } from "express"
import helmet from "helmet"
import path from "path"

async function createServer() {
    const host: string = "localhost"
    const port: number = 8080
    const appInit: Express = express()

    appInit.use(helmet({
        contentSecurityPolicy: {
            useDefaults: true,
            directives: {
                "font-src": [
                    'self',
                    'fonts.googleapis.com',
                    'themes.googleusercontent.com',
                    'fonts.gstatic.com'
                ],
                "style-src": null,
            }
        }
    }))

    appInit.get('/', (res: Response, req: Request) => {
        res.status(200)
        res.send("Connected")
        res.sendFile(path.join(__dirname, '/index.html'))
    }) 

    appInit.listen(port, () => {
        console.log(`App Running on ${host}:${port}`)
    })
}

createServer()
