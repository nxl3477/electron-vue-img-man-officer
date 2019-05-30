<template>
  <div class="album-container">
    <div class="album-container-drap" ref="drapTarget">
      
    </div>
    <file-upload
      class="up"
      ref="upload"
      v-model="files"
      post-action="/post.method"
      put-action="/put.method"
      @input-file="fileTest"
      @input-filter="filterTest"
    >
    <div class="up-test"></div>
    </file-upload>
  </div>
</template>
<script>
import VueUploadComponent from 'vue-upload-component'
const fs = require('fs');
export default {
  data() {
    return {
      files: []
    }
  },
  methods: {
    fileTest(...args) {
      //  e.preventDefault()
      console.log('🍉', args, this.files)
    },
    filterTest(...args) {
      //  e.preventDefault()
      console.log('香蕉', args, this.files)
    },
    drapHandle() {
      this.$refs.drapTarget.ondragstart = (event) => {
        event.preventDefault()
        console.log('🍉', event)
        // ipcRenderer.send('ondragstart', '/path/to/item')
      }

      this.$refs.drapTarget.ondragover = (event) => {
        event.preventDefault()
        console.log('🍉', event)
        // ipcRenderer.send('ondragstart', '/path/to/item')
      }

      this.$refs.drapTarget.ondrop  = (event) => {
        event.preventDefault()
        var file = event.dataTransfer.files[0];
        console.log('文件', file)
        fs.readFile(file.path,'utf8',function(err, data){
          console.log('哈哈', data)
        });
      }

    }
  },
  components: {
    'file-upload': VueUploadComponent
  },
  mounted() {
    this.drapHandle()
  }
}
</script>
<style lang="scss">
.album-container {
  
  &-drap {
    margin: 20px;
    height: 400px;
    background: pink; 
  }
  .up {
    width: 100px;
    height: 50px;

    &-test {
      width: 20px;
      height: 20px;
      background: skyblue;
    }
  }
}
</style>

