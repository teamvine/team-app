<template>
    <div>
        <t-modal :value="showModal" header="Title of the modal">
            <template v-slot:header>
                <h1>Profile Picture</h1>
            </template>
            Content of the modal.
            <template v-slot:footer>
                <div class="flex justify-between">
                    <t-button type="button">
                        Cancel
                    </t-button>
                    <t-button type="button">
                        Ok
                    </t-button>
                </div>
            </template>
        </t-modal>
    </div>
</template>

<script>
export default {
    name: 'UpdateProfileModal',
    props: {
        showModal: Boolean,
        onClose: Function
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>