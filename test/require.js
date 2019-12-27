var exportsModule = require('./exports/exports')
if(module===require.main){
    console.log('isMain')
}
console.log(exportsModule.testVar)
