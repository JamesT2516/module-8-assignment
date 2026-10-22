# Front-End Web Development Portfolio — Module 8

## Project Overview

This portfolio was developed as part of the Red & Yellow Front-End Web Development course. It is an ongoing project that I have expanded throughout the course, starting with HTML and CSS before introducing responsive layouts, JavaScript interactions, form validation and Vue.js components.

For Module 8, I converted my existing Module 7 portfolio into a Vue 3 single-page application using Vue Router.

The objective was to introduce proper page navigation while maintaining the design, content and interactive functionality I had developed in earlier modules.

## Technologies Used

- HTML5 and CSS3
- JavaScript
- Vue.js 3
- Vue Router 4
- Vue CLI 5
- Babel and ESLint
- CSS Grid, Flexbox and media queries
- Visual Studio Code
- Chrome DevTools and Vue DevTools
- Git and GitHub

## Vue Router Implementation

I configured Vue Router using `src/router/index.js` and enabled HTML5 History Mode with `createWebHistory()`.

The application uses `router-link` for navigation and `router-view` to display the selected page component.

Unlike my earlier portfolio, where JavaScript controlled which content section was visible, Vue Router now manages navigation based on the browser URL.

This means visitors can navigate between pages without reloading the entire application.

### Application Routes

| Route | Vue Component | Purpose |
|---|---|---|
| `/` | HomeView.vue | About Me and personal introduction |
| `/learning` | LearningView.vue | Learning progress and development skills |
| `/projects` | ProjectsView.vue | Portfolio projects |
| `/contact` | ContactView.vue | Vue contact form |
| `/projects/:slug` | ProjectDetailView.vue | Dynamic project details |
| Unknown URLs | NotFoundView.vue | Custom 404 fallback page |

### Dynamic Routing

I implemented a dynamic route using `/projects/:slug`.

This allows a project detail page to display information based on the URL parameter.

For example, `/projects/vue-contact-form` displays information about my Module 7 Vue.js contact form.

The project information is organised in `src/data/projects.js`, keeping the project data separate from the page component.

### Fallback Route

I created a custom 404 page for URLs that do not match the configured routes.

The page explains that the requested page cannot be found and provides navigation back to the portfolio.

This improves the user experience and prevents unknown URLs from displaying a blank page.

## Project Structure

The main project files are organised as follows:

| File or folder | Purpose |
|---|---|
| `src/App.vue` | Shared portfolio layout, navigation and popup |
| `src/main.js` | Vue application entry point |
| `src/router/index.js` | Vue Router configuration |
| `src/views/` | Page components for the different routes |
| `src/components/` | Reusable contact form and modal components |
| `src/data/projects.js` | Project information for dynamic routing |
| `src/assets/portfolio.css` | Original responsive portfolio styling |
| `src/assets/images/` | Portfolio images |
| `public/index.html` | HTML application entry |
| `README.md` | Project documentation |

## Preserving Earlier Module Functionality

Rather than starting a completely new website, I migrated my existing Module 7 portfolio into the Module 8 Vue CLI project.

I retained the original responsive design, portfolio content, images and interactive elements.

The contact page continues to use reusable Vue components for the form and confirmation modal.

The contact form includes reactive data binding through `v-model`, computed validation properties, conditional error messages and custom component events.

The form validates the name, email address and message before displaying a confirmation modal. It is a coursework demonstration and does not send information to a server.

I also retained the floating Let's Connect popup introduced in Module 5, adapting its behaviour to work with Vue Router navigation.

## Development Challenges and Solutions

### 1. Migrating the Existing Portfolio

My Module 7 project used traditional HTML pages and Vue components loaded through a CDN.

Module 8 introduced Vue Single File Components and Vue Router, which required restructuring the existing project.

I preserved the original Module 7 files and migrated the portfolio into separate Vue views and components.

This allowed me to continue the same portfolio without losing previous functionality.

### 2. Restoring the Contact Popup

After migrating the portfolio, the Let's Connect popup was not displaying when the homepage first loaded.

I identified an issue with how popup initialisation interacted with Vue Router navigation.

After correcting the initialisation, the popup displayed as expected, including its close and contact navigation functionality.

### 3. Correcting an HTML Display Issue

During migration, unwanted favicon-related text appeared above the website header.

I corrected the generated HTML and confirmed that the unwanted text disappeared without changing the existing portfolio design.

### 4. Development Environment Setup

During installation, PowerShell restricted the execution of npm's PowerShell script.

I was able to continue using `npm.cmd` without changing Windows security settings.

I also learned how to use Vue CLI, install dependencies, run a development server and create an optimised production build.

## Testing and Validation

I tested the application throughout development using Visual Studio Code, Chrome DevTools and Vue DevTools.

| Test | Result |
|---|---|
| Navigation between all four main pages | Passed |
| Active navigation highlighting | Passed |
| Dynamic project route | Passed |
| Custom 404 fallback page | Passed |
| Vue contact form validation | Passed |
| Confirmation modal interaction | Passed |
| Let's Connect popup | Passed |
| ESLint validation | No lint errors |
| Production build | Completed successfully |
| Chrome JavaScript Console | No errors or warnings |
| Vue DevTools component inspection | Passed |
| Mobile layout — 375px | Passed |
| Tablet layout — 768px | Passed |
| Desktop layout — 1280px | Passed |

Vue DevTools successfully recognised the main application component, RouterLink components, RouterView and the currently displayed page component.

I also confirmed that Vue Router correctly tracked the current route.

The production build was generated successfully using `npm.cmd run build`, creating an optimised `dist` directory.

## Why Routing Matters in Single-Page Applications

Routing is important because it allows a single-page application to behave like a multi-page website without requiring a complete page reload for each navigation action.

Vue Router provides a structured way to organise page components, manage URLs and support browser navigation.

It also makes the application easier to expand. Instead of adding more JavaScript conditions to show and hide different sections, I can create new Vue views and register them in the router configuration.

Dynamic routes are especially useful when multiple pages follow the same layout but display different information.

Implementing Vue Router helped me understand how modern front-end applications organise navigation, reusable components and application structure.

## Running the Project Locally

The project requires Node.js and npm.

Open the project folder in Visual Studio Code, then run the following commands:

**Install dependencies:** `npm install`

**Start development server:** `npm run serve`

**Run ESLint:** `npm run lint -- --no-fix`

**Create production build:** `npm run build`

On my Windows PowerShell setup, I used `npm.cmd` instead of `npm` because of the system's script execution restrictions.

The development server runs on localhost, and the production build is generated in the `dist` folder.

## Conclusion

Module 8 allowed me to bring together the skills developed throughout the course.

I progressed from building a portfolio using HTML, CSS and JavaScript to organising the same project as a Vue application with reusable components, reactive form validation, dynamic routing and production build tools.

The main lesson was understanding how proper application structure improves maintainability, navigation and the overall development process.

The finished Module 8 portfolio demonstrates the progression of my front-end development skills across the course.
