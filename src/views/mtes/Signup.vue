<template>
    <div class="panel">
        <div class="flex justify-center items-center h-screen">
            <taas />
        </div>
        <div class="panel1">
            <img :src="mgb" class="img123" />
            <div class="login">
                <div style="margin-left: 40px;margin-top: 30px;margin-bottom: 20px;">
                    <h1 style="font-weight: 700; font-size: 25px;">Registration</h1>
                    <p style="font-size: 15px;">Sign in to access the MGB-X </p>
                    <p style="font-size: 15px;">MTTS System:</p>
                </div>
                <div class="inputfield">
                    <input id="username" name="username" type="username" autocomplete="username"
                        placeholder="   Username" class="drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md" />
                    <input id="password" name="password" type="password" autocomplete="password"
                        placeholder="   Password" class="drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md" />
                    <input id="password" name="password" type="password" autocomplete="password"
                        placeholder="   ConfrimPassword" class="drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md" />
                </div>

                <div class="third">
                    <button class="buttonlogin" @click="redirectToLogin">Register</button>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import taas from '/Users/PC8/maam hannah git/MMDIS/src/components/MTES/header.vue'
import mgb from '/Users/PC8/maam hannah git/MMDIS/src/assets/MTES/mgb.png'

</script>
<script>
const redirectToLogin = () => {
    window.location.href = "/";
}

const isLoggedIn = localStorage.getItem('isLoggedIn');

</script>

<style scoped>
.panel {
    display: flex;
    justify-content: center;
    align-items: center;

}

.panel1 {
    height: 400px;
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
    background-color: #fcf1ed;
    margin-left: -70px;
    height: 100%;

}

.img123 {
    height: 400px;
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
    background-color: #c2410c;
    color: white;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 10px;
    padding-top: 10px;
    border-radius: 10px;
    margin-top: 10px;
}
</style>