<template>
  <section class="sectors-section py-16 py-sm-12 py-md-16 bg-grey-lighten-4 animate-on-scroll">
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
          v-for="sector in sectors"
          :key="sector.name"
          cols="12"
          sm="6"
          lg="4"
          class="mb-6 mb-sm-4 mb-md-6"
        >
          <div class="sector-card animate-on-scroll mobile-card touch-optimized">
            <div class="sector-image-container">
              <img :src="sector.image" :alt="sector.name" class="sector-image" loading="lazy" />
              <div class="sector-overlay">
                <div class="sector-icon">
                  <i :class="sector.icon"></i>
                </div>
              </div>
            </div>
            <div class="sector-content">
              <div class="sector-header">
                <h4>{{ sector.name }}</h4>
                <span class="projects-badge">{{ sector.projects }} projetos</span>
              </div>
              <p>{{ sector.description }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface Sector {
  name: string
  icon: string
  description: string
  image: string
  projects: string
}

interface Props {
  title?: string
  subtitle?: string
  sectors: Sector[]
}

withDefaults(defineProps<Props>(), {
  title: 'Setores de Atuação',
  subtitle: 'Atendemos diversos setores com soluções personalizadas',
})
</script>

<style scoped>
/* Sectors Section */
.sectors-section {
  background: #f8f9fa;
}

.sector-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
  border: 1px solid rgba(26, 54, 93, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sector-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(26, 54, 93, 0.15);
  border-color: rgba(26, 54, 93, 0.3);
}

.sector-image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;
}

.sector-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.sector-card:hover .sector-image {
  transform: scale(1.05);
}

.sector-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.8) 0%, rgba(45, 90, 135, 0.6) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.sector-card:hover .sector-overlay {
  opacity: 1;
}

.sector-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.sector-card:hover .sector-icon {
  transform: scale(1.1) rotate(5deg);
  background: rgba(255, 255, 255, 0.3);
}

.sector-content {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sector-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.sector-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
  flex-shrink: 0;
}

.projects-badge {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 20px;
  white-space: nowrap;
}

.sector-card p {
  color: #4a5568;
  line-height: 1.6;
  flex: 1;
  margin: 0;
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
  .sector-image-container {
    height: 180px;
  }

  .sector-icon {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .sector-image-container {
    height: 160px;
  }

  .sector-icon {
    width: 45px;
    height: 45px;
    font-size: 20px;
  }
}
</style>
