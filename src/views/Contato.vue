<template>
  <div class="contato-page">
    <section class="hero-section">
      <div class="hero-overlay">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <h1
                class="text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow animate-fade-in-down hero-title"
              >
                Entre em Contato
              </h1>
              <p 
                class="text-h6 text-grey-lighten-2 mb-6 animate-fade-in-up hero-subtitle"
                :style="{ animationDelay: '0.2s' }"
              >
                Estamos prontos para ajudar você a transformar seus dados geoespaciais em insights
                valiosos. Entre em contato conosco!
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <section class="main-section py-16">
      <v-container>
        <v-row>
          <v-col cols="12" lg="4" class="mb-8">
            <v-card class="contact-info-card animate-fade-in-up" elevation="4">
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

          <v-col cols="12" lg="8">
            <div class="animate-fade-in-up" :style="{ animationDelay: '0.2s' }">
              <ContactForm />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="map-section py-16 bg-grey-lighten-4">
      <v-container>
        <div class="text-center mb-8 animate-fade-in-up">
          <SectionTitle
            title="Nossa Localização"
            subtitle="Visite nossa sede em São Paulo ou entre em contato para agendar uma visita."
          />
        </div>

        <v-card elevation="4" class="map-card animate-fade-in-up" :style="{ animationDelay: '0.2s' }">
          <div ref="mapContainer" class="map-container" style="height: 400px"></div>
        </v-card>
      </v-container>
    </section>

    <section class="faq-section py-16">
      <v-container>
        <div class="text-center mb-12 animate-fade-in-up">
          <SectionTitle
            title="Perguntas Frequentes"
            subtitle="Respostas para as dúvidas mais comuns sobre nossos serviços."
          />
        </div>

        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-expansion-panels variant="accordion" class="animate-fade-in-up" :style="{ animationDelay: '0.2s' }">
              <v-expansion-panel v-for="(faq, index) in faqs" :key="faq.question" class="faq-panel">
                <v-expansion-panel-title class="text-h6 font-weight-bold faq-title">
                  <v-icon start color="primary">mdi-help-circle</v-icon>
                  {{ faq.question }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <p class="text-body-1 faq-answer">{{ faq.answer }}</p>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
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

.hero-section {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.95) 0%, rgba(45, 90, 135, 0.95) 100%),
    url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072') center/cover;
  background-attachment: fixed;
  overflow: hidden;
}

.hero-overlay {
  position: relative;
  z-index: 2;
  padding: 4rem 0;
  width: 100%;
}

.text-shadow {
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.contact-info-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.contact-info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.contact-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(4px);
}

.contact-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.contact-item a {
  color: #1a365d;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #2d5a87;
}

.map-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.map-card:hover {
  transform: translateY(-4px);
}

.map-container {
  width: 100%;
}

.faq-panel {
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
}

.faq-title {
  font-size: 1rem;
  padding: 1rem 1.5rem;
}

.faq-answer {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
}

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

@media (min-width: 768px) {
  .hero-section {
    min-height: 60vh;
  }

  .hero-overlay {
    padding: 6rem 0;
  }

  .faq-title {
    font-size: 1.125rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 40vh;
    background-attachment: scroll;
  }

  .hero-overlay {
    padding: 3rem 0;
  }

  .hero-title {
    font-size: 2rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1rem;
    line-height: 1.4;
  }

  .main-section,
  .map-section,
  .faq-section {
    padding: 3rem 0 !important;
  }

  .contact-info-card {
    margin-bottom: 2rem;
  }

  .map-container {
    height: 300px !important;
  }

  .faq-title {
    font-size: 0.9rem;
    padding: 0.75rem 1rem;
  }

  .faq-answer {
    font-size: 0.875rem;
  }
}

@media (max-width: 479px) {
  .hero-section {
    min-height: 35vh;
  }

  .hero-overlay {
    padding: 2rem 0;
  }

  .hero-title {
    font-size: 1.5rem !important;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 0.85rem !important;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }

  .contact-info-card {
    border-radius: 8px;
  }

  .contact-info-card .text-h4 {
    font-size: 1.5rem !important;
  }

  .contact-item {
    padding-bottom: 1rem;
  }

  .contact-item .text-h6 {
    font-size: 1rem !important;
  }

  .contact-item .text-body-1 {
    font-size: 0.875rem !important;
  }

  .map-container {
    height: 250px !important;
  }

  .faq-title {
    font-size: 0.85rem;
    padding: 0.625rem 0.75rem;
  }

  .faq-answer {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .main-section,
  .map-section,
  .faq-section {
    padding: 2rem 0 !important;
  }
}
</style>
