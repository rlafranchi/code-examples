// Generated by http://github.com/ytbryan/vuejs

export default {
  // components: {},
  // mixins: [], 
  // props: {},
  data: function() {
    return {
      message: "Hello table!",
      items: []
    };
  },
  watch: {
    onCreated: function(response){
      this.items = response.data
    }
  },
  methods: {
    click: function(response){
      console.log("clicked")
    }
  }, 
  computed: {

  }
};