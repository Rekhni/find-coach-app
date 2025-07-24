<template>
    <li>
        <h3>{{ name }}</h3>
        <h4 style="font-weight: bold">${{ hourlyRate}}/hour</h4>
        <div class="area-list">
            <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
            <!-- <field-tag v-for="area in areas" :key="area" :area="area"></field-tag> -->
        </div>
        <div class="actions">
            <base-button link mode="outline" :to="coachContactLink">Contact</base-button>
            <base-button link :to="coachDetailsLink">View Details</base-button>
        </div>
    </li>
</template>

<script>
    import FieldTag from '../UI/Area.vue';
    export default {
        props: ['id', 'name', 'hourlyRate', 'areas'],
        components: {
            FieldTag
        },
        computed: {
            coachContactLink() {
                return this.$route.path + '/' + this.id + '/contact'
            },
            coachDetailsLink() {
                return this.$route.path + '/' + this.id;
            }
        }
    }
</script>

<style scoped>
    li {
        border: 1px solid black;
        padding: 20px;
        margin: 20px 0;
        border-radius: 20px;
        list-style: none;
    }
    .actions {
        display: flex;
        gap: 10px;
        margin-top: 10px;
        justify-content: end;
    }

    .area-list {
        display: flex;
        gap: 15px;
    }

</style>