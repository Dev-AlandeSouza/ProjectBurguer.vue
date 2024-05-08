<template>
    <div>
        <div class="message-container" v-show="msg">
            <p>{{ msg }}</p>
        </div>
    </div>


</template>

<script>
export default {
    name: 'MessageRegister',
    props: {
        msg: String
    }
}
</script>

<style scoped>
.message-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: #fcba03;
    text-align: center;
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.message-container p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
}


.message-container {
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
}

.message-container:hover {
    transform: translateY(-5px);
    background-color: #444;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}
</style>
