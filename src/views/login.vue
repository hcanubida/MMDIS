<!-- login.vue -->

<template>
    <Header/>
    <div  class="panel">
        <div class="panel1">
            <img :src="mgb" class="img123"  />
            <div class="login" >
                <div style="margin-left: 40px;margin-top: 30px;margin-bottom: 20px;">
                    <h1 style="font-weight: 700; font-size: 25px;" >Welcome Back!</h1>
                    <p style="font-size: 15px;">Login to access the Mine Management Division </p>
                    <p style="font-size: 15px;">Information System:</p>
                </div>
                <form >
                    <div class="inputfield">
                        <input v-model="form.username" id="username" name="username" type="username" autocomplete="username" placeholder="   Username" class="drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md" />
                        <input v-model="form.password"id="password" name="password" type="password" autocomplete="password" placeholder="   Password" class="drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md" />
                    
                    <div v-if="isValid" class="error" style="display: flex;flex-direction: column; margin-left: 45px;">
                            <a class="errormsg1" style="color: red;">
                                Warning Alert!!
                            </a>
                            <a class="errormsg">
                                Please Fill out the Text Fields
                            </a>
                    </div>
                    <div v-if="isUsername" class="wronge" style="display: flex;flex-direction: column; margin-left: 45px;">
                            <a class="wronge1"  style="color: red;">
                                Error Alert!!
                            </a>
                            <a class="wronge2">
                                {{ error }}
                            </a>
                    </div>
                    <div v-else-if="pleaseWait" class="logincorrect" style="display: flex;flex-direction: column; margin-left: 45px;">
                            <a class="logincorrect1">
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
                    <p style="color: blue; text-decoration: underline; cursor: pointer; margin-top: 10px;" >Forgot Password?</p>
                    <p style="color:black; cursor: pointer;" @click="redirectToUrl" >Don't have an account yet?</p>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script setup>
    import Header from '../components/header.vue'; // Import Header component
    import mgb from '../assets/icons/logo.png'
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
</script>
    
    <style scoped>
        .panel{
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        .panel1{
            height: auto;
            width: 600px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

        }
        .inputfield{
            display: flex;
            flex-direction: column;
        }
        .login{
            width: 500px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            background-color: #fcf1ed;
            margin-left: -70px;
            height: 400px;
            
        }
        .img123{
            height: 400px;
            width: 300px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            
        }
        .third{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-right: 45px;
        }
        .buttonlogin{
            background-color: #c2410c;
            color: white;
            padding-left: 50px;
            padding-right: 50px;
            padding-bottom: 10px;
            padding-top: 10px;
            border-radius: 20px;
            margin-top: 20px;
           
        }
    </style>