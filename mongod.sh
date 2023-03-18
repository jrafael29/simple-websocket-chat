
#criar uma database (collection) no mongodb
use nome_da_database;

#mostrar todos dbs 
show dbs;

# criar uma tabela no database selecionado
db.nome_da_tabela

# mostrar todas collections / tabelas
show collections;
show tables;

# inserir um registro a uma tabela
db.nome_da_tabela.insertOne({
    campo: "valor",
    nome: "Rafael",
    idade: 90,
    bonito: true
});

# insere muitos registros a uma tabela 
db.nome_da_tabela.insertMany([
    {
        nome: "joao",
        idade: 75,
        bonito: false
    },
    {
        nome: "maria",
        idade: 39,
        bonito: true
    },
])

# ler todos registros de uma tabela 
db.nome_da_tabela.find()


# ler um arquivo com condiçao
db.nome_da_tabela.find({ idade: {$lt: 50} })


