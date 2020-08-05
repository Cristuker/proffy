import React from "react";
import wppIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars1.githubusercontent.com/u/42705870?s=460&u=5c9e4e058fe388d34ac30892d74aa6b9672cfc22&v=4"
                    alt="Avatar"
                />
                <div>
                    <strong>Cristian Silva</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Ensinando as pessoas que 2+2 = 4 <br />e 2+2/2 = 3
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={wppIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;
