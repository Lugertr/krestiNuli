<template>
    <div>
        <div @click.stop class="dialog_content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
      
    },
    methods:{
        hideDialog() {
            this.$emit('update:show',false)
        }
    }
}
</script>
<style scoped>
    .dialog_content{
        margin: auto;
        padding: 20px;
        background: #fed6a0;
        border-radius: 12px;
        min-height: 50px;
        min-width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

</style>