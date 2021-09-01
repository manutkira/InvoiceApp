<template>
  <div v-if="currentInvoice" class="invoice-view container">
    <router-link class="nav-link flex" :to="{name: 'Home'}">
      <img src="../assets/icon-arrow-left.svg" alt="">Go Back
    </router-link>
    <div class="header flex">
      <div class="left flex">
        <span>Status</span>
        <div
        class="status-button flex"
        :class="{ paid: currentInvoice.invoicePaid, draft: currentInvoice.invoiceDraft, pending: currentInvoice.invoicePending }"
      >
        <span v-if="currentInvoice.invoicePaid">Paid</span>
        <span v-if="currentInvoice.invoiceDraft">Draft</span>
        <span v-if="currentInvoice.invoicePending">Pending</span>
      </div>
      </div>
      <div class="right flex">
        <button @click="toggleEditInvoice(currentInvoice.docId)" class="dark-purple">Edit</button>
        <button @click="deleteInvoice(currentInvoice.docId)" class="red">Delete</button>
        <button @click="updateStatusToPaid(currentInvoice.docId)" v-if="currentInvoice.invoicePending" class="green">Mark as paid</button>
        <button v-if="currentInvoice.invoiceDraft || currentInvoice.invoicePaid"></button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  name: 'InvoiceView',
  data(){
    return{

      currentInvoice: null,
    }
  },
  created(){
    this.getCurrentInvoice()
  },
  methods: {
    ...mapMutations(['SET_CURRENT_INVOICE']),
    getCurrentInvoice(){
      this.SET_CURRENT_INVOICE(this.$route.params.invoiceId)
      this.currentInvoice = this.currentInvoiceArray[0]
    }
  },
  computed: {
    ...mapState(['currentInvoiceArray'])
  }
}
</script>

<style>

</style>