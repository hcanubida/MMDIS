<template>
<div class="bg-gray-100 p-4 flex items-center justify-center h-screen">
  <div x-data="{ showModal: true }">
      <!-- Trigger button -->
      <button @click="showModal = true" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Create New Project
      </button>

      <!-- Modal -->
      <div x-show="showModal" class="fixed inset-0 flex items-center justify-center z-50">
          <div class="bg-white rounded-lg p-6 w-96 max-w-full shadow-lg transform transition-all duration-300" x-show.transition.opacity="showModal">
              <!-- Modal Header -->
              <div class="flex justify-between items-center border-b-2 border-gray-200 pb-4">
                  <h2 class="text-2xl font-semibold">Create or Import Project</h2>
                  <button @click="showModal = false" class="text-gray-500 hover:text-gray-700 focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                  </button>
              </div>
              
              <!-- Modal Content -->
              <div class="mt-6 space-y-4">
                  <p class="text-lg text-gray-600">Choose how you want to create or import a project:</p>
                  <div class="flex flex-col space-y-4">
                      <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Create New Project</button>
                      <button class="flex items-center justify-center gap-2 bg-gray-900 text-gray-100 px-4 py-2 rounded-lg hover:bg-black transition duration-300">
                        <img src="https://svgur.com/i/yp2.svg" alt="Github Icon">
                        Import from GitHub
                        </button>
                  </div>
              </div>

              <!-- Additional Information -->
              <div class="mt-6 text-sm text-gray-500">
                  <p>Create a new project from scratch or import an existing project from your GitHub repository.</p>
              </div>
          </div>
      </div>
  </div>
</div>
</template>
  <script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js" defer></script>