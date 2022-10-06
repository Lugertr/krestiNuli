<template>
    <div class="sliderBox">
        <slot style="width:100%" name="title"></slot>
        <label class="swtich">
            <slot style="" name="left"></slot>
            <input :checked="checked" @change="updateChange" class="checkbox" type="checkbox">
            <span class="slider"></span>
            <slot name="right"></slot>
        </label>
    </div>
</template>
<script>
export default {
    props:{
        checked: [Boolean],
    },
    methods:{
        updateChange(event) {
            this.$emit('update:checked', event.target.checked)
        }
    }
}
</script>
<style scoped>

    .sliderBox{
        height: 20%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .swtich{
        display: grid;
        grid-template-columns: 1fr 300px 1fr;
        align-items: center;
        justify-items: center;
        position: relative;
        width:100%;
        height: 56px;
        cursor: pointer;
    }

    .swtich .checkbox{display: none;}

    .slider{
        position: relative;
        width: 250px;
        height: 34px;
        background-color: #ccc;
        border-radius: 56px;
        transition: .4s;
    }

    .slider::before{
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        border-radius: 50%;
    }

    .checkbox:checked + .slider {
        background-color: #2196F3;
    }

    .checkbox:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    .checkbox:checked + .slider::before{
        transform: translateX(215px);
    }

    @media screen and (max-width: 530px)  {

        .swtich{
            grid-template-columns: 1fr 95px 1fr;
        }

        .slider{width: 95px;}

        .checkbox:checked + .slider::before{
        transform: translateX(61px);
    }
    }

</style>