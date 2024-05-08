<template>
    <div>
        <MessageRegister :msg="msg" v-show="msg"/>
        <div class="form-container">
            <h2 class="form-title">Formulário de Pedido</h2>
            <form id="burger-form" @submit.prevent="createBurger">
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
                    <label for="optionals">Selecione os opcionais:</label>
                    <div class="optional-container">
                        <div class="optional-item" v-for="optional in selectedOptional" :key="optional.id">
                            <input type="checkbox" :id="optional.id" :value="optional.type" v-model="optionals">
                            <span :for="optional.id">{{ optional.type }}</span>
                        </div>
                    </div>
                </div>
                <button type="submit" class="submit-button" :disabled="!isValidForm">Enviar Pedido</button>
            </form>
        </div>
    </div>
</template>

<script>
import MessageRegister from './Message.vue';

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
            msg: null
        };
    },
    methods: {
        async getIngredients() {
            const req = await fetch('http://localhost:3000/ingredients');
            const data = await req.json();
            this.breads = data.breads;
            this.meats = data.meats;
            this.selectedOptional = data.optionals;
        },
        async createBurger(e) {
            e.preventDefault();
            const burger = {
                name: this.name,
                bread: this.selectedBread,
                meat: this.selectedMeat,
                optionals: Array.from(this.optionals),
                status: "Solicitado"
            };
            
            const req = await fetch('http://localhost:3000/burgers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(burger)
            });
            
            const data = await req.json();
            
            this.msg = `Pedido de '${data.id.toUpperCase()}' realizado com sucesso!`;

            this.name = '';
            this.selectedBread = '';
            this.selectedMeat = '';
            this.optionals = [];

            setTimeout(() => {
                this.msg = null;
            }, 3000);
        }
    },
    mounted() {
        this.getIngredients();
    },
    computed: {
        isValidForm() {
            return this.name && this.selectedBread && this.selectedMeat;
        }
    }, 
    components: {
        MessageRegister
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
    gap: 10px;
    padding: 7px;
    margin: 7px;
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

.optional-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.optional-item {
    display: flex;
    align-items: center;
    gap: 5px;
}

.optional-item input[type="checkbox"] {
    margin: 0;
}

.optional-item span {
    color: #333;
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
