# React Testing Library

## ARIA in HTML

Here you can see a table of HTML elements with their default and desired roles.
https://www.w3.org/TR/html-aria/#docconformance

## print out testing screen

```js
// print out test
screen.debug();
```

## get help with a particular element?

- run this helper function inside a test, it will give you a url which represents the code you are testing

```
screen.logTestingPlaygroundURL();
```

- to get suggestion on something that doesnt have dimensions, add a style with thick border

```html
<tr style="border:10px solid red; display:block"></tr>
```

### Jest

matchers - https://jestjs.io/docs/expect

### React Testing Library

query - https://testing-library.com/docs/queries/byrole
matchers - https://github.com/testing-library/jest-dom#custom-matchers

## query function - when aria-roles dont work

1. fallback #1: use data-testid
2. fallback #2: use container.querySelector()

```js
// container is a div element wrapping component that is rendered - which allows querySelector
  const { container } = render(<somecomponent>)
```
