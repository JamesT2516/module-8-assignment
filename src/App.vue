<template>
  <div class="portfolio-shell">
    <aside id="contact-popup" class="contact-popup" :class="{ show: popupVisible }"
           aria-labelledby="popup-title" :aria-hidden="String(!popupVisible)">
      <button type="button" id="close-popup" class="popup-close"
              aria-label="Close contact message" @click="closePopup">&times;</button>
      <h2 id="popup-title">Let's Connect</h2>
      <p>Thanks for visiting my portfolio. If you would like to get in touch, head over to my Contact Me page.</p>
      <button type="button" id="popup-contact-button" @click="goToContact">Contact Me</button>
    </aside>
    <header>
      <h1>James Taljaard</h1>
      <p>Learning front-end development by building, testing, and improving as I go.</p>
      <nav aria-label="Portfolio navigation">
        <ul>
          <li><router-link to="/" class="nav-tab" exact-active-class="active">About Me</router-link></li>
          <li><router-link to="/learning" class="nav-tab" active-class="active">What I Am Learning</router-link></li>
          <li><router-link to="/projects" class="nav-tab" :class="{ active: $route.path.startsWith('/projects') }">My Projects</router-link></li>
          <li><router-link to="/contact" class="nav-tab" active-class="active">Contact Me</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="portfolio-main"><router-view /></main>
    <footer><p>&copy; 2026 James Taljaard</p></footer>
  </div>
</template>

<script>
export default {
  name: 'PortfolioApp',
  data() {
    return { popupVisible: false, revealObserver: null }
  },
  mounted() {
    // Wait for Vue Router to finish its initial navigation before showing
    // the original Module 5 popup. Otherwise the first route watcher can
    // immediately hide it while the homepage is being opened.
    this.$router.isReady().then(() => {
      this.popupVisible = this.$route.path === '/'
      this.$nextTick(this.setupReveal)
    })
  },
  watch: {
    $route() {
      this.closePopup()
      this.$nextTick(this.setupReveal)
    }
  },
  beforeUnmount() {
    if (this.revealObserver) this.revealObserver.disconnect()
  },
  methods: {
    closePopup() { this.popupVisible = false },
    goToContact() {
      this.closePopup()
      this.$router.push('/contact')
    },
    setupReveal() {
      if (this.revealObserver) this.revealObserver.disconnect()
      const elements = document.querySelectorAll('.reveal')
      if (!('IntersectionObserver' in window) ||
          window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elements.forEach(el => el.classList.add('visible'))
        return
      }
      this.revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            this.revealObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.08 })
      elements.forEach(el => this.revealObserver.observe(el))
    }
  }
}
</script>
