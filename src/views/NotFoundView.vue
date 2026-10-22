<template>
  <section class="tab-panel active-panel">
    <div class="content-card">
      <p class="section-label">404 / Page not found</p>
      <h2>Sorry, that page does not exist.</h2>
      <p>Try the portfolio navigation or return to the About Me page.</p>
      <router-link class="project-link" to="/">Return to About Me</router-link>
    </div>
  </section>
</template>
<script>
export default { name: 'NotFoundView' }
</script>
