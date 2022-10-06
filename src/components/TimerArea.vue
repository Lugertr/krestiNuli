<template>
    <div class="timeArea">
        {{this.currentTime}}
    </div>
</template>
<script>
export default {
    props:{
        status:{type:Boolean}
    },
    data() {
        return {
            timer: null,
            counter: 0,
            currentTime: '00:00:00'
        }
    },
    methods:{
        tick() {
            this.currentTime = '00:00:00';
            this.counter = 0;
            this.timer = setInterval(()=>{
                this.counter++
                let timeFormat = new Date(null);
                timeFormat.setSeconds(this.counter);
                this.currentTime = timeFormat.toISOString().substring(11,19);
            },1000)
        },
        stop() {
            clearInterval(this.timer)
        }
    },
    watch:{
        status: function(game) {
            (game) ? this.tick(): this.stop()
        }
    }
}
</script>
<style scoped>

    .timeArea{
        width: 25rem;
        height: 4rem;
        background-color: #fed6a0 solid;
        font-size: 4rem;
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

    

</style>