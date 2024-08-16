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
  }, 3000);

  setTimeout(() => {
    document.body.removeChild(container);
  }, 3500);
}

const showLoaded = () => {
  showMsg('Cheat menu loaded!', 'success');
};

export const menu = {
  showLoaded
};