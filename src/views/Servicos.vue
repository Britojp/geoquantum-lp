<template>
  <div class="servicos-page">
    <!-- Hero Section com Imagem de Serviços -->
    <section class="hero-section">
      <!-- Imagem de Serviços de Fundo -->
      <div class="services-background"></div>

      <!-- Overlay com Filtro e Conteúdo -->
      <div class="hero-overlay">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <h1
                class="hero-title text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow animate-fade-in-down"
              >
                Nossos Serviços
              </h1>
              <p
                class="hero-subtitle text-h6 text-grey-lighten-2 mb-6 animate-fade-in-up animate-delay-300"
              >
                Soluções completas em geoprocessamento e análise geoespacial para diversos setores e
                aplicações.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Como Trabalhamos -->
    <WorkflowSection :steps="workflowSteps" />

    <!-- Serviços Principais -->
    <section class="services-section">
      <v-container class="mobile-padding">
        <div class="scroll-reveal" data-animation="fade-in-up">
          <SectionTitle
            title="Serviços Especializados"
            subtitle="Oferecemos soluções completas em geoprocessamento e análise espacial para diversos setores e aplicações."
          />
        </div>

        <v-row class="mobile-grid">
          <v-col
            v-for="(service, index) in services"
            :key="service.id"
            cols="12"
            sm="6"
            lg="4"
            class="mb-6 mb-sm-4 mb-md-6 d-flex scroll-reveal"
            :data-animation="'scale-in'"
            :data-delay="index * 100"
          >
            <ServiceCard :service="service" class="flex-grow-1 mobile-card touch-optimized" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Setores de Atuação -->
    <SectorsSection :sectors="sectors" />

    <!-- CTA Section -->
    <CtaSection
      :title="'Pronto para Transformar seus Dados?'"
      :subtitle="'Entre em contato e descubra como podemos ajudar seu projeto'"
      :stats="[
        { number: '24h', label: 'Resposta Rápida' },
        { number: '100%', label: 'Dedicação' },
        { number: '1', label: 'Ano de Mercado' },
      ]"
      :primary="{
        to: '/contato',
        label: 'Solicitar Orçamento',
        icon: 'mdi-phone',
      }"
      :secondary="{ to: '/servicos', label: 'Nossos Serviços', icon: 'mdi-cog' }"
      :contactChips="[
        { icon: 'mdi-email', text: 'contato@geoquantum.com' },
        { icon: 'mdi-phone', text: '+55 (11) 99999-9999' },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ServiceCard from '@/components/ServiceCard.vue'
import CtaSection from '../components/CtaSection.vue'
import SectorsSection from '@/components/SectorsSection.vue'
import WorkflowSection from '@/components/WorkflowSection.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { useScrollAnimations } from '@/composables/useAnimations'

const services = ref([
  {
    id: 1,
    title: 'Mapas de Localização',
    description:
      'Mapas de produção agrícola com levantamento de dados e produção de mapas temáticos dentro dos padrões cartográficos.',
    fullDescription:
      'Mapas de produção agrícola com levantamento de dados e produção de mapas temáticos dentro dos padrões cartográficos que representam um objeto ou fenômeno na superfície terrestre. O mapeamento dos cultivos agrícolas é realizado por meio de sensoriamento remoto. Ele tem por objetivo contribuir com a estimativa de área e de produtividade, oferecendo informações precisas.',
    features: [
      'Levantamento de dados agrícolas',
      'Produção de mapas temáticos',
      'Padrões cartográficos',
      'Sensoriamento remoto',
      'Estimativa de área e produtividade',
    ],
    image: '/images/geoprocessing/agriculture-precision.jpg',
    icon: 'mdi-map-marker-outline',
  },
  {
    id: 2,
    title: 'Mapas de Uso e Cobertura do Solo',
    description:
      'Mapeamento com interpretação de imagens de satélite para detectar alterações na dinâmica de ocupação.',
    fullDescription:
      'Mapeamento realizado com base na interpretação de imagens de satélite, detectando e quantificando, periodicamente, as alterações na dinâmica das formas de ocupação e de organização do espaço geográfico.',
    features: [
      'Interpretação de imagens de satélite',
      'Detecção de alterações',
      'Quantificação de mudanças',
      'Análise de ocupação do solo',
      'Organização do espaço geográfico',
    ],
    image: '/images/geoprocessing/satellite-imagery.jpg',
    icon: 'mdi-earth',
  },
  {
    id: 3,
    title: 'Automatização QGIS',
    description: 'Criar fluxos de trabalho automatizados utilizando o Modelador Gráfico do QGIS.',
    fullDescription:
      'Criar fluxos de trabalho automatizados utilizando o Modelador Gráfico do QGIS. Como encadear várias operações geoespaciais em um único processo, permitindo a repetição de tarefas complexas de forma eficiente e com menos erros.',
    features: [
      'Modelador Gráfico do QGIS',
      'Fluxos de trabalho automatizados',
      'Operações geoespaciais',
      'Processos repetitivos',
      'Redução de erros',
    ],
    image: '/images/geoprocessing/qgis-interface.jpg',
    icon: 'mdi-cog-outline',
  },
  {
    id: 4,
    title: 'Automações Python',
    description:
      'Automação de processos em Python para tarefas repetitivas e manipulação de arquivos.',
    fullDescription:
      'A automação de processos em Python é uma técnica que usa a programação para automatizar tarefas repetitivas. O Python é uma linguagem de programação flexível que pode ser usada para manipular arquivos.',
    features: [
      'Programação em Python',
      'Automação de processos',
      'Tarefas repetitivas',
      'Manipulação de arquivos',
      'Flexibilidade de desenvolvimento',
    ],
    image: '/images/geoprocessing/data-visualization.jpg',
    icon: 'mdi-language-python',
  },
  {
    id: 5,
    title: 'Capacitação QGIS',
    description:
      'Programa de capacitação para profissionais e estudantes em Sistemas de Informação Geográfica.',
    fullDescription:
      'Um programa que oferece a capacitação necessária ao profissional qualificado e ao estudante que deseja estar em dia com as inovações dos Sistemas de Informação Geográficas (SIG).',
    features: [
      'Capacitação profissional',
      'Atualização em SIG',
      'Inovações tecnológicas',
      'Formação contínua',
      'Desenvolvimento de habilidades',
    ],
    image: '/images/geoprocessing/team-collaboration.jpg',
    icon: 'mdi-school-outline',
  },
  {
    id: 6,
    title: 'Atualização e Criação de Talhões',
    description: 'Criação e atualização de talhões agrícolas com precisão cartográfica.',
    fullDescription:
      'Criar fluxos de trabalho automatizados utilizando o Modelador Gráfico do QGIS. Como encadear várias operações geoespaciais em um único processo, permitindo a repetição de tarefas complexas de forma eficiente e com menos erros.',
    features: [
      'Criação de talhões',
      'Atualização de geometrias',
      'Precisão cartográfica',
      'Operações geoespaciais',
      'Automação de processos',
    ],
    image: '/images/geoprocessing/topographic-map.jpg',
    icon: 'mdi-vector-polygon',
  },
  {
    id: 7,
    title: 'Geomarketing',
    description: 'Análises espaciais para estratégias de marketing e localização de negócios.',
    fullDescription:
      'A automação de processos em Python é uma técnica que usa a programação para automatizar tarefas repetitivas. O Python é uma linguagem de programação flexível que pode ser usada para manipular arquivos.',
    features: [
      'Análises espaciais',
      'Estratégias de marketing',
      'Localização de negócios',
      'Análise de mercado',
      'Tomada de decisão',
    ],
    image: '/images/geoprocessing/urban-planning.jpg',
    icon: 'mdi-chart-line',
  },
  {
    id: 8,
    title: 'Projetos Ambientais',
    description: 'Desenvolvimento de projetos ambientais com análise geoespacial.',
    fullDescription:
      'Um programa que oferece a capacitação necessária ao profissional qualificado e ao estudante que deseja estar em dia com as inovações dos Sistemas de Informação Geográficas (SIG).',
    features: [
      'Projetos ambientais',
      'Análise geoespacial',
      'Gestão ambiental',
      'Sustentabilidade',
      'Compliance ambiental',
    ],
    image: '/images/geoprocessing/environmental-monitoring.jpg',
    icon: 'mdi-leaf-outline',
  },
])

const sectors = ref([
  {
    name: 'Agricultura',
    description: 'Soluções para agricultura de precisão e gestão rural',
    icon: 'mdi-sprout',
    projects: '15+',
    category: 'Agronegócio',
    image: '/images/geoprocessing/agriculture-precision.jpg',
  },
  {
    name: 'Meio Ambiente',
    description: 'Análises ambientais e monitoramento ecológico',
    icon: 'mdi-leaf',
    projects: '12+',
    category: 'Sustentabilidade',
    image: '/images/geoprocessing/environmental-monitoring.jpg',
  },
  {
    name: 'Mineração',
    description: 'Mapeamento geológico e análise de recursos',
    icon: 'mdi-pickaxe',
    projects: '8+',
    category: 'Extrativismo',
    image: '/images/geoprocessing/mining-exploration.jpg',
  },
  {
    name: 'Planejamento Urbano',
    description: 'Desenvolvimento urbano e gestão territorial',
    icon: 'mdi-city',
    projects: '10+',
    category: 'Urbanismo',
    image: '/images/geoprocessing/urban-planning.jpg',
  },
  {
    name: 'Energia',
    description: 'Projetos de energia renovável e infraestrutura',
    icon: 'mdi-solar-power',
    projects: '6+',
    category: 'Energia Limpa',
    image: '/images/geoprocessing/renewable-energy.jpg',
  },
  {
    name: 'Logística',
    description: 'Otimização de rotas e gestão de transporte',
    icon: 'mdi-truck-delivery',
    projects: '5+',
    category: 'Transporte',
    image: '/images/geoprocessing/drone-mapping.jpg',
  },
])

const workflowSteps = ref([
  {
    title: 'Análise de Requisitos',
    description: 'Definir escopo e objetivos',
    icon: 'mdi mdi-clipboard-text',
    details:
      'Compreendemos suas necessidades específicas, analisamos os objetivos do projeto, definimos o escopo detalhado e estabelecemos os critérios de sucesso para garantir que a solução atenda exatamente às suas expectativas.',
  },
  {
    title: 'Planejamento',
    description: 'Estratégia e cronograma',
    icon: 'mdi mdi-chart-timeline-variant',
    details:
      'Desenvolvemos uma estratégia completa com cronograma detalhado, alocação de recursos, definição de marcos importantes e plano de execução para garantir que o projeto seja entregue no prazo e dentro do orçamento estabelecido.',
  },
  {
    title: 'Coleta e Processamento',
    description: 'Dados geoespaciais e análise',
    icon: 'mdi mdi-database-cog',
    details:
      'Gerenciamos e organizamos dados geoespaciais de múltiplas fontes, incluindo imagens de satélite, dados cartográficos, informações cadastrais e levantamentos de campo. Aplicamos técnicas avançadas de geoprocessamento e análise espacial para transformar dados brutos em informações valiosas e insights acionáveis.',
  },
  {
    title: 'Entrega',
    description: 'Resultados e documentação',
    icon: 'mdi mdi-check-circle',
    details:
      'Entregamos resultados finais com documentação técnica completa, relatórios detalhados, mapas temáticos, arquivos digitais e suporte pós-entrega para garantir que você possa utilizar efetivamente todas as soluções desenvolvidas.',
  },
])

const { initScrollAnimations, addStaggeredAnimation } = useScrollAnimations()

onMounted(() => {
  // Inicializar animações de scroll
  initScrollAnimations()

  // Adicionar animação escalonada aos cards de serviço
  setTimeout(() => {
    addStaggeredAnimation('.service-card', 150)
  }, 500)
})

onUnmounted(() => {
  // Cleanup se necessário
})
</script>

<style scoped>
.servicos-page {
  background: #ffffff;
}

.hero-section {
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
}

.services-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('src/assets/sistema-planejamento-urbano.png');
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

.services-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
}

@media (max-width: 768px) {
  .hero-section {
    height: 50vh;
    min-height: 350px;
  }

  .hero-overlay {
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }
}

@media (max-width: 479px) {
  .hero-section {
    height: 40vh;
    min-height: 300px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>