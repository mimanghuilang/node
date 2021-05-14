#console

## console.log或则console.info
console.log用于标准输出流的输出(也可以用console.info)

1）默认情况下将标准输出流输出到控制台：console.log('this is a test string')

2）输出到指定文件(1代表重定向标准输出流)
node app.js 1>info.log

3）指定输出字符串的格式
意义：从第二个参数开始依序输出所有字符串，如果不是字符串会转化为字符串再输出
console.log("%s","hoge","foo");

4）从第二个参数开始依序输出所有数值
console.log("d%",10,10.5)

5)输出百分号
console.log("%%","hoge")

## console.error或则console.warn
console.error用于标准错误输出流的输出(也可以用console.warn)


1）输出到指定文件(2代表重定向标准错误输出流)
node app.js 2>error.log
其它同console.log

##console.dir
查看一个对象中的内容并且将其输出到控制台中

## console.time和console.timeEnd方法
标准输出流的输出
console.time('label')
console.timeEnd('label')

## console.trace
用于将当前位置处的栈信息作为标准错误信息输出

## console.assert
对一个表达式进行评估，并抛出AssetionError(错误输出)