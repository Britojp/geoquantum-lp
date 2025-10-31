<template>
  <div class="servicos-page">
    <!-- Hero Section com Imagem de Serviços -->
    <section class="hero-section">
      <!-- Imagem de Serviços de Fundo -->
      <div class="services-background">
        <div class="hero-particles"></div>
      </div>

      <!-- Overlay com Filtro e Conteúdo -->
      <div class="hero-overlay">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <h1
                class="hero-title text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow animate-fade-in-down"
                :style="{ animationDelay: '0.2s' }"
              >
                Soluções em Geoprocessamento
              </h1>
              <p
                class="hero-subtitle text-h6 text-grey-lighten-2 mb-6 animate-fade-in-up"
                :style="{ animationDelay: '0.4s' }"
              >
                Transformamos dados geoespaciais em insights valiosos para diversos setores e
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
    <section class="services-section py-16">
      <v-container class="mobile-padding">
        <div class="text-center mb-12 animate-fade-in-up">
          <SectionTitle
            title="Nossos Serviços Especializados"
            subtitle="Soluções completas em geoprocessamento e análise espacial para transformar seus dados em insights valiosos."
          />
        </div>

        <!-- Filtros de Serviços -->
        <div class="services-filters mb-8 animate-fade-in-up" :style="{ animationDelay: '0.2s' }">
          <div class="filter-tabs">
            <button
              v-for="category in serviceCategories"
              :key="category.id"
              @click="activeCategory = category.id"
              :class="['filter-tab', { active: activeCategory === category.id }]"
            >
              <i :class="category.icon"></i>
              <span>{{ category.name }}</span>
            </button>
          </div>
        </div>

        <!-- Grid de Serviços -->
        <v-row class="mobile-grid">
          <v-col
            v-for="(service, index) in filteredServices"
            :key="service.id"
            cols="12"
            sm="6"
            lg="4"
            class="mb-6 mb-sm-4 mb-md-6 d-flex"
          >
            <div
              class="service-wrapper animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <ServiceCard :service="service" class="flex-grow-1 mobile-card touch-optimized" />
            </div>
          </v-col>
        </v-row>

        <!-- CTA para mais informações -->
        <div class="text-center mt-8 mb-0 animate-fade-in-up" :style="{ animationDelay: '0.8s' }">
          <v-btn color="primary" size="large" variant="elevated" to="/contato" class="btn-section">
            <v-icon start>mdi-phone</v-icon>
            Solicitar Orçamento Personalizado
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- CTA Section -->
    <CtaSection
      :title="'Pronto para Transformar seus Dados?'"
      :subtitle="'Entre em contato e descubra como podemos ajudar seu projeto'"
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ServiceCard from '@/components/ServiceCard.vue'
import CtaSection from '../components/CtaSection.vue'
import SectorsSection from '@/components/SectorsSection.vue'
import WorkflowSection from '@/components/WorkflowSection.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { useScrollAnimations } from '@/composables/useAnimations'
import imagemLocalizacao from '@/assets/projetos/mapa)Localizacao.jpeg'
import imagemUsoCobertura from '@/assets/projetos/Uso_e_Cobertura_2023.jpg'
import imagemModels from '@/assets/projetos/models_model.png'
import imagemCursosQGIS from '@/assets/Cursos_QGIS (1).jpg'
import imagemProducaoAgricola from '@/assets/projetos/Producao_Agricola.jpg'
import imagemConsultoria1 from '@/assets/projetos/consultoria (1).jpg'
import imagemConsultoria2 from '@/assets/projetos/consultoria (2).jpg'
import imagemConsultoria3 from '@/assets/projetos/consultoria (3).jpg'

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
    image: imagemLocalizacao,
    icon: 'mdi-map-marker-outline',
  },
  {
    id: 2,
    title: 'Mapas de Uso e Cobertura do Solo',
    description:
      'Mapeamento realizado com base na interpretação de imagens de satélite, detectando e quantificando alterações na dinâmica das formas de ocupação e organização do espaço geográfico.',
    fullDescription:
      'Mapeamento realizado com base na interpretação de imagens de satélite, detectando e quantificando, periodicamente, as alterações na dinâmica das formas de ocupação e de organização do espaço geográfico.',
    features: [
      'Planejamento territorial e urbano',
      'Gestão ambiental e identificação de desmatamento',
      'Monitoramento de mudanças ao longo do tempo',
      'Suporte à legislação (APP e Reserva Legal)',
      'Apoio à agricultura e pecuária',
      'Base para estudos técnicos e impacto ambiental',
      'Educação e conscientização territorial',
    ],
    image: '/src/assets/projetos/Uso_e_Cobertura_2023.jpg',
    icon: 'mdi-earth',
  },
  {
    id: 3,
    title: 'Automatização de Processos no QGIS',
    description:
      'Criar fluxos de trabalho automatizados utilizando o Modelador Gráfico do QGIS, encadeando operações geoespaciais em um único processo.',
    fullDescription:
      'Criar fluxos de trabalho automatizados utilizando o Modelador Gráfico do QGIS. Como encadear várias operações geoespaciais em um único processo, permitindo a repetição de tarefas complexas de forma eficiente e com menos erros.',
    features: [
      'Ganho de tempo e produtividade',
      'Padronização dos resultados',
      'Redução de erros humanos',
      'Execução em lote de arquivos',
      'Integração com outros sistemas',
      'Reprodutibilidade de scripts',
      'Escalabilidade para grandes volumes',
    ],
    image: imagemModels,
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
    image: './images/geoprocessing/data-visualization.jpg',
    icon: 'mdi-language-python',
  },
  {
    id: 5,
    title: 'Capacitação em QGIS',
    description:
      'Programa que oferece capacitação necessária ao profissional qualificado e ao estudante que deseja estar em dia com as inovações dos Sistemas de Informação Geográficas (SIG).',
    fullDescription:
      'Um programa que oferece a capacitação necessária ao profissional qualificado e ao estudante que deseja estar em dia com as inovações dos Sistemas de Informação Geográficas (SIG). Trabalhamos nisso há 6 anos e oferecemos níveis Iniciante, Intermediário e Avançado.',
    features: [
      'Domínio das ferramentas (básico ao avançado)',
      'Aceleração do aprendizado',
      'Aplicabilidade profissional em diversas áreas',
      'Atualização tecnológica constante',
      'Melhoria na qualidade dos projetos',
      'Autonomia na resolução de problemas',
      'Certificação e credibilidade',
    ],
    image: imagemCursosQGIS,
    icon: 'mdi-school-outline',
    additionalInfo:
      'Trabalhamos nisso há 6 anos. Temos níveis Iniciante, Intermediário e Avançado.',
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
    image: imagemProducaoAgricola,
    icon: 'mdi-vector-polygon',
  },
  {
    id: 7,
    title: 'Geomarketing',
    description:
      'Ferramenta que combina dados de mercado com localização geográfica para apoiar decisões estratégicas em vendas, marketing e expansão de negócios.',
    fullDescription:
      'Um mapa de geomarketing é uma ferramenta que combina dados de mercado com localização geográfica para apoiar decisões estratégicas em vendas, marketing e expansão de negócios.',
    features: [
      'Identificação de oportunidades de mercado',
      'Segmentação geográfica personalizada',
      'Otimização de pontos de venda e logística',
      'Análise de desempenho por região',
      'Planejamento de campanhas direcionadas',
      'Integração de dados socioeconômicos',
      'Tomada de decisão baseada em evidências',
    ],
    image: imagemConsultoria1,
    icon: 'mdi-chart-line',
  },
  {
    id: 8,
    title: 'Projetos Ambientais',
    description:
      'Conjunto de ações planejadas para prevenir, mitigar ou reverter impactos ambientais, promovendo o uso sustentável dos recursos naturais.',
    fullDescription:
      'Um projeto ambiental é um conjunto de ações planejadas para prevenir, mitigar ou reverter impactos ambientais, além de promover o uso sustentável dos recursos naturais.',
    features: [
      'Preservação e recuperação ambiental',
      'Cumprimento da legislação',
      'Prevenção de impactos ambientais',
      'Promoção da sustentabilidade',
      'Educação e conscientização',
      'Apoio a licenciamento e certificações',
      'Atração de investimentos sustentáveis',
      'Benefícios sociais e econômicos',
    ],
    image: imagemConsultoria2,
    icon: 'mdi-leaf-outline',
  },
  {
    id: 9,
    title: 'Consultoria em Geoprocessamento Aplicado',
    description:
      'Transformamos dados geográficos em decisões estratégicas utilizando ferramentas avançadas de geotecnologia para identificar padrões e otimizar operações.',
    fullDescription:
      'Ajudamos empresas e instituições de diferentes setores a transformar dados geográficos em decisões estratégicas. Nossos analistas de geoprocessamento utilizam ferramentas avançadas de geotecnologia para identificar padrões, otimizar operações e revelar oportunidades de crescimento. Atuamos em áreas como planejamento urbano, meio ambiente, agronegócio, logística, energia e mercado imobiliário.',
    features: [
      'Decisões baseadas em dados geográficos reais',
      'Acesso a especialistas sem custo fixo',
      'Soluções personalizadas para cada setor',
      'Otimização de processos e redução de custos',
      'Visualização clara e comunicação estratégica',
      'Pacotes flexíveis de horas mensais',
      'Transparência total e custo previsível',
    ],
    image: imagemConsultoria3,
    icon: 'mdi-account-tie',
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

// Filtros de serviços
const activeCategory = ref('all')

const serviceCategories = ref([
  { id: 'all', name: 'Todos', icon: 'mdi mdi-view-grid' },
  { id: 'mapping', name: 'Mapeamento', icon: 'mdi mdi-map' },
  { id: 'automation', name: 'Automação', icon: 'mdi mdi-cog' },
  { id: 'training', name: 'Capacitação', icon: 'mdi mdi-school' },
  { id: 'analysis', name: 'Análise', icon: 'mdi mdi-chart-line' },
])

// Computed para filtrar serviços
const filteredServices = computed(() => {
  if (activeCategory.value === 'all') {
    return services.value
  }

  const categoryMap: Record<string, number[]> = {
    mapping: [1, 2, 6], // Mapas de Localização, Uso do Solo, Talhões
    automation: [3, 4], // QGIS, Python
    training: [5], // Capacitação
    analysis: [7, 8, 9], // Geomarketing, Projetos Ambientais, Consultoria
  }

  const serviceIds = categoryMap[activeCategory.value] || []
  return services.value.filter((service) => serviceIds.includes(service.id))
})

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
  background-image: url('/src/assets/home/imagem-satelite.jpg');
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

/* Hero Section Melhorias */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 10px 24px;
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.hero-badge i {
  font-size: 20px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.4);
}

.stat-item i {
  font-size: 28px;
  color: white;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 80%, rgba(31, 167, 161, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(26, 54, 93, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(45, 90, 135, 0.1) 0%, transparent 50%);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(1deg);
  }
}

/* Filtros de Serviços */
.services-filters {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.filter-tabs {
  display: flex;
  gap: 1rem;
  background: rgba(26, 54, 93, 0.05);
  padding: 8px;
  border-radius: 50px;
  border: 1px solid rgba(26, 54, 93, 0.1);
  flex-wrap: wrap;
  justify-content: center;
}

.filter-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  background: transparent;
  color: #4a5568;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.filter-tab::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 25px;
}

.filter-tab:hover::before {
  opacity: 0.1;
}

.filter-tab.active {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(26, 54, 93, 0.3);
  transform: translateY(-2px);
}

.filter-tab i {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.filter-tab:hover i {
  transform: scale(1.1);
}

.service-wrapper {
  transition: all 0.3s ease;
}

.service-wrapper:hover {
  transform: translateY(-5px);
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

  .hero-stats {
    gap: 1.5rem;
  }

  .stat-item {
    padding: 15px 20px;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .filter-tabs {
    gap: 0.5rem;
    padding: 6px;
  }

  .filter-tab {
    padding: 10px 16px;
    font-size: 0.85rem;
  }

  .filter-tab i {
    font-size: 16px;
  }
}

@media (max-width: 479px) {
  .hero-section {
    height: 40vh;
    min-height: 300px;
  }

  .hero-title {
    font-size: 2rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1rem;
    line-height: 1.4;
  }

  /* Ajustes específicos para o hero mobile */
  .hero-section .hero-title {
    font-size: 1.5rem !important;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .hero-section .hero-subtitle {
    font-size: 0.85rem !important;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }

  .filter-tabs {
    flex-direction: column;
    gap: 0.25rem;
    padding: 4px;
  }

  .filter-tab {
    width: 100%;
    padding: 8px 12px;
    font-size: 0.8rem;
    justify-content: center;
  }

  .filter-tab i {
    font-size: 14px;
  }

  .filter-tab span {
    font-size: 0.75rem;
  }

  .service-wrapper {
    margin-bottom: 1rem;
  }

  .mobile-grid .v-col {
    padding: 0 4px;
  }

  .mobile-card {
    border-radius: 12px;
  }

  .btn-section {
    width: 100%;
    padding: 10px 12px;
    font-size: 0.85rem;
  }

  /* Melhorias específicas para mobile baseadas na responsividade */
  .service-wrapper {
    margin-bottom: 1rem;
    padding: 0.5rem;
  }

  .mobile-card {
    border-radius: 12px;
    padding: 1rem;
  }

  .mobile-card .v-card-title {
    font-size: 1rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  .mobile-card .v-card-text {
    font-size: 0.875rem;
    line-height: 1.4;
    margin-bottom: 0.75rem;
  }

  .mobile-card .v-chip {
    font-size: 0.75rem;
    margin: 0.125rem;
  }

  .mobile-card .v-btn {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }

  .filter-tab {
    text-align: center;
    padding: 0.75rem 1rem;
  }

  .filter-tab i {
    display: block;
    margin-bottom: 0.25rem;
  }

  .filter-tab span {
    display: block;
    font-size: 0.8rem;
  }
}
</style>
