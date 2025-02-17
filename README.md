# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.


Due to [Docusaurus limitations](https://github.com/facebook/docusaurus/issues/7377), when using the above command, only one locale can be supported at a time, and the language dropdown will not work locally. For side-by-side comparison, run the build command (see below), followed by 

```
$ yarn serve
```

to serve the pages on a local server.


To test a specific individual locale, run

```
$ yarn start --locale zh
```

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
