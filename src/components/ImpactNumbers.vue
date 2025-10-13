<template>
  <section class="impact-numbers">
    <div class="background-pattern"></div>
    
    <v-container class="mobile-padding">
      <div class="content-wrapper">
        <div class="impact-header">
          <h2 class="impact-title">{{ title }}</h2>
          <p class="impact-subtitle">{{ subtitle }}</p>
        </div>

        <div class="numbers-grid">
          <div
            v-for="(number, index) in numbers"
            :key="index"
            class="number-card"
            :style="{ '--delay': `${index * 0.15}s` }"
          >
            <div class="number-icon">
              <i :class="number.icon"></i>
            </div>
            <div class="number-value">{{ number.value }}</div>
            <div class="number-label">{{ number.label }}</div>
            <p v-if="number.description" class="number-description">
              {{ number.description }}
            </p>
          </div>
        </div>

        <div v-if="cta" class="impact-cta">
          <router-link :to="cta.link" class="cta-button">
            <span>{{ cta.text }}</span>
            <i class="mdi mdi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface ImpactNumber {
  value: string
  label: string
  icon: string
  description?: string
}

interface CTA {
  text: string
  link: string
}

interface Props {
  title?: string
  subtitle?: string
  numbers: ImpactNumber[]
  cta?: CTA
}

withDefaults(defineProps<Props>(), {
  title: 'Resultados que Falam por Si',
  subtitle: 'Números que demonstram nosso compromisso com a excelência e inovação',
})
</script>

<style scoped>
.impact-numbers {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  position: relative;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.5;
}

.content-wrapper {
  position: relative;
  z-index: 1;
}

.impact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.impact-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.impact-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.numbers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.number-card {
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInScale 0.6s ease-out backwards;
  animation-delay: var(--delay);
  position: relative;
  overflow: hidden;
}

.number-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(31, 167, 161, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.number-card:hover {
  transform: translateY(-8px) scale(1.02);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.number-card:hover::before {
  opacity: 1;
}

.number-icon {
  width: 4rem;
  height: 4rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.number-card:hover .number-icon {
  background: rgba(31, 167, 161, 0.2);
  border-color: rgba(31, 167, 161, 0.4);
  transform: scale(1.1) rotate(5deg);
}

.number-icon i {
  font-size: 2rem;
  color: #ffffff;
}

.number-value {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1;
  position: relative;
  z-index: 1;
}

.number-label {
  font-size: 1.125rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 1;
}

.number-description {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin: 0;
  position: relative;
  z-index: 1;
}

.impact-cta {
  text-align: center;
  margin-top: 3rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #ffffff;
  color: #1a365d;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1fa7a1 0%, #2d5a87 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.cta-button:hover::before {
  transform: scaleX(1);
}

.cta-button span,
.cta-button i {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
  color: #ffffff;
}

.cta-button i {
  font-size: 1.25rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.cta-button:hover i {
  transform: translateX(0.375rem);
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .impact-numbers {
    padding: 4rem 0;
  }

  .impact-title {
    font-size: 2rem;
  }

  .impact-subtitle {
    font-size: 1.0625rem;
  }

  .numbers-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .number-card {
    padding: 2rem 1rem;
  }

  .number-value {
    font-size: 2.75rem;
  }

  .number-label {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .impact-header {
    margin-bottom: 2.5rem;
  }

  .impact-title {
    font-size: 1.75rem;
  }

  .impact-subtitle {
    font-size: 1rem;
  }

  .numbers-grid {
    grid-template-columns: 1fr;
  }

  .number-icon {
    width: 3.5rem;
    height: 3.5rem;
  }

  .number-icon i {
    font-size: 1.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .number-card {
    animation: none;
  }
}
</style>

