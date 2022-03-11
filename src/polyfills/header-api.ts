/**
 * Polyfill for Headers API.
 * This code is based on whatwg-fetch. This polyfill does not include browsers
 * that supports fetch API but does not support all the Headers API, like Edge versions < 16
 * so this code is needed to polyfill this kind of browsers.
 */

const support = {
  fetch: 'fetch' in self,
  Headers: 'Headers' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
};

// tslint:disable-next-line:typedef
function keys(this: Headers) {
  const items: any = [];
  this.forEach((value, name) => items.push(name));
  return iteratorFor(items);
}

// tslint:disable-next-line:typedef
function values(this: Headers) {
  const items: any = [];
  this.forEach(value => items.push(value));
  return iteratorFor(items);
}

// tslint:disable-next-line:typedef
function entries(this: Headers) {
  const items: any = [];
  this.forEach((value, name) => items.push([name, value]));
  return iteratorFor(items);
}

// tslint:disable-next-line:typedef
function iteratorFor(items: any) {
  interface IterableIterator<T> extends Iterator<T> {
    [Symbol.iterator]?(): IterableIterator<T>;
  }

  const iterator: IterableIterator<any> = {
    next: () => {
      const value = items.shift();
      return { done: typeof value === 'undefined', value };
    },
  };

  if (support.iterable) {
    iterator[Symbol.iterator] = () => iterator;
  }

  return iterator;
}

// tslint:disable:no-string-literal
if (support.fetch && support.Headers && !(self as any).Headers.prototype.keys) {
  (self as any).Headers.prototype.keys = keys;
  (self as any).Headers.prototype.values = values;
  (self as any).Headers.prototype.entries = entries;

  if (support.iterable) {
    (self as any).Headers.prototype[Symbol.iterator] = (self as any).Headers.prototype.entries;
  }
}
// tslint:enable:no-string-literal
