import express, { type Application, type Request, type Response } from 'express'


const app: Application = express();


app.get('/', (req: Request, res: Response) => {
    res.send(`<h1>Hello from typescript!</h1>`)
})


app.listen(8000, ()=> {
    console.log(`Server started at PORT: 8000`);
    
})