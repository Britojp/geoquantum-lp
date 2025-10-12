<template>
  <section class="workflow-section py-16 py-sm-12 py-md-16 bg-grey-lighten-4 animate-on-scroll">
    <v-container class="mobile-padding">
      <div class="text-center mb-12 mb-sm-8 mb-md-12 animate-fade-in-up">
        <h2
          class="text-h3 text-h4-sm text-h3-md font-weight-bold text-primary mb-4 animate-slide-in-left mobile-title"
        >
          {{ title }}
        </h2>
        <p
          class="text-h6 text-body-1-sm text-h6-md text-grey-darken-1 max-width-600 mx-auto animate-slide-in-right mobile-text"
        >
          {{ subtitle }}
        </p>
      </div>

      <!-- Timeline Horizontal -->
      <div class="timeline-container">
        <div class="timeline-line"></div>

        <div v-for="(step, index) in steps" :key="index" class="timeline-step">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-title">{{ step.title }}</div>
          <div class="step-description">{{ step.description }}</div>
          <div class="step-content">
            <div class="step-icon">
              <i :class="step.icon"></i>
            </div>
            <p class="step-details">
              {{ step.details }}
            </p>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface WorkflowStep {
  title: string
  description: string
  icon: string
  details: string
}

interface Props {
  title?: string
  subtitle?: string
  steps: WorkflowStep[]
}

withDefaults(defineProps<Props>(), {
  title: 'Como Trabalhamos',
  subtitle: 'Metodologia comprovada para entregar resultados excepcionais em geoprocessamento',
})
</script>

<style scoped>
/* Timeline Horizontal */
.timeline-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 60px;
  padding: 0 20px;
}

.timeline-line {
  position: absolute;
  top: 40px;
  left: 50px;
  right: 50px;
  height: 3px;
  background: linear-gradient(90deg, #1a365d 0%, #2d5a87 100%);
  z-index: 1;
}

.timeline-step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  max-width: 200px;
  z-index: 2;
}

.step-number {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
  box-shadow: 0 8px 25px rgba(26, 54, 93, 0.3);
  transition: all 0.3s ease;
}

.timeline-step:hover .step-number {
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(26, 54, 93, 0.4);
}

.step-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2e3a47;
  margin-bottom: 15px;
  line-height: 1.3;
  text-align: center;
}

.step-description {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.3;
}

.step-content {
  padding: 0 10px;
}

.step-icon {
  width: 50px;
  height: 50px;
  background: rgba(11, 95, 165, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #0b5fa5;
  font-size: 1.5rem;
}

.step-content p {
  margin: 0;
}

.step-details {
  font-size: 0.85rem;
  color: #6c757d;
  margin-top: 15px;
  line-height: 1.4;
  text-align: center;
  padding: 0 5px;
}

/* Classes de Responsividade */
.max-width-600 {
  max-width: 600px;
}

.mobile-padding {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 600px) {
  .mobile-padding {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 960px) {
  .mobile-padding {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

.mobile-grid {
  margin: 0;
}

.mobile-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.touch-optimized {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

/* Animações */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate {
  opacity: 1;
  transform: translateY(0);
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsivo para timeline */
@media (max-width: 1200px) {
  .timeline-container {
    padding: 0 10px;
  }

  .timeline-step {
    max-width: 180px;
  }

  .step-number {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }

  .step-title {
    font-size: 1rem;
  }

  .step-description {
    font-size: 0.85rem;
  }

  .step-details {
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .timeline-container {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 40px;
  }

  .timeline-line {
    display: none;
  }

  .timeline-step {
    max-width: 100%;
    width: 100%;
  }

  .step-number {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .step-title {
    font-size: 1.1rem;
  }

  .step-description {
    font-size: 1rem;
  }

  .step-details {
    font-size: 0.9rem;
    padding: 0 20px;
  }

  .step-content {
    padding: 0 20px;
  }
}
</style>
