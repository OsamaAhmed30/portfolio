<script setup>
defineProps({
    skills:Object
})
</script>

<template>
    <div class="bg-light-tail-100 dark:bg-dark-navy-500 py-16">
        <div class="container mx-auto" >
            <div class="grid grid-cols-8 md:grid-flow-col">
                <div class="flex items-center justify-center" v-for="skill in skills" :key="skill.id">
                    <img class="lg:h-20" :src="skill.image" />
                </div>
            </div>
        </div>
    </div>
</template>