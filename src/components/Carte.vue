<script setup>
    import {useModalStore} from '@/stores/modal'

    const props = defineProps({
        animal: {
            type: Object,
            required: true
        }
    });

    const modal = useModalStore()

    function showDetails() {
        modal.setModal(props.animal)
    }
</script>

<template>
    <div class="carte">
        <img :src="animal.img" :alt="animal.name" @click="showDetails()">
        <h4>{{animal.name}}</h4>
        <p>
            <a :href="animal.link" target="_blank"> En savoir + </a>
        </p>
    </div>
</template>

<style scoped>
    .carte {
        background-color: white;
    }

    .carte h4 {
        text-align: center;
    }

    .carte a {
        font-size: 13px;
        color: lightslategray;
        background-color: white;
        padding: 10px;
    }


    .carte img {
        object-fit: cover;
        max-height: 112px;
        width: 100%;
        cursor: pointer;
    }
</style>