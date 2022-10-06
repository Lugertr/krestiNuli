<template>
    <div class="cell" v-bind:class="{odd: this.cell.id%2!==0}" @click="$emit('clickCell',cell)">
        <div class="notEmptyCell" v-show="this.cell.player===true">{{this.setMark(true)}}</div>
        <div class="notEmptyCell" v-show="this.cell.player===false">{{this.setMark()}}</div>
    </div>
</template>
<script>    
import {toRefs} from "vue";
export default {
    name:"Cell-element",
    props:{
        cell:{type: Object,
            require: true,},
        cross: {type: Boolean,
            default: true}
    },
    data() {
        return {player: toRefs(this.cell)}
    },
    methods: {
        makeNotEmpty() {
            if (this.cell.state) {
                if (this.cell.player)
                    return true
                return false
            }
            return null
        },
        setMark(player = false) {
            if (player) {
                if (this.cross) 
                    return 'X'
            return 'O'
            }
            else {
                if (this.cross) 
                    return 'O'
            return 'X'
            }
        }
    },
    computed: {
        
    }
}
</script>
<style scoped>
    .cell{
        width: 100%;
        height: 100%;
        background-color: #e1002c;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .odd{
        background-color: #a1af86;
    }

    .notEmptyCell{
        
        color: white;
        font-size: 4rem;
        text-align: center;
    -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -khtml-user-select: none;    /* Konqueror */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* Internet Explorer/Edge */
  user-select: none;  
    }


</style>