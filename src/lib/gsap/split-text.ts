
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
    
    // Divide por palavras
    const words = text.split(' ');
    
    let i = 0;
    while (i < words.length) {
      const word = words[i];
      
      // Verifica se devemos agrupar palavras (ex: "de ser" ou "baiano de")
      let wordsToGroup = [word];
      if (word === 'de' && words[i + 1] === 'ser') {
        wordsToGroup.push(words[i + 1]);
        i++; // Pula a próxima palavra
      } else if (word === 'baiano' && words[i + 1] === 'de' && words[i + 2] === 'ser') {
        wordsToGroup.push(words[i + 1], words[i + 2]);
        i += 2; // Pula as próximas duas palavras
      }
      
      // Cria um grupo que não quebra
      const groupSpan = document.createElement('span');
      groupSpan.style.display = 'inline-block';
      groupSpan.style.whiteSpace = 'nowrap';
      
      wordsToGroup.forEach((groupWord, groupIndex) => {
        // Para cada palavra no grupo, divide em caracteres
        groupWord.split('').forEach(char => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.display = 'inline-block';
          
          groupSpan.appendChild(span);
          this.chars.push(span);
        });
        
        // Adiciona espaço entre palavras do grupo
        if (groupIndex < wordsToGroup.length - 1) {
          const space = document.createElement('span');
          space.innerHTML = '&nbsp;';
          space.style.display = 'inline-block';
          groupSpan.appendChild(space);
          this.chars.push(space);
        }
      });
      
      this.element.appendChild(groupSpan);
      
      // Adiciona espaço após o grupo (exceto no final)
      if (i < words.length - 1) {
        const space = document.createTextNode(' ');
        this.element.appendChild(space);
      }
      
      i++;
    }
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
