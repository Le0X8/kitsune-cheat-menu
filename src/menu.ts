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
}

declare global {
  interface Window {
    menuLoaded: boolean;
  }
}

let menuOpen = false;

const load = () => {
  window.menuLoaded = true;

  window.addEventListener('keydown', (event) => {
    console.log(event);
    if (!event.altKey || !event.shiftKey) {
      console.log('Not opening menu...');
      return;
    }
  
    console.log('Opening menu...');

    event.preventDefault();
    event.stopPropagation();
  
    if (!menuOpen) openMenu();
    else closeMenu();
  });
}

const alreadyLoaded = () => {
  return window.menuLoaded;
}

const showLoaded = () => {
  showMsg('Cheat menu loaded!', 'success');
};

const showAlreadyLoaded = () => {
  showMsg('Cheat menu already loaded!', 'info');
}

const menuElement = document.createElement('div');
menuElement.style.position = 'fixed';
menuElement.style.top = '0';
menuElement.style.left = '0';
menuElement.style.width = '100vw';
menuElement.style.height = '100vh';
menuElement.style.backgroundColor = '#000a';
menuElement.style.color = '#fff';
menuElement.style.zIndex = '9999';
menuElement.style.padding = '2rem';
menuElement.style.display = 'none';
menuElement.style.opacity = '0';
menuElement.style.transition = 'all 0.33s';
menuElement.style.overflowY = 'auto';
document.body.appendChild(menuElement);

const openMenu = () => {
  console.log('open menu');
  menuElement.style.display = 'block';
  menuOpen = true;

  setTimeout(() => {
    menuElement.style.opacity = '1';
  }, 100);
};

const closeMenu = () => {
  console.log('close menu');
  menuElement.style.opacity = '0';
  menuOpen = false;

  setTimeout(() => {
    menuElement.style.display = 'none';
  }, 600);
};

export const menu = {
  showLoaded,
  showAlreadyLoaded,
  load,
  alreadyLoaded
};