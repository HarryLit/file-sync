// 系统托盘（通知栏图标）
import { Menu, Tray } from 'electron';
import { getAssetPath } from './util';

/**
 * 设置系统托盘
 * @returns
 */
// eslint-disable-next-line import/prefer-default-export
export function setTray() {
  const tray = new Tray(getAssetPath('icon.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item3', type: 'radio', checked: true },
  ]);
  tray.setToolTip('This is my application.');
  tray.setContextMenu(contextMenu);
  return tray;
}
