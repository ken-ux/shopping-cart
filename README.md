# shopping-cart

This is a SPA of a mock shop website built with React. The main goals of this project were to try simple unit testing in a React environment, fetching data and error-handling requests, and practicing routing with React Router.

Live version of this project can be found here: [ken-ux.github.io/shopping-cart/](ken-ux.github.io/shopping-cart/)

## Lessons Learned

- Scoping styles to components with CSS modules. This helped eliminate pollution of the global namespace when writing identical class names across components.
- Implementing nested routes and dynamic segments using React Router.
- Improving user experience by setting a "load" message while data is being fetched.
- Writing tests with React Testing Library.
- An early issue I ran into was running tests on components that contain React Router's `Link` component. When ran on components in isolation, an error would occur. `Link` always has to be used in inside of a router, so testing a component without wrapping it in one would always throw an error. Therefore, mocking a router by wrapping the component in React Router's `MemoryRouter` component in a test was a simple fix.
- I was mindful of avoiding "requests waterfalls" by resolving promises in the topmost components. For example, rendering my `ShopItem` component would involve fetching the data for each item and displaying a loading message before they're rendered. A page of six `ShopItem` components would therefore show **six** individual loading messages. After refactoring, the data was instead fetched all at once in its parent component, `Shop`, then distributed to its child components. This ensured only **one** loading message needed to be shown when `Shop` was fetching data.

## Credits

- Fake Store API for fetching product information: [https://fakestoreapi.com/](https://fakestoreapi.com/)
- Homepage photo by Andrey Matveev: [https://www.pexels.com/photo/studio-shot-of-various-modern-ram-sticks-and-cpus-6373758/](https://www.pexels.com/photo/studio-shot-of-various-modern-ram-sticks-and-cpus-6373758/)
