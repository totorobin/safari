import {defineStore} from 'pinia'

export const useModalStore = defineStore({
    id: 'modal',
    state: () => ({
        animal: null
    }),
    getters: {
        showModal: (state) => state.animal != null
    },
    actions: {
        setModal(animal) {
            console.log(animal)
            this.animal = animal
        },
        closeModal() {
            this.animal = null
        }
    }
})
