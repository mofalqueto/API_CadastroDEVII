<template>
    <div>
        <h1>Alterar Usuários</h1>
        <form @submit.prevent="modifyUser">
            <div>
                <label>Nome:</label>
                <input type="text" v-model="nome">
            </div>
            <div>
                <label>E-mail:</label>
                <input type="email" v-model="email">
            </div>
            <div>
                <label>Senha</label>
                <input type="password" v-model="senha">
            </div>
            <button type="submit">Alterar</button>
        </form>
        <p>{{ message }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nome: '',
            email: '',
            senha: '',
            message: '',
        }
    },
    methods: {
        registerUser(){
            const data={
                nome: this.nome,
                email: this.email,
                senha: this.senha
            }
            fetch("http://localhost:3000/api/registerUser", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)    
        })
            .then(async (res) =>{
                this.message = await res.text()
            })
            .catch(async (err) =>{
                this.message = await err.text();
            })
    }
    
}}
</script>
<style scoped>
    
</style>