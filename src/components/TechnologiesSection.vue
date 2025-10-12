<template>
  <section class="technologies-section py-16 py-sm-12 py-md-16 animate-on-scroll">
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

      <v-row class="mobile-grid">
        <v-col
          v-for="tech in technologies"
          :key="tech.name"
          cols="6"
          sm="4"
          lg="2"
          class="mb-6 mb-sm-4 mb-md-6"
        >
          <div class="tech-card animate-on-scroll mobile-card touch-optimized">
            <div class="tech-icon">
              <i :class="tech.icon"></i>
            </div>
            <h5>{{ tech.name }}</h5>
            <p>{{ tech.description }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface Technology {
  name: string
  icon: string
  description: string
}

interface Props {
  title?: string
  subtitle?: string
  technologies: Technology[]
}

withDefaults(defineProps<Props>(), {
  title: 'Tecnologias Utilizadas',
  subtitle: 'Ferramentas de ponta para resultados excepcionais',
})
</script>

<style scoped>
.technologies-section {
  background: #ffffff;
}

.tech-card {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(26, 54, 93, 0.1);
  overflow: hidden;
}

.tech-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(26, 54, 93, 0.15);
  border-color: rgba(26, 54, 93, 0.3);
}

.tech-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  flex-shrink: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(26, 54, 93, 0.15);
}

.tech-card:hover .tech-icon {
  transform: scale(1.1) rotate(5deg);
}

.tech-icon i {
  font-size: 24px;
  color: white;
}

.tech-card h5 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a202c;
  margin: 8px 0 4px 0;
  flex-shrink: 0;
}

.tech-card p {
  color: #4a5568;
  font-size: 0.75rem;
  line-height: 1.3;
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

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

@media (max-width: 768px) {
  .tech-card {
    height: 120px;
    padding: 1rem;
  }

  .tech-icon {
    width: 40px;
    height: 40px;
  }

  .tech-icon i {
    font-size: 20px;
  }

  .tech-card h5 {
    font-size: 0.8rem;
  }

  .tech-card p {
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .tech-card {
    height: 100px;
    padding: 0.75rem;
  }

  .tech-icon {
    width: 35px;
    height: 35px;
  }

  .tech-icon i {
    font-size: 18px;
  }

  .tech-card h5 {
    font-size: 0.75rem;
    margin: 6px 0 2px 0;
  }

  .tech-card p {
    font-size: 0.65rem;
    -webkit-line-clamp: 1;
  }
}
</style>
