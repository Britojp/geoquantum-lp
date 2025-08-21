<template>
  <div class="equipe-page">
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
                Nossa Equipe
              </h1>
              <p class="text-h6 text-grey-lighten-2 mb-6">
                Conheça os profissionais especializados que fazem a GeoQuantum uma referência em
                geoprocessamento.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Equipe Principal -->
    <section class="team-section py-16">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Equipe de Liderança</h2>
          <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto">
            Nossos líderes que guiam a empresa com visão estratégica e expertise técnica.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="member in leadershipTeam"
            :key="member.id"
            cols="12"
            sm="6"
            lg="4"
            class="mb-6"
          >
            <v-card class="team-card h-100" elevation="4">
              <v-img :src="member.photo" height="300" cover class="member-photo"></v-img>

              <v-card-item class="text-center pa-6">
                <h3 class="text-h5 font-weight-bold mb-1">{{ member.name }}</h3>
                <p class="text-body-1 text-primary font-weight-bold mb-2">
                  {{ member.position }}
                </p>
                <p class="text-body-2 text-grey-darken-1 mb-3">
                  {{ member.description }}
                </p>

                <div class="d-flex flex-wrap gap-1 justify-center">
                  <v-chip
                    v-for="specialty in member.specialties"
                    :key="specialty"
                    size="small"
                    color="primary"
                    variant="outlined"
                  >
                    {{ specialty }}
                  </v-chip>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Equipe Técnica -->
    <section class="technical-team py-16 bg-grey-lighten-4">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Equipe Técnica</h2>
          <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto">
            Especialistas em geoprocessamento, desenvolvimento e análise geoespacial.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="member in technicalTeam"
            :key="member.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="mb-6"
          >
            <v-card class="team-card h-100" elevation="4">
              <v-img :src="member.photo" height="250" cover class="member-photo"></v-img>

              <v-card-item class="text-center pa-6">
                <h3 class="text-h6 font-weight-bold mb-1">{{ member.name }}</h3>
                <p class="text-body-2 text-primary font-weight-bold mb-2">
                  {{ member.position }}
                </p>
                <p class="text-body-2 text-grey-darken-1 mb-3">
                  {{ member.description }}
                </p>

                <div class="d-flex flex-wrap gap-1 justify-center">
                  <v-chip
                    v-for="skill in member.skills"
                    :key="skill"
                    size="small"
                    color="secondary"
                    variant="outlined"
                  >
                    {{ skill }}
                  </v-chip>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Estatísticas -->
    <section class="stats-section py-16">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" sm="6" md="3" class="mb-6">
            <div class="stat-item">
              <div class="text-h2 font-weight-bold text-white mb-2">15+</div>
              <div class="text-h6 text-grey-lighten-2">Profissionais</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="mb-6">
            <div class="stat-item">
              <div class="text-h2 font-weight-bold text-white mb-2">50+</div>
              <div class="text-h6 text-grey-lighten-2">Anos de Experiência</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="mb-6">
            <div class="stat-item">
              <div class="text-h2 font-weight-bold text-white mb-2">20+</div>
              <div class="text-h6 text-grey-lighten-2">Tecnologias Dominadas</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="mb-6">
            <div class="stat-item">
              <div class="text-h2 font-weight-bold text-white mb-2">10+</div>
              <div class="text-h6 text-grey-lighten-2">Certificações</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-16 bg-gradient-primary">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-white mb-4">Pronto para Trabalhar Conosco?</h2>
            <p class="text-h6 text-grey-lighten-2 mb-6">
              Entre em contato e descubra como nossa equipe pode ajudar você a transformar seus
              dados geoespaciais em insights valiosos.
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
                Entre em Contato
              </v-btn>

              <v-btn size="large" variant="outlined" to="/servicos" class="text-white border-white">
                <v-icon start>mdi-cog</v-icon>
                Nossos Serviços
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'

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
      const markerColor = project.type === 'capital' ? '#1a365d' : '#2d5a87'
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

const leadershipTeam = [
  {
    id: 1,
    name: 'Dr. Carlos Silva',
    position: 'Diretor Técnico',
    description: 'Especialista em geoprocessamento com mais de 15 anos de experiência.',
    photo: '/api/placeholder/300/300',
    specialties: ['Análise Espacial', 'Sistemas SIG', 'Machine Learning'],
  },
  {
    id: 2,
    name: 'Dra. Ana Santos',
    position: 'Coordenadora de Projetos',
    description: 'Mestre em Geografia com foco em análise espacial.',
    photo: '/api/placeholder/300/300',
    specialties: ['Gestão de Projetos', 'Análise Espacial', 'Planejamento Urbano'],
  },
  {
    id: 3,
    name: 'Eng. Roberto Lima',
    position: 'Gerente de Desenvolvimento',
    description: 'Especialista em desenvolvimento de sistemas geoespaciais.',
    photo: '/api/placeholder/300/300',
    specialties: ['Desenvolvimento Web', 'Sistemas SIG', 'Arquitetura de Software'],
  },
]

const technicalTeam = [
  {
    id: 4,
    name: 'Tec. Maria Costa',
    position: 'Analista de Dados',
    description: 'Especialista em análise geoespacial e modelagem de dados.',
    photo: '/api/placeholder/250/250',
    skills: ['Python', 'R', 'QGIS', 'PostgreSQL'],
  },
  {
    id: 5,
    name: 'Eng. Pedro Alves',
    position: 'Consultor Técnico',
    description: 'Consultor especializado em projetos ambientais.',
    photo: '/api/placeholder/250/250',
    skills: ['ArcGIS', 'ENVI', 'Análise Ambiental', 'EIA/RIMA'],
  },
  {
    id: 6,
    name: 'Tec. Juliana Ferreira',
    position: 'Cartógrafa',
    description: 'Especialista em cartografia digital e mapeamento temático.',
    photo: '/api/placeholder/250/250',
    skills: ['QGIS', 'ArcGIS Pro', 'Cartografia', 'Design Gráfico'],
  },
  {
    id: 7,
    name: 'Eng. Lucas Mendes',
    position: 'Desenvolvedor Full Stack',
    description: 'Especialista em desenvolvimento web geoespacial.',
    photo: '/api/placeholder/250/250',
    skills: ['Vue.js', 'Node.js', 'PostgreSQL', 'GeoServer'],
  },
]
</script>

<style scoped>
.equipe-page {
  min-height: 100vh;
}

.max-width-600 {
  max-width: 600px;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
}

.team-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.1);
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
}

.team-card:hover {
  transform: translateY(-8px);
  border-color: rgba(26, 54, 93, 0.3);
  box-shadow: 0 20px 40px rgba(26, 54, 93, 0.15);
}

/* Custom chip styles */
:deep(.team-card .v-chip) {
  border-color: #1a365d !important;
  color: #1a365d !important;
}

:deep(.team-card .v-chip:hover) {
  background-color: rgba(26, 54, 93, 0.1) !important;
}

.h-100 {
  height: 100%;
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

/* Stats section */
.stats-section {
  background: #1a365d !important;
}

.stat-item {
  text-align: center;
}

.stat-item .text-h2 {
  color: #ffffff !important;
  font-weight: 700;
}

.stat-item .text-h6 {
  color: #e2e8f0 !important;
}

/* CTA section */
.cta-section {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%) !important;
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

  .hero-section,
  .team-section,
  .technical-team,
  .stats-section,
  .cta-section {
    padding: 3rem 0;
  }
}
</style>
