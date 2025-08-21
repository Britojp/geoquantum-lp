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
              <h1 class="text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow">
                Sobre a GeoQuantum
              </h1>
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
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Quem Somos</h2>
          <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto">
            Uma empresa nascida da paixão pela geografia e tecnologia, transformando dados
            geoespaciais em soluções inovadoras.
          </p>
        </div>

        <div class="history-content">
          <!-- Linha do Tempo Visual -->
          <div class="timeline-visual mb-8">
            <div class="timeline-item">
              <div class="timeline-image">
                <div class="timeline-img-placeholder">
                  <i class="mdi mdi-map-marker-plus"></i>
                </div>
                <div class="timeline-overlay">
                  <div class="timeline-year">2024</div>
                  <div class="timeline-title">Nascimento da GeoQuantum</div>
                </div>
              </div>
              <div class="timeline-content">
                <h3 class="text-h5 font-weight-bold text-primary mb-3">O Início de uma Jornada</h3>
                <p class="text-body-1 text-grey-darken-1 mb-4">
                  A nossa jornada começou em 2024, quando uma geógrafa apaixonada pela análise do
                  território e pela gestão de dados ambientais decidiu transformar seu conhecimento
                  em um projeto com propósito.
                </p>
                <p class="text-body-1 text-grey-darken-1">
                  Com sólida formação pela FURG e especialização em geoprocessamento, SIG e
                  sensoriamento remoto, ela enxergou uma necessidade urgente no mercado: capacitar
                  profissionais e empresas para utilizar o potencial dos dados espaciais.
                </p>
              </div>
            </div>

            <div class="timeline-item reverse">
              <div class="timeline-image">
                <div class="timeline-img-placeholder">
                  <i class="mdi mdi-target"></i>
                </div>
                <div class="timeline-overlay">
                  <div class="timeline-year">2024</div>
                  <div class="timeline-title">Missão Definida</div>
                </div>
              </div>
              <div class="timeline-content">
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Missão e Propósito</h3>
                <p class="text-body-1 text-grey-darken-1 mb-4">
                  Assim nasceu a GeoQuantum, com a missão de oferecer ensino completo de QGIS - do
                  básico ao avançado - além de soluções ambientais, automatização de processos com
                  dados espaciais e produção de mapas temáticos.
                </p>
                <p class="text-body-1 text-grey-darken-1">
                  Tudo com foco em resultados práticos e aplicados, sempre buscando unir o
                  conhecimento técnico com uma visão estratégica voltada para análise ambiental e
                  territorial.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-image">
                <div class="timeline-img-placeholder">
                  <i class="mdi mdi-chart-line"></i>
                </div>
                <div class="timeline-overlay">
                  <div class="timeline-year">2024</div>
                  <div class="timeline-title">Resultados Alcançados</div>
                </div>
              </div>
              <div class="timeline-content">
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Crescimento e Impacto</h3>
                <p class="text-body-1 text-grey-darken-1 mb-4">
                  Em menos de um ano de atuação, já somamos mais de 20 clientes fidelizados, que
                  confiam em nossas metodologias e soluções personalizadas para transformar dados em
                  decisões estratégicas.
                </p>
                <p class="text-body-1 text-grey-darken-1">
                  Atualmente, seguimos crescendo e ajudando profissionais e organizações a dominar o
                  universo da geotecnologia, com uma abordagem que combina excelência técnica,
                  responsabilidade ambiental e inovação constante.
                </p>
              </div>
            </div>
          </div>

          <!-- Seção de Destaques -->
          <div class="highlights-section">
            <div class="highlights-grid">
              <div class="highlight-card">
                <div class="highlight-icon">
                  <i class="mdi mdi-map-marker-multiple"></i>
                </div>
                <h4 class="text-h6 font-weight-bold text-primary mb-2">20+ Clientes</h4>
                <p class="text-body-2 text-grey-darken-1">
                  Fidelizados e satisfeitos com nossos serviços
                </p>
              </div>

              <div class="highlight-card">
                <div class="highlight-icon">
                  <i class="mdi mdi-cog"></i>
                </div>
                <h4 class="text-h6 font-weight-bold text-primary mb-2">9 Serviços</h4>
                <p class="text-body-2 text-grey-darken-1">Especializados em geoprocessamento</p>
              </div>

              <div class="highlight-card">
                <div class="highlight-icon">
                  <i class="mdi mdi-target"></i>
                </div>
                <h4 class="text-h6 font-weight-bold text-primary mb-2">100% Foco</h4>
                <p class="text-body-2 text-grey-darken-1">Em resultados práticos e aplicados</p>
              </div>

              <div class="highlight-card">
                <div class="highlight-icon">
                  <i class="mdi mdi-lightning-bolt"></i>
                </div>
                <h4 class="text-h6 font-weight-bold text-primary mb-2">Inovação</h4>
                <p class="text-body-2 text-grey-darken-1">
                  Tecnologias de ponta em geoprocessamento
                </p>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Missão, Visão e Valores -->
    <section class="values-section py-16 bg-grey-lighten-4">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Missão, Visão e Valores</h2>
          <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto">
            Os pilares que guiam nossas ações e decisões diárias.
          </p>
        </div>

        <div class="values-grid">
          <div class="value-card" v-for="value in values" :key="value.title">
            <div class="value-icon">
              <i :class="value.icon"></i>
            </div>
            <h4>{{ value.title }}</h4>
            <p>{{ value.description }}</p>
            <ul v-if="value.items" class="value-list">
              <li v-for="item in value.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Equipe -->
    <section class="team-section py-16">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Nossa Equipe</h2>
          <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto">
            Conheça os profissionais que fazem a diferença na GeoQuantum.
          </p>
        </div>

        <div class="team-cards-container">
          <v-row justify="center">
            <v-col
              v-for="member in team"
              :key="member.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
              class="mb-6 d-flex justify-center"
            >
              <v-card class="team-card text-center" elevation="4">
                <v-card-item class="pa-6">
                  <div class="avatar-container mb-4">
                    <v-avatar size="120" class="mb-3 team-avatar">
                      <v-icon size="48" color="white">{{ member.icon }}</v-icon>
                    </v-avatar>
                  </div>
                  <h3 class="text-h6 font-weight-bold mb-1 team-name">{{ member.name }}</h3>
                  <p class="text-body-2 font-weight-bold mb-2 team-position">
                    {{ member.position }}
                  </p>
                  <p class="text-body-2 text-grey-darken-1 mb-3 team-description">
                    {{ member.description }}
                  </p>
                  <div class="d-flex justify-center gap-2">
                    <v-btn
                      icon
                      variant="text"
                      size="small"
                      href="https://linkedin.com"
                      target="_blank"
                      class="team-social-btn"
                    >
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      variant="text"
                      size="small"
                      href="mailto:email@example.com"
                      class="team-social-btn"
                    >
                      <v-icon>mdi-email</v-icon>
                    </v-btn>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-16 bg-gradient-primary">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-white mb-4">
              Pronto para Conhecer Mais Sobre Nós?
            </h2>
            <p class="text-h6 text-grey-lighten-2 mb-6">
              Entre em contato e descubra como podemos ajudar você a transformar seus dados
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
    try {
      // Inicializar mapa focado na região do Brasil
      map = L.map(mapContainer.value, {
        center: [-15.6014, -47.7308], // Centro do Brasil (Brasília)
        zoom: 5,
        zoomControl: false,
        attributionControl: false,
        minZoom: 4,
        maxZoom: 10,
        dragging: false,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
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
    } catch (error) {
      console.warn('Erro ao carregar mapa:', error)
      // Fallback: se o mapa falhar, manter o background gradiente
    }
  }
})

onUnmounted(() => {
  if (map) {
    try {
      map.remove()
      map = null
    } catch (error) {
      console.warn('Erro ao remover mapa:', error)
    }
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
  {
    name: 'Andressa',
    position: 'Analista GIS Plena',
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

const values = [
  {
    title: 'Missão',
    icon: 'mdi-target',
    description:
      'Fornecer soluções inovadoras em geoprocessamento que contribuam para o desenvolvimento sustentável e a tomada de decisões baseada em dados geoespaciais precisos e confiáveis.',
    items: [],
  },
  {
    title: 'Visão',
    icon: 'mdi-telescope',
    description:
      'Ser referência nacional em soluções geoespaciais, reconhecida pela excelência técnica, inovação constante e compromisso com a sustentabilidade e o desenvolvimento social.',
    items: [],
  },
  {
    title: 'Valores',
    icon: 'mdi-diamond-stone',
    description:
      'Excelência técnica e qualidade, Inovação e criatividade, Sustentabilidade ambiental, Compromisso com o cliente, Responsabilidade social, Transparência e ética.',
  },
]
</script>

<style scoped>
.sobre-page {
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
  transition: transform 0.3s ease;
  max-width: 320px;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.1);
}

.team-card:hover {
  transform: translateY(-4px);
  border-color: rgba(26, 54, 93, 0.3);
  box-shadow: 0 15px 40px rgba(26, 54, 93, 0.1);
}

.team-cards-container {
  display: flex;
  justify-content: center;
}

.team-avatar {
  background: #1a365d !important;
  transition: all 0.3s ease;
}

.team-card:hover .team-avatar {
  background: #2d5a87 !important;
  transform: scale(1.05);
}

.team-name {
  color: #1a202c !important;
  font-weight: 600;
}

.team-position {
  color: #1a365d !important;
  font-weight: 600;
}

.team-description {
  color: #4a5568 !important;
}

.team-social-btn {
  color: #1a365d !important;
  transition: all 0.3s ease;
}

.team-social-btn:hover {
  color: #2d5a87 !important;
  background-color: rgba(26, 54, 93, 0.1) !important;
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

/* Values Section */
.values-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.value-card {
  text-align: center;
  padding: 40px 30px;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(26, 54, 93, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
}

.value-card:hover {
  transform: translateY(-8px);
  border-color: rgba(26, 54, 93, 0.3);
  box-shadow: 0 20px 40px rgba(26, 54, 93, 0.15);
}

.value-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(26, 54, 93, 0.2);
  position: relative;
  overflow: hidden;
}

.value-card:hover .value-icon {
  background: linear-gradient(135deg, #2d5a87 0%, #1a365d 100%);
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 35px rgba(26, 54, 93, 0.3);
}

.value-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.value-card:hover .value-icon::before {
  transform: translateX(100%);
}

.value-icon i {
  font-size: 36px;
  color: white;
  z-index: 2;
  position: relative;
}

.value-card h4 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 16px;
}

.value-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 0;
}

.value-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.value-list li {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.value-list li::before {
  content: '•';
  color: #1a365d;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* History Section */
.history-content {
  max-width: 1200px;
  margin: 0 auto;
}

/* Timeline Visual */
.timeline-visual {
  position: relative;
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
}

.timeline-item.reverse {
  direction: rtl;
}

.timeline-item.reverse .timeline-content {
  direction: ltr;
}

.timeline-image {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(26, 54, 93, 0.15);
  transition: transform 0.3s ease;
}

.timeline-image:hover {
  transform: translateY(-8px);
}

.timeline-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

.timeline-img-placeholder {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.timeline-img-placeholder:hover {
  transform: translateY(-8px);
}

.timeline-img-placeholder i {
  font-size: 80px;
  color: #1a365d;
  opacity: 0.7;
}

.timeline-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.9) 0%, rgba(45, 90, 135, 0.9) 100%);
  color: white;
  padding: 20px;
  text-align: center;
}

.timeline-year {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.timeline-title {
  font-size: 1.1rem;
  opacity: 0.9;
}

.timeline-content h3 {
  margin-bottom: 16px;
}

.timeline-content p {
  line-height: 1.6;
  margin-bottom: 16px;
}

.timeline-content p:last-child {
  margin-bottom: 0;
}

/* Highlights Section */
.highlights-section {
  margin-top: 80px;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.highlight-card {
  text-align: center;
  padding: 30px 20px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid rgba(26, 54, 93, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.highlight-card:hover {
  transform: translateY(-5px);
  border-color: rgba(26, 54, 93, 0.3);
  box-shadow: 0 15px 40px rgba(26, 54, 93, 0.1);
}

.highlight-icon {
  width: 80px;
  height: 80px;
  background: #1a365d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px auto;
  transition: all 0.3s ease;
}

.highlight-card:hover .highlight-icon {
  background: #2d5a87;
  transform: scale(1.1);
}

.highlight-icon i {
  font-size: 36px;
  color: white;
}

.highlight-card h4 {
  margin-bottom: 12px;
  color: #1a202c;
  font-weight: 600;
}

.highlight-card p {
  color: #4a5568;
  line-height: 1.5;
  margin: 0;
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

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }

  .timeline-item.reverse {
    direction: ltr;
  }

  .timeline-image {
    order: -1;
  }

  .highlights-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .highlight-card {
    padding: 25px 15px;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .value-card {
    padding: 30px 20px;
  }

  .value-icon {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
  }

  .value-icon i {
    font-size: 30px;
  }

  .value-card h4 {
    font-size: 1.25rem;
    margin-bottom: 12px;
  }

  .history-section,
  .values-section,
  .team-section,
  .stats-section,
  .cta-section {
    padding: 3rem 0;
  }
}

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
</style>
