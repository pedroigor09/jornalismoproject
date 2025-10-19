
export class SplitText {
  chars: HTMLElement[] = [];
  private element: HTMLElement;

  constructor(element: HTMLElement | null) {
    if (!element) {
      this.element = document.createElement('div');
      return;
    }
    
    this.element = element;
    this.split();
  }

  private split() {
    const text = this.element.textContent || '';
    this.element.innerHTML = '';
    
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      
      // Preserva espaços
      if (char === ' ') {
        span.innerHTML = '&nbsp;';
      }
      
      this.element.appendChild(span);
      this.chars.push(span);
    });
  }

  static create(element: HTMLElement | null): SplitText {
    return new SplitText(element);
  }

  revert() {
    if (this.element) {
      this.element.innerHTML = this.chars.map(char => char.textContent).join('');
    }
  }
}
