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