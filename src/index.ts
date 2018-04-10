import {Lb4StartApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {Lb4StartApplication};

export async function main(options?: ApplicationConfig) {
  const app = new Lb4StartApplication(options);
  await app.boot();
  await app.start();
  return app;
}
