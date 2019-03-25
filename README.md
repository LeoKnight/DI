# 依赖注入

## 为什么我们需要依赖注入？

依赖注入主要解决了两个问题，单元测试（testability）和 dependency resolving
DI 让程序更容易被测试，使高耦合的复杂逻辑分解开，借由依赖容器可以是让一个类变得松耦合，因为容器使得你必须学会抽象，学会抽象类，抽象类可以更好的进行单元测试

* DI 作为一种设计模式
* Di 作为一种框架

```js
function CoffeeMaker() {
  const grinder = new Grinder();
  const pump = pump.getInstance();
  const heater = app.get('Heater');

  this.brew = function() {
    grinder.grind();
    heater.on();
    pump.pump();
  }
}
```

这不是依赖注入的设计模式，因为这个咖啡机 (构造函数) 和 Grinder 构造函数，pump 实例的`getInstance`方法，和全局变量 app，当你要使用



### 反例

一个强耦合的系统，所有的类都像齿轮一样，协同工作，互相耦合，一个齿轮坏了，整个系统就崩溃了
如果把一个软件项目比作一辆汽车

```js
class Car {
  private wheel = new WhellFactory();
  private battery = new BatteryFactory();
}
```

`Car`这个类依赖了`WhellFactory`这个类，并负责创建`WhellFactory`类的实例。当我们想更换另一种轮胎，我们需要做什么？
我们需要重新创建
所有关于 weel 的相关逻辑需要全部更新，并且针对于`Car`这个类的单元测试也需要更改，简直是牵一发而动全身。



### 依赖注入的优势

* 有益于单元测试
* 依赖的实例化交给了容器，减少了实例化模版代码
* 让程序更易于扩展
* 帮助程序保持松耦合


* 
## 相关链接

[youtube](https://www.youtube.com/watch?v=QtDTfn8YxXg)
[injection-js](https://github.com/mgechev/injection-js)
[thoughtworkers](http://insights.thoughtworkers.org/injection/)
[martinfowler](https://martinfowler.com/articles/injection.html#InversionOfControl)
[stack](https://stackoverflow.com/questions/3058/what-is-inversion-of-control)
[](https://www.youtube.com/watch?v=pERhnBBae2)
[](https://www.youtube.com/watch?v=_OGGsf1ZXMs)
[midway](https://midwayjs.org/midway/ioc.html#%E8%8E%B7%E5%8F%96-ioc-%E5%AE%B9%E5%99%A8)
[](https://medium.freecodecamp.org/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f)