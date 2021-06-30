import { wrap } from 'comlink';

import type { WorkerApi } from './workers/foo.worker';

const heading = document.createElement('H1');
heading.innerHTML = 'Hello world!';

document.body.appendChild(heading);


const test = async () => {
  const workerUrl = new URL('./workers/foo.worker', import.meta.url);
  console.log('workerUrl', workerUrl);
  
  const worker = new Worker(workerUrl);
  
  const service = wrap<WorkerApi>(worker);
  
  const result = await service.someSillyFunction();
  

  const paragraph = document.createElement('P');
  paragraph.innerHTML = `This number came from the worker: ${result}`;
  document.body.appendChild(paragraph);
};

test();
