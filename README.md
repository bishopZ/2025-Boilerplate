## Motivation

I release a boilerplate every few years. Boilerplates go a little bit further than the starter projects that each library gives you, yet they land short of being an actual project. They give you a good starting point, if you want this exact mix of technologies. It also suggests good organizational patterns for a scalable code base.

When you create an starter application with create-next-app, vite, or the majority of similar command-line tools, the app you're given is wonderful in many ways, but fails to follow best practices outside of the narrow scope of its base framework. It may come with many best practices for React, but not for CSS, accessibility, SEO, file organization and a host of other concerns that any person wanting to publish a well-made website needs.

If those repos are trying to be the simplest form of a specific technology, this repository aims to be the simplest form of a family of technologies. This repository aims to be an enhanced starter library, providing concise examples of all the features and best practices.

This boilerplate is right for you if:

- You need a flexible Node backend.
- You need user authentication.
- You will have a lot of state data that should persist across the application.


## 2025 stack

### Frontend

- Build Tool: Vite
- Static Typing: TypeScript
- UI Framework: React
- State Management: Redux Toolkit
- React Error Boundary
- Light/Dark Mode Support

### Backend

- Server Runtime: Node.js
- Web Framework: Express
- Template Engine: EJS
- Authentication Library: Passport.js

### Security and Storage

- Local Storage
- Crypto Library: Crypto JS

### UI Components

- Design System: Chakra UI
- Chakra Theme Support

### Linting and Formatting

- Linter: ESLint

The reasoning for each item is included below.


## Getting Started

### Development Setup

1. Clone the repo, `git clone ...`. `cd` into the repo directory.
1. Create a file called `.env` in the root project folder.
1. Add this to the file, `LOCAL_STORAGE_KEY="secret key"` and change the value to whatever you want.
1. Add this to the files, `SESSION_SECRET="another secret key"` and change the value to whatever you want.
2. Run `npm install` in the project root folder.
3. Run `npm run dev` to start the development server.
3. On the Login screen, use `test` for both the email and password.

### Server Setup with Heroku

1. Add the items from your `.env` file to the Config Vars section of your server's Settings page.
2. `heroku login` to login.
2. `heroku init` to create the project.
3. `git push heroku main` to build.

## Reasoning

- Vite

I'm thrilled to have finally moved on from the complexities of Webpack. With Vite, I can focus on building modern web applications without worrying about tedious configuration and optimization. As Webpack's popularity waned, Rollup paved the way for Vite's arrival, making it easier than ever to switch to a more streamlined build tool.

- Typescript, React

TypeScript (TSX) offers numerous benefits over JavaScript (JSX), including better code completion, reduced runtime errors, and improved maintainability. In my experience, writing TSX files is *better* and *faster* than writing JSX file.

- Light/Dark mode support

Implementing light and dark mode support is no longer a nice-to-have, but a table stakes feature for modern web applications. By incorporating this feature from the outset, we ensure that our application continues to support this feature through out it's lifecycle.

- React Error Boundary

Error boundaries are essential in creating robust and fault-tolerant web applications. By including an example of a React error boundary in the boilerplate, developers can use it as a reference to add error boundries to other places as the application grows.

- vite-express, Node, express

Vite's ability to run client and server-side components simultaneously is a game-changer for web development. With vite-express, we can enjoy the flexibility of choosing between Server-Side Rendering (SSR) or Client-Side Rendering (CSR), giving us more freedom in designing our API.

- EJS & SEO

For easy setting of SEO meta tag values, I chose to use EJS templates on Node.js. While this approach might be replaced with SSR implementation if needed, it provides a lightweight solution for basic SEO needs.

- Redux Toolkit

After years of Reddit posts proclaiming the death of Redux, I remain a strong advocate for its benefits. By providing a cleaner syntax for state management, Redux simplifies code complexity and makes it easier to manage global state in complex applications.

- Crypto JS

To ensure data persistence across browser refreshes and sessions, I've integrated CryptoJS for local storage encryption. This approach allows our application to securely store user data while maintaining seamless usability.

- Chakra UI & Pico

I opted for Chakra UI as the design system due to its clean architecture and minimalism. Unlike older libraries like Bootstrap or Material, Chakra UI offers a more modern and versatile design system that's easy to maintain and extend. I used Pico.css on the login page because it's served as plain HTML.

- ESlint

I added a very through custom config file for ESLint. It's battle-tested and aims to speed development, ignore problems that aren't real, and maximize the rules that can be automatically fixed by ESLint.

- Passport.js

By integrating Passport.js as an example login process, we can demonstrate best practices for authentication without compromising security or scalability. Future improvements will focus on implementing additional features like CSRF protection and login attempts limits, which may require a database solution.

## History: A Journey Through Time

As we look back on the evolution of frontend development, it's fascinating to see how technologies have transformed. Let's take a journey through the decades and explore how our industry has grown and adapted.

### The Next.js Era (2021)

Our first boilerplate built with Next.js and TypeScript, marked the beginning of this era. We saw the rise of server-side rendering and static site generation, making it easier to build fast and scalable web applications.

- Next.js: A popular framework for building server-rendered React applications
- TypeScript, React: The combination of static typing and a powerful UI library
- Sass: A modern CSS preprocessor for writing efficient stylesheets
- ESLint: A tool for ensuring code quality and consistency

### The Webpack Revolution (2018)

As Next.js rose to fame, we saw the decline of another era: the Gulp/Grunt vs Webpack debate. In a valiant effort to prove that gulp was better than webpack, our 2018 boilerplate made its last stand.

- Node, express: A powerful combination for building web applications
- gulp: An old favorite, eventually replaced by more efficient tools like Webpack and Rollup
- React, Redux: The classic combo for state management and UI composition
- Bootstrap: A popular CSS framework for styling React components
- ESLint: Ensuring code quality and consistency

### The Backbone Age (2016)

In the mid-2010s, we saw the rise of client-side rendering and single-page applications. Our 2016 boilerplate was built around these principles, using the power of both React and jQuery to create complex UIs.

- Heroku: A cloud platform for hosting and deploying web applications
- webpack: The beginning of a new era in frontend tooling
- Node, express: Building robust web applications with a scalable backend
- React, Redux: State management and UI composition
- Backbone: A classic JavaScript library for building complex UIs
- Bootstrap: Styling React components with CSS flair
- Sass: Efficient styling with a preprocessor
- ESLint: Enforcing code quality and consistency

### The jQuery Era (2013)

Our first boilerplate, built in 2013, was a humble beginning. We used the mighty power of jQuery, underscore, and ejs to create our first web applications.

- Node, express: A powerful combination for building web applications
- jQuery: A legendary JavaScript library for client-side scripting
- underscore: Helper functions for data manipulation and UI composition
- ejs: A simple templating engine for rendering dynamic views
- jade: A templating engine with a more expressive syntax

## License

MIT

