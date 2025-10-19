<template>
  <div class="documentos-page">
    <!-- Hero Section com Mapa de Fundo -->
    <section class="hero-section">
      <!-- Mapa Interativo -->
      <div ref="mapContainer" class="map-container"></div>
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

    <!-- Seção de Downloads -->
    <section class="downloads-section py-16 bg-grey-lighten-4">
      <v-container>
        <SectionTitle
          title="Documentos para Download"
          subtitle="Acesse nossos documentos institucionais e materiais técnicos."
        />

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
            <SectionTitle
              title="Precisa de Mais Informações?"
              subtitle="Entre em contato conosco para solicitar informações adicionais ou esclarecer dúvidas sobre nossa documentação."
            />
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

    <!-- CTA Section -->
    <CtaSection
      :title="'Pronto para Conhecer Nossos Serviços?'"
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
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import CtaSection from '../components/CtaSection.vue'
import SectionTitle from '../components/SectionTitle.vue'

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

.max-width-600 {
  max-width: 600px;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
}

.document-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.1);
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
}

.document-card:hover {
  transform: translateY(-8px);
  border-color: rgba(26, 54, 93, 0.3);
  box-shadow: 0 20px 40px rgba(26, 54, 93, 0.15);
}

/* Custom icon colors */
:deep(.document-card .v-icon) {
  color: #1a365d !important;
}

/* Custom button styles */
:deep(.document-card .v-btn) {
  border-color: #1a365d !important;
  color: #1a365d !important;
  font-weight: 600;
  transition: all 0.3s ease;
}

:deep(.document-card .v-btn:hover) {
  background-color: #1a365d !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.2);
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
  .content-section,
  .downloads-section,
  .contact-section,
  .cta-section {
    padding: 3rem 0;
  }
}
</style>
