import { assert, describe, expect, it } from 'vitest'

import {app} from "./index.jsx"


describe('suite name', () => {
  it('bar', () => {
    assert.equal(Math.sqrt(4), 2)
  })
  console.log(app.$find("#test")[0].__element.innerHTML)
})