<template>
  <div class="projetos-page">
    <!-- Hero Section com Mapa de Fundo -->
    <section class="hero-section">
      <!-- Mapa Interativo -->
      <div ref="mapContainer" class="map-container"></div>

      <!-- Elementos Flutuantes Animados -->
      <div class="floating-elements">
        <div class="floating-shape shape-1 animate-float"></div>
        <div class="floating-shape shape-2 animate-float" style="animation-delay: 1.5s"></div>
        <div class="floating-shape shape-3 animate-float" style="animation-delay: 3s"></div>
      </div>

      <!-- Overlay com Filtro Azul e Conteúdo -->
      <div class="hero-overlay">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <h1
                class="hero-title text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow animate-fade-in-down"
              >
                Nossos Projetos
              </h1>
              <p
                class="hero-subtitle text-h6 text-grey-lighten-2 mb-6 animate-fade-in-up animate-delay-300"
              >
                Conheça alguns dos projetos que desenvolvemos em geoprocessamento e análise
                geoespacial.
              </p>
              <div class="hero-badges animate-fade-in-up animate-delay-600">
                <div class="badge-item">
                  <i class="mdi mdi-briefcase-check"></i>
                  <span>500+ Projetos</span>
                </div>
                <div class="badge-item">
                  <i class="mdi mdi-earth"></i>
                  <span>Todo Brasil</span>
                </div>
                <div class="badge-item">
                  <i class="mdi mdi-trophy"></i>
                  <span>99% Sucesso</span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Filtros e Busca -->
    <ProjectFilters
      :categories="categories"
      :technologies="technologies"
      :search-query="searchQuery"
      :selected-category="selectedCategory"
      :selected-technology="selectedTechnology"
      @update:search-query="handleSearchUpdate"
      @update:selected-category="handleCategoryUpdate"
      @update:selected-technology="handleTechnologyUpdate"
      @reset="resetFilters"
    />

    <!-- Estatísticas de Impacto -->
    <section class="impact-stats-section py-16">
      <v-container>
        <div class="section-header text-center mb-12">
          <div class="section-icon-wrapper mx-auto mb-4">
            <i class="mdi mdi-chart-line"></i>
          </div>
          <h2 class="section-title text-h3 font-weight-bold mb-3">Impacto dos Nossos Projetos</h2>
          <p class="section-subtitle text-h6 text-grey-darken-1 max-width-800 mx-auto">
            Resultados concretos que transformam dados geoespaciais em soluções estratégicas
          </p>
        </div>

        <v-row>
          <v-col v-for="stat in impactStats" :key="stat.id" cols="12" sm="6" md="3">
            <div class="impact-card">
              <div class="impact-icon-wrapper">
                <div class="pulse-ring"></div>
                <i :class="stat.icon"></i>
              </div>
              <h3 class="impact-number">{{ stat.value }}</h3>
              <p class="impact-label">{{ stat.label }}</p>
              <p class="impact-description">{{ stat.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Galeria de Projetos -->
    <section class="projects-section py-16">
      <v-container>
        <div class="section-header text-center mb-12">
          <div class="section-icon-wrapper mx-auto mb-4">
            <i class="mdi mdi-folder-multiple"></i>
          </div>
          <h2 class="section-title text-h3 font-weight-bold mb-3">Portfólio de Projetos</h2>
          <p class="section-subtitle text-h6 text-grey-darken-1 max-width-800 mx-auto">
            Explore nossa experiência em diferentes setores e aplicações geoespaciais
          </p>
        </div>

        <div v-if="filteredProjects.length === 0" class="empty-state text-center py-12">
          <div class="empty-icon-wrapper mx-auto mb-4">
            <i class="mdi mdi-magnify"></i>
          </div>
          <h3 class="text-h5 text-grey-darken-1 mb-2">Nenhum projeto encontrado</h3>
          <p class="text-body-1 text-grey mb-4">Tente ajustar os filtros de busca.</p>
          <v-btn color="primary" variant="elevated" @click="resetFilters">
            <i class="mdi mdi-refresh mr-2"></i>
            Limpar Filtros
          </v-btn>
        </div>

        <v-row v-else class="mobile-grid">
          <v-col
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            cols="12"
            sm="6"
            lg="4"
            class="mb-6 mb-sm-4 mb-md-6 scroll-reveal"
            :data-animation="'scale-in'"
            :data-delay="index * 100"
          >
            <ProjectCard :project="project" @click="showProjectDetails" />
          </v-col>
        </v-row>

        <!-- Paginação -->
        <div class="text-center mt-8" v-if="filteredProjects.length > 0">
          <v-pagination
            v-model="currentPage"
            :length="totalPages"
            :total-visible="7"
            color="primary"
          ></v-pagination>
        </div>
      </v-container>
    </section>

    <!-- Mapa de Projetos -->
    <section class="map-section py-16 bg-grey-lighten-4">
      <v-container>
        <div class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Localização dos Projetos</h2>
          <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto">
            Visualize a distribuição geográfica dos nossos projetos pelo Brasil.
          </p>
        </div>

        <v-card elevation="4" class="map-card">
          <div ref="projectsMapContainer" class="projects-map-container"></div>
        </v-card>
      </v-container>
    </section>

    <!-- CTA Section -->
    <CtaSection
      :title="'Pronto para Desenvolver Seu Projeto?'"
      :subtitle="'Entre em contato e descubra como podemos ajudar você a transformar seus dados geoespaciais em insights valiosos.'"
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

    <!-- Modal de Detalhes do Projeto -->
    <v-dialog v-model="showDetails" max-width="800" :z-index="2000">
      <v-card v-if="selectedProject">
        <v-img :src="selectedProject.image" height="300" cover></v-img>

        <v-card-title class="text-h5 font-weight-bold pa-6 pb-0">
          {{ selectedProject.title }}
        </v-card-title>

        <v-card-text class="pa-6">
          <div class="d-flex align-center mb-4">
            <v-chip :color="selectedProject.category.color" class="me-3">
              {{ selectedProject.category.name }}
            </v-chip>
            <span class="text-body-2 text-grey">{{ selectedProject.year }}</span>
          </div>

          <p class="text-body-1 mb-4">{{ selectedProject.description }}</p>

          <v-row>
            <v-col cols="12" md="6">
              <h6 class="text-h6 font-weight-bold mb-2">Informações do Projeto:</h6>
              <ul class="text-body-1">
                <li class="mb-1"><strong>Cliente:</strong> {{ selectedProject.client }}</li>
                <li class="mb-1"><strong>Duração:</strong> {{ selectedProject.duration }}</li>
                <li class="mb-1"><strong>Equipe:</strong> {{ selectedProject.team }}</li>
                <li class="mb-1"><strong>Orçamento:</strong> {{ selectedProject.budget }}</li>
              </ul>
            </v-col>

            <v-col cols="12" md="6">
              <h6 class="text-h6 font-weight-bold mb-2">Desafios:</h6>
              <ul class="text-body-1">
                <li v-for="challenge in selectedProject.challenges" :key="challenge" class="mb-1">
                  {{ challenge }}
                </li>
              </ul>
            </v-col>
          </v-row>

          <div class="mt-6">
            <h6 class="text-h6 font-weight-bold mb-2">Resultados Alcançados:</h6>
            <ul class="text-body-1">
              <li v-for="result in selectedProject.results" :key="result" class="mb-1">
                {{ result }}
              </li>
            </ul>
          </div>

          <div class="mt-6">
            <h6 class="text-h6 font-weight-bold mb-2">Tecnologias Utilizadas:</h6>
            <div class="d-flex flex-wrap gap-2">
              <v-chip
                v-for="tech in selectedProject.technologies"
                :key="tech"
                color="primary"
                variant="outlined"
              >
                {{ tech }}
              </v-chip>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="pa-6 pt-0">
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="elevated" @click="contactAboutProject">
            Solicitar Projeto Similar
          </v-btn>
          <v-btn variant="text" @click="showDetails = false"> Fechar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import L from 'leaflet'
import CtaSection from '../components/CtaSection.vue'
import ProjectFilters from '@/components/ProjectFilters.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const router = useRouter()

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedTechnology = ref('')
const currentPage = ref(1)
const showDetails = ref(false)
const mapContainer = ref<HTMLElement>()
const projectsMapContainer = ref<HTMLElement>()
let heroMap: L.Map | null = null
let projectsMap: L.Map | null = null

interface Project {
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

const selectedProject = ref<Project | null>(null)

const impactStats = [
  {
    id: 1,
    icon: 'mdi mdi-map-marker-radius',
    value: '2.5M+',
    label: 'Km² Mapeados',
    description: 'Área total coberta em projetos de mapeamento',
  },
  {
    id: 2,
    icon: 'mdi mdi-account-group',
    value: '150+',
    label: 'Clientes Atendidos',
    description: 'Empresas e órgãos públicos em todo Brasil',
  },
  {
    id: 3,
    icon: 'mdi mdi-chart-timeline-variant',
    value: '98%',
    label: 'Taxa de Precisão',
    description: 'Acurácia média nas análises geoespaciais',
  },
  {
    id: 4,
    icon: 'mdi mdi-clock-fast',
    value: '40%',
    label: 'Redução de Tempo',
    description: 'Ganho médio de eficiência operacional',
  },
]

const projects = [
  {
    id: 1,
    title: 'Sistema de Planejamento Urbano - São Paulo',
    description:
      'Desenvolvimento de sistema integrado para planejamento urbano da cidade de São Paulo, incluindo análise de uso do solo, infraestrutura e desenvolvimento urbano.',
    client: 'Prefeitura de São Paulo',
    year: '2023',
    duration: '12 meses',
    team: '8 profissionais',
    budget: 'R$ 2.500.000',
    category: { name: 'Planejamento Urbano', color: 'primary' },
    services: ['Geoprocessamento', 'Sistemas SIG', 'Análise Espacial'],
    technologies: ['QGIS', 'PostgreSQL', 'GeoServer', 'Vue.js'],
    results: [
      'Redução de 30% no tempo de análise urbana',
      'Melhoria na tomada de decisões municipais',
      'Integração de múltiplas fontes de dados',
      'Sistema web acessível a todos os departamentos',
    ],
    challenges: [
      'Integração de dados de múltiplas fontes',
      'Desenvolvimento de interface intuitiva',
      'Processamento de grandes volumes de dados',
    ],
    image:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop&crop=center',
    location: { lat: -23.5505, lng: -46.6333 },
  },
  {
    id: 2,
    title: 'Agricultura de Precisão - Mato Grosso',
    description:
      'Implementação de sistema de agricultura de precisão para grandes propriedades rurais, incluindo monitoramento de safra e otimização de recursos.',
    client: 'Cooperativa Agrícola MT',
    year: '2022',
    duration: '8 meses',
    team: '6 profissionais',
    budget: 'R$ 1.800.000',
    category: { name: 'Agricultura', color: 'success' },
    services: ['Geoprocessamento', 'Monitoramento', 'Análise de Dados'],
    technologies: ['ArcGIS', 'Python', 'Machine Learning', 'IoT'],
    results: [
      'Aumento de 25% na produtividade agrícola',
      'Redução de 20% no uso de insumos',
      'Otimização do uso da água',
      'Monitoramento em tempo real das lavouras',
    ],
    challenges: [
      'Integração com equipamentos IoT',
      'Processamento de dados em tempo real',
      'Treinamento de usuários rurais',
    ],
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&crop=center',
    location: { lat: -15.601, lng: -56.097 },
  },
  {
    id: 3,
    title: 'Monitoramento Ambiental - Amazônia',
    description:
      'Sistema de monitoramento ambiental para áreas de preservação na Amazônia, incluindo detecção de desmatamento e análise de biodiversidade.',
    client: 'Instituto Ambiental Amazônico',
    year: '2021',
    duration: '10 meses',
    team: '5 profissionais',
    budget: 'R$ 1.200.000',
    category: { name: 'Meio Ambiente', color: 'info' },
    services: ['Monitoramento', 'Análise Ambiental', 'Sistemas SIG'],
    technologies: ['Google Earth Engine', 'JavaScript', 'Cloud Computing'],
    results: [
      'Detecção precoce de desmatamento',
      'Monitoramento em tempo real',
      'Relatórios automatizados',
      'Redução de 40% no tempo de resposta',
    ],
    challenges: [
      'Processamento de imagens de satélite',
      'Análise de grandes áreas geográficas',
      'Integração com dados de campo',
    ],
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center',
    location: { lat: -3.119, lng: -60.021 },
  },
  {
    id: 4,
    title: 'Sistema de Gestão Portuária - Santos',
    description:
      'Desenvolvimento de sistema de gestão portuária integrado, incluindo controle de navios, cargas e logística portuária.',
    client: 'Companhia Docas do Estado de São Paulo',
    year: '2023',
    duration: '14 meses',
    team: '10 profissionais',
    budget: 'R$ 3.200.000',
    category: { name: 'Logística', color: 'warning' },
    services: ['Sistemas SIG', 'Desenvolvimento Web', 'Integração'],
    technologies: ['Vue.js', 'PostgreSQL', 'GeoServer', 'Docker'],
    results: [
      'Otimização de 35% no tempo de atracação',
      'Redução de 25% nos custos operacionais',
      'Melhoria na segurança portuária',
      'Sistema integrado de gestão',
    ],
    challenges: [
      'Integração com sistemas legados',
      'Processamento de dados em tempo real',
      'Conformidade com regulamentações portuárias',
    ],
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center',
    location: { lat: -23.982, lng: -46.299 },
  },
  {
    id: 5,
    title: 'Mapeamento de Mineração - Minas Gerais',
    description:
      'Sistema de mapeamento e gestão para atividades de mineração, incluindo análise geológica e planejamento de lavra.',
    client: 'Mineração Vale Verde',
    year: '2022',
    duration: '9 meses',
    team: '7 profissionais',
    budget: 'R$ 2.100.000',
    category: { name: 'Mineração', color: 'error' },
    services: ['Geoprocessamento', 'Mapeamento', 'Análise Geológica'],
    technologies: ['ArcGIS Pro', 'Python', 'PostgreSQL', 'QGIS'],
    results: [
      'Aumento de 30% na eficiência de lavra',
      'Redução de 15% nos custos operacionais',
      'Melhoria na segurança das operações',
      'Planejamento otimizado de mina',
    ],
    challenges: [
      'Integração de dados geológicos complexos',
      'Modelagem 3D de jazidas',
      'Análise de riscos geotécnicos',
    ],
    image:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&crop=center',
    location: { lat: -19.916, lng: -43.934 },
  },
  {
    id: 6,
    title: 'Sistema de Gestão Municipal - Curitiba',
    description:
      'Sistema integrado de gestão municipal para a cidade de Curitiba, incluindo cadastro técnico e planejamento urbano.',
    client: 'Prefeitura de Curitiba',
    year: '2021',
    duration: '11 meses',
    team: '9 profissionais',
    budget: 'R$ 2.800.000',
    category: { name: 'Planejamento Urbano', color: 'primary' },
    services: ['Sistemas SIG', 'Cadastro Técnico', 'Desenvolvimento Web'],
    technologies: ['QGIS', 'PostgreSQL', 'GeoServer', 'React'],
    results: [
      'Modernização do cadastro municipal',
      'Melhoria na gestão de impostos',
      'Sistema web integrado',
      'Redução de 40% no tempo de atendimento',
    ],
    challenges: [
      'Migração de dados legados',
      'Integração com sistemas municipais',
      'Treinamento de servidores públicos',
    ],
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center',
    location: { lat: -25.428, lng: -49.273 },
  },
]

const categories = computed(() => {
  const uniqueCategories = [...new Set(projects.map((p) => p.category.name))]
  return uniqueCategories
})

const technologies = computed(() => {
  const allTechs = projects.flatMap((p) => p.technologies)
  const uniqueTechs = [...new Set(allTechs)]
  return uniqueTechs
})

const filteredProjects = computed(() => {
  let filtered = projects

  if (searchQuery.value) {
    filtered = filtered.filter(
      (project) =>
        project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  }

  if (selectedCategory.value) {
    filtered = filtered.filter((project) => project.category.name === selectedCategory.value)
  }

  if (selectedTechnology.value) {
    filtered = filtered.filter((project) => project.technologies.includes(selectedTechnology.value))
  }

  return filtered
})

const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / 6)
})

const filterProjects = () => {
  currentPage.value = 1
}

const handleSearchUpdate = (value: string) => {
  searchQuery.value = value
  filterProjects()
}

const handleCategoryUpdate = (value: string) => {
  selectedCategory.value = value
  filterProjects()
}

const handleTechnologyUpdate = (value: string) => {
  selectedTechnology.value = value
  filterProjects()
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  selectedTechnology.value = ''
  currentPage.value = 1
}

const showProjectDetails = (project: any) => {
  selectedProject.value = project
  showDetails.value = true
}

const contactAboutProject = () => {
  showDetails.value = false
  router.push({
    path: '/contato',
    query: { project: selectedProject.value?.title },
  })
}

// Função para inicializar o mapa dos projetos
const initializeProjectsMap = () => {
  if (projectsMapContainer.value && !projectsMap) {
    try {
      // Inicializar mapa focado no Brasil
      projectsMap = L.map(projectsMapContainer.value, {
        center: [-15.6014, -47.7308], // Centro do Brasil (Brasília)
        zoom: 5,
        zoomControl: true,
        attributionControl: false,
        minZoom: 4,
        maxZoom: 12,
      })

      // Adicionar tile layer base
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        {
          attribution: '© Esri',
          maxZoom: 12,
        },
      ).addTo(projectsMap)

      // Adicionar pontos dos projetos
      projects.forEach((project) => {
        if (project.location) {
          // Criar marcador personalizado
          const marker = L.circleMarker([project.location.lat, project.location.lng], {
            radius: 12,
            fillColor: getMarkerColor(project.category.color),
            color: '#1a365d',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8,
          })

          // Adicionar popup com informações do projeto
          const popupContent = `
            <div class="project-popup">
              <h4 style="margin: 0 0 8px 0; color: #1a365d; font-size: 1rem; font-weight: 600;">
                ${project.title}
              </h4>
              <p style="margin: 0 0 8px 0; color: #666; font-size: 0.875rem;">
                <strong>Cliente:</strong> ${project.client}
              </p>
              <p style="margin: 0 0 8px 0; color: #666; font-size: 0.875rem;">
                <strong>Ano:</strong> ${project.year}
              </p>
              <p style="margin: 0 0 8px 0; color: #666; font-size: 0.875rem;">
                <strong>Categoria:</strong> ${project.category.name}
              </p>
              <button 
                onclick="window.showProjectDetailsFromMap(${project.id})"
                style="
                  background: #1a365d; 
                  color: white; 
                  border: none; 
                  padding: 6px 12px; 
                  border-radius: 4px; 
                  cursor: pointer;
                  font-size: 0.875rem;
                "
              >
                Ver Detalhes
              </button>
            </div>
          `

          marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'project-popup-custom',
          })

          marker.addTo(projectsMap!)

          // Efeito de hover
          marker.on('mouseover', function (this: L.CircleMarker) {
            this.setRadius(16)
            this.setStyle({ fillOpacity: 1 })
          })

          marker.on('mouseout', function (this: L.CircleMarker) {
            this.setRadius(12)
            this.setStyle({ fillOpacity: 0.8 })
          })
        }
      })

      // Ajustar view para mostrar todos os projetos
      const bounds = L.latLngBounds(projects.map((p) => [p.location.lat, p.location.lng]))
      projectsMap.fitBounds(bounds, { padding: [20, 20] })
    } catch (error) {
      console.error('Erro ao inicializar mapa dos projetos:', error)
    }
  }
}

// Função para obter cor do marcador baseada na categoria
const getMarkerColor = (categoryColor: string) => {
  const colorMap: { [key: string]: string } = {
    primary: '#1a365d',
    success: '#2d5a87',
    info: '#4a90e2',
    warning: '#f39c12',
    error: '#e74c3c',
  }
  return colorMap[categoryColor] || '#1a365d'
}

// Função para mostrar detalhes do projeto a partir do mapa
const showProjectDetailsFromMap = (projectId: number) => {
  const project = projects.find((p) => p.id === projectId)
  if (project) {
    showProjectDetails(project)
  }
}

const initializeHeroMap = () => {
  if (mapContainer.value && !heroMap) {
    heroMap = L.map(mapContainer.value, {
      center: [-15.6014, -47.7308],
      zoom: 5,
      zoomControl: false,
      attributionControl: false,
      minZoom: 4,
      maxZoom: 10,
      dragging: false,
      scrollWheelZoom: false,
    })

    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: '© Esri',
        maxZoom: 10,
      },
    ).addTo(heroMap)

    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: '© Esri',
        maxZoom: 10,
        opacity: 0.3,
      },
    ).addTo(heroMap)
  }
}

onMounted(() => {
  setTimeout(() => {
    initializeHeroMap()
    initializeProjectsMap()
  }, 100)
  ;(window as any).showProjectDetailsFromMap = showProjectDetailsFromMap
})

onUnmounted(() => {
  if (heroMap) {
    heroMap.remove()
    heroMap = null
  }
  if (projectsMap) {
    projectsMap.remove()
    projectsMap = null
  }
  delete (window as any).showProjectDetailsFromMap
})
</script>

<style scoped>
.projetos-page {
  min-height: 100vh;
}

.max-width-600 {
  max-width: 600px;
}

.max-width-800 {
  max-width: 800px;
}

.section-header {
  margin-bottom: 3rem;
}

.section-icon-wrapper {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(26, 54, 93, 0.3);
}

.section-icon-wrapper i {
  font-size: 36px;
  color: white;
}

.section-title {
  color: #1a202c;
}

.section-subtitle {
  color: #4a5568;
  line-height: 1.6;
}

.impact-stats-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.impact-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 24px;
  padding: 32px 24px;
  text-align: center;
  box-shadow:
    0 4px 20px rgba(26, 54, 93, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(26, 54, 93, 0.08);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.impact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1a365d 0%, #2d5a87 50%, #1fa7a1 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.impact-card:hover::before {
  transform: scaleX(1);
}

.impact-card:hover {
  transform: translateY(-12px);
  box-shadow:
    0 20px 40px rgba(26, 54, 93, 0.15),
    0 5px 15px rgba(0, 0, 0, 0.1);
  border-color: rgba(26, 54, 93, 0.2);
}

.impact-icon-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: rgba(26, 54, 93, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid #1fa7a1;
  border-radius: 50%;
  animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.impact-icon-wrapper i {
  font-size: 42px;
  color: #1a365d;
  position: relative;
  z-index: 1;
}

.impact-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a365d;
  margin: 12px 0 8px;
  line-height: 1;
  background: linear-gradient(135deg, #1a365d 0%, #1fa7a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.impact-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 8px;
}

.impact-description {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

.empty-state {
  padding: 60px 20px;
}

.empty-icon-wrapper {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.08) 0%, rgba(45, 90, 135, 0.08) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-icon-wrapper i {
  font-size: 64px;
  color: #9ca3af;
}

.map-card {
  border-radius: 12px;
  overflow: hidden;
}

.projects-map-container {
  height: 500px;
  width: 100%;
  position: relative;
}

/* Estilos para os popups do mapa */
:deep(.project-popup-custom) {
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(26, 54, 93, 0.15);
}

:deep(.project-popup-custom .leaflet-popup-content-wrapper) {
  border-radius: 8px;
  background: white;
}

:deep(.project-popup-custom .leaflet-popup-tip) {
  background: white;
}

:deep(.project-popup-custom .leaflet-popup-close-button) {
  color: #1a365d;
  font-size: 18px;
  font-weight: bold;
}

:deep(.project-popup-custom .leaflet-popup-close-button:hover) {
  color: #2d5a87;
}

.hero-section {
  position: relative;
  height: 60vh;
  min-height: 450px;
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

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.shape-1 {
  width: 140px;
  height: 140px;
  top: 12%;
  right: 8%;
  animation-duration: 9s;
}

.shape-2 {
  width: 100px;
  height: 100px;
  bottom: 15%;
  left: 10%;
  animation-duration: 11s;
}

.shape-3 {
  width: 70px;
  height: 70px;
  top: 45%;
  left: 25%;
  animation-duration: 13s;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.88) 0%, rgba(45, 90, 135, 0.88) 100%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;
}

.badge-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: white;
}

.badge-item i {
  font-size: 2.5rem;
  opacity: 0.9;
}

.badge-item span {
  font-size: 0.95rem;
  font-weight: 600;
  opacity: 0.95;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.mobile-grid {
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    height: 55vh;
    min-height: 380px;
  }

  .hero-badges {
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .badge-item i {
    font-size: 2rem;
  }

  .badge-item span {
    font-size: 0.85rem;
  }

  .floating-shape {
    display: none;
  }

  .projects-map-container {
    height: 400px;
  }
}

@media (max-width: 599.98px) {
  .hero-section {
    height: 50vh;
    min-height: 350px;
  }

  .hero-badges {
    gap: 1rem;
  }

  .badge-item {
    gap: 6px;
  }

  .badge-item i {
    font-size: 1.8rem;
  }

  .badge-item span {
    font-size: 0.75rem;
  }

  .projects-map-container {
    height: 350px;
  }
}
</style>
