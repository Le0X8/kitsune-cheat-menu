import { Component } from './component';

export class TextComponent extends Component {
  protected element: HTMLSpanElement;
  protected textElement: HTMLSpanElement;

  constructor(text: string) {
    super();
    this.element = document.createElement('span');
    this.textElement = document.createElement('span');
    const style = document.createElement('style');
    style.innerHTML = `
      a, a:visited, a:active {
        color: #fff;
      }

      kbd {
        border: 1px solid;
        border-radius: 0.25rem;
        padding: 0.25rem;
      }
    `;
    this.element.appendChild(style);
    this.textElement.innerHTML = text;
    this.element.appendChild(this.textElement);
  }

  modifyStyle(fn: (style: CSSStyleDeclaration) => void) {
    fn(this.textElement.style);
  }
}