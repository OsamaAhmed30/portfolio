<script setup>
    import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue'
    const form = useForm({
        name:'',
        email:'',
        body:'',
        
    })
    const showMessage = ref(false) 
    const setMessage = (value) =>{
        showMessage.value = value;
    }
    const cleanForm = () =>{
        form.reset()
        setMessage(true);
        setTimeout(()=> setMessage(false), 3000);
    }

 let submit = ()=>{
    form.post(route('contact'), {
        preserveScroll: true ,
        onSuccess :cleanForm()
    });
 }

</script>

<template>
    <section id="contact" class="section bg-light-primary dark:bg-dark-primary">
       
        <div class="container mx-auto"  v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible="{ opacity: 1, y: 0 }"
    :delay="200">
            <div class="flex flex-col items-center text-center">
                <h2 class="section-title">Contact Me</h2>
                <p class="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    ad, reiciendis reprehenderit omnis porro minima voluptatem
                    aut odit tenetur magnam modi, tempore veritatis labore id
                    repellendus? Distinctio, pariatur. Repudiandae, et.
                </p>
            </div>

            <div class="flex flex-col lg:flex-row gap-x-4">
                <div
                    class="flex flex-1 flex-col lg:items-start lg:space-y-8 mb-12 lg:mb-0 lg:pt-2"
                >
                    <div class="flex flex-col lg:flex-row gap-x-4">
                        <div
                            class="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                />
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-body text-xl mb-1">
                                Have a question ?
                            </h4>
                            <p class="text-paragraph">I am here to help you</p>
                            <p class="text-accent font-normal">
                                Email me at Osama.omar20300@gmail.com
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-x-4">
                        <div
                            class="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-body text-xl mb-1">
                                Current Location
                            </h4>
                            <p class="text-paragraph">Cairo, Egypt</p>
                            <p class="text-accent font-normal">
                                Serving clients worldwide
                            </p>
                        </div>
                    </div>
                </div>

                <form class="space-y-8 w-full max-w-md" @submit.prevent="submit">
                    <div v-if="showMessage" class="m-2 p-4 bg-light-tail-500 dark:bg-dark-navy-100 text-light-secondary rounded-lg">
            Thank You for contact me 
        </div>
                    <div class="flex gap-8">
                       
                        <div>
                            <input
                                v-model="form.name"
                                type="text"
                                class="input"
                                placeholder="Your Name"
                            />
                            <span class="text-sm m-2 text-red-400">Error</span>
                        </div>
                        <div>
                            <input
                                v-model="form.email"
                                type="email"
                                class="input"
                                placeholder="Your Email"
                            />
                            <span class="text-sm m-2 text-red-400">{{ form.errors.email }}</span>
                        </div>
                    </div>
                    <textarea
                        v-model="form.body"
                        spellcheck="false"
                        class="textarea"
                        placeholder="Your Message"
                    ></textarea>
                    <span class="text-sm text-red-400">Error</span>
                    <input type="submit"
                        class="btn btn-lg bg-accent hover:bg-secondary text-white"
                        value=" Send Message"
                        />
                       
                    
                </form>
            </div>
        </div>
    </section>
</template>
