<template>
  <section class="workflow-section">
    <div class="workflow-container">
      <div class="section-header">
        <h2 class="section-title">{{ title }}</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">{{ subtitle }}</p>
      </div>

      <div class="workflow-grid">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="workflow-step"
          :style="{ '--delay': `${index * 0.15}s` }"
        >
          <div class="step-header">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-icon">
              <i :class="step.icon"></i>
            </div>
          </div>

          <div class="step-content">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
            <p v-if="step.details" class="step-details">{{ step.details }}</p>
          </div>

          <div v-if="index < steps.length - 1" class="step-connector">
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
              <path d="M0 8H24M24 8L18 2M24 8L18 14" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface WorkflowStep {
  title: string
  description: string
  icon: string
  details?: string
}

interface Props {
  title?: string
  subtitle?: string
  steps: WorkflowStep[]
}

withDefaults(defineProps<Props>(), {
  title: 'Como Trabalhamos',
  subtitle: 'Metodologia estruturada para garantir excelência em cada projeto',
})
</script>

<style scoped>
.workflow-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
}

.workflow-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(31, 167, 161, 0.1);
  border: 1px solid rgba(31, 167, 161, 0.25);
  border-radius: 1.5rem;
  color: #1a365d;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
}

.header-badge svg {
  stroke: #1fa7a1;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a365d;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.title-underline {
  width: 4rem;
  height: 3px;
  background: linear-gradient(90deg, #1fa7a1 0%, #2d5a87 100%);
  border-radius: 2px;
  margin: 0 auto 1.25rem;
}

.section-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  max-width: 700px;
  margin: 0 auto;
}

.workflow-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-x: auto;
  padding-bottom: 1rem;
}

.workflow-step {
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.08);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

.workflow-step::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #1a365d 0%, #1fa7a1 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.workflow-step:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(26, 54, 93, 0.1);
  border-color: rgba(26, 54, 93, 0.15);
}

.workflow-step:hover::before {
  transform: scaleX(1);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.step-number {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.375rem;
  font-weight: 800;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.2);
  transition: all 0.3s ease;
}

.workflow-step:hover .step-number {
  transform: scale(1.05);
}

.step-icon {
  width: 3rem;
  height: 3rem;
  background: rgba(26, 54, 93, 0.06);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.workflow-step:hover .step-icon {
  background: rgba(31, 167, 161, 0.1);
}

.step-icon i {
  font-size: 1.5rem;
  color: #1a365d;
  transition: color 0.3s ease;
}

.workflow-step:hover .step-icon i {
  color: #1fa7a1;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.625rem;
  line-height: 1.3;
}

.step-description {
  font-size: 0.9375rem;
  color: #2e3a47;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.step-details {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #4a5568;
  margin: 0;
}

.step-connector {
  display: none;
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
  .workflow-section {
    padding: 5rem 0;
  }

  .workflow-container {
    padding: 0 2rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .section-subtitle {
    font-size: 1.125rem;
  }

  .workflow-grid {
    flex-direction: row;
    gap: 1.5rem;
    overflow-x: auto;
    padding: 0 1rem 1rem;
  }

  .workflow-step {
    flex: 0 0 280px;
    min-width: 280px;
  }

  .workflow-step {
    padding: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .workflow-section {
    padding: 6rem 0;
  }

  .section-title {
    font-size: 2.75rem;
  }

  .workflow-grid {
    flex-direction: row;
    gap: 1rem;
    overflow-x: auto;
    padding: 0 1rem 1rem;
  }

  .workflow-step {
    flex: 0 0 300px;
    min-width: 300px;
  }

  .step-connector {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(26, 54, 93, 0.2);
    z-index: 1;
  }

  .workflow-step:last-child .step-connector {
    display: none;
  }
}

@media (max-width: 479px) {
  .workflow-section {
    padding: 3rem 0;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-subtitle {
    font-size: 0.9375rem;
  }

  .workflow-grid {
    flex-direction: row;
    gap: 1rem;
    overflow-x: auto;
    padding: 0 1rem 1rem;
  }

  .workflow-step {
    flex: 0 0 250px;
    min-width: 250px;
    padding: 1.5rem;
  }

  .step-header {
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .step-number {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.125rem;
  }

  .step-icon {
    width: 2.5rem;
    height: 2.5rem;
  }

  .step-icon i {
    font-size: 1.25rem;
  }

  .step-title {
    font-size: 1.125rem;
  }

  .step-description,
  .step-details {
    font-size: 0.875rem;
  }

  .step-connector {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -0.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(26, 54, 93, 0.2);
    z-index: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .workflow-step {
    animation: none;
  }
}
</style>
