export abstract class Component {
  protected element: HTMLElement;

  render(parent: HTMLElement) {
    parent.appendChild(this.element);
  }

  renderChild(childRender: (parent: HTMLElement) => void) {
    childRender(this.element);
  }
}