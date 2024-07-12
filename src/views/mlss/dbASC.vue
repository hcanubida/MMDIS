<template>
    <div>
      <!-- Header and User Button Section -->
      <div class="flex">
        <Header />
        <UserBtn />
      </div>

      <!-- Title Section -->
        <div class="flex flex-col mt-44 justify-center font-bold text-center">
            <h1 class="text-4xl">Area Status Clearance</h1>
            <h2 class="text-2xl">Commercial Sand and Gravel</h2>
        </div>


      <!-- Search and Add New Data Section -->
      <div class="flex mt-8 justify-between">
        <form class="w-1/3 ml-4">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search name, province, city or municipality...." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        <div class="content-center">
        
        <!-- Modal toggle -->
        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="mr-4 bg-green-900 p-2 text-white font-bold rounded-lg" type="button">Add New Data</button>
        </div>
        <!-- Main modal -->
        <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Sign in to our platform
                        </h3>
                        <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5">
                        <form class="space-y-4" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
      </div>


        
      <!-- Table Section -->
      <div class="mt-8">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">No.</th>
              <th scope="col" class="px-6 py-3">Names</th>
              <th scope="col" class="px-6 py-3">Area</th>
              <th scope="col" class="px-6 py-3">Province</th>
              <th scope="col" class="px-6 py-3">City/Municipality</th>
              <th scope="col" class="px-6 py-3">Barangay</th>
              <th scope="col" class="px-6 py-3">Sitio</th>
              <th scope="col" class="px-6 py-3">River</th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="px-6 py-3">Date Received</th>
              <th scope="col" class="px-6 py-3">Date Released</th>
              <th scope="col" class="px-6 py-3">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(asc, index) in mlssASC" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">{{ index + 1 }}</td>
              <td class="px-6 py-4">{{ asc.name }}</td>
              <td class="px-6 py-4">{{ asc.area }}</td>
              <td class="px-6 py-4">{{ asc.province }}</td>
              <td class="px-6 py-4">{{ asc.city_municipality }}</td>
              <td class="px-6 py-4">{{ asc.barangay }}</td>
              <td class="px-6 py-4">{{ asc.sitio }}</td>
              <td class="px-6 py-4">{{ asc.river }}</td>
              <td class="px-6 py-4">{{ asc.status }}</td>
              <td class="px-6 py-4">{{ asc.received }}</td>
              <td class="px-6 py-4">{{ asc.released }}</td>
              <td class="px-6 py-4">{{ asc.remarks }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../../components/header.vue';
  import UserBtn from '../../components/user-dbbtn.vue';
  import router from '../../router';
  
  export default {
    components: {
      Header,
      UserBtn
    },
    data() {
      return {
        mlssASC: [
        {
        no: 1,
        name: 'MELITANTE, WILSON D.',
        area: '49,041',
        province: 'Misamis Oriental',
        city_municipality: 'Gingoog City',
        barangay: 'Malinao',
        sitio: '',
        river: 'Odiongan',
        status: 'Held in Abeyance',
        received: 'February 27, 2024',
        released: 'April 1, 2024',
        remarks: 'Amended'
      },
      {
        no: 1,
        name: 'PANCRUDO, RODOLFO L.',
        area: '15,030',
        province: 'Bukidnon',
        city_municipality: 'Manolo Fortich',
        barangay: 'Minsuro',
        sitio: '',
        river: 'Tagoloan',
        status: 'Approved',
        received: 'December 15, 2023',
        released: 'January 15, 2024',
        remarks: 'New'
      },
      {
        no: 1,
        name: 'CASIÑO, JOSHUA JEROME',
        area: '20,464',
        province: 'Misamis Oriental',
        city_municipality: 'Tagoloan',
        barangay: 'Sta Ana',
        sitio: '',
        river: 'Tagoloan',
        status: 'Approved',
        received: 'September 12, 2023',
        released: 'September 27, 2023',
        remarks: 'New'
      },
      {
        no: 1,
        name: 'ECHAVEZ, JUDY DIANE',
        area: '18,366',
        province: 'Lanao del Norte',
        city_municipality: 'Iligan City',
        barangay: 'Mainit',
        sitio: '',
        river: 'Kapihasan',
        status: 'Approved',
        received: 'February 5, 2024',
        released: 'February 22, 2024',
        remarks: 'New'
      },
      {
        no: 1,
        name: 'CANETE,ALFONSO GIAN R.',
        area: '40,173',
        province: 'Lanao del Norte',
        city_municipality: 'Iligan City',
        barangay: 'Mandulog',
        sitio: '',
        river: 'Mandulog',
        status: 'Held in Abeyance',
        received: 'March 15, 2023',
        released: 'April 20, 2023',
        remarks: 'Amended'
      },   
        ] // Ensure to populate this array with actual data
      };
    }
  };
  </script>