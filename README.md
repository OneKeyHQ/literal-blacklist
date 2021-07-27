# eslint-plugin-onekey-literal-plugin

OneKey Literal Plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-onekey-literal-blacklist`:

```
$ npm install eslint-plugin-onekey-literal-blacklist --save-dev
```


## Usage

Add `onekey-literal-blacklist` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "onekey-literal-blacklist"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "onekey-literal-blacklist/literal-blacklist": 2
    }
}
```

## Supported Rules

* Fill in provided rules here
