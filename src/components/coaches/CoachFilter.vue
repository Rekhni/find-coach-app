<template>
    <base-card>
        <h2>Find Your Coach</h2>
        <span class="filter-option">
            <input type="checkbox" id="frontend" checked @change="setFilter">
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="backend" checked @change="setFilter">
            <label for="backend">Backend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="career" checked @change="setFilter">
            <label for="career">Career</label>
        </span>
    </base-card>
</template>

<script>
    export default {
        emits: ['change-filter'],
        data() {
            return {
                filters: {
                    frontend: true,
                    backend: true,
                    career: true
                }
            }
        },
        methods: {
            setFilter(event) {
                const inputId = event.target.id;
                const isActive = event.target.checked;
                const updatedFilters = {
                    ...this.filters,
                    [inputId]: isActive
                }
                this.filters = updatedFilters;
                this.$emit('change-filter', updatedFilters)
            }
        }
        // computed: {
        //     selectedAreas: {
        //         get() {
        //             return this.$store.getters.selectedAreas;
        //         },
        //         set(value) {
        //             this.$store.commit('updateSelectedAreas', value);
        //         }
        //     }
        // }
    }
</script>

<style scoped>
    .checkboxes {
        display: flex;
        gap: 10px;
    }
</style>