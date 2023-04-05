export enum Tipo {'Pop!', 'Pop! Rides', 'Vynil Soda', 'Vynil Gold'}
export enum Genero {'Animación', 'Películas y TV', 'Videojuegos', 'Deportes', 'Música', 'Anime'}
/**
 * Clase Funko
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