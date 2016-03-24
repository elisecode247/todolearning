var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos', function(req,res){
        // seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy food',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'go jog',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err,results){
            if (err) throw err;
            res.send(results);
        })
    })
}