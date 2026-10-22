<template>
  <div class="contact-page">
    <section class="contact-form-section">
<div class="section-heading reveal">

                <p class="section-label">
                    Module 7 Vue.js Project
                </p>

                <h2>Contact Me</h2>

                <p class="section-intro">
                    This contact form builds on my Module 6 project.
                    Vue.js now manages the form validation and
                    confirmation modal using reusable components.
                </p>

            </div>

            <div class="contact-intro reveal">

                <h3>How the Vue Form Works</h3>

                <p>
                    Vue.js uses reactive data to check each field
                    while you type. The name must contain letters
                    and spaces, the email must be valid, and the
                    message must contain at least 10 characters.
                </p>

                <p>
                    Error messages appear directly below the relevant
                    fields using Vue's v-if directive. The form only
                    becomes ready for submission when all three
                    fields are valid.
                </p>

                <p>
                    Once submitted, a separate Vue component displays
                    the entered information in a confirmation modal.
                </p>

                <p class="practice-note">
                    This is a course project. Information entered
                    into this form is not sent to a server.
                </p>

            </div>
      <ContactForm ref="contactForm"
                   name-label="Name" email-label="Email Address" message-label="Message"
                   name-placeholder="Enter your name"
                   email-placeholder="name@example.com"
                   message-placeholder="Enter a message of at least 10 characters"
                   button-label="Send Message"
                   @form-submitted="showConfirmation" />
      <ConfirmationModal :visible="isModalOpen" :submission="submittedData"
                         @close="closeConfirmation" />
    </section>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
import ConfirmationModal from '@/components/ConfirmationModal.vue'

export default {
  name: 'ContactView',
  components: { ContactForm, ConfirmationModal },
  data() {
    return { isModalOpen: false, submittedData: { name: '', email: '', message: '' } }
  },
  methods: {
    showConfirmation(details) {
      this.submittedData = { ...details }
      this.isModalOpen = true
    },
    closeConfirmation() {
      this.isModalOpen = false
      this.$nextTick(() => {
        if (this.$refs.contactForm) this.$refs.contactForm.focusName()
      })
    }
  }
}
</script>
