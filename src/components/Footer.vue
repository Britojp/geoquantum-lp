<template>
  <v-footer color="dark" class="text-white">
    <v-container>
      <v-row>
        <!-- Logo e Descrição -->
        <v-col cols="12" md="4" class="mb-4">
          <div class="d-flex align-center mb-3">
            <img
              src="/logo-geoquantum.svg"
              alt="GeoQuantum Logo"
              class="logo-image me-2"
              width="32"
              height="32"
            />
            <span class="text-h6 font-weight-bold text-white">GeoQuantum</span>
          </div>
          <p class="text-body-2 text-grey-lighten-1">
            Especialistas em geoprocessamento e análise geoespacial. Soluções inovadoras para
            projetos de engenharia e meio ambiente.
          </p>
          <div class="d-flex mt-3">
            <v-btn icon variant="text" color="white" class="me-2 social-btn">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="white" class="me-2 social-btn">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="white" class="me-2 social-btn">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="white" class="social-btn">
              <v-icon>mdi-youtube</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Links Rápidos -->
        <v-col cols="12" sm="6" md="2" class="mb-4">
          <h6 class="text-h6 font-weight-bold mb-3 text-white">Links Rápidos</h6>
          <v-list density="compact" color="transparent">
            <v-list-item
              v-for="item in quickLinks"
              :key="item.name"
              :to="item.path"
              class="px-0 footer-link"
              color="grey-lighten-1"
            >
              <v-list-item-title class="text-body-2">
                {{ item.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Serviços -->
        <v-col cols="12" sm="6" md="3" class="mb-4">
          <h6 class="text-h6 font-weight-bold mb-3 text-white">Serviços</h6>
          <v-list density="compact" color="transparent">
            <v-list-item
              v-for="service in services"
              :key="service.name"
              class="px-0 footer-link"
              color="grey-lighten-1"
            >
              <v-list-item-title class="text-body-2">
                {{ service.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Contato -->
        <v-col cols="12" md="3" class="mb-4">
          <h6 class="text-h6 font-weight-bold mb-3 text-white">Contato</h6>
          <div class="d-flex align-center mb-2">
            <v-icon icon="mdi-map-marker" size="16" class="me-2 text-grey-lighten-1"></v-icon>
            <span class="text-body-2 text-grey-lighten-1">Goiânia, GO - Brasil</span>
          </div>
          <div class="d-flex align-center mb-2">
            <v-icon icon="mdi-phone" size="16" class="me-2 text-grey-lighten-1"></v-icon>
            <span class="text-body-2 text-grey-lighten-1">(12) 99733-2141</span>
          </div>
          <div class="d-flex align-center mb-2">
            <v-icon icon="mdi-email" size="16" class="me-2 text-grey-lighten-1"></v-icon>
            <span class="text-body-2 text-grey-lighten-1">ola@grandesite.com.br</span>
          </div>
          <div class="d-flex align-center">
            <v-icon icon="mdi-instagram" size="16" class="me-2 text-grey-lighten-1"></v-icon>
            <span class="text-body-2 text-grey-lighten-1">@grandesite</span>
          </div>
        </v-col>
      </v-row>

      <!-- Linha Divisória -->
      <v-divider color="grey-darken-2" class="my-4"></v-divider>

      <!-- Copyright -->
      <div class="d-flex flex-column flex-sm-row justify-space-between align-center">
        <p class="text-body-2 text-grey-lighten-1 mb-0">
          © 2025 GeoQuantum. Todos os direitos reservados.
        </p>
        <div class="d-flex mt-2 mt-sm-0">
          <v-btn
            variant="text"
            color="grey-lighten-1"
            size="small"
            class="text-body-2 footer-legal-link"
          >
            Política de Privacidade
          </v-btn>
          <v-btn
            variant="text"
            color="grey-lighten-1"
            size="small"
            class="text-body-2 footer-legal-link"
          >
            Termos de Uso
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Blog', path: '/blog' },
]

const services = [
  { name: 'Mapas de Localização' },
  { name: 'Mapas de Produção Agrícola' },
  { name: 'Mapas de Uso e Cobertura do Solo' },
  { name: 'Automatização QGIS' },
  { name: 'Capacitação em QGIS' },
]
</script>

<style scoped>
.v-footer {
  margin-top: auto;
  background: #2e3a47 !important;
}

.logo-image {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
}

.social-btn {
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: scale(1.1);
  color: #1fa7a1 !important;
}

.footer-link {
  transition: all 0.3s ease;
  cursor: pointer;
}

.footer-link:hover {
  color: #1fa7a1 !important;
  transform: translateX(4px);
}

.footer-legal-link {
  transition: all 0.3s ease;
}

.footer-legal-link:hover {
  color: #1fa7a1 !important;
}

/* Responsividade */
@media (max-width: 768px) {
  .v-footer {
    text-align: center;
  }

  .social-btn {
    margin: 0 8px;
  }
}
</style>
