# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Advice generator app solution](#frontend-mentor---advice-generator-app-solution)
  - [Table of contents](#table-of-contents)
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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Advice generator dark mode](https://user-images.githubusercontent.com/85683069/171451263-1da8a5de-9482-4db7-980f-028c5ef24dbd.png)
![Advice generator light mode](https://user-images.githubusercontent.com/85683069/171451256-c71219c9-50c1-4481-99a6-261ec201617d.png)

### Links

- Solution URL: [Github](https://github.com/lauriselvijs/advice-generator-app)
- Live Site URL: [Netlify](https://1960f7-advice-generator-app.netlify.app/)

## My process

### Built with

- HTML5 markup
- [SCSS](https://sass-lang.com/) - advanced variant of CSS
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language for JS
- [React Query](https://react-query.tanstack.com/) - Fetch, cache and update data in your React and React Native applications all without touching any "global state".

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

Using css variables to implement dark theme

```css
:root {
  --primary-base-color: var(
    --imported-primary-base-color,
    #{$default-primary-base-color}
  );
  --primary-light-color: var(
    --imported-primary-light-color,
    #{$default-primary-light-color}
  );
  --secondary-base-color: var(
    --imported-secondary-base-color,
    #{$default-secondary-base-color}
  );
  --secondary-dark-color: var(
    --imported-secondary-dark-color,
    #{$default-secondary-dark-color}
  );
  --secondary-light-color: var(
    --imported-secondary-light-color,
    #{$default-secondary-light-color}
  );

  --font-family: var(--imported-font-family, #{$font-family});
  --font-weight: var(--imported-font-weigh, #{$font-weight});

  --font-size-large: var(--imported-font-size-large, #{$font-size-large});
  --font-size-medium: var(--imported-font-size-medium, #{$font-size-medium});
  --font-size-small: var(--imported-font-size-small, #{$font-size-small});

  --footer-primary-color: var(
    --imported-footer-primary-color,
    #{$footer-primary-color}
  );
}

body {
  margin: 0;
  padding: 0px;

  font-family: var(--font-family);
  font-weight: var(--font-weight);
  font-size: var(--font-size-large);

  color: var(--primary-light-color);

  background-color: var(--secondary-dark-color);
}

.light-theme {
  --primary-base-color: var(
    --imported-light-theme-primary-base-color,
    #{invert($default-primary-base-color)}
  );
  --primary-light-color: var(
    --imported-light-theme-primary-light-color,
    #{invert($default-primary-light-color)}
  );
  --secondary-base-color: var(
    --imported-light-theme-secondary-base-color,
    #{invert($default-secondary-base-color)}
  );
  --secondary-light-color: var(
    --imported-light-theme-secondary-light-color,
    #{invert($default-secondary-light-color)}
  );
  --secondary-dark-color: var(
    --imported-light-theme-secondary-dark-color,
    #{invert($default-secondary-dark-color)}
  );
}

:export {
  lightTheme: light-theme;
}
```

Using React Query to implement fetching from API

```js
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  </React.StrictMode>
);

export const useAdviceDataQuery = () =>
  useQuery<AxiosResponse<IAdvice, any>, AxiosError>(
    ADVICE_KEY,
    fetchAdvice,
    ADVICE_QUERY_SETTINGS
  );

export const ADVICE_KEY = "advice";

export const ADVICE_QUERY_SETTINGS = {
  refetchOnWindowFocus: false,
  // enabled: false, // if no need to fetch data initially
};

export const fetchAdvice = async () => {
  const data = await axios.get<IAdvice>(ADVICE_FETCH_URL);
  return data;
};

const { data, isLoading, error } = useAdviceDataQuery();

```

### Continued development

- Using RTK Query for global state implementation to fetch data from external API

### Useful resources

- [TypeScript Docs](https://www.typescriptlang.org/docs/) - Docs to better understand typescript
- [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - JS docs
- [w3schools CSS docs](https://www.w3schools.com/css/default.asp) - Great documentation to understand CSS
- [w3schools HTML docs](https://www.w3schools.com/html/default.asp) - Great documentation to understand HTML
- [ReactJS](https://reactjs.org/docs/getting-started.html) - Great documentation to understand ReactJS
- [React Query](https://react-query.tanstack.com/overview) - Great documentation to understand React Query

## Author

- Website - [Lauris](https://portfolio-rouge-seven.vercel.app/)
- Frontend Mentor - [lauriselvijs](https://www.frontendmentor.io/profile/lauriselvijs)
