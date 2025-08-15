import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Leaflet CSS
import 'leaflet/dist/leaflet.css'

// Estilos responsivos
import './assets/styles/responsive.scss'

// Diretivas responsivas
import { registerResponsiveDirectives } from './directives/responsive'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#0B5FA5',
          secondary: '#1FA7A1',
          accent: '#D4A574',
          dark: '#2E3A47',
          surface: '#FFFFFF',
          background: '#F5F5F5',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

// Registrar diretivas responsivas
registerResponsiveDirectives(app)

app.mount('#app')
