var user = new Object();
user.name = '哈哈'
user.getName = function () {
    return this.name;
}
user.setName = function (name) {
    this.nam = name;
}
console.dir(user);
