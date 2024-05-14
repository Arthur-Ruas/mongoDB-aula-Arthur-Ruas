/* Seleciona livros com valor maior de 100 reais ($gt)*/
use('libri-database');

db['libri-collection'].find({
    valor: {$gt:100}
});

/* Seleciona livros com valor menor de 100 reais ($lt)*/
use('libri-database');

db['libri-collection'].find({
    valor: {$lt:100}
});

/* Seleciona livros com valor maior igual a 100 reais ($gte)*/
use('libri-database');

db['libri-collection'].find({
    valor: {$gte:100}
});

/* Seleciona livros com valor menor igual a 100 reais ($lte)*/
use('libri-database');

db['libri-collection'].find({
    valor: {$lte:100}
});

/* Seleciona livros com valor igual a 100 reais ($eq)*/
use('libri-database');

db['libri-collection'].find({
    valor: {$eq:100}
});

/* Seleciona livros com valor diferente do que 100 reais ($ne)*/
use('libri-database');

db['libri-collection'].find({
    valor: {$ne:100}
});

/* Seleciona livros entre um intervalo de 100 e 150 reais*/
use('libri-database');

db['libri-collection'].find({
    valor: {$gte:100, $lte:150}
});

/* Seleciona livros e ordena do menor pro maior valor*/
use('libri-database');

db['libri-collection'].find().sort({valor: 1});

/* Seleciona livros e ordena do menor pro menor valor*/
use('libri-database');

db['libri-collection'].find().sort({valor: -1});

/* Juntando tudo*/
use('libri-database');

db['libri-collection'].find({valor: {$gte:50, $lte:150}},
    { 
        "_id": 0,
        "codigo": 0  
    }
).sort({valor: -1});
