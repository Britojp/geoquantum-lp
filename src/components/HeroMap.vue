<template>
  <section class="hero-section">
    <div class="hero-background">
      <video
        ref="videoRef"
        class="hero-video"
        :class="{ loaded: videoLoaded }"
        autoplay
        muted
        loop
        playsinline
        @loadeddata="handleVideoLoaded"
        @error="handleVideoError"
      >
        <source src="/src/assets/home/bg-video2.mp4" type="video/mp4" />
      </video>
      <div class="hero-gradient"></div>
    </div>

    <div class="hero-content">
      <div class="content-wrapper">

        <h1 class="hero-title">
          Transforme Dados Geoespaciais em Resultados Reais
        </h1>

        <p class="hero-description">
          Especialistas em análise geoespacial, automatização e desenvolvimento de soluções 
          inovadoras para projetos de engenharia, agricultura e meio ambiente
        </p>

        <div class="hero-actions">
          <router-link to="/contato" class="btn-hero primary">
            <span>Solicitar Orçamento Grátis</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </router-link>
          <router-link to="/servicos" class="btn-hero secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
            <span>Ver Soluções</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <span>Role para explorar</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const videoRef = ref<HTMLVideoElement>()
const videoLoaded = ref(false)

const handleVideoLoaded = () => {
  videoLoaded.value = true
}

const handleVideoError = () => {
  console.warn('Video failed to load')
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.hero-video.loaded {
  opacity: 0.7;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 54, 93, 0.9) 0%,
    rgba(45, 90, 135, 0.85) 50%,
    rgba(26, 54, 93, 0.9) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 6rem 1rem 4rem;
}

.content-wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 3rem);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(31, 167, 161, 0.15);
  border: 1px solid rgba(31, 167, 161, 0.3);
  border-radius: 2rem;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.hero-badge svg {
  color: #1fa7a1;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  max-width: 800px;
}

.hero-highlight {
  display: block;
  background: linear-gradient(135deg, #1fa7a1 0%, rgba(255, 255, 255, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 600px;
}

.hero-features {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.feature-item svg {
  flex-shrink: 0;
  stroke: #1fa7a1;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn-hero {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn-hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #2d5a87;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-hero:hover::after {
  transform: scaleX(1);
}

.btn-hero.primary {
  background: #ffffff;
  color: #1a365d;
}

.btn-hero.primary svg {
  stroke: #1a365d;
}

.btn-hero.primary:hover {
  background: rgba(255, 255, 255, 0.95);
}

.btn-hero.secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.btn-hero.secondary:hover {
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.1);
}

.btn-hero svg {
  flex-shrink: 0;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(20px);
  max-width: fit-content;
}

.stat-card {
  text-align: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 0.375rem;
}

.stat-label {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  line-height: 1.2;
}

.stat-divider {
  width: 1px;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.15);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  font-weight: 600;
  z-index: 1;
  animation: bounce 2s ease-in-out infinite;
}

.scroll-indicator svg {
  stroke: rgba(255, 255, 255, 0.8);
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

@media (min-width: 768px) {
  .hero-content {
    padding: 8rem 2rem 5rem;
  }

  .hero-badge {
    font-size: 1rem;
    padding: 0.625rem 1.25rem;
    margin-bottom: 2rem;
  }

  .hero-title {
    font-size: 3.25rem;
    margin-bottom: 2rem;
  }

  .hero-description {
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
  }

  .hero-stats {
    gap: 3rem;
    padding: 2.5rem 3rem;
  }

  .stat-value {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 0.9375rem;
  }
}

@media (min-width: 1024px) {
  .hero-section {
    min-height: 90vh;
  }

  .hero-title {
    font-size: 6rem;
  }

  .hero-description {
    font-size: 1.25rem;
  }

  .hero-features {
    gap: 2rem;
  }

  .feature-item {
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
  }

  .hero-actions {
    gap: 1.25rem;
  }

  .btn-hero {
    padding: 1.125rem 2.5rem;
    font-size: 1.0625rem;
  }
}

@media (max-width: 767px) {
  .hero-section {
    min-height: 100vh;
  }

  .hero-content {
    padding: 5rem 1rem 3rem;
  }

  .hero-badge {
    font-size: 0.8125rem;
    padding: 0.5rem 0.875rem;
  }

  .hero-badge svg {
    width: 14px;
    height: 14px;
  }

  .hero-title {
    font-size: 2.125rem;
    margin-bottom: 1.25rem;
  }

  .hero-description {
    font-size: 1rem;
    margin-bottom: 1.75rem;
  }

  .hero-features {
    gap: 0.75rem;
  }

  .feature-item {
    padding: 0.5rem 0.875rem;
    font-size: 0.875rem;
  }

  .feature-item svg {
    width: 18px;
    height: 18px;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn-hero {
    width: 100%;
    justify-content: center;
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    width: 100%;
  }

  .stat-divider {
    width: 100%;
    height: 1px;
  }

  .stat-value {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.875rem;
  }
}

@media (max-width: 479px) {
  .hero-content {
    padding: 4.5rem 1rem 2.5rem;
  }

  .hero-title {
    font-size: 1.875rem;
  }

  .hero-description {
    font-size: 0.9375rem;
  }

  .scroll-indicator {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
