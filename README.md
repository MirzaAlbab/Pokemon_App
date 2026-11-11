# Pokemon_App

A React Native Pokémon application with browsing, detail, account, and PokeBag screens.

[Repository](https://github.com/MirzaAlbab/Pokemon_App)

## Features

- Home and Pokémon-detail screens
- PokeBag collection screen
- Firebase-backed authentication dependencies
- Redux state, persisted storage, and form validation

## Technology

`react` 17.0.2 · `react-native` 0.68.2 · `redux` ^4.2.0

## Getting started

Install Node.js and a React Native CLI development environment compatible with the version in `package.json`. Android requires a compatible JDK, Android SDK, and an emulator or connected device. iOS requires macOS, Xcode, and CocoaPods.

```bash
git clone https://github.com/MirzaAlbab/Pokemon_App.git
cd Pokemon_App
```

```bash
npm install
npm start
```

In another terminal, build Android:

```bash
npm run android
```

For iOS, install the pods under `ios/` first, then run `npm run ios`. If the project integrates Firebase, supply your own platform configuration and enable the authentication providers used by the app.

## Development and checks

```bash
npm test
npm run lint
```

## Project structure

- `__tests__/` — JavaScript test files
- `android/` — Android native project
- `ios/` — iOS native project
- `src/` — Application source

## Project notes

Review src/helper/api.js for the API base URL and configure your own Firebase project. A CodePush staging script is retained in package.json; do not run release scripts until their service configuration has been reviewed. React Native version: 0.68.2.

## License

No root `LICENSE` file was present in the reviewed repository. Consult the repository owner about reuse; dependencies and third-party assets retain their own terms.
