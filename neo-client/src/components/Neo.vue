<template>
    <div class="container">
        <div class="loading" v-if="loading">Loading...</div>
        <div class="sub-container" v-if="!loading && !error">
            <div class="basic-info">
                <p id="name">Name: {{ data.designation }}</p>
                <p id="id">ID: {{ data.id }}</p>
            </div>
            <div class="diameter-wrapper">
                <p class="diameter">Mininmal estimated diameter
                     {{data.estimated_diameter.kilometers.estimated_diameter_min*1000}}
                     m</p>
                <p class="diameter">Maximal estimated diameter
                     {{data.estimated_diameter.kilometers.estimated_diameter_max*1000}}
                     m</p>
            </div>
            <p id="nasa-doc">NASA full <a :href="data.nasa_jpl_url" target="_blank">documentation</a></p>
        </div>
        <div class="throwError" v-else-if="error">{{ error }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';

//3542519

export default defineComponent({
    name: "Neo",
    setup() {
        const loading = ref(true);
        const route = useRoute();
        const data = ref(null);
        const error = ref(null);

        onMounted( async () => {
            try {
                const response = await axios.get(`/neo/${route.params.id}`);

                data.value = response.data;

                loading.value = false;        


            } catch(requestError) {
                
                loading.value = false;

                error.value = requestError.response.data.message;
            }
            
            
        })
        

        return { loading, data, error}
    }
})
/*

 */
</script>

<style lang="scss" scoped>
    .container {
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .sub-container {
        border-top: 10px #0a3d91 solid;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 70%;
        background-color: white;
        box-shadow: 1px 3px 5px black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px;
        flex-wrap: wrap;

    }

   
    #name, #id, #first-date {
        font-size: 2rem;
        font-weight: 900;   
    }
    .diameter {
        font-size: 1.7rem;
        font-weight: 600;
    }
    #nasa-doc {
        font-size: 1.7rem;
        font-weight: 700;
    }

    .throwError, .loading {
        font-size: 2rem;
        color: white;
    }
    .throwError {
        color: rgb(65, 28, 28);
    }

   
    
</style>

