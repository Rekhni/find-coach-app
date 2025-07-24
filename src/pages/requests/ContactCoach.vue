<template>
    <form @submit.prevent="submitRequest">
        <div class="form-control">
            <label for="email">Your E-mail</label>
            <input id="email" type="email" v-model.trim="enteredEmail">
        </div>
        <div class="form-control"> 
            <label for="message">Message</label>
            <textarea id="message" row="5" v-model.trim="enteredMessage"></textarea>
        </div>
        <p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message.</p>
        <div class="actions">
            <base-button>Send Message</base-button>
        </div>
    </form>
</template>

<script>
    import FieldTag from '../../components/UI/Area.vue';

    export default {
        components: {
            FieldTag
        },
        data() {
            return {
                enteredEmail: '',
                enteredMessage: '',
                formIsValid: true,
                isLoading: false
            }
        },
        methods: {
            async submitRequest() {
                this.formIsValid = true;
                if (this.enteredEmail === '' || !this.enteredEmail.includes('@') || this.enteredMessage === '') {
                    this.formIsValid = false;
                    return;
                }
                this.$store.dispatch('sendNewRequest', {
                    coachId: this.$route.params.id,
                    email: this.enteredEmail,
                    message: this.enteredMessage
                })
                this.$router.replace('/coaches');
                this.enteredEmail = '';
                this.enteredMessage = '';
            }
        }
    }
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>