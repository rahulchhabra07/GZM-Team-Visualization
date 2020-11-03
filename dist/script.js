var app = new Vue({
  el: '#app',
  data: {
    meta: [], // Meta data from Google Sheet
    items: [] // Items data from Google Sheet
  },
  mounted () {
    // Fetch the Meta data from Sheety API
    axios
      .get('https://v2-api.sheety.co/fb81b8176e802682971503045a529074/portfolio/meta')
      .then(response => (this.meta = response.data.meta[0]))
    
    // Fetch the Items data from Sheety API
    axios
      .get('https://api.sheety.co/783dfdfdfe69edf884c0a5c69ecc5f2f/genZMafiaHackathonTeamBuildingResponses/formResponses1')
      .then(response => (this.items=response.data.formResponses1))
  },
  methods: {
    // Convert comma seperated tags to an array
    getTags: function (tags) {
      return tags.split(',')
    }
  }
})