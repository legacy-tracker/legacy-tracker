import {getPlayers, GET_PLAYERS, getId, GET_ID,GET_POSITION,getPosition} from '../ducks/playersReducer'
import axios from 'axios'
import * as actions from '../ducks/playersReducer'
import * as types from '../ducks/playersReducer'

describe('getPlayers', ()=>{
    let team = 16
    it('should bring in payload', () =>{
        const text = 'payload'
        const expectedAction ={
            type: GET_PLAYERS,
            payload: axios.get(`/api/userPlayers/${team}`)
        }
        expect(actions.getPlayers(team)).toEqual(expectedAction)
    })
})

test("team 1", ()=>{
    expect(getPlayers(1)).toEqual(
        {
            type: GET_PLAYERS,
            payload: axios.get('/api/userplayers/1')
        }
    )
})

test("team 2", ()=>{
    expect(getPlayers(2)).toEqual(
        {
            type: GET_PLAYERS,
            payload: axios.get('/api/userplayers/2')
        }
    )
})

describe('getId', ()=>{
    let id = 52
    it('should bring in payload', ()=>{
        const expectedAction={
            type: GET_ID,
            payload: id
        }
        expect(actions.getId(id)).toEqual(expectedAction)
    })
})

describe('getPosition', ()=>{
    let id = 52
    it('should bring in payload', ()=>{
        const expectedAction={
            type: GET_POSITION,
            payload: id
        }
        expect(actions.getPosition(id)).toEqual(expectedAction)
    })
})