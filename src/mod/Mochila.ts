import {readFile} from 'fs';

/**
 * Array doble de números: beneficio y peso
 */
export type Coleccion = [number, number];
let text :string = '';
/**
 * Leer fichero;
 */
readFile(text, (_, data) => {
  console.log(data);
});

/**
 * Clase Mochila
 */
export class Mochila {
  /**
   * Constructor de la clase Mochila
   * @param capacidad Aguante máximo de la mochila
   * @param numElementos Número de elemenos máximos que caben en la mochila
   * @param elementos Beneficio y peso de corespondientes elemenos
   */
  constructor(protected capacidad: number,
    protected numElementos: number,
    protected elementos: Coleccion[]) {
  } 
  /**
   * Setter de Capacidad
   * @param c Número
   */
  setCapacidad(c: number) {
    this.capacidad = c;
    return this.capacidad;
  }
  /**
   * Setter de nElemenos
   * @param n Número
   */
  setNelemenos(n: number) {
    this.numElementos = n;
    return this.numElementos;
  }
  /**
   * Setter de Elemenos
   * @param e [Número, Número]
   */
  setElemenos(e: Coleccion[]) {
    this.elementos = e;
    return this.elementos;
  }

  /**
   * Getter de Capacidad
   * @returns capacidad
   */
  getCapacidad() {
    return this.capacidad;
  }
  /**
   * Getter de número de elemenos
   * @returns nElementos
   */
  getNelemenos() {
    return this.numElementos;
  }
  /**
   * Getter de los elementos
   * @returns elementos
   */
  getElemenos() {
    return this.elementos;
  }

  leerCSV() {
    text = 'CSVMochila.csv';
    readFile(text, (_, data) => {
      console.log(data);
    });
  }

  leerJSON() {
    text = 'JSONMochila.json'
    readFile(text, (_, data) => {
      console.log(data);
    });
  }
}