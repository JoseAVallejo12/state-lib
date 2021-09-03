export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export function createStore() {
  if (!(<any>window)['storeMicrofrontend']) {
    (<any>window as any)['storeMicrofrontend'] = {
      mfe1: {},
      mfe2: {},
      mfe3: {}
    }
  }
}

export function getGlobalStore() {
  return   window['storeMicrofrontend']
}
