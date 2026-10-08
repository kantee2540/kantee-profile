<script setup lang="ts">
import { skills, languages } from '../data/resume'
</script>

<template>
  <section id="skills">
    <div class="container">
      <h2 class="section-title reveal">Skills</h2>
      <p class="section-sub reveal">Tools and technologies I work with</p>
      <div class="grid">
        <div v-for="s in skills" :key="s.name" class="card skill reveal">
          <span class="icon">{{ s.icon }}</span>
          <h3>{{ s.name }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
      <div class="langs reveal">
        <h3>Languages</h3>
        <span v-for="l in languages" :key="l" class="tag">{{ l }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; }
.skill { padding: 28px; transition: transform 0.25s, border-color 0.25s; }
.skill:hover { transform: translateY(-6px); border-color: var(--brand); }
.icon { font-size: 2rem; display: block; margin-bottom: 12px; }
.skill h3 { font-size: 1.1rem; margin-bottom: 6px; }
.skill p { color: var(--muted); font-size: 0.95rem; }
.langs { margin-top: 40px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.langs h3 { font-size: 1.1rem; margin-right: 8px; }
.langs .tag { font-size: 0.95rem; padding: 6px 16px; }
</style>
