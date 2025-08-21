<template>
  <div class="home-page">
    <HeroMap />
    <section class="services-section py-16">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Nossos Serviços</h2>
          <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto">
            Oferecemos soluções completas em geoprocessamento e análise geoespacial para diversos
            setores e aplicações.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="service in services"
            :key="service.id"
            cols="12"
            sm="6"
            md="3"
            class="mb-6 d-flex"
          >
            <ServiceCard :service="service" class="flex-grow-1" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="stats-section py-16 bg-primary">
      <v-container>
        <v-row class="text-center justify-center">
          <v-col cols="12" sm="6" md="4" class="mb-6">
            <div class="stat-item">
              <div class="text-h2 font-weight-bold text-white mb-2">20+</div>
              <div class="text-h6 text-grey-lighten-2">Clientes Fidelizados</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="mb-6">
            <div class="stat-item">
              <div class="text-h2 font-weight-bold text-white mb-2">1</div>
              <div class="text-h6 text-grey-lighten-2">Ano de Atuação</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="mb-6">
            <div class="stat-item">
              <div class="text-h2 font-weight-bold text-white mb-2">9</div>
              <div class="text-h6 text-grey-lighten-2">Serviços Especializados</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Seção Sobre -->
    <section class="about-section py-16">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6" class="mb-6">
            <h2 class="text-h3 font-weight-bold text-primary mb-4">Sobre a GeoQuantum</h2>
            <p class="text-body-1 mb-4">
              Somos uma empresa especializada em geoprocessamento e análise geoespacial, com mais de
              10 anos de experiência no mercado. Nossa missão é fornecer soluções inovadoras que
              contribuam para o desenvolvimento sustentável.
            </p>
            <p class="text-body-1 mb-6">
              Atuamos em diversos setores, desde engenharia civil e ambiental até agricultura de
              precisão e planejamento urbano, sempre com foco na excelência técnica e na satisfação
              do cliente.
            </p>
            <v-btn color="primary" size="large" variant="elevated" to="/sobre">
              Conheça Nossa História
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" md="6">
            <div class="text-center">
              <img
                src="/src/assets/main-logo-removebg-preview.png"
                alt="GeoQuantum Logo"
                width="400"
                height="400"
                class="mb-4"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Seção de Projetos em Destaque -->
    <section class="featured-projects py-16 bg-grey-lighten-4">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Projetos em Destaque</h2>
          <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto">
            Conheça alguns dos nossos projetos mais relevantes e as tecnologias utilizadas em cada
            um deles.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="project in featuredProjects"
            :key="project.title"
            cols="12"
            md="4"
            class="mb-6"
          >
            <v-card class="project-card h-100" elevation="4">
              <v-img :src="project.image" height="200" cover class="project-image">
                <div class="project-overlay">
                  <v-chip :color="project.category.color" size="small" class="mb-2">
                    {{ project.category.name }}
                  </v-chip>
                </div>
              </v-img>

              <v-card-item>
                <v-card-title class="text-h6 font-weight-bold mb-2">
                  {{ project.title }}
                </v-card-title>
                <v-card-text class="text-body-2 text-grey-darken-1">
                  {{ project.description }}
                </v-card-text>

                <div class="d-flex flex-wrap gap-1 mb-3">
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

                <v-btn color="primary" variant="outlined" size="small" to="/projetos">
                  Ver Detalhes
                </v-btn>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>

        <div class="text-center mt-8">
          <v-btn color="primary" size="large" variant="elevated" to="/projetos">
            Ver Todos os Projetos
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- Seção CTA -->
    <section class="cta-section py-16 bg-gradient-primary">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-white mb-4">
              Pronto para Iniciar Seu Projeto?
            </h2>
            <p class="text-h6 text-grey-lighten-2 mb-6">
              Entre em contato conosco e descubra como podemos ajudar você a transformar seus dados
              geoespaciais em insights valiosos.
            </p>
            <div class="d-flex flex-column flex-sm-row gap-6 justify-center">
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

              <v-btn
                size="large"
                variant="outlined"
                class="text-white border-white documents-btn"
                :ripple="true"
                :loading="false"
                @click="navigateToDocuments"
              >
                <v-icon start size="20">mdi-file-document</v-icon>
                Ver Documentação
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroMap from '../components/HeroMap.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToDocuments = () => {
  router.push('/documentos')
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
      'Desenvolvimento de sistema integrado para planejamento urbano da cidade de São Paulo.',
    image: '/api/placeholder/400/200',
    category: { name: 'Planejamento Urbano', color: 'primary' },
    technologies: ['QGIS', 'PostgreSQL', 'GeoServer', 'Vue.js'],
  },
  {
    title: 'Agricultura de Precisão - Mato Grosso',
    description:
      'Implementação de sistema de agricultura de precisão para grandes propriedades rurais.',
    image: '/api/placeholder/400/200',
    category: { name: 'Agricultura', color: 'success' },
    technologies: ['ArcGIS', 'Python', 'Machine Learning', 'IoT'],
  },
  {
    title: 'Monitoramento Ambiental - Amazônia',
    description: 'Sistema de monitoramento ambiental para áreas de preservação na Amazônia.',
    image: '/api/placeholder/400/200',
    category: { name: 'Meio Ambiente', color: 'info' },
    technologies: ['Google Earth Engine', 'JavaScript', 'Cloud Computing'],
  },
]
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
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
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

.project-card {
  border-radius: 8px;
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
l .documents-btn:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
}

.h-100 {
  height: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .services-section,
  .about-section,
  .featured-projects {
    padding: 3rem 0;
  }

  .stats-section {
    padding: 2rem 0;
  }

  .stat-item .text-h2 {
    font-size: 2.5rem !important;
  }

  .stat-item {
    padding: 16px;
    margin-bottom: 16px;
  }
}
</style>
