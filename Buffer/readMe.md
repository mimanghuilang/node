## Buffer

### 创建
1、new Buffer(size)
2、new Buffer(array)
new Buffer([0,1,2])
3、new Buffer(str,[encoding]);
第二个参数值为一个用于指定文字编码格式的字符传，默认值是utf8
说明：
在node.js中，将自动执行字符串的输入输出时的编码与解码处理
可以使用的编码有
ascii
utf8
utf16le
ucs2

### 方法
填充
buf.fill(value,[offset],[end])

buf与字符串对象之间的相互转化
buf.toString([encodeing],[start],[end])
new Buffer(str,[encoding])
或则string_decoder类
var StringDecoder = require('string_decoder').StringDecoder
StringDecoder和toString方法相同
var decoder = new StringDecoder([encoding])
decoder.write(buff)
和toString相比，对于utf8编码格式提供更好的支持，而且支持断开的书写

与数值对象之间的转化
read系列
buf对象中的数据读取为Number类型的数据
write系列将Number类型的数据转换为指定的数据类型后写入缓存区
有零个参数 offset,noAssert

与JSON对象之间的转换
json  = JSON.parse(JSON.stringify(buf))
new Buffer(json)

复制缓存数据
buff.copy(targetBuffer,[targetStart],[sourceStart],[sourceEnd])

类方法
Buffer.isBuffer(obj)
Buffer.byteLength(string,[encoding])
Buffer.concat(list,[totalLength])
Buffer.isEncoding(encoding)
