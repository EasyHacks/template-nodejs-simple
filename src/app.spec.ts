import { jest } from '@jest/globals';

import { App } from './app.js';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const log = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('App', () => {
  it('says hello', () => {
    new App();
    expect(log).toHaveBeenCalledWith('Hello World!');
  });
});
