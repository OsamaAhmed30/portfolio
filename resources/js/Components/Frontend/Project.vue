<script setup>
defineProps({
    project: Object,
});
</script>

<template>
    <Link :href="project.project_url" class="group flex flex-col items-center text-center cursor-pointer"  v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0 }"
    :delay="200">
        <div class="mb-6">
            <img :src="'storage/'+ project.image" :alt="project.name" class="rounded-2xl h-56">
        </div>
        <span class="group-hover:text-light-tail-500 capitalize text-accent text-sm mb-3">
            {{ project.skill.name }}
        </span>
        <h3 class="group-hover:text-light-tail-500 capitalize font-semibold text-2xl mb-3">
            {{ project.name }}
        </h3>
    </Link>

</template>
