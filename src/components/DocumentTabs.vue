<template>
  <div class="document-tabs-container">
    <!-- Barra de Busca -->
    <v-card class="search-card mb-6" elevation="2">
      <v-card-text class="pa-4">
        <v-text-field
          v-model="searchQuery"
          label="Buscar nos documentos..."
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          clearable
          @input="filterContent"
        ></v-text-field>
      </v-card-text>
    </v-card>

    <!-- Abas -->
    <v-card elevation="4">
      <v-tabs v-model="activeTab" color="primary" grow class="document-tabs">
        <v-tab v-for="tab in filteredTabs" :key="tab.key" :value="tab.key" class="text-none">
          <v-icon start>{{ tab.icon }}</v-icon>
          {{ tab.title }}
        </v-tab>
      </v-tabs>

      <v-window v-model="activeTab">
        <v-window-item v-for="tab in filteredTabs" :key="tab.key" :value="tab.key">
          <v-card-text class="pa-6">
            <!-- Conteúdo da Visão Geral -->
            <div v-if="tab.key === 'overview'" class="overview-content">
              <h2 class="text-h4 font-weight-bold mb-4 text-primary">Visão Geral da GeoQuantum</h2>

              <p class="text-body-1 mb-4">
                A <strong>GeoQuantum</strong> é uma empresa especializada em geoprocessamento e
                análise geoespacial, fundada com o objetivo de fornecer soluções inovadoras e de
                alta qualidade para projetos de engenharia, meio ambiente e desenvolvimento urbano.
              </p>

              <v-row class="mt-6">
                <v-col cols="12" md="6">
                  <h3 class="text-h5 font-weight-bold mb-3 text-secondary">Nossa Especialização</h3>
                  <ul class="text-body-1">
                    <li class="mb-2">Geoprocessamento e análise espacial</li>
                    <li class="mb-2">Mapeamento temático e cadastral</li>
                    <li class="mb-2">Sistemas de Informação Geográfica (SIG)</li>
                    <li class="mb-2">Desenvolvimento de aplicações geoespaciais</li>
                    <li class="mb-2">Consultoria técnica especializada</li>
                  </ul>
                </v-col>

                <v-col cols="12" md="6">
                  <h3 class="text-h5 font-weight-bold mb-3 text-secondary">Setores de Atuação</h3>
                  <ul class="text-body-1">
                    <li class="mb-2">Engenharia Civil e Ambiental</li>
                    <li class="mb-2">Planejamento Urbano</li>
                    <li class="mb-2">Agricultura de Precisão</li>
                    <li class="mb-2">Mineração e Recursos Naturais</li>
                    <li class="mb-2">Infraestrutura e Logística</li>
                  </ul>
                </v-col>
              </v-row>
            </div>

            <!-- Conteúdo da Missão -->
            <div v-if="tab.key === 'mission'" class="mission-content">
              <h2 class="text-h4 font-weight-bold mb-4 text-primary">Missão, Visão e Valores</h2>

              <v-row>
                <v-col cols="12" md="4">
                  <v-card class="h-100" elevation="2">
                    <v-card-item class="text-center pa-6">
                      <v-icon icon="mdi-target" size="48" color="primary" class="mb-3"></v-icon>
                      <h3 class="text-h5 font-weight-bold mb-3">Missão</h3>
                      <p class="text-body-1">
                        Fornecer soluções inovadoras em geoprocessamento que contribuam para o
                        desenvolvimento sustentável e a tomada de decisões baseada em dados
                        geoespaciais.
                      </p>
                    </v-card-item>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4">
                  <v-card class="h-100" elevation="2">
                    <v-card-item class="text-center pa-6">
                      <v-icon icon="mdi-eye" size="48" color="secondary" class="mb-3"></v-icon>
                      <h3 class="text-h5 font-weight-bold mb-3">Visão</h3>
                      <p class="text-body-1">
                        Ser referência nacional em soluções geoespaciais, reconhecida pela
                        excelência técnica e inovação em geoprocessamento.
                      </p>
                    </v-card-item>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4">
                  <v-card class="h-100" elevation="2">
                    <v-card-item class="text-center pa-6">
                      <v-icon icon="mdi-heart" size="48" color="accent" class="mb-3"></v-icon>
                      <h3 class="text-h5 font-weight-bold mb-3">Valores</h3>
                      <ul class="text-body-1 text-start">
                        <li class="mb-1">Excelência técnica</li>
                        <li class="mb-1">Inovação constante</li>
                        <li class="mb-1">Sustentabilidade</li>
                        <li class="mb-1">Compromisso com o cliente</li>
                        <li class="mb-1">Responsabilidade social</li>
                      </ul>
                    </v-card-item>
                  </v-card>
                </v-col>
              </v-row>
            </div>

            <!-- Conteúdo dos Serviços Técnicos -->
            <div v-if="tab.key === 'services'" class="services-content">
              <h2 class="text-h4 font-weight-bold mb-4 text-primary">Serviços Técnicos</h2>

              <v-row>
                <v-col cols="12" md="6" v-for="service in technicalServices" :key="service.title">
                  <v-card class="h-100 mb-4" elevation="2">
                    <v-card-item>
                      <div class="d-flex align-center mb-3">
                        <v-icon
                          :icon="service.icon"
                          size="32"
                          color="primary"
                          class="me-3"
                        ></v-icon>
                        <h3 class="text-h6 font-weight-bold">{{ service.title }}</h3>
                      </div>
                      <p class="text-body-2">{{ service.description }}</p>
                      <div v-if="service.features" class="mt-3">
                        <h6 class="text-subtitle-2 font-weight-bold mb-2">
                          Principais características:
                        </h6>
                        <ul class="text-body-2">
                          <li v-for="feature in service.features" :key="feature" class="mb-1">
                            {{ feature }}
                          </li>
                        </ul>
                      </div>
                    </v-card-item>
                  </v-card>
                </v-col>
              </v-row>
            </div>

            <!-- Conteúdo dos Casos de Uso -->
            <div v-if="tab.key === 'cases'" class="cases-content">
              <h2 class="text-h4 font-weight-bold mb-4 text-primary">Casos de Uso e Aplicações</h2>

              <v-timeline side="end" density="compact">
                <v-timeline-item
                  v-for="(case_, index) in useCases"
                  :key="index"
                  :dot-color="case_.color"
                  size="large"
                >
                  <template v-slot:opposite>
                    <div class="text-caption">{{ case_.year }}</div>
                  </template>

                  <v-card elevation="2">
                    <v-card-item>
                      <h3 class="text-h6 font-weight-bold mb-2">{{ case_.title }}</h3>
                      <p class="text-body-2 mb-2">{{ case_.description }}</p>
                      <div class="d-flex flex-wrap gap-1">
                        <v-chip
                          v-for="tech in case_.technologies"
                          :key="tech"
                          size="small"
                          color="primary"
                          variant="outlined"
                        >
                          {{ tech }}
                        </v-chip>
                      </div>
                    </v-card-item>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </div>

            <!-- Conteúdo dos Métodos -->
            <div v-if="tab.key === 'methods'" class="methods-content">
              <h2 class="text-h4 font-weight-bold mb-4 text-primary">Metodologias e Processos</h2>

              <v-row>
                <v-col cols="12" md="6" v-for="method in methodologies" :key="method.title">
                  <v-card class="h-100 mb-4" elevation="2">
                    <v-card-item>
                      <div class="d-flex align-center mb-3">
                        <v-icon
                          :icon="method.icon"
                          size="32"
                          color="secondary"
                          class="me-3"
                        ></v-icon>
                        <h3 class="text-h6 font-weight-bold">{{ method.title }}</h3>
                      </div>
                      <p class="text-body-2 mb-3">{{ method.description }}</p>
                      <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="step in method.steps" :key="step.title">
                          <v-expansion-panel-title>{{ step.title }}</v-expansion-panel-title>
                          <v-expansion-panel-text>
                            <p class="text-body-2">{{ step.description }}</p>
                          </v-expansion-panel-text>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-card-item>
                  </v-card>
                </v-col>
              </v-row>
            </div>

            <!-- Conteúdo das Políticas -->
            <div v-if="tab.key === 'policies'" class="policies-content">
              <h2 class="text-h4 font-weight-bold mb-4 text-primary">Políticas e Procedimentos</h2>

              <v-row>
                <v-col cols="12" md="6" v-for="policy in policies" :key="policy.title">
                  <v-card class="h-100 mb-4" elevation="2">
                    <v-card-item>
                      <div class="d-flex align-center mb-3">
                        <v-icon :icon="policy.icon" size="32" color="accent" class="me-3"></v-icon>
                        <h3 class="text-h6 font-weight-bold">{{ policy.title }}</h3>
                      </div>
                      <p class="text-body-2 mb-3">{{ policy.description }}</p>
                      <div v-if="policy.points" class="mt-3">
                        <ul class="text-body-2">
                          <li v-for="point in policy.points" :key="point" class="mb-1">
                            {{ point }}
                          </li>
                        </ul>
                      </div>
                    </v-card-item>
                  </v-card>
                </v-col>
              </v-row>
            </div>

            <!-- Conteúdo dos Certificados -->
            <div v-if="tab.key === 'certificates'" class="certificates-content">
              <h2 class="text-h4 font-weight-bold mb-4 text-primary">
                Certificações e Qualificações
              </h2>

              <v-row>
                <v-col cols="12" md="4" v-for="cert in certificates" :key="cert.title">
                  <v-card class="h-100 text-center" elevation="2">
                    <v-card-item class="pa-6">
                      <v-icon :icon="cert.icon" size="64" color="primary" class="mb-3"></v-icon>
                      <h3 class="text-h6 font-weight-bold mb-2">{{ cert.title }}</h3>
                      <p class="text-body-2 mb-2">{{ cert.issuer }}</p>
                      <p class="text-caption text-grey">{{ cert.validity }}</p>
                      <v-chip
                        v-if="cert.status"
                        :color="cert.status === 'Ativo' ? 'success' : 'warning'"
                        size="small"
                        class="mt-2"
                      >
                        {{ cert.status }}
                      </v-chip>
                    </v-card-item>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref('overview')
const searchQuery = ref('')

const tabs = [
  { key: 'overview', title: 'Visão Geral', icon: 'mdi-information' },
  { key: 'mission', title: 'Missão', icon: 'mdi-target' },
  { key: 'services', title: 'Serviços Técnicos', icon: 'mdi-cog' },
  { key: 'cases', title: 'Casos de Uso', icon: 'mdi-briefcase' },
  { key: 'methods', title: 'Métodos', icon: 'mdi-chart-line' },
  { key: 'policies', title: 'Políticas', icon: 'mdi-shield-check' },
  { key: 'certificates', title: 'Certificados', icon: 'mdi-certificate' },
]

const technicalServices = [
  {
    title: 'Geoprocessamento',
    icon: 'mdi-earth',
    description: 'Análise e processamento de dados geoespaciais para tomada de decisões.',
    features: ['Análise espacial avançada', 'Modelagem geoestatística', 'Interpolação de dados'],
  },
  {
    title: 'Mapeamento Temático',
    icon: 'mdi-map',
    description: 'Criação de mapas especializados para diferentes aplicações.',
    features: ['Mapas de uso do solo', 'Mapas de risco', 'Mapas de vulnerabilidade'],
  },
  {
    title: 'Sistemas de Informação Geográfica',
    icon: 'mdi-layers',
    description: 'Desenvolvimento e implementação de sistemas SIG personalizados.',
    features: ['WebGIS', 'Mobile GIS', 'Desktop GIS'],
  },
  {
    title: 'Análise Ambiental',
    icon: 'mdi-leaf',
    description: 'Estudos e análises ambientais com suporte geoespacial.',
    features: ['Avaliação de impacto', 'Monitoramento ambiental', 'Planejamento territorial'],
  },
]

const useCases = [
  {
    year: '2023',
    title: 'Planejamento Urbano - São Paulo',
    description:
      'Desenvolvimento de sistema de planejamento urbano integrado para a cidade de São Paulo.',
    technologies: ['QGIS', 'PostgreSQL', 'GeoServer'],
    color: 'primary',
  },
  {
    year: '2022',
    title: 'Agricultura de Precisão - Mato Grosso',
    description:
      'Implementação de sistema de agricultura de precisão para grandes propriedades rurais.',
    technologies: ['ArcGIS', 'Python', 'Machine Learning'],
    color: 'secondary',
  },
  {
    year: '2021',
    title: 'Monitoramento Ambiental - Amazônia',
    description: 'Sistema de monitoramento ambiental para áreas de preservação na Amazônia.',
    technologies: ['Google Earth Engine', 'JavaScript', 'Cloud Computing'],
    color: 'accent',
  },
]

const methodologies = [
  {
    title: 'Metodologia de Análise Espacial',
    icon: 'mdi-chart-scatter-plot',
    description: 'Processo estruturado para análise de dados geoespaciais.',
    steps: [
      { title: 'Coleta de Dados', description: 'Aquisição e validação de dados geoespaciais' },
      { title: 'Processamento', description: 'Tratamento e análise dos dados coletados' },
      { title: 'Análise', description: 'Aplicação de técnicas estatísticas e espaciais' },
      { title: 'Validação', description: 'Verificação da qualidade dos resultados' },
    ],
  },
  {
    title: 'Desenvolvimento de Sistemas SIG',
    icon: 'mdi-desktop-classic',
    description: 'Metodologia para desenvolvimento de sistemas de informação geográfica.',
    steps: [
      {
        title: 'Levantamento de Requisitos',
        description: 'Identificação das necessidades do usuário',
      },
      { title: 'Design do Sistema', description: 'Arquitetura e interface do sistema' },
      { title: 'Implementação', description: 'Desenvolvimento e programação' },
      { title: 'Testes e Deploy', description: 'Validação e implantação do sistema' },
    ],
  },
]

const policies = [
  {
    title: 'Política de Qualidade',
    icon: 'mdi-quality-high',
    description: 'Compromisso com a excelência em todos os projetos.',
    points: [
      'Controle rigoroso de qualidade',
      'Revisão técnica especializada',
      'Documentação completa',
      'Feedback contínuo do cliente',
    ],
  },
  {
    title: 'Política Ambiental',
    icon: 'mdi-earth',
    description: 'Compromisso com a sustentabilidade e preservação ambiental.',
    points: [
      'Uso de tecnologias sustentáveis',
      'Minimização de impacto ambiental',
      'Promoção de práticas verdes',
      'Educação ambiental',
    ],
  },
  {
    title: 'Política de Inovação',
    icon: 'mdi-lightbulb',
    description: 'Busca constante por novas tecnologias e metodologias.',
    points: [
      'Pesquisa e desenvolvimento',
      'Parcerias tecnológicas',
      'Capacitação da equipe',
      'Adoção de novas tecnologias',
    ],
  },
  {
    title: 'Política de Segurança',
    icon: 'mdi-shield',
    description: 'Proteção de dados e informações dos clientes.',
    points: [
      'Confidencialidade garantida',
      'Backup de dados',
      'Controle de acesso',
      'Conformidade com LGPD',
    ],
  },
]

const certificates = [
  {
    title: 'ISO 9001',
    icon: 'mdi-certificate',
    issuer: 'Bureau Veritas',
    validity: 'Válido até 2025',
    status: 'Ativo',
  },
  {
    title: 'ISO 14001',
    icon: 'mdi-leaf',
    issuer: 'Bureau Veritas',
    validity: 'Válido até 2025',
    status: 'Ativo',
  },
  {
    title: 'Esri Partner',
    icon: 'mdi-handshake',
    issuer: 'Environmental Systems Research Institute',
    validity: 'Válido até 2024',
    status: 'Ativo',
  },
]

const filteredTabs = computed(() => {
  if (!searchQuery.value) return tabs

  return tabs.filter((tab) => {
    const content = getTabContent(tab.key)
    return content.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
})

const getTabContent = (tabKey: string): string => {
  switch (tabKey) {
    case 'overview':
      return 'Visão Geral da GeoQuantum empresa especializada geoprocessamento análise geoespacial'
    case 'mission':
      return 'Missão Visão Valores fornecer soluções inovadoras geoprocessamento desenvolvimento sustentável'
    case 'services':
      return 'Serviços Técnicos Geoprocessamento Mapeamento Sistemas Informação Geográfica Análise Ambiental'
    case 'cases':
      return 'Casos de Uso Aplicações Planejamento Urbano Agricultura Precisão Monitoramento Ambiental'
    case 'methods':
      return 'Metodologias Processos Análise Espacial Desenvolvimento Sistemas SIG'
    case 'policies':
      return 'Políticas Procedimentos Qualidade Ambiental Inovação Segurança'
    case 'certificates':
      return 'Certificações Qualificações ISO 9001 ISO 14001 Esri Partner'
    default:
      return ''
  }
}

const filterContent = () => {
  // A busca já é feita automaticamente pelo computed filteredTabs
}
</script>

<style scoped>
.document-tabs-container {
  max-width: 1200px;
  margin: 0 auto;
}

.search-card {
  border-radius: 12px;
}

.document-tabs {
  border-radius: 12px 12px 0 0;
}

.h-100 {
  height: 100%;
}

.v-timeline-item {
  min-height: 120px;
}
</style>
