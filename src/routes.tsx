import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { TeacherList, TeacherForm, Landing } from "./pages";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    );
};

export default Routes;
