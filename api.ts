import { Router, Request, Response } from "./deps.ts";

const api = new Router();

api.get('/', (Request: req, Response: res) => {

    res.status(200).send({ status: 'Deno running' });
})

api.get('/:id', (Request: req, Response: res) => {

    res.status(200).send({ param: req.params.id });
});

export { api };