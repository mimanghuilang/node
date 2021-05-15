读取文件为二进制流
readFileSync('./test.js',[options])
readFile('./test.js',[options]，function(err,data){})

options
flag
.r 默认，读取文件不存在抛出异常
r+ 读取并写入，不存在抛出异常
rs 以同步方式读取文件并通知草所系统忽略本地文件系统缓存,不存在抛出异常
w 写入文件，不存在创建文件，已存在清空
wx 排他方式写入文件，不存在创建文件，已存在清空
w+:读取并写入文件，不存在则创建，存在则清空
wx+:与w+类似，但是以排他方式打开文件
a 追加写入文件，如果文件不存在则创建该文件
ax 与a类似，但是以排他方式打开文件
a+读取并追加写入文件，不存在则创建该文件
ax+:作用与‘a+’类似，但是以排他方式打开文件

endoding,不设置存放的是原始二进制内容的缓存区对象
编码 utf8，ascii,base64


写入
writeFile(filename,data,[options],callback)
writeFileSync(filename,data,[options],callback)
filename,文件名称
data参数用于指定要写入的内容，可以为一个字符串或则Buffer对象

options
flag 默认为‘w’
mode 指定当文件被打开时对该文件的读写权限默认值为0666
1、执行权限
2、写权限
4、读权限
说明：第一个值必须为0，第二个是所有者权限，第三个是用户组权限，第四个是其他人权限
encoding


文件底部追加
fs.appendFile(filename,data,[options],callback)
fs.appendFileSync(filename,data,[options])

指定位置开始读写文件
fs.open(filename,flags,[mode],callback)
fs.openSync(filename,flags,[mode])
回调参数 err,fd
fd:文件描述符号也称为文件句柄，fd是从3开始的

专业读
fs.read(fd,buffer,offset,length,position,callback)
fs.readSync(fd,buffer,offset,length,position)
offset 向缓存去中写入数据时的开始位置
length 从文件中读取的字节数量
position 文件开始读取位置
回调参数
err,bytesRead(读取字节数),buffer(读取的缓存区对象) 

专业写
fs.write(fd,buffer,offset,length,position,callback)
fs.writeSync(fd,buffer,offset,length,position)
回调参数
err,written写入字节数,buffer读取缓存区对象

创建与读取目录
fs.mkdir(path,[mode],callback)
fs.mkdirSync(path,[mode])
fs.readdir(path,callback)
fs.readdirSync(path)

查看与修改文件或目录的信息
查看
fs.stat(path,callback)
fs.lstat(path,callback)
回调参数 err,stats
stats方法列表
isFile
isDirectory
isBlockDevice
isCharacterDevice
isSymbolicLink
isFIFO
isSocket
.dev
.ino
.mode
.nlink
.uid
.gid
.rdev
.size
.atime
.mtime
.ctime
同步方法，略
fs.fstat(fd,callback)
fs.fstatSync(fd)

检查文件或则目录是否存在
fs.exists(path,callback)
fs.exitsSync(path)

获取文件或目录的绝对路径
fs.realpath(path,[cache],callback)
fs.realpathSync(path,[cache])

修改文件访问时间及修改时间
fs.utimes(path,atime,mtime,callback)
fs.utimesSync(path,atime,mtime)
fs.futimes(fd,atime,mtime,callback)
fs.futimesSync(fd,atime,mtime)

修改文件或目录的读写权限
fs.chmod(path,mode,callback)
fs.chmodSync(path,mode)
fs.fchmod(fd,mode,callback)
fs.fchmodSync(fd,mode)

移动文件或目录
fs.rename(oldPath,newPath,callback)
fs.renameSync(oldPath,newPath)

创建与删除文件的硬链接
fs.link(srcpath,dstpath,callback)
fs.linkSync(srcpath,dstpath)
fs.unlink(path,callback)
fs.unlinkSync(path,callback)

创建和查看符号链接,type为file或则dir
fs.symlink(srcpath,dstpath,[type],callback)
fs.symlinkSync(srcpath,dstpath,[type])
fs.readlink(path,callback)
fs.readlinkSync(path)

截断文件
fs.truncate(filename,len,callback)
fs.ftruncate(fd,len,callback)
fs.truncateSync(filename,len)
fs.ftruncateSync(fd,len)

删除空目录
fs.rmdir(path,callback)
fs.rmdirSync(path)

监视文件或目录
fs.watchFile(filename,[options],listener)