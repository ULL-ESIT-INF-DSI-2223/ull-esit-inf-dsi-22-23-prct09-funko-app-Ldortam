# Informe de práctica
#### Autora: Laura Dorta Marrero

## Índice
1. [Resumen](#resumen)
2. [Coveralls](#coveralls)
2. [Práctica](#práctica)
3. [Modificación](#modificación)
4. [Conclusiones](#conclusiones)
5. [Referencias](#referencias)

## Resumen
<!-- qué se hace y para qu se hace -->
Esta práctica consiste en  implementar una aplicación que permita almacenar información de los Funko Pops pertenecientes a la colección de un usuario. En concreto, el sistema permitirá añadir, modificar, eliminar, listar y leer la información asociada a un Funko y esto se efectuará a tráves de la línea de comandos. Es por ello que manejaremos modulos como `Yargs` y `Chalk`.

## Coveralls
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Ldortam/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Ldortam?branch=main)

## Práctica
<!-- Explicar desarrollo de la prácica -->
1. [Funko](#funko)
2. [FunkoColeccion](#funkoColeccion)
3. [FunkoCommands](#funkoCommands)

### Funko
Funko vendrá descrito por los siguientes elementos mínimos de información que deberán ser almacenados:

- ID. Debe ser un identificador único del Funko.

- Nombre. Debe ser una cadena de caracteres.

- Descripción. Debe ser una cadena de caracteres.

- Tipo. Debe ser un enumerado con valores como, por ejemplo Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros.

- Género. Debe ser un enumerado con valores como, por ejemplo, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras.

- Franquicia. Debe ser una cadena de caracteres como, por ejemplo, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.

- Número. Debe ser el número identificativo del Funko dentro de la franquicia correspondiente.

- Exclusivo. Debe ser un valor booleano, esto es, verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario.

- Características especiales. Debe ser una cadena de caracteres que indique las característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea.

- Valor de mercado. Debe ser un valor numérico positivo.

#### SOURCE
```typescript
export class Funko {
    private ID_:number
    private nombre_: string
    private descripcion_: string
    private tipo_: Tipo
    private genero_: Genero
    private franquicia_: string
    private numero_: number
    private exclusivo_: boolean
    private caracteristicasEspeciales_: string
    private valorMercado_: number

    /**
     * Constructor de la clase
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
    constructor(ID:number, nombre: string, descripcion: string, tipo: Tipo,
                genero: Genero, franquicia: string, numero: number, exclusivo: boolean,
                caracteristicasEspeciales: string, valorMercado: number) {
        this.ID_ = ID;
        this.nombre_ = nombre
        this.descripcion_ = descripcion
        this.tipo_ = tipo
        this.genero_ = genero
        this.franquicia_ = franquicia
        this.numero_ = numero
        this.exclusivo_ = exclusivo
        this.caracteristicasEspeciales_ = caracteristicasEspeciales
        if (valorMercado >= 0) {
            this.valorMercado_ = valorMercado
        } else {
            throw new Error('El valor del Mercado ser positivo')
        }
    }
    /**
     * Método para cambiar valor del elemento
     * @param ID Identificador único del Funko
     * @returns ID
     */
    setID(ID: number) {
        this.ID_ = ID
        return this.ID_
    }
    /**
     * Método para cambiar valor del elemento
     * @param nombre Nombre del Funko
     * @returns nombre
     */
    setNombre(nombre: string) {
        this.nombre_ = nombre
        return this.nombre_
    }
    /**
     * Método para cambiar valor del elemento
     * @param descripcion Descripcion del Funko
     * @returns descripcion
     */
    setDescripcion(descripcion: string) {
        this.descripcion_ = descripcion
        return this.descripcion_
    }
    /**
     * Método para cambiar valor del elemento
     * @param tipo Tipo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros
     * @returns tipo
     */
    setTipo(tipo: Tipo) {
        this.tipo_ = tipo
        return this.tipo_
    }
    /**
     * Método para cambiar valor del elemento
     * @param genero Genero, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras
     * @returns genero
     */
    setGenero(genero: Genero) {
        this.genero_ = genero
        return this.genero_
    }
    /**
     * Método para cambiar valor del elemento
     * @param franquicia Franquicia, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
     * @returns franquicia
     */
    setFranquicia(franquicia: string) {
        this.franquicia_ = franquicia
        return this.franquicia_
    }
    /**
     * Método para cambiar valor del elemento
     * @param numero Número identificativo del Funko dentro de la franquicia correspondiente
     * @returns numero
     */
    setNumero(numero: number) {
        this.numero_ = numero
        return this.numero_
    }
    /**
     * Método para cambiar valor del elemento
     * @param exclusivo Verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario
     * @returns exclusivo
     */
    setExclusivo(exclusivo: boolean) {
        this.exclusivo_ = exclusivo
        return this.exclusivo_
    }
    /**
     * Método para cambiar valor del elemento
     * @param caracteristicasEspeciales Característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea
     * @returns caracteristicasEspeciales
     */
    setCaracteresEspeciales(caracteristicasEspeciales: string) {
        this.caracteristicasEspeciales_ = caracteristicasEspeciales
        return this.caracteristicasEspeciales_
    }
    /**
     * Método para cambiar valor del elemento
     * @param valorMercado Precio del Funko
     * @returns valorMercado
     */
    setValorMercado(valorMercado: number) {
        this.valorMercado_ = valorMercado
        return this.valorMercado_
    }

    /**
     * Método para mostrar valor del elemento
     * @returns ID
     */
    getID() {
        return this.ID_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns nombre
     */
    getNombre() {
        return this.nombre_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns descripcion
     */
    getDescripcion() {
        return this.descripcion_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns tipo
     */
    getTipo() {
        return this.tipo_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns genero
     */
    getGenero() {
        return this.genero_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns franquicia
     */
    getFranquicia() {
        return this.franquicia_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns numero
     */
    getNumero() {
        return this.numero_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns exclusivo
     */
    getExclusivo() {
        return this.exclusivo_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns caracteristicasEspeciales
     */
    getCaracteresEspeciales() {
        return this.caracteristicasEspeciales_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns valorMercado_
     */
    getValorMercado() {
        return this.valorMercado_
    }
}
```
#### TEST
```typescript
import 'mocha';
import { expect } from 'chai';
import{Funko} from '../../src/ejercicio1/Funko'

describe('Clase Funko tests', () => {
    it('Constructor', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15)).not.to.be.equal(null)
        try {
            new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', -15)
        } catch(error) {

        }
    })
    it('getID', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).getID()).to.be.equal(1)
    })
    it('getNombre', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).getNombre()).to.be.eql('Bugs Bunny')
    })
    it('getDescripcion', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).getDescripcion()).to.be.eql('Conejo')
    })
    it('getTipo', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).getTipo()).to.be.equal(0)
    })
    it('getGenero', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).getGenero()).to.be.equal(0)
    })
    it('getFranquicia', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).getFranquicia()).to.be.eql('Looney Tunes')
    })
    it('getNumero', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).getNumero()).to.be.equal(3)
    })
    it('getExclusivo', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).getExclusivo()).to.be.equal(false)
    })
    it('getCaracteristicasEspeciales', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).getCaracteresEspeciales()).to.be.eql('Ninguna')
    })
    it('getValorMercado', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).getValorMercado()).to.be.equal(15)
    })

    it('setID', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).setID(34)).to.be.equal(34)
    })
    it('setNombre', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).setNombre('Pato Lucas')).to.be.eql('Pato Lucas')
    })
    it('setDescripcion', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).setDescripcion('El conejo más astuto')).to.be.eql('El conejo más astuto')
    })
    it('setTipo', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).setTipo(1)).to.be.equal(1)
    })
    it('setGenero', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).setGenero(2)).to.be.equal(2)
    })
    it('setFranquicia', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).setFranquicia('Baby Looney Tunes')).to.be.eql('Baby Looney Tunes')
    })
    it('setNumero', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).setNumero(12)).to.be.equal(12)
    })
    it('setExclusivo', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).setExclusivo(true)).to.be.equal(true)
    })
    it('setCaracteristicasEspeciales', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).setCaracteresEspeciales('Cabeza balancea')).to.be.eql('Cabeza balancea')
    })
    it('setValorMercado', () => {
        expect(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15).setValorMercado(30)).to.be.equal(30)
    })
})
```
### FunkoColeccion
Esta clase fue creada porque cada usuario posee su propia lista de Funko Pops y necesita poder interactuar con esa lista de la siguiente manera:

- Añadir un Funko a la lista. Antes de añadir un Funko a la lista se debe comprobar si ya existe un Funko con el mismo ID. En caso de que así fuera, deberá mostrarse un mensaje de error por la consola. En caso contrario, se añadirá el nuevo Funko a la lista y se mostrará un mensaje informativo por la consola.

- Modificar un Funko de la lista. Antes de modificar un Funko, previamente se debe comprobar si ya existe un Funko con el ID del Funko a modificar en la lista. Si existe, se procede a su modificación y se emite un mensaje informativo por la consola. En caso contrario, debe mostrarse un mensaje de error por la consola.

- Eliminar un Funko de la lista. Antes de eliminar un Funko, previamente se debe comprobar si existe un Funko con el ID del Funko a eliminar en la lista. Si existe, se procede a su eliminación y se emite un mensaje informativo por la consola. En caso contrario, debe mostrarse un mensaje de error por la consola.

- Listar los Funkos existentes en una lista. En este caso, deberá mostrarse la información asociada a cada Funko existente en la lista por la consola. Además, deberá utilizar el paquete chalk para ello. Primero, deberá establecer rangos de valor de mercado. Luego, el valor de mercado de cada Funko deberá mostrarse con colores diferentes. Por ejemplo, para aquellos Funko con un valor de mercado elevado, dicho valor deberá mostrarse en color verde, mientras que para los de menor valor de mercado, dicho valor se mostrará con color rojo. Establezca, al menos, cuatro rangos de valor de mercado diferentes.

- Mostrar la información de un Funko concreto existente en la lista. Antes de mostrar la información del Funko, se debe comprobar que en la lista existe un Funko cuyo ID sea el del Funko a mostrar. Si existe, se mostrará toda su información, incluyendo el color de su valor de mercado. Para ello, use el paquete chalk. En caso contrario, se mostrará un mensaje de error por la consola.

Todos los mensajes informativos se mostrarán con color verde, mientras que los mensajes de error se mostrarán con color rojo. Use el paquete chalk para ello.

#### SOURCE
```typescript
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
```
#### TEST
```typescript
import 'mocha';
import { expect } from 'chai';
import{Funko} from '../../src/ejercicio1/Funko'
import{FunkoColeccion} from '../../src/ejercicio1/FunkoColeccion'

describe('Clase FunkoFunkoColeccion tests', () => {
    it('Constructor', () => {
        let funkos: Funko[] = [ new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15),
                                new Funko(2,'Pato Lucas', 'Pato', 0, 0, 'Looney Tunes', 7, false, 'Ninguna', 16),
                                new Funko(34,'Jake Peralta', 'Policía', 0, 1, 'Brooklyn 99', 1, false, 'Ninguna', 12),
                                new Funko(200,'Clone Wars', 'Guerra de clones', 3, 1, 'Star Wars', 10, true, 'Ninguna', 45)
        ]
        expect(new FunkoColeccion('Javier',funkos)).not.to.be.equal(null)
    })
    it('Constructor', () => {
        let funkos: Funko[] = [ new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15),
                                new Funko(2,'Pato Lucas', 'Pato', 0, 0, 'Looney Tunes', 7, false, 'Ninguna', 16),
                                new Funko(34,'Jake Peralta', 'Policía', 0, 1, 'Brooklyn 99', 1, false, 'Ninguna', 12),
                                new Funko(200,'Clone Wars', 'Guerra de clones', 3, 1, 'Star Wars', 10, true, 'Ninguna', 45)
        ]
        expect(new FunkoColeccion('Javier',funkos).getUsuario()).to.be.equal('Javier')
    })
    it('Add', () => {
        let funkos: Funko[] = [ new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15),
                                new Funko(2,'Pato Lucas', 'Pato', 0, 0, 'Looney Tunes', 7, false, 'Ninguna', 16),
                                new Funko(34,'Jake Peralta', 'Policía', 0, 1, 'Brooklyn 99', 1, false, 'Ninguna', 12),
                                new Funko(200,'Clone Wars', 'Guerra de clones', 3, 1, 'Star Wars', 10, true, 'Ninguna', 45)
        ]
        expect(new FunkoColeccion('Javier',funkos).Add(new Funko(132,'Mickael Jackson', 'Cantante de Pop', 0, 5, 'Reyes del POP', 4, true, 'Brillo en la oscuridad', 30))).not.to.be.equal(null)
        try {
            new FunkoColeccion('Javier',funkos).Add(new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15))
        } catch(error) {
            
        }
    })
    it('Modify', () => {
        let funkos: Funko[] = [ new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15),
                                new Funko(2,'Pato Lucas', 'Pato', 0, 0, 'Looney Tunes', 7, false, 'Ninguna', 16),
                                new Funko(34,'Jake Peralta', 'Policía', 0, 1, 'Brooklyn 99', 1, false, 'Ninguna', 12),
                                new Funko(200,'Clone Wars', 'Guerra de clones', 3, 1, 'Star Wars', 10, true, 'Ninguna', 45)
        ]
        //new FunkoColeccion('Javier',funkos).Modify(new Funko(200,'Clone Wars', 'Guerra de clones', 3, 1, 'Guerra de las galaxias', 10, true, 'Ninguna', 45))
        try {
            new FunkoColeccion('Javier',funkos).Modify(new Funko(132,'Mickael Jackson', 'Cantante de Pop', 0, 5, 'Reyes del POP', 4, true, 'Brillo en la oscuridad', 30))
        } catch(error) {
            
        }
        
    })
    it('Delete', () => {
        let funkos: Funko[] = [ new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15),
                                new Funko(2,'Pato Lucas', 'Pato', 0, 0, 'Looney Tunes', 7, false, 'Ninguna', 16),
                                new Funko(34,'Jake Peralta', 'Policía', 0, 1, 'Brooklyn 99', 1, false, 'Ninguna', 12),
                                new Funko(200,'Clone Wars', 'Guerra de clones', 3, 1, 'Star Wars', 10, true, 'Ninguna', 45)
        ]
        expect(new FunkoColeccion('Javier',funkos).Delete(2)).not.to.be.equal(null)
        try {
            new FunkoColeccion('Javier',funkos).Delete(3)
        } catch(error) {
            
        }
    })
    it('List', () => {
        let funkos: Funko[] = [ new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15),
                                new Funko(2,'Pato Lucas', 'Pato', 0, 0, 'Looney Tunes', 7, false, 'Ninguna', 16),
                                new Funko(34,'Jake Peralta', 'Policía', 0, 1, 'Brooklyn 99', 1, false, 'Ninguna', 70),
                                new Funko(200,'Clone Wars', 'Guerra de clones', 3, 1, 'Star Wars', 10, true, 'Ninguna', 45)
        ]
        expect(new FunkoColeccion('Javier',funkos).List()).not.to.be.equal(null)
    })
    it('Show', () => {
        let funkos: Funko[] = [ new Funko(1,'Bugs Bunny', 'Conejo', 0, 0, 'Looney Tunes', 3, false, 'Ninguna', 15),
                                new Funko(2,'Pato Lucas', 'Pato', 0, 0, 'Looney Tunes', 7, false, 'Ninguna', 16),
                                new Funko(34,'Jake Peralta', 'Policía', 0, 1, 'Brooklyn 99', 1, false, 'Ninguna', 70),
                                new Funko(200,'Clone Wars', 'Guerra de clones', 3, 1, 'Star Wars', 10, true, 'Ninguna', 45)
        ]
        expect(new FunkoColeccion('Javier',funkos).Show(34)).not.to.be.equal(null)
        expect(new FunkoColeccion('Javier',funkos).Show(1)).not.to.be.equal(null)
        expect(new FunkoColeccion('Javier',funkos).Show(2)).not.to.be.equal(null)
        expect(new FunkoColeccion('Javier',funkos).Show(200)).not.to.be.equal(null)
        try {
            new FunkoColeccion('Javier',funkos).Show(3)
        } catch(error) {
            
        }
    })
})
```
### FunkoCommands
Este fichero existe pues un usuario solo puede interactuar con la aplicación a través de la línea de comandos. 

#### SOURCE
```typescript
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { FunkoColeccion } from './FunkoColeccion';
import { Funko } from './Funko';


yargs(hideBin(process.argv))
  .command('add', 'Añadir un funko', {
  user: {
   description: 'Nombre de usuario',
   type: 'string',
   demandOption: true
  },
  id: {
   description: 'Funko ID',
   type: 'number',
   demandOption: true
  },
  name: {
    description: 'Funko Nombre',
    type: 'string',
    demandOption: true
  },
  desc: {
    description: 'Funko Descripcion',
    type: 'string',
    demandOption: true
  },
  type: {
    description: 'Funko Tipo',
    type: 'number',
    demandOption: true
  },
  gener: {
    description: 'Funko Genero',
    type: 'number',
    demandOption: true
  },
  franq: {
    description: 'Funko Franquicia',
    type: 'string',
    demandOption: true
  },
  num: {
    description: 'Funko Número Franquicia',
    type: 'number',
    demandOption: true
  },
  excl: {
    description: 'Funko Exclusivo',
    type: 'boolean',
    demandOption: true
  },
  carac: {
    description: 'Funko Caractericticas Especiales',
    type: 'string',
    demandOption: true
  },
  value: {
    description: 'Funko Valor Mercado',
    type: 'number',
    demandOption: true
  }

 }, (argv) => {
  let coleccion: FunkoColeccion = new FunkoColeccion(argv.user, []);
  let funko: Funko = new Funko(argv.id, argv.name, argv.desc, argv.type, argv.gener, argv.franq, argv.num, argv.excl, argv.carac, argv.value)
  coleccion.Add(funko);
 })


 .command('modify', 'Modificar un funko', {
  user: {
   description: 'Nombre de usuario',
   type: 'string',
   demandOption: true
  },
  id: {
   description: 'Funko ID',
   type: 'number',
   demandOption: true
  },
  name: {
    description: 'Funko Nombre',
    type: 'string',
    demandOption: true
  },
  desc: {
    description: 'Funko Descripcion',
    type: 'string',
    demandOption: true
  },
  type: {
    description: 'Funko Tipo',
    type: 'number',
    demandOption: true
  },
  gener: {
    description: 'Funko Genero',
    type: 'number',
    demandOption: true
  },
  franq: {
    description: 'Funko Franquicia',
    type: 'string',
    demandOption: true
  },
  num: {
    description: 'Funko Número Franquicia',
    type: 'number',
    demandOption: true
  },
  excl: {
    description: 'Funko Exclusivo',
    type: 'boolean',
    demandOption: true
  },
  carac: {
    description: 'Funko Caractericticas Especiales',
    type: 'string',
    demandOption: true
  },
  value: {
    description: 'Funko Valor Mercado',
    type: 'number',
    demandOption: true
  }

 }, (argv) => {
    let coleccion: FunkoColeccion = new FunkoColeccion(argv.user, []);
    let funko: Funko = new Funko(argv.id, argv.name, argv.desc, argv.type, argv.gener, argv.franq, argv.num, argv.excl, argv.carac, argv.value)
    coleccion.Modify(funko);
})

 
 .command('remove', 'Eliminar un funko', {
  user: {
   description: 'Nombre de usuario',
   type: 'string',
   demandOption: true
  },
  id: {
   description: 'Funko ID',
   type: 'number',
   demandOption: true
  }
 }, (argv) => {
    let coleccion: FunkoColeccion = new FunkoColeccion(argv.user, []);
    coleccion.Delete(argv.id);
 })


 .command('list', 'Listar todos los funkos', {
  user: {
   description: 'Nombre de usuario',
   type: 'string',
   demandOption: true
  }
 }, (argv) => {
    let coleccion: FunkoColeccion = new FunkoColeccion(argv.user, []);
    coleccion.List();
 })


 .command('show', 'Mostra un funko concreto', {
  user: {
   description: 'Nombre de usuario',
   type: 'string',
   demandOption: true
  },
  id: {
   description: 'Funko ID',
   type: 'number',
   demandOption: true
  }
 }, (argv) => {
    let coleccion: FunkoColeccion = new FunkoColeccion(argv.user, []);
    coleccion.Show(argv.id);
 })

 .help()
 .argv;
```

### Modificación

#### SOURCE
```typescript
import {readFile} from 'fs';

/**
 * Array doble de números: beneficio y peso
 */
export type Coleccion = [number, number];
let text :string = 'CSVMochila.csv';
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

  procesar() {
    let datos: string
    readFile(text, (_, data) => {
      datos = data.toString();
    });

  }
}
```
#### TEST
```typescript
import 'mocha';
import { expect } from 'chai';
import {Mochila} from '../../src/mod/Mochila'

describe('Clase Mochila tests', () => {
    it('Constructor', () => {
        expect(new Mochila(5, 1, [[4, 5]])).not.to.be.equal(null)
    })
    it('getCapacidad', () => {
        expect(new Mochila(5, 1, [[4, 5]]).getCapacidad()).to.be.equal(5)
    })
    it('getN_elements', () => {
        expect(new Mochila(5, 1, [[4, 5]]).getNelemenos()).to.be.equal(1)
    })
    it('getElements', () => {
        expect(new Mochila(5, 1, [[4, 5]]).getElemenos()).to.be.eql([[4,5]])
    })
    it('setCapacidad', () => {
        expect(new Mochila(5, 1, [[4, 5]]).setCapacidad(7)).to.be.equal(7)
    })
    it('setN_elements', () => {
        expect(new Mochila(5, 1, [[4, 5]]).setNelemenos(3)).to.be.equal(3)
    })
    it('setElements', () => {
        expect(new Mochila(5, 1, [[4, 5]]).setElemenos([[1, 4],[2, 6]])).to.be.eql([[1, 4],[2, 6]])
    })
})
```
## Conclusiones
<!-- propuestas de mejoras, con que me quedé al final -->
En conclusión, esta práctica nos trata de enseñar como manejar una API intereactiva por comandos, a la vez que a estilizar como mostramos la información por pantalla.

## Referencias

[Práctica referenciada](https://ull-esit-inf-dsi-2223.github.io/prct09-filesystem-funko-app/).

[Estructura básica de proyecto](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-project-setup.html).

[GitHub Pages](https://pages.github.com/).
