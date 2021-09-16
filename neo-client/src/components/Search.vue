<template>
    <div class="search-bar">
            <div class="wrapper">
                <form v-on:submit.prevent="onSubmit" >
                    <input type="text" v-model="neoID" placeholder="Enter id of NEO e.g. 3542519">
                    <input type="submit" class="search-button" value=" ">
                </form>
                
            </div>
            <p id="showError" v-if="error">Please enter ID!</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Search",
    data(){
        return {
            neoID: null,
            error: false
        }
    },
    methods: {
        onSubmit() {
            if(!this.neoID){
                this.error = true;
                return 
            }
            this.error = false
            return this.$router.push(`/neo/${this.neoID}`)
        }
    }
    
})
</script>

<style scoped lang="scss">
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        box-shadow: 1px 1px 3px black;
    }

    .search-bar {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input  {
        height: 2rem;
        width: 30rem;
        padding: 2px;
        font-size: 1.1rem;
        border: none;
    }

    
    .search-button {
        background-color: white;
        background-image: url("../assets/lupa.png");
        background-size: 1.5rem;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
    }
    #showError {
        padding: 5px;
        color: red;
        font-size: 1.5rem;
    }
</style>