<script setup lang="ts">
import { education } from '../data/resume'
</script>

<template>
  <section id="education" class="alt">
    <div class="container">
      <h2 class="section-title reveal">Education</h2>
      <p class="section-sub reveal">Academic background</p>
      <div class="grid">
        <article v-for="e in education" :key="e.period" class="card edu reveal">
          <span class="period">{{ e.period }}</span>
          <h3>{{ e.degree }}</h3>
          <p class="field">{{ e.field }}</p>
          <p class="school">🎓 {{ e.school }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.alt { background: var(--surface); }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.edu { padding: 32px; background: var(--bg); border-top: 4px solid var(--brand); }
.period { display: inline-block; font-weight: 700; color: var(--brand); letter-spacing: 0.06em; margin-bottom: 10px; }
h3 { font-size: 1.35rem; }
.field { font-size: 1.05rem; color: var(--accent); font-weight: 600; margin: 4px 0 14px; }
.school { color: var(--muted); }
</style>
