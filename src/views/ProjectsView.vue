<template>
<section
            id="projects"
            class="tab-panel active-panel">

            <div class="content-card">

                <div class="section-heading reveal">

                    <p class="section-label">
                        Learning by Building
                    </p>

                    <h2>My Projects</h2>

                    <p class="section-intro">
                        This portfolio is an ongoing development
                        project that changes as I progress through
                        each module of the course.
                    </p>

                </div>


                <!-- Project 01 -->

                <article class="project-card reveal">

                    <div class="project-number">
                        01
                    </div>

                    <div>

                        <h3>Front-End Portfolio Website</h3>

                        <p>
                            The portfolio began as a semantic HTML
                            page and has developed through each stage
                            of my front-end learning.
                        </p>

                        <p>
                            I have progressively added CSS styling,
                            responsive layouts, Flexbox, CSS Grid,
                            interactive states, and JavaScript
                            behaviour.
                        </p>

                    <router-link class="project-link" to="/projects/portfolio-website">Project details</router-link>
</div>
</article>


                <!-- Project 02 -->

                <article class="project-card reveal">

                    <div class="project-number">
                        02
                    </div>

                    <div>

                        <h3>Module 5 JavaScript Interaction</h3>

                        <p>
                            In Module 5, I added my first JavaScript
                            interaction to the portfolio.
                        </p>

                        <p>
                            The floating Let's Connect message
                            demonstrates DOM selection, functions,
                            event listeners, and CSS class changes.
                        </p>

                    <router-link class="project-link" to="/projects/javascript-interaction">Project details</router-link>
</div>
</article>


                <!-- Project 03 -->

                <article class="project-card reveal">

                    <div class="project-number">
                        03
                    </div>

                    <div>

                        <h3>Module 6 Contact Form</h3>

                        <p>
                            In Module 6, I developed a dedicated
                            contact page with JavaScript-powered
                            real-time validation.
                        </p>

                        <p>
                            The form checked a visitor's name,
                            email, and message while they typed.
                            Once every field was valid, JavaScript
                            prevented normal form submission and
                            displayed the information in a
                            confirmation modal.
                        </p>

                    <router-link class="project-link" to="/projects/javascript-contact-form">Project details</router-link>
</div>
</article>


                <!-- Project 04 -->

                <article class="project-card reveal">

                    <div class="project-number">
                        04
                    </div>

                    <div>

                        <h3>Module 7 Vue.js Contact Form</h3>

                        <p>
                            For Assignment 7, I upgraded my
                            JavaScript contact form to use Vue 3
                            and reusable components.
                        </p>

                        <p>
                            The form uses v-model to manage reactive
                            input values, computed properties for
                            real-time validation, and v-if to
                            display error messages.
                        </p>

                        <p>
                            Props allow the form labels and
                            placeholders to be customised.
                            Validated information is passed to
                            a separate confirmation modal using
                            component events.
                        </p>

                        <router-link to="/contact" class="project-link">
                            View Vue Contact Form
                        </router-link>

                    <router-link class="project-link" to="/projects/vue-contact-form">Project details</router-link>
</div>
</article>


                <!-- Project 05 -->

                <article class="project-card reveal">

                    <div class="project-number">
                        05
                    </div>

                    <div>

                        <h3>Continuous Development</h3>

                        <p>
                            I am treating the portfolio as a
                            long-term project rather than a
                            finished page.
                        </p>

                        <p>
                            Each module gives me an opportunity
                            to review existing code, improve
                            the user experience, and introduce
                            new techniques while keeping previous
                            functionality working correctly.
                        </p>

                    <router-link class="project-link" to="/projects/continuous-development">Project details</router-link>
</div>
</article>
<article class="project-card reveal">
  <div class="project-number">06</div>
  <div>
    <h3>Module 8 Vue Router Portfolio</h3>
    <p>I converted my ongoing portfolio into a Vue 3 application with routed page components, dynamic project details, lazy loading and a 404 fallback.</p>
    <router-link class="project-link" to="/projects/vue-router-navigation">Project details</router-link>
  </div>
</article>


            </div>

        </section>
</template>

<script>
export default { name: 'ProjectsView' }
</script>
