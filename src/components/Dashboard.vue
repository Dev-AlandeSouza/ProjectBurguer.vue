<template>
    <div class="dashboard-container">
      <h1 class="dashboard-title">Gerenciador de Pedidos</h1>
      <div class="table-container">
        <table class="order-table">
          <thead>
            <tr>
              <th>Nome do Cliente</th>
              <th>Ingredientes Opcionais</th>
              <th>Pão Selecionado</th>
              <th>Carne Selecionada</th>
              <th>Status do Pedido</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in burgers" :key="order.id">
              <td>{{ burgers.name }}</td>
              <td>{{ burgers.ingredients }}</td>
              <td>{{ burgers.bread }}</td>
              <td>{{ burgers.meat }}</td>
              <td>
                <select v-model="order.status" class="status-select">
                  <option v-for="status in statusOptions" :key="status.id" :value="status.type">{{ status.type }}</option>
                </select>
              </td>
              <td>
                <button @click="cancelOrder(order.id)" class="cancel-button">Cancelar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
    data() {
      return {
        burgers: [],
        statusOptions: []
      }
    },
    methods: {
        async getOrders() {
            const req = await fetch('http://localhost:3000/burgers');
            const data = await req.json();
            this.burgers = data.burgers;

            const reqStatus = await fetch('http://localhost:3000/status');
            const dataStatus = await reqStatus.json();
            this.statusOptions = dataStatus.status.type;
            console.log(this.statusOptions);

        },

      cancelOrder(orderId) {
        this.orders = this.orders.filter(order => order.id !== orderId);
      }
    }
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    max-width: 800px;
    padding: 40px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
  
  .dashboard-title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }
  
  .order-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.329);
  }
  
  .order-table th,
  .order-table td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  
  .order-table th {
    background-color: #fcba03;
    color: #333;
  }
  
  .order-table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .order-table tbody tr:hover {
    background-color: #e7e7e7;
  }
  
  .status-select {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #fff;
    color: #333;
  }
  
  .status-select:hover {
    border-color: #aaa;
  }
  
  .status-select:focus {
    outline: none;
    border-color: #555;
  }
  
  .cancel-button {
    padding: 8px 12px;
    background-color: #f44336;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .cancel-button:hover {
    background-color: #d32f2f;
  }
  </style>
  