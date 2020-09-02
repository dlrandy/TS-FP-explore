namespace specialized_overloading_signature_demo_1 {

  interface Document {
      createElement(tagName: "div"): HTMLDivElement; // specialized
      createElement(tagName: "span"): HTMLSpanElement; // specialized
      createElement(tagName: "canvas"): HTMLCanvasElement; // specialized
      createElement(tagName: string): HTMLElement; // non-specialized
  }

  class DocImpl implements Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any) {
      switch (tagName) {
        case "div":
          return document.createElement('div');
        case "span":
          return document.createElement('span');
        case "canvas":
          return document.createElement('canvas');
        default:
          return '';
      }
    }
  }
  
}