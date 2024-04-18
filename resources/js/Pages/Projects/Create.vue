<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
defineProps({
    skills: Array,
});
let form = useForm({
    name: null,
    skill_id: "",
    image: null,
    project_url: null,
});

let store = ()=>{
    form.post(route('projects.store'));
}
</script>
<template>
    <Head title="New Project" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Add New Project
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        <form @submit.prevent="store" method="post">
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div class="sm:col-span-2">
                                    <label
                                        for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >Project Name</label
                                    >
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type project name"
                                        v-model="form.name"
                                    />
                                    <div
                                        class="text-red-500"
                                        v-text="form.errors.name"
                                    ></div>
                                </div>
                                <div class="w-full">
                                    <label
                                        for="url"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >Project Url</label
                                    >
                                    <input
                                        type="text"
                                        name="project_url"
                                        id="url"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Project url"
                                        v-model="form.project_url"
                                    />
                                    <div
                                        class="text-red-500"
                                        v-text="form.errors.project_url"
                                    ></div>
                                </div>

                                <div>
                                    <label
                                        for="skills"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >Skills</label
                                    >
                                    <select
                                        id="skills"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        v-model="form.skill_id"
                                    >
                                        <option value="">Select Skills</option>
                                        <option
                                            v-for="skill in skills"
                                            :key="skill.id"
                                            :value="skill.id"
                                        >
                                            {{ skill.name }}
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        class="mb-5 block text-xl font-semibold text-[#07074D]"
                                    >
                                        Upload Project Image
                                    </label>

                                    <div >
                                        <input
                                            type="file"
                                            name="file"
                                            id="file"
                                            class="sr-only"
                                            @input="
                                                form.image =
                                                    $event.target.files[0]
                                            "
                                        />
                                        <div
                                            class="text-red-500"
                                            v-text="form.errors.image"
                                        ></div>

                                        <label
                                            for="file"
                                            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                        >
                                            <div class="w-full">
                                                <span
                                                    class="mb-2 block text-xl font-semibold text-[#07074D]"
                                                >
                                                    Drop Image here
                                                </span>
                                                <span
                                                    class="mb-2 block text-base font-medium text-[#6B7280]"
                                                >
                                                    Or
                                                </span>
                                                <span
                                                    class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                                                >
                                                    Browse
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-purple-800 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                            >
                                Add product
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
