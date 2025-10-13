<template>
  <section class="cta-section">
    <div class="cta-background">
      <div class="cta-pattern"></div>
      <div class="cta-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
      </div>
    </div>

    <div class="cta-container">
      <div class="cta-content">
        <div v-if="badge" class="cta-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
          <span>{{ badge }}</span>
        </div>

        <h2 class="cta-title">{{ title }}</h2>
        <p class="cta-subtitle">{{ subtitle }}</p>

        <div class="cta-actions">
          <router-link 
            :to="primary.to" 
            class="btn-cta primary"
          >
            <span>{{ primary.label }}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </router-link>

          <router-link 
            v-if="secondary"
            :to="secondary.to" 
            class="btn-cta secondary"
          >
            <span>{{ secondary.label }}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </router-link>
        </div>

        <div v-if="contactChips" class="cta-contacts">
          <a
            v-for="(chip, index) in contactChips"
            :key="index"
            :href="chip.icon === 'mdi-email' ? `mailto:${chip.text}` : `tel:${chip.text}`"
            class="contact-chip"
          >
            <i :class="chip.icon"></i>
            <span>{{ chip.text }}</span>
          </a>
        </div>
      </div>

      <div v-if="stats" class="cta-stats">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="cta-stat-item"
        >
          <div class="cta-stat-value">{{ stat.number }}</div>
          <div class="cta-stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CtaButton {
  to: string
  label: string
  icon?: string
}

interface CtaStat {
  number: string
  label: string
}

interface ContactChip {
  icon: string
  text: string
}

interface Props {
  title: string
  subtitle: string
  primary: CtaButton
  secondary?: CtaButton
  badge?: string
  stats?: CtaStat[]
  contactChips?: ContactChip[]
}

defineProps<Props>()
</script>

<style scoped>
.cta-section {
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.cta-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 50%, #1a365d 100%);
}

.cta-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
}

.cta-shapes {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(31, 167, 161, 0.08);
  filter: blur(40px);
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: 10%;
}

.shape-2 {
  width: 400px;
  height: 400px;
  bottom: -200px;
  left: 5%;
}

.cta-container {
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-badge {
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
}

.cta-badge svg {
  color: #1fa7a1;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.cta-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.btn-cta {
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

.btn-cta::after {
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

.btn-cta:hover::after {
  transform: scaleX(1);
}

.btn-cta.primary {
  background: #ffffff;
  color: #1a365d;
}

.btn-cta.primary:hover {
  background: rgba(255, 255, 255, 0.95);
}

.btn-cta.secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.btn-cta.secondary:hover {
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.1);
}

.cta-contacts {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.contact-chip:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.25);
}

.contact-chip i {
  font-size: 1.125rem;
}

.cta-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-stat-item {
  text-align: center;
}

.cta-stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.cta-stat-label {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

@media (min-width: 768px) {
  .cta-section {
    padding: 5rem 0;
  }

  .cta-container {
    padding: 0 2rem;
  }

  .cta-badge {
    font-size: 1rem;
    padding: 0.625rem 1.25rem;
  }

  .cta-title {
    font-size: 2.5rem;
  }

  .cta-subtitle {
    font-size: 1.125rem;
  }

  .btn-cta {
    padding: 1.125rem 2.5rem;
    font-size: 1.0625rem;
  }

  .cta-stats {
    gap: 2rem;
  }

  .cta-stat-value {
    font-size: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .cta-section {
    padding: 6rem 0;
  }

  .cta-title {
    font-size: 3rem;
  }

  .cta-stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 479px) {
  .cta-section {
    padding: 3rem 0;
  }

  .cta-badge {
    font-size: 0.8125rem;
    padding: 0.5rem 0.875rem;
  }

  .cta-title {
    font-size: 1.75rem;
  }

  .cta-subtitle {
    font-size: 0.9375rem;
  }

  .cta-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn-cta {
    width: 100%;
    justify-content: center;
    padding: 1rem 1.5rem;
  }

  .cta-contacts {
    flex-direction: column;
  }

  .contact-chip {
    width: 100%;
    justify-content: center;
  }

  .cta-stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 3rem;
    padding-top: 2rem;
  }

  .cta-stat-value {
    font-size: 2rem;
  }

  .cta-stat-label {
    font-size: 0.875rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
