class Sorter {

  constructor() {
    this.list = [];
    this.comporator = null;
  }

  add(element) {
    this.list.push(element);
  }

  at(index) {
    return this.list[index];
  }

  get length() {
    return this.list.length;
  }

  toArray() {
    return this.list;
  }

  sort(indices) {
    indices.sort();
    if(indices.length < 2){
      return this.list;
    }
    for (var i = 0; i < indices.length - 1; i++) {
      for (var j = i+1; j < indices.length; j++) {
        var index1 = indices[i];
        var index2 = indices[j];
        if(this.comporator == null){
          if(this.list[index1]>this.list[index2]){
            var numb = this.list[index1];
            this.list[index1] = this.list[index2];
            this.list[index2] = numb;
          }
        }
        else{
          if(this.comporator(this.list[index1],this.list[index2]) > 0){
            var numb = this.list[index1];
            this.list[index1] = this.list[index2];
            this.list[index2] = numb;
          } 
        }
      }
    }
  }

  setComparator(compareFunction) {
    this.comporator = compareFunction;
  }
}

module.exports = Sorter;