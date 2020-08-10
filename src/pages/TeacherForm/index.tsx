import React, { useState, FormEvent } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PageHeader, Input, Textarea, Select } from "../../components/";
import warningIcon from "../../assets/images/icons/warning.svg";

import api from "../../services/api";

import "./styles.css";
import { useHistory } from "react-router-dom";

toast.configure();

const TeacherForm: React.FC = () => {
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [bio, setBio] = useState("");

    const [subject, setSubject] = useState("");
    const [cost, setCost] = useState(0);

    const [scheduleItems, setScheduleItems] = useState([
        {
            week_day: 0,
            from: "",
            to: "",
        },
    ]);

    const history = useHistory();

    const addNewShceduleItem = () => {
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: "",
                to: "",
            },
        ]);
    };

    const handleCreateClass = (event: FormEvent) => {
        event.preventDefault();

        api.post("classes", {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule: scheduleItems,
        })
            .then(() => {
                toast.success("Cadastro feito com sucesso!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    history.push("/");
                }, 5000);
            })
            .catch((error) => {
                toast.error("Erro ao cadastrar a suas aulas!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    const setScheduleItemValue = (
        position: number,
        field: string,
        value: string
    ) => {
        const updatedScheduleItems = scheduleItems.map(
            (scheduleItem, index) => {
                if (index === position) {
                    return { ...scheduleItem, [field]: value };
                }
                return scheduleItem;
            }
        );
        setScheduleItems(updatedScheduleItems);
    };
    return (
        <div id="page-teacher-form" className="container">
            <ToastContainer />
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo, é preencher esse formulário de inscrição"
            ></PageHeader>
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            name="Name"
                            label="Nome completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                        />
                        <Input
                            mask="(99)99999-9999"
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                        />
                        <Textarea
                            name="bio"
                            label="Biografia "
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
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
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => setCost(Number(e.target.value))}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button
                                type="button"
                                onClick={() => addNewShceduleItem()}
                            >
                                {" "}
                                + Novo horário
                            </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={index} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da Semana"
                                        onChange={(e) =>
                                            setScheduleItemValue(
                                                index,
                                                "week_day",
                                                e.target.value
                                            )
                                        }
                                        value={scheduleItem.week_day}
                                        options={[
                                            { value: "0", label: "Domingo" },
                                            {
                                                value: "1",
                                                label: "Segunda-Feira",
                                            },
                                            {
                                                value: "2",
                                                label: "Terça-Feira",
                                            },
                                            {
                                                value: "3",
                                                label: "Quarta-Feira",
                                            },
                                            {
                                                value: "4",
                                                label: "Quinta-Feira",
                                            },
                                            {
                                                value: "5",
                                                label: "Sexta-Feira",
                                            },
                                            { value: "6", label: "Sábado" },
                                        ]}
                                        placeholder="Selecione uma opção"
                                    />
                                    <Input
                                        onChange={(e) =>
                                            setScheduleItemValue(
                                                index,
                                                "from",
                                                e.target.value
                                            )
                                        }
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                    />
                                    <Input
                                        onChange={(e) =>
                                            setScheduleItemValue(
                                                index,
                                                "to",
                                                e.target.value
                                            )
                                        }
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                    />
                                </div>
                            );
                        })}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso" />
                            Importante! <br />
                            Preencha todos os campos
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
};

export default TeacherForm;
