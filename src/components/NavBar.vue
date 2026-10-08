<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface NavLink {
  id: string
  label: string
}

const links: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const open = ref(false)
const scrolled = ref(false)
const active = ref('')

function onScroll(): void {
  scrolled.value = window.scrollY > 20
  const pos = window.scrollY + 120
  active.value = ''
  for (const { id } of links) {
    const el = document.getElementById(id)
    if (el && el.offsetTop <= pos) active.value = id
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="['nav', { scrolled }]">
    <div class="container nav-inner">
      <a href="#home" class="logo">KANTEE<span>.</span></a>
      <button class="burger" :aria-expanded="open" aria-label="Toggle menu" @click="open = !open">
        <span /><span /><span />
      </button>
      <nav :class="{ open }">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          :class="{ active: active === link.id }"
          @click="open = false"
        >{{ link.label }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: background 0.3s, box-shadow 0.3s;
}
.nav.scrolled {
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 var(--border);
}
.nav-inner { display: flex; align-items: center; justify-content: space-between; height: 64px; }
.logo { font-family: 'Poppins', sans-serif; font-weight: 800; font-size: 1.3rem; color: var(--brand); }
.logo span { color: var(--accent); }
nav { display: flex; gap: 28px; }
nav a { font-weight: 500; color: var(--muted); position: relative; transition: color 0.2s; }
nav a:hover, nav a.active { color: var(--brand); }
nav a.active::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: -6px;
  height: 2px; background: var(--brand); border-radius: 2px;
}
.burger { display: none; background: none; border: 0; cursor: pointer; padding: 8px; }
.burger span { display: block; width: 22px; height: 2px; margin: 5px 0; background: var(--text); border-radius: 2px; }

@media (max-width: 760px) {
  .burger { display: block; }
  nav {
    position: absolute; top: 64px; left: 0; right: 0;
    flex-direction: column; gap: 0;
    background: var(--surface); border-bottom: 1px solid var(--border);
    max-height: 0; overflow: hidden; transition: max-height 0.3s ease;
  }
  nav.open { max-height: 320px; }
  nav a { padding: 14px 16px; }
  nav a.active::after { display: none; }
}
</style>
