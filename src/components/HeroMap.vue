<template>
  <div class="hero-map-container">
    <video
      ref="backgroundVideo"
      :class="['background-video', { loaded: videoLoaded, error: videoError }]"
      src="/src/assets/home/bg-video2.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      @error="handleVideoError"
      @loadeddata="handleVideoLoaded"
    >
      <source src="/src/assets/home/bg-video2.mp4" type="video/mp4" />
      Seu navegador não suporta vídeos.
    </video>

    <div
      v-if="videoError"
      class="background-image-fallback"
      :style="{ backgroundImage: 'url(/logo-geoquantum.svg)' }"
    ></div>

    <div ref="mapContainer" class="map-container"></div>

    <div class="hero-overlay">
      <v-container>
        <v-row align="center" style="min-height: 80vh">
          <v-col cols="12" md="6" class="text-center text-md-left">
            <h1 class="text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow">
              Soluções em
              <span class="text-accent">Geoprocessamento</span>
            </h1>
            <p class="text-h6 text-white mb-6 typewriter-text">
              <span
                v-for="(word, index) in displayWords"
                :key="index"
                class="word"
                :style="{ animationDelay: `${index * 0.2}s` }"
              >
                {{ word }}<span v-if="index < displayWords.length - 1">&nbsp;</span>
              </span>
            </p>

            <div class="d-flex flex-column flex-sm-row gap-4 justify-center justify-md-start">
              <v-btn
                color="accent"
                size="large"
                variant="elevated"
                to="/contato"
                class="text-dark font-weight-bold"
              >
                <v-icon start>mdi-phone</v-icon>
                Solicitar Orçamento
              </v-btn>
            </div>

            <div class="d-flex flex-wrap justify-center justify-md-start mt-8 hero-stats">
              <div class="text-center me-6 mb-4">
                <div class="text-h4 font-weight-bold text-accent stat-number">20+</div>
                <div class="text-body-2 text-white">Clientes Fidelizados</div>
              </div>
              <div class="text-center me-6 mb-4">
                <div class="text-h4 font-weight-bold text-accent stat-number">1</div>
                <div class="text-body-2 text-white">Ano de Atuação</div>
              </div>
              <div class="text-center mb-4">
                <div class="text-h4 font-weight-bold text-accent stat-number">9</div>
                <div class="text-body-2 text-white">Serviços Especializados</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const backgroundVideo = ref<HTMLVideoElement>()
const videoLoaded = ref(false)
const videoError = ref(false)

const fullText =
  'Especialistas em análise geoespacial, mapeamento e desenvolvimento de sistemas para projetos de engenharia e meio ambiente.'
const displayWords = ref<string[]>([])

const typeWriter = () => {
  displayWords.value = []
  const words = fullText.split(' ')
  let i = 0
  const timer = setInterval(() => {
    if (i < words.length) {
      displayWords.value.push(words[i])
      i++
    } else {
      clearInterval(timer)
    }
  }, 200)
}

const handleVideoError = (event: Event) => {
  videoError.value = true
}

const handleVideoLoaded = () => {
  videoLoaded.value = true
}

onMounted(() => {
  setTimeout(() => {
    if (backgroundVideo.value) {
      const source = backgroundVideo.value.querySelector('source')

      backgroundVideo.value
        .play()
        .then(() => {})
        .catch((error) => {
          videoError.value = true
        })

      backgroundVideo.value.addEventListener('error', (e) => {
        videoError.value = true
      })

      backgroundVideo.value.addEventListener('loadeddata', () => {
        videoLoaded.value = true
      })

      backgroundVideo.value.addEventListener('canplay', () => {})

      backgroundVideo.value.addEventListener('playing', () => {})

      backgroundVideo.value.addEventListener('loadstart', () => {})

      backgroundVideo.value.addEventListener('progress', () => {})

      backgroundVideo.value.addEventListener('stalled', () => {})

      backgroundVideo.value.addEventListener('suspend', () => {})
    }
  }, 100)

  setTimeout(() => {
    typeWriter()
  }, 500)
})

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/pdf-institucional-geoquantum.pdf'
  link.download = 'GeoQuantum-Institucional.pdf'
  link.click()
}
</script>

<style scoped>
.hero-map-container {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 1;
  transition:
    opacity 0.8s ease-in-out,
    filter 0.5s ease-in-out;
  filter: brightness(0.9) contrast(1.2) saturate(1.1);
}

.background-video.loaded {
  opacity: 0.8;
}

.background-video.error {
  opacity: 0;
}

.background-image-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  opacity: 0.3;
  filter: brightness(0.8) contrast(1.2);
}

.map-container {
  display: none;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(26, 54, 93, 0.8) 0%,
    rgba(45, 90, 135, 0.8) 50%,
    rgba(26, 54, 93, 0.9) 100%
  );
  z-index: 2;
  display: flex;
  align-items: center;
  backdrop-filter: blur(2px);
}

.border-white {
  border-color: white !important;
}

.text-shadow {
  text-shadow: 0 5px 4px rgba(0, 0, 0, 0.6);
}

.typewriter-text {
  position: relative;
  overflow: hidden;
}

.typewriter-text::after {
  position: absolute;
  right: -2px;
  animation: blink 1s infinite;
  color: #64b5f6;
}

.word {
  display: inline-block;
  opacity: 0;
  animation: fadeInWord 0.3s ease-in forwards;
  margin-right: 4px;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

@keyframes fadeInWord {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 599.98px) {
  .hero-map-container {
    height: 60vh;
    min-height: 400px;
  }

  .hero-overlay {
    background: linear-gradient(135deg, rgba(26, 54, 93, 0.9) 0%, rgba(45, 90, 135, 0.9) 100%);
    padding: 1rem;
  }

  .background-video {
    opacity: 0.6;
  }

  .text-h2 {
    font-size: 1.75rem !important;
    line-height: 1.2 !important;
    margin-bottom: 1rem !important;
  }

  .text-h6 {
    font-size: 1rem !important;
    line-height: 1.4 !important;
    margin-bottom: 1.5rem !important;
  }

  .text-h4 {
    font-size: 1.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .text-body-2 {
    font-size: 0.875rem !important;
    line-height: 1.3 !important;
  }

  .d-flex.flex-wrap {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1.5rem !important;
  }

  .d-flex.flex-wrap > div {
    margin-right: 0 !important;
    margin-bottom: 0.75rem !important;
    text-align: center;
    width: 100%;
  }

  .d-flex.flex-wrap > div:last-child {
    margin-bottom: 0 !important;
  }

  .v-btn {
    width: 100% !important;
    height: 48px !important;
    font-size: 0.875rem !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }

  .v-btn .v-icon {
    font-size: 18px !important;
  }

  .hero-overlay .v-container {
    padding: 0;
  }

  .hero-overlay .v-row {
    min-height: 70vh;
    align-items: center;
  }

  .hero-overlay .v-col {
    padding: 0;
  }

  .typewriter-text {
    font-size: 0.875rem !important;
    line-height: 1.4 !important;
    margin-bottom: 1.5rem !important;
  }

  .word {
    margin-right: 2px !important;
  }

  .text-shadow {
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.7);
  }
}

@media (min-width: 600px) and (max-width: 959.98px) {
  .hero-map-container {
    height: 70vh;
    min-height: 500px;
  }

  .hero-overlay {
    background: linear-gradient(135deg, rgba(26, 54, 93, 0.85) 0%, rgba(45, 90, 135, 0.85) 100%);
  }

  .background-video {
    opacity: 0.7;
  }

  .text-h2 {
    font-size: 2.5rem !important;
  }

  .text-h6 {
    font-size: 1.125rem !important;
  }

  .hero-overlay .v-col {
    padding-left: 2rem;
  }
}

@media (min-width: 960px) {
  .hero-map-container {
    height: 80vh;
    min-height: 600px;
  }

  .hero-overlay {
    background: linear-gradient(135deg, rgba(26, 54, 93, 0.8) 0%, rgba(45, 90, 135, 0.8) 50%, rgba(26, 54, 93, 0.9) 100%);
  }

  .background-video {
    opacity: 0.8;
  }

  .text-h2 {
    font-size: 3rem !important;
  }

  .text-h6 {
    font-size: 1.25rem !important;
  }

  .hero-overlay .v-col {
    padding-left: 4rem;
  }

  .hero-overlay .v-container {
    padding-left: 2rem;
  }
}

@media (min-width: 1200px) {
  .hero-overlay .v-col {
    padding-left: 6rem;
  }

  .hero-overlay .v-container {
    padding-left: 3rem;
  }
}

@media (min-width: 1400px) {
  .hero-overlay .v-col {
    padding-left: 8rem;
  }

  .hero-overlay .v-container {
    padding-left: 4rem;
  }
}

@media (max-width: 768px) {
  .hero-map-container {
    height: 70vh;
  }

  .hero-overlay {
    background: linear-gradient(135deg, rgba(26, 54, 93, 0.85) 0%, rgba(45, 90, 135, 0.85) 100%);
  }

  .background-video {
    opacity: 0.7;
  }
}

.background-video:not([src]) {
  opacity: 0;
}

.background-video::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(26, 54, 93, 0.3) 0%, rgba(45, 90, 135, 0.3) 100%);
  pointer-events: none;
  z-index: 1;
}
</style>
