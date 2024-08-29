import { Component } from './component';

export class InputComponent extends Component {
  protected element: HTMLInputElement;

  constructor(type: string, className?: string) {
    super();

    this.element = document.createElement('input');
    this.element.type = type;
    this.element.style.width = '5rem';
    this.element.style.backgroundColor = '#0000';
    this.element.style.color = '#fff';
    this.element.style.border = '0';
    this.element.style.fontFamily = 'inherit';
    this.element.style.fontSize = '1.2rem';
    if (className) this.element.classList.add(className);
    this.element.addEventListener('keydown', (e) => e.stopPropagation());
    this.element.addEventListener('keyup', (e) => e.stopPropagation());
    this.element.addEventListener('keypress', (e) => e.stopPropagation());
  }

  setValue(value: string | number) {
    this.element.value = String(value);
  }

  onChangeStr(fn: (value: string) => void) {
    this.element.addEventListener('input', () => {
      fn(this.element.value);
    });
    this.element.addEventListener('change', () => {
      fn(this.element.value);
    });
    this.element.addEventListener('keydown', () => {
      fn(this.element.value);
    });
  }

  onChangeNum(fn: (value: number) => void) {
    this.element.addEventListener('input', () => {
      fn(Number(this.element.value));
    });
    this.element.addEventListener('change', () => {
      fn(Number(this.element.value));
    });
    this.element.addEventListener('keydown', () => {
      fn(Number(this.element.value));
    });
  }
}
