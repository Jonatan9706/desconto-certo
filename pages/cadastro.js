import styles from '../styles/Login.module.css'

export default function Cadastro() {
  return (
    <div className={styles.container}>
      <img src="assets/logo.png" alt="" />

      <h1 >Faça seu Cadastro</h1>

      <form>
        <input type="text" placeholder="Escreva seu nome"/>
        <input type="email" placeholder="Digite seu Email"/>
        <input type="password" placeholder="Digite sua Senha"/>

        <button>Criar conta</button>
        
      </form>

    </div>
  )
};