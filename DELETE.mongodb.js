/* Delete com Mongo DB */

/* Delete one */
use('libri-database');

db['libri-collection'].deleteOne(
    {codigo: '6'},
);

use('libri-database');

db['libri-collection'].find();

/* Delete many */
use('libri-database');

db['libri-collection'].deleteMany(
    {categoria: 'Ficção Científica'},
);


use('libri-database');

db['libri-collection'].deleteMany(
    {categoria: {$ne: 'Ficção Científica'}},
);


use('libri-database');

db['libri-collection'].find();
