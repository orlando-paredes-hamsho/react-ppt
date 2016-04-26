var req = require.context('./', true, /\.jsx$/);
var exp = {};
req.keys().forEach(function(key){
    exp[key.split(/[\/\.]/)[2]] = req(key);
});

export default exp;
