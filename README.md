# eslint-plugin-onekey-literal-blacklist

OneKey Literal Plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@onekeyhq/eslint-plugin-literal-blacklist`:

```
$ npm install @onekeyhq/eslint-plugin-literal-blacklist --save-dev
```


## Usage

Add `literal-blacklist` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@onekeyhq/literal-blacklist"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@onekeyhq/literal-blacklist/literal-blacklist": 2
    }
}
```

or

```json
{
    "extends": [
        "plugin:@onekeyhq/literal-blacklist/recommended"
    ]
}
```

## Supported Rules

* Fill in provided rules here
