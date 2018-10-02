<template>
  <div id="translateForm" class="row">
    <div class="col-md-6 col-md-offset-3 mt-3">
      <form class="well form-inline" action="" v-on:submit="formSubmit">
        <div class="row center-block">
          <div class="col-sm-9">
            <input class="form-control" type="text" v-model="translateText" placeholder="请输入您要翻译的内容">
          </div>
          <div class="col-sm-3">
            <select class="form-control" v-model="language">
              <option value="en">English</option>
              <option value="it">Italian</option>
              <option value="ko">Korean</option>
              <option value="nl">Dutch</option>
              <option value="zh">Chinese</option>
            </select>
          </div>
        </div>
        <button class="btn btn-primary btn-block mt-3">翻译</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TranslateForm',
    data: function(){
      return {
        translateText: '',
        language: ''
      }
    },
    methods:{
      formSubmit: function (e) {
        this.$emit('formSubmit',this.translateText, this.language);
        e.preventDefault();
      }
    },
    created: function () {
      this.language = 'en';
    }
  }
</script>
<style>

  .form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }
  .form-control:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
  }
  .form-control::-moz-placeholder {
    color: #999;
    opacity: 1;
  }
  .form-control:-ms-input-placeholder {
    color: #999;
  }
  .form-control::-webkit-input-placeholder {
    color: #999;
  }
  .form-control::-ms-expand {
    background-color: transparent;
    border: 0;
  }
  .form-control[disabled],
  .form-control[readonly],
  fieldset[disabled] .form-control {
    background-color: #eee;
    opacity: 1;
  }
  .form-control[disabled],
  fieldset[disabled] .form-control {
    cursor: not-allowed;
  }
  .well {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
  }
  .well blockquote {
    border-color: #ddd;
    border-color: rgba(0, 0, 0, .15);
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
.col-md-6 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 992px) {
    .col-md-6 {
      float: left;
    }
    .col-md-6 {
      width: 50%;
    }

  }
</style>
