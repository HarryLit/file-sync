import * as chokidar from 'chokidar';
import { existsSync, readdir } from 'fs';
import { dialog } from 'electron';

// eslint-disable-next-line import/prefer-default-export
export async function init() {
  const observer = chokidar.watch('c/test');
  console.log('isExist', existsSync('c:/test'));
  console.log(
    readdir('c/test', (error, data) => {
      console.log('data', data);
    })
  );
  const selectedPath = await openDialog();
  console.log('selectedPath', selectedPath);
  await observer.on('ready', () => {
    console.log('Initial scan complete. Ready for changes');
  });
  return observer;
}

async function openDialog() {
  const result = await dialog.showOpenDialog({
    properties: ['openFile', 'openDirectory'],
  });
  return result;
}
