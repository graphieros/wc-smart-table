import { defineCustomElement } from 'vue'
import WebComp from './components/SmartTable.ce.vue';

const SimpleSample = defineCustomElement(WebComp)

customElements.define('wc-smart-table', SimpleSample)