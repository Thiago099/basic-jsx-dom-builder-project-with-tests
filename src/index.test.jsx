import { assert, describe, expect, test } from 'vitest'

import {app} from "./index.jsx"


describe('suite name', () => {
  const counterNumber = app.$find("#counter")[0]

  const incrementButton = app.$find("#increment-button")[0]
  
  test('setup', () => {

    expect(counterNumber.textContent).toBe("1")
    
  })
  
  test('increment', () => {
    
    incrementButton.$click()
    .$then(()=>{
      expect(counterNumber.textContent).toBe("2")
    })

  })
})