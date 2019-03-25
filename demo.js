function Demo() {
  this.value = 'demo';
  this.getValue = () => {
    return this.value
  };
  this.setValue = (arg) => {
    this.value = arg
  };
  
}

let a = new Demo();

console.log(a.value)

a.setValue('demo2')

console.log(a.value)

function extractArgs(fn) { //angular 这里还加了注释、箭头函数的处理
  var args = fn.toString().match(/^[^\(]*\(\s*([^\)]*)\)/m);
  // return args[1].split(',');
  return args
}

console.log(Demo.toString())