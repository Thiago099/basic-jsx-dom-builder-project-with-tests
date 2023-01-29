import { assert, describe, expect, it } from 'vitest'

import {app} from "./index.jsx"


describe('suite name', () => {
  const counter = app.$find("#counter")[0].textContent

  it('setup', () => {
    assert.equal(counter, "1")
  })

  it('increment', () => {
    app.$find("#increment-button")[0]
    .$click()
    .$then(()=>{
      assert.equal(counter, "2")
    })
  })
})