<template>
    <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="registerNewCoach"></coach-form>
    </base-card>
</template>

<script>
    import CoachForm from '../../components/coaches/CoachForm.vue';
    export default {
        components: {
            CoachForm
        },
        methods: {
            registerNewCoach(data) {
                this.$store.dispatch('registerCoach', data)
                this.$router.replace('/coaches');
            }
        }
    }
</script>
