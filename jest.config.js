/** @type { import('jest').Config } */

const config = {
  preset: '@swc-node/jest',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
}

export default config
