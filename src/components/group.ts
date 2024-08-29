import { Component } from './component';

export class GroupComponent extends Component {
  protected element: HTMLDivElement;

  constructor() {
    super();
    this.element = document.createElement('div');
    this.element.style.display = 'flex';
    this.element.style.flexWrap = 'wrap';
    this.element.style.gap = '0.5rem';
    this.element.style.padding = '0.5rem';
    this.element.style.border = '1px solid #ccc';
    this.element.style.flexDirection = 'column';
    this.element.style.alignItems = 'center';
    this.element.style.justifyContent = 'center';
    this.element.style.margin = '0.5rem';
    this.element.style.width = 'fit-content';
  }

  modifyStyle(fn: (style: CSSStyleDeclaration) => void) {
    fn(this.element.style);
  }
}
