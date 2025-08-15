<template>
  <div class="hero-map-container">
    <!-- Mapa Interativo -->
    <div ref="mapContainer" class="map-container"></div>

    <!-- Overlay com Conteúdo -->
    <div class="hero-overlay">
      <v-container>
        <v-row align="center" style="min-height: 80vh">
          <v-col cols="12" md="6" class="text-center text-md-left">
            <h1 class="text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow">
              Soluções em
              <span class="text-accent">Geoprocessamento</span>
            </h1>
            <p class="text-h6 text-white mb-6">
              Especialistas em análise geoespacial, mapeamento e desenvolvimento de sistemas para
              projetos de engenharia e meio ambiente.
            </p>

            <div class="d-flex flex-column flex-sm-row gap-4 justify-center justify-md-start">
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
            </div>

            <!-- Estatísticas -->
            <div class="d-flex flex-wrap justify-center justify-md-start mt-8">
              <div class="text-center me-6 mb-4">
                <div class="text-h4 font-weight-bold text-accent">20+</div>
                <div class="text-body-2 text-white">Clientes Fidelizados</div>
              </div>
              <div class="text-center me-6 mb-4">
                <div class="text-h4 font-weight-bold text-accent">1</div>
                <div class="text-body-2 text-white">Ano de Atuação</div>
              </div>
              <div class="text-center mb-4">
                <div class="text-h4 font-weight-bold text-accent">9</div>
                <div class="text-body-2 text-white">Serviços Especializados</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'

const mapContainer = ref<HTMLElement>()
let map: L.Map | null = null

onMounted(() => {
  if (mapContainer.value) {
    // Inicializar mapa com configurações mais imponentes
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
        title: 'São Paulo - Metrópole',
        type: 'metropolis',
        size: 'large',
      },
      {
        lat: -22.9068,
        lng: -43.1729,
        title: 'Rio de Janeiro - Costa',
        type: 'coastal',
        size: 'large',
      },
      {
        lat: -16.6864,
        lng: -49.2653,
        title: 'Goiânia - Centro-Oeste',
        type: 'regional',
        size: 'medium',
      },
      {
        lat: -18.9186,
        lng: -48.2772,
        title: 'Uberlândia - Agricultura',
        type: 'agriculture',
        size: 'medium',
      },
      { lat: -16.4421, lng: -51.1172, title: 'Rio Verde - Rural', type: 'rural', size: 'medium' },
      {
        lat: -17.7443,
        lng: -48.6276,
        title: 'Catalão - Mineração',
        type: 'mining',
        size: 'medium',
      },
      {
        lat: -14.235,
        lng: -51.9253,
        title: 'Barra do Garças - Pantanal',
        type: 'environmental',
        size: 'medium',
      },
      { lat: -3.119, lng: -60.0217, title: 'Manaus - Amazônia', type: 'amazon', size: 'large' },
      {
        lat: -30.0346,
        lng: -51.2177,
        title: 'Porto Alegre - Sul',
        type: 'southern',
        size: 'medium',
      },
      {
        lat: -12.9714,
        lng: -38.5011,
        title: 'Salvador - Nordeste',
        type: 'northeast',
        size: 'medium',
      },
      { lat: -1.4554, lng: -48.4898, title: 'Belém - Norte', type: 'northern', size: 'medium' },
    ]

    // Adicionar marcadores com diferentes tamanhos e estilos
    projects.forEach((project) => {
      const markerSize = project.size === 'large' ? 40 : 30
      const markerColor = getMarkerColor(project.type)

      const marker = L.marker([project.lat, project.lng]).addTo(map!).bindPopup(`
        <div class="marker-popup">
          <h4>${project.title}</h4>
          <p>Tipo: ${getProjectTypeName(project.type)}</p>
        </div>
      `)

      // Customizar ícone do marcador com tamanho e cor dinâmicos
      marker.setIcon(
        L.divIcon({
          className: 'custom-marker',
          html: `<div class="marker-icon ${project.size}" style="background: ${markerColor};"></div>`,
          iconSize: [markerSize, markerSize],
        }),
      )
    })

    // Adicionar linhas de conexão entre projetos principais
    const connections = [
      {
        from: [-15.6014, -47.7308] as [number, number],
        to: [-23.5505, -46.6333] as [number, number],
        weight: 3,
      }, // Brasília - São Paulo
      {
        from: [-15.6014, -47.7308] as [number, number],
        to: [-22.9068, -43.1729] as [number, number],
        weight: 3,
      }, // Brasília - Rio
      {
        from: [-15.6014, -47.7308] as [number, number],
        to: [-3.119, -60.0217] as [number, number],
        weight: 2,
      }, // Brasília - Manaus
      {
        from: [-15.6014, -47.7308] as [number, number],
        to: [-30.0346, -51.2177] as [number, number],
        weight: 2,
      }, // Brasília - Porto Alegre
    ]

    connections.forEach((connection) => {
      L.polyline([connection.from, connection.to], {
        color: '#d4a574',
        weight: connection.weight,
        opacity: 0.6,
        dashArray: '10, 5',
      }).addTo(map!)
    })

    // Adicionar efeito de pulso nos marcadores principais
    addPulseEffect()

    // Desabilitar zoom com scroll
    map.scrollWheelZoom.disable()
  }
})

// Função para obter cor do marcador baseada no tipo
function getMarkerColor(type: string): string {
  const colors: { [key: string]: string } = {
    capital: '#ff6b6b',
    metropolis: '#4ecdc4',
    coastal: '#45b7d1',
    regional: '#96ceb4',
    agriculture: '#feca57',
    rural: '#ff9ff3',
    mining: '#54a0ff',
    environmental: '#5f27cd',
    amazon: '#00d2d3',
    southern: '#ff9f43',
    northeast: '#10ac84',
    northern: '#ee5a24',
  }
  return colors[type] || '#d4a574'
}

// Função para obter nome do tipo de projeto
function getProjectTypeName(type: string): string {
  const names: { [key: string]: string } = {
    capital: 'Capital Federal',
    metropolis: 'Metrópole',
    coastal: 'Costa',
    regional: 'Regional',
    agriculture: 'Agricultura',
    rural: 'Rural',
    mining: 'Mineração',
    environmental: 'Ambiental',
    amazon: 'Amazônia',
    southern: 'Sul',
    northeast: 'Nordeste',
    northern: 'Norte',
  }
  return names[type] || 'Projeto'
}

// Função para adicionar efeito de pulso
function addPulseEffect() {
  const pulseMarkers = document.querySelectorAll('.marker-icon.large')
  pulseMarkers.forEach((marker) => {
    marker.classList.add('pulse')
  })
}

onUnmounted(() => {
  if (map) {
    map.remove()
  }
})

const downloadPDF = () => {
  // Simular download do PDF institucional
  const link = document.createElement('a')
  link.href = '/pdf-institucional-geoquantum.pdf'
  link.download = 'GeoQuantum-Institucional.pdf'
  link.click()
}
</script>

<style scoped>
.hero-map-container {
  position: relative;
  height: 100vh;
  min-height: 600px;
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
  background: linear-gradient(135deg, rgba(11, 95, 165, 0.7) 0%, rgba(31, 167, 161, 0.6) 100%);
  z-index: 2;
  display: flex;
  align-items: center;
}

.border-white {
  border-color: white !important;
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  position: relative;
  transition: all 0.3s ease;
}

:deep(.marker-icon.large) {
  width: 40px;
  height: 40px;
  border-width: 4px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
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

:deep(.marker-icon.large)::after {
  border-left-width: 8px;
  border-right-width: 8px;
  border-top-width: 10px;
  bottom: -10px;
}

/* Efeito de pulso para marcadores grandes */
:deep(.marker-icon.pulse) {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
  }
}

/* Estilo para popups dos marcadores */
:deep(.leaflet-popup-content) {
  margin: 8px 12px;
}

:deep(.marker-popup h4) {
  margin: 0 0 8px 0;
  color: #2e3a47;
  font-size: 1rem;
  font-weight: 600;
}

:deep(.marker-popup p) {
  margin: 0;
  color: #666;
  font-size: 0.875rem;
}
.text-shadow {
  text-shadow: 0 5px 4px rgba(0, 0, 0, 0.4);
}
/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-map-container {
    height: 70vh;
  }

  .hero-overlay {
    background: linear-gradient(135deg, rgba(11, 95, 165, 0.8) 0%, rgba(31, 167, 161, 0.7) 100%);
  }
}
</style>
