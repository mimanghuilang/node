repl = require('repl');
function testFun() {
    msg = 'message'
}
testFun();
repl.start({useGlobal:false})
