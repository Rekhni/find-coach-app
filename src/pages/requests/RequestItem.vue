<template>
    <li>
        <div>
            <a :href="emailLink">{{ email }}</a>
        </div>
        <p>{{ message }}</p>
    </li>
</template>

<script>
    export default {
        props: ['email', 'message'],
        computed: {
            emailLink() {
                return 'mailto:' + this.email;
            }
        }
    }
</script>

<style scoped>
    li {
    margin: 1rem 0;
    border: 1px solid #ccc;
    padding: 1rem;
    }

    a {
    color: #3d008d;
    text-decoration: none;
    font-weight: bold;
    }

    a:hover,
    a:active {
    color: #8d007a;
    }

    p {
    margin: 0.5rem 0 0 0;
    }
</style>