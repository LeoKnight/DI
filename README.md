# 浅析控制反转

- [浅析控制反转](#%E6%B5%85%E6%9E%90%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC)
  - [背景介绍](#%E8%83%8C%E6%99%AF%E4%BB%8B%E7%BB%8D)
  - [为什么我们需要它？](#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E4%BB%AC%E9%9C%80%E8%A6%81%E5%AE%83)
    - [应用场景](#%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF)
    - [最佳实践](#%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5)
    - [优势](#%E4%BC%98%E5%8A%BF)
  - [实现原理](#%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86)
  - [总结](#%E6%80%BB%E7%BB%93)
  - [相关链接](#%E7%9B%B8%E5%85%B3%E9%93%BE%E6%8E%A5)

## 背景介绍

控制反转 (Inversion of control) 并不是一项新的技术，是[Martin Fowler](https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer))提出的是设计模式。反转控制（下文统一简称为 IoC) 把传统模式中需要自己实例化抽象类的任务交给容器中，本来自己的类中需要主动执行变为被动，自己业务代码中不需要再考虑如何实例化其他依赖的抽象类，只需要依赖注入（Dependency Injection, 下文统一简称为 DI), 所以 IoC 和 DI 是互相依赖的设计模式。


DI 无论是作为设计模式还是框架都可以帮助我们维持 (maintaining) 和组装 (assembling) 依赖

## 为什么我们需要它？

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



### 应用场景

一个强耦合的系统，所有的类都像齿轮一样，协同工作，互相耦合，一个齿轮坏了，整个系统就崩溃了
如果把一个软件项目比作一辆汽车

```js
class Car {
  constructor() {
    this.engine = new Engine();
    this.tires = Tires.getInstance();
    this.doors = app.get('doors');
  }
}
```

我们有个类`car`,在构造器中我们装备了我们在这个类中所有用到的依赖项，这有什么问题呢？正如你所见，构造器不仅需要把依赖赋值到当前类内部属性上还需要把依赖实例化。比如`engine`是通过`Engine`构造函数 `new` 出
> the constructor not only assigns needed dependencies to internal properties, it also knows how those object are created. 
`Car`这个类依赖了`WhellFactory`这个类，并负责创建`WhellFactory`类的实例。当我们想更换另一种轮胎，我们需要做什么？
我们需要重新创建
所有关于 weel 的相关逻辑需要全部更新，并且针对于`Car`这个类的单元测试也需要更改，简直是牵一发而动全身。


### 最佳实践

### 优势

* 有益于单元测试
* 依赖的实例化交给了容器，减少了实例化模版代码
* 让程序更易于扩展
* 帮助程序保持松耦合

## 实现原理

## 总结

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

https://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html#demos
https://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html
https://blog.thoughtram.io/angular/2015/09/03/forward-references-in-angular-2.html
http://www.importnew.com/25320.html
https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring
https://blog.csdn.net/bestone0213/article/details/47424255
https://blog.csdn.net/softuse/article/details/52169749
http://www.cnblogs.com/liuhaorain/p/3747470.html