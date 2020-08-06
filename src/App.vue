<template>
    <div id="app">
        <Navbar></Navbar>
        <Taskbar></Taskbar>
    	<router-view />
    </div>
</template>

<script>
import Navbar from './views/Navbar.vue';
import Taskbar from './views/Taskbar.vue';

export default {
    name: 'app',
    components: {
        Navbar,
        Taskbar
    }
};
</script>
 