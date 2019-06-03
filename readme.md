# Alex

> Catch insensitive, inconsiderate writing.

[![Build Status][travis-badge]][travis]
[![Coverage Status][codecov-badge]][codecov]

Whether your own or someone else’s writing, **alex** helps you find gender
favouring, polarising, race related, religion inconsiderate, or other
**unequal** phrasing in text.

For example, when `We’ve confirmed his identity` is given to **alex**,
it will warn you and suggest using `their` instead of `his`.

## Why

- [x] Helps to get better at considerate writing
- [x] Catches many possible offenses
- [x] Suggests helpful alternatives
- [x] Reads plain-text, HTML, and markdown as input
- [x] Stylish

## Integrations

- NPM/CLI — [`get-alex/alex`](https://github.com/get-alex/alex)
- Atom — [`get-alex/atom-linter-alex`](https://github.com/get-alex/atom-linter-alex)
- Sublime — [`sindresorhus/SublimeLinter-contrib-alex`](https://github.com/sindresorhus/SublimeLinter-contrib-alex)
- Visual Studio Code — [`shinnn/vscode-alex`](https://github.com/shinnn/vscode-alex)
- Gulp — [`dustinspecker/gulp-alex`](https://github.com/dustinspecker/gulp-alex)
- Slack — [`keoghpe/alex-slack`](https://github.com/keoghpe/alex-slack)
- Ember — [`yohanmishkin/ember-cli-alex`](https://github.com/yohanmishkin/ember-cli-alex)
- Probot — [`swinton/linter-alex`](https://github.com/swinton/linter-alex)
- Vim — [`w0rp/ale`](https://github.com/w0rp/ale)

## Support

**alex** checks for many patterns of English language, and generates warnings for:

- Gendered work-titles, for example warning about `garbageman` and suggesting
  `garbage collector` instead
- Gendered proverbs, such as warning about `like a man` and suggesting
  `bravely` instead, or suggesting `courteous` for `ladylike`.
- Blunt phrases, such as warning about `cripple` and suggesting
  `person with a limp` instead
- Intolerant phrasing, such as warning about using `master` and `slave`
  together, and suggesting `primary` and `replica` instead
- Profanities, the least of which being `butt`

See [**retext-equality**][equality] and [**retext-profanities**][profanities]
for all checked rules.

**alex** ignores words meant literally, so `“he”`, `He — ...`, and [the
like][literals] are not warned about

## License

[MIT][license] © [Bu Kinoshita][author]

<!-- Definitions. -->

[travis-badge]: https://img.shields.io/travis/bukinoshita/alex-api.svg
[travis]: https://travis-ci.org/bukinoshita/alex-api
[codecov-badge]: https://img.shields.io/codecov/c/github/bukinoshita/alex-api.svg
[codecov]: https://codecov.io/github/bukinoshita/alex-api
[license]: license
[author]: https://bukinoshita.io
[literals]: https://github.com/syntax-tree/nlcst-is-literal#isliteralparent-index
[profanities]: https://github.com/retextjs/retext-profanities/blob/master/rules.md
[equality]: https://github.com/retextjs/retext-equality/blob/master/rules.md
