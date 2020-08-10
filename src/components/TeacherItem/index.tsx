import React from "react";
import wppIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
import api from "../../services/api";

interface TeacherItem {
    teacher: {
        avatar: string;
        bio: string;
        cost: number;
        id: number;
        name: string;
        subject: string;
        user_id: number;
        whatsapp: string;
    };
}

const TeacherItem: React.FC<TeacherItem> = ({ teacher }) => {
    const createNewConnection = () => {
        api.post("connections", {
            user_id: teacher.id,
        });
    };
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Avatar" />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    onClick={createNewConnection}
                    target="blank"
                    href={`https://wa.me/${teacher.whatsapp}`}
                >
                    <img src={wppIcon} alt="WhatsApp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
};

export default TeacherItem;
