<template>
    <button :type="typeBtn" class="
    font-inter 
    rounded-md 
    px-8 
    lg:px-10 
    py-2 
    h-[44px]
    bg-main 
    text-white 
    font-btn">
    {{message}}
    </button>
</template>
<script>
export default {
    name: "BtnMain",
    props: {
        typeBtn: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
}
</script>