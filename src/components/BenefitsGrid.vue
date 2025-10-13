<template>
  <section class="benefits-grid-section">
    <v-container class="mobile-padding">
      <div class="section-header">
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-subtitle">{{ subtitle }}</p>
      </div>

      <div class="benefits-grid">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="benefit-card"
          :style="{ '--delay': `${index * 0.1}s` }"
        >
          <div class="benefit-icon-wrapper">
            <div class="benefit-icon">
              <i :class="benefit.icon"></i>
            </div>
            <div v-if="benefit.badge" class="benefit-badge">
              {{ benefit.badge }}
            </div>
          </div>

          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-description">{{ benefit.description }}</p>

          <div v-if="benefit.features" class="benefit-features">
            <div
              v-for="(feature, idx) in benefit.features"
              :key="idx"
              class="feature-tag"
            >
              {{ feature }}
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface BenefitFeature {
  text: string
}

interface Benefit {
  icon: string
  title: string
  description: string
  badge?: string
  features?: string[]
}

interface Props {
  title?: string
  subtitle?: string
  benefits: Benefit[]
}

withDefaults(defineProps<Props>(), {
  title: 'Por que Escolher a GeoQuantum?',
  subtitle: 'Benefícios que fazem a diferença no seu projeto',
})
</script>

<style scoped>
.benefits-grid-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.08);
  border-radius: 1.25rem;
  padding: 2.5rem 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

.benefit-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1a365d 0%, #1fa7a1 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.benefit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(26, 54, 93, 0.12);
  border-color: rgba(26, 54, 93, 0.15);
}

.benefit-card:hover::before {
  transform: scaleX(1);
}

.benefit-icon-wrapper {
  position: relative;
  margin-bottom: 2rem;
  display: inline-block;
}

.benefit-icon {
  width: 5rem;
  height: 5rem;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.08) 0%, rgba(31, 167, 161, 0.08) 100%);
  border: 2px solid rgba(26, 54, 93, 0.1);
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
}

.benefit-card:hover .benefit-icon {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-color: transparent;
  transform: scale(1.05) rotate(-5deg);
  box-shadow: 0 12px 32px rgba(26, 54, 93, 0.25);
}

.benefit-icon i {
  font-size: 2.5rem;
  color: #1a365d;
  transition: color 0.3s ease;
}

.benefit-card:hover .benefit-icon i {
  color: #ffffff;
}

.benefit-badge {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  padding: 0.375rem 0.75rem;
  background: linear-gradient(135deg, #1fa7a1 0%, #2d5a87 100%);
  color: #ffffff;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(31, 167, 161, 0.4);
  animation: pulse 2s ease-in-out infinite;
}

.benefit-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.benefit-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.benefit-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.feature-tag {
  padding: 0.375rem 0.875rem;
  background: rgba(31, 167, 161, 0.08);
  border: 1px solid rgba(31, 167, 161, 0.2);
  border-radius: 1rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #1a365d;
  transition: all 0.3s ease;
}

.feature-tag:hover {
  background: rgba(31, 167, 161, 0.15);
  border-color: rgba(31, 167, 161, 0.4);
  transform: translateY(-2px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@media (max-width: 768px) {
  .benefits-grid-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .benefit-card {
    padding: 2rem 1.5rem;
  }

  .benefit-icon {
    width: 4.5rem;
    height: 4.5rem;
  }

  .benefit-icon i {
    font-size: 2.25rem;
  }

  .benefit-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .section-header {
    margin-bottom: 2.5rem;
  }

  .section-title {
    font-size: 1.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .benefit-card {
    animation: none;
  }

  .benefit-badge {
    animation: none;
  }
}
</style>

