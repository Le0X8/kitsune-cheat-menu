import { Component } from './components/component';
import { searchLocations, teleport } from './teleport';

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
    sr: any;
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

const teleportListener = (event: KeyboardEvent) => {
  if (menuOpenRunning) return;
  if (event.key !== 't' || menuOpen) return;

  event.preventDefault();
  event.stopPropagation();

  openTeleportMenu();
};

const load = async () => {
  window.menuLoaded = true;

  while (typeof window.sr === 'undefined') {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  window.sr.prototype.tick = () => {}; // disables top team changes

  let currentTeamIdx = 0;
  window.setInterval(() => {
    if (localStorage.getItem('rainbowTopTeam') !== 'true') return;

    const teams = ['red', 'yellow', 'green', 'blue'];
    const team = teams[currentTeamIdx];
    currentTeamIdx = (currentTeamIdx + 1) % teams.length;

    localStorage.setItem('KITSUNE_FIRST_PLACE', `"${team}"`);
  }, 1000);

  window.addEventListener('keydown', menuOpenListener);
  window.addEventListener('keydown', teleportListener);
  window.addEventListener('keydown', (ev) => {
    if (menuOpen) return;
    if (ev.key !== 'f' && ev.key !== 'F11') return;

    ev.stopPropagation();
    ev.preventDefault();

    const fullscreen = document.fullscreenElement !== null;

    if (fullscreen) {
      document.exitFullscreen();
      return;
    }

    document.body.requestFullscreen();
  });

  const style = document.createElement('style');
  style.innerHTML = '*:focus{outline: none;}';
  document.head.appendChild(style);
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

const teleportElement = document.createElement('div');
teleportElement.style.position = 'fixed';
teleportElement.style.top = '0';
teleportElement.style.left = '0';
teleportElement.style.width = 'calc(100vw - 4rem)';
teleportElement.style.height = 'calc(100vh - 4rem)';
teleportElement.style.backgroundColor = '#000a';
teleportElement.style.color = '#fff';
teleportElement.style.zIndex = '9999';
teleportElement.style.padding = '2rem';
teleportElement.style.display = 'none';
teleportElement.style.opacity = '0';
teleportElement.style.transition = 'all 0.33s';
teleportElement.style.overflowY = 'auto';
teleportElement.style.fontFamily = 'PixelMplus10, sans-serif';
document.body.appendChild(teleportElement);

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search...';
searchInput.style.width = 'calc(100vw - 6.25rem)';
searchInput.style.padding = '0.5rem 1rem';
searchInput.style.fontSize = '1rem';
searchInput.style.border = '2px solid #fff';
searchInput.style.backgroundColor = '#000a';
searchInput.style.color = '#fff';
searchInput.style.fontFamily = 'PixelMplus10, sans-serif';
searchInput.value = '';
teleportElement.appendChild(searchInput);

searchInput.addEventListener('input', () => updateTeleportList());

let teleportListSelected = 0;
let teleportListResults: [string, string, string][] = [];
let teleportListListener = (event: KeyboardEvent) => {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    teleportListSelected =
      (teleportListSelected + 1) % teleportListResults.length;
    updateTeleportList(true);
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    teleportListSelected =
      (teleportListSelected - 1 + teleportListResults.length) %
      teleportListResults.length;
    updateTeleportList(true);
  } else if (event.key === 'Enter') {
    event.preventDefault();
    const [name, dimension, location] =
      teleportListResults[teleportListSelected];
    teleport(dimension, location);
    showMsg(`Teleporting to ${name}`, 'info');
    closeMenu();
  } else if (event.key === 'Escape') {
    event.preventDefault();
    closeMenu();
  }
};
function updateTeleportList(noSearch: boolean = false) {
  if (!noSearch) {
    const search = searchInput.value.trim();
    teleportListResults = searchLocations(search);
    teleportListSelected = 0;

    searchInput.removeEventListener('keydown', teleportListListener);
    searchInput.addEventListener('keydown', teleportListListener);
  }

  teleportList.innerHTML = '';

  teleportListResults.forEach(([name, dimension, location], i) => {
    const isSelected = i === teleportListSelected;
    const button = document.createElement('button');
    button.innerText = name;
    button.style.padding = '0.5rem 1rem';
    button.style.fontSize = '1rem';
    button.style.color = '#fffa';
    button.style.border = '2px solid #fffa';
    if (isSelected) {
      button.style.color = '#fff';
      button.style.border = '2px solid #fff';
    }
    button.style.backgroundColor = '#0000';
    button.style.fontFamily = 'PixelMplus10, sans-serif';
    button.style.cursor = 'pointer';
    button.style.textAlign = 'left';
    button.addEventListener('click', () => {
      teleport(dimension, location);
      showMsg(`Teleporting to ${name}`, 'info');
      closeMenu();
    });
    teleportList.appendChild(button);
  });
  teleportList.children[teleportListSelected]?.scrollIntoView({
    block: 'nearest',
  });
}

const teleportList = document.createElement('div');
teleportList.style.marginTop = '0.5rem';
teleportList.style.display = 'flex';
teleportList.style.flexDirection = 'column';
teleportList.style.gap = '0.5rem';
teleportElement.appendChild(teleportList);

updateTeleportList();

const openMenu = () => {
  if (menuOpenRunning) return;
  menuOpenRunning = true;
  menuElement.style.display = 'block';
  menuOpen = true;

  menuElement.tabIndex = -1;
  menuElement.focus();
  menuElement.click();

  setTimeout(() => {
    menuElement.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    menuOpenRunning = false;
  }, 600);
};

const openTeleportMenu = () => {
  if (menuOpenRunning) return;
  menuOpenRunning = true;
  teleportElement.style.display = 'block';
  menuOpen = true;

  searchInput.value = '';
  updateTeleportList();
  searchInput.tabIndex = -1;
  searchInput.focus();
  searchInput.click();

  setTimeout(() => {
    teleportElement.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    menuOpenRunning = false;
  }, 600);
};

const closeMenu = () => {
  if (menuOpenRunning) return;
  menuOpenRunning = true;
  menuElement.style.opacity = '0';
  teleportElement.style.opacity = '0';
  menuOpen = false;

  document.querySelector('canvas')!.tabIndex = -1;
  document.querySelector('canvas')?.focus();
  document.querySelector('canvas')?.click();

  setTimeout(() => {
    menuElement.style.display = 'none';
    teleportElement.style.display = 'none';
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
