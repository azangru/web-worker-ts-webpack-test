import { expose } from 'comlink';

const someSillyFunction = async () => {
  return await Promise.resolve(42);
};

const workerApi = {
  someSillyFunction
};

export type WorkerApi = typeof workerApi;

expose(workerApi);
