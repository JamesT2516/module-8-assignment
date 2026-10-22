<template>
<section
            id="about"
            class="tab-panel active-panel">

            <div class="content-card">

                <div class="section-heading reveal">

                    <p class="section-label">
                        My Journey
                    </p>

                    <h2>About Me</h2>

                    <p class="section-intro">
                        I am building my front-end development skills
                        one module at a time and using this portfolio
                        to apply what I learn in a practical way.
                    </p>

                </div>


                <div class="about-layout">

                    <div class="about-copy">

                        <div class="reveal">

                            <h3>Learning Through Practice</h3>

                            <p>
                                Hi, I'm James Taljaard. I'm currently
                                completing a Front-end Web Development
                                course and developing this portfolio
                                alongside the course.
                            </p>

                            <p>
                                I started by learning how semantic HTML
                                gives a webpage structure and meaning.
                                I then introduced CSS to work with
                                colour, typography, spacing, layout,
                                and the overall appearance of a site.
                            </p>

                        </div>


                        <div class="reveal">

                            <h3>From Static Pages to Interaction</h3>

                            <p>
                                As the course progressed, I moved into
                                responsive design using a mobile-first
                                approach, media queries, Flexbox, and
                                CSS Grid.
                            </p>

                            <p>
                                JavaScript has added another layer to
                                that learning. Instead of only
                                designing how a page looks, I am
                                learning how a webpage can listen for
                                user actions, make decisions, update
                                content, and provide useful feedback.
                            </p>

                        </div>


                        <div class="reveal">

                            <h3>My Current Focus</h3>
<p>In Module 7, I used Vue.js to create reusable components and a reactive contact form.</p>
<p>In Module 8, I am expanding this same portfolio with Vue Router, dedicated pages, dynamic routes and production-ready project structure.</p>
</div>

                    </div>


                    <figure class="profile-figure reveal">

                        <img
                            :src="portrait"
                            alt="Portrait of James Taljaard"
                            width="280">

                        <figcaption>
                            Building my skills through practical
                            front-end projects.
                        </figcaption>

                    </figure>

                </div>

            </div>

        </section>
</template>

<script>
import portrait from '@/assets/images/james-taljaard.jpg'

export default {
  name: 'HomeView',
  data() { return { portrait } }
}
</script>
