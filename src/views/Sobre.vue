<template>
  <div class="sobre-page">
    <!-- Hero Section com Mapa de Fundo -->
    <section class="hero-section">
      <!-- Mapa Interativo -->
      <div ref="mapContainer" class="map-container"></div>

      <!-- Overlay com Filtro Azul e Conteúdo -->
      <div class="hero-overlay">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <h1 class="text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow">Sobre a GeoQuantum</h1>
              <p class="text-h6 text-grey-lighten-2 mb-6">
                Conheça nossa história, missão e a equipe que faz a diferença no mundo do
                geoprocessamento.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- História da Empresa -->
    <section class="history-section py-16">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6" class="mb-6">
            <h2 class="text-h3 font-weight-bold text-primary mb-4">Quem Somos</h2>
            <div class="text-body-1 text-grey-darken-1 leading-relaxed">
              <p class="mb-4">
                A nossa jornada começou em 2024, quando uma geógrafa apaixonada pela análise do
                território e pela gestão de dados ambientais decidiu transformar seu conhecimento em
                um projeto com propósito.
              </p>
              <p class="mb-4">
                Com sólida formação pela FURG e especialização em geoprocessamento, SIG e
                sensoriamento remoto, ela enxergou uma necessidade urgente no mercado: capacitar
                profissionais e empresas para utilizar o potencial dos dados espaciais em favor de
                decisões mais inteligentes e sustentáveis.
              </p>
              <p class="mb-4">
                Assim nasceu a GeoQuantum, com a missão de oferecer ensino completo de QGIS - do
                básico ao avançado - além de soluções ambientais, automatização de processos com
                dados espaciais e produção de mapas temáticos. Tudo com foco em resultados práticos
                e aplicados.
              </p>
              <p class="mb-4">
                Ao longo da carreira, nossa fundadora sempre buscou unir o conhecimento técnico com
                uma visão estratégica voltada para análise ambiental e territorial, o que hoje se
                reflete em cada projeto e treinamento que realizamos.
              </p>
              <p class="mb-4">
                Em menos de um ano de atuação, já somamos mais de 20 clientes fidelizados, que
                confiam em nossas metodologias e soluções personalizadas para transformar dados em
                decisões.
              </p>
              <p class="mb-6">
                Atualmente, sob a liderança da presidente e idealizadora da empresa, seguimos
                crescendo e ajudando profissionais e organizações a dominar o universo da
                geotecnologia, com uma abordagem que combina excelência técnica, responsabilidade
                ambiental e inovação.
              </p>
              <p class="text-h6 font-weight-bold text-primary">
                E essa trajetória está apenas começando.
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="founder-card" elevation="8">
              <v-card-item class="pa-8">
                <div class="text-center">
                  <v-avatar size="120" class="mb-4">
                    <img
                      src="/logo-geoquantum.svg"
                      alt="GeoQuantum Logo"
                      width="120"
                      height="120"
                    />
                  </v-avatar>
                  <h3 class="text-h5 font-weight-bold mb-3">Aline Moreira</h3>
                  <p class="text-subtitle-1 text-grey-darken-1 mb-4">Analista GIS Plena</p>
                  <p class="text-body-1 text-grey-darken-1 mb-4">
                    Sou geógrafa (FURG), especialista em geoprocessamento, SIG e sensoriamento
                    remoto, com foco em análise ambiental e territorial. Atuo na gestão de dados
                    geoespaciais para decisões estratégicas.
                  </p>
                  <div class="d-flex justify-center gap-4">
                    <v-btn icon color="primary" size="small" href="tel:+5512997332141">
                      <v-icon>mdi-phone</v-icon>
                    </v-btn>
                    <v-btn icon color="primary" size="small" href="mailto:ola@grandesite.com.br">
                      <v-icon>mdi-email</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      color="primary"
                      size="small"
                      href="https://instagram.com/grandesite"
                      target="_blank"
                    >
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Missão, Visão e Valores -->
    <section class="values-section py-16 bg-grey-lighten-4">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Missão, Visão e Valores</h2>
          <p class="text-h6 text-grey-darken-1">
            Os pilares que guiam nossas ações e decisões diárias.
          </p>
        </div>

        <v-row>
          <v-col cols="12" md="4" class="mb-6">
            <v-card class="h-100 text-center" elevation="4">
              <v-card-item class="pa-6">
                <v-icon icon="mdi-target" size="64" color="primary" class="mb-4"></v-icon>
                <h3 class="text-h5 font-weight-bold mb-3">Missão</h3>
                <p class="text-body-1">
                  Fornecer soluções inovadoras em geoprocessamento que contribuam para o
                  desenvolvimento sustentável e a tomada de decisões baseada em dados geoespaciais
                  precisos e confiáveis.
                </p>
              </v-card-item>
            </v-card>
          </v-col>

          <v-col cols="12" md="4" class="mb-6">
            <v-card class="h-100 text-center" elevation="4">
              <v-card-item class="pa-6">
                <v-icon icon="mdi-eye" size="64" color="secondary" class="mb-4"></v-icon>
                <h3 class="text-h5 font-weight-bold mb-3">Visão</h3>
                <p class="text-body-1">
                  Ser referência nacional em soluções geoespaciais, reconhecida pela excelência
                  técnica, inovação constante e compromisso com a sustentabilidade e o
                  desenvolvimento social.
                </p>
              </v-card-item>
            </v-card>
          </v-col>

          <v-col cols="12" md="4" class="mb-6">
            <v-card class="h-100 text-center" elevation="4">
              <v-card-item class="pa-6">
                <v-icon icon="mdi-heart" size="64" color="accent" class="mb-4"></v-icon>
                <h3 class="text-h5 font-weight-bold mb-3">Valores</h3>
                <ul class="text-body-1 text-start">
                  <li class="mb-2">Excelência técnica e qualidade</li>
                  <li class="mb-2">Inovação e criatividade</li>
                  <li class="mb-2">Sustentabilidade ambiental</li>
                  <li class="mb-2">Compromisso com o cliente</li>
                  <li class="mb-2">Responsabilidade social</li>
                  <li class="mb-2">Transparência e ética</li>
                </ul>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Equipe -->
    <section class="team-section py-16">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Nossa Equipe</h2>
          <p class="text-h6 text-grey-darken-1">
            Conheça os profissionais que fazem a diferença na GeoQuantum.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="member in team"
            :key="member.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="mb-6"
          >
            <v-card class="team-card text-center" elevation="4">
              <v-card-item class="pa-6">
                <div class="avatar-container mb-4">
                  <v-avatar size="120" color="primary" class="mb-3">
                    <v-icon size="48" color="white">{{ member.icon }}</v-icon>
                  </v-avatar>
                </div>
                <h3 class="text-h6 font-weight-bold mb-1">{{ member.name }}</h3>
                <p class="text-body-2 text-primary font-weight-bold mb-2">
                  {{ member.position }}
                </p>
                <p class="text-body-2 text-grey-darken-1 mb-3">
                  {{ member.description }}
                </p>
                <div class="d-flex justify-center gap-2">
                  <v-btn
                    icon
                    variant="text"
                    color="primary"
                    size="small"
                    href="https://linkedin.com"
                    target="_blank"
                  >
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    variant="text"
                    color="primary"
                    size="small"
                    href="mailto:email@example.com"
                  >
                    <v-icon>mdi-email</v-icon>
                  </v-btn>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Estatísticas -->
    <section class="stats-section py-16 bg-primary">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" sm="6" md="3" class="mb-6">
            <div class="stat-item">
              <div class="text-h2 font-weight-bold text-white mb-2">1</div>
              <div class="text-h6 text-grey-lighten-2">Ano de Atuação</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="mb-6">
            <div class="stat-item">
              <div class="text-h2 font-weight-bold text-white mb-2">1</div>
              <div class="text-h6 text-grey-lighten-2">Fundadora</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="mb-6">
            <div class="stat-item">
              <div class="text-h2 font-weight-bold text-white mb-2">20+</div>
              <div class="text-h6 text-grey-lighten-2">Clientes Fidelizados</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="mb-6">
            <div class="stat-item">
              <div class="text-h2 font-weight-bold text-white mb-2">9</div>
              <div class="text-h6 text-grey-lighten-2">Serviços Especializados</div>
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
        lat: -3.1190,
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
      const bounds = L.latLngBounds(projects.map(p => [p.lat, p.lng]))
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

const team = [
  {
    name: 'Aline Moreira',
    position: 'Fundadora e Analista GIS Plena',
    description:
      'Geógrafa (FURG), especialista em geoprocessamento, SIG e sensoriamento remoto, com foco em análise ambiental e territorial.',
    icon: 'mdi-account-tie-woman',
    specialties: ['QGIS', 'Sensoriamento Remoto', 'Análise Ambiental', 'Python'],
    contact: {
      phone: '(12) 99733-2141',
      email: 'ola@grandesite.com.br',
      instagram: '@grandesite',
    },
  },
]
</script>

<style scoped>
.sobre-page {
  min-height: 100vh;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
}

.history-card {
  border-radius: 8px;
  overflow: hidden;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #0b5fa5, #1fa7a1);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -1.5rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #0b5fa5;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #0b5fa5;
}

.timeline-year {
  font-weight: bold;
  color: #0b5fa5;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.team-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-4px);
}

.avatar-container {
  position: relative;
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
  background: linear-gradient(135deg, rgba(11, 95, 165, 0.85) 0%, rgba(31, 167, 161, 0.85) 100%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
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
}
</style>
