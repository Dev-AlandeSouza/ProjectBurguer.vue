<template>
    <div>
        <div class="form-container">
            <h2 class="form-title">Formulário de Pedido</h2>
            <form id="burger-form" @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="name">Nome do Cliente:</label>
                    <input type="text" id="name" name="name" v-model="name" placeholder="Digite seu nome" required>
                </div>
                <div class="form-group">
                    <label for="bread">Escolha o Pão:</label>
                    <select name="bread" id="bread" v-model="selectedBread">
                        <option value="">Selecione seu pão:</option>
                        <option v-for="selectedBread in breads" :key="selectedBread.id" :value="selectedBread.type">{{ selectedBread.type }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="meat">Escolha a carne do Burger:</label>
                    <select name="meat" id="meat" v-model="selectedMeat" required>
                        <option value="">Selecione seu tipo de carne:</option>
                        <option v-for="selectedMeat in meats" :key="selectedMeat.id" :value="selectedMeat.type">{{ selectedMeat.type }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Selecione os opcionais:</label>
                    <div id="optional">
                        <span>
                            <input type="checkbox" name="optionals" value="bacon" v-model="selectedOptionals">
                            Bacon
                        </span>
                        <span>
                            <input type="checkbox" name="optionals" value="cheddar" v-model="selectedOptionals">
                            Cheddar
                        </span>
                        <span>
                            <input type="checkbox" name="optionals" value="ovo" v-model="selectedOptionals">
                            Ovo
                        </span>    
                    </div>
                </div>
                <button type="submit" class="submit-button" :disabled="!isValidForm">Enviar Pedido</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            breads: null,
            meats: null,
            optionals: [],
            selectedBread: null,
            selectedMeat: null,
            selectedOptional: null,
            status: 'Solicitado',
            msg: null
        }
    },
    methods: {
        async getIngredients() {
            try {
                const req = await fetch('http://localhost:3000/ingredients');
                const data = await req.json();

                this.selectedBread = data.breads;
                this.selectedMeat = data.meats;
                this.selectedOptional = optionals;
            } catch (error) {
                console.error('Erro ao buscar ingredientes:', error);
            }
        },
        async submitForm() {
            // Lógica para enviar o formulário
        }
    },
    mounted() {
        this.getIngredients();
    },
    computed: {
        isValidForm() {
            return this.name && this.selectedBread && this.selectedMeat;
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
    flex-wrap: wrap;
    width: auto;
    gap: 3px;
    padding: 1px;
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