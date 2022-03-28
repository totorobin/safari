<script setup>
    import {ref, computed} from 'vue'
    import animals from './assets/animals.json'
    import Header from '@/components/Header.vue'
    import Carte from '@/components/Carte.vue'
    import Modal from '@/components/Modal.vue'

    const filter = ref('')
    const cartes = computed(() => [...animals].filter(a => filter.value === '' || filter.value === a.regime))

    function setFilter(val) {
        filter.value = val
    }
</script>

<template>
    <Header @filter="setFilter"></Header>
    <div class="content">
        <div class="cartes">
            <Carte v-for="carte in cartes" :id="carte.id" :animal="carte"></Carte>
        </div>
    </div>
    <Modal/>
</template>

<style>
    html {
        background-color: #f1f1f1;
        margin: 0;
        padding: 0;
    }
    body {
        height: calc(100vh - 20px);
        background-color: #eeeed5;
        margin: 10px;
        font-family: cursive;
    }
    .content {
        padding-bottom: 10px;
        padding-top: 10px;
        background-color: #f1f1f1;
    }
    .cartes {
        display: grid;
        grid-template-columns: repeat(1, [col-start] 1fr);
        grid-gap: 20px;
        margin: auto;
        max-width: 1000px;
    }

    @media only screen and (min-width:414px) {
        /* tablettes */
        .cartes {
            grid-template-columns: repeat(2, [col-start] 1fr);
        }
    }

    @media only screen and (min-width:768px) {
        /* ordi grand écran*/
        .cartes {
            grid-template-columns: repeat(3, [col-start] 1fr);
        }
    }
</style>
