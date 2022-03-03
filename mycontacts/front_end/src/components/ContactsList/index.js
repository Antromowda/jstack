import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Setinha para ordenação." />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Enrico Palma</strong>
              <small>instagram</small>
            </div>

            <span>enrico@dev.gg</span>
            <span>(14) 91234-5678</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Botão de Edição de Contato" />
            </a>
            <button type="button">
              <img src={trash} alt="Botão para Remoção de Contato" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Enrico Palma</strong>
              <small>instagram</small>
            </div>

            <span>enrico@dev.gg</span>
            <span>(14) 91234-5678</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Botão de Edição de Contato" />
            </a>
            <button type="button">
              <img src={trash} alt="Botão para Remoção de Contato" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Enrico Palma</strong>
              <small>instagram</small>
            </div>

            <span>enrico@dev.gg</span>
            <span>(14) 91234-5678</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Botão de Edição de Contato" />
            </a>
            <button type="button">
              <img src={trash} alt="Botão para Remoção de Contato" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
