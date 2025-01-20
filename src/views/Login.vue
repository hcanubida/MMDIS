<template>
    <taas />

    <div class="panel flex justify-center items-center ">
        <div class="panel1 h-auto flex flex-row justify-center items-center mt-32">
            <img :src="mgb" class="img123" style="width: 330px;" />
            <div class="login -ml-16 bg-green-800">
                <div style="margin-left: 40px;margin-top: 30px;margin-bottom: 20px;">
                    <h1 style="font-weight: 700; font-size: 25px;" class="text-white">Welcome Back!</h1>
                    <p style="font-size: 15px;" class="text-white">Login to access the MGB-X </p>
                    <p style="font-size: 15px;" class="text-white">MMD Information System:</p>
                </div>
                <form>
                    <div class="inputfield flex flex-col">
                        <input v-model="form.username" id="username" name="username" type="username"
                            autocomplete="username" placeholder="Username"
                            class="pl-2 drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md" />
                        <input v-model="form.password" id="password" name="password" type="password"
                            autocomplete="password" placeholder="Password"
                            class="pl-2 drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md"
                            @keyup.enter="handleLogin" />
                    </div>
                </form>
                <div class="third flex flex-col items-center pt-16">
                    <button class="buttonlogin text-black bg-amber-400 hover:bg-amber-100 hover:text-gray-950 pl-12 pr-12 pb-2 pt-2" :disabled="submitting" @click="handleLogin">
                        <span v-if="submitting">
                            <!-- Loading Spinner (you can use any loading spinner here) -->
                            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25"></circle>
                                <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0z" stroke="currentColor" stroke-width="4" class="opacity-75"></path>
                            </svg>
                        </span>
                        <span v-else>
                            Login
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import taas from '../components/header.vue'
import mgb from '../assets/icons/mgb.png'
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { API_BASE_URL } from '../config'

const isValid = ref(false);
const isUsername = ref(false);
const pleaseWait = ref(false);
const submitting = ref(false);
const error = ref('');

const router = useRouter();
const form = ref({
    username: '',
    password: ''
});

const handleLogin = async () => {
    const passvalid = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9-]{7,}$/;

    if (form.value.username === '' && form.value.password === '') {
        alert('Both username and password are required');
        return;
    } 

    if (form.value.username === '') {
        alert('Input Username');
        return;
    }

    if (form.value.password === '') {
        alert('Input Password');
        return;
    }

    pleaseWait.value = true;
    submitting.value = true;

    try {
        const response = await axios.get(`${API_BASE_URL}/get_accounts/`);
        const account = response.data.find(acc => acc.username === form.value.username && acc.password === form.value.password);

        if (!account) {
            alert('The email or password you entered did not match our records. Please double-check and try again.');
            return;
        }

        // If the account is found, store the token and redirect
        localStorage.setItem('authToken', 'someGeneratedToken'); // Replace 'someGeneratedToken' with the actual token from your API if available.
        localStorage.setItem('username', form.value.username);

        pleaseWait.value = false;
        switch (account.section) {
            case 'asViewer':
                router.push("/");
                break;
            case 'MMD_Chief':
                router.push("/mmd");
                break;
            case 'mtes':
                router.push("/firstpage");
                break;
            case 'mtss':
                router.push("/mmd/mtss");
                break;
            case 'mlss':
                router.push("/mmd/mlss");
                break;
            case 'asViewer':
                router.push("/mtes");
                break;
            default:
                router.push("/default-page");
                break;
        }
    } catch (error) {
        console.error('Login error:', error);
        pleaseWait.value = false;
        alert('Login error, please try again!');
    } finally {
        submitting.value = false;
    }
}
</script>


<style scoped>
.panel1 {
    width: 600px;
}

.login {
    width: 500px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 450px;
}

.img123 {
    height: 450px;
    width: 300px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.buttonlogin {
    border-radius: 20px;
}
</style>