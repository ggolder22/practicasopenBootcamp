//crear una clase coche
// dentro de la coche, una variable numerica que almacene el numero de puertas que tiene
// una fucnion que incremente el numero de puertas q tiene el coche
// crar un objeto miCoche en el main y anadir una puerta
// mostrat el numero de puertas que tiene el objeto


function Coche(puertas) {
    this.puertas = puertas;
    this.sumarpuertas = function () {
        this.puertas++;
    }
}
    
var miCoche = new Coche(5);
miCoche.sumarpuertas();
miCoche.sumarpuertas();

console.log(miCoche.puertas);



  







