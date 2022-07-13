import Link from 'next/link';
import styles from '../styles/Login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <img src="assets/logo.png" alt="" />

      <h1 >Faça seu Login</h1>

      <form>
        <input type="email" placeholder="Digite seu Email" />
        <input type="password" placeholder="Digite sua Senha" />
        <button>Entrar</button>  
      </form>

      <a href="#">Esqueci minha Senha</a>
      <h3>Não tem uma conta?</h3>

       <a href="/cadastro" className={styles.buttonLogin}>
        Crie sua conta
       </a>
    </div>
  )
};
