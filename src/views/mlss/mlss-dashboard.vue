<template>
    <Header></Header>
    <UserBtn/>
    <div class="flex w-full justify-center items-start bg-orange-100">  
        <!-- Accomplishment Reports Section -->
        <div class="flex flex-col items-center p-8 bg-white mt-40 m-4 rounded-3xl">
            <div class="flex mb-4">
                <img src="../../assets/icons/ar.png" alt="MGBLogo" class="flex justify-center w-24">
                <h1 class="font-bold">Accomplishment Reports</h1>
            </div>
            <div class="flex flex-col">
                <button @click="" class="text-lg mb-4 rounded-xl p-3 hover:bg-red-200" style="background: linear-gradient(to top, #e6b980, #eacda3, #e6b980);">Area Status Clearance</button>
                <button @click="" class="text-lg mb-4 rounded-xl p-3 hover:bg-red-200" style="background: linear-gradient(to top, #e6b980, #eacda3, #e6b980);">Database</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'; // Import Header component
import UserBtn from '../../components/user-dbbtn.vue';
import router from '../../router'; // Import your Vue Router instance

export default {
    components: {
        Header,
        UserBtn
    },
    methods: {
       toASC() {
            router.push('/mlss/areastatusclearance');
        },
        toDatabase() {
            router.push('/mlss/database');
        }
    }
}
</script>