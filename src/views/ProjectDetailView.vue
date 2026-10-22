<template>
  <section class="tab-panel active-panel">
    <div class="content-card">
      <div v-if="project">
        <div class="section-heading">
          <p class="section-label">Project {{ project.number }} / Dynamic Vue Route</p>
          <h2>{{ project.title }}</h2>
          <p class="section-intro">{{ project.description }}</p>
        </div>
        <p>This project is part of my ongoing Front-End Web Development portfolio.</p>
      </div>
      <div v-else>
        <h2>Project not found</h2>
        <p>The project you requested does not exist in this portfolio.</p>
      </div>
      <router-link class="project-link" to="/projects">Back to My Projects</router-link>
    </div>
  </section>
</template>

<script>
import projects from '@/data/projects'
export default {
  name: 'ProjectDetailView',
  computed: {
    project() { return projects.find(p => p.slug === this.$route.params.slug) }
  }
}
</script>
