# Construct 3 Framework

The Construct 3 framework is a set of JavaScript/TypeScript utilities and a CLI tool to automate the process of developing addons for the [Construct 3](https://construct.net) game engine, using typings with a custom parser to build all the assets and configuration files required by the engine.

Features:
- **Highly-typed**: Code addons using TypeScript.
- **ACEs Decorators**: All the ACE config is done in one single place, inside the same code.
- **Customizable Settings**: The framework can be customized as needed.
- **File scanning**: TypeScript definitions and File dependencies will be automatically added.
- **Multi-language support**: With a dot-notation/Laravel-inspired translation system for all strings.

## Usage

Build your project using:

```
npm run build
```

Run a development server using:

```
npm run dev
```

Generate documentation using:

```
npm run docs
```

For more information use:

```
npx alfred
```

Or check the [framework core repository](https://github.com/MasterPose/c3-framework-core).


## Credits

Thanks to [Skymen](https://github.com/skymen) and the [ConstructFund](https://github.com/ConstructFund) for the efforts on making the [C3IDE2](https://github.com/ConstructFund/c3ide2-framework), project that originated this framework.