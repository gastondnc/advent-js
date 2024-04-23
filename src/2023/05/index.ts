export function index() {
  const road = 'S..|...|..';// Carretera //
  const time = 10; // Unidades de tiempo //
  function cyberReindeer(road: string, time: number) {
    let newRoad: string = road;
    const regex: RegExp = /\|/g;
    const trip: string[] = [];
    for (let i = 0; i < time; i++) {
      if (i > 0) {
        const indexS = newRoad.indexOf('S');
        const arr: string[] = newRoad.split('');
        if (i >= 5) {
          newRoad = newRoad.replace(regex, '*');
        }
        if (arr[indexS + 1] != '|') {
          arr[indexS] = indexS > 0 ? road.charAt(indexS) : '.';
          arr[indexS + 1] = 'S';
          newRoad = arr.join('');
          console.log(newRoad);
        }
        if (i >= 5) {
          newRoad = newRoad.replace(regex, '*');
        }
        console.log(arr);
        console.log(indexS);
      }
      trip.push(newRoad);
    }
    console.log('Agregamos la road', trip);
    return trip
  }
  const result = cyberReindeer(road, time);
  console.log(result);
}
/* -> result:
[
  0-'S..|...|..', // estado inicial
  1-'.S.|...|..', // avanza el trineo la carretera
  2-'..S|...|..', // avanza el trineo la carretera
  3-'..S|...|..', // el trineo para en la barrera
  4-'..S|...|..', // el trineo para en la barrera
  5-'...S...*..', // se abre la barrera, el trineo avanza
  6-'...*S..*..', // avanza el trineo la carretera
  7-'...*.S.*..', // avanza el trineo la carretera
  8-'...*..S*..', // avanza el trineo la carretera
  9-'...*...S..', // avanza por la barrera abierta
]
*/
/**
  * Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, 
  * en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

  . = Carretera
  S = Trineo de Santa
  * = Barrera abierta
  | = Barrera cerrada
  Ejemplo de carretera: S...|....|.....

 * Cada unidad de tiempo, el trineo avanza una posición a la derecha. 
 * Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. 
 * Si está abierta, la atraviesa directamente.

 * Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, 
 * se abren todas para siempre.

 * Crea una función que simule el movimiento del trineo durante un tiempo dado y 
 * devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

 * El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

 * Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

 * Los elfos se inspiraron en este reto de Code Wars.
*/




































/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/