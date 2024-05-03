const database = 'libri-database';

use(database);

/* Seleciona todos os dados de todos arquivos da collection */
db['libri-collection'].find();

/* -------------------------------------------------------------------------- */

use(database);

/* Seleciona dados baseados em um critério de busca */
db['libri-collection'].find({ "categoria": "Ficção Científica" });

/* -------------------------------------------------------------------------- */

use(database);

/* Seleciona todos os dados não se baseando em um critério de busca */
db['libri-collection'].find({}, 
    { 
        "_id": 0,
        "codigo": 0  
    }
);

/* -------------------------------------------------------------------------- */

use(database);

/* Seleciona dados específicos baseados em um critério de busca */
db['libri-collection'].find({ "categoria": "Ficção Científica" }, 
    { 
        "_id": 0,
        "codigo": 0  
    }
);

/* -------------------------------------------------------------------------- */

use(database);

/* Seleciona dados baseados em um critério de busca por uma parte de STRING de um campo */
db['libri-collection'].find({ "titulo": /robôs/i });