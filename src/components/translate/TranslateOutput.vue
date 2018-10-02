<template>
  <div id="translateOutput" class="row">
    <div class="col-sm-12">
      <h4>{{translatedText}}</h4>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TranslateOutput',
    props: [
      'translatedText'
    ]
  }
</script>
