import { Funko, Genero, Tipo } from './Funko.js';
import { readFileSync, readdirSync, existsSync, writeFileSync, mkdirSync, rmSync } from 'fs';
import chalk from "chalk";
/**
 * Enumerado con las características de un Funko
 * @param ID Identificador único del Funko
 * @param nombre Nombre del Funko
 * @param descripcion Descripcion del Funko
 * @param tipo Tipo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros
 * @param genero Genero, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras
 * @param franquicia Franquicia, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
 * @param numero Número identificativo del Funko dentro de la franquicia correspondiente
 * @param exclusivo Verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario
 * @param caracteristicasEspeciales Característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea
 * @param valorMercado Precio del Funko
 */
export enum AtributosFunko {
  Nombre = 'Nombre',
  Descripcion = 'Descripción',
  Tipo = 'Tipo',
  Genero = 'Género',
  Franquicia = 'Franquicia',
  Numero = 'Número',
  Exclusivo = 'Exclusivo',
  CaracteristicasEspeciales = 'Características especiales',
  ValorMercado = 'Valor del Mercado'
}

/**
 * Clase FunkoColeccion
 */
export class FunkoColeccion {
  private usuario_: string
  private Funkos: Funko[]
    /**
     * Constructor de la clase
     * @param Funkos Array de Funkos
     */
    constructor(usuario: string, coleccion: Funko[]) {
      this.usuario_ =  usuario
      this.Funkos = coleccion
    }

    /** 
     * Getter del atributo usuario 
     * @returns el usuario
     */
    getUsuario() {
      return this.usuario_
    }

    /**
     * Método para añadir elementos al array
     * @param funko Elemento a añadir
     */
    Add(funko: Funko) {
        this.Funkos.forEach(funkos => {
          if(funkos.getID() === funko.getID()) {
            throw new Error(chalk.red('ERROR: Funko existente en lista'))
          }
        });
        this.Funkos.push(funko)
        console.log(chalk.green('Funko Añadido'))
    }

    /**
     * Método para modificar elementos del array
     * @param funko Elemento a modificar
     */
    Modify(funko: Funko){
      let flag: boolean = false;
      for (let index = 0; index < this.Funkos.length; index++) {
        if (funko.getID() === this.Funkos[index].getID()) {
          this.Funkos[index] = funko
        } else {
          throw new Error(chalk.red('ERROR: Funko inexistente en lista'))
        }
      }
      console.log(chalk.green('Funko Añadido'))
    }

    /**
     * Método para eliminar elementos del array
     * @param ID Identificador del elemento
     */
    Delete(ID: number){
      let flag: boolean = false;
      this.Funkos.forEach((funko, index) => {
        if (funko.getID() === ID) {
          this.Funkos.slice(index, 1);
          flag = true;
        }
      })
      if(flag) console.log(chalk.green('Funko Borrado'))
      else {
        throw new Error(chalk.red('ERROR: Funko inexistente en lista'))
      }
    }

    /**
     * Método que muestra lista de elementos
     */
    List() {
      this.Funkos.forEach(funko => { 
        if (funko.getValorMercado() <= 15) {
          console.log(chalk.red(`Funko: ${funko.getID()} ${funko.getNombre()} de ${funko.getFranquicia()} 
                                ${funko.getTipo()} del género ${funko.getGenero()} con las siguientes habilidades 
                                ${funko.getCaracteresEspeciales()}. Descripción: ${funko.getDescripcion()}. 
                                Valor de mercado: ${funko.getValorMercado()}. Exclusivo: ${funko.getExclusivo()}`))
        } else if (funko.getValorMercado() <= 30) {
            console.log(chalk.blue(`Funko: ${funko.getID()} ${funko.getNombre()} de ${funko.getFranquicia()} 
                                  ${funko.getTipo()} del género ${funko.getGenero()} con las siguientes habilidades 
                                  ${funko.getCaracteresEspeciales()}. Descripción: ${funko.getDescripcion()}. 
                                  Valor de mercado: ${funko.getValorMercado()}. Exclusivo: ${funko.getExclusivo()}`))
        } else if (funko.getValorMercado() <= 60) {
            console.log(chalk.yellow(`Funko: ${funko.getID()} ${funko.getNombre()} de ${funko.getFranquicia()} 
                                      ${funko.getTipo()} del género ${funko.getGenero()} con las siguientes habilidades 
                                      ${funko.getCaracteresEspeciales()}. Descripción: ${funko.getDescripcion()}. 
                                      Valor de mercado: ${funko.getValorMercado()}. Exclusivo: ${funko.getExclusivo()}`))
        } else {
            console.log(chalk.green(`Funko: ${funko.getID()} ${funko.getNombre()} de ${funko.getFranquicia()} 
                                    ${funko.getTipo()} del género ${funko.getGenero()} con las siguientes habilidades 
                                    ${funko.getCaracteresEspeciales()}. Descripción: ${funko.getDescripcion()}. 
                                    Valor de mercado: ${funko.getValorMercado()}. Exclusivo: ${funko.getExclusivo()}`))
        }
      })
    }

    /**
     * Método que muestra un único elemento
     * @param ID 
     */
    Show(ID: number) {
      let flag: boolean = false;
      this.Funkos.forEach((funko, index) => {
        if (funko.getID() === ID) {
          if (funko.getValorMercado() <= 15) {
            console.log(chalk.red(`Funko: ${funko.getID()} ${funko.getNombre()} de ${funko.getFranquicia()} 
                                  ${funko.getTipo()} del género ${funko.getGenero()} con las siguientes habilidades 
                                  ${funko.getCaracteresEspeciales()}. Descripción: ${funko.getDescripcion()}. 
                                  Valor de mercado: ${funko.getValorMercado()}. Exclusivo: ${funko.getExclusivo()}`))
          } else if (funko.getValorMercado() <= 30) {
              console.log(chalk.blue(`Funko: ${funko.getID()} ${funko.getNombre()} de ${funko.getFranquicia()} 
                                    ${funko.getTipo()} del género ${funko.getGenero()} con las siguientes habilidades 
                                    ${funko.getCaracteresEspeciales()}. Descripción: ${funko.getDescripcion()}. 
                                    Valor de mercado: ${funko.getValorMercado()}. Exclusivo: ${funko.getExclusivo()}`))
          } else if (funko.getValorMercado() <= 60) {
              console.log(chalk.yellow(`Funko: ${funko.getID()} ${funko.getNombre()} de ${funko.getFranquicia()} 
                                        ${funko.getTipo()} del género ${funko.getGenero()} con las siguientes habilidades 
                                        ${funko.getCaracteresEspeciales()}. Descripción: ${funko.getDescripcion()}. 
                                        Valor de mercado: ${funko.getValorMercado()}. Exclusivo: ${funko.getExclusivo()}`))
          } else {
              console.log(chalk.green(`Funko: ${funko.getID()} ${funko.getNombre()} de ${funko.getFranquicia()} 
                                      ${funko.getTipo()} del género ${funko.getGenero()} con las siguientes habilidades 
                                      ${funko.getCaracteresEspeciales()}. Descripción: ${funko.getDescripcion()}. 
                                      Valor de mercado: ${funko.getValorMercado()}. Exclusivo: ${funko.getExclusivo()}`))
          }
          flag = true
        }
      }) 
      if(!flag) {
        throw new Error(chalk.red('ERROR: Funko inexistente en lista'))
      }
    }
  /**
   * Método privado encargado de cargar un Funko a un fichero JSON
   */
  private storeFunko(ID: number, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number) {
    let funkoToSave = {ID: ID, nombre: nombre, descripcion: descripcion, tipo: tipo, genero: genero, franquicia: franquicia, numero: numero, exclusivo: exclusivo, caractericticasEspeciales: caracteristicasEspeciales, valorMercado: valorMercado};
    if (!existsSync('./data/' + this.usuario_)) {
      mkdirSync('./data/' + this.usuario_);
    }
    writeFileSync('./data/' + this.usuario_ + '/' + ID + '.json', JSON.stringify(funkoToSave, null, 2),'utf8');
  }
}