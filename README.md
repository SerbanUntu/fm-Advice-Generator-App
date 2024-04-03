# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users are able to:

- ✔️ View the optimal layout for the app depending on their device's screen size
- ✔️ See hover states for all interactive elements on the page
- ✔️ Generate a new piece of advice by clicking the dice icon

### Screenshot

![Screenshot](/public/images/screenshot.png)

### Links

- [Solution]()
- [Live Site](https://fm-advice-generator-app-tau.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library
- [Nuxt.js](https://nuxt.com/) - Vue framework
- [Tailwind](https://tailwindcss.com/) - For styles

### What I learned

I learned how to make API calls in Nuxt from external APIs:
```js
async function getQuote() {
  try {
    const timestamp = new Date().getTime();
    const url = `https://api.adviceslip.com/advice?_=${timestamp}`; // Prevent caching
    const response = await fetch(url);
    const data = await response.json();
    advice.value = data.slip.advice;
    id.value = data.slip.id;
  } catch (error) {
    console.error('Error fetching advice:', error);
  }
}
```

### Useful resources

- [Vue docs](https://vuejs.org/guide/introduction)
- [Cool Tailwind video](https://www.youtube.com/watch?v=pfaSUYaSgRo)
- The Mozilla references for [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) are always useful.

## Author

- LeetCode - [@SerbanUntu](https://leetcode.com/SerbanUntu/)
- Github - [@SerbanUntu](https://github.com/SerbanUntu)
- Frontend Mentor - [@SerbanUntu](https://www.frontendmentor.io/profile/SerbanUntu)