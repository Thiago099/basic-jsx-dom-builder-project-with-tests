import { assert, describe, expect, it } from 'vitest'

import {app} from "./index.jsx"


describe('suite name', () => {
  const counterNumber = app.$find("#counter")[0]

  const incrementButton = app.$find("#increment-button")[0]
  
  it('setup', () => {
    assert.equal(counterNumber.textContent, "1")
  })
  
  it('increment', () => {
    
    incrementButton.$click()
    .$then(()=>{
      assert.equal(counterNumber.textContent, "2")
    })
  })
})