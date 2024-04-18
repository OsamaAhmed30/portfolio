<script setup>
import Project from "./Project.vue";
import { ref } from "vue";

const props = defineProps({
    skills: Object,
    projects: Object,
});

const filteredProjects = ref(props.projects);
const selectedSkill = ref("all");
const filterProjects = (id) => {
    if (id == "all") {
        filteredProjects.value = props.projects;
        selectedSkill.value = id;
        console.log(selectedSkill.value);
    } else {
        filteredProjects.value = props.projects.filter((project) => {
            return project.skill.id == id;
        });
        selectedSkill.value = id;
        console.log(selectedSkill.value);
    }
};
</script>

<template>
    <div class="container mx-auto"  >
        <nav
            class="mb-12 border-b-2 border-light-tail-100 dark:text-dark-navy-100"
        >
            <ul class="flex flex-col lg:flex-row justify-evenly items-center">
                <li class="cursor-pointer capitalize m-4">
                    <button
                        @click="filterProjects('all')"
                        class="flex text-center px-4 py-2  text-light-primary rounded-md hover:bg-accent dark:text-dark-navy-500"
                        :class="[selectedSkill == 'all' ? 'bg-accent' : 'bg-light-tail-500']"
                    >
                        All
                    </button>
                </li>
                <li
                    v-for="projectSkill in skills"
                    :key="projectSkill.id"
                    class="cursor-pointer capitalize m-4"
                >
                    <button
                        @click="filterProjects(projectSkill.id)"
                        class="flex text-center px-4 py-2 text-light-primary rounded-md hover:bg-accent dark:text-dark-navy-500"
                        :class="[
                            selectedSkill == projectSkill.id ? 'bg-accent' : 'bg-light-tail-500',
                        ]"
                    >
                        {{ projectSkill.name }}
                    </button>
                </li>
            </ul>
        </nav>
        <section class="grid gap-y-12 lg:grid-cols-3 lg:gap-8">
            <Project
                v-for="project in filteredProjects"
                :key="project.id"
                :project="project"
            />
        </section>
    </div>
</template>
