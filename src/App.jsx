import React from 'react';
import './App.css';
import Login from './Login';


export default function App() {
  const scrollToLogin = () => {
    const loginSection = document.querySelector('.login-section');
    if (loginSection) {
      loginSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <header>
        <div className="cabe">
          <nav>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="#Login" onClick={scrollToLogin}>Login</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <h1>Capital dos filmes</h1>

      <section className="precos">
        <div className="preco-filmes">
          <h2>Locação de filmes</h2>
          <p>25, <strong>90</strong></p>
        </div>
        <div className="preco-filmes2">
          <h2>Compra de filmes</h2>
          <p>45, <strong>90</strong></p>
        </div>
        <div className="preco-filmes3">
          <h2>Venda ou troca</h2>
          <p>30, <strong>90</strong></p>
        </div>
      </section>

      <section className="sobre">
        <h2>Sobre nós</h2>
        <p>
          Bem-vindo à Capital dos filmes, a sua principal fonte para todas as coisas relacionadas a filmes.
          Somos dedicados a fornecer a você a melhor experiência de cinema, com foco na dependência, no atendimento
          ao cliente e na singularidade.
        </p>

        <p>
          Fundada em 2023 por Italo Rodrigues, a Capital dos filmes percorreu um longo caminho desde o seu início.
          A paixão de Italo por filmes o impulsionou a fazer pesquisas intensivas e lhe deu a coragem para transformar
          o trabalho árduo e a inspiração em uma loja online em expansão. Agora atendemos clientes em todo o Brasil e
          estamos entusiasmados por fazer parte da indústria cinematográfica.
        </p>

        <p>
          Oferecemos locação, compra, venda e troca de filmes. Nossa plataforma é fácil de usar e temos uma grande
          variedade de filmes para escolher. Seja qual for o gênero que você gosta - seja ação, comédia, drama, terror
          ou animação - temos algo para todos.
        </p>

        <p>
          Esperamos que você goste de nossos produtos tanto quanto gostamos de oferecê-los a você. Se tiver dúvidas ou
          comentários, não hesite em nos contatar. Espero que isso ajude! Lembre-se de que este é apenas um exemplo e
          você pode querer personalizá-lo para se adequar à sua marca e aos serviços específicos que você oferece.
        </p>
      </section>

      <section className="contato">
        <h2>Entre em contato</h2>
        <div className="campo-contato">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="campo-contato">
          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" />
        </div>
        <div className="campo-contato">
          <label htmlFor="pergunta">Pergunta:</label>
          <textarea id="pergunta" name="pergunta" rows="4" required></textarea>
        </div>
        <button type="submit">Enviar</button>
          <div className="login-section" id="Login">
          <h2>Já criou um login?</h2>
          <Login />
        </div>
      </section>
      
      <footer>
        <div>
          <p>Copyright © 2023 - By Italo Rodrigues</p>
        </div>
      </footer>
    </main>
  );
}
