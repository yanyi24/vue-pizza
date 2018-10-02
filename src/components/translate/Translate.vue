<template>
  <div id="translate" class="row">
    <div class="col-sm-12 text-center">
      <h2 class="mt-3">在线翻译</h2>
      <h6 class="text-muted">简单 / 易用 / 快捷</h6>
      <translateForm v-on:formSubmit="translateText"></translateForm>
      <translate-output v-text="translatedText"></translate-output>
    </div>
  </div>
</template>
<script>
  import TranslateForm from './TranslateForm';
  import TranslateOutput from './TranslateOutput';
  export default {
    name: 'Translate',
    data: function(){
      return {
        translatedText: ''
      }
    },
    components:{
      TranslateForm,
      TranslateOutput
    },
    methods: {
      translateText: function (text, language) {
        this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180901T173341Z.a7af0b6ffeb74708.7e58bd02e98d4b65b7709591d06f6c1acb7dab75&lang=' + language + '&text=' + text)
          .then(res => {
            this.translatedText = res.body.text[0];
          })
      }
    }
  }
</script>
<style></style>
