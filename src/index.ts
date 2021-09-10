export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export function createStore() {
  if (!(window as any)['storeMicrofrontend']) {
    ((<any>window) as any)['storeMicrofrontend'] = {
      mfe1: {},
      mfe2: {},
      mfe3: {},
    };
  }
}

export function getGlobalStore() {
  return (window as any)['storeMicrofrontend'];
}

interface GlobalState {
  mfe1: object;
  mfe2: object;
  mfe3: object;
  shell: object;
}

export class ManageState {
  private static instance: ManageState;
  private globalState: GlobalState;

  private constructor() {
    this.globalState = {
      mfe1: {},
      mfe2: {},
      mfe3: {},
      shell: {},
    };
  }

  public static getInstance(): ManageState {
    console.log('console log metodo getInstance', ManageState.instance);
    if (!ManageState.instance) {
      console.log('entrando a crear instancia');
      ManageState.instance = new ManageState();
    }

    return ManageState.instance;
  }

  getGlobalStore (): GlobalState {
    return this.globalState
  }

  setGlobalStore(key: keyof GlobalState, payload: object={}): void {
    this.globalState[key] = payload
  }

}
