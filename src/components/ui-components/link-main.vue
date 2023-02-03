<template>
    <router-link :to="url" :class="background" class="
    inline-flex
    items-center
    text-center
    font-inter 
    rounded-md 
    px-8 
    lg:px-10 
    py-2 
    h-[44px]
    text-white 
    font-btn">
        {{ message }}
    </router-link>
</template>
<script>
export default {
    name: "LinkMain",
    props: {
        url: {
            type: Object,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        background: {
            type: String,
            required: true
        }
    }
}
</script>