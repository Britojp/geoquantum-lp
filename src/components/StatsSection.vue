<template>
  <section
    class="stats-section py-16 py-sm-12 py-md-16 bg-gradient-primary scroll-reveal"
    data-animation="fade-in-up"
  >
    <v-container class="mobile-padding">
      <div class="text-center mb-12 mb-sm-8 mb-md-12 scroll-reveal" data-animation="fade-in-down">
        <h2 class="text-h3 text-h4-sm text-h3-md font-weight-bold text-white mb-4 mobile-title">
          {{ title }}
        </h2>
        <p
          class="text-h6 text-body-1-sm text-h6-md text-grey-lighten-2 max-width-600 mx-auto mobile-text"
        >
          {{ subtitle }}
        </p>
      </div>

      <v-row class="mobile-grid">
        <v-col
          v-for="(stat, index) in stats"
          :key="index"
          cols="6"
          md="3"
          class="mb-6 mb-sm-4 mb-md-6"
        >
          <div
            class="stat-card scroll-reveal hover-lift hover-glow ripple-effect mobile-card touch-optimized will-change-transform"
            :data-animation="'bounce-in'"
            :data-delay="index * 150"
            @click="handleCardClick"
          >
            <div class="stat-icon animate-float">
              <i :class="stat.icon"></i>
            </div>
            <div class="stat-number" ref="statNumbers">
              {{ displayNumbers[index] || stat.number }}
            </div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimations, animationUtils } from '@/composables/useAnimations'

interface Stat {
  number: string
  label: string
  icon: string
}

interface Props {
  title?: string
  subtitle?: string
  stats: Stat[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Nossos Números',
  subtitle: 'Resultados que comprovam nossa excelência',
})

const { initScrollAnimations, triggerRippleEffect } = useScrollAnimations()
const statNumbers = ref<HTMLElement[]>([])
const displayNumbers = ref<string[]>([])

const extractNumber = (numberString: string): number => {
  const match = numberString.match(/\d+/)
  return match ? parseInt(match[0]) : 0
}

const animateCounters = () => {
  props.stats.forEach((stat, index) => {
    const targetNumber = extractNumber(stat.number)
    const element = statNumbers.value[index]

    if (element && targetNumber > 0) {
      displayNumbers.value[index] = '0'

      setTimeout(() => {
        animationUtils.animateCounter(element, 0, targetNumber, 2000)
      }, index * 200)
    }
  })
}

const handleCardClick = (event: MouseEvent) => {
  const element = event.currentTarget as HTMLElement
  triggerRippleEffect(event, element)
}

onMounted(() => {
  initScrollAnimations()

  // Observar quando a seção fica visível para animar os contadores
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            animateCounters()
          }, 500)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 },
  )

  const section = document.querySelector('.stats-section')
  if (section) {
    observer.observe(section)
  }
})
</script>

<style scoped>
/* Stats Section */
.stats-section {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  position: relative;
  overflow: hidden;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
}

.stat-card {
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
}

.stat-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.stat-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #ffffff;
  font-size: 1.8rem;
  transition: all 0.3s ease;
}

.stat-card:hover .stat-icon {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.3);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.stat-label {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.5px;
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

/* Responsive */
@media (max-width: 768px) {
  .stat-number {
    font-size: 2rem;
  }

  .stat-card {
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .stat-number {
    font-size: 1.8rem;
  }

  .stat-card {
    padding: 1rem 0.5rem;
  }
}
</style>
