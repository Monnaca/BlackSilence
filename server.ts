import express, { Express, Response, Request } from "express"

async function createServer() {
    const host: string = "localhost"
    const port: number = 8080
    const appInit: Express = express()

    appInit.get('/', (res: Response, req: Request) => {
        res.status(400)
        res.send("Hello World!")
    }) 

    appInit.listen(port, () => {
        console.log(`App Running on ${host}:${port}`)
    })
}

createServer()
