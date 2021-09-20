var vocales = prompt("Ingresa tu frase: ");
var a=0, e=0, i=0, o=0, u=0;
(vocales,20,'\n');

for(var x=0; x<20; x++){
    switch(vocales[x]){
        case 'a': a++;
        break;
        case 'e': e++;
        break;
        case 'i': i++;
        break;
        case 'o': o++;
        break;
        case 'u': u++;
        break;
    }
}
console.log("Vocal 1: ",a);
console.log("Vocal 2: ",e);
console.log("Vocal 3: ",i);
console.log("Vocal 4: ",o);
console.log("Vocal 5: ",u);