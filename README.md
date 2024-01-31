# HoundDogAI Toy API Consuming App

## Libraries Chosen and Rationale

1. React.js
React.js is a JavaScript library for building user interfaces, particularly single-page applications (SPAs) where UI updates are frequent. It has been chosen for its component-based architecture and reusable UI component philosophy.

2. Next.js
Next.js is a React framework for building server-side rendered web applications with easy routing, integration with TypeScript, and other features that assist with SEO and page rendering speed.

3. Tailwind CSS
Tailwind CSS is a CSS framework that provides utility classes allowing styling to be integrated directly in the JSX. It allows for rapid development and direct customization.

4. Radix UI
Radix UI is a library for building accessible UI components, providing simple components for building with React. Radix facilitates having a consistent and inclusive user interface.

5. SWR
SWR (pronounced "swear"), is a React Hooks library used for data fetching. It is simple and efficient in handling data fetching in React applications. SWR focuses on fast and consistent data loading.

## Application Requirement

[x] integrate the application with HoundDog's REST API
[x] call three API endpoints: GET, POST, and DELETE
[x] use Swagger UI for additional documentation and to test fetches
[x] use TypeScript, Next.js 14 (with the new app router), use SWR or TanStack Query
[x] use a UI library of your choice
[x] use Docstrings and comments
[x] create a README that has good documentation
[x] include documentation on how to run the application locally

## Assumptions

1. The api will provide some initial data to interact with.
2. The main purpose of the application is so that the user can interact with the data.
3. The user can retrieve the current data and have it displayed on the page.
4. The user can delete data, and have the revised data displayed on the page.
5. The user can add data in a specific format and have the revised data displayed on the page.
6. The user will have intuitive UI cues, such as buttons and visual elements, to help the them understand how to interact effectively with the application.


## Approach

1. Use version control with a develop branch as well as feature branches to document the development process
2. Build small components separately to test, for example, test the api fetches using Vanilla JS, then integrate SWR in Next.js, then test SWR with a known api, and finally build the api fetches specific to this project.
3. Use State to provide a single source of truth, use the spread operator to avoid mutation issues, and use functional components that have clear jobs. API fetches are asynchronous operations, so async-await will be my method to deal with promises.

## How to Run the Application at localhost:3000

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/), and npm (Node Package Manager) installed on your machine.

### Steps

1. Clone the Repository:

```bash
git clone https://github.com/gillian-trethewey/gillian-trethewey-hounddogai.git
```

2. Navigate to the Project Directory:

```bash
cd gillian-trethwey-hounddogai
```

3. Install Dependencies:

```bash
npm install
```

4. Run the Development Server:

```bash
npm run dev
```

This command will start the development server at `localhost:3000`.

5. Access the Application:
    Open your web browser and navigate to https://localhost:3000.

### Additional Commands

1. Build for Production:

```bash
npm run build
```

2. Start the Production Server:

```bash
npm start
```

## Additional Research: The Advantages of Next.js

### Next.js is built on React

Next.js is a framework built on React, which means it has all the advantages of React but is meant for production. Next.js and React both use reusable components, use a Virtual DOM, and only update portions of the rendering as needed, rather than having complete re-renders. Both also assist with having a single source of truth by using State variables.

### Next.js uses SSR rather than CSR

While React uses client-side rendering, which means the end-user loads all of the elements on a page. React needs to parse through all the code, which can deteriorate performance. 

In contrast, Next uses server-side rendering (SSR), which means the server reads the code and then tells the browser what to display. SSR improves performance.

### Next.js has flexibility in data-fetching

Next.js has the flexibility to use CSR, SSR, or Static Site Generation (SSG) data fetching depending on the application's needs. For example, if you have an eCommerce site, although speed is important, more important is that the stock levels of items are accurate to avoid overselling. Data fetching would be better suited in this case to using the SSR model to ensure accuracy.

### Next.js integrates TypeScript

Although JavaScript has flexibility with its data typing, it can cause issues as well. To eliminate these issues, TypeScript constrains the types of data so that the code is consistent and results in more predictable behaviours. Removing complexity is important as applications scale up.

Next.js comes with TypeScript already integrated.

### Next.js has image optimization

Google's core web vitals require images to be optimized for improved performance. Next.js optimizes images through using modern image formats like WebP, serving correctly sized images for each device, preventing Cumulative Layout Shift (CLS) which provides visual stability, and having faster page loads by loading images when they enter the viewport.

### Next.js uses code splitting

Pages load quickly using code splitting. The code needed to run a page is organized and split with the directory of each page. This means the end user will only need to download the amount of code that's needed for the page they are viewing.

### Next.js does a better job with SEO than React

Next.js uses a system of pages and folders that direct Google how to crawl your site. Components are also more understandable to search engines. In contrast, React is difficult for search engines to understand and often needs additional tools to enhance SEO.