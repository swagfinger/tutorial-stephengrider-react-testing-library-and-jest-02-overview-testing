# React Testing Library

## ARIA in HTML

Here you can see a table of HTML elements with their default and desired roles.
https://www.w3.org/TR/html-aria/#docconformance

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
