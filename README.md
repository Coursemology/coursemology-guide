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

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
The pages can be viewed locally using the command:

```
$ yarn serve
```

#### Viewing and Editing Translations

To view a translated version of the docs, run the above command with the `--locale` flag containing the language you wish to view (e.g. `zh`)

To create a new language translation, run
```
LOCALE=zh yarn write-translations
```

Translatable text in React components must be contained within `<Translate/>` elements for Docusaurus to be able to find and match them with translated versions correctly. Markdown files (`*.md` and `*.mdx`) files have to be translated as a whole. 

The above command will copy most of the default (English) text, they should be manually replaced with the properly translated versions.

First, copy the files to the proper translation directory
```
rsync -avm  --include='{*.md,*.mdx}' --exclude='!{*.md,*.mdx}' --delete docs/* i18n/zh/docusaurus-plugin-content-docs/current
```

then replace the contents of each page with the appropriate translated versions.

Due to [Docusaurus limitations](https://github.com/facebook/docusaurus/issues/7377), when using `yarn start`, only one locale can be supported at a time, and the language dropdown will not work locally. To test the languages side-by-side, run `yarn build` followed by `yarn serve`.

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
