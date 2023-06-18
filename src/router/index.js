import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import QuestionView from '../views/QuestionView.vue'
import HowItWorks from '../views/HowItWorks.vue'
import WhyChooseUS from '../views/WhyChooseUS.vue'
import ContactView from '../views/ContactView.vue'
import DefinitionsView from '../views/DefinitionsView.vue'
import DisclaimerView from '../views/DisclaimerView.vue'
import eConsentView from '../views/eConsentView.vue'
import LendingPolicy from '../views/LendingPolicy.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import RatesAndFees from '../views/RatesAndFees.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import WelcomeView from '../views/WelcomeView.vue'
import FormView from '../views/FormView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUsView
    },
    {
      path: '/question',
      name: 'question',
      component: QuestionView
    },
    {
      path: '/howitworks',
      name: 'howitworks',
      component: HowItWorks
    },
    {
      path: '/whychooseus',
      name: 'whychooseus',
      component: WhyChooseUS
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/definitions',
      name: 'definitions',
      component: DefinitionsView
    },
    {
      path: '/disclaimer',
      name: 'disclaimer',
      component: DisclaimerView
    },
    {
      path: '/eConsent',
      name: 'eConsent',
      component: eConsentView
    },
    {
      path: '/lendingpolicy',
      name: 'lendingpolicy',
      component: LendingPolicy
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: PrivacyPolicy
    },
    {
      path: '/ratesandfees',
      name: 'ratesandfees',
      component: RatesAndFees
    },
    {
      path: '/termsofuse',
      name: 'termsofuse',
      component: TermsOfUse
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    }
  ],
})

export default router
