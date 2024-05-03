<template>
    <div class="form-container" >
        <h2 class="form-title">Formulário de Pedido</h2>
        <form id="burger-form" @submit.prevent="submitForm">
            <div class="form-group">
                <label for="name">Nome do Cliente:</label>
                <input type="text" id="name" name="name" v-model="name" placeholder="Digite seu nome" required>
            </div>
            <div class="form-group">
                <label for="bread">Escolha o Pão:</label>
                <select name="bread" id="bread" v-model="bread" required>
                    <option value="">Selecione seu pão:</option>
                    <option value="integral">Integral</option>
                    <option value="branco">Branco</option>
                </select>
            </div>
            <div class="form-group">
                <label for="meat">Escolha a carne do Burger:</label>
                <select name="meat" id="meat" v-model="meat" required>
                    <option value="">Selecione seu tipo de carne:</option>
                    <option value="maminha">Maminha</option>
                    <option value="frango">Frango</option>
                    <option value="vegetariano">Vegetariano</option>
                </select>
            </div>
            <div class="form-group">
                <label>Selecione os opcionais:</label>
                <div id="optional">
                    <span>
                        <input type="checkbox" value="bacon" v-model="optional"> Bacon
                    </span>
                    <span>
                        <input type="checkbox" value="cheddar" v-model="optional"> Cheddar
                    </span>
                    <span>
                        <input type="checkbox" value="ovo" v-model="optional"> Ovo
                    </span>
                </div>
            </div>
            <button type="submit" class="submit-button" :disabled="!isValidForm">Enviar Pedido</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            bread: '',
            meat: '',
            optional: [],
        };
    },
    computed: {
        isValidForm() {
            return this.name && this.bread && this.meat;
        }
    },
    methods: {
        submitForm() {
            // Lógica para enviar o formulário, por exemplo, enviar para um servidor
            console.log('Formulário enviado:', {
                name: this.name,
                bread: this.bread,
                meat: this.meat,
                optional: this.optional
            });
            // Resetar o formulário após o envio
            this.name = '';
            this.bread = '';
            this.meat = '';
            this.optional = [];
        }
    }
};
</script>

<style scoped>

.form-title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}

#burger-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin: 20px;
    min-height: 250px;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 7px;
    margin: 5px;
}

.form-group #name {
    height: 2rem;
    border-radius: 5px;
    border: 1px solid #949393;
    padding-left: 5px;
}

.form-group select {
    height: 2rem;
    border-radius: 5px;
    border: 1px solid #949393;
    padding-left: 5px;
}

label {
    font-weight: bold;
    color: #333;
    padding: 5px 10px;
    border-left: 4px solid #FFD700;
}

#optional {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    margin: 5px;
}

.submit-button {
    background-color: #FFD700;
    color: #000000;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.5s;
}

.submit-button:disabled,
.submit-button[disabled] {
    background-color: #ffffff;
    color: #7a7a7a;
    cursor: not-allowed;
}

.submit-button:not(:disabled):hover {
    background-color: #000000;
    color: #FFD700;
}

.submit-button:focus {
    outline: none;
}

</style>
