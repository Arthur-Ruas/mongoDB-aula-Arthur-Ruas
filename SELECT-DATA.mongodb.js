const database = 'libri-database';

use('libri-database');

/* Seleciona todos os dados de todos arquivos da collection */
db['libri-collection'].find();

/* -------------------------------------------------------------------------- */

use('libri-database');

/* Seleciona dados baseados em um critério de busca */
db['libri-collection'].find({ "categoria": "Ficção Científica" });

/* -------------------------------------------------------------------------- */

use('libri-database');

/* Seleciona todos os dados não se baseando em um critério de busca */
db['libri-collection'].find({}, 
    { 
        "_id": 0,
        "codigo": 0  
    }
);

/* -------------------------------------------------------------------------- */

use('libri-database');

/* Seleciona dados específicos baseados em um critério de busca */
db['libri-collection'].find({ "categoria": "Ficção Científica" }, 
    { 
        "_id": 0,
        "codigo": 0  
    }
);

/* -------------------------------------------------------------------------- */

use('libri-database');

/* Seleciona dados baseados em um critério de busca por uma parte de STRING de um campo */
db['libri-collection'].find({ "titulo": /robôs/i });
