const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://35.223.179.2:9200' })
const express = require('express');

const app = express();

let port = process.env.PORT || 3100;

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
}));

app.post('/datasport/:indice', async (req, res) => {
    console.log('indice => ' + req.params.indice);
    let count = 1;
    const asyncRes = await Promise.all(req.body.map(async (item) => {
        try {
            console.log('item => ' + JSON.stringify(item));
            await client.index({
                index: req.params.indice,
                body: {
                    nombre: item.nombre,
                    edad: item.edad,
                    genero: item.genero,
                    vecesporsemana: item.vecesporsemana,
                    trabajo: item.trabajo
                }
            })
            count++;
        } catch (error) {
            console.log('error : ' + JSON.stringify(error));
            return error;
        }
    }));

    res.send({
        'procesados': count
    });
});
