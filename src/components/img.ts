import { Component } from './component';

export class ImgComponent extends Component {
  protected element: HTMLImageElement;

  constructor(src: string, x: number, y: number, width: number, height: number) {
    super();
    this.element = document.createElement('img');
    this.element.style.imageRendering = 'pixelated';
    const imgLoader = new Image();
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    imgLoader.onload = () => {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(imgLoader, x, y, width, height, 0, 0, width, height);
      this.element.src = canvas.toDataURL();
    };
    imgLoader.src = src;
  }

  modifyStyle(fn: (style: CSSStyleDeclaration) => void) {
    fn(this.element.style);
  }
}
