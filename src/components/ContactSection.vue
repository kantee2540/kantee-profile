<script setup lang="ts">
import { contact } from '../data/resume'

interface ContactItem {
  icon: string
  label: string
  value: string
  href?: string
}

const items: ContactItem[] = [
  { icon: '✉️', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: '📞', label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
  { icon: '💬', label: 'LINE ID', value: contact.line },
  { icon: '📍', label: 'Location', value: contact.location },
]
</script>

<template>
  <section id="contact">
    <div class="container">
      <div class="card panel reveal">
        <h2>Let's work together</h2>
        <p>Have a mobile or web project in mind? I'd love to hear about it.</p>
        <a :href="`mailto:${contact.email}`" class="btn cta">Say hello 👋</a>
        <div class="grid">
          <component
            :is="item.href ? 'a' : 'div'"
            v-for="item in items"
            :key="item.label"
            :href="item.href"
            class="item"
          >
            <span class="icon">{{ item.icon }}</span>
            <span class="label">{{ item.label }}</span>
            <span class="value">{{ item.value }}</span>
          </component>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.panel {
  padding: clamp(32px, 6vw, 64px);
  text-align: center;
  color: #fff;
  border: 0;
  background: linear-gradient(135deg, var(--brand), var(--brand-dark));
}
h2 { font-size: clamp(1.8rem, 4vw, 2.6rem); margin-bottom: 12px; }
.panel > p { opacity: 0.9; margin-bottom: 28px; }
.cta { background: #fff; color: var(--brand-dark); margin-bottom: 48px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
.item {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  padding: 20px; border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.2s;
  overflow-wrap: anywhere;
}
a.item:hover { background: rgba(255, 255, 255, 0.2); }
.icon { font-size: 1.5rem; }
.label { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; opacity: 0.8; }
.value { font-weight: 600; }
</style>
