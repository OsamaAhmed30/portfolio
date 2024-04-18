<script setup>
import { Head, Link } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

defineProps({
    skills: Object,
});
</script>
<template>
    <Head title="Skills" />
    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Skills
                </h2>
                <Link
                    :href="route('skills.create')"
                    class="bg-indigo-500 rounded-md text-white hover:bg-indigo-700 px-4 py-2"
                    as="button"
                    type="button"
                    >Add New Skill</Link
                >
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div
                        class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 p-5"
                    >
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
                            >
                                <svg
                                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="table-search-skills"
                                class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search for skills"
                            />
                        </div>
                    </div>
                    <table
                        class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                        <thead
                            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >
                            <th class="px-2 py-3 text-center">Name</th>
                            <th class="px-2 py-3 text-center">Image</th>

                            <th class="px-2 py-3">Action</th>
                        </thead>
                        <tbody>
                            <tr
                                v-for="skill in skills"
                                :key="skill.id"
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td
                                    class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">
                                            {{ skill.name }}
                                        </div>
                                    </div>
                                </td>
                                <td
                                    class="texte-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <div
                                        class="flex justify-center ps-3 text-center"
                                    >
                                        <div class="text-base font-semibold">
                                            <img
                                                class="w-40 h-10 rounded-full"
                                                :src="skill.image"
                                                :alt="skill.name"
                                            />
                                        </div>
                                    </div>
                                </td>

                                <td class="px-6 py-4">
                                    <Link
                                        :href="route('skills.edit',skill)"
                                        class="bg-blue-500 rounded px-2 py-2  font-medium text-white mr-3 hover:bg-blue-600"
                                        as="button"
                                        type="button"
                                        >Edit</Link
                                    >
                                    <Link
                                        :href="route('skills.destroy',skill)"
                                        class="bg-red-500 rounded px-2 py-2 font-medium text-white dark:text-white hover:bg-red-700"
                                        method="delete"
                                        as="button"
                                        type="button"
                                        >Delete</Link
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
