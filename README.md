# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [source code](https://github.com/codexshell/insure-landing-page)
- Live Site URL: [Add live URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [tailwindcss](https://tailwindcss.com/) - A CSS framework
- [vite](https://vitejs.dev/) - A Next Generation Frontend Tooling

### What I learned

- Adding classes conditionally in `react`. There are various ways to do this, but my preferred was the method below. As you can see it uses the logical operator. This is much cleaner and concise

```js
const className = ["class1", "class2", condition && "class3"];
```

### Continued development

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [commitlint](https://commitlint.js.org/)

### Useful resources

- [Add CSS Classes Conditionally in React](https://codefrontend.com/set-class-conditionally-react/) - This helped me ina adding classes conditionally in react. I really liked this pattern and will use it going forward.
- [Adding custom styles in tailwindcss using arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) - This allowed me to use css pseudo-classes with tailwind

## Author

- Website - [Silvanos Eric](https://codexshell.github.io/)
- Frontend Mentor - [@codexshell](https://www.frontendmentor.io/profile/codexshell)
- Twitter - [@codexshell](https://twitter.com/codexshell)
