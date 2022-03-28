<script setup>

    import {useModalStore} from '@/stores/modal'

    const modal = useModalStore()

</script>

<template>
    <div v-if="modal.showModal" id="modal" @click.self="modal.closeModal()">
        <div class="modal-content">
            <img src="../assets/close.png" class="close-button" @click="modal.closeModal()"/>
            <img class="image" :src="modal.animal.img" :alt="modal.animal.name">
            <h2>{{modal.animal.name}}</h2>
            <ul>
                <li>Nom scientifique : {{modal.animal.nomScientifique}}</li>
                <li>Lieu de vie : {{modal.animal.lieu }}</li>
                <li>Famille : {{ modal.animal.famille }}</li>
                <li>Régime alimentaire : {{ modal.animal.regime }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

    #modal {
        display: block; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: black;
        background-color: rgba(0,0,0,0.7); /* Black w/ opacity */
    }

    .modal-content {
        background-color: bisque;
        margin-top: 100px;
        width: calc(100% - 20px);
        padding: 50px 20px;
        height: auto;
    }

    .close-button {
        margin-top: -30px;
        width: 20px;
        cursor:pointer;
        float: right;
    }

    .close-button:hover {
        transform: scale(1.2);
    }


    @media only screen and (min-width:680px) {
        /* ordi grand écran*/
        .modal-content {
            width: 600px;
            padding: 50px;
            margin: 100px auto;
            border-radius: 20px;
        }


        .close-button {
            margin-right: -30px;
            margin-left: -20px;
        }
    }

    #content-modal h2 {
        margin: auto;
        width: 300px;
        text-align: center;
        margin-bottom: 58px;
    }

    #content-modal li {
        margin-bottom:10px;
    }

    img.image {
        display: block;
        margin: 0 auto;
        max-height: 300px;
        max-width: 100%;
        background-color: white;
        padding: 5px;
    }
</style>