<template>
  <div class="projetos-page">
    <!-- Hero Section com Mapa de Fundo -->
    <section class="hero-section">
      <!-- Mapa Interativo -->
      <div ref="mapContainer" class="map-container"></div>

      <!-- Overlay com Filtro Azul e Conteúdo -->
      <div class="hero-overlay">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <h1 class="text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow">
                Nossos Projetos
              </h1>
              <p class="text-h6 text-grey-lighten-2 mb-6">
                Conheça alguns dos projetos que desenvolvemos em geoprocessamento e análise
                geoespacial.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Filtros e Busca -->
    <section class="filters-section py-8">
      <v-container>
        <v-row align="center">
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="searchQuery"
              label="Buscar projetos..."
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              clearable
              @input="filterProjects"
              class="search-input"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="selectedCategory"
              label="Categoria"
              :items="categories"
              variant="outlined"
              clearable
              @update:model-value="filterProjects"
              class="category-select"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="selectedTechnology"
              label="Tecnologia"
              :items="technologies"
              variant="outlined"
              clearable
              @update:model-value="filterProjects"
              class="tech-select"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-btn
              color="primary"
              variant="elevated"
              @click="resetFilters"
              block
              class="reset-filters-btn"
            >
              Limpar
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Galeria de Projetos -->
    <section class="projects-section py-16">
      <v-container>
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <v-icon icon="mdi-magnify" size="64" color="grey" class="mb-4"></v-icon>
          <h3 class="text-h5 text-grey-darken-1 mb-2">Nenhum projeto encontrado</h3>
          <p class="text-body-1 text-grey">Tente ajustar os filtros de busca.</p>
        </div>

        <v-row v-else>
          <v-col
            v-for="project in filteredProjects"
            :key="project.id"
            cols="12"
            sm="6"
            lg="4"
            class="mb-6"
          >
            <v-card class="project-card h-100" elevation="4">
              <v-img :src="project.image" height="250" cover class="project-image">
                <div class="project-overlay">
                  <div class="project-year">{{ project.year }}</div>
                  <v-chip :color="project.category.color" size="small" class="category-chip">
                    {{ project.category.name }}
                  </v-chip>
                </div>
              </v-img>

              <v-card-item class="pa-6">
                <v-card-title class="text-h6 font-weight-bold mb-2">
                  {{ project.title }}
                </v-card-title>
                <v-card-text class="text-body-2 text-grey-darken-1 mb-3">
                  {{ project.description }}
                </v-card-text>

                <div class="mb-3">
                  <h6 class="text-subtitle-2 font-weight-bold mb-2">Cliente:</h6>
                  <p class="text-body-2">{{ project.client }}</p>
                </div>

                <div class="mb-3">
                  <h6 class="text-subtitle-2 font-weight-bold mb-2">Serviços:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <v-chip
                      v-for="service in project.services"
                      :key="service"
                      size="small"
                      color="primary"
                      variant="outlined"
                      class="service-chip"
                    >
                      {{ service }}
                    </v-chip>
                  </div>
                </div>

                <div class="mb-3">
                  <h6 class="text-subtitle-2 font-weight-bold mb-2">Tecnologias:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <v-chip
                      v-for="tech in project.technologies"
                      :key="tech"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="tech-chip"
                    >
                      {{ tech }}
                    </v-chip>
                  </div>
                </div>

                <div class="mb-3">
                  <h6 class="text-subtitle-2 font-weight-bold mb-2">Resultados:</h6>
                  <ul class="text-body-2">
                    <li v-for="result in project.results" :key="result" class="mb-1">
                      {{ result }}
                    </li>
                  </ul>
                </div>

                <v-btn
                  color="primary"
                  variant="outlined"
                  block
                  @click="showProjectDetails(project)"
                  class="project-details-btn"
                >
                  Ver Detalhes
                </v-btn>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>

        <!-- Paginação -->
        <div class="text-center mt-8">
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
    <v-dialog v-model="showDetails" max-width="800">
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

const router = useRouter()

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedTechnology = ref('')
const currentPage = ref(1)
const showDetails = ref(false)
const projectsMapContainer = ref<HTMLElement>()
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
  location: { lat: number; lng: number }
}

const selectedProject = ref<Project | null>(null)

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
    image: '/api/placeholder/400/300',
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
    image: '/api/placeholder/400/300',
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
    image: '/api/placeholder/400/300',
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
    image: '/api/placeholder/400/300',
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
    image: '/api/placeholder/400/300',
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
    image: '/api/placeholder/400/300',
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

// Lifecycle hooks
onMounted(() => {
  // Aguardar um pouco para garantir que o DOM esteja pronto
  setTimeout(() => {
    initializeProjectsMap()
  }, 100)

  // Expor função global para o popup do mapa
  ;(window as any).showProjectDetailsFromMap = showProjectDetailsFromMap
})

onUnmounted(() => {
  if (projectsMap) {
    projectsMap.remove()
    projectsMap = null
  }
  // Remover função global
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

.bg-gradient-primary {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
}

.project-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.1);
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(26, 54, 93, 0.3);
  box-shadow: 0 20px 40px rgba(26, 54, 93, 0.15);
}

.project-image {
  position: relative;
}

.project-overlay {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.project-year {
  background: #1a365d;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(26, 54, 93, 0.2);
}

.category-chip {
  margin: 0;
}

/* Custom chip styles */
:deep(.service-chip) {
  border-color: #1a365d !important;
  color: #1a365d !important;
}

:deep(.service-chip:hover) {
  background-color: rgba(26, 54, 93, 0.1) !important;
}

:deep(.tech-chip) {
  border-color: #2d5a87 !important;
  color: #2d5a87 !important;
}

:deep(.tech-chip:hover) {
  background-color: rgba(45, 90, 135, 0.1) !important;
}

/* Project details button */
:deep(.project-details-btn) {
  border-color: #1a365d !important;
  color: #1a365d !important;
  font-weight: 600;
  transition: all 0.3s ease;
}

:deep(.project-details-btn:hover) {
  background-color: #1a365d !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.2);
}

/* Reset filters button */
:deep(.reset-filters-btn) {
  background-color: #1a365d !important;
  color: white !important;
  font-weight: 600;
  transition: all 0.3s ease;
}

:deep(.reset-filters-btn:hover) {
  background-color: #2d5a87 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.2);
}

/* Filters section */
.filters-section {
  background: #f8f9fa;
}

:deep(.search-input .v-field),
:deep(.category-select .v-field),
:deep(.tech-select .v-field) {
  border-color: rgba(26, 54, 93, 0.2) !important;
}

:deep(.search-input .v-field:hover),
:deep(.category-select .v-field:hover),
:deep(.tech-select .v-field:hover) {
  border-color: rgba(26, 54, 93, 0.4) !important;
}

:deep(.search-input .v-field--focused),
:deep(.category-select .v-field--focused),
:deep(.tech-select .v-field--focused) {
  border-color: #1a365d !important;
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

.border-white {
  border-color: white !important;
}

.h-100 {
  height: 100%;
}

/* Custom marker styles */
:deep(.custom-marker) {
  background: transparent;
}

:deep(.marker-icon) {
  width: 30px;
  height: 30px;
  border: 3px solid #1a365d;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(26, 54, 93, 0.3);
  position: relative;
  background: #2d5a87;
}

:deep(.marker-icon)::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #1a365d;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    height: 50vh;
    min-height: 350px;
  }

  .hero-overlay {
    padding: 2rem 1rem;
  }

  .text-h2 {
    font-size: 2rem;
  }

  .text-h6 {
    font-size: 1rem;
  }

  .filters-section,
  .projects-section,
  .map-section,
  .cta-section {
    padding: 3rem 0;
  }
}
</style>
