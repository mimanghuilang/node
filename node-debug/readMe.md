1、获取自定义debugger提示符

2、继续命令脚本代码执行
cont命令或则c命令

3、执行下一步代码
n不会进入函数内部

4、进入函数内部
s

5、执行完函数内所有代码
o

6、观察变量的值或则表达式的结果
watch('表达式')

7、取消观察 unwatch('表达式')

8、设置取消断点
设置
setBreakPoint(filename,line)
sb(filename,line)
取消
clearBreakPoint(filename,line)
cb(filename,line)

9、查看该函数的外层函数返回位置
backtrace命令


10、返回当前所要执行的代码之前及之后的几行代码
list(n)


11、用该命令进入repl环境
repl 

12、重新开始脚本的调试
restart

13、终止脚本调试
kill

14、kill 后重新开始脚本调试
run

15、查看当前正在运行的文件以及所有被加载的内置模块
scripts

16、v8引擎的版本号
version

17、网页调试
npm install -g node-inspector
node -debug-brk[=port] app.js