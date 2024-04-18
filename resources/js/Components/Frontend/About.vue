<script setup>

    const imageUrl = 'img/about.jpg'
</script>

<template>
    <section id="about" class="section bg-light-secondary dark:bg-dark-secondary">
        <div class="container mx-auto"  v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible="{ opacity: 1, y: 0 }"
    :delay="200">
            <div class="flex flex-col xl:flex-row gap-24" >
                <img :src="imageUrl" class="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl" alt="about"/>
                <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div class="flex flex-col">
                    <h2 class="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">About Me</h2>
                    <p class="mb-4 text-accent">Freelance Fullstack  Web Developer</p>
                    <hr class="mb-8 opacity-90 dark:opacity-5" />
                    <p class="mb-8" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quidem ut optio porro facilis architecto consequatur velit reprehenderit! Dolores, aspernatur sequi labore nihil repellendus eos iusto eius ad quis autem?<br/> <br/>Aperiam consequuntur eaque atque earum, cum officia laborum iure ratione sequi accusantium eum consequatur expedita?
                    </p>
                </div>
                <a href="#contact" class="btn btn-md bg-accent text-light-tail-100">Contact Me</a>
                </div>
            </div>
        </div>
    </section>
</template>
