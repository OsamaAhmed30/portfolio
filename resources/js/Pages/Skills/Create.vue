<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

const form = useForm({
    'name' : '',
    'image' : null,
})

let store = ()=>{
    form.post(route('skills.store'))
}

</script>
<template>
    <Head title="New Skill" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Add New Skill
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
               <!-- component -->
<div class="flex items-center justify-center p-12">
  <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com -->
  <div class="mx-auto w-full max-w-[550px] bg-white">
    <form
      class="py-6 px-9"
      @submit.prevent="store"
      method="POST"
      enctype="multipart/form-data"
    >
      <div class="mb-5">
        <label
          for="name"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Skill Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          v-model="form.name"
        />
        <div class="text-red-500" v-text="form.errors.name"></div>
      </div>

      <div class="mb-6 pt-4">
        <label class="mb-5 block text-xl font-semibold text-[#07074D]">
          Upload Skill Image
        </label>

        <div class="mb-8">
          <input type="file" name="file" id="file" class="sr-only" 
          @input="form.image = $event.target.files[0]"
/>
<div class="text-red-500" v-text="form.errors.image"></div>

          <label
            for="file"
            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
          >
            <div>
              <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop Image here
              </span>
              <span class="mb-2 block text-base font-medium text-[#6B7280]">
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

      <div class="flex justify-between">
        <button
          class="hover:bg-[#5951eb] w-50 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Add
        </button>
        <Link
          class="  w-50 rounded-md bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-red-700"
        >
          Cancel
        </Link>
      </div>
    </form>
  </div>
</div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
