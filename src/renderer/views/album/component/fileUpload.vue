<template>
  <div class="album-component-fileUpload">
    <div class="album-component-fileUpload-hint">
      图片拖拽到此处

      <div class="album-component-fileUpload-hint-fileList">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>
<style lang="scss">
.album-component-fileUpload {
  width: 500px;
  height: 400px;
  background: #2c2b2c;

  &-hint {
    text-align: center;
    line-height: 400px;
    color: #ddd;
    font-size: 30px;
  }
}
</style>

