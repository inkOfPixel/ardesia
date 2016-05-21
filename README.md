# [Ardesia](http://inkofpixel.github.io/ardesia/) [![npm version](https://badge.fury.io/js/ardesia.svg)](https://badge.fury.io/js/ardesia)
awesome reusable react components.

## Installation

Use with [npm](http://npmjs.com):

```sh
npm install ardesia --save
```

## Scripts

### Serve examples

To serve the examples locally run:

```sh
npm run examples
```

Then visit `0.0.0.0:9000`

### Deploy website

To deploy the website folder to the gh-pages branch run:

```sh
npm run gh-deploy
```

## API

This API spec is not frozen and may change prior to the first stable release.

### Input

#### `<TextField>`

##### Props

###### `className`
Set custom classes for component.

###### `onChange(event)`
Fired when the value of the TextField changes.

###### `style`
Set custom inline style. This has the highest priority so use it if you need to override default inline styles.

###### `value`
TextField value. Default is the empty string.

#### `<Button>`

##### Props

###### `actionType`
Set button style to match the intent of the triggered action. Accepted values are:
* `"primary"`
* `"success"`
* `"warning"`
* `"danger"`

Defaults to `"primary"`.

###### `onClick(event)`
Fired when the button is clicked.

###### `size`
Set button size. Accepted values are:
* `"extraSmall"`
* `"small"`
* `"normal"`
* `"large"`

Defaults to `"normal"`.

###### `style`
Set custom inline style. This has the highest priority so use it if you need to override default inline styles.

###### `type`
Set button appearance. Accepted values are:
* `"fill"`
* `"hollow"`
* `"link"`

Defaults to `"fill"`.

### Layouts

#### `<StackLayout>`
This layout pile up its children along the axis specified by the `axis` prop.

##### Props

###### `align`
Set the children alignment on the cross-axis. Accepted values are:
* `"start"`
* `"center"`
* `"end"`
* `"stretch"`

Defaults to `"start"`.

###### `axis`
Set the axis along which to pile the children. Accepted values are:
* `"horizontal"`
* `"vertical"`

Defaults to `"vertical"`.

###### `spacing`
Set the spacing between children. The value should be a string that contains the value and a css unit (e.g. `10px`).
