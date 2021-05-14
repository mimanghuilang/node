## 存在形式
1、后缀名为.js的javascript文件
2、后缀名为.json的json文件
3、后缀名为.node经过编译的二进制数据

## 组织与管理模块
1、“/”表示根目录，windows代表磁盘目录
2、var foo=require('foo');
1)、找node_modules的foo.js，foo.node,foo.json文件
2)、应用程序node_modules子目录foo目录下的index.js
3)、应用程序node_modules子目录foo目录下的package.json
3、从全局目录中加载模块
当从其他文件中找不到的时候会从全局的路径下去找模块

## 模块对象的属性
module.id
访问：console.log(module.id),默认返回i文件的绝对路径
修改：module.id = 'foo'
module.filename 
当前抹开文件的文件名
module.loaded
返回模块是否已经被加载
module.parent 
查看父模块对象
module.children
查看子模块对象

## 通用npm包
一个包事实上是一个目录
1、包含了对包描述的JSON格式的package.json文件
2、在bin子目录存放二进制文件
3、在lib子目录存放javascript文件
4、在doc子目录存放对包或则包的使用方法进行说明的文档文件
5、在test目录存放一些对包进行单元测试用的文件
### package.json文件说明
1、包名，唯一
name
2、是否支持全局安装
preferglobal
3、包说明
description
4、version
版本号
5、autor
作者
6、包维护者信息数组
maintainers,包含 name、email、web
7、bug的提交地址
bugs
8、许可证数组
licenses,包含type(许可证名称)和url(链接到许可证文本的地址)
9、仓库托管地址数组
repository,包含type(仓库类型，如Git),url(仓库地址),path(相对于仓库的路径，可选)
10、关键字数组
keywords
11、本包依赖的包
dependencies

## 包管理工具
* 官方地址： 
https://npmjs.org/
* 相关命令
1、查找并查看包的package.json 信息
npm search forver
2、查看
npm view forver
3、安装
npm install forver
4、全局安装
npm install forver -g
5、查看全局包的安装路径
npm root -g
6、修改全局包安装路径
npm config set prefix 'd:\node'
7、查看当前目录下所安装的所有目录包
npm list
8、全局路径下所有安装包
npm list -g
9、卸载包
npm uninstall 包名
10、全局卸载
npm uninstall -g 包名
11、更新包
npm update 包名
12、更新全局包
npm update 包名 -g
13、更新当前目录下的包
npm update
14、更新全局包
npm update -g