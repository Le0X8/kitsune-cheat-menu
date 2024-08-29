import { Component } from './component';

export class MenuComponent extends Component {
  protected element: HTMLDivElement;
  protected entries: HTMLDivElement;
  protected expanded: HTMLSpanElement;

  constructor(name: string) {
    super();
    this.element = document.createElement('div');
    this.element.style.padding = '1rem';
    this.element.style.marginBottom = '1rem';
    this.element.style.border = '1px solid #ccc';
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'center';
    header.style.alignItems = 'center';
    header.style.gap = '1.5rem';
    header.style.cursor = 'pointer';
    header.style.userSelect = 'none';
    const headerText = document.createElement('h2');
    headerText.innerText = name;
    headerText.style.margin = '0';
    header.appendChild(headerText);
    this.expanded = document.createElement('span');
    this.expanded.innerText = '+';
    this.expanded.style.fontSize = '2rem';
    this.expanded.style.lineHeight = '1rem';
    this.expanded.style.fontWeight = 'bold';
    this.expanded.style.fontFamily = 'monospace';
    header.appendChild(this.expanded);
    header.addEventListener('click', () => {
      if (this.entries.style.display === 'none') {
        this.entries.style.display = 'flex';
        this.expanded.innerText = '-';
      } else {
        this.entries.style.display = 'none';
        this.expanded.innerText = '+';
      }
    });
    this.element.appendChild(header);

    this.entries = document.createElement('div');
    this.entries.style.display = 'none';
    this.entries.style.padding = '1rem';
    this.entries.style.marginTop = '1rem';
    this.entries.style.border = '1px solid #ccc';
    this.element.appendChild(this.entries);
  }

  renderChild(childRender: (parent: HTMLElement) => void) {
    childRender(this.entries);
  }

  modifyStyle(fn: (style: CSSStyleDeclaration) => void) {
    fn(this.entries.style);
  }
}
