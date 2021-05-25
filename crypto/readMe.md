## crypto
算法

### 获取所有加密算法
* crypto.getCipher() 获取所有的加密算法
* crypto.getHashes() 获取所有的散列算法

### 散列算法
* 使用 var data = crypto.createHash(algorithm)
参数 ‘sha1,md5,sha256,sha512,ripemd160’
* 创建一个摘要
hash.update(data,[input_encoding])
data 为buffer或则string,input_encoding 编码格式
* 输出摘要内容
hash.digest([encoding])


###
