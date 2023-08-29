export const documents = [];

export class Storage {

  construtor(name, value) {
    this.name = name;
    this.value = value;
  }

  setStorage() {
    const itens = JSON.stringify(this.value);
    localStorage.setItem(this.name, itens);
  }

  getStorage() {
    const itens = localStorage.getItem(this.name);
    return  JSON.parse(itens);
  }

  cleanStorage() {
    localStorage.removeItem(this.name);
    //localStorage.clear();
  }

}