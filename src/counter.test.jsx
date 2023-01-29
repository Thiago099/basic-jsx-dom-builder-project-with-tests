import { assert, describe, expect, test } from 'vitest'

import counter from "./counter.jsx"


describe('suite name', () => {

  const app = counter()

  const counterNumber = app.$find("#counter")[0]

  const incrementButton = app.$find("#increment-button")[0]
  
  test('setup', () => {

    expect(counterNumber.textContent).toBe("0")
    
  })
  
  test('increment', () => {
    
    incrementButton.$click()
    expect(counterNumber.textContent).toBe("1")

  })
})