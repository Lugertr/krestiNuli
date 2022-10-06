<template>
    <DialogWindow class="dialog" v-if="show" @click.stop="hideDialog">
        <h1>Кресты\нули</h1 >
    <SliderElem style="margin-top:20px" v-model:checked="dif">
                <template v-slot:title>
                    <h2>Сложность</h2>
                </template>
                <template v-slot:left>
                    <h2>Легко</h2>
                </template>
                <template v-slot:right>
                    <h2 class="sdvig">Средне</h2>
                </template>
    </SliderElem>
    <SliderElem  v-model:checked="cross">
                <template v-slot:title>
                    <h2>Сторона</h2>
                </template>
                <template v-slot:left>
                    <h2>O</h2>
                </template>
                <template v-slot:right>
                    <h2>X</h2>
                </template>
    </SliderElem>
    <SliderElem  v-model:checked="botStep">
                <template v-slot:title>
                    <h2>Кто ходит первый?</h2>
                </template>
                <template v-slot:left>
                    <h2>Я</h2>
                </template>
                <template v-slot:right>
                    <h2>Не я</h2>
                </template>
    </SliderElem>
    <BtnElement class="btnMenu" @click.stop="this.$emit('restartApp')">Начать</BtnElement>
</DialogWindow>
</template>
<script>
    import DialogWindow from '@/components/UI/DialogWindow';
    import SliderElem from '@/components/UI/SliderElem';
    import BtnElement from '@/components//UI/BtnElement';

export default {
    props:{
        show:{type:Boolean,
            default: true},
        status:{type: Object},
    },
    data() {
        return {
                dif: false,
                botStep: false,
                cross: false,

        }
    },
    methods: { 
        hideDialog() {
            this.$emit('update:show',false)
        },
        updateStatus() {
            this.$emit('update:status', {dif:this.dif, botStep:this.botStep,cross:this.cross})
        }},   
    components: { DialogWindow, SliderElem, BtnElement },
    watch: {
        dif: function() {this.updateStatus(this.dif)},
        botStep: function() {this.updateStatus(this.cross)},
        cross: function() {this.updateStatus(this.cross)}
    }
}
</script>
<style scoped>
    h1{
        font-size: 60px;
        text-decoration: underline;
    }
    .dialog {
        top:0;
        bottom:0;
        right: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 2;
        position: fixed;
        display: flex;
    }

    .btnMenu{
        padding: 10px;
        font-size: 35px;
        margin-top:10px
    }

    @media screen and (max-width: 530px)  {
        h1{ font-size: 35px;}
        h2{font-size: 20px;}
        .dialog_content{
            width: 300px;
        }  
        .btnMenu{
        font-size: 30px;
        } 
        .sdvig{
            padding-left: 4px;
        }     
    }

</style>