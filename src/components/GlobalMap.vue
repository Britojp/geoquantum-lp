<template>
  <div class="global-map-container">
    <!-- Mapa Interativo -->
    <div ref="mapContainer" class="map-container"></div>

    <!-- Overlay com Filtro Azul e Conteúdo -->
    <div class="hero-overlay">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import L from 'leaflet'

const mapContainer = ref<HTMLElement>()
let map: L.Map | null = null

onMounted(() => {
  console.log('GlobalMap component mounted')

  // Aguardar um pouco para garantir que o DOM esteja pronto
  setTimeout(() => {
    if (mapContainer.value) {
      console.log('Map container found, initializing map...')

      try {
        // Inicializar mapa focado na região do Brasil
        map = L.map(mapContainer.value, {
          center: [-15.6014, -47.7308], // Centro do Brasil (Brasília)
          zoom: 5,
          zoomControl: false,
          attributionControl: false,
          minZoom: 4,
          maxZoom: 10,
        })

        console.log('Map created successfully')

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

        console.log('Adding project markers...')

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
          console.log('Map bounds set successfully')
        }

        console.log('Global map initialized successfully')
      } catch (error) {
        console.error('Error initializing global map:', error)
      }
    } else {
      console.error('Map container not found!')
    }
  }, 200)
})
</script>

<style scoped>
.global-map-container {
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .global-map-container {
    height: 50vh;
    min-height: 350px;
  }
}
</style>
