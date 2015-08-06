var fs = require('fs');
fs.readdir('C:/Users/learning1/Desktop/Formation_Angular-2015-07-15', function(err, files){
    if (err){
        console.log("erreur rencontree!");
    } else {
        for(var i = 0; i< files.length; i++) {
            console.log(files[i]);
        }
    }
});
console.log("hello");
