function toCamelCase(str){
    //handle empty string
    if (str.length === 0) return '';
  
    let arr = [];
    
    for(let i = 1; i < str.length-1; i++) {
      if (str.charAt(i) === '-') {
        arr = str.split('-');
        break;
      } else if (str.charAt(i) === '_') {
        arr = str.split('_');
        break;
      }
    }
  
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  
    str = arr.join('');
    return str;
  }
