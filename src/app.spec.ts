import { jest } from '@jest/globals'

import { App } from './app.js'

const log = jest.spyOn(console, 'log').mockImplementation(() => undefined)

describe('App', () => {
  it('says hello', () => {
    new App()
    expect(log).toHaveBeenCalledWith('Hello World!')
  })
})
