export class InjectableStore {

  private set: Set<any>;

  constructor(){
      this.set = new Set<any>();
  }

  register(fn: any){
      this.set.add( fn );
  }

  has(fn: any): boolean{
      return this.set.has( fn );
  }

}

export const injectableStore = new InjectableStore();

