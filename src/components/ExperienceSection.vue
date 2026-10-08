<script setup lang="ts">
import { experience } from '../data/resume'
</script>

<template>
  <section id="experience" class="alt">
    <div class="container">
      <h2 class="section-title reveal">Work Experience</h2>
      <p class="section-sub reveal">Where I've worked and what I've built</p>
      <ol class="timeline">
        <li v-for="job in experience" :key="job.company" class="item reveal">
          <span :class="['dot', { current: job.current }]" />
          <article class="card job">
            <header>
              <div>
                <h3>{{ job.company }}</h3>
                <p class="role">{{ job.role }}</p>
              </div>
              <span class="period">{{ job.period }}</span>
            </header>
            <ul>
              <li v-for="(h, i) in job.highlights" :key="i">{{ h }}</li>
            </ul>
            <div class="tags">
              <span v-for="t in job.tags" :key="t" class="tag">{{ t }}</span>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.alt { background: var(--surface); }
.timeline { list-style: none; position: relative; padding-left: 36px; }
.timeline::before {
  content: ''; position: absolute; left: 9px; top: 8px; bottom: 8px;
  width: 2px; background: var(--border);
}
.item { position: relative; margin-bottom: 32px; }
.dot {
  position: absolute; left: -36px; top: 26px;
  width: 20px; height: 20px; border-radius: 50%;
  background: var(--surface); border: 4px solid var(--brand);
}
.dot.current { background: var(--accent); border-color: var(--accent); box-shadow: 0 0 0 6px color-mix(in srgb, var(--accent) 25%, transparent); }
.job { padding: 28px; background: var(--bg); }
header { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 16px; }
h3 { color: var(--accent); font-size: 1.3rem; }
.role { color: var(--muted); font-weight: 500; }
.period { font-size: 0.9rem; font-weight: 600; color: var(--brand); white-space: nowrap; }
ul { padding-left: 20px; margin-bottom: 18px; }
ul li { margin-bottom: 6px; color: var(--text); }
.tags { display: flex; flex-wrap: wrap; gap: 8px; }
</style>
