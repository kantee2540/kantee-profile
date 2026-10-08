<script setup lang="ts">
import { profile, experience, languages } from '../data/resume'

const startYear = 2020
const years = new Date().getFullYear() - startYear

interface Stat {
  value: string | number
  label: string
}

const stats: Stat[] = [
  { value: `${years}+`, label: 'Years of experience' },
  { value: experience.length, label: 'Companies' },
  { value: '2', label: 'Platforms: iOS & Android' },
  { value: languages.length, label: 'Languages spoken' },
]
</script>

<template>
  <section id="about">
    <div class="container">
      <h2 class="section-title reveal">Profile</h2>
      <p class="section-sub reveal">A little about me</p>
      <div class="grid">
        <p class="summary reveal">{{ profile.summary }}</p>
        <div class="stats reveal">
          <div v-for="s in stats" :key="s.label" class="card stat">
            <strong>{{ s.value }}</strong>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 48px; align-items: center; }
.summary { font-size: 1.12rem; color: var(--text); }
.stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.stat { padding: 24px; text-align: center; }
.stat strong { display: block; font-family: 'Poppins', sans-serif; font-size: 2rem; color: var(--brand); }
.stat span { font-size: 0.85rem; color: var(--muted); }
@media (max-width: 860px) { .grid { grid-template-columns: 1fr; } }
</style>
