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
