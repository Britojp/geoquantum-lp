<template>
  <v-card class="contact-form-card" elevation="4">
    <v-card-title class="text-h5 font-weight-bold pa-6 pb-0"> Entre em Contato </v-card-title>

    <v-card-text class="pa-6">
      <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.name"
              label="Nome Completo *"
              :rules="nameRules"
              required
              variant="outlined"
              prepend-inner-icon="mdi-account"
              class="contact-input"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.email"
              label="E-mail *"
              :rules="emailRules"
              required
              variant="outlined"
              prepend-inner-icon="mdi-email"
              type="email"
              class="contact-input"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.phone"
              label="Telefone"
              variant="outlined"
              prepend-inner-icon="mdi-phone"
              v-mask="'(##) #####-####'"
              class="contact-input"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.company"
              label="Empresa"
              variant="outlined"
              prepend-inner-icon="mdi-domain"
              class="contact-input"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-select
              v-model="formData.service"
              label="Serviço de Interesse"
              :items="services"
              variant="outlined"
              prepend-inner-icon="mdi-cog"
              clearable
              class="contact-select"
            ></v-select>
          </v-col>

          <v-col cols="12">
            <v-textarea
              v-model="formData.message"
              label="Mensagem *"
              :rules="messageRules"
              required
              variant="outlined"
              prepend-inner-icon="mdi-message"
              rows="4"
              auto-grow
              class="contact-textarea"
            ></v-textarea>
          </v-col>

          <v-col cols="12">
            <v-checkbox
              v-model="formData.newsletter"
              label="Desejo receber novidades e atualizações da GeoQuantum"
              color="primary"
              class="contact-checkbox"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-card-actions class="pa-0 pt-4">
          <v-btn
            type="submit"
            color="primary"
            size="large"
            variant="elevated"
            :loading="loading"
            :disabled="!valid"
            block
            class="contact-submit-btn"
          >
            <v-icon start>mdi-send</v-icon>
            Enviar Mensagem
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>

    <!-- Snackbar de Sucesso/Erro -->
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="5000">
      {{ snackbar.message }}

      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar.show = false"> Fechar </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '../store'

const route = useRoute()
const store = useAppStore()
const form = ref()
const valid = ref(false)
const loading = ref(false)

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
  newsletter: false,
})

const services = [
  'Geoprocessamento',
  'Mapeamento',
  'Análise Geoespacial',
  'Consultoria Técnica',
  'Desenvolvimento de Sistemas',
  'Outro',
]

const snackbar = reactive({
  show: false,
  message: '',
  color: 'success',
})

// Regras de validação
const nameRules = [
  (v: string) => !!v || 'Nome é obrigatório',
  (v: string) => v.length >= 2 || 'Nome deve ter pelo menos 2 caracteres',
]

const emailRules = [
  (v: string) => !!v || 'E-mail é obrigatório',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
]

const messageRules = [
  (v: string) => !!v || 'Mensagem é obrigatória',
  (v: string) => v.length >= 10 || 'Mensagem deve ter pelo menos 10 caracteres',
]

onMounted(() => {
  // Preencher serviço se vier da URL
  const serviceFromQuery = route.query.service as string
  if (serviceFromQuery) {
    formData.service = serviceFromQuery
  }
})

const submitForm = async () => {
  if (!form.value.validate()) return

  loading.value = true

  try {
    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Atualizar store
    store.updateContactForm('name', formData.name)
    store.updateContactForm('email', formData.email)
    store.updateContactForm('phone', formData.phone)
    store.updateContactForm('company', formData.company)
    store.updateContactForm('message', formData.message)
    store.updateContactForm('service', formData.service)

    // Mostrar sucesso
    snackbar.color = 'success'
    snackbar.message = 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    snackbar.show = true

    // Limpar formulário
    form.value.reset()
    Object.assign(formData, {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
      newsletter: false,
    })
  } catch (error) {
    snackbar.color = 'error'
    snackbar.message = 'Erro ao enviar mensagem. Tente novamente.'
    snackbar.show = true
  } finally {
    loading.value = false
  }
}

// Diretiva para máscara de telefone
const vMask = {
  mounted(el: HTMLElement, binding: any) {
    const input = el.querySelector('input') as HTMLInputElement
    if (input) {
      input.addEventListener('input', (e) => {
        let value = (e.target as HTMLInputElement).value.replace(/\D/g, '')
        if (value.length <= 11) {
          value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
          value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
          value = value.replace(/(\d{2})(\d{4})/, '($1) $2')
          value = value.replace(/(\d{2})/, '($1')
        }
        ;(e.target as HTMLInputElement).value = value
      })
    }
  },
}
</script>

<style scoped>
.contact-form-card {
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
}

.v-form {
  width: 100%;
}

/* Mobile First - Estilos base para mobile */
.contact-input,
.contact-select,
.contact-textarea {
  font-size: 0.875rem;
}

.contact-checkbox {
  font-size: 0.875rem;
}

.contact-submit-btn {
  font-size: 0.9rem;
  padding: 12px 24px;
}

/* Tablet e Desktop */
@media (min-width: 768px) {
  .contact-input,
  .contact-select,
  .contact-textarea {
    font-size: 1rem;
  }

  .contact-checkbox {
    font-size: 1rem;
  }

  .contact-submit-btn {
    font-size: 1rem;
    padding: 16px 32px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .contact-form-card {
    max-width: 700px;
  }

  .contact-input,
  .contact-select,
  .contact-textarea {
    font-size: 1.1rem;
  }

  .contact-checkbox {
    font-size: 1.1rem;
  }

  .contact-submit-btn {
    font-size: 1.1rem;
    padding: 18px 36px;
  }
}

/* Melhorias específicas para mobile baseadas na responsividade */
@media (max-width: 479px) {
  .contact-form-card {
    margin: 0.5rem;
    border-radius: 8px;
  }

  .contact-input,
  .contact-select,
  .contact-textarea {
    font-size: 0.8rem;
  }

  .contact-checkbox {
    font-size: 0.8rem;
  }

  .contact-submit-btn {
    font-size: 0.85rem;
    padding: 10px 20px;
  }

  .v-card-title {
    font-size: 1.25rem !important;
    padding: 1rem !important;
  }

  .v-card-text {
    padding: 1rem !important;
  }

  .v-row {
    margin: 0 -0.5rem;
  }

  .v-col {
    padding: 0.5rem;
  }
}
</style>
