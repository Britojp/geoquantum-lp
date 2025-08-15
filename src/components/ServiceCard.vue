<template>
  <div class="service-card" @click="openModal">
    <div class="card-header">
      <div class="service-icon">
        <i :class="getServiceIcon(service.id)"></i>
      </div>
      <div class="service-number">{{ service.id.toString().padStart(2, '0') }}</div>
    </div>
    <div class="service-content">
      <h3 class="service-title">{{ service.title }}</h3>
      <p class="service-description">{{ service.description }}</p>
    </div>
    <div class="service-overlay">
      <span class="learn-more">Saiba Mais</span>
    </div>
  </div>

  <!-- Modal Customizado -->
  <div v-if="isModalOpen" class="service-modal-overlay" @click="closeModal">
    <div class="service-modal" @click.stop>
      <div class="modal-header">
        <h2>{{ service.title }}</h2>
        <button class="close-btn" @click="closeModal">
          <i class="mdi mdi-close"></i>
        </button>
      </div>
      <div class="modal-content">
        <div class="service-number-large">{{ service.id.toString().padStart(2, '0') }}</div>
        <p class="modal-description">{{ service.fullDescription }}</p>
        <div class="modal-features" v-if="service.features">
          <h4>Características:</h4>
          <ul>
            <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button class="contact-btn" @click="goToContact">
          <i class="mdi mdi-email"></i>
          Solicitar Orçamento
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Service {
  id: number
  title: string
  description: string
  fullDescription: string
  features?: string[]
}

interface Props {
  service: Service
}

const props = defineProps<Props>()
const router = useRouter()
const isModalOpen = ref(false)

const getServiceIcon = (id: number): string => {
  const icons: { [key: number]: string } = {
    1: 'mdi mdi-map-marker-multiple',
    2: 'mdi mdi-chart-areaspline',
    3: 'mdi mdi-earth',
    4: 'mdi mdi-cog',
    5: 'mdi mdi-language-python',
    6: 'mdi mdi-school',
    7: 'mdi mdi-vector-polygon',
    8: 'mdi mdi-target',
    9: 'mdi mdi-leaf',
  }
  return icons[id] || 'mdi mdi-cog'
}

const openModal = () => {
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

const goToContact = () => {
  closeModal()
  router.push({
    path: '/contato',
    query: { service: props.service.title.toLowerCase().replace(/\s+/g, '-') },
  })
}
</script>

<style scoped>
.service-card {
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  border: 1px solid rgba(11, 95, 165, 0.1);
  height: 280px;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(11, 95, 165, 0.15);
  border-color: rgba(11, 95, 165, 0.3);
}

.service-card:hover .service-overlay {
  opacity: 1;
  transform: translateY(0);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.service-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.service-icon i {
  font-size: 28px;
  color: white;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.service-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(11, 95, 165, 0.1);
  font-family: 'Courier New', monospace;
  line-height: 1;
  flex-shrink: 0;
}

.service-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 0;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2e3a47;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.service-description {
  color: #6c757d;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.service-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
  color: white;
  padding: 16px;
  text-align: center;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
}

.learn-more {
  font-weight: 600;
  font-size: 0.95rem;
}

/* Modal Styles */
.service-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(8px);
}

.service-modal {
  background: white;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: modalSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-header {
  padding: 24px 24px 16px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
  color: #2e3a47;
  font-size: 1.5rem;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: #6c757d;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: #f8f9fa;
  color: #2e3a47;
}

.modal-content {
  padding: 24px;
}

.service-number-large {
  font-size: 4rem;
  font-weight: 700;
  color: rgba(11, 95, 165, 0.1);
  font-family: 'Courier New', monospace;
  text-align: center;
  margin-bottom: 20px;
}

.modal-description {
  color: #2e3a47;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 24px;
}

.modal-features h4 {
  color: #0b5fa5;
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.modal-features ul {
  list-style: none;
  padding: 0;
}

.modal-features li {
  padding: 8px 0;
  color: #2e3a47;
  position: relative;
  padding-left: 20px;
}

.modal-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #1fa7a1;
  font-weight: bold;
}

.modal-footer {
  padding: 16px 24px 24px;
  border-top: 1px solid #e9ecef;
  text-align: center;
}

.contact-btn {
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(11, 95, 165, 0.2);
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(11, 95, 165, 0.3);
}

.contact-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(11, 95, 165, 0.3);
}

.contact-btn i {
  font-size: 18px;
}

/* Responsive */
@media (max-width: 768px) {
  .service-card {
    padding: 20px;
    height: 260px;
  }

  .service-icon {
    width: 50px;
    height: 50px;
  }

  .service-icon i {
    font-size: 24px;
  }

  .service-title {
    font-size: 1.1rem;
  }

  .service-number {
    font-size: 2rem;
  }

  .service-modal {
    margin: 20px;
    max-height: calc(100vh - 40px);
  }

  .modal-header,
  .modal-content,
  .modal-footer {
    padding: 20px;
  }
}
</style>
