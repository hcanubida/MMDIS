<template>

<Header/>

<!-- LOGIN CONTAINER -->
<div class="session">
    <div class="left" style="background-image: url(../../assets/icons/mgb.png);"></div>
    <form action="#" method="post" class="log-in">
        <h4>Welcome back!</h4>
        <p>Log in to access the MGB-X MTSS System:</p>

        <!-- USERNAME -->
        <div class="floating-label">
            <img src="../../assets/icons/un-icon.jpg" style="width: 35px; height: 35px; padding: 6px 13px 0px 10px;;">
            <input placeholder="Username" type="text" name="username" required>
            <label for="username">Username:</label>
        </div>

        <!-- PASSWORD -->
        <div class="floating-label"> 
            <img src="../../assets/icons/pwd-icon.png" style="width:50px ; height:45px ; padding: 6px 7px 0px 0px;">
            <input placeholder="Password" type="password" name="password" required>
            <label for="password">Password:</label>
        </div>

        <button type="submit">Log in</button>
        <a href="#" class="discrete" target="_blank">Forgot Password?</a>
    </form>
</div>
</template>

<script>
import Header from '../../components/header.vue'; // Import Header component

export default {
    components: {
        Header, // Register Header component
    }
};
</script>