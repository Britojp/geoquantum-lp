<template>
  <div class="documentos-page">
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
                Documentos
              </h1>
              <p class="text-h6 text-grey-lighten-2 mb-6">
                Acesse nossa documentação institucional, políticas e procedimentos da empresa.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Conteúdo das Abas -->
    <section class="content-section py-16">
      <v-container>
        <DocumentTabs />
      </v-container>
    </section>

    <!-- Seção de Downloads -->
    <section class="downloads-section py-16 bg-grey-lighten-4">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Documentos para Download</h2>
          <p class="text-h6 text-grey-darken-1">
            Acesse nossos documentos institucionais e materiais técnicos.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="document in documents"
            :key="document.title"
            cols="12"
            sm="6"
            md="4"
            class="mb-6"
          >
            <v-card class="document-card h-100" elevation="4">
              <v-card-item class="text-center pa-6">
                <v-icon :icon="document.icon" size="48" color="primary" class="mb-3"></v-icon>
                <h3 class="text-h6 font-weight-bold mb-2">
                  {{ document.title }}
                </h3>
                <p class="text-body-2 text-grey-darken-1 mb-4">
                  {{ document.description }}
                </p>
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="text-caption text-grey">
                    {{ document.size }}
                  </span>
                  <span class="text-caption text-grey">
                    {{ document.format }}
                  </span>
                </div>
                <v-btn color="primary" variant="outlined" block @click="downloadDocument(document)">
                  <v-icon start>mdi-download</v-icon>
                  Download
                </v-btn>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Seção de Contato -->
    <section class="contact-section py-16">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-primary mb-4">Precisa de Mais Informações?</h2>
            <p class="text-h6 text-grey-darken-1 mb-6">
              Entre em contato conosco para solicitar informações adicionais ou esclarecer dúvidas
              sobre nossa documentação.
            </p>
            <div class="d-flex flex-column flex-sm-row gap-4 justify-center">
              <v-btn color="primary" size="large" variant="elevated" to="/contato">
                <v-icon start>mdi-email</v-icon>
                Enviar Mensagem
              </v-btn>

              <v-btn color="secondary" size="large" variant="outlined" href="tel:+5511999999999">
                <v-icon start>mdi-phone</v-icon>
                Ligar Agora
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
import DocumentTabs from '@/components/DocumentTabs.vue'

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

const documents = [
  {
    title: 'Apresentação Institucional',
    description: 'Conheça a GeoQuantum, nossa história, missão e principais serviços.',
    icon: 'mdi-presentation',
    size: '2.5 MB',
    format: 'PDF',
    url: '/documents/apresentacao-institucional.pdf',
  },
  {
    title: 'Portfólio de Projetos',
    description: 'Catálogo completo com nossos principais projetos e casos de sucesso.',
    icon: 'mdi-briefcase',
    size: '5.2 MB',
    format: 'PDF',
    url: '/documents/portfolio-projetos.pdf',
  },
  {
    title: 'Catálogo de Serviços',
    description: 'Descrição detalhada de todos os nossos serviços e soluções.',
    icon: 'mdi-cog',
    size: '1.8 MB',
    format: 'PDF',
    url: '/documents/catalogo-servicos.pdf',
  },
  {
    title: 'Metodologias de Trabalho',
    description: 'Documento técnico com nossas metodologias e processos de trabalho.',
    icon: 'mdi-chart-line',
    size: '3.1 MB',
    format: 'PDF',
    url: '/documents/metodologias.pdf',
  },
  {
    title: 'Certificações e Qualificações',
    description: 'Certificados e qualificações técnicas da empresa e equipe.',
    icon: 'mdi-certificate',
    size: '1.2 MB',
    format: 'PDF',
    url: '/documents/certificacoes.pdf',
  },
  {
    title: 'Política de Qualidade',
    description: 'Nossa política de qualidade e compromisso com a excelência.',
    icon: 'mdi-quality-high',
    size: '0.8 MB',
    format: 'PDF',
    url: '/documents/politica-qualidade.pdf',
  },
]

const downloadPDF = () => {
  // Simular download do PDF institucional completo
  const link = document.createElement('a')
  link.href = '/documents/geoquantum-institucional-completo.pdf'
  link.download = 'GeoQuantum-Institucional-Completo.pdf'
  link.click()
}

const downloadDocument = (document: any) => {
  // Simular download do documento específico
  const link = document.createElement('a')
  link.href = document.url
  link.download = `${document.title}.pdf`
  link.click()
}
</script>

<style scoped>
.documentos-page {
  min-height: 100vh;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
}

.document-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.document-card:hover {
  transform: translateY(-4px);
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
  .hero-section,
  .content-section,
  .downloads-section,
  .contact-section {
    padding: 3rem 0;
  }
}
</style>
