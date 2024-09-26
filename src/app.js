import getBuffer from './index.js';
  
export class ArrayBufferConverter{
  load(buffer){
    this.data = buffer;
  }

  toString(){
   
    if (!this.data) {
      return ''; 
    }
    
    const bufferView = new Uint16Array(this.data);
    let str = '';
    for (let i = 0; i < bufferView.length; i++) {
      str += String.fromCharCode(bufferView[i]);
    }
    return str; 
  }

}
let a = new ArrayBufferConverter();
console.log(a.load(getBuffer()))