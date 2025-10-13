<template>
  <section class="certifications-section">
    <div class="section-background">
      <div class="bg-pattern"></div>
    </div>

    <v-container class="mobile-padding">
      <div class="section-header">
        <h2 class="section-title">Certificações e Parcerias</h2>
        <p class="section-subtitle">
          Reconhecimento e qualidade garantida pelos principais órgãos e instituições do setor
        </p>
      </div>

      <div class="certifications-grid">
        <div
          v-for="(cert, index) in certifications"
          :key="index"
          class="cert-card"
          :style="{ '--delay': `${index * 0.1}s` }"
        >
          <div class="cert-image-wrapper">
            <div class="cert-icon">
              <i :class="cert.icon"></i>
            </div>
            <div v-if="cert.verified" class="verified-badge">
              <i class="mdi mdi-check-decagram"></i>
            </div>
          </div>

          <div class="cert-content">
            <h3 class="cert-title">{{ cert.title }}</h3>
            <p class="cert-description">{{ cert.description }}</p>

            <div v-if="cert.year" class="cert-meta">
              <span class="cert-year">
                <i class="mdi mdi-calendar"></i>
                Desde {{ cert.year }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="trust-badges">
        <div class="trust-item">
          <div class="trust-icon">
            <i class="mdi mdi-shield-check"></i>
          </div>
          <div class="trust-text">
            <strong>100% Seguro</strong>
            <span>Dados protegidos</span>
          </div>
        </div>

        <div class="trust-item">
          <div class="trust-icon">
            <i class="mdi mdi-certificate"></i>
          </div>
          <div class="trust-text">
            <strong>Certificado</strong>
            <span>Qualidade garantida</span>
          </div>
        </div>

        <div class="trust-item">
          <div class="trust-icon">
            <i class="mdi mdi-account-group"></i>
          </div>
          <div class="trust-text">
            <strong>20+ Clientes</strong>
            <span>Confiança comprovada</span>
          </div>
        </div>

        <div class="trust-item">
          <div class="trust-icon">
            <i class="mdi mdi-lightning-bolt"></i>
          </div>
          <div class="trust-text">
            <strong>Suporte Rápido</strong>
            <span>Resposta em 24h</span>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface Certification {
  title: string
  description: string
  icon: string
  year?: string
  verified?: boolean
  image?: string
}

interface Props {
  certifications?: Certification[]
}

const defaultCertifications: Certification[] = [
  {
    title: 'QGIS Certified Professional',
    description: 'Profissionais certificados no uso avançado de QGIS para análises geoespaciais complexas',
    icon: 'mdi mdi-map',
    year: '2024',
    verified: true,
  },
  {
    title: 'Python Geospatial Developer',
    description: 'Especialização em desenvolvimento de soluções automatizadas com Python e bibliotecas GIS',
    icon: 'mdi mdi-language-python',
    year: '2024',
    verified: true,
  },
  {
    title: 'Sensoriamento Remoto Avançado',
    description: 'Capacitação em processamento e análise de imagens de satélite e drones',
    icon: 'mdi mdi-satellite-variant',
    year: '2024',
    verified: true,
  },
  {
    title: 'Parceiro Google Earth Engine',
    description: 'Acesso a ferramentas avançadas de processamento de dados geoespaciais em nuvem',
    icon: 'mdi mdi-earth',
    year: '2024',
    verified: false,
  },
]

withDefaults(defineProps<Props>(), {
  certifications: () => defaultCertifications,
})
</script>

<style scoped>
.certifications-section {
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.section-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%);
}

.bg-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(26, 54, 93, 0.02) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(31, 167, 161, 0.02) 0%, transparent 50%);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.cert-card {
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.08);
  border-radius: 1.25rem;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInScale 0.6s ease-out backwards;
  animation-delay: var(--delay);
  position: relative;
  overflow: hidden;
}

.cert-card::before {
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

.cert-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(26, 54, 93, 0.12);
  border-color: rgba(26, 54, 93, 0.15);
}

.cert-card:hover::before {
  transform: scaleX(1);
}

.cert-image-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
}

.cert-icon {
  width: 5rem;
  height: 5rem;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.08) 0%, rgba(31, 167, 161, 0.08) 100%);
  border: 2px solid rgba(26, 54, 93, 0.1);
  border-radius: 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.cert-card:hover .cert-icon {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-color: transparent;
  transform: scale(1.05);
  box-shadow: 0 12px 32px rgba(26, 54, 93, 0.25);
}

.cert-icon i {
  font-size: 2.5rem;
  color: #1a365d;
  transition: color 0.3s ease;
}

.cert-card:hover .cert-icon i {
  color: #ffffff;
}

.verified-badge {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #1fa7a1 0%, #2d5a87 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(31, 167, 161, 0.4);
}

.verified-badge i {
  font-size: 1.125rem;
  color: #ffffff;
}

.cert-content {
  text-align: left;
}

.cert-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.cert-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1rem;
}

.cert-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cert-year {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1fa7a1;
}

.cert-year i {
  font-size: 1rem;
}

.trust-badges {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  padding: 3rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.trust-badges::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 30px 30px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.trust-icon {
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.trust-item:hover .trust-icon {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.trust-icon i {
  font-size: 1.75rem;
  color: #ffffff;
}

.trust-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.trust-text strong {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffffff;
}

.trust-text span {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .certifications-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .cert-card {
    padding: 1.75rem;
  }

  .trust-badges {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .section-header {
    margin-bottom: 2.5rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .cert-icon {
    width: 4.5rem;
    height: 4.5rem;
  }

  .cert-icon i {
    font-size: 2.25rem;
  }

  .trust-item {
    flex-direction: column;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cert-card {
    animation: none;
  }
}
</style>

