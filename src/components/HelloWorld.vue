<template>
  <div class="hello bg-im">
    <button @click="getQuote()" class="btn btn-lg btn-primary m-5">Get Quote</button>
    
    <h1 class="text-light">{{quotes.quote}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    quotes() {
      return this.$store.state.quotes;
    },},
  props: {
    msg: String
  },

  methods: {
  getQuote(){
    this.$store.dispatch("getQuote")
    console.log(this.quotes)
  }
}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bg-im{
  background-image: url("https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
