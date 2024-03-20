# Simple NodeJS Template

## Scope

This template is intended to be a simple starting point for very simple NodeJS projects, like prototypes, tests or small
scripts. Not intended for real-life projects.

## Opinions

- `npm start` runs `src/main.ts` using `swc-node`. This means it doesn't do any actual compilation or typechecking. The
  linter should be enough to catch most errors for the scope of this template. Make sure you use the linter in your IDE!
- `npm test` runs `src/test.ts` using `swc-node`. Same as previous.
- `eslint` is configured very strictly. This is to catch as many errors as possible and guarantee some minimum code
  quality.

## TODO
- [ ] Remove `--experimental-vm-modules` flag when no longer required on Jest test running. https://jestjs.io/ro/docs/ecmascript-modules. 
