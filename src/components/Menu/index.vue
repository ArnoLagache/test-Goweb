<template>
    <nav class="fixed h-full w-full md:w-1/4 bg-indigo-600 text-white text-left p-4 xl:p-16 font-semibold" :class="{ '-left-full': toggleMenu }">
        <!--Close Button-->
        <button class="md:hidden absolute right-4 text-xl" @click="toggleMenu = !toggleMenu">&#9587;</button>
        <!--Open Button-->
        <button class="md:hidden absolute -right-8 text-xl text-black" @click="toggleMenu = !toggleMenu">&#9776;</button>
        <img alt="Circle Products logo" title="Circle Products" class="mb-20 m-auto w-1/2" src="@/assets/logo.png">
        <ul>
            <li class="pb-6"><a>Dashboard</a></li>
            <li class="pb-6 relative"><router-link to="/">Product Management</router-link></li>
            <li class="pb-6 border-b"><a>Employees Management</a></li>
        </ul>
        <a class="py-6 block">Logout</a>
    </nav>
</template>

<script>
export default {
    name: "Menu",
    data(){
        return {
            toggleMenu: false,
        }
    }
};
</script>

<style>
a.router-link-active{
    padding-left: 1.5rem;
}
a.router-link-active:before{
    content: " ";
    position: absolute;
    left: 0;
    bottom: 1.9rem;                        
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 2rem;
    background-color: #ffffff;       
}
</style>