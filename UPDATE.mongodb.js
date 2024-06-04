/* Update com Mongo DB */

/* Update one */
use('libri-database');

db['libri-collection'].updateOne(
    {codigo: '4'},
    {
        $set: {valor: 180}
    }
);

/* Update many */
use('libri-database');

db['libri-collection'].updateMany(
    {categoria: 'Ficção Científica'},
    {
        $set: {valor: 100}
    }
);

use('libri-database');

db['libri-collection'].find({"categoria": "Ficção Científica"});

/* Update many sem o "WHERE"*/
use('libri-database');

db['libri-collection'].updateMany(
    {},
    {
        $set: {valor: 200}
    }
);

use('libri-database');

db['libri-collection'].find();





