class TrieNode {
    children: Record<string, TrieNode> = {};
    isEndOfWord = false;
    word: string | null = null;
  }
  
  export class Trie {
    root = new TrieNode();
  
    insert(word: string) {
      let node = this.root;
      for (const char of word.toLowerCase()) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
      node.word = word; 
    }
  
    findPrefix(prefix: string, limit: number): string[] {
      const results: string[] = [];
      let node = this.root;
  
      for (const char of prefix.toLowerCase()) {
        if (!node.children[char]) return results;
        node = node.children[char];
      }
  
      this._dfs(node, results, limit);
      return results;
    }
  
    private _dfs(node: TrieNode, results: string[], limit: number) {
      if (results.length >= limit) return;
  
      if (node.isEndOfWord && node.word) {
        results.push(node.word);
      }
  
      for (const char in node.children) {
        this._dfs(node.children[char], results, limit);
        if (results.length >= limit) break;
      }
    }
  }
  