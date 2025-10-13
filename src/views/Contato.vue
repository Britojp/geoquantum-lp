<template>
  <div class="contato-page">
    <!-- Hero Section -->
    <section class="hero-section py-16 bg-gradient-primary">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" md="8" class="mx-auto">
            <h1 class="text-h2 text-h3-sm font-weight-bold text-white mb-4">Entre em Contato</h1>
            <p class="text-h6 text-grey-lighten-2 mb-6">
              Estamos prontos para ajudar você a transformar seus dados geoespaciais em insights
              valiosos. Entre em contato conosco!
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Seção Principal -->
    <section class="main-section py-16">
      <v-container>
        <v-row>
          <!-- Informações de Contato -->
          <v-col cols="12" lg="4" class="mb-8">
            <v-card class="contact-info-card" elevation="4">
              <v-card-item class="pa-6">
                <h2 class="text-h4 font-weight-bold text-primary mb-6">Informações de Contato</h2>

                <!-- Endereço -->
                <div class="contact-item mb-6">
                  <div class="d-flex align-start mb-3">
                    <v-icon
                      icon="mdi-map-marker"
                      color="primary"
                      size="24"
                      class="me-3 mt-1"
                    ></v-icon>
                    <div>
                      <h3 class="text-h6 font-weight-bold mb-1">Endereço</h3>
                      <p class="text-body-1 text-grey-darken-1">
                        Goiânia, GO<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Telefone -->
                <div class="contact-item mb-6">
                  <div class="d-flex align-start mb-3">
                    <v-icon icon="mdi-phone" color="primary" size="24" class="me-3 mt-1"></v-icon>
                    <div>
                      <h3 class="text-h6 font-weight-bold mb-1">Telefone</h3>
                      <p class="text-body-1 text-grey-darken-1">
                        <a href="tel:+5512997332141" class="text-decoration-none">
                          (12) 99733-2141
                        </a>
                      </p>
                      <p class="text-body-2 text-grey">Segunda a Sexta, 8h às 18h</p>
                    </div>
                  </div>
                </div>

                <!-- E-mail -->
                <div class="contact-item mb-6">
                  <div class="d-flex align-start mb-3">
                    <v-icon icon="mdi-email" color="primary" size="24" class="me-3 mt-1"></v-icon>
                    <div>
                      <h3 class="text-h6 font-weight-bold mb-1">E-mail</h3>
                      <p class="text-body-1 text-grey-darken-1">
                        <a href="mailto:ola@grandesite.com.br" class="text-decoration-none">
                          ola@grandesite.com.br
                        </a>
                      </p>
                      <p class="text-body-2 text-grey">Resposta em até 24h</p>
                    </div>
                  </div>
                </div>

                <!-- Redes Sociais -->
                <div class="contact-item mb-6">
                  <div class="d-flex align-start mb-3">
                    <v-icon
                      icon="mdi-share-variant"
                      color="primary"
                      size="24"
                      class="me-3 mt-1"
                    ></v-icon>
                    <div>
                      <h3 class="text-h6 font-weight-bold mb-1">Redes Sociais</h3>
                      <div class="d-flex gap-2 mt-2">
                        <v-btn
                          icon
                          variant="outlined"
                          color="primary"
                          size="small"
                          href="https://linkedin.com/company/geoquantum"
                          target="_blank"
                        >
                          <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                        <v-btn
                          icon
                          variant="outlined"
                          color="primary"
                          size="small"
                          href="https://facebook.com/geoquantum"
                          target="_blank"
                        >
                          <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn
                          icon
                          variant="outlined"
                          color="primary"
                          size="small"
                          href="https://instagram.com/geoquantum"
                          target="_blank"
                        >
                          <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn
                          icon
                          variant="outlined"
                          color="primary"
                          size="small"
                          href="https://youtube.com/geoquantum"
                          target="_blank"
                        >
                          <v-icon>mdi-youtube</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Horário de Funcionamento -->
                <div class="contact-item">
                  <div class="d-flex align-start">
                    <v-icon icon="mdi-clock" color="primary" size="24" class="me-3 mt-1"></v-icon>
                    <div>
                      <h3 class="text-h6 font-weight-bold mb-1">Horário de Funcionamento</h3>
                      <p class="text-body-1 text-grey-darken-1">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 9h às 13h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </v-card-item>
            </v-card>
          </v-col>

          <!-- Formulário de Contato -->
          <v-col cols="12" lg="8">
            <ContactForm />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Seção do Mapa -->
    <section class="map-section py-16 bg-grey-lighten-4">
      <v-container>
        <div class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Nossa Localização</h2>
          <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto">
            Visite nossa sede em São Paulo ou entre em contato para agendar uma visita.
          </p>
        </div>

        <v-card elevation="4" class="map-card">
          <div ref="mapContainer" class="map-container" style="height: 400px"></div>
        </v-card>
      </v-container>
    </section>

    <!-- Seção FAQ -->
    <section class="faq-section py-16">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Perguntas Frequentes</h2>
          <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto">
            Respostas para as dúvidas mais comuns sobre nossos serviços.
          </p>
        </div>

        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel v-for="faq in faqs" :key="faq.question">
                <v-expansion-panel-title class="text-h6 font-weight-bold">
                  {{ faq.question }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <p class="text-body-1">{{ faq.answer }}</p>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
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
                to="/servicos"
                class="text-dark font-weight-bold"
              >
                <v-icon start>mdi-cog</v-icon>
                Nossos Serviços
              </v-btn>

              <v-btn size="large" variant="outlined" to="/projetos" class="text-white border-white">
                <v-icon start>mdi-briefcase</v-icon>
                Ver Projetos
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ContactForm from '../components/ContactForm.vue'
import L from 'leaflet'
import SectionTitle from '../components/SectionTitle.vue'

const mapContainer = ref<HTMLElement>()
let map: L.Map | null = null

const faqs = [
  {
    question: 'Quais são os principais serviços oferecidos pela GeoQuantum?',
    answer:
      'Oferecemos serviços de geoprocessamento, mapeamento temático, desenvolvimento de sistemas SIG, análise geoespacial e consultoria técnica especializada.',
  },
  {
    question: 'Como posso solicitar um orçamento?',
    answer:
      'Você pode solicitar um orçamento através do formulário de contato em nosso site, por telefone ou e-mail. Nossa equipe entrará em contato em até 24 horas.',
  },
  {
    question: 'Quais tecnologias vocês utilizam?',
    answer:
      'Utilizamos as principais tecnologias do mercado como QGIS, ArcGIS, Python, PostgreSQL, GeoServer, Vue.js e outras ferramentas geoespaciais.',
  },
  {
    question: 'Vocês atendem todo o Brasil?',
    answer:
      'Sim, atendemos clientes em todo o Brasil. Realizamos projetos presenciais e remotos, dependendo das necessidades do cliente.',
  },
  {
    question: 'Qual o prazo médio para entrega dos projetos?',
    answer:
      'O prazo varia de acordo com a complexidade do projeto. Projetos simples podem ser entregues em 1-2 semanas, enquanto projetos complexos podem levar 2-3 meses.',
  },
  {
    question: 'Vocês oferecem suporte técnico após a entrega?',
    answer:
      'Sim, oferecemos suporte técnico e treinamento para todos os nossos projetos. O período de suporte é definido no contrato de cada projeto.',
  },
]

onMounted(() => {
  if (mapContainer.value) {
    // Inicializar mapa
    map = L.map(mapContainer.value, {
      center: [-23.5505, -46.6333], // São Paulo
      zoom: 15,
      zoomControl: true,
    })

    // Adicionar tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map)

    // Adicionar marcador da empresa
    const marker = L.marker([-23.5505, -46.6333]).addTo(map).bindPopup(`
        <div style="text-align: center;">
          <strong>GeoQuantum</strong><br>
          Rua das Tecnologias, 123<br>
          São Paulo - SP
        </div>
      `)

    // Customizar ícone do marcador
    marker.setIcon(
      L.divIcon({
        className: 'custom-marker',
        html: '<div class="marker-icon"></div>',
        iconSize: [40, 40],
      }),
    )
  }
})
</script>

<style scoped>
.contato-page {
  min-height: 100vh;
}

.max-width-600 {
  max-width: 600px;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
}

.contact-info-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.contact-info-card:hover {
  transform: translateY(-4px);
}

.contact-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1.5rem;
}

.contact-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.map-card {
  border-radius: 12px;
  overflow: hidden;
}

.map-container {
  width: 100%;
}

.border-white {
  border-color: white !important;
}

/* Custom marker styles */
:deep(.custom-marker) {
  background: transparent;
}

:deep(.marker-icon) {
  width: 40px;
  height: 40px;
  background: #1a365d;
  border: 4px solid white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: relative;
}

:deep(.marker-icon)::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid #1a365d;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section,
  .main-section,
  .map-section,
  .faq-section,
  .cta-section {
    padding: 3rem 0;
  }

  .contact-info-card {
    padding: 1.5rem;
  }
}
</style>
