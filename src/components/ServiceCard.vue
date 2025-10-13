<template>
  <article class="service-card">
    <div class="card-image">
      <img 
        v-if="service.image && !imageError" 
        :src="service.image" 
        :alt="service.title"
        loading="lazy"
        @error="handleImageError"
        @load="handleImageLoad"
      />
      <div v-if="!service.image || imageError" class="image-placeholder">
        <i :class="service.icon || 'mdi-image'"></i>
      </div>
      <div class="image-overlay"></div>
      <div class="card-icon">
        <i :class="service.icon || 'mdi-cog'"></i>
      </div>
    </div>

    <div class="card-content">
      <h3 class="card-title">{{ service.title }}</h3>
      <p class="card-description">{{ service.description }}</p>

      <div v-if="service.features" class="card-features">
        <div
          v-for="(feature, index) in service.features?.slice(0, 3)"
          :key="index"
          class="feature-tag"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{{ feature }}</span>
        </div>
      </div>

      <router-link to="/servicos" class="card-link">
        <span>Saiba Mais</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </router-link>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Service {
  id: number
  title: string
  description: string
  image?: string
  icon?: string
  features?: string[]
}

defineProps<{
  service: Service
}>()

const imageLoaded = ref(false)
const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
  imageLoaded.value = false
}

const handleImageLoad = () => {
  imageLoaded.value = true
  imageError.value = false
}
</script>

<style scoped>
.service-card {
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.08);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service-card::before {
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

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(26, 54, 93, 0.12);
  border-color: rgba(26, 54, 93, 0.15);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.card-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.05) 0%, rgba(45, 90, 135, 0.05) 100%);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;
}

.service-card:hover .card-image img {
  transform: scale(1.05);
}

.image-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.08) 0%, rgba(45, 90, 135, 0.08) 100%);
}

.image-placeholder i {
  font-size: 4rem;
  color: rgba(26, 54, 93, 0.2);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(26, 54, 93, 0.3) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .image-overlay {
  opacity: 1;
}

.card-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.service-card:hover .card-icon {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
}

.card-icon i {
  font-size: 1.5rem;
  color: #1a365d;
  transition: color 0.3s ease;
}

.service-card:hover .card-icon i {
  color: #ffffff;
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.card-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.25rem;
  flex: 1;
}

.card-features {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.feature-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #2e3a47;
  font-weight: 500;
}

.feature-tag svg {
  flex-shrink: 0;
  stroke: #1fa7a1;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: transparent;
  border: 2px solid #1a365d;
  color: #1a365d;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  align-self: flex-start;
  position: relative;
  overflow: hidden;
}

.card-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #1a365d;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-link:hover::after {
  transform: scaleX(1);
}

.card-link:hover {
  background: rgba(26, 54, 93, 0.05);
}

.card-link svg {
  transition: transform 0.3s ease;
}

.card-link:hover svg {
  transform: translateX(0.25rem);
}

@media (min-width: 768px) {
  .card-image {
    height: 220px;
  }

  .card-content {
    padding: 2rem;
  }

  .card-title {
    font-size: 1.375rem;
  }

  .card-description {
    font-size: 1rem;
  }
}

@media (max-width: 479px) {
  .card-image {
    height: 180px;
  }

  .card-content {
    padding: 1.25rem;
  }

  .card-title {
    font-size: 1.125rem;
  }

  .card-description {
    font-size: 0.875rem;
  }

  .card-link {
    width: 100%;
    justify-content: center;
  }
}
</style>
