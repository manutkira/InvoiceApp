import { createStore } from 'vuex'
import db from '../firebase/firebaseInit'

export default createStore({
  state: {
    invoiceData: [],
    invoiceModal: null,
    modalActive: null,
    invoiceLoaded: null,
  },
  mutations: {
    toggle_invoice(state){
      state.invoiceModal = !state.invoiceModal;
    },
    toggle_modal(state){
      state.modalActive = !state.modalActive;
    },
    SET_INVOICE_DATA(state, payload){
      state.invoiceData.push(payload)
    },
    INVOICE_LOADED(state){
      state.invoiceLoaded = true
    }
  },
  actions: {
    async GET_INVOICE({commit, state}){
      const getDate = db.collection('invoices');
      const results = await getDate.get()
      results.forEach(doc => {
        if(!state.invoiceData.some(invoice => invoice.docId === doc.id)){
          const data = {
            docId: doc.id,
            invoiceId: doc.data().invoiceId,
            billerStreetAddress: doc.data().billerStreetAddress,
            billerCity: doc.data().billerCity,
            billerZipCode: doc.data().billerZipCode,
            billerCountry: doc.data().billerCountry,
            clientName: doc.data().clientName,
            clientEmail: doc.data().clientEmail,
            clientStreetAddress: doc.data().clientStreetAddress,
            clientCity: doc.data().clientCity,
            clientZipCode: doc.data().clientZipCode,
            clientCountry: doc.data().clientCountry,
            invoiceDateUnix: doc.data().invoiceDateUnix,
            invoiceDate: doc.data().invoiceDate,
            paymentTerms: doc.data().paymentTerms,
            paymentDueDateUnix: doc.data().paymentDueDateUnix,
            paymentDueDate: doc.data().paymentDueDate,
            productDescription: doc.data().productDescription,
            invoiceItemList: doc.data().invoiceItemList,
            invoiceTotal: doc.data().invoiceTotal,
            invoicePending: doc.data().invoicePending,
            invoiceDraft: doc.data().invoiceDraft,
            invoicePaid: doc.data().invoicePaid,
          };

          commit('SET_INVOICE_DATA', data)
        }
      });
      commit('INVOICE_LOADED')
    }
  },
  modules: {
  }
})
