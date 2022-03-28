<script setup>
    import {ref} from 'vue'

    const filterValue = ref('')
    const emit = defineEmits(['filter'])

    function setFilter(val) {
        emit('filter', val)
        filterValue.value = val
    }

</script>

<template>
    <header>
        <img src="http://safaridesmetiers.tech/wp-content/uploads/2020/04/safari-des-metiers-logo-2022.png">
        <button class="btn" :class="{active: filterValue == '' }" @click="setFilter('')"> Tous</button>
        <button class="btn" :class="{active: filterValue == 'Carnivore' }" @click="setFilter('Carnivore')"> Carnivore</button>
        <button class="btn" :class="{active: filterValue == 'Herbivore' }" @click="setFilter('Herbivore')"> Herbivores</button>
        <button class="btn" :class="{active: filterValue == 'Omnivore' }" @click="setFilter('Omnivore')"> Omnivores</button>
    </header>
</template>

<style scoped>
    header {
        background-color: #eeeed5;
    }
    img {
        width: 300px;
        margin: auto;
        display: block;
    }
    .btn {
        border: none;
        outline: none;
        padding: 12px 16px;
        background-color: white;
        cursor: pointer;
    }

    .btn:hover {
        background-color: #ddd;
    }

    /* Bouton actif*/
    .btn.active {
        background-color: #666;
        color: white;
    }
</style>