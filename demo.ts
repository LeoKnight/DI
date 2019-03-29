class InjectableStore {
  private set: Set<any>;

  constructor() {
    this.set = new Set<any>();
  }

  register(fn: any) {
    this.set.add(fn);
  }

  has(fn: any): boolean {
    return this.set.has(fn);
  }
}

const injectableStore = new InjectableStore();

function Injectable() {
  return function(target) {
    injectableStore.register(target);
    return target;
  };
}

@Injectable()
class Demo {
  value:'demo'
  getValue (){
    return this.value;
  }
}

