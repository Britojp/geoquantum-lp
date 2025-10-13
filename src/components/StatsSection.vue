<template>
  <section class="stats-section">
    <div class="stats-background">
      <div class="stats-pattern"></div>
    </div>

    <div class="stats-container">
      <div class="stats-header">
        <h2 class="stats-title">{{ title }}</h2>
        <p v-if="subtitle" class="stats-subtitle">{{ subtitle }}</p>
      </div>

      <div class="stats-grid">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="stat-item"
          :style="{ '--delay': `${index * 0.1}s` }"
        >
          <div class="stat-icon">
            <i :class="stat.icon"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
            <p v-if="stat.description" class="stat-description">
              {{ stat.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Stat {
  value: string
  label: string
  icon: string
  description?: string
}

interface Props {
  title?: string
  subtitle?: string
  stats: Stat[]
}

withDefaults(defineProps<Props>(), {
  title: 'Resultados que Comprovam',
  subtitle: undefined,
})
</script>

<style scoped>
.stats-section {
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.stats-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
}

.stats-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.5;
}

.stats-container {
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
}

.stats-header {
  text-align: center;
  margin-bottom: 3rem;
}

.stats-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.stats-subtitle {
  font-size: 1.0625rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.stat-item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

.stat-icon {
  flex-shrink: 0;
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(31, 167, 161, 0.15);
  border: 2px solid rgba(31, 167, 161, 0.3);
  border-radius: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.stat-item:hover .stat-icon {
  background: rgba(31, 167, 161, 0.25);
  transform: scale(1.05);
}

.stat-icon i {
  font-size: 1.75rem;
  color: #ffffff;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-description {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 768px) {
  .stats-section {
    padding: 5rem 0;
  }

  .stats-container {
    padding: 0 2rem;
  }

  .stats-title {
    font-size: 2.5rem;
  }

  .stats-subtitle {
    font-size: 1.125rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .stat-item {
    padding: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .stats-section {
    padding: 6rem 0;
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .stats-title {
    font-size: 2.75rem;
  }
}

@media (max-width: 479px) {
  .stats-section {
    padding: 3rem 0;
  }

  .stats-header {
    margin-bottom: 2rem;
  }

  .stats-title {
    font-size: 1.75rem;
  }

  .stats-subtitle {
    font-size: 1rem;
  }

  .stat-item {
    padding: 1.5rem;
    gap: 1rem;
  }

  .stat-icon {
    width: 3rem;
    height: 3rem;
  }

  .stat-icon i {
    font-size: 1.5rem;
  }

  .stat-value {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.875rem;
  }

  .stat-description {
    font-size: 0.875rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .stat-item {
    animation: none;
  }
}
</style>

