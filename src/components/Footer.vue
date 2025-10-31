<template>
  <v-footer class="footer-main">
    <v-container>
      <v-row class="justify-center">
        <!-- Logo e Descrição -->
        <v-col cols="12" md="4" class="mb-4 text-center text-md-left">
          <div class="d-flex align-center justify-center justify-md-start mb-3">
            <img
              src="@/assets/main-logo-removebg-preview.png"
              alt="GeoQuantum Logo"
              class="logo-image me-2"
              width="32"
              height="32"
            />
            <span class="text-h6 font-weight-bold text-white">GeoQuantum</span>
          </div>
          <p class="footer-description">
            Serviços ambientais & mapeamentos. Transformamos dados geoespaciais em decisões
            estratégicas e sustentáveis.
          </p>
          <div class="d-flex justify-center justify-md-start mt-3">
            <v-btn
              icon
              variant="text"
              color="white"
              class="me-2 social-btn"
              href="https://www.instagram.com/geo.quantum"
              target="_blank"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="text"
              color="white"
              class="me-2 social-btn"
              href="mailto:comercial@consultgeoquantum.com"
            >
              <v-icon>mdi-email</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="text"
              color="white"
              class="social-btn"
              href="https://wa.me/5512997332141"
              target="_blank"
            >
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Links Rápidos -->
        <v-col cols="12" sm="6" md="2" class="mb-4 text-center text-md-left">
          <h6 class="footer-section-title">Links Rápidos</h6>
          <div class="footer-links d-flex flex-column align-center align-md-start">
            <div v-for="item in quickLinks" :key="item.name" class="footer-link-item">
              <router-link :to="item.path" class="footer-link">
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </v-col>

        <!-- Contato -->
        <v-col cols="12" sm="6" md="4" class="mb-4 text-center text-md-left">
          <h6 class="footer-section-title">Contato</h6>
          <div class="footer-contact-item justify-center justify-md-start">
            <v-icon icon="mdi-map-marker" size="16" class="me-2 contact-icon"></v-icon>
            <span class="contact-text">Goiânia, GO - Brasil</span>
          </div>
          <div class="footer-contact-item justify-center justify-md-start">
            <v-icon icon="mdi-phone" size="16" class="me-2 contact-icon"></v-icon>
            <span class="contact-text">+55 (12) 99733-2141</span>
          </div>
          <div class="footer-contact-item justify-center justify-md-start">
            <v-icon icon="mdi-phone" size="16" class="me-2 contact-icon"></v-icon>
            <span class="contact-text">+32 467 81 33 77</span>
          </div>
          <div class="footer-contact-item justify-center justify-md-start">
            <v-icon icon="mdi-email" size="16" class="me-2 contact-icon"></v-icon>
            <span class="contact-text">comercial@consultgeoquantum.com</span>
          </div>
          <div class="footer-contact-item justify-center justify-md-start">
            <v-icon icon="mdi-instagram" size="16" class="me-2 contact-icon"></v-icon>
            <span class="contact-text">@geo.quantum</span>
          </div>
        </v-col>
      </v-row>

      <!-- Linha Divisória -->
      <v-divider class="footer-divider"></v-divider>

      <!-- Copyright -->
      <v-row>
        <v-col cols="12" class="text-center">
          <p class="copyright-text">© 2024 GeoQuantum. Todos os direitos reservados.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
]
</script>

<style scoped>
.footer-main {
  background: #1a365d !important;
  color: #b0bec5;
  margin-top: auto;
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
  text-decoration: none;
  color: #b0bec5;
  display: block;
  padding: 4px 0;
  font-size: 0.875rem;
}

.footer-link:hover {
  color: #1fa7a1 !important;
  transform: translateX(4px);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link-item {
  transition: all 0.3s ease;
}

.footer-link-item:hover {
  transform: translateX(4px);
}

.footer-section-title {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.footer-description {
  color: #b0bec5;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 24px;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.contact-icon {
  color: #b0bec5;
  margin-right: 8px;
}

.contact-text {
  color: #b0bec5;
  font-size: 0.875rem;
}

.footer-legal-link {
  transition: all 0.3s ease;
  text-decoration: none;
  color: #b0bec5;
  font-size: 0.875rem;
}

.footer-legal-link:hover {
  color: #1fa7a1 !important;
}

.footer-divider {
  background-color: #2d5a87 !important;
  margin: 24px 0;
}

.copyright-text {
  color: #b0bec5;
  font-size: 0.875rem;
  margin: 0;
}

/* Responsividade */
@media (max-width: 768px) {
  .footer-main {
    text-align: center;
  }

  .social-btn {
    margin: 0 8px;
  }
}
</style>
