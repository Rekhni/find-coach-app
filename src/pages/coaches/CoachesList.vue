<template>
    <div>
        <base-dialog title="An error occurred!" :show="!!error" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>  
        <section>
            <coach-filter @change-filter="setFilters"></coach-filter>
            <base-card>
                <div class="controls">
                    <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
                    <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to Register as Coach</base-button>
                    <base-button v-if="isLoggedIn && !isCoach && !isLoading" link to="/register">Register as Coach</base-button>
                </div>
                <div v-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
                <ul v-else-if="hasCoaches">
                    <coach-item 
                    v-for="coach in filteredCoaches"
                    :key="coach.id"
                    :id="coach.id"
                    :name="coach.name"
                    :hourly-rate="coach.hourlyRate"
                    :areas="coach.areas"
                    >
                    </coach-item>
                </ul>
                <h3 v-else>No coaches found.</h3>
            </base-card>
        </section>
    </div>
</template>

<script>
    import CoachItem from '../../components/coaches/CoachItem.vue';
    import CoachFilter from '../../components/coaches/CoachFilter.vue';

    export default {
        components: {
            CoachItem,
            CoachFilter
        },
        data() {
            return {
                isLoading: false,
                error: null,
                activeFilters: {
                    frontend: true,
                    backend: true,
                    career: true
                }
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isAuthenticated;
            },
            isCoach() {
                return this.$store.getters.isCoach;
            },
            filteredCoaches() {
                const coaches = this.$store.getters.coaches;
                return coaches.filter(coach => {
                    if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                        return true;
                    }
                    if (this.activeFilters.backend && coach.areas.includes('backend')) {
                        return true;
                    }
                    if (this.activeFilters.career && coach.areas.includes('career')) {
                        return true;
                    }
                    return false;
                })
            },
            hasCoaches() {
                return !this.isLoading && this.$store.getters.hasCoaches;
            }
        },
        created() {
            this.loadCoaches();
        },
        methods: {
            async loadCoaches(refresh = false) {
                this.isLoading = true;
                try {
                    await this.$store.dispatch('loadCoaches', { forceRefresh: refresh });
                } catch (error) {
                    this.error = error.message || 'Something went wrong!'
                }
                this.isLoading = false;
            },
            setFilters(updatedFilters) {
                this.activeFilters = updatedFilters;
            },
            handleError() {
                this.error = null
            }
        }
    }
</script>

<style scoped>
    ul {
        padding: 0;
    }
    .controls {
        display: flex;
        gap: 10px;
        justify-content: space-between;
    }
</style>