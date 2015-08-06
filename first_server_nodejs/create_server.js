var Monster = require('./monster.js').Monster,
    app = require('./express_app.js').app;

app.get('/', function(req, res){
    res.render('home.jade');
});

app.get('/monsters', function(req, res){
    Monster.find(function(err, monsters){
       if(err){
           console.log(err);
       } else {
           res.render('monsters.jade', {monsters: monsters});
       }
    });
});

app.get('/new_monster', function(req, res){
    res.render('new_monster.jade');
});

app.get('/monster/:id', function(req, res){
    var monster = Monster.findById(req.params.id, function(err, monster){
        if(err){
            console.log(err);
        } else {
            res.render('monster.jade', {monster: monster});
        }
    });
});

app.post('/create_monster', function(req, res){
    var form = req.body;
    var monster = new Monster({
        name: form.name,
        level: parseInt(form.level, 10),
        desc: form.desc
    });
    monster.save(function(err, monster){
        if(err){
            console.log(err);
        } else {
            res.render('monster_created.jade');
        }
    });
});

exports.server = app;