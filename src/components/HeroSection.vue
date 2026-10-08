<script setup lang="ts">
import { profile } from '../data/resume'

const initials = profile.firstName[0] + profile.lastName[0]
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero-inner">
      <div class="text reveal">
        <p class="hello">Hello, I'm</p>
        <h1>
          {{ profile.firstName }}<br />
          <span class="last">{{ profile.lastName }}</span>
          <span class="nick">({{ profile.nickname }})</span>
        </h1>
        <p class="role">{{ profile.title }}</p>
        <p class="tagline">
          Building native and cross-platform mobile apps with Flutter, React Native, Swift and Kotlin — from Bangkok, Thailand.
        </p>
        <div class="actions">
          <a href="#contact" class="btn btn-primary">Get in touch</a>
          <a href="#experience" class="btn btn-outline">View experience</a>
        </div>
      </div>
      <div class="avatar-wrap reveal">
        <div class="avatar">
          <img v-if="profile.photo" :src="profile.photo" :alt="`${profile.firstName} ${profile.lastName}`" />
          <span v-else>{{ initials }}</span>
        </div>
        <div class="badge b1">📱 Flutter</div>
        <div class="badge b2">⚛️ React Native</div>
        <div class="badge b3">🍎 iOS · 🤖 Android</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 64px;
  background:
    radial-gradient(circle at 85% 20%, color-mix(in srgb, var(--brand) 18%, transparent), transparent 45%),
    radial-gradient(circle at 10% 90%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 40%);
}
.hero-inner { display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: center; }
.hello { color: var(--accent); font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
h1 { font-size: clamp(2.4rem, 6vw, 4.2rem); font-weight: 800; }
.last { font-weight: 400; color: var(--brand); }
.nick { font-weight: 400; font-size: 0.5em; color: var(--muted); margin-left: 8px; }
.role { font-family: 'Poppins', sans-serif; font-size: 1.3rem; letter-spacing: 0.15em; text-transform: uppercase; margin: 16px 0; color: var(--muted); }
.tagline { max-width: 520px; color: var(--muted); margin-bottom: 32px; }
.actions { display: flex; flex-wrap: wrap; gap: 14px; }
.btn-outline { color: var(--brand); }

.avatar-wrap { position: relative; justify-self: center; }
.avatar {
  width: min(340px, 70vw);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 10px solid var(--surface);
  box-shadow: var(--shadow), 0 0 0 4px var(--brand);
  background: linear-gradient(135deg, var(--brand), var(--brand-dark));
  display: grid;
  place-items: center;
  overflow: hidden;
}
.avatar img { width: 100%; height: 100%; object-fit: cover; }
.avatar span { font-family: 'Poppins', sans-serif; font-size: 6rem; font-weight: 800; color: #fff; }

.badge {
  position: absolute;
  padding: 8px 16px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  animation: float 4s ease-in-out infinite;
}
.b1 { top: 8%; left: -12%; }
.b2 { top: 50%; right: -16%; animation-delay: 1.2s; }
.b3 { bottom: 4%; left: 0; animation-delay: 2.4s; }
@keyframes float { 50% { transform: translateY(-10px); } }

@media (max-width: 860px) {
  .hero-inner { grid-template-columns: 1fr; text-align: center; }
  .avatar-wrap { order: -1; }
  .tagline { margin-inline: auto; }
  .actions { justify-content: center; }
  .b1 { left: -4%; }
  .b2 { right: -6%; }
}
@media (prefers-reduced-motion: reduce) { .badge { animation: none; } }
</style>
