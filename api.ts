import { Router } from "./deps.ts";

const api = new Router();

api.get('/', (req, res) => {

    res.status(200).send({ status: 'Deno running' });
})

api.get('/:id', (req, res) => {

    res.status(200).send({ param: req.params.id });
});

export { api };