<template>
    <button class="btnElement">
        <slot></slot>
    </button>
</template>
<script>
export default {
    
}
</script >
<style scoped>

    .btnElement{
        background-color: #a1af86;
        border: none;
        border-radius: 20% / 100%;
        cursor: pointer;
    }

    .btnElement:hover{
        background-color: #e1002c;
    }

</style>