<script setup>
import Projects from "./Projects.vue";

defineProps({
    skills: Object,
    projects: Object,
});
</script>

<template>
    <section id="portfolio" class="section bg-light-primary dark:bg-dark-primary min-h-[1400px]">
        <div class="container mx-auto"  v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible="{ opacity: 1, y: 0}"
    :delay="200">
            <div class="flex flex-col items-center text-center">
                <h2 class="section-title">My Latest Work</h2>
                <p class="subtitle"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad, reiciendis reprehenderit omnis porro minima voluptatem aut odit tenetur magnam modi, tempore veritatis labore id repellendus? Distinctio, pariatur. Repudiandae, et.    
                </p>
               
            </div>
        </div>
        <Projects :skills="skills" :projects ="projects"/>
    </section>
</template>
