# vue-cli-app
Created from vue-cli. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Add vuex
```
npm install vuex --save
```

### Install bootstrap
```
vue add bootstrap-vue
```

### Install geocoder
```
#npm install --save @pderas/vue2-geocoder
npm install --save google-maps-api-loader
```
Goto console.cloud.google.com enable billing on project get API key.  
Enable Maps Javascript API  
Enable Geocoding API  
Add API key to .env.local  
VUE_APP_SECRET=API key  

### Distance Matrix Example 
Enable [Distance Matrix API](https://developers.google.com/maps/documentation/javascript/distancematrix?hl=en_US) in console.cloud.google.com/apis  

### Firebase storage example 
```
npm install --save firebase
```
Create Firebase project and Enable Storage functionality in console.firebase.google.com  
From firebase console project settings put values inside .env.local
```
VUE_APP_API_KEY=apiKey
VUE_APP_AUTH_DOMAIN=authDomain
VUE_APP_DATABASE_URL=databaseURL
VUE_APP_PROJECT_ID=projectId
VUE_APP_STORAGE_BUCKET=storageBucket
VUE_APP_MESSAGING_SENDER_ID=messagingSenderId
VUE_APP_APP_ID=appId
```

Add storage rule in console.firebase.google.com/storage, before default rule  
```
match /images/{fileName=**} {
    allow read, write: if request.auth != true;
}
```
See [storage rules](https://firebase.google.com/docs/rules/rules-language)

