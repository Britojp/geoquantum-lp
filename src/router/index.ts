import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Servicos from '../views/Servicos.vue'
import Projetos from '../views/Projetos.vue'
import Documentos from '../views/Documentos.vue'
import Blog from '../views/Blog.vue'
import Equipe from '../views/Equipe.vue'
import Contato from '../views/Contato.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'GeoQuantum - Soluções em Geoprocessamento',
      description:
        'Especialistas em geoprocessamento, mapeamento e análise geoespacial. Soluções inovadoras para projetos de engenharia e meio ambiente.',
    },
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre,
    meta: {
      title: 'Sobre a GeoQuantum - Nossa História e Missão',
      description:
        'Conheça a GeoQuantum, empresa especializada em geoprocessamento com anos de experiência em projetos de engenharia e meio ambiente.',
    },
  },
  {
    path: '/servicos',
    name: 'servicos',
    component: Servicos,
    meta: {
      title: 'Serviços - GeoQuantum',
      description:
        'Oferecemos serviços especializados em geoprocessamento, mapeamento, análise geoespacial e consultoria técnica.',
    },
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: Projetos,
    meta: {
      title: 'Projetos - GeoQuantum',
      description:
        'Portfólio de projetos realizados pela GeoQuantum em diferentes setores e regiões do Brasil.',
    },
  },
  {
    path: '/documentos',
    name: 'documentos',
    component: Documentos,
    meta: {
      title: 'Documentos - GeoQuantum',
      description: 'Documentação institucional, certificados, políticas e métodos da GeoQuantum.',
    },
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: {
      title: 'Blog - GeoQuantum',
      description:
        'Artigos, notícias e insights sobre geoprocessamento, tecnologia geoespacial e projetos da GeoQuantum.',
    },
  },
  {
    path: '/equipe',
    name: 'equipe',
    component: Equipe,
    meta: {
      title: 'Equipe - GeoQuantum',
      description:
        'Conheça nossa equipe de especialistas em geoprocessamento e tecnologia geoespacial.',
    },
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato,
    meta: {
      title: 'Contato - GeoQuantum',
      description:
        'Entre em contato com a GeoQuantum para solicitar orçamentos, informações sobre serviços ou parcerias.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// SEO: Atualizar meta tags dinamicamente
router.beforeEach((to, from, next) => {
  if (to.meta?.title) {
    document.title = to.meta.title as string
  }

  if (to.meta?.description) {
    let metaDescription = document.querySelector('meta[name="description"]')

    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }

    metaDescription.setAttribute('content', to.meta.description as string)
  }

  next()
})

export default router
