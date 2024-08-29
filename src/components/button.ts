import { Component } from './component';

export class ButtonComponent extends Component {
  protected element: HTMLButtonElement;

  constructor(text: string) {
    super();
    this.element = document.createElement('button');
    this.element.innerHTML = text;
    this.element.style.backgroundColor = '#0000';
    this.element.style.color = '#fff';
    this.element.style.border = '0';
    this.element.style.fontFamily = 'inherit';
    this.element.style.fontSize = '1.2rem';
    this.element.style.cursor = 'pointer';
  }

  onClick(fn: () => void) {
    this.element.addEventListener('click', fn);
  }
}
