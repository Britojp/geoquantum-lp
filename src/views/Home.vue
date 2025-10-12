<template>
  <div class="home-page home-responsive mobile-scroll">
    <HeroMap />

    <!-- Seção de Serviços -->
    <section class="services-section py-16 py-sm-12 py-md-16 animate-on-scroll">
      <v-container class="mobile-padding">
        <div class="text-center mb-12 mb-sm-8 mb-md-12 animate-fade-in-up">
          <h2
            class="text-h3 text-h4-sm text-h3-md font-weight-bold text-primary mb-4 animate-slide-in-left mobile-title"
          >
            Nossos Serviços
          </h2>
          <p
            class="text-h6 text-body-1-sm text-h6-md text-grey-darken-1 max-width-600 mx-auto animate-slide-in-right mobile-text"
          >
            Oferecemos soluções completas em geoprocessamento e análise geoespacial para diversos
            setores e aplicações.
          </p>
        </div>

        <v-row class="mobile-grid">
          <v-col
            v-for="service in services"
            :key="service.id"
            cols="12"
            sm="6"
            lg="3"
            class="mb-6 mb-sm-4 mb-md-6 d-flex"
          >
            <ServiceCard :service="service" class="flex-grow-1 mobile-card touch-optimized" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Seção de Estatísticas -->
    <section class="stats-section py-16 py-sm-12 py-md-16 bg-primary animate-on-scroll">
      <v-container class="mobile-padding">
        <v-row class="text-center justify-center mobile-grid">
          <v-col cols="12" sm="6" lg="4" class="mb-6 mb-sm-4 mb-md-6">
            <div
              class="stat-item animate-fade-in-up mobile-card touch-optimized"
              :style="{ animationDelay: '0.1s' }"
            >
              <div
                class="text-h2 text-h3-sm text-h2-md font-weight-bold text-white mb-2 stat-number"
              >
                20+
              </div>
              <div class="text-h6 text-body-1-sm text-h6-md text-grey-lighten-2 mobile-text">
                Clientes Fidelizados
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" lg="4" class="mb-6 mb-sm-4 mb-md-6">
            <div
              class="stat-item animate-fade-in-up mobile-card touch-optimized"
              :style="{ animationDelay: '0.3s' }"
            >
              <div
                class="text-h2 text-h3-sm text-h2-md font-weight-bold text-white mb-2 stat-number"
              >
                1
              </div>
              <div class="text-h6 text-body-1-sm text-h6-md text-grey-lighten-2 mobile-text">
                Ano de Atuação
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" lg="4" class="mb-6 mb-sm-4 mb-md-6">
            <div
              class="stat-item animate-fade-in-up mobile-card touch-optimized"
              :style="{ animationDelay: '0.5s' }"
            >
              <div
                class="text-h2 text-h3-sm text-h2-md font-weight-bold text-white mb-2 stat-number"
              >
                9
              </div>
              <div class="text-h6 text-body-1-sm text-h6-md text-grey-lighten-2 mobile-text">
                Serviços Especializados
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Seção Sobre -->
    <section class="about-section py-16 py-sm-12 py-md-16 animate-on-scroll">
      <v-container class="mobile-padding">
        <v-row align="center">
          <v-col cols="12" lg="6" class="mb-6 mb-sm-4 mb-md-6 order-2 order-lg-1">
            <h2
              class="text-h3 text-h4-sm text-h3-md font-weight-bold text-primary mb-4 animate-slide-in-left mobile-title"
            >
              Sobre a GeoQuantum
            </h2>
            <p
              class="text-body-1 text-body-2-sm text-body-1-md mb-4 animate-fade-in-up mobile-text"
              :style="{ animationDelay: '0.2s' }"
            >
              Somos uma empresa especializada em geoprocessamento e análise geoespacial, com mais de
              10 anos de experiência no mercado. Nossa missão é fornecer soluções inovadoras que
              contribuam para o desenvolvimento sustentável.
            </p>
            <p
              class="text-body-1 text-body-2-sm text-body-1-md mb-6 animate-fade-in-up mobile-text"
              :style="{ animationDelay: '0.4s' }"
            >
              Atuamos em diversos setores, desde engenharia civil e ambiental até agricultura de
              precisão e planejamento urbano, sempre com foco na excelência técnica e na satisfação
              do cliente.
            </p>

            <!-- Elementos visuais tecnológicos -->
            <div class="tech-features mb-6 animate-fade-in-up" :style="{ animationDelay: '0.5s' }">
              <div class="tech-grid">
                <div class="tech-item">
                  <div class="tech-icon">
                    <v-icon color="primary" size="24">mdi-satellite-variant</v-icon>
                  </div>
                  <span class="tech-text">Sensoriamento Remoto</span>
                </div>
                <div class="tech-item">
                  <div class="tech-icon">
                    <v-icon color="primary" size="24">mdi-map-marker-multiple</v-icon>
                  </div>
                  <span class="tech-text">Sistemas GIS</span>
                </div>
                <div class="tech-item">
                  <div class="tech-icon">
                    <v-icon color="primary" size="24">mdi-chart-areaspline</v-icon>
                  </div>
                  <span class="tech-text">Análise Espacial</span>
                </div>
                <div class="tech-item">
                  <div class="tech-icon">
                    <v-icon color="primary" size="24">mdi-database</v-icon>
                  </div>
                  <span class="tech-text">Big Data Geo</span>
                </div>
              </div>
            </div>

            <v-btn
              color="primary"
              size="large"
              size-sm="default"
              variant="elevated"
              to="/sobre"
              class="animate-fade-in-up w-full w-sm-auto mobile-btn touch-optimized"
              :style="{ animationDelay: '0.6s' }"
            >
              Conheça Nossa História
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" lg="6" class="order-1 order-lg-2">
            <div
              class="about-visual-content animate-fade-in-up"
              :style="{ animationDelay: '0.8s' }"
            >
              <!-- Grid de imagens de serviços com logo em perspectiva -->
              <div class="image-grid">
                <div class="image-item service-1">
                  <img
                    src="/src/assets/home/agricultura-precisao.jpg"
                    alt="Agricultura de Precisão"
                    class="service-img"
                  />
                  <div class="image-overlay">
                    <v-icon color="white" size="20">mdi-leaf</v-icon>
                  </div>
                  <div class="service-label">Agricultura de Precisão</div>
                </div>

                <div class="image-item service-2">
                  <img
                    src="/src/assets/home/Arc_De_Triomphe.jpg"
                    alt="Planejamento Urbano"
                    class="service-img"
                  />
                  <div class="image-overlay">
                    <v-icon color="white" size="20">mdi-city</v-icon>
                  </div>
                  <div class="service-label">Planejamento Urbano</div>
                </div>

                <div class="image-item service-3">
                  <img
                    src="/src/assets/home/monitoramento-ambiental.jpg"
                    alt="Monitoramento Ambiental"
                    class="service-img"
                  />
                  <div class="image-overlay">
                    <v-icon color="white" size="20">mdi-tree</v-icon>
                  </div>
                  <div class="service-label">Monitoramento Ambiental</div>
                </div>

                <div class="image-item service-4">
                  <img
                    src="/src/assets/home/Agricultura-de-Precisao.png"
                    alt="Tecnologia Agrícola"
                    class="service-img"
                  />
                  <div class="image-overlay">
                    <v-icon color="white" size="20">mdi-satellite-variant</v-icon>
                  </div>
                  <div class="service-label">Tecnologia Agrícola</div>
                </div>
              </div>

              <!-- Logo em perspectiva sobre as imagens -->
              <div class="logo-perspective">
                <img
                  src="/src/assets/main-logo-removebg-preview.png"
                  alt="GeoQuantum Logo"
                  class="perspective-logo animate-float"
                />
                <div class="logo-glow"></div>
              </div>

              <!-- Elementos decorativos tecnológicos -->
              <div class="tech-decoration">
                <div class="tech-dot" :style="{ animationDelay: '0.1s' }"></div>
                <div class="tech-dot" :style="{ animationDelay: '0.3s' }"></div>
                <div class="tech-dot" :style="{ animationDelay: '0.5s' }"></div>
                <div class="tech-line" :style="{ animationDelay: '0.7s' }"></div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Seção de Métricas -->
    <section class="metrics-section py-12 py-sm-8 py-md-12">
      <v-container class="mobile-padding">
        <v-row class="justify-center">
          <v-col cols="12" lg="10" class="mx-auto">
            <div class="metrics-grid">
              <div class="metric-item animate-fade-in-up" :style="{ animationDelay: '0.1s' }">
                <div class="metric-number stat-number">50+</div>
                <div class="metric-label">Projetos Concluídos</div>
              </div>

              <div class="metric-item animate-fade-in-up" :style="{ animationDelay: '0.3s' }">
                <div class="metric-number stat-number">15+</div>
                <div class="metric-label">Tecnologias Utilizadas</div>
              </div>

              <div class="metric-item animate-fade-in-up" :style="{ animationDelay: '0.5s' }">
                <div class="metric-number stat-number">98%</div>
                <div class="metric-label">Taxa de Sucesso</div>
              </div>

              <div class="metric-item animate-fade-in-up" :style="{ animationDelay: '0.7s' }">
                <div class="metric-number stat-number">24h</div>
                <div class="metric-label">Tempo de Resposta</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Seção de Projetos em Destaque -->
    <section class="featured-projects py-16 py-sm-12 py-md-16 bg-grey-lighten-4 animate-on-scroll">
      <v-container class="mobile-padding">
        <div class="text-center mb-12 mb-sm-8 mb-md-12 animate-fade-in-up">
          <h2
            class="text-h3 text-h4-sm text-h3-md font-weight-bold text-primary mb-4 animate-slide-in-left mobile-title"
          >
            Projetos em Destaque
          </h2>
          <p
            class="text-h6 text-body-1-sm text-h6-md text-grey-darken-1 max-width-600 mx-auto animate-slide-in-right mobile-text"
          >
            Conheça alguns dos nossos projetos mais relevantes e as tecnologias utilizadas em cada
            um deles.
          </p>
        </div>

        <v-row class="mobile-grid">
          <v-col
            v-for="(project, index) in featuredProjects"
            :key="project.title"
            cols="12"
            md="6"
            lg="4"
            class="mb-6 mb-sm-4 mb-md-6"
          >
            <div
              class="project-card animate-on-scroll mobile-card touch-optimized"
              @click="openProjectModal(project)"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <div class="card-header">
                <div class="project-image-container">
                  <img :src="project.image" :alt="project.title" class="project-image" />
                  <div class="project-category">
                    <span
                      class="category-chip"
                      :style="{ backgroundColor: getCategoryColor(project.category.color) }"
                    >
                      {{ project.category.name }}
                    </span>
                  </div>
                </div>
                <div class="project-number">{{ getProjectNumber(index) }}</div>
              </div>

              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}...</p>

                <div class="project-technologies">
                  <span v-for="tech in project.technologies" :key="tech" class="tech-chip">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="project-overlay">
                <span class="learn-more">Ver Todos os Projetos</span>
              </div>
            </div>
          </v-col>
        </v-row>

        <div class="text-center mt-8 mt-sm-6 mt-md-8">
          <v-btn
            color="primary"
            size="large"
            size-sm="default"
            variant="elevated"
            to="/projetos"
            class="w-full w-sm-auto mobile-btn touch-optimized"
          >
            Ver Todos os Projetos
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- Seção CTA -->
    <CtaSection
      :title="'Pronto para Iniciar Seu Projeto?'"
      :subtitle="'Entre em contato conosco e descubra como podemos ajudar você a transformar seus dados geoespaciais em insights valiosos para o seu negócio.'"
      :stats="[
        { number: '24h', label: 'Resposta Rápida' },
        { number: '100%', label: 'Satisfação' },
        { number: '10+', label: 'Anos de Experiência' },
      ]"
      :primary="{
        to: '/contato',
        label: 'Solicitar Orçamento',
        icon: 'mdi-phone',
        color: 'accent',
      }"
      :secondary="{ to: '/documentos', label: 'Ver Documentação', icon: 'mdi-file-document' }"
      :contactChips="[
        { icon: 'mdi-email', text: 'contato@geoquantum.com' },
        { icon: 'mdi-phone', text: '+55 (11) 99999-9999' },
        { icon: 'mdi-clock', text: 'Seg-Sex: 8h às 18h' },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import HeroMap from '../components/HeroMap.vue'
import CtaSection from '../components/CtaSection.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'

const router = useRouter()

// Refs para controlar as animações de contagem
const heroStatsVisible = ref(false)
const metricsVisible = ref(false)
const ctaStatsVisible = ref(false)

const navigateToDocuments = () => {
  router.push('/documentos')
}

// Função para animar contagem crescente - Otimizada
const animateCount = (element: HTMLElement, target: number, duration: number = 2000) => {
  let start = 0
  const increment = target / (duration / 16) // 60fps
  const originalText = element.textContent || ''

  // Adiciona classe de animação
  element.classList.add('animating')

  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      start = target
      clearInterval(timer)

      // Remove classe de animação e adiciona classe de completado
      element.classList.remove('animating')
      element.classList.add('completed')
    }

    // Formata o número baseado no tipo - Otimizado
    const currentValue = Math.floor(start)
    if (originalText.includes('+')) {
      element.textContent = currentValue + '+'
    } else if (originalText.includes('%')) {
      element.textContent = currentValue + '%'
    } else if (originalText.includes('h')) {
      element.textContent = currentValue + 'h'
    } else {
      element.textContent = currentValue.toString()
    }
  }, 16)
}

// Função para verificar se elemento está visível
const isElementInViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Função para iniciar animações quando elementos entram na tela
const startCountAnimations = () => {
  // Animações do Hero
  if (!heroStatsVisible.value) {
    const heroStats = document.querySelectorAll('.hero-stats .stat-number')
    if (heroStats.length > 0) {
      heroStatsVisible.value = true
      heroStats.forEach((stat, index) => {
        const target = parseInt(stat.textContent?.replace(/\D/g, '') || '0')
        setTimeout(() => {
          animateCount(stat as HTMLElement, target, 2000)
        }, index * 300)
      })
    }
  }

  // Animações da seção de métricas
  if (!metricsVisible.value) {
    const metricNumbers = document.querySelectorAll('.metrics-section .metric-number')
    if (metricNumbers.length > 0) {
      metricsVisible.value = true
      metricNumbers.forEach((metric, index) => {
        const target = parseInt(metric.textContent?.replace(/\D/g, '') || '0')
        setTimeout(() => {
          animateCount(metric as HTMLElement, target, 2000)
        }, index * 200)
      })
    }
  }

  // Animações da seção CTA
  if (!ctaStatsVisible.value) {
    const ctaNumbers = document.querySelectorAll('.cta-stats .stat-number')
    if (ctaNumbers.length > 0) {
      ctaStatsVisible.value = true
      ctaNumbers.forEach((stat, index) => {
        const target = parseInt(stat.textContent?.replace(/\D/g, '') || '0')
        setTimeout(() => {
          animateCount(stat as HTMLElement, target, 2000)
        }, index * 200)
      })
    }
  }
}

const services = [
  {
    id: 1,
    title: 'Mapas de Localização',
    description:
      'Mapas de produção agrícola com levantamento de dados e produção de mapas temáticos.',
    fullDescription:
      'Mapas de produção agrícola com levantamento de dados e produção de mapas temáticos dentro dos padrões cartográficos que representam um objeto ou fenômeno na superfície terrestre.',
    features: [
      'Levantamento de dados agrícolas',
      'Produção de mapas temáticos',
      'Padrões cartográficos',
      'Sensoriamento remoto',
    ],
  },
  {
    id: 2,
    title: 'Automatização QGIS',
    description: 'Criar fluxos de trabalho automatizados utilizando o Modelador Gráfico do QGIS.',
    fullDescription:
      'Criar fluxos de trabalho automatizados utilizando o Modelador Gráfico do QGIS para encadear várias operações geoespaciais em um único processo.',
    features: [
      'Modelador Gráfico do QGIS',
      'Fluxos de trabalho automatizados',
      'Operações geoespaciais',
      'Processos repetitivos',
    ],
  },
  {
    id: 3,
    title: 'Capacitação QGIS',
    description:
      'Programa de capacitação para profissionais e estudantes em Sistemas de Informação Geográfica.',
    fullDescription:
      'Um programa que oferece a capacitação necessária ao profissional qualificado e ao estudante que deseja estar em dia com as inovações dos SIG.',
    features: [
      'Capacitação profissional',
      'Atualização em SIG',
      'Inovações tecnológicas',
      'Formação contínua',
    ],
  },
  {
    id: 4,
    title: 'Projetos Ambientais',
    description: 'Desenvolvimento de projetos ambientais com análise geoespacial.',
    fullDescription:
      'Desenvolvimento de projetos ambientais utilizando geoprocessamento para análise e monitoramento ambiental.',
    features: [
      'Projetos ambientais',
      'Análise geoespacial',
      'Gestão ambiental',
      'Sustentabilidade',
    ],
  },
]

const featuredProjects = [
  {
    title: 'Sistema de Planejamento Urbano - São Paulo',
    description:
      'Desenvolvemos mapas interativos e análises geoespaciais para otimizar o planejamento urbano da maior cidade do Brasil.',
    image: 'src/assets/home/sistema-planejamento-urbano.png',
    category: { name: 'Planejamento Urbano', color: 'primary' },
    technologies: ['QGIS', 'PostgreSQL', 'GeoServer', 'Vue.js'],
  },
  {
    title: 'Agricultura de Precisão - Mato Grosso',
    description:
      'Implementamos sensores IoT e análise de dados para maximizar a produtividade agrícola em grandes propriedades rurais.',
    image: 'src/assets/home/agricultura-precisao.jpg',
    category: { name: 'Agricultura', color: 'success' },
    technologies: ['ArcGIS', 'Python', 'Machine Learning', 'IoT'],
  },
  {
    title: 'Monitoramento Ambiental - Amazônia',
    description:
      'Criamos sistema de vigilância contínua para proteger áreas de preservação usando satélites e IA.',
    image: 'src/assets/home/monitoramento-ambiental.jpg',
    category: { name: 'Meio Ambiente', color: 'info' },
    technologies: ['Google Earth Engine', 'JavaScript', 'Cloud Computing'],
  },
]

const getCategoryColor = (color: string): string => {
  const colorMap: { [key: string]: string } = {
    primary: '#1a365d',
    success: '#38a169',
    info: '#3182ce',
    warning: '#d69e2e',
    error: '#e53e3e',
  }
  return colorMap[color] || '#1a365d'
}

const getProjectNumber = (index: number): string => {
  return (index + 1).toString().padStart(2, '0')
}

const openProjectModal = (project: any) => {
  router.push('/projetos')
}

// Controle de animações baseadas no scroll - Otimizado com throttling
let scrollTimeout: number | null = null

const handleScroll = () => {
  if (scrollTimeout) return

  scrollTimeout = window.setTimeout(() => {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.animate)')
    const windowHeight = window.innerHeight
    const elementVisible = 150

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('animate')
      }
    })

    // Verifica e inicia animações de contagem
    startCountAnimations()

    scrollTimeout = null
  }, 16) // ~60fps
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Executa uma vez para elementos já visíveis
  startCountAnimations()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.max-width-600 {
  max-width: 600px;
}

.services-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.stats-section {
  background:
    linear-gradient(135deg, rgba(26, 54, 93, 0.9) 0%, rgba(45, 90, 135, 0.9) 100%),
    url('/src/assets/home/andes-2975217_1280.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.stat-item {
  text-align: center;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.stat-item .text-h2 {
  color: #ffffff !important;
  font-weight: 700;
  font-size: 3rem !important;
  margin-bottom: 8px;
  line-height: 1;
}

.stat-item .text-h6 {
  color: #e2e8f0 !important;
  font-size: 1rem !important;
  font-weight: 500;
  line-height: 1.4;
}

.about-card {
  border-radius: 8px;
  overflow: hidden;
}

.about-logo {
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
}

/* Elementos visuais tecnológicos */
.tech-features {
  margin-bottom: 2rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(26, 54, 93, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.15);
}

.tech-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(26, 54, 93, 0.1);
  border-radius: 8px;
  flex-shrink: 0;
}

.tech-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: #1a365d;
  line-height: 1.3;
}

/* Grid de imagens */
.about-visual-content {
  position: relative;
  height: 100%;
  min-height: 400px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  height: 100%;
  position: relative;
}

.image-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.15);
  transition: all 0.3s ease;
}

.image-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(26, 54, 93, 0.25);
}

.image-item.service-1 {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.image-item.service-2 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.image-item.service-3 {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.image-item.service-4 {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-item:hover .service-img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 32px;
  height: 32px;
  background: rgba(26, 54, 93, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.service-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(26, 54, 93, 0.9));
  color: white;
  padding: 1rem 0.75rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.image-item:hover .service-label {
  transform: translateY(0);
}

/* Logo em perspectiva */
.logo-perspective {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  pointer-events: none;
}

.perspective-logo {
  width: 120px;
  height: auto;
  filter: drop-shadow(0 8px 16px rgba(26, 54, 93, 0.3));
  animation: float 3s ease-in-out infinite;
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 160px;
  background: radial-gradient(circle, rgba(26, 54, 93, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: logoGlow 4s ease-in-out infinite;
}

/* Elementos decorativos tecnológicos */
.tech-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.tech-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #1a365d;
  border-radius: 50%;
  animation: techPulse 2s ease-in-out infinite;
}

.tech-dot:nth-child(1) {
  top: 20%;
  left: 10%;
}

.tech-dot:nth-child(2) {
  top: 60%;
  right: 15%;
}

.tech-dot:nth-child(3) {
  bottom: 30%;
  left: 20%;
}

.tech-line {
  position: absolute;
  top: 40%;
  left: 5%;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #1a365d, transparent);
  transform: rotate(-45deg);
  animation: techLine 3s ease-in-out infinite;
}

/* Responsividade para a seção sobre */
@media (max-width: 599.98px) {
  .tech-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .tech-item {
    padding: 0.5rem;
  }

  .tech-icon {
    width: 32px;
    height: 32px;
  }

  .tech-text {
    font-size: 0.8rem;
  }

  .image-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 0.75rem;
  }

  .image-item.service-1 {
    grid-column: 1;
    grid-row: 1;
    min-height: 120px;
  }

  .image-item.service-2 {
    grid-column: 1;
    grid-row: 2;
    min-height: 120px;
  }

  .image-item.service-3 {
    grid-column: 1;
    grid-row: 3;
    min-height: 120px;
  }

  .image-item.service-4 {
    grid-column: 1;
    grid-row: 4;
    min-height: 120px;
  }

  .about-visual-content {
    min-height: 300px;
  }

  .tech-decoration {
    display: none;
  }

  .perspective-logo {
    width: 80px;
  }

  .logo-glow {
    width: 120px;
    height: 120px;
  }

  .service-label {
    font-size: 0.7rem;
    padding: 0.75rem 0.5rem 0.5rem;
  }
}

@media (min-width: 600px) and (max-width: 959.98px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .image-grid {
    gap: 0.75rem;
  }

  .about-visual-content {
    min-height: 350px;
  }

  .perspective-logo {
    width: 100px;
  }

  .logo-glow {
    width: 140px;
    height: 140px;
  }
}

@media (min-width: 960px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .tech-item {
    padding: 1rem;
  }

  .tech-icon {
    width: 44px;
    height: 44px;
  }

  .tech-text {
    font-size: 0.9rem;
  }

  .image-grid {
    gap: 1.25rem;
  }

  .about-visual-content {
    min-height: 450px;
  }

  .perspective-logo {
    width: 120px;
  }

  .logo-glow {
    width: 160px;
    height: 160px;
  }
}

.project-card {
  position: relative;
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  border: 1px solid rgba(26, 54, 93, 0.1);
  height: 320px;
  display: flex;
  flex-direction: column;
}

.project-card:hover .project-overlay {
  opacity: 1;
  transform: translateY(0);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.project-image-container {
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  flex: 1;
}

.project-image-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.3) 0%, rgba(45, 90, 135, 0.2) 100%);
  z-index: 1;
  pointer-events: none;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-category {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 3;
}

.category-chip {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(26, 54, 93, 0.1);
  font-family: 'Courier New', monospace;
  line-height: 1;
  flex-shrink: 0;
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 0;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.project-description {
  color: #4a5568;
  line-height: 1.6;
  margin: 0 0 16px 0;
  font-size: 0.95rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.tech-chip {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(26, 54, 93, 0.1);
  color: #1a365d;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(26, 54, 93, 0.2);
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1a365d;
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

/* Animações específicas da Home */
@keyframes countUp {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes techPulse {
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

@keyframes techLine {
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

@keyframes logoGlow {
  0%,
  100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.1);
  }
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

@keyframes numberPulse {
  0% {
    text-shadow: 0 0 20px rgba(212, 165, 116, 0.6);
  }
  100% {
    text-shadow: 0 0 30px rgba(212, 165, 116, 0.8);
  }
}

/* Classes de animação globais são importadas via assets/styles/animations.scss */

.animate-count-up {
  animation: countUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}

/* Hover Animations - Otimizado com will-change */
.service-card:hover,
.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  will-change: transform;
}

.stat-item:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
  will-change: transform;
}

/* Animações para botões - Otimizado */
.v-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, box-shadow;
}

.v-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(26, 54, 93, 0.3);
}

/* Animações para imagens - Otimizado */
.project-image-container img {
  transition: transform 0.5s ease;
  will-change: transform;
}

.project-card:hover .project-image-container img {
  transform: scale(1.1);
}

/* Animações para chips - Otimizado */
.tech-chip,
.category-chip {
  transition: all 0.3s ease;
  will-change: transform, box-shadow;
}

.tech-chip:hover,
.category-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Scroll Animations - Otimizado */
.services-section.animate,
.stats-section.animate,
.about-section.animate,
.featured-projects.animate {
  opacity: 1;
  transform: translateY(0);
  will-change: auto;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
}

.border-white {
  border-color: white !important;
}

.documents-btn {
  transition: all 0.3s ease;
  border-width: 2px;
}

.documents-btn:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
}

.h-100 {
  height: 100%;
}

/* Classes Utilitárias Responsivas */
.w-full {
  width: 100% !important;
}

.w-sm-auto {
  width: auto !important;
}

@media (max-width: 599.98px) {
  .w-sm-auto {
    width: 100% !important;
  }
}

/* Breakpoints Responsivos */
@media (max-width: 599.98px) {
  .home-page {
    font-size: 14px;
  }

  .services-section,
  .about-section,
  .featured-projects {
    padding: 2rem 0;
  }

  .stats-section {
    padding: 1.5rem 0;
  }

  .stat-item {
    padding: 12px;
    margin-bottom: 12px;
  }

  .stat-item .text-h2 {
    font-size: 2rem !important;
    margin-bottom: 4px;
  }

  .stat-item .text-h6 {
    font-size: 0.875rem !important;
    line-height: 1.3;
  }

  .project-card {
    padding: 16px;
    height: 260px;
    margin-bottom: 1rem;
  }

  .project-image-container {
    height: 80px;
    margin-bottom: 12px;
  }

  .project-title {
    font-size: 1rem;
    margin-bottom: 8px;
    line-height: 1.2;
  }

  .project-description {
    font-size: 0.875rem;
    line-height: 1.4;
    margin-bottom: 12px;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  .project-number {
    font-size: 1.5rem;
  }

  .about-logo {
    max-width: 250px;
    margin-bottom: 1rem;
  }

  .max-width-600 {
    max-width: 100%;
    padding: 0 1rem;
  }

  .text-h3 {
    font-size: 1.75rem !important;
    line-height: 1.2 !important;
    margin-bottom: 1rem !important;
  }

  .text-h6 {
    font-size: 1rem !important;
    line-height: 1.4 !important;
  }

  .text-body-1 {
    font-size: 0.875rem !important;
    line-height: 1.4 !important;
  }

  .v-btn {
    font-size: 0.875rem !important;
    padding: 12px 20px !important;
    height: 44px !important;
    margin-bottom: 0.75rem;
    border-radius: 8px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .v-btn .v-icon {
    font-size: 18px !important;
  }

  .tech-chip {
    font-size: 0.7rem !important;
    padding: 3px 8px !important;
    margin-bottom: 4px;
  }

  .category-chip {
    font-size: 0.65rem !important;
    padding: 3px 8px !important;
  }

  .project-technologies {
    gap: 4px;
    margin-bottom: 12px;
  }

  .card-header {
    margin-bottom: 12px;
  }

  .service-icon {
    width: 40px !important;
    height: 40px !important;
  }

  .service-icon i {
    font-size: 18px !important;
  }

  .service-number {
    font-size: 1.5rem !important;
  }

  .service-title {
    font-size: 1rem !important;
    margin-bottom: 8px !important;
  }

  .service-description {
    font-size: 0.875rem !important;
    line-height: 1.4 !important;
  }

  .hero-overlay {
    padding: 1rem;
  }

  .hero-overlay .text-h2 {
    font-size: 1.75rem !important;
    line-height: 1.2 !important;
    margin-bottom: 1rem !important;
  }

  .hero-overlay .text-h6 {
    font-size: 0.875rem !important;
    line-height: 1.4 !important;
    margin-bottom: 1.5rem !important;
  }

  .hero-overlay .text-h4 {
    font-size: 1.25rem !important;
  }

  .hero-overlay .text-body-2 {
    font-size: 0.75rem !important;
  }

  .d-flex.flex-wrap {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .d-flex.flex-wrap > div {
    margin-right: 0 !important;
    margin-bottom: 0.75rem !important;
    text-align: center;
  }

  .d-flex.flex-wrap > div:last-child {
    margin-bottom: 0 !important;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .v-col {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .mb-12 {
    margin-bottom: 2rem !important;
  }

  .mb-6 {
    margin-bottom: 1rem !important;
  }

  .py-16 {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }

  .gap-4 {
    gap: 1rem !important;
  }

  .gap-6 {
    gap: 1.5rem !important;
  }

  .mt-8 {
    margin-top: 1.5rem !important;
  }

  .order-1 {
    order: 1 !important;
  }

  .order-2 {
    order: 2 !important;
  }

  .text-center {
    text-align: center !important;
  }

  .mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .justify-center {
    justify-content: center !important;
  }

  .justify-md-start {
    justify-content: center !important;
  }

  .text-md-left {
    text-align: center !important;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .flex-sm-row {
    flex-direction: column !important;
  }

  .w-sm-auto {
    width: 100% !important;
  }
}

@media (min-width: 600px) and (max-width: 959.98px) {
  .home-page {
    font-size: 15px;
  }

  .services-section,
  .about-section,
  .featured-projects {
    padding: 3.5rem 0;
  }

  .stats-section {
    padding: 2.5rem 0;
  }

  .stat-item {
    padding: 18px;
  }

  .project-card {
    height: 300px;
  }

  .about-logo {
    max-width: 350px;
  }

  .v-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .text-center {
    text-align: center !important;
  }

  .about-section .v-col:first-child {
    padding-left: 2rem;
  }

  .about-section .v-col:last-child {
    padding-right: 2rem;
  }
}

@media (min-width: 960px) {
  .home-page {
    font-size: 16px;
  }

  .services-section,
  .about-section,
  .featured-projects {
    padding: 4rem 0;
  }

  .stats-section {
    padding: 3rem 0;
  }

  .stat-item {
    padding: 20px;
  }

  .project-card {
    height: 320px;
  }

  .about-logo {
    max-width: 400px;
  }

  .v-container {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .about-section .v-col:first-child {
    padding-left: 4rem;
  }

  .about-section .v-col:last-child {
    padding-right: 2rem;
  }

  .services-section .text-center,
  .featured-projects .text-center {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1200px) {
  .v-container {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .about-section .v-col:first-child {
    padding-left: 6rem;
  }

  .about-section .v-col:last-child {
    padding-right: 3rem;
  }

  .services-section .text-center,
  .featured-projects .text-center {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .cta-section .v-col {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1400px) {
  .v-container {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .about-section .v-col:first-child {
    padding-left: 8rem;
  }

  .about-section .v-col:last-child {
    padding-right: 4rem;
  }

  .services-section .text-center,
  .featured-projects .text-center {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .cta-section .v-col {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

/* Classes de Tipografia Responsiva */
.text-h4-sm {
  font-size: 1.5rem !important;
}

.text-h3-md {
  font-size: 2.125rem !important;
}

.text-body-1-sm {
  font-size: 0.875rem !important;
}

.text-body-1-md {
  font-size: 1rem !important;
}

.text-body-2-sm {
  font-size: 0.875rem !important;
}

.text-h6-md {
  font-size: 1.25rem !important;
}

.text-h3-sm {
  font-size: 2rem !important;
}

.text-h2-md {
  font-size: 3rem !important;
}

@media (min-width: 600px) {
  .text-h4-sm {
    font-size: 2.125rem !important;
  }

  .text-h3-sm {
    font-size: 2.125rem !important;
  }

  .text-body-1-sm {
    font-size: 1rem !important;
  }

  .text-body-2-sm {
    font-size: 1rem !important;
  }
}

@media (min-width: 960px) {
  .text-h4-sm {
    font-size: 2.125rem !important;
  }

  .text-h3-sm {
    font-size: 2.125rem !important;
  }

  .text-body-1-sm {
    font-size: 1rem !important;
  }

  .text-body-2-sm {
    font-size: 1rem !important;
  }
}

/* Classes de Espaçamento Responsivo */
.py-sm-12 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.py-md-16 {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
}

.mb-sm-8 {
  margin-bottom: 2rem !important;
}

.mb-md-12 {
  margin-bottom: 3rem !important;
}

.mb-sm-4 {
  margin-bottom: 1rem !important;
}

.mb-md-6 {
  margin-bottom: 1.5rem !important;
}

.mt-sm-6 {
  margin-top: 1.5rem !important;
}

.mt-md-8 {
  margin-top: 2rem !important;
}

.gap-sm-6 {
  gap: 1.5rem !important;
}

@media (min-width: 600px) {
  .py-sm-12 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .mb-sm-8 {
    margin-bottom: 2rem !important;
  }

  .mb-sm-4 {
    margin-bottom: 1rem !important;
  }

  .mt-sm-6 {
    margin-top: 1.5rem !important;
  }

  .gap-sm-6 {
    gap: 1.5rem !important;
  }
}

@media (min-width: 960px) {
  .py-md-16 {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
  }

  .mb-md-12 {
    margin-bottom: 3rem !important;
  }

  .mb-md-6 {
    margin-bottom: 1.5rem !important;
  }

  .mt-md-8 {
    margin-top: 2rem !important;
  }
}

/* Melhorias para Touch */
@media (hover: none) and (pointer: coarse) {
  .project-card:hover {
    transform: none;
  }

  .v-btn:hover {
    transform: none;
  }

  .stat-item:hover {
    transform: none;
  }
}

/* Melhorias para Mobile */
@media (max-width: 599.98px) {
  .project-card {
    margin-bottom: 1rem;
  }

  .stat-item {
    margin-bottom: 1rem;
  }

  .v-btn {
    margin-bottom: 0.75rem;
    border-radius: 8px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .d-flex.flex-column .v-btn:last-child {
    margin-bottom: 0;
  }

  /* Melhorias específicas para seções */
  .services-section {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }

  .stats-section {
    background:
      linear-gradient(135deg, rgba(26, 54, 93, 0.95) 0%, rgba(45, 90, 135, 0.95) 100%),
      url('/src/assets/home/andes-2975217_1280.jpg');
  }

  .about-section {
    background: #ffffff;
  }

  .featured-projects {
    background: #f5f5f5;
  }

  /* Melhorias para cards */
  .project-card,
  .service-card {
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(26, 54, 93, 0.1);
    border: 1px solid rgba(26, 54, 93, 0.08);
  }

  .project-card:active,
  .service-card:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }

  /* Melhorias para botões */
  .v-btn:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }

  /* Melhorias para navegação */
  .v-container {
    max-width: 100%;
  }

  /* Melhorias para espaçamento */
  .v-row {
    margin: 0;
  }

  .v-col {
    padding: 0.5rem;
  }

  /* Melhorias para tipografia */
  .text-primary {
    color: #1a365d !important;
  }

  .text-grey-darken-1 {
    color: #4a5568 !important;
  }

  .text-grey-lighten-2 {
    color: #e2e8f0 !important;
  }

  /* Melhorias para animações */
  .animate-on-scroll {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Melhorias para hover em mobile */
  .project-card:hover,
  .service-card:hover {
    transform: none;
  }

  .v-btn:hover {
    transform: none;
  }

  .stat-item:hover {
    transform: none;
  }

  /* Melhorias para acessibilidade */
  .project-card:focus,
  .service-card:focus,
  .v-btn:focus {
    outline: 2px solid #1a365d;
    outline-offset: 2px;
  }

  /* Melhorias para scroll */
  .home-page {
    scroll-behavior: smooth;
  }

  /* Melhorias para seção CTA */
  .cta-section {
    background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  }

  .cta-section .v-btn {
    margin-bottom: 1rem;
  }

  .cta-section .v-btn:last-child {
    margin-bottom: 0;
  }

  /* Melhorias para seção de estatísticas */
  .stats-section .stat-item {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Melhorias para seção sobre */
  .about-section .about-logo {
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  }

  /* Melhorias para seção de projetos */
  .featured-projects .project-card {
    transition: all 0.3s ease;
  }

  .featured-projects .project-card:active {
    background: #f8f9fa;
  }

  /* Melhorias para responsividade */
  .max-width-600 {
    max-width: 100%;
    padding: 0 1rem;
  }

  /* Melhorias para grid */
  .v-row > .v-col {
    flex: 0 0 100%;
    max-width: 100%;
  }

  /* Melhorias para espaçamento interno */
  .v-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Melhorias para botões de ação */
  .v-btn[color='accent'] {
    background: #d4a574 !important;
    color: #2e3a47 !important;
    font-weight: 700 !important;
  }

  .v-btn[color='primary'] {
    background: #1a365d !important;
    color: white !important;
    font-weight: 600 !important;
  }

  .v-btn[variant='outlined'] {
    border: 2px solid currentColor !important;
    background: transparent !important;
  }
}

/* Melhorias para seção CTA */
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

/* Elementos decorativos */
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

/* Conteúdo principal */
.cta-content {
  position: relative;
  z-index: 2;
}

.max-width-800 {
  max-width: 800px;
}

/* Estatísticas */
.cta-stats {
  margin-bottom: 2rem;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-item-cta {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 120px;
  transition: all 0.3s ease;
}

.stat-item-cta:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
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

/* Botões de ação */
.cta-actions {
  margin-bottom: 2rem;
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

/* Informações de contato */
.contact-info {
  margin-top: 2rem;
}

.contact-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-text {
  color: #e2e8f0;
  font-size: 0.875rem;
  font-weight: 500;
}

/* Responsividade para CTA */
@media (max-width: 599.98px) {
  .stats-row {
    gap: 1rem;
  }

  .stat-item-cta {
    min-width: 100px;
    padding: 0.75rem;
  }

  .stat-number {
    font-size: 1.25rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .contact-row {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }

  .cta-decoration {
    display: none;
  }
}

@media (min-width: 600px) and (max-width: 959.98px) {
  .stats-row {
    gap: 1.5rem;
  }

  .contact-row {
    gap: 1.5rem;
  }
}

@media (min-width: 960px) {
  .stats-row {
    gap: 2rem;
  }

  .contact-row {
    gap: 2rem;
  }
}

/* Seção de Métricas */
.metrics-section {
  background:
    linear-gradient(135deg, rgba(26, 54, 93, 0.95) 0%, rgba(45, 90, 135, 0.95) 100%),
    url('/src/assets/home/andes-2975217_1280.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-items: center;
}

.metric-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.metric-number {
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
}

.metric-label {
  font-size: 0.875rem;
  color: #e2e8f0;
  font-weight: 500;
  line-height: 1.4;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
}

/* Responsividade para métricas */
@media (max-width: 959.98px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .metric-item {
    padding: 1.5rem 1rem;
  }

  .metric-number {
    font-size: 2.5rem;
  }

  .metric-label {
    font-size: 0.8rem;
  }
}

@media (max-width: 599.98px) {
  .metrics-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .metric-item {
    padding: 1.25rem 1rem;
  }

  .metric-number {
    font-size: 2.25rem;
  }

  .metric-label {
    font-size: 0.75rem;
  }
}

/* Estilos para animação de contagem - Otimizado */
.stat-number {
  transition: all 0.3s ease;
  will-change: transform, color;
}

.stat-number.animating {
  transform: scale(1.1);
  color: #d4a574 !important;
}

.stat-number.completed {
  transform: scale(1);
  will-change: auto;
}

/* Melhorias para números em destaque */
.hero-stats .stat-number,
.metrics-section .stat-number,
.cta-stats .stat-number {
  position: relative;
  overflow: hidden;
}

.hero-stats .stat-number::after,
.metrics-section .stat-number::after,
.cta-stats .stat-number::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #d4a574;
  transition: width 0.5s ease;
}

.hero-stats .stat-number.completed::after,
.metrics-section .stat-number.completed::after,
.cta-stats .stat-number.completed::after {
  width: 100%;
}

/* Efeito de destaque durante animação */
.stat-number.animating {
  text-shadow: 0 0 20px rgba(212, 165, 116, 0.6);
  animation: numberPulse 0.5s ease-in-out infinite alternate;
}
</style>
