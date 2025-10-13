<template>
  <div class="servicos-page">
    <!-- Hero Section com Mapa de Fundo -->
    <section class="hero-section">
      <!-- Mapa Interativo -->
      <div ref="mapContainer" class="map-container"></div>

      <!-- Elementos Flutuantes Animados -->
      <div class="floating-elements">
        <div class="floating-circle circle-1 animate-float"></div>
        <div class="floating-circle circle-2 animate-float" style="animation-delay: 2s"></div>
        <div class="floating-circle circle-3 animate-float" style="animation-delay: 4s"></div>
      </div>

      <!-- Overlay com Filtro Azul e Conteúdo -->
      <div class="hero-overlay">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <h1
                class="hero-title text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow animate-fade-in-down"
              >
                Nossos Serviços
              </h1>
              <p
                class="hero-subtitle text-h6 text-grey-lighten-2 mb-6 animate-fade-in-up animate-delay-300"
              >
                Soluções completas em geoprocessamento e análise geoespacial para diversos setores e
                aplicações.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Como Trabalhamos -->
    <WorkflowSection :steps="workflowSteps" />

    <!-- Serviços Principais -->
    <section class="services-section">
      <v-container class="mobile-padding">
        <div class="scroll-reveal" data-animation="fade-in-up">
          <SectionTitle
            title="Serviços Especializados"
            subtitle="Oferecemos soluções completas em geoprocessamento e análise espacial para diversos setores e aplicações."
          />
        </div>

        <v-row class="mobile-grid">
          <v-col
            v-for="(service, index) in services"
            :key="service.id"
            cols="12"
            sm="6"
            lg="4"
            class="mb-6 mb-sm-4 mb-md-6 d-flex scroll-reveal"
            :data-animation="'scale-in'"
            :data-delay="index * 100"
          >
            <ServiceCard :service="service" class="flex-grow-1 mobile-card touch-optimized" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Setores de Atuação -->
    <SectorsSection :sectors="sectors" />

    <!-- Casos de Sucesso -->
    <SuccessCasesSection :success-cases="successCases" />

    <!-- CTA Section -->
    <CtaSection
      :title="'Pronto para Transformar seus Dados?'"
      :subtitle="'Entre em contato e descubra como podemos ajudar seu projeto'"
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
      :secondary="{ to: '/servicos', label: 'Nossos Serviços', icon: 'mdi-cog' }"
      :contactChips="[
        { icon: 'mdi-email', text: 'contato@geoquantum.com' },
        { icon: 'mdi-phone', text: '+55 (11) 99999-9999' },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import ServiceCard from '@/components/ServiceCard.vue'
import CtaSection from '../components/CtaSection.vue'
import StatsSection from '@/components/StatsSection.vue'
import TechnologiesSection from '@/components/TechnologiesSection.vue'
import SectorsSection from '@/components/SectorsSection.vue'
import SuccessCasesSection from '@/components/SuccessCasesSection.vue'
import WorkflowSection from '@/components/WorkflowSection.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { useScrollAnimations, animationUtils } from '@/composables/useAnimations'

interface Service {
  id: number
  title: string
  description: string
  fullDescription: string
  features?: string[]
  image?: string
  icon?: string
}

const services = ref<Service[]>([
  {
    id: 1,
    title: 'Mapas de Localização',
    description:
      'Mapas de produção agrícola com levantamento de dados e produção de mapas temáticos dentro dos padrões cartográficos.',
    fullDescription:
      'Mapas de produção agrícola com levantamento de dados e produção de mapas temáticos dentro dos padrões cartográficos que representam um objeto ou fenômeno na superfície terrestre. O mapeamento dos cultivos agrícolas é realizado por meio de sensoriamento remoto. Ele tem por objetivo contribuir com a estimativa de área e de produtividade, oferecendo informações precisas.',
    features: [
      'Levantamento de dados agrícolas',
      'Produção de mapas temáticos',
      'Padrões cartográficos',
      'Sensoriamento remoto',
      'Estimativa de área e produtividade',
    ],
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&crop=center',
    icon: 'mdi-map-marker-outline',
  },
  {
    id: 2,
    title: 'Mapas de Uso e Cobertura do Solo',
    description:
      'Mapeamento com interpretação de imagens de satélite para detectar alterações na dinâmica de ocupação.',
    fullDescription:
      'Mapeamento realizado com base na interpretação de imagens de satélite, detectando e quantificando, periodicamente, as alterações na dinâmica das formas de ocupação e de organização do espaço geográfico.',
    features: [
      'Interpretação de imagens de satélite',
      'Detecção de alterações',
      'Quantificação de mudanças',
      'Análise de ocupação do solo',
      'Organização do espaço geográfico',
    ],
    image:
      'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop&crop=center',
    icon: 'mdi-earth',
  },
  {
    id: 3,
    title: 'Automatização QGIS',
    description: 'Criar fluxos de trabalho automatizados utilizando o Modelador Gráfico do QGIS.',
    fullDescription:
      'Criar fluxos de trabalho automatizados utilizando o Modelador Gráfico do QGIS. Como encadear várias operações geoespaciais em um único processo, permitindo a repetição de tarefas complexas de forma eficiente e com menos erros.',
    features: [
      'Modelador Gráfico do QGIS',
      'Fluxos de trabalho automatizados',
      'Operações geoespaciais',
      'Processos repetitivos',
      'Redução de erros',
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
    icon: 'mdi-cog-outline',
  },
  {
    id: 4,
    title: 'Automações Python',
    description:
      'Automação de processos em Python para tarefas repetitivas e manipulação de arquivos.',
    fullDescription:
      'A automação de processos em Python é uma técnica que usa a programação para automatizar tarefas repetitivas. O Python é uma linguagem de programação flexível que pode ser usada para manipular arquivos.',
    features: [
      'Programação em Python',
      'Automação de processos',
      'Tarefas repetitivas',
      'Manipulação de arquivos',
      'Flexibilidade de desenvolvimento',
    ],
    image:
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop&crop=center',
    icon: 'mdi-language-python',
  },
  {
    id: 5,
    title: 'Capacitação QGIS',
    description:
      'Programa de capacitação para profissionais e estudantes em Sistemas de Informação Geográfica.',
    fullDescription:
      'Um programa que oferece a capacitação necessária ao profissional qualificado e ao estudante que deseja estar em dia com as inovações dos Sistemas de Informação Geográficas (SIG).',
    features: [
      'Capacitação profissional',
      'Atualização em SIG',
      'Inovações tecnológicas',
      'Formação contínua',
      'Desenvolvimento de habilidades',
    ],
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center',
    icon: 'mdi-school-outline',
  },
  {
    id: 6,
    title: 'Atualização e Criação de Talhões',
    description: 'Criação e atualização de talhões agrícolas com precisão cartográfica.',
    fullDescription:
      'Criar fluxos de trabalho automatizados utilizando o Modelador Gráfico do QGIS. Como encadear várias operações geoespaciais em um único processo, permitindo a repetição de tarefas complexas de forma eficiente e com menos erros.',
    features: [
      'Criação de talhões',
      'Atualização de geometrias',
      'Precisão cartográfica',
      'Operações geoespaciais',
      'Automação de processos',
    ],
    image:
      'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&h=600&fit=crop&crop=center',
    icon: 'mdi-vector-polygon',
  },
  {
    id: 7,
    title: 'Geomarketing',
    description: 'Análises espaciais para estratégias de marketing e localização de negócios.',
    fullDescription:
      'A automação de processos em Python é uma técnica que usa a programação para automatizar tarefas repetitivas. O Python é uma linguagem de programação flexível que pode ser usada para manipular arquivos.',
    features: [
      'Análises espaciais',
      'Estratégias de marketing',
      'Localização de negócios',
      'Análise de mercado',
      'Tomada de decisão',
    ],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center',
    icon: 'mdi-chart-line',
  },
  {
    id: 8,
    title: 'Projetos Ambientais',
    description: 'Desenvolvimento de projetos ambientais com análise geoespacial.',
    fullDescription:
      'Um programa que oferece a capacitação necessária ao profissional qualificado e ao estudante que deseja estar em dia com as inovações dos Sistemas de Informação Geográficas (SIG).',
    features: [
      'Projetos ambientais',
      'Análise geoespacial',
      'Gestão ambiental',
      'Sustentabilidade',
      'Compliance ambiental',
    ],
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center',
    icon: 'mdi-leaf-outline',
  },
])

const workflowSteps = ref([
  {
    title: 'Análise de Requisitos',
    description: 'Definir escopo e objetivos',
    icon: 'mdi mdi-clipboard-text',
    details:
      'Compreendemos suas necessidades específicas, analisamos os objetivos do projeto, definimos o escopo detalhado e estabelecemos os critérios de sucesso para garantir que a solução atenda exatamente às suas expectativas.',
  },
  {
    title: 'Planejamento',
    description: 'Estratégia e cronograma',
    icon: 'mdi mdi-chart-timeline-variant',
    details:
      'Desenvolvemos uma estratégia completa com cronograma detalhado, alocação de recursos, definição de marcos importantes e plano de execução para garantir que o projeto seja entregue no prazo e dentro do orçamento estabelecido.',
  },
  {
    title: 'Coleta de Dados',
    description: 'Organizar dados geoespaciais',
    icon: 'mdi mdi-database',
    details:
      'Gerenciamos e organizamos dados geoespaciais de múltiplas fontes, incluindo imagens de satélite, dados cartográficos, informações cadastrais e levantamentos de campo, garantindo qualidade e consistência para o processamento posterior.',
  },
  {
    title: 'Processamento',
    description: 'Análise e geoprocessamento',
    icon: 'mdi mdi-cog',
    details:
      'Aplicamos técnicas avançadas de geoprocessamento, análise espacial e modelagem geoespacial utilizando as melhores ferramentas do mercado para transformar dados brutos em informações valiosas e insights acionáveis para sua tomada de decisão.',
  },
  {
    title: 'Entrega',
    description: 'Resultados e documentação',
    icon: 'mdi mdi-check-circle',
    details:
      'Entregamos resultados finais com documentação técnica completa, relatórios detalhados, mapas temáticos, arquivos digitais e suporte pós-entrega para garantir que você possa utilizar efetivamente todas as soluções desenvolvidas.',
  },
])

const technologies = ref([
  {
    name: 'QGIS',
    icon: 'mdi mdi-map',
    description: 'SIG de código aberto',
  },
  {
    name: 'Python',
    icon: 'mdi mdi-language-python',
    description: 'Automação e análise',
  },
  {
    name: 'PostgreSQL',
    icon: 'mdi mdi-database',
    description: 'Banco espacial',
  },
  {
    name: 'Leaflet',
    icon: 'mdi mdi-web',
    description: 'Mapas web',
  },
  {
    name: 'GDAL/OGR',
    icon: 'mdi mdi-file-multiple',
    description: 'Processamento',
  },
  {
    name: 'R',
    icon: 'mdi mdi-chart-line',
    description: 'Análise estatística',
  },
])

const sectors = ref([
  {
    name: 'Agricultura',
    icon: 'mdi mdi-sprout',
    description: 'Mapeamento agrícola, análise de produtividade e gestão de talhões',
    image:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop&crop=center',
    projects: '150+',
  },
  {
    name: 'Meio Ambiente',
    icon: 'mdi mdi-leaf',
    description: 'Projetos ambientais, análise de cobertura vegetal e impactos',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop&crop=center',
    projects: '80+',
  },
  {
    name: 'Mineração',
    icon: 'mdi mdi-pickaxe',
    description: 'Análise de áreas de mineração e gestão de recursos',
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center',
    projects: '45+',
  },
  {
    name: 'Urbanismo',
    icon: 'mdi mdi-city',
    description: 'Planejamento urbano, análise de uso do solo e infraestrutura',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop&crop=center',
    projects: '120+',
  },
  {
    name: 'Logística',
    icon: 'mdi mdi-truck-delivery',
    description: 'Otimização de rotas e análise de localização',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center',
    projects: '60+',
  },
  {
    name: 'Energia',
    icon: 'mdi mdi-lightning-bolt',
    description: 'Análise de recursos energéticos e infraestrutura',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&crop=center',
    projects: '35+',
  },
])

const successCases = ref([
  {
    title: 'Mapeamento Agrícola - Goiás',
    description: 'Levantamento completo de 50.000 hectares para análise de produtividade',
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&crop=center',
    results: 'Aumento de 25% na eficiência de gestão',
    icon: 'mdi-sprout',
    category: 'Agricultura',
  },
  {
    title: 'Automação QGIS - Empresa de Mineração',
    description: 'Desenvolvimento de fluxos automatizados para análise de dados geoespaciais',
    image:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&crop=center',
    results: 'Redução de 80% no tempo de processamento',
    icon: 'mdi-pickaxe',
    category: 'Mineração',
  },
  {
    title: 'Projeto Ambiental - Bacia Hidrográfica',
    description: 'Análise de cobertura vegetal e impactos ambientais em área de 100.000 hectares',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center',
    results: 'Identificação de 15 áreas prioritárias para conservação',
    icon: 'mdi-leaf',
    category: 'Meio Ambiente',
  },
  {
    title: 'Planejamento Urbano - São Paulo',
    description: 'Sistema de análise espacial para otimização de infraestrutura urbana',
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center',
    results: 'Otimização de 40% das rotas de transporte público',
    icon: 'mdi-city',
    category: 'Urbanismo',
  },
  {
    title: 'Energia Renovável - Bahia',
    description: 'Mapeamento de potencial eólico e solar para projetos de energia limpa',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&crop=center',
    results: 'Identificação de 12 áreas de alto potencial',
    icon: 'mdi-lightning-bolt',
    category: 'Energia',
  },
  {
    title: 'Análise de Logística - Minas Gerais',
    description: 'Otimização de rotas de distribuição para rede varejista',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center',
    results: 'Redução de 35% nos custos de transporte',
    icon: 'mdi-truck-delivery',
    category: 'Logística',
  },
])

const mapContainer = ref<HTMLElement>()
let map: L.Map | null = null

const { initScrollAnimations, addStaggeredAnimation } = useScrollAnimations()

onMounted(() => {
  // Inicializar animações de scroll
  initScrollAnimations()

  // Adicionar animação escalonada aos cards de serviço
  setTimeout(() => {
    addStaggeredAnimation('.service-card', 150)
  }, 500)

  if (mapContainer.value) {
    // Inicializar mapa focado na região do Brasil
    map = L.map(mapContainer.value, {
      center: [-15.6014, -47.7308], // Centro do Brasil (Brasília)
      zoom: 5,
      zoomControl: false,
      attributionControl: false,
      minZoom: 4,
      maxZoom: 10,
    })

    // Adicionar tile layer com estilo mais imponente (Satellite)
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: '© Esri',
        maxZoom: 10,
      },
    ).addTo(map)

    // Adicionar tile layer de estradas para contexto
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: '© Esri',
        maxZoom: 10,
        opacity: 0.3,
      },
    ).addTo(map)

    // Projetos em todo o Brasil para mostrar abrangência nacional
    const projects = [
      {
        lat: -15.6014,
        lng: -47.7308,
        title: 'Brasília - Capital Federal',
        type: 'capital',
        size: 'large',
      },
      {
        lat: -23.5505,
        lng: -46.6333,
        title: 'São Paulo - SP',
        type: 'metropolis',
        size: 'large',
      },
      {
        lat: -22.9068,
        lng: -43.1729,
        title: 'Rio de Janeiro - RJ',
        type: 'metropolis',
        size: 'large',
      },
      {
        lat: -12.9716,
        lng: -38.5011,
        title: 'Salvador - BA',
        type: 'capital',
        size: 'medium',
      },
      {
        lat: -3.119,
        lng: -60.0217,
        title: 'Manaus - AM',
        type: 'capital',
        size: 'medium',
      },
      {
        lat: -30.0346,
        lng: -51.2177,
        title: 'Porto Alegre - RS',
        type: 'capital',
        size: 'medium',
      },
      {
        lat: -16.6864,
        lng: -49.2653,
        title: 'Goiânia - GO',
        type: 'capital',
        size: 'medium',
      },
    ]

    // Adicionar marcadores dos projetos
    projects.forEach((project) => {
      const markerColor = project.type === 'capital' ? '#0B5FA5' : '#1FA7A1'
      const markerSize = project.size === 'large' ? 12 : 8

      const marker = L.circleMarker([project.lat, project.lng], {
        radius: markerSize,
        fillColor: markerColor,
        color: '#FFFFFF',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8,
      })

      if (map) {
        marker.addTo(map)
      }

      // Tooltip com informações do projeto
      marker.bindTooltip(
        `<div class="project-tooltip">
           <strong>${project.title}</strong><br>
           <small>Projeto GeoQuantum</small>
         </div>`,
        {
          permanent: false,
          direction: 'top',
          className: 'custom-tooltip',
        },
      )
    })

    // Ajustar o mapa para mostrar todos os marcadores
    if (map) {
      const bounds = L.latLngBounds(projects.map((p) => [p.lat, p.lng]))
      map.fitBounds(bounds, { padding: [20, 20] })
    }
  }
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
  window.removeEventListener('scroll', handleScroll)
})

// Controle de animações baseadas no scroll
const handleScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll')
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animate')
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Executa uma vez para elementos já visíveis
})
</script>

<style scoped>
.servicos-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
}

.map-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.85) 0%, rgba(45, 90, 135, 0.85) 100%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Elementos flutuantes animados */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.circle-1 {
  width: 120px;
  height: 120px;
  top: 15%;
  right: 10%;
  animation-duration: 8s;
}

.circle-2 {
  width: 80px;
  height: 80px;
  bottom: 20%;
  left: 15%;
  animation-duration: 10s;
}

.circle-3 {
  width: 60px;
  height: 60px;
  top: 40%;
  left: 20%;
  animation-duration: 12s;
}

/* Hero stats */
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  color: white;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .hero-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .floating-circle {
    display: none;
  }
}

.hero-content {
  display: none;
}

.hero-background {
  display: none;
}

.geometric-shapes {
  display: none;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 10%;
  animation: float 6s ease-in-out infinite;
}

.shape-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 5%;
  animation: float 8s ease-in-out infinite reverse;
}

.shape-3 {
  width: 100px;
  height: 100px;
  top: 50%;
  left: 20%;
  animation: float 7s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2e3a47;
  margin-bottom: 16px;
}

.section-header p {
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Services Section */
.services-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

/* Work Process Section */
.work-process-section {
  padding: 80px 0;
  background: white;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  margin-top: 40px;
  align-items: start;
  justify-items: center;
}

.process-step {
  text-align: center;
  padding: 20px 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.process-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.process-step::before {
  display: none;
}

.step-number {
  display: none;
}

.step-content {
  display: none;
}

.process-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  flex-shrink: 0;
}

.process-step h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2e3a47;
  margin: 0 0 10px 0;
  flex-shrink: 0;
}

.process-step p {
  color: #6c757d;
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a202c 0%, #1a365d 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.cta-content p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #2d5a87 0%, #ffc857 100%);
  color: white;
  text-decoration: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(45, 90, 135, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(45, 90, 135, 0.4);
}

.cta-button:active {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(45, 90, 135, 0.4);
}

.cta-button i {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.cta-button:hover i {
  transform: translateX(5px);
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
@media (max-width: 1200px) {
  .tech-item {
    height: 180px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
