<template>
  <div
    class="project-card"
    @click="handleCardClick"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :class="{ 'is-hovered': isHovered }"
  >
    <div class="card-glow"></div>

    <div class="project-image-container">
      <div class="tech-grid-pattern"></div>
      <img :src="project.image" :alt="project.title" class="project-image" loading="lazy" />
      <div class="image-gradient"></div>

      <div class="project-badges">
        <div class="year-badge">
          <i class="mdi mdi-calendar"></i>
          <span>{{ project.year }}</span>
        </div>
        <div
          class="category-badge"
          :style="{ background: getCategoryGradient(project.category.color) }"
        >
          {{ project.category.name }}
        </div>
      </div>

      <div class="hover-overlay">
        <div class="overlay-icon">
          <i class="mdi mdi-eye"></i>
        </div>
        <p class="overlay-text">Clique para ver detalhes</p>
      </div>
    </div>

    <div class="project-content">
      <div class="content-header">
        <h3 class="project-title">{{ project.title }}</h3>
        <div class="title-underline"></div>
      </div>

      <p class="project-description">{{ project.description }}</p>

      <div class="project-info">
        <div class="info-item">
          <i class="mdi mdi-account-tie"></i>
          <span class="info-label">Cliente:</span>
          <span class="info-value">{{ project.client }}</span>
        </div>
        <div class="info-item">
          <i class="mdi mdi-clock-outline"></i>
          <span class="info-label">Duração:</span>
          <span class="info-value">{{ project.duration }}</span>
        </div>
      </div>

      <div class="technologies-tags">
        <div class="tags-header">
          <i class="mdi mdi-code-tags"></i>
          <span>Tecnologias</span>
        </div>
        <div class="tags-list">
          <span
            v-for="(tech, index) in project.technologies.slice(0, 4)"
            :key="index"
            class="tech-tag"
          >
            {{ tech }}
          </span>
          <span v-if="project.technologies.length > 4" class="tech-tag more-tag">
            +{{ project.technologies.length - 4 }}
          </span>
        </div>
      </div>

      <div class="results-preview" v-if="project.results && project.results.length > 0">
        <div class="results-header">
          <i class="mdi mdi-chart-line"></i>
          <span>Resultados Alcançados</span>
        </div>
        <div class="results-list">
          <div
            v-for="(result, index) in project.results.slice(0, 2)"
            :key="index"
            class="result-item"
          >
            <i class="mdi mdi-check-circle"></i>
            <span>{{ result }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card-footer">
      <div class="action-button">
        <span class="button-text">Ver Detalhes Completos</span>
        <div class="button-icon-wrapper">
          <div class="icon-circle"></div>
          <i class="mdi mdi-arrow-right button-icon"></i>
        </div>
      </div>
    </div>

    <div class="corner-decoration"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: { name: string; color: string }
  year: string
  client: string
  duration: string
  team: string
  budget: string
  challenges: string[]
  results: string[]
  technologies: string[]
  services: string[]
  location: { lat: number; lng: number }
}

interface Props {
  project: Project
}

const props = defineProps<Props>()

const emit = defineEmits<{
  click: [project: Project]
}>()

const isHovered = ref(false)

const getCategoryGradient = (color: string): string => {
  const gradients: { [key: string]: string } = {
    primary: 'linear-gradient(135deg, #1a365d 0%, #2d5a87 100%)',
    success: 'linear-gradient(135deg, #2d5a87 0%, #1FA7A1 100%)',
    info: 'linear-gradient(135deg, #4a90e2 0%, #5cb3cc 100%)',
    warning: 'linear-gradient(135deg, #f39c12 0%, #FFC857 100%)',
    error: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
  }
  return gradients[color] || gradients.primary
}

const handleCardClick = () => {
  emit('click', props.project)
}
</script>

<style scoped>
.project-card {
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 24px;
  box-shadow:
    0 4px 20px rgba(26, 54, 93, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: 1px solid rgba(26, 54, 93, 0.08);
  height: 100%;
  min-height: 650px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1a365d 0%, #2d5a87 50%, #1fa7a1 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
}

.project-card.is-hovered::before {
  transform: scaleX(1);
}

.project-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow:
    0 30px 60px rgba(26, 54, 93, 0.15),
    0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: rgba(26, 54, 93, 0.2);
}

.card-glow {
  position: absolute;
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  background: radial-gradient(circle, rgba(31, 167, 161, 0.15) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.project-card.is-hovered .card-glow {
  opacity: 1;
}

.project-image-container {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  flex-shrink: 0;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.95);
}

.project-card:hover .project-image {
  transform: scale(1.1);
  filter: brightness(1.05);
}

.tech-grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(26, 54, 93, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 54, 93, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 1;
}

.project-card:hover .tech-grid-pattern {
  opacity: 1;
}

.image-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: linear-gradient(to top, rgba(26, 54, 93, 0.6) 0%, transparent 100%);
  pointer-events: none;
  z-index: 2;
}

.project-badges {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 3;
}

.year-badge {
  background: rgba(26, 54, 93, 0.9);
  backdrop-filter: blur(10px);
  color: white;
  padding: 10px 18px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(26, 54, 93, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.year-badge i {
  font-size: 18px;
}

.category-badge {
  color: white;
  padding: 10px 18px;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.95) 0%, rgba(45, 90, 135, 0.95) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.98);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 4;
}

.project-card:hover .hover-overlay {
  opacity: 1;
  transform: scale(1);
}

.overlay-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, 0.3);
  transition: all 0.4s ease;
  animation: iconPulse 2s ease-in-out infinite;
}

@keyframes iconPulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
}

.overlay-icon i {
  font-size: 40px;
  color: white;
}

.overlay-text {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 28px;
  gap: 20px;
}

.content-header {
  margin-bottom: 4px;
}

.project-title {
  font-size: 1.45rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 12px 0;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.project-card:hover .project-title {
  color: #1a365d;
}

.title-underline {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #1a365d 0%, #1fa7a1 100%);
  border-radius: 3px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .title-underline {
  width: 120px;
}

.project-description {
  color: #4a5568;
  line-height: 1.7;
  margin: 0;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: rgba(26, 54, 93, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(26, 54, 93, 0.08);
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
}

.info-item i {
  font-size: 18px;
  color: #1a365d;
  flex-shrink: 0;
}

.info-label {
  color: #6b7280;
  font-weight: 500;
  flex-shrink: 0;
}

.info-value {
  color: #1a202c;
  font-weight: 600;
}

.technologies-tags {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tags-header {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1a365d;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tags-header i {
  font-size: 18px;
  color: #1fa7a1;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: rgba(26, 54, 93, 0.08);
  color: #1a365d;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid rgba(26, 54, 93, 0.15);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(26, 54, 93, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(26, 54, 93, 0.1);
}

.more-tag {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  color: white;
  border-color: transparent;
}

.results-preview {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid rgba(26, 54, 93, 0.08);
}

.results-header {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1a365d;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.results-header i {
  font-size: 18px;
  color: #1fa7a1;
}

.results-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.result-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.85rem;
  color: #4a5568;
  transition: all 0.3s ease;
}

.project-card:hover .result-item {
  color: #1a202c;
  transform: translateX(5px);
}

.result-item i {
  font-size: 16px;
  color: #1fa7a1;
  flex-shrink: 0;
  margin-top: 2px;
}

.card-footer {
  padding: 24px 28px;
  background: linear-gradient(to top, rgba(26, 54, 93, 0.04) 0%, transparent 100%);
  border-top: 1px solid rgba(26, 54, 93, 0.08);
  transition: background 0.3s ease;
}

.project-card:hover .card-footer {
  background: linear-gradient(to top, rgba(26, 54, 93, 0.08) 0%, transparent 100%);
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1a365d;
  font-weight: 700;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  padding: 12px 0;
}

.project-card:hover .action-button {
  color: #2d5a87;
  transform: translateX(5px);
}

.button-text {
  transition: all 0.3s ease;
}

.button-icon-wrapper {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 50%;
  opacity: 0.15;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .icon-circle {
  opacity: 0.25;
  transform: scale(1.3);
}

.button-icon {
  font-size: 24px;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.project-card:hover .button-icon {
  transform: translateX(6px);
}

.corner-decoration {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, transparent 0%, rgba(26, 54, 93, 0.03) 100%);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  pointer-events: none;
  transition: all 0.4s ease;
}

.project-card:hover .corner-decoration {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, transparent 0%, rgba(26, 54, 93, 0.06) 100%);
}

@media (max-width: 599.98px) {
  .project-card {
    min-height: 600px;
    border-radius: 20px;
  }

  .project-image-container {
    height: 220px;
  }

  .project-content {
    padding: 20px;
    gap: 16px;
  }

  .project-title {
    font-size: 1.25rem;
  }

  .project-description {
    font-size: 0.9rem;
    -webkit-line-clamp: 3;
  }

  .project-badges {
    top: 16px;
    left: 16px;
    right: 16px;
  }

  .year-badge {
    padding: 8px 14px;
    font-size: 0.8rem;
  }

  .category-badge {
    padding: 8px 14px;
    font-size: 0.75rem;
  }

  .card-footer {
    padding: 18px 20px;
  }

  .action-button {
    font-size: 0.95rem;
  }

  .button-icon-wrapper {
    width: 35px;
    height: 35px;
  }

  .overlay-icon {
    width: 70px;
    height: 70px;
  }

  .overlay-icon i {
    font-size: 32px;
  }

  .overlay-text {
    font-size: 1rem;
  }
}

@media (min-width: 600px) and (max-width: 959.98px) {
  .project-card {
    min-height: 625px;
  }

  .project-image-container {
    height: 250px;
  }

  .project-content {
    padding: 24px;
  }

  .project-title {
    font-size: 1.35rem;
  }
}

@media (min-width: 960px) {
  .project-card {
    min-height: 650px;
  }

  .project-image-container {
    height: 280px;
  }
}

@media (hover: none) and (pointer: coarse) {
  .project-card:hover {
    transform: translateY(-8px);
  }

  .hover-overlay {
    opacity: 0 !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-image,
  .title-underline,
  .button-icon {
    transition: none;
  }

  .overlay-icon {
    animation: none;
  }
}
</style>
