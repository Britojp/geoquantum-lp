<template>
  <div class="projetos-page">
    <!-- Hero Section com Mapa de Fundo -->
    <GlobalMap
      title="Nossos Projetos"
      subtitle="Conheça alguns dos projetos que desenvolvemos em geoprocessamento e análise geoespacial."
    >
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
    </GlobalMap>

    <!-- Filtros e Busca -->
    <section class="filters-section py-8 bg-grey-lighten-4">
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
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-btn color="primary" variant="elevated" @click="resetFilters" block> Limpar </v-btn>
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
                  <v-chip :color="project.category.color" size="small" class="mb-2">
                    {{ project.category.name }}
                  </v-chip>
                  <div class="project-year">{{ project.year }}</div>
                </div>
              </v-img>

              <v-card-item>
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
                  <div class="d-flex flex-wrap gap-1">
                    <v-chip
                      v-for="service in project.services"
                      :key="service"
                      size="small"
                      color="secondary"
                      variant="outlined"
                    >
                      {{ service }}
                    </v-chip>
                  </div>
                </div>

                <div class="mb-3">
                  <h6 class="text-subtitle-2 font-weight-bold mb-2">Tecnologias:</h6>
                  <div class="d-flex flex-wrap gap-1">
                    <v-chip
                      v-for="tech in project.technologies"
                      :key="tech"
                      size="small"
                      color="primary"
                      variant="outlined"
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
          <p class="text-h6 text-grey-darken-1">
            Visualize a distribuição geográfica dos nossos projetos pelo Brasil.
          </p>
        </div>

        <v-card elevation="4" class="map-card">
          <div ref="mapContainer" class="map-container" style="height: 500px"></div>
        </v-card>
      </v-container>
    </section>

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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import GlobalMap from '@/components/GlobalMap.vue'

const router = useRouter()

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedTechnology = ref('')
const currentPage = ref(1)
const showDetails = ref(false)
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
</script>

<style scoped>
.projetos-page {
  min-height: 100vh;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
}

.project-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-image {
  position: relative;
}

.project-overlay {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
}

.project-year {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: bold;
}

.map-card {
  border-radius: 12px;
  overflow: hidden;
}

/* Custom marker styles */
:deep(.custom-marker) {
  background: transparent;
}

:deep(.marker-icon) {
  width: 30px;
  height: 30px;
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: relative;
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
  border-top: 8px solid currentColor;
}

.h-100 {
  height: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .filters-section,
  .projects-section,
  .map-section {
    padding: 3rem 0;
  }
}
</style>
