const faqs = [
  {
    question: 'What payment methods do you offer?',
    answer: 'We accept all major credit cards, PayPal, and (in select countries) direct debit. We also support transactions in a range of currencies.',
    showDetails: false
  },
  {
    question: 'How do I switch from being a free to paid user?',
    answer: 'You can become a paid user at any time by going to the Billing page in your account and changing your plan. Make a selection and we’ll tell you the price based on the number of subscribers you have.',
    showDetails: false
  },
  {
    question: 'Do you have pricing for high-volume senders?',
    answer: 'We do indeed. If you send to a list of more than 50,000, we have a high-volume plan that can meet your needs. Simply input the number of subscribers into the calculator above and we’ll find the right plan for you.',
    showDetails: false
  }
]

new Vue({
  el: '#app',
  data: {
    faqs: faqs,
  },
  methods: {
    toggleDetails(faq) {
      faq.showDetails = !faq.showDetails
    }
  }
})