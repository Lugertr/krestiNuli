<template>
    <div class="banner">
        {{this.mes}}
    </div>
</template>
<script>
export default {
    props: ['mes'],
}
</script>
<style scoped>
    .banner{
        font-size: 80px;
        width: 100%;
        height: 20%;
        position: absolute;
        margin: auto;
        opacity: 0.7;
        background-color: gray;
        display: flex;
        justify-content: center;
        align-items: center;

        text-align: center;
    -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -khtml-user-select: none;    /* Konqueror */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* Internet Explorer/Edge */
  user-select: none;   
    }

    @media screen and (max-width: 520px)  {
        .banner{
        font-size: 50px;}
    }
</style>