<template>
  <div class="servicos-page">
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
                Nossos Serviços
              </h1>
              <p class="text-h6 text-grey-lighten-2 mb-6">
                Soluções completas em geoprocessamento e análise geoespacial para diversos setores e
                aplicações.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Serviços Principais -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2>Serviços Especializados</h2>
          <p>Oferecemos soluções completas em geoprocessamento e análise espacial</p>
        </div>

        <div class="services-grid">
          <ServiceCard v-for="service in services" :key="service.id" :service="service" />
        </div>
      </div>
    </section>

    <!-- Como Trabalhamos -->
    <section class="workflow-section py-16">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Como Trabalhamos</h2>
          <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto">
            Metodologia comprovada para entregar resultados excepcionais em geoprocessamento
          </p>
        </div>

        <!-- Timeline Horizontal -->
        <div class="timeline-container">
          <div class="timeline-line"></div>

          <!-- Passo 1: Análise de Requisitos -->
          <div class="timeline-step">
            <div class="step-number">1</div>
            <div class="step-title">Análise de Requisitos</div>
            <div class="step-description">Definir escopo e objetivos</div>
            <div class="step-content">
              <div class="step-icon">
                <i class="mdi mdi-clipboard-text"></i>
              </div>
              <p class="step-details">
                Compreendemos suas necessidades específicas, analisamos os objetivos do projeto,
                definimos o escopo detalhado e estabelecemos os critérios de sucesso para garantir
                que a solução atenda exatamente às suas expectativas.
              </p>
            </div>
          </div>

          <!-- Passo 2: Planejamento -->
          <div class="timeline-step">
            <div class="step-number">2</div>
            <div class="step-title">Planejamento</div>
            <div class="step-description">Estratégia e cronograma</div>
            <div class="step-content">
              <div class="step-icon">
                <i class="mdi mdi-chart-timeline-variant"></i>
              </div>
              <p class="step-details">
                Desenvolvemos uma estratégia completa com cronograma detalhado, alocação de
                recursos, definição de marcos importantes e plano de execução para garantir que o
                projeto seja entregue no prazo e dentro do orçamento estabelecido.
              </p>
            </div>
          </div>

          <!-- Passo 3: Coleta de Dados -->
          <div class="timeline-step">
            <div class="step-number">3</div>
            <div class="step-title">Coleta de Dados</div>
            <div class="step-description">Organizar dados geoespaciais</div>
            <div class="step-content">
              <div class="step-icon">
                <i class="mdi mdi-database"></i>
              </div>
              <p class="step-details">
                Gerenciamos e organizamos dados geoespaciais de múltiplas fontes, incluindo imagens
                de satélite, dados cartográficos, informações cadastrais e levantamentos de campo,
                garantindo qualidade e consistência para o processamento posterior.
              </p>
            </div>
          </div>

          <!-- Passo 4: Processamento -->
          <div class="timeline-step">
            <div class="step-number">4</div>
            <div class="step-title">Processamento</div>
            <div class="step-description">Análise e geoprocessamento</div>
            <div class="step-content">
              <div class="step-icon">
                <i class="mdi mdi-cog"></i>
              </div>
              <p class="step-details">
                Aplicamos técnicas avançadas de geoprocessamento, análise espacial e modelagem
                geoespacial utilizando as melhores ferramentas do mercado para transformar dados
                brutos em informações valiosas e insights acionáveis para sua tomada de decisão.
              </p>
            </div>
          </div>

          <!-- Passo 5: Entrega -->
          <div class="timeline-step">
            <div class="step-number">5</div>
            <div class="step-title">Entrega</div>
            <div class="step-description">Resultados e documentação</div>
            <div class="step-content">
              <div class="step-icon">
                <i class="mdi mdi-check-circle"></i>
              </div>
              <p class="step-details">
                Entregamos resultados finais com documentação técnica completa, relatórios
                detalhados, mapas temáticos, arquivos digitais e suporte pós-entrega para garantir
                que você possa utilizar efetivamente todas as soluções desenvolvidas.
              </p>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Tecnologias Utilizadas -->
    <section class="technologies-section">
      <div class="container">
        <div class="section-header">
          <h2>Tecnologias e Ferramentas</h2>
          <p>Utilizamos as melhores tecnologias do mercado para garantir qualidade e precisão</p>
        </div>

        <div class="technologies-grid">
          <div class="tech-item" v-for="tech in technologies" :key="tech.name">
            <div class="tech-icon">
              <i :class="tech.icon"></i>
            </div>
            <h4>{{ tech.name }}</h4>
            <p>{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Setores de Atuação -->
    <section class="sectors-section">
      <div class="container">
        <div class="section-header">
          <h2>Setores de Atuação</h2>
          <p>Atendemos diversos setores com soluções personalizadas</p>
        </div>

        <div class="sectors-grid">
          <div class="sector-card" v-for="sector in sectors" :key="sector.name">
            <div class="sector-icon">
              <i :class="sector.icon"></i>
            </div>
            <h4>{{ sector.name }}</h4>
            <p>{{ sector.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Casos de Sucesso -->
    <section class="success-cases-section">
      <div class="container">
        <div class="section-header">
          <h2>Casos de Sucesso</h2>
          <p>Projetos que demonstram nossa expertise e resultados</p>
        </div>

        <div class="cases-grid">
          <div class="case-card" v-for="successCase in successCases" :key="successCase.title">
            <div class="case-image">
              <i :class="successCase.icon"></i>
            </div>
            <div class="case-content">
              <h4>{{ successCase.title }}</h4>
              <p>{{ successCase.description }}</p>
              <div class="case-results">
                <span class="result-item">
                  <i class="mdi mdi-check-circle"></i>
                  {{ successCase.results }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Pronto para Transformar seus Dados?</h2>
          <p>Entre em contato e descubra como podemos ajudar seu projeto</p>
          <router-link to="/contato" class="cta-button">
            Solicitar Orçamento
            <i class="mdi mdi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import ServiceCard from '@/components/ServiceCard.vue'

interface Service {
  id: number
  title: string
  description: string
  fullDescription: string
  features?: string[]
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
  },
])

const workProcess = ref([
  {
    title: 'Análise de Requisitos',
    description: 'Entendemos suas necessidades e objetivos para definir a melhor abordagem',
  },
  {
    title: 'Planejamento e Estratégia',
    description: 'Desenvolvemos um plano detalhado com cronograma e recursos necessários',
  },
  {
    title: 'Execução e Desenvolvimento',
    description: 'Implementamos a solução com as melhores práticas e tecnologias',
  },
  {
    title: 'Testes e Validação',
    description: 'Garantimos a qualidade e precisão dos resultados obtidos',
  },
  {
    title: 'Entrega e Suporte',
    description: 'Entregamos o projeto e oferecemos suporte contínuo',
  },
])

const technologies = ref([
  {
    name: 'QGIS',
    icon: 'mdi mdi-map',
    description: 'Sistema de Informação Geográfica de código aberto',
  },
  {
    name: 'Python',
    icon: 'mdi mdi-language-python',
    description: 'Linguagem de programação para automação e análise',
  },
  {
    name: 'PostgreSQL/PostGIS',
    icon: 'mdi mdi-database',
    description: 'Banco de dados espacial robusto e confiável',
  },
  {
    name: 'Leaflet/OpenLayers',
    icon: 'mdi mdi-web',
    description: 'Bibliotecas para visualização de mapas web',
  },
  {
    name: 'GDAL/OGR',
    icon: 'mdi mdi-file-multiple',
    description: 'Bibliotecas para processamento de dados geoespaciais',
  },
  {
    name: 'R',
    icon: 'mdi mdi-chart-line',
    description: 'Linguagem para análise estatística e visualização',
  },
])

const sectors = ref([
  {
    name: 'Agricultura',
    icon: 'mdi mdi-sprout',
    description: 'Mapeamento agrícola, análise de produtividade e gestão de talhões',
  },
  {
    name: 'Meio Ambiente',
    icon: 'mdi mdi-leaf',
    description: 'Projetos ambientais, análise de cobertura vegetal e impactos',
  },
  {
    name: 'Mineração',
    icon: 'mdi mdi-pickaxe',
    description: 'Análise de áreas de mineração e gestão de recursos',
  },
  {
    name: 'Urbanismo',
    icon: 'mdi mdi-city',
    description: 'Planejamento urbano, análise de uso do solo e infraestrutura',
  },
  {
    name: 'Logística',
    icon: 'mdi mdi-truck-delivery',
    description: 'Otimização de rotas e análise de localização',
  },
  {
    name: 'Energia',
    icon: 'mdi mdi-lightning-bolt',
    description: 'Análise de recursos energéticos e infraestrutura',
  },
])

const successCases = ref([
  {
    title: 'Mapeamento Agrícola - Goiás',
    description: 'Levantamento completo de 50.000 hectares para análise de produtividade',
    icon: 'mdi mdi-map-marker-multiple',
    results: 'Aumento de 25% na eficiência de gestão',
  },
  {
    title: 'Automação QGIS - Empresa de Mineração',
    description: 'Desenvolvimento de fluxos automatizados para análise de dados geoespaciais',
    icon: 'mdi mdi-cog',
    results: 'Redução de 80% no tempo de processamento',
  },
  {
    title: 'Projeto Ambiental - Bacia Hidrográfica',
    description: 'Análise de cobertura vegetal e impactos ambientais em área de 100.000 hectares',
    icon: 'mdi mdi-leaf',
    results: 'Identificação de 15 áreas prioritárias para conservação',
  },
])

const mapContainer = ref<HTMLElement>()
let map: L.Map | null = null

onMounted(() => {
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
  background: linear-gradient(135deg, rgba(11, 95, 165, 0.85) 0%, rgba(31, 167, 161, 0.85) 100%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
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
  padding: 80px 0;
  background: #f8f9fa;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
  align-items: stretch;
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
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Technologies Section */
.technologies-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.technologies-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  margin-top: 40px;
  align-items: stretch;
  justify-items: center;
}

.tech-item {
  text-align: center;
  padding: 25px 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(11, 95, 165, 0.15);
}

.tech-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(11, 95, 165, 0.1) 0%, rgba(31, 167, 161, 0.1) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  flex-shrink: 0;
}

.tech-icon i {
  font-size: 28px;
  color: #0b5fa5;
}

.tech-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2e3a47;
  margin: 0 0 10px 0;
  flex-shrink: 0;
}

.tech-item p {
  color: #6c757d;
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Sectors Section */
.sectors-section {
  padding: 80px 0;
  background: white;
}

.sectors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.sector-card {
  padding: 30px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 8px;
  border: 1px solid rgba(11, 95, 165, 0.1);
  transition: all 0.3s ease;
}

.sector-card:hover {
  transform: translateY(-5px);
  border-color: rgba(11, 95, 165, 0.3);
  box-shadow: 0 15px 40px rgba(11, 95, 165, 0.1);
}

.sector-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.sector-icon i {
  font-size: 28px;
  color: white;
}

.sector-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2e3a47;
  margin-bottom: 12px;
}

.sector-card p {
  color: #6c757d;
  line-height: 1.6;
}

/* Success Cases Section */
.success-cases-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.case-card {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.case-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(11, 95, 165, 0.15);
}

.case-image {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.case-image i {
  font-size: 36px;
  color: white;
}

.case-content h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2e3a47;
  margin-bottom: 12px;
}

.case-content p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 20px;
}

.case-results {
  display: flex;
  align-items: center;
  gap: 8px;
}

.result-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1fa7a1;
  font-weight: 600;
  font-size: 0.9rem;
}

.result-item i {
  font-size: 16px;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #2e3a47 0%, #0b5fa5 100%);
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
  background: linear-gradient(135deg, #1fa7a1 0%, #ffc857 100%);
  color: white;
  text-decoration: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(31, 167, 161, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(31, 167, 161, 0.4);
}

.cta-button:active {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(31, 167, 161, 0.4);
}

.cta-button i {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.cta-button:hover i {
  transform: translateX(5px);
}

/* Timeline Horizontal */
.timeline-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 60px;
  padding: 0 20px;
}

.timeline-line {
  position: absolute;
  top: 40px;
  left: 50px;
  right: 50px;
  height: 3px;
  background: linear-gradient(90deg, #0b5fa5 0%, #1fa7a1 100%);
  z-index: 1;
}

.timeline-step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  max-width: 200px;
  z-index: 2;
}

.step-number {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
  box-shadow: 0 8px 25px rgba(11, 95, 165, 0.3);
  transition: all 0.3s ease;
}

.timeline-step:hover .step-number {
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(11, 95, 165, 0.4);
}

.step-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2e3a47;
  margin-bottom: 15px;
  line-height: 1.3;
  text-align: center;
}

.step-description {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.3;
}

.step-content {
  padding: 0 10px;
}

.step-icon {
  width: 50px;
  height: 50px;
  background: rgba(11, 95, 165, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #0b5fa5;
  font-size: 1.5rem;
}

.step-content p {
  margin: 0;
}

.step-details {
  font-size: 0.85rem;
  color: #6c757d;
  margin-top: 15px;
  line-height: 1.4;
  text-align: center;
  padding: 0 5px;
}

/* Responsive */
@media (max-width: 1200px) {
  .technologies-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    align-items: stretch;
    justify-items: center;
  }

  .tech-item {
    height: 180px;
    width: 100%;
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

  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .technologies-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: stretch;
    justify-items: center;
  }

  .tech-item {
    height: 160px;
    width: 100%;
  }

  .sectors-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .process-steps {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}

/* Responsivo para timeline */
@media (max-width: 1200px) {
  .timeline-container {
    padding: 0 10px;
  }

  .timeline-step {
    max-width: 180px;
  }

  .step-number {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }

  .step-title {
    font-size: 1rem;
  }

  .step-description {
    font-size: 0.85rem;
  }

  .step-details {
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .timeline-container {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 40px;
  }

  .timeline-line {
    display: none;
  }

  .timeline-step {
    max-width: 100%;
    width: 100%;
  }

  .step-number {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .step-title {
    font-size: 1.1rem;
  }

  .step-description {
    font-size: 1rem;
  }

  .step-details {
    font-size: 0.9rem;
    padding: 0 20px;
  }

  .step-content {
    padding: 0 20px;
  }
}
</style>
