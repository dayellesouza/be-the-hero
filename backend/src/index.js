const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * rota/ recurso
 */

/**
  * Métodos HTTP:
  * 
  * GET: buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

/**
   * Tipos de parâmetros:
   * 
   * Query Params: Parametros nomeados enviados na rota apos "?"(Filtro, paginação)
   * Route Params: Parametros utilizados para identificar recursos
   * Request Body: Corpop da requisição, utilizados para criar ou alterar recursos
   */

/**
* SQL: MySQL; SQLite, PostgreSQL, Oracle, Microsoft SQL SErver
* NoSQL: MongoDB, CouchDB, etc
    */

/**
* Driver: SELECT * from users
* Query Builder: table('users').select('+').where()
 */



app.listen(3333);