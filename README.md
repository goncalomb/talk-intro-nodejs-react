# First Steps w/ Node.js & React

Introduction Workshop for Node.js and React.

Gonçalo Baltazar (goncalomb.com), 2020

* `slides/` - The presentation slides made with 'mdx-deck'.
* `scripts/` - Example scripts about Node.js and React.
* `message-board/` - Demo Message Board application, react with styled-components and server.
* `todo-list/` - Demo TODO List application, React.

## Questions?

Send me an email at: hello@goncalomb.com

## Xpand IT

Job Opportunities!

https://www.xpand-it.com/pt-pt/job-opportunities/

Follow XTech Community on Medium!

https://medium.com/xtechportugal

## Extra Material

Learn by doing!

### JavaScript / HTML

* https://developer.mozilla.org/en-US/
* http://es6-features.org/
* https://caniuse.com/

### Node.js

* https://nodejs.dev/
* https://nodejs.org/en/docs/guides/

Understand NPM and how to use it: https://docs.npmjs.com/about-npm/

* https://docs.npmjs.com/
* https://docs.npmjs.com/creating-a-package-json-file

Some important packages/libraries:

* Babel, JavaScript compiler (transpiler): https://babeljs.io/
* Webpack, bundling assets: https://webpack.js.org/
* Express, web framework: https://expressjs.com/
* ESLint, linter to help fix JavaScript problems: https://eslint.org/
* Lodash, utils: https://lodash.com/
* Axios, HTTP client (Promises): https://github.com/axios/axios

NPM registry has libraries for everything... No need to reinvent the wheel.

Just use `npm search <something>` to find packages (e.g. `npm search uuid`).

### React

* https://reactjs.org/
* https://reactjs.org/docs/getting-started.html
* https://reactjs.org/docs/hello-world.html

Some important topics and libraries to research next:

* Context: https://reactjs.org/docs/context.html
* Reconciliation: https://reactjs.org/docs/reconciliation.html
* Redux, for managing a global state: https://react-redux.js.org/
* React, framework with routing, server-side rendering and more: https://nextjs.org/
* Hooks (new feature in React 16.8): https://reactjs.org/docs/hooks-intro.html

### Other

```
git diff --diff-algorithm=minimal todo-list/ > todo-list-clean.patch
git apply todo-list-clean.patch
```
