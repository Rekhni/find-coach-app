<template>
    <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">{{ error }}</base-dialog>
    <section>
            <base-card>
        <header>
            <h2>Requests Received</h2>
        </header>
        <div v-if="isLoading">
            <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasRequests && !isLoading">
            <request-item v-for="request in requests" 
            :key="request.id" 
            :email="request.email"
            :message="request.message"
            >{{ request }}</request-item>
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
    </section>
    </div>
</template>

<script scoped>
import { handleError } from 'vue';
import RequestItem from './RequestItem.vue';

    export default {
        data() {
            return {
                isLoading: false,
                error: null
            }
        },
        components: {
            RequestItem,
        },
        computed: {
            requests() {
                return this.$store.getters.requests;
            },
            hasRequests() {
                return this.$store.getters.hasRequests;
            }
        },
        methods: {
            async loadRequests() {
                this.isLoading = true;
                try {
                    await this.$store.dispatch('loadRequests');
                } catch(error) {
                    this.error = error.message || 'Something failed!!';
                }
    
                this.isLoading = false;
            },
            handleError() {
                this.error = null;
            }
        },
        created() {
            this.loadRequests();
        }
    }
</script>

<style scoped>
    header {
        text-align: center;
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        list-style: none;
        padding: 0;
    }
    h3 {
        text-align: center;
    }
</style>