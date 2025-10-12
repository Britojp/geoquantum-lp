<template>
  <section class="cta-section py-16 py-sm-12 py-md-16 bg-gradient-primary">
    <div class="cta-background-overlay"></div>
    <v-container class="mobile-padding">
      <v-row class="text-center justify-center">
        <v-col cols="12" lg="10" class="mx-auto">
          <div class="cta-decoration">
            <div class="cta-dot" :style="{ animationDelay: '0.1s' }"></div>
            <div class="cta-dot" :style="{ animationDelay: '0.3s' }"></div>
            <div class="cta-dot" :style="{ animationDelay: '0.5s' }"></div>
            <div class="cta-line" :style="{ animationDelay: '0.7s' }"></div>
          </div>

          <div class="cta-content animate-fade-in-up" :style="{ animationDelay: '0.2s' }">
            <h2
              class="text-h2 text-h3-sm text-h2-md font-weight-bold text-white mb-4 mobile-title text-shadow"
            >
              {{ title }}
            </h2>
            <p
              class="text-h5 text-h6-sm text-h5-md text-grey-lighten-2 mb-8 mobile-text max-width-800 mx-auto"
            >
              {{ subtitle }}
            </p>

            <div
              class="cta-stats mb-8 animate-fade-in-up"
              :style="{ animationDelay: '0.4s' }"
              v-if="stats && stats.length"
            >
              <div class="stats-row">
                <div v-for="(s, idx) in stats" :key="idx" class="stat-item-cta">
                  <div class="stat-number">{{ s.number }}</div>
                  <div class="stat-label">{{ s.label }}</div>
                </div>
              </div>
            </div>

            <div class="cta-actions animate-fade-in-up" :style="{ animationDelay: '0.6s' }">
              <div class="d-flex flex-column flex-sm-row gap-4 gap-sm-6 justify-center mobile-flex">
                <v-btn
                  :color="primary.color"
                  size="x-large"
                  size-sm="large"
                  variant="elevated"
                  :to="primary.to"
                  class="text-dark font-weight-bold w-full w-sm-auto mobile-btn touch-optimized cta-primary-btn"
                >
                  <v-icon start size="24">{{ primary.icon }}</v-icon>
                  {{ primary.label }}
                </v-btn>

                <v-btn
                  size="x-large"
                  size-sm="large"
                  variant="outlined"
                  :to="secondary.to"
                  class="text-white border-white documents-btn w-full w-sm-auto mobile-btn touch-optimized cta-secondary-btn"
                >
                  <v-icon start size="24">{{ secondary.icon }}</v-icon>
                  {{ secondary.label }}
                </v-btn>
              </div>
            </div>

            <div class="cta-quick-contact" v-if="contactChips && contactChips.length">
              <span class="chip" v-for="(c, idx) in contactChips" :key="idx">
                <v-icon size="18">{{ c.icon }}</v-icon>
                {{ c.text }}
              </span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
type StatItem = { number: string | number; label: string }
type ChipItem = { icon: string; text: string }
type ButtonConf = { to: string; label: string; icon: string; color?: string }

const props = defineProps<{
  title?: string
  subtitle?: string
  stats?: StatItem[]
  contactChips?: ChipItem[]
  primary?: ButtonConf
  secondary?: ButtonConf
}>()

const title = props.title ?? 'Pronto para Iniciar Seu Projeto?'
const subtitle =
  props.subtitle ??
  'Entre em contato conosco e descubra como podemos ajudar você a transformar seus dados geoespaciais em insights valiosos para o seu negócio.'
const stats = props.stats ?? [
  { number: '24', label: 'Resposta Rápida' },
  { number: '100%', label: 'Satisfação' },
  { number: '10', label: 'Anos de Experiência' },
]

const primary = props.primary ?? {
  to: '/contato',
  label: 'Solicitar Orçamento',
  icon: 'mdi-phone',
  color: 'accent',
}
const secondary = props.secondary ?? {
  to: '/documentos',
  label: 'Ver Documentação',
  icon: 'mdi-file-document-outline',
}
const contactChips = props.contactChips ?? [
  { icon: 'mdi-email', text: 'contato@geoquantum.com' },
  { icon: 'mdi-phone', text: '+55 (11) 99999-9999' },
  { icon: 'mdi-clock', text: 'Seg-Sex: 8h às 18h' },
]
</script>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  position: relative;
  overflow: hidden;
}

.cta-background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/src/assets/home/andes-2975217_1280.jpg') center/cover;
  opacity: 0.1;
  z-index: 1;
}

.cta-section .v-container {
  position: relative;
  z-index: 2;
}

.cta-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.cta-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #d4a574;
  border-radius: 50%;
  animation: ctaPulse 2s ease-in-out infinite;
}

.cta-dot:nth-child(1) {
  top: 20%;
  left: 10%;
}
.cta-dot:nth-child(2) {
  top: 60%;
  right: 15%;
}
.cta-dot:nth-child(3) {
  bottom: 30%;
  left: 20%;
}

.cta-line {
  position: absolute;
  top: 40%;
  left: 5%;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #d4a574, transparent);
  transform: rotate(-45deg);
  animation: ctaLine 3s ease-in-out infinite;
}

@keyframes ctaPulse {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes ctaLine {
  0%,
  100% {
    opacity: 0.4;
    transform: rotate(-45deg) scaleX(1);
  }
  50% {
    opacity: 0.8;
    transform: rotate(-45deg) scaleX(1.2);
  }
}

.cta-content {
  position: relative;
  z-index: 2;
}
.max-width-800 {
  max-width: 800px;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #d4a574;
  margin-bottom: 0.5rem;
}
.stat-label {
  font-size: 0.875rem;
  color: #e2e8f0;
  font-weight: 500;
}

.cta-actions {
  margin-bottom: 2rem;
}
.cta-actions .d-flex {
  gap: 12px;
}
@media (min-width: 600px) {
  .cta-actions .d-flex {
    gap: 16px;
  }
}
.cta-primary-btn {
  background: #d4a574 !important;
  color: #2e3a47 !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 20px rgba(212, 165, 116, 0.3);
  transition: all 0.3s ease;
}
.cta-primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(212, 165, 116, 0.4);
}
.cta-secondary-btn {
  border: 2px solid white !important;
  background: transparent !important;
  color: white !important;
  font-weight: 600 !important;
  transition: all 0.3s ease;
}
.cta-secondary-btn:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.2);
}

.cta-quick-contact {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}
.cta-quick-contact .chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #ffffff;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.85rem;
}
</style>
