const Todo = require ('./model');

const data = [
    {
        name: 'Eat food'
    },
    {
        name: 'Drink water'
    },
    {
        name: 'Lay down'
    },
    {
        name: 'Try not to panic'
    },
    {
        name: 'Panic a lot'
    }
]

Todo.sync({force: false})
    .then(() => {
        Todo.bulkCreate(data)
            .then(() => console.log('Added data'));
    });