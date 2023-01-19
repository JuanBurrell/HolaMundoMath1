class operador {
    constructor(val1, val2){
    this.val1 = val1;
    this.val2 = val2;
    this.suma = val1 + val2;
    this.resta = val1 - val2;
    this.multpl = val1 * val2;
    this.div = val1/val2;
    }
}

const operador1 = new operador(12,5);
console.log('La suma de '+ operador1.val1+' + '+operador1.val2+' es igual a: '+operador1.suma+'');
console.log('La resta de '+ operador1.val1+' - '+operador1.val2+' es igual a: '+operador1.resta+'');
console.log('La multiplicación de '+ operador1.val1+' * '+operador1.val2+' es igual a: '+operador1.multpl+'');    
console.log('La division de '+ operador1.val1+' / '+operador1.val2+' es igual a: '+operador1.div+'');    
