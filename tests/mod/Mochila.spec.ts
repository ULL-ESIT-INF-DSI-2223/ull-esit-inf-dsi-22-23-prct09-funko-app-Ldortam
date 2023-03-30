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
    // it('CSV', () => {
    //     expect(new Mochila(5, 1, [[4, 5]]).leerCSV).to.be.eql([[1, 4],[2, 6]])
    // })
})