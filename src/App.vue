<template>
  <div>
    <Header />
    <router-view
      :listData=populars
      :perPage=perPage
      :total=populars.length
      :totalPages="Math.ceil(populars.length / perPage)"
      @pageChanged=onPageChange
      :currentPage=currentPage
      :paginatedData=paginatedData
    >
    </router-view>
    <a href="#" class="back-to-top"><i class="ion-ios-arrow-up"></i></a>
  <Footer/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'



export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
  computed:{
    
  },
  data(){
    return{
      all : [],
      populars: [],
      currentPage: 1,
      perPage:3
    }
  },
  methods:{
    
  },
  mounted(){
      let tab = []
      let app=this
      axios.get('/cars')
        .then(function (reponse) {
            console.log('response',reponse.data)
                reponse.data.forEach(element => {
                    tab = element.photo.split(';')
                    element.images = tab 
                    element.images.pop()
                });
                console.log('response',reponse.data)
            app.all = reponse.data
            app.populars = app.all.filter(popular => popular.start >= 3 )
            console.log('popus',app.populars)
        })
  }
}
</script>