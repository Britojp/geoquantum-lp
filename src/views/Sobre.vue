<template>
  <div class="sobre-page mobile-scroll">
    <!-- Hero Section com Imagem de Topografia -->
    <section class="hero-section animate-on-scroll">
      <!-- Imagem de Topografia de Fundo -->
      <div class="topography-background"></div>

      <!-- Overlay com Filtro e Conteúdo -->
      <div class="hero-overlay">
        <v-container class="mobile-padding">
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <h1
                class="text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow mobile-title animate-slide-in-left"
              >
                Sobre a GeoQuantum
              </h1>
              <p
                class="text-h6 text-grey-lighten-2 mb-6 mobile-text animate-fade-in-up"
                :style="{ animationDelay: '0.2s' }"
              >
                Conheça nossa história, missão e a equipe que faz a diferença no mundo do
                geoprocessamento.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- História da Empresa -->
    <section class="history-section py-16 py-sm-12 py-md-16 animate-on-scroll">
      <v-container class="mobile-padding">
        <div class="text-center mb-12 mb-sm-8 mb-md-12 animate-fade-in-up">
          <SectionTitle
            title="Quem Somos"
            subtitle="Desde o início, buscamos integrar o conhecimento técnico à visão estratégica, com ênfase na análise ambiental e territorial. Essa abordagem está presente em cada projeto, consultoria e treinamento que oferecemos."
          />
        </div>

        <div class="history-content">
          <!-- Linha do Tempo Visual -->
          <div class="timeline-visual mb-8">
            <div
              class="timeline-item animate-fade-in-up mobile-card touch-optimized"
              :style="{ animationDelay: '0.1s' }"
            >
              <div class="timeline-image">
                <img
                  src="/src/assets/home/imagem-satelite.jpg"
                  alt="Imagem de Satélite"
                  class="timeline-img"
                  loading="lazy"
                />
                <div class="timeline-overlay">
                  <div class="timeline-chips">
                    <span class="timeline-chip">2024</span>
                    <span class="timeline-chip">Nascimento da GeoQuantum</span>
                  </div>
                </div>
              </div>
              <div class="timeline-content">
                <h3 class="text-h5 font-weight-bold text-primary mb-3">O Início de uma Jornada</h3>
                <p class="text-body-1 text-grey-darken-1 mb-4">
                  Nossa trajetória teve início em 2024, impulsionada por um grupo de profissionais
                  comprometidos com a análise territorial e a gestão de dados ambientais. Unimos
                  nossas experiências e conhecimentos para transformar essa paixão em um projeto com
                  propósito real e impacto positivo.
                </p>
                <p class="text-body-1 text-grey-darken-1">
                  Formados em Geografia e com especializações em geoprocessamento, SIG e
                  sensoriamento remoto, identificamos uma necessidade urgente no mercado: capacitar
                  profissionais e organizações para explorar o potencial dos dados espaciais na
                  tomada de decisões mais sustentáveis e estratégicas.
                </p>
              </div>
            </div>

            <div
              class="timeline-item reverse animate-fade-in-up mobile-card touch-optimized"
              :style="{ animationDelay: '0.3s' }"
            >
              <div class="timeline-image">
                <img
                  src="/src/assets/home/sistema-planejamento-urbano.png"
                  alt="Sistema de Planejamento Urbano"
                  class="timeline-img"
                  loading="lazy"
                />
                <div class="timeline-overlay">
                  <div class="timeline-chips">
                    <span class="timeline-chip">2024</span>
                    <span class="timeline-chip">Missão Definida</span>
                  </div>
                </div>
              </div>
              <div class="timeline-content">
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Criando a GeoQuantum</h3>
                <p class="text-body-1 text-grey-darken-1 mb-4">
                  Foi com esse objetivo que criamos a GeoQuantum, uma empresa dedicada ao ensino
                  completo de QGIS — do nível básico ao avançado — e à oferta de soluções
                  ambientais, automação de processos espaciais e produção de mapas temáticos. Nosso
                  foco está sempre em resultados práticos, aplicados e que realmente gerem valor.
                </p>
                <p class="text-body-1 text-grey-darken-1">
                  Desde o início, buscamos integrar o conhecimento técnico à visão estratégica, com
                  ênfase na análise ambiental e territorial. Essa abordagem está presente em cada
                  projeto, consultoria e treinamento que oferecemos.
                </p>
              </div>
            </div>

            <div
              class="timeline-item animate-fade-in-up mobile-card touch-optimized"
              :style="{ animationDelay: '0.5s' }"
            >
              <div class="timeline-image">
                <img
                  src="/src/assets/home/agricultura-precisao.jpg"
                  alt="Crescimento e Impacto"
                  class="timeline-img"
                  loading="lazy"
                />
                <div class="timeline-overlay">
                  <div class="timeline-chips">
                    <span class="timeline-chip">2024</span>
                    <span class="timeline-chip">Crescimento</span>
                  </div>
                </div>
              </div>
              <div class="timeline-content">
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Crescimento e Impacto</h3>
                <p class="text-body-1 text-grey-darken-1 mb-4">
                  Em menos de um ano de atuação, conquistamos a confiança de mais de 20 clientes
                  fidelizados, que reconhecem a qualidade das nossas metodologias e a personalização
                  das soluções oferecidas.
                </p>
                <p class="text-body-1 text-grey-darken-1">
                  Nosso impacto vai além da formação técnica: contribuímos para o desenvolvimento de
                  profissionais mais conscientes e preparados, de empresas mais eficientes e de
                  territórios mais sustentáveis. Atualmente, sob uma liderança coletiva e
                  colaborativa, seguimos em expansão, ajudando profissionais e empresas a dominar o
                  universo da geotecnologia.
                </p>
              </div>
            </div>

            <div
              class="timeline-item reverse animate-fade-in-up mobile-card touch-optimized"
              :style="{ animationDelay: '0.7s' }"
            >
              <div class="timeline-image">
                <img
                  src="/src/assets/home/monitoramento-ambiental.jpg"
                  alt="Missão e Propósito"
                  class="timeline-img"
                  loading="lazy"
                />
                <div class="timeline-overlay">
                  <div class="timeline-chips">
                    <span class="timeline-chip">Missão</span>
                    <span class="timeline-chip">Propósito</span>
                  </div>
                </div>
              </div>
              <div class="timeline-content">
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Missão e Propósito</h3>
                <p class="text-body-1 text-grey-darken-1 mb-4">
                  <strong>Missão:</strong> Democratizar o acesso às geotecnologias, capacitando
                  profissionais e organizações a transformar dados espaciais em conhecimento
                  estratégico. Buscamos promover a tomada de decisões sustentáveis, integrando
                  excelência técnica, inovação e responsabilidade socioambiental.
                </p>
                <p class="text-body-1 text-grey-darken-1">
                  <strong>Propósito:</strong> Acreditamos que o futuro depende de como utilizamos as
                  informações que já temos. Por isso, nosso propósito é revelar o poder dos dados
                  geoespaciais para enfrentar desafios ambientais, sociais e territoriais, criando
                  soluções práticas que gerem impacto positivo e duradouro na sociedade.
                </p>
              </div>
            </div>

            <div
              class="timeline-item animate-fade-in-up mobile-card touch-optimized"
              :style="{ animationDelay: '0.9s' }"
            >
              <div class="timeline-image">
                <img
                  src="/src/assets/home/Arc_De_Triomphe.jpg"
                  alt="Visão de Futuro"
                  class="timeline-img"
                  loading="lazy"
                />
                <div class="timeline-overlay">
                  <div class="timeline-chips">
                    <span class="timeline-chip">Visão</span>
                    <span class="timeline-chip">Futuro</span>
                  </div>
                </div>
              </div>
              <div class="timeline-content">
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Nossa Visão</h3>
                <p class="text-body-1 text-grey-darken-1 mb-4">
                  Ser referência em ensino e soluções de geotecnologia na América Latina e na
                  Europa, unindo inovação, excelência técnica e impacto socioambiental.
                </p>
                <p class="text-body-1 text-grey-darken-1">
                  Nosso compromisso é aliar excelência técnica, responsabilidade socioambiental e
                  inovação em tudo o que fazemos. À medida que crescemos, expandimos nossa rede de
                  parceiros e multiplicamos os efeitos de nossas soluções, reforçando o compromisso
                  com a inovação e com o futuro das geotecnologias.
                </p>
                <p class="text-body-1 text-grey-darken-1 mt-4">
                  <strong>E essa jornada está apenas começando.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Idealizadoras -->
    <section class="founders-section py-16 py-sm-12 py-md-16 animate-on-scroll">
      <v-container class="mobile-padding">
        <div class="text-center mb-12 mb-sm-8 mb-md-12 animate-fade-in-up">
          <SectionTitle
            title="Nossas Idealizadoras"
            subtitle="Conheça as profissionais que transformaram sua paixão pela geografia em soluções inovadoras."
          />
        </div>

        <v-row class="mobile-grid justify-center">
          <v-col
            v-for="(founder, index) in founders"
            :key="index"
            cols="12"
            md="6"
            lg="5"
            class="mb-6 mb-sm-4 mb-md-6 d-flex"
          >
            <div
              class="founder-card animate-fade-in-up mobile-card touch-optimized"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <div class="founder-avatar">
                <img :src="founder.image" :alt="founder.name" class="founder-img" loading="lazy" />
              </div>

              <div class="founder-content">
                <h3 class="founder-name">{{ founder.name }}</h3>
                <p class="founder-role">{{ founder.role }}</p>
                <p class="founder-description">{{ founder.description }}</p>

                <div class="founder-social">
                  <a
                    v-if="founder.linkedin"
                    :href="founder.linkedin"
                    target="_blank"
                    class="social-link"
                  >
                    <i class="mdi mdi-linkedin"></i>
                  </a>
                  <a v-if="founder.email" :href="`mailto:${founder.email}`" class="social-link">
                    <i class="mdi mdi-email"></i>
                  </a>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Valores e Princípios -->
    <section class="values-section py-16 py-sm-12 py-md-16 animate-on-scroll">
      <v-container class="mobile-padding">
        <div class="text-center mb-12 mb-sm-8 mb-md-12 animate-fade-in-up">
          <SectionTitle
            title="Nossos Valores"
            subtitle="Os princípios que guiam nossa atuação e definem nossa identidade como empresa."
          />
        </div>

        <v-row class="mobile-grid">
          <v-col
            v-for="(value, index) in values"
            :key="index"
            cols="12"
            sm="6"
            lg="4"
            class="mb-6 mb-sm-4 mb-md-6 d-flex"
          >
            <div
              class="value-card animate-fade-in-up mobile-card touch-optimized"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="value-icon">
                <i :class="value.icon"></i>
              </div>
              <h3 class="value-title">{{ value.title }}</h3>
              <p class="value-description">{{ value.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <CtaSection
      :title="'Pronto para Conhecer Nossos Serviços?'"
      :subtitle="'Entre em contato conosco e descubra como podemos ajudar você a transformar seus dados geoespaciais em soluções inovadoras.'"
      :primary="{
        to: '/contato',
        label: 'Solicitar Orçamento',
        icon: 'mdi-phone',
      }"
      :secondary="{ to: '/servicos', label: 'Nossos Serviços', icon: 'mdi-cog' }"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import CtaSection from '../components/CtaSection.vue'
import SectionTitle from '../components/SectionTitle.vue'
import AlineImage from '../assets/equipe/analista_GIS_AlineMoreira.jpg'
import AndressaImage from '../assets/equipe/analista_GIS_Andressa.jpg'
const founders = [
  {
    name: 'Aline Landim Moreira',
    role: 'Geógrafa e Analista GIS',
    description:
      'Geógrafa (FURG) e Analista GIS, com experiência em geoprocessamento, sensoriamento remoto e ensino de geotecnologias. Profissional dinâmica, proativa e orientada a soluções estratégicas baseadas em dados espaciais, com foco em inovação, automação de processos e sustentabilidade.',
    image: AlineImage,
    skills: ['Geoprocessamento', 'SIG', 'Sensoriamento Remoto', 'QGIS', 'Ensino'],
    linkedin: 'https://linkedin.com/in/aline-landim',
    email: 'comercial@consultgeoquantum.com',
  },
  {
    name: 'Andressa C. Moreira de Almeida',
    role: 'Geógrafa e Mestranda',
    description:
      'Geógrafa (UFG) e mestranda em Desenvolvimento Territorial (ULB), com experiência em docência, análise territorial e geotecnologias. Profissional dedicada, proativa e orientada a soluções estratégicas fundamentadas em dados espaciais, com foco em inovação, planejamento socioambiental e sustentabilidade.',
    image: AndressaImage,
    skills: ['Análise Territorial', 'Geotecnologias', 'Docência', 'Planejamento Socioambiental'],
    linkedin: 'https://linkedin.com/in/andressa-moreira',
    email: 'comercial@consultgeoquantum.com',
  },
]

const values = [
  {
    title: 'Inovação',
    description:
      'Buscamos constantemente novas formas de aplicar as geotecnologias em soluções práticas e eficientes.',
    icon: 'mdi mdi-lightbulb-on',
  },
  {
    title: 'Responsabilidade Socioambiental',
    description:
      'Cada solução que desenvolvemos deve gerar impacto positivo na sociedade e no meio ambiente.',
    icon: 'mdi mdi-leaf',
  },
  {
    title: 'Excelência Técnica',
    description:
      'Qualidade e precisão em tudo que fazemos, garantindo resultados confiáveis e de alto nível.',
    icon: 'mdi mdi-star',
  },
  {
    title: 'Colaboração',
    description: 'Acreditamos no poder do trabalho coletivo e na construção conjunta de soluções.',
    icon: 'mdi mdi-handshake',
  },
  {
    title: 'Acessibilidade',
    description:
      'Tornar o conhecimento geoespacial disponível e acessível a todos os profissionais e organizações.',
    icon: 'mdi mdi-account-multiple',
  },
  {
    title: 'Sustentabilidade',
    description:
      'Promovemos decisões sustentáveis através da análise inteligente de dados espaciais.',
    icon: 'mdi mdi-earth',
  },
]

const handleScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll')
  elements.forEach((element) => {
    const elementTop = (element as HTMLElement).getBoundingClientRect().top
    const elementVisible = 150
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animate')
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.sobre-page {
  background: #ffffff;
}

.hero-section {
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
}

.topography-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/geoprocessing/topographic-map.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(26, 54, 93, 0.85) 0%,
    rgba(45, 90, 135, 0.75) 50%,
    rgba(31, 167, 161, 0.65) 100%
  );
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.history-section {
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
}

.timeline-visual {
  max-width: 1000px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
  border: 1px solid rgba(26, 54, 93, 0.08);
}

.timeline-item.reverse {
  flex-direction: row-reverse;
}

.timeline-image {
  position: relative;
  flex: 0 0 300px;
  height: 200px;
  border-radius: 0.75rem;
  overflow: hidden;
}

.timeline-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timeline-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(26, 54, 93, 0.8) 100%);
  display: flex;
  align-items: flex-end;
  padding: 1rem;
}

.timeline-chips {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.timeline-chip {
  background: rgba(31, 167, 161, 0.9);
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
}

.timeline-content {
  flex: 1;
}

.founders-section {
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
}

.founder-card {
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.08);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.founder-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(26, 54, 93, 0.12);
  border-color: rgba(26, 54, 93, 0.15);
}

.founder-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 4px solid rgba(31, 167, 161, 0.2);
  transition: all 0.3s ease;
}

.founder-card:hover .founder-avatar {
  border-color: rgba(31, 167, 161, 0.4);
  transform: scale(1.05);
}

.founder-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.founder-card:hover .founder-img {
  transform: scale(1.1);
}

.founder-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.founder-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.founder-role {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1fa7a1;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.founder-description {
  font-size: 0.875rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.5rem;
  flex: 1;
}

.founder-social {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

.social-link {
  width: 2.25rem;
  height: 2.25rem;
  background: rgba(31, 167, 161, 0.1);
  border: 1px solid rgba(31, 167, 161, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1fa7a1;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #1fa7a1;
  color: #ffffff;
  transform: scale(1.1);
}

.social-link i {
  font-size: 1rem;
}

.values-section {
  background: #ffffff;
}

.value-card {
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.08);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(26, 54, 93, 0.12);
  border-color: rgba(26, 54, 93, 0.15);
}

.value-icon {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
}

.value-card:hover .value-icon {
  transform: scale(1.1);
}

.value-icon i {
  font-size: 1.75rem;
  color: #ffffff;
}

.value-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.value-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #4a5568;
  flex: 1;
}

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

  .timeline-item {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .timeline-item.reverse {
    flex-direction: column;
  }

  .timeline-image {
    flex: none;
    width: 100%;
    height: 180px;
  }

  .founder-card {
    padding: 1.5rem;
  }

  .founder-avatar {
    width: 100px;
    height: 100px;
    margin-bottom: 1.25rem;
  }

  .founder-name {
    font-size: 1.125rem;
  }

  .founder-role {
    font-size: 0.875rem;
  }

  .founder-description {
    font-size: 0.8125rem;
  }

  .social-link {
    width: 2rem;
    height: 2rem;
  }

  .social-link i {
    font-size: 0.875rem;
  }

  .value-card {
    padding: 1.5rem;
  }

  .value-icon {
    width: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
  }

  .value-icon i {
    font-size: 1.5rem;
  }

  .value-title {
    font-size: 1.125rem;
  }

  .value-description {
    font-size: 0.875rem;
  }
}

@media (max-width: 479px) {
  .hero-section {
    height: 40vh;
    min-height: 300px;
  }

  .text-h2 {
    font-size: 1.75rem;
    line-height: 1.2;
  }

  .text-h6 {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  /* Ajustes específicos para o hero mobile */
  .hero-section .text-h2 {
    font-size: 1.5rem !important;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .hero-section .text-h6 {
    font-size: 0.85rem !important;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }

  .timeline-item {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .timeline-image {
    height: 150px;
  }

  .founder-card {
    padding: 1.25rem;
  }

  .founder-avatar {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
  }

  .founder-name {
    font-size: 1rem;
  }

  .founder-role {
    font-size: 0.8125rem;
  }

  .founder-description {
    font-size: 0.75rem;
  }

  .social-link {
    width: 1.75rem;
    height: 1.75rem;
  }

  .social-link i {
    font-size: 0.75rem;
  }

  .value-card {
    padding: 1.25rem;
  }

  .timeline-item {
    flex-direction: column;
    text-align: center;
  }

  .timeline-item.reverse {
    flex-direction: column;
  }

  .timeline-image {
    width: 100%;
    margin-bottom: 1rem;
  }

  .timeline-content {
    width: 100%;
  }

  .timeline-chips {
    flex-direction: column;
    gap: 0.5rem;
  }

  .timeline-chip {
    font-size: 0.75rem;
    padding: 4px 8px;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .value-card {
    padding: 1rem;
  }

  .value-icon {
    width: 2.5rem;
    height: 2.5rem;
  }

  .value-icon i {
    font-size: 1.25rem;
  }

  .value-title {
    font-size: 1.125rem;
  }

  .value-description {
    font-size: 0.875rem;
  }

  .founder-card {
    padding: 1rem;
  }

  .founder-avatar {
    width: 4rem;
    height: 4rem;
  }

  .founder-name {
    font-size: 1.125rem;
  }

  .founder-role {
    font-size: 0.75rem;
  }

  .founder-description {
    font-size: 0.7rem;
  }

  .social-link {
    width: 1.5rem;
    height: 1.5rem;
  }

  .social-link i {
    font-size: 0.7rem;
  }

  /* Melhorias específicas para mobile baseadas na imagem */
  .mobile-title {
    font-size: 1.5rem !important;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .mobile-text {
    font-size: 0.85rem !important;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }

  .timeline-content h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .timeline-content p {
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }

  .timeline-chips {
    margin-bottom: 1rem;
  }

  .value-card {
    text-align: center;
  }

  .value-icon {
    margin: 0 auto 0.75rem;
  }

  .value-title {
    margin-bottom: 0.5rem;
  }

  .value-description {
    line-height: 1.4;
  }

  .founder-card {
    text-align: center;
  }

  .founder-avatar {
    margin: 0 auto 0.75rem;
  }

  .founder-name {
    margin-bottom: 0.25rem;
  }

  .founder-role {
    margin-bottom: 0.5rem;
  }

  .founder-description {
    line-height: 1.4;
    margin-bottom: 0.75rem;
  }

  .social-link {
    margin: 0 0.25rem;
  }
}
</style>
