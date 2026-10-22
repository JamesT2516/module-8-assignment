<template>
<section
            id="learning"
            class="tab-panel active-panel">

            <div class="content-card">

                <div class="section-heading reveal">

                    <p class="section-label">
                        Module 8
                    </p>

                    <h2>What I Am Learning</h2>

                    <p class="section-intro">My learning has progressed from HTML and CSS through JavaScript and Vue.js. In Module 8, I am using Vue Router to turn this same portfolio into a multi-page experience.</p>

                </div>


                <div class="learning-grid">

                    <!-- DOM Manipulation -->

                    <article class="learning-card reveal">

                        <h3>DOM Manipulation</h3>

                        <p>
                            I have learned how JavaScript works with
                            the Document Object Model to find elements
                            and update webpage content without
                            reloading the page.
                        </p>

                        <ul>
                            <li>querySelector and querySelectorAll</li>
                            <li>Changing text and attributes</li>
                            <li>Adding and removing elements</li>
                            <li>Working with classList</li>
                        </ul>

                    </article>


                    <!-- Events and User Interaction -->

                    <article class="learning-card reveal">

                        <h3>Events and User Interaction</h3>

                        <p>
                            I have learned how JavaScript event
                            listeners allow a webpage to respond
                            to actions such as clicking, typing,
                            submitting forms, and pressing keys.
                        </p>

                        <ul>
                            <li>addEventListener</li>
                            <li>Click and input events</li>
                            <li>Submit and keydown events</li>
                            <li>Event bubbling and delegation</li>
                        </ul>

                    </article>


                    <!-- Validation and Feedback -->

                    <article class="learning-card reveal">

                        <h3>Validation and Feedback</h3>

                        <p>
                            In Module 6, I developed a JavaScript
                            contact form that validated user input
                            as it was entered and provided immediate
                            visual feedback.
                        </p>

                        <ul>
                            <li>Checking user input</li>
                            <li>Conditional validation</li>
                            <li>Real-time error messages</li>
                            <li>Confirmation modal interaction</li>
                        </ul>

                    </article>


                    <!-- Asynchronous JavaScript -->

                    <article class="learning-card reveal">

                        <h3>Asynchronous JavaScript</h3>

                        <p>
                            Module 6 introduced me to how JavaScript
                            can manage tasks that take time without
                            preventing the rest of a webpage from
                            continuing to work.
                        </p>

                        <ul>
                            <li>Callbacks</li>
                            <li>Promises</li>
                            <li>Async and await</li>
                            <li>Fetching data from APIs</li>
                        </ul>

                    </article>


                    <!-- Debugging and Modern Tools -->

                    <article class="learning-card reveal">

                        <h3>Debugging and Modern Tools</h3>

                        <p>
                            I am using browser developer tools to
                            inspect and debug JavaScript, identify
                            errors, and understand what is happening
                            while my code runs.
                        </p>

                        <ul>
                            <li>Console testing</li>
                            <li>Breakpoints</li>
                            <li>Watching variable values</li>
                            <li>Network request inspection</li>
                            <li>JavaScript modules and bundlers</li>
                        </ul>

                    </article>


                    <!-- Vue.js Foundations -->

                    <article class="learning-card reveal">

                        <h3>Vue.js Foundations</h3>

                        <p>
                            In Module 7, I am applying Vue 3 to
                            create dynamic and interactive user
                            interfaces using reusable components
                            and reactive data.
                        </p>

                        <ul>
                            <li>Vue application and components</li>
                            <li>Reactive data and v-model</li>
                            <li>Computed properties and validation</li>
                            <li>Conditional rendering using v-if</li>
                            <li>Component props and custom events</li>
                        </ul>

                    </article>


                    <!-- Vue Contact Form Development -->

                    <article class="learning-card reveal">

                        <h3>Building Reusable Vue Components</h3>

                        <p>
                            I am using the component-based approach
                            to separate the contact form, confirmation
                            modal, and main Vue application into
                            individual JavaScript files.
                        </p>

                        <ul>
                            <li>Reusable contact form component</li>
                            <li>Customisable form labels and placeholders</li>
                            <li>Real-time reactive validation</li>
                            <li>Separate confirmation modal component</li>
                            <li>Communication between components</li>
                        </ul>

                    </article>


                    <!-- Testing and Accessibility -->

                    <article class="learning-card reveal">

                        <h3>Responsive Design and Accessibility</h3>

                        <p>
                            I am continuing to improve how the
                            portfolio behaves across different
                            screen sizes while keeping interactive
                            features accessible and easy to use.
                        </p>

                        <ul>
                            <li>Mobile-first responsive layouts</li>
                            <li>Accessible form labels</li>
                            <li>Validation feedback using ARIA</li>
                            <li>Keyboard-accessible modal controls</li>
                            <li>Browser testing and debugging</li>
                        </ul>

                    </article>

<article class="learning-card reveal">
  <h3>Vue Router and Production</h3>
  <p>Module 8 introduces routed page components, navigation, dynamic routes, lazy loading and production builds.</p>
  <ul>
    <li>router-link and router-view</li>
    <li>Dynamic route parameters</li>
    <li>404 fallback routes</li>
    <li>Route-level code splitting</li>
    <li>Development and production testing</li>
  </ul>
</article>


                </div>

            </div>

        </section>
</template>

<script>
export default { name: 'LearningView' }
</script>
