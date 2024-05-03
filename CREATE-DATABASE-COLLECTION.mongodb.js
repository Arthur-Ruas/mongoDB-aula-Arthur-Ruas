
/* Define o nome do banco de dados */
const database = 'libri-database';

/* Define o nome da collection */
const collection = 'libri-collection';

/* Acessa o banco de dados livri-database */
use(database);

/* Cria a collection libr-collection */
db.createCollection(collection);
