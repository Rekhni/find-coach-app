<template>
            <form @submit.prevent="submitForm">
            <div class="form-control" :class="{invalid: !enteredName.isValid}">
                <label for="name">Name</label>
                <input id="name" name="name" type="text" v-model.trim="enteredName.val" @blur="clearValidity('enteredName')">
                <p v-if="!enteredName.isValid">Name must not be empty.</p>
            </div>
            <div class="form-control" :class="{invalid: !enteredRate.isValid}">
                <label for="hourly-rate">Rate per hour</label>
                <input id="hourly-rate" name="hourly-rate" type="number" v-model.number="enteredRate.val" @blur="clearValidity('enteredRate')">
                 <p v-if="!enteredRate.isValid">Rate must be greater than 0.</p>
            </div>
            <div class="form-control" :class="{invalid: !selectedAreas.isValid}">
                <p>Areas of Expertise</p>
                <div>
                    <input id="field-frontend" name="field" value="frontend" type="checkbox" v-model="selectedAreas.val" @blur="clearValidity('selectedAreas')"/>
                    <label for="field-frontend">Frontend Development</label>
                </div>
                <div>
                    <input id="field-backend" name="field" value="backend" type="checkbox" v-model="selectedAreas.val" @blur="clearValidity('selectedAreas')"/>
                    <label for="field-backend">Backend Development</label>
                </div>
                <div>
                    <input id="field-career" name="field" value="career" type="checkbox" v-model="selectedAreas.val" @blur="clearValidity('selectedAreas')"/>
                    <label for="field-career">Career Advisory</label>
                </div>
                <p v-if="!selectedAreas.isValid">At least one expertise must be selected.</p>
            </div>
            <div class="form-control" :class="{invalid: !enteredDescription.isValid}">
                <label for="description">Description</label>
                <textarea name="description" id="description" row="10" v-model.trim="enteredDescription.val" @blur="clearValidity('enteredDescription')"></textarea>
                <p v-if="!enteredDescription.isValid">Description must not be empty.</p>
            </div>
            <p class="error" v-if="!formIsValid" >Please fix the above errors and submit again.</p>
            <base-button style="margin-top: 10px;">Register</base-button>
        </form>
</template>

<script>
    export default {
        emits: ['save-data'],
        data() {
            return {
                selectedAreas: {
                    val: [],
                    isValid: true
                },
                enteredName: {
                    val: '',
                    isValid: true
                },
                enteredRate: {
                    val: null,
                    isValid: true
                },
                enteredDescription: {
                    val: '',
                    isValid: true
                },
                formIsValid: true
            }
        },
        getters: {
            formIsValid(state) {
                return state.formIsValid;
            }
        },
        methods: {
            clearValidity(input) {
                this[input].isValid = true;
            },
            validateForm() {
                this.formIsValid = true;
                if (this.enteredName.val === '') {
                    this.enteredName.isValid = false;
                    this.formIsValid = false;
                }
                if (!this.enteredRate.val || this.enteredRate.val < 0) {
                    this.enteredRate.isValid = false;
                    this.formIsValid = false;
                }
                if (this.enteredDescription.val === '') {
                    this.enteredDescription.isValid = false;
                    this.formIsValid = false;
                }
                if (this.selectedAreas.val.length === 0) {
                    this.selectedAreas.isValid = false;
                    this.formIsValid = false;
                }
            }, 
            submitForm() {
                this.validateForm();

                if (!this.formIsValid) {
                    return;
                }

                const formData = {
                    id: 'c' +(Number(this.$store.getters.coaches.length) + 1),
                    name: this.enteredName.val,
                    hourlyRate: this.enteredRate.val,
                    areas: this.selectedAreas.val,
                    description: this.enteredDescription.val
                }

                this.$emit('save-data', formData);
                this.enteredName = '';
                this.enteredRate = null;
                this.selectedAreas = [];
                this.enteredDescription = '';
            }
        }
    }
</script>

<style scoped>
    .form-control {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
    }
    .invalid label {
        color: rgb(238, 92, 92);
    }
    .invalid input,
    .invalid textarea {
        border: 1px solid red;
    }
</style>            
