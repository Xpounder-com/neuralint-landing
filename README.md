# Neural Intelligence Labs

Research and maker portfolio for [neuralint.io](https://neuralint.io).

The site presents Neural Intelligence Labs' work on reinforcement-learning
environments, software and terminal agents, reliable agent systems, and a
growing maker portfolio that includes Selva, RepoFix, Index, Executable Worlds,
Deep Focus, and LinkedFull.

## Development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

## Verification

```bash
npm run build
npm test
```

## Publishing

The `Publish GitHub Pages` workflow builds the application, exports the public
routes into a static bundle, and deploys that bundle through GitHub Pages.
`neuralint.io` is the Pages custom domain.

The static exporter can also be run locally while the production renderer is
available:

```bash
npm run build
npm run start -- --port 3001
npm run export:github-pages
```
