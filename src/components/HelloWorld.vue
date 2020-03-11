<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <b-alert show variant="danger" dismissible>
      Dismissible Alert!
    </b-alert> -->
    <!-- <div>
      <button @click="submitNewCreditCard">增加</button>
      {{ newCreditCard.error }}
    </div>
    <div v-if="sources">This only checks for if sources exist</div>
    <div v-if="sources && Object.keys(sources).length != 0">Render only if sources length != 0</div> -->
    <!-- <div>Using computed {{ nameModded }}</div> -->
    <!-- <p>
      Let us locate you for better results...
      <button @click="locateMe">Get location</button>
    </p>
    
    <div v-if="errorStr">
      Sorry, but the following error
      occurred: {{errorStr}}
    </div>
    
    <div v-if="gettingLocation">
      <i>Getting your location...</i>
    </div>
    
    <div v-if="location">
      Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude}}
    </div> -->
    <div >
      <p>Upload an image to Firebase:</p>
      <input type="file" @change="previewImage" accept="image/*" >
    </div>
    <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>
    <div v-if="imageData!=null">
        <img class="preview" :src="picture">
        <br>
      <button @click="onUpload">Upload</button>
    </div>

    <hr>
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
//import Vue from 'vue'
import GoogleMapsApiLoader from 'google-maps-api-loader'
import firebase from 'firebase';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    // eslint-disable-next-line
    console.log('data sources:' + this.sources)//happens before created 
    return {
        newCreditCard: {
          number: '4242424242424242',
          cvc: '111',
          exp_month: 1,
          exp_year: 2020,
          address_zip: '00000',
          error: '' // must define this in the beginning or else it won't be monitored
        },
        sources: {},
        location:null,
        gettingLocation: false,
        errorStr:null,
        google: null,
        imageData: null,
        picture: null,
        uploadValue: 0
    }
  },
  computed: {
    nameModded() {
      // eslint-disable-next-line
      console.log('computed sources length ' + Object.keys(this.sources).length)
      return this.data 
    }
  },
  watch: {
    data(newValue, oldValue) {
      // eslint-disable-next-line
      console.log(oldValue)
      // eslint-disable-next-line
      console.log(newValue)
    }
  },
  created () {
    // eslint-disable-next-line
    console.log('created sources length ' + Object.keys(this.sources).length)
    //Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
    //this.msg = 'hello world from created'
  },
  async mounted() {
    // eslint-disable-next-line
    console.log('mounted sources length ' + Object.keys(this.sources).length)
    //Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
    //this.msg = 'hello world from mounted'
    //Vue.$geocoder.setDefaultMode('lat-lng');
    var latLngObj = {
        lat: 37.421512,
        lng: -122.084101
    }
    // Vue.$geocoder.send(latLngObj, response => { 
    //   // eslint-disable-next-line
    //   console.log(response) 
    // });
    // eslint-disable-next-line
    console.log('key',process.env.VUE_APP_SECRET)
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: process.env.VUE_APP_SECRET
    })
    this.google = googleMapApi
    let geocoder = new this.google.maps.Geocoder();
    geocoder.geocode({'location': latLngObj}, function(results, status) {
      if (status === 'OK') {
        // eslint-disable-next-line
        console.log(results) 
      }
     }
    )
    var origin1 = new this.google.maps.LatLng(55.930385, -3.118425);
    //var origin2 = 'Greenwich, England';
    //var destinationA = 'Stockholm, Sweden';
    var destinationB = new this.google.maps.LatLng(50.087692, 14.421150);
    this.fetchDistance(origin1, destinationB)
  },
  methods: {
    submitNewCreditCard() {
      // eslint-disable-next-line
      console.log('do some things')
      this.newCreditCard.error = 'response.error.message'
    },
    async getLocation() {
      
      return new Promise((resolve, reject) => {

        if(!("geolocation" in navigator)) {
          reject(new Error('Geolocation is not available.'));
        }

        navigator.geolocation.getCurrentPosition(pos => {
          resolve(pos);
        }, err => {
          reject(err);
        });

      });
    },
    async locateMe() {

      this.gettingLocation = true;
      try {
        this.gettingLocation = false;
        this.location = await this.getLocation();
      } catch(e) {
        this.gettingLocation = false;
        this.errorStr = e.message;
      }
      
    },
    async fetchDistance(origin, dest) {
      return new Promise((resolve, reject) => {
        let response;
        var service = new this.google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [origin],
                destinations: [dest],
                travelMode: "DRIVING",
                unitSystem: this.google.maps.UnitSystem.METRIC,
                avoidHighways: false,
                avoidTolls: false
            },
            function(resp, status) {                     
                if (status !== this.google.maps.DistanceMatrixStatus.OK) {
                    response = reject(status);
                } else {
                    response = resolve(resp);
                    // eslint-disable-next-line
                    //console.log(response) 
                    // eslint-disable-next-line
                    console.log(resp.rows[0].elements[0]) 
                }
            }
        );
        return response;
      });
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload(){
      this.picture = null;
      const storageRef = firebase.storage().ref(`images/${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
          this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error=>{
          // eslint-disable-next-line
          console.log(error.message)
        }, ()=>{
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            this.picture = url;
          });
        }
      );
    }
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
