<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )
  document.querySelectorAll('.reveal').forEach((el: Element) => observer.observe(el))
})
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
  </main>
  <footer class="footer">
    <div class="container">© {{ new Date().getFullYear() }} Kantee Charoensasin · Built with Vue.js</div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 28px 0;
  text-align: center;
  font-size: 0.9rem;
  color: var(--muted);
  border-top: 1px solid var(--border);
}
</style>
