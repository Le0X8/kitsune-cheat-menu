import { Component } from './components/component';

const overworldSprite = document.createElement('img');
overworldSprite.src = 'overworld-sprite.png';
overworldSprite.style.display = 'none';
document.body.appendChild(overworldSprite);
const sharedSprite = document.createElement('img');
sharedSprite.src = 'shared-sprite.png';
sharedSprite.style.display = 'none';
document.body.appendChild(sharedSprite);

type MsgType = 'error' | 'info' | 'warn' | 'success';

const showMsg = (message: string, type: MsgType) => {
  let color: string;
  switch (type) {
    case 'error':
      console.error(message);
      color = '#c30';
      break;
    case 'info':
      console.info(message);
      color = '#07c';
      break;
    case 'warn':
      console.warn(message);
      color = '#da0';
      break;
    case 'success':
      console.log(message);
      color = '#080';
      break;
  }

  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.bottom = '1rem';
  container.style.width = '100vw';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.zIndex = '9999';
  container.style.pointerEvents = 'none';
  container.style.height = 'fit-content';
  container.style.padding = '0 1rem';
  const element = document.createElement('div');
  element.style.backgroundColor = color;
  element.style.color = '#fff';
  element.style.padding = '1rem';
  element.style.borderRadius = '0.5rem';
  element.style.border = '2px solid #fff';
  element.style.transition = 'all 0.33s';
  element.style.opacity = '0';
  element.innerText = message;

  container.appendChild(element);
  document.body.appendChild(container);

  setTimeout(() => {
    element.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    element.style.opacity = '0';
  }, 5000);

  setTimeout(() => {
    document.body.removeChild(container);
  }, 5500);
};

declare global {
  interface Window {
    menuLoaded: boolean;
  }
}

let menuOpen = false;
let menuOpenRunning = false;

const menuOpenListener = (event: KeyboardEvent) => {
  if (menuOpenRunning) return;
  if (!event.altKey || !event.shiftKey) return;

  event.preventDefault();
  event.stopPropagation();

  //console.log('menuOpen', menuOpen);

  if (!menuOpen) openMenu();
  else closeMenu();
};

const load = () => {
  window.menuLoaded = true;

  window.addEventListener('keydown', menuOpenListener);
};

const alreadyLoaded = () => {
  return window.menuLoaded;
};

const showLoaded = () => {
  showMsg('Cheat menu loaded!', 'success');
};

const showAlreadyLoaded = () => {
  showMsg('Cheat menu already loaded!', 'info');
};

const menuElement = document.createElement('div');
menuElement.style.position = 'fixed';
menuElement.style.top = '0';
menuElement.style.left = '0';
menuElement.style.width = 'calc(100vw - 4rem)';
menuElement.style.height = 'calc(100vh - 4rem)';
menuElement.style.backgroundColor = '#000a';
menuElement.style.color = '#fff';
menuElement.style.zIndex = '9999';
menuElement.style.padding = '2rem';
menuElement.style.display = 'none';
menuElement.style.opacity = '0';
menuElement.style.transition = 'all 0.33s';
menuElement.style.overflowY = 'auto';
menuElement.style.fontFamily = 'PixelMplus10, sans-serif';
document.body.appendChild(menuElement);

let blockInputListenerA: unknown = null;
let blockInputListenerB: unknown = null;
let blockInputListenerC: unknown = null;

const openMenu = () => {
  if (menuOpenRunning) return;
  menuOpenRunning = true;
  menuElement.style.display = 'block';
  menuOpen = true;

  menuElement.tabIndex = -1;
  menuElement.focus();
  menuElement.click();

  blockInputListenerA = window.addEventListener('keydown', (event) => {
    event.preventDefault();
    event.stopPropagation();
    menuOpenListener(event);
  });
  blockInputListenerB = window.addEventListener('keyup', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  blockInputListenerC = window.addEventListener('keypress', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });

  setTimeout(() => {
    menuElement.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    menuOpenRunning = false;
  }, 600);
};

const closeMenu = () => {
  if (menuOpenRunning) return;
  menuOpenRunning = true;
  menuElement.style.opacity = '0';
  menuOpen = false;

  window.removeEventListener('keydown', blockInputListenerA as EventListener);
  window.removeEventListener('keyup', blockInputListenerB as EventListener);
  window.removeEventListener('keypress', blockInputListenerC as EventListener);

  document.querySelector('canvas')!.tabIndex = -1;
  document.querySelector('canvas')?.focus();
  document.querySelector('canvas')?.click();

  setTimeout(() => {
    menuElement.style.display = 'none';
    menuOpenRunning = false;
  }, 600);
};

const addChild = (c: Component) => {
  c.render(menuElement);
};

export const menu = {
  showLoaded,
  showAlreadyLoaded,
  load,
  alreadyLoaded,
  addChild,
};
