repl = require('repl');
var util = require('util')
function writer(obj){
    return util.inspect(obj,{depth:1,color:false})
}
repl.start({
    prompt:'test',
    writer:writer
})