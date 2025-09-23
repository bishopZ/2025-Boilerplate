A local-first web app boilerplate for 2025

## Motivation

I release a boilerplate every few years. Boilerplates go a little bit further than the starter projects that each library gives you, yet they land short of being an actual project. They give you a good starting point, if you want this exact mix of technologies. It also suggests good organizational patterns for a scalable code base.

When you create a starter application with create-next-app, vite, or the majority of similar command-line tools, the app you're given is wonderful in many ways, but fails to follow best practices outside of the narrow scope of its base framework. It may come with many best practices for React, but not for CSS, accessibility, SEO, file organization and a host of other concerns that any person wanting to publish a well-made website needs.

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

### Backend

- Server Runtime: Node.js
- Web Framework: Express
- Template Engine: EJS
- Authentication Library: Passport.js

### Security and Storage

- Local Storage
- Crypto Library: Crypto JS

### Linting and Formatting

- Linter: ESLint

The reasoning for each item is included below.


## Getting Started

### Development Setup

1. Clone the repo, `git clone git@github.com:bishopZ/2025-Boilerplate.git`. `cd 2025-Boilerplate` into the repo directory.
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

### Vite

I'm thrilled to have finally moved on from the complexities of Webpack. With Vite, I can focus on building modern web applications without worrying about tedious configuration and optimization. As Webpack's popularity waned, Rollup paved the way for Vite's arrival, making it easier than ever to switch to a more streamlined build tool.

### Typescript, React

TypeScript (TSX) offers numerous benefits over JavaScript (JSX), including better code completion, reduced runtime errors, and improved maintainability. In my experience, writing TSX files is *better* and *faster* than writing JSX file.

### React Error Boundary

Error boundaries are essential in creating robust and fault-tolerant web applications. By including an example of a React error boundary in the boilerplate, developers can use it as a reference to add error boundries to other places as the application grows.

### vite-express, Node, express

Vite's ability to run client and server-side components simultaneously is a game-changer for web development. With vite-express, we can enjoy the flexibility of choosing between Server-Side Rendering (SSR) or Client-Side Rendering (CSR), giving us more freedom in designing our API.

### EJS & SEO

For easy setting of SEO meta tag values, I chose to use EJS templates on Node.js. While this approach might be replaced with SSR implementation if needed, it provides a lightweight solution for basic SEO needs.

### Redux Toolkit

After years of Reddit posts proclaiming the death of Redux, I remain a strong advocate for its benefits. By providing a cleaner syntax for state management, Redux simplifies code complexity and makes it easier to manage global state in complex applications.

### Crypto JS

To ensure data persistence across browser refreshes and sessions, I've integrated CryptoJS for local storage encryption. This approach allows our application to securely store user data while maintaining seamless usability.

### Passport.js

By integrating Passport.js as an example login process, we can demonstrate best practices for authentication without compromising security or scalability. Future improvements will focus on implementing additional features like CSRF protection and login attempts limits, which may require a database solution.

### ESlint

I added a very through custom config file for ESLint. It's battle-tested and aims to speed development, ignore problems that aren't real, and maximize the rules that can be automatically fixed by ESLint.


## Choosing a Design System

In today's fast-paced web development landscape, Design Systems have become an essential component of any project. By leveraging a well-crafted design system, developers can ensure consistency, efficiency, and scalability in their application.

While there are many excellent design systems available, including one in our boilerplate seemed like overkill. Different applications require distinct design approaches that may not align with the one-size-fits-all solution of an out-of-the-box boilerplate.

Administrative interfaces may benefit from [Cloudscape's](https://cloudscape.design/) intuitive navigation and layout features. While Marketing sites might be better suited to Github's [Primer](https://primer.style/) design system, with its emphasis on eye-catching visuals and responsive design.

When selecting a design system consider your project's goals and determine which design systems align best with your requirements. Choose a design system with a strong, active community and an extensive ecosystem of supporting tools, libraries, and documentation. Opt for a system with thorough documentation that covers every aspect, including setup, customization, and best practices. Then  select the design system that best suits your development team's experience level and skillset.

If you're uncertain about which design system to implement, refer to our example branch `with-chakra-ui`, where [Chakra UI](https://chakra-ui.com/) is used as a case study.

## License

MIT

