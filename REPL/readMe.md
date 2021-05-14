1、相当于eval函数
2、"_"可以用来访问最近一次的表达式
3、运行环境的上下文对象
var repl = require("repl")
var con = repl.start().context;
con.msg = '示例消息';
con.testFunction = function(){console.log(con.msg)}
4、基础命令
.break 重新书写函数
.clear 清除运行环境中保存的上下文对象
.exit   退出repl环境
.help
.save repl运行环境中的表达式保存到一个文件中
.load 将某个文件中的表达式依次载入到repl中


