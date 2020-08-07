import React, { useState, FormEvent } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PageHeader, TeacherItem, Input, Select } from "../../components/";

import api from "../../services/api";

import "./styles.css";
import searchIcon from "../../assets/images/icons/search.svg";

toast.configure();

interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    user_id: number;
    whatsapp: string;
}

const TeacherList: React.FC = () => {
    const [subject, setSubject] = useState("");
    const [week_day, setWeekDay] = useState("");
    const [time, setTime] = useState("");
    const [teachers, setTeachers] = useState([]);

    const searchTeachers = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const { data } = await api.get("classes", {
                params: { subject, week_day, time },
            });
            console.log(data);
            setTeachers(data);

            toast.success("Busca concluida com sucesso com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            toast.error("Erro ao buscar professores!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log(error);
        }
    };

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
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
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        value={week_day}
                        onChange={(e) => setWeekDay(e.target.value)}
                        options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-Feira" },
                            { value: "2", label: "Terça-Feira" },
                            { value: "3", label: "Qaurta-Feira" },
                            { value: "4", label: "Quinta-Feira" },
                            { value: "5", label: "Sexta-Feira" },
                            { value: "6", label: "Sábado" },
                        ]}
                        placeholder="Selecione uma opção"
                    />
                    <Input
                        name="time"
                        label="Hora"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <button type="submit" onClick={searchTeachers}>
                        Buscar professores
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.length > 0 ? (
                    teachers.map((teacher: Teacher) => {
                        return (
                            <TeacherItem key={teacher.id} teacher={teacher} />
                        );
                    })
                ) : (
                    <div id="warning">
                        <h1>
                            Busque por um professor
                            <br />
                        </h1>
                        <img src={searchIcon} alt="Aviso" />
                    </div>
                )}
            </main>
        </div>
    );
};

export default TeacherList;
