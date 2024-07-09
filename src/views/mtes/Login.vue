<template>
    <div class="panel flex justify-center items-center">
        <div class="flex justify-center items-center h-screen">
            <taas />
        </div>
        <div class="panel1 h-auto flex flex-row justify-center items-center mt-16">
            <img :src="mgb" class="img123" style="width: 330px;"/>
            <div class="login -ml-16">
                <div style="margin-left: 40px;margin-top: 30px;margin-bottom: 20px;">
                    <h1 style="font-weight: 700; font-size: 25px;">Welcome Back!</h1>
                    <p style="font-size: 15px;">Login to access the MGB-X </p>
                    <p style="font-size: 15px;">MMD Information System:</p>
                </div>
                <form>
                    <div class="inputfield flex flex-col">
                        <input v-model="form.username" id="username" name="username" type="username"
                            autocomplete="username" placeholder="Username"
                            class="pl-2 drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md" />
                        <input v-model="form.password" id="password" name="password" type="password"
                            autocomplete="password" placeholder="Password"
                            class="pl-2 drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md" />
                        <!--    -->
                        <div class="error1" v-if="isValid"
                            style="display: flex;flex-direction: column; margin-left: 45px;padding-bottom: 20px;margin-bottom: 10px;">
                            <a class="errormsg1" style="color: red;">
                                Warning Alert!!
                            </a>
                            <a class="errormsg">
                                Please Fill out the Text Fields
                            </a>
                        </div>
                        <div v-if="isUsername" class="wronge"
                            style="display: flex;flex-direction: column; margin-left: 45px;padding-bottom: 20px;margin-bottom: 10px;">
                            <a class="wronge1" style="color: red;">
                                Error Alert!!
                            </a>
                            <a class="wronge2">
                                {{ error }}
                            </a>
                        </div>

                        <div class="logincorrect" v-else-if="pleaseWait"
                            style="display: flex;flex-direction: column; margin-left: 45px;padding-bottom: 20px;margin-bottom: 10px;">
                            <a class="logincorrect1" style="color: green;">
                                Login!!
                            </a>
                            <a class="logincorrect2">
                                Please wait for a moment....
                            </a>
                        </div>
                    </div>
                </form>
                <div class="third flex flex-col items-center">
                    <button class="buttonlogin  hover:bg-red-200 bg-yellow-600 text-white pl-12 pr-12 pb-2 pt-2" :disabled="submitting" @click="handleLogin">Login</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import taas from '../../components/MTES/header.vue'
import mgb from '../../assets/icons/mgb.png'
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

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

    const response = await axios.get('http://127.0.0.1:8000/get_accounts/');

    const account = response.data.find(acc => acc.username === form.value.username && acc.password === form.value.password);

    if (form.value.username === '' && form.value.password === '') {
        isValid.value = true;
        setTimeout(() => {
            isValid.value = false;
        }, 2000);
    } else if (form.value.username === '') {
        isUsername.value = true;
        error.value = 'Input Username'
        setTimeout(() => {
            isUsername.value = false;
        }, 2000);
    } else if (form.value.password === '') {
        error.value = 'Input Password'
        isUsername.value = true;
        setTimeout(() => {
            isUsername.value = false;
        }, 2000);
    } else if (!account) {
        isUsername.value = true
        error.value = 'Account not Found'
        setTimeout(() => {
            isUsername.value = false;
        }, 2000);
    } else if (account.password !== form.value.password) {
        error.value = 'Wrong Password'
        isUsername.value = true;
        setTimeout(() => {
            isUsername.value = false;
        }, 2000);
    } else {
        pleaseWait.value = true;

        setTimeout(() => {
            switch (account.section) {
                case 'mtes':
                    router.push("/firstpage");
                    break;
                case 'mtss':
                    router.push("/mtss/dashboard");
                    break;
                case 'mlss':
                    router.push("/mlss/mlssdashboard");
                    break;
                default:
                    // Redirect to a default page if the section is not specified
                    router.push("/default-page");
                    break;
            }
        }, 2000);
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
    background-color: #eacda3;
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