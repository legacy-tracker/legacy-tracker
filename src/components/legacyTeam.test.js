
import {addQb, ADD_QB, addRb, ADD_RB, addWr, ADD_WR, addTe, ADD_TE, addK, ADD_K} from "../ducks/legacyTeamReducer";
import * as actions from "../ducks/legacyTeamReducer";
import * as types from "../ducks/legacyTeamReducer";

describe('addQb', () => {
    let value = 'value'
    it('should bring in payload', () => {
        const text = 'payload'
        const expectedAction = {
            type: ADD_QB,
            payload: value
        }
        expect(actions.addQb(value)).toEqual(expectedAction)
    })
})

describe('addRb', () => {
    let value = 'value'
    it('should bring in payload', () => {
        const text = 'payload'
        const expectedAction = {
            type: ADD_RB,
            payload: value
        }
        expect(actions.addRb(value)).toEqual(expectedAction)
    })
})
describe('addRb', () => {
    let value = 'value'
    it('should bring in payload', () => {
        const text = 'payload'
        const expectedAction = {
            type: ADD_RB,
            payload: value
        }
        expect(actions.addRb(value)).toEqual(expectedAction)
    })
})
describe('addWr', () => {
    let value = 'value'
    it('should bring in payload', () => {
        const text = 'payload'
        const expectedAction = {
            type: ADD_WR,
            payload: value
        }
        expect(actions.addWr(value)).toEqual(expectedAction)
    })
})
describe('addTe', () => {
    let value = 'value'
    it('should bring in payload', () => {
        const text = 'payload'
        const expectedAction = {
            type: ADD_TE,
            payload: value
        }
        expect(actions.addTe(value)).toEqual(expectedAction)
    })
})
describe('addK', () => {
    let value = 'value'
    it('should bring in payload', () => {
        const text = 'payload'
        const expectedAction = {
            type: ADD_K,
            payload: value
        }
        expect(actions.addK(value)).toEqual(expectedAction)
    })
})