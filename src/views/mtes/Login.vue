<template>
    <div class="panel">
        <div class="flex justify-center items-center h-screen">
            <taas />
        </div>
        <div class="panel1">
            <img :src="mgb" class="img123" />
            <div class="login">
                <div style="margin-left: 40px;margin-top: 30px;margin-bottom: 20px;">
                    <h1 style="font-weight: 700; font-size: 25px;">Welcome Back!</h1>
                    <p style="font-size: 15px;">Login to access the MGB-X </p>
                    <p style="font-size: 15px;">MTTS System:</p>
                </div>
                <form>
                    <div class="inputfield">
                        <input v-model="form.username" id="username" name="username" type="username"
                            autocomplete="username" placeholder="   Username"
                            class="drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md" />
                        <input v-model="form.password" id="password" name="password" type="password"
                            autocomplete="password" placeholder="   Password"
                            class="drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md" />
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
                <div class="third">
                    <button class="buttonlogin" :disabled="submitting" @click="handleLogin">Login</button>
                    <p style="color: #0099e6; text-decoration: underline; cursor: pointer; margin-top: 15px;">Forgot
                        Password?</p>
                    <p style="color:black; cursor: pointer;" @click="redirectToUrl">Don't have an account yet?</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import taas from '/Users/PC8/maam hannah git/MMDIS/src/components/MTES/header.vue'
import mgb from '/Users/PC8/maam hannah git/MMDIS/src/assets/MTES/mgb.png'
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
    // const account = accounts.value.find(acc => acc.username === username.value && acc.password === password);

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
        error.value = 'Wrong Pasword'
        isUsername.value = true;
        setTimeout(() => {
            isUsername.value = false;
        }, 2000);
    } else {
        pleaseWait.value = true;

        setTimeout(() => {
            router.push("/firstpage") // Set submitting back to false after timeout
        }, 2000);;
    }
}


</script>

<style scoped>
.panel {
    display: flex;
    justify-content: center;
    align-items: center;

}

.panel1 {
    height: auto;
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}

.inputfield {
    display: flex;
    flex-direction: column;
}

.login {
    width: 500px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #eacda3;
    margin-left: -70px;
    height: 450px;

}

.img123 {
    height: 450px;
    width: 300px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

}

.third {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 45px;

}

.buttonlogin {
    background-color:#e09a38;
    color: white;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 10px;
    padding-top: 10px;
    border-radius: 20px;
}
</style>