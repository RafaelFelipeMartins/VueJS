<template>
    <div>
        <p>Estou trabalhando no momento.</p>
        <p>Ultilizo as seguintes tecnologias:</p>
        <ul>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Python</li>
        </ul>
    </div>
</template>
<script lang="ts">
try {
    export default {
        name: 'Info',
        data() {
            return {
                esta_trabalhando: true
            }
        }
    }
} catch (error) {
    console.log(error)
}
    
</script>
