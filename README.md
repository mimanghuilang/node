just for node practices


## REPL  可交互式运行环境
    R read
    E eval
    P print
    L loop
    快捷键： ctrl + D 退出node
    "_"    下划线字符用来访问最近使用的表达式
    "..."  多行运行
    start   运行环境中的上下文对象.见context_test.js
    
    基础命令：
    .break  中途放弃该函数的书写或则重新书写该函数
    .clear  清除上下文对象
    .editor
    .exit   退出
    .help   查看所有的基础命令
    .load   该命令将把某个文件中保存的所有表达式一次加载到REPL 运行环境中 .load haha.js
    .save   运行环境中的所有表达式保存到一个文件中


## node.js 基础知识
     控制台
        命令 console.log
            输出日志到指定文件 node console.js 1>info.log
            可以在console.log 方法中通过参数指定输出字符串的格式（略）
            可以运用各种运算符运算
        
        console.error
            输出错误日志到指定文件 node console-error.js 2>error.log
        
        console.dir
            查看对象
            
        console.time, console.timeEnd 查看运行时间
        
        console.trace，栈信息
        
        console.assert 断言
        
        
     全局作用域及全局函数
        global 全局作用域
        exports,require :将对象的使用将传递到模块的外部
        module===require.main  判断一个模块是否为应用程序中的主模块
        注：模块的首次加载会被缓存在缓存区中，多次引用得到的是同一个模块对象，多次引用模块内的代码不会多次执行
        require.resolve 查看模块文件的完整的绝对路径
        requrie.cache[requrie.resolve('./test.js')]
        delete   requrie.cache[requrie.resolve('./test.js')] 删除某条缓存
        
    _filename变量与_dirname变量
        _filename 获得当前模块的完成绝对路径的文件名
        _dirname  获取当前模块文件所在目录的完整绝对路径
    
    事件处理机制及事件环机制
        EventEmitter类的方法列表
            addListener
            on
            once
            removeAllListener
            removeListerner
            listeners
            emit
            
        最多可以绑定10个事件处理函数
        emitter.setMaxListeners(n)
        需要取得一个指定事件的所有事件处理函数时，可以用listerners
        emitter.listeners(event)
        略
        
        eventEmitter 类自身所拥有的事件
        emitter.on('newListener',function(e,f){})
        newListener
        removeListenter
        
    调试器
        node debug haha3.js
        n：next 
        c: continue
        s: step
        o: out
        watch('观察时使用的表达式')，unwatch
        
        // 设置与取消断点
        设置：setBreakpoint(filename,line),
        取消：clearBreakpoint(filename,line),sb(filename,line)
        
        其它实用命令：
        backtrace命令或则bt，  查看该函数及外层各函数的返回位置
        list命令               查看当前要执行代码之前或则之后的多少行代码
        repl命令               进入REPL运行环境
        restart命令            重新开始脚本的调试
        kill命令               终止脚本文件的调试
        run命令                重新开始脚本文件的调试
        scripts命令            查看当前正在运行的文件及被加载的模块的文件名称
        version命令            查看v8Javascript引擎的版本号
        
        使用node-inspector 调试工具
        
组织与管理模块
    使用目录来管理模块（略）
    从全局目录中加载模块（略）
    
    
    
包与npm包管理工具
    package.json 
        name:包名
        preferglobal 是否支持全局安装
        description  包说明
        version      版本号
        author       作者
        maintainers  包维护者信息数组
        bugs         bug的提交地址
        licenses     许可证数组
        repository   仓库托管地址数组
        keywords     关键字
        dependencies 依赖包
    bin 二进制文件
    lib javascript文件
    doc 文档
    test 测试用的文件
    
    npm 常用命令
    npm serarch forever  查看官方包仓库中forever
    npm install forever  安装forever
    npm install -g forever 全局安装forever
    npm root -g 查看全局安装包的安装路径
    npm config set prefix 'd:\node' 修改Node.js的全局包的安装路径
    npm list 查看当前目录下所安装的所有包
    npm list -g 查看全局的安装路径下的安装包
    npm uninstall 包名： 卸载当前目录下安装的某个包
    npm uninstall -g 包名： 卸载全局包安装路径下的安装的某个包
    npm update 包名：更新当前目录下的安装的某个包
    npm update -g 包名 略
    npm update 更新
    npm update -g
    
使用buffer类处理二进制数据
    如何创建？
        new Buffer（size）
        new Buffer(str,[encoding])   // 默认值是utf8其它 ascii utf8 utf16le ucs2
        初始化缓存区的所有内容：buf.fill(value.[offset],[end])
        使用数组初始化缓存区 new Buffer(array)
    如何转化字符串？
        buf.toString([encoding],[start],[end])
        write 方法
            buf.write(string,[offset],[length].[encoding])
        StringDecoder对象
            var StringDecoder = require('string_decoder').StringDecoder
            var decoder = new StringDecoder([endcoding])
            decoder.write(buffer) 
            Buffer.concat([str1,str2]).toString()   // 我喜欢
    如何在数值对象之间相互转化？
    如何复制粘贴？
    一些方法和作用以及使用
        
        
操作文件系统
    fs.readFile(filename,[optionss],callback)
    flag
        .'r' 读取文件，文件不存在抛出异常
        .'r+' 读取并写入文件，如果不存在则抛出异常
        .'rs' 以同步方式读取文件并通知操作系统忽略本地文件系统缓存
        .'w' 写入文件，不存在创建，存在则清空
        .'wx' 同w,但是以排他方式写入文件 
        .'w+' 读取并写入文件，不存在则创建，已存在则清空 
        .'wx+' 作用与‘w+’类似，但是以排他 
        .'a' 追加写入文件，如果文件不存在则创建该文件 
        .'ax' 作用类似于a,但是以排他方式写入文件 
        .'a+' 读取并追加写入文件，如果文件不存在则创建该文件 
        .'ax+' 类似于上面，但是以排他方式打开文件
     mode属性（0666可读写权限）
        ：第一个数必须是0，第二个数字规定文件和目录拥有者的权限，第三个规定文件或目录所有者所属用户组的权限，第四个是规定其它人的权限
        1：执行权限
        2：写权限
        4：读权限
    .encoding属性：用于指定使用何种编码格式来写入改文件“utf8”,“ascii”,“base64” 
    fs.writeFile(filename,data,[options],callback)
    fs.appendFile(filename,data,[options],callback)(追加)
    fs.open(filename,flags,[mode],callback(err,fd))
    fs.read(fd,buffer,offset,length,position,callback(err,bytesRead,buffer))
    fs.mkdir(path,[mode],callback)  mode的默认值是0777
    fs.readdir(path,callback(err,files))
    // 查看文件或目录信息，区别当查看符号链接文件的信息时，必须使用lstat方法
    fs.stat(path,callback)
    fs.lstat(path,callback) 
    isFile 判断呗查看的对象是否是一个文件
    isDirectory 是否是目录
    isBlockDevice 判断一个文件是否是一个块设备文件
    isCharacterDevice 查看的文件是否为一个字符设备文件
    isSymbolicLink  查看文件是否是一个符号链接文件
    isFIFO  判断是否是FIFO文件，仅在unix操作系统下有效
    isSocket 仅在unix操作系统下有效
    .dev: 文件或目录所在设备的id unix
    .ino: 索引编号 unix
    .mode 权限标志
    .nlink 硬链接数量
    .uid 所有者用户的id,unix
    .gid 所有者的组id
    .rdev 字符设备文件所在设备的id unix
    .size 文件尺寸
    .atime 文件访问时间
    .mtime 文件修改时间
    .ctime 文件创建时间
    .exists(path,callback) 文件是否存在
    .realpath（path,[cache],callback） 文件目录的绝对路径
    utimes(path,atime,mtime,callback) 修改文件访问时间及修改时间
    futimes(fd,atime,mtime,callback)
    chmod(path,mode,callback)
    fchmod(fd,mode,callback)
    
    // 其它操作
    .rename(oldPath,newPath,callback)
    // 创建删除文件的硬链接
    fs.link(srcpath,dstpath,callback)
    // 删除硬链接
    fs.unlink(path,callback)
    // 创建与查看符号链接
    symlink（srcpath,dstpath,[type],callback） 创建文件或目录的符号链接
        type:file,dir,windows系统中只能使用dir参数值以及junction
    readlink 读取符号链接
    truncate(filename,len,callback) 截断文件
    ftruncate(fd,len,callback)   截断文件
    rmdir(path,callback)
    watchFile(filename,[options],listener)
    unwatchFile(filename,[listener])
    
使用文件流
    stream.Readable 接口的对象来将对象数据读取为流数据
    .ReadStream 用于读取文件
    略
    
normalize 方法

path.normalize(p)

创建tcp客户端


    
            
