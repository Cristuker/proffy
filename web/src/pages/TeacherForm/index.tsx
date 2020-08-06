import React from "react";

import { PageHeader, Input, Textarea, Select } from "../../components/";
import warningIcon from "../../assets/images/icons/warning.svg";
import "./styles.css";

const TeacherForm: React.FC = () => {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo, é preencher esse formulário de inscrição"
            ></PageHeader>
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="Name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Biografia " />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Ciências", label: "Ciências" },
                            {
                                value: "Educação Física",
                                label: "Educação Física",
                            },
                            { value: "Física", label: "Física" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "História", label: "História" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Português", label: "Português" },
                            { value: "Quimica", label: "Quimica" },
                        ]}
                        placeholder="Selecione uma matéria"
                    />
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso" />
                        Importante! <br />
                        Preencha todos os campos
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    );
};

export default TeacherForm;
