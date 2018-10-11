import React from "react";
import { Link } from "react-router-dom";

const Repo = ({ name, description, languages}) => {
    return (
        <div>
            <Link to={`/repo/${name}`}>{name}</Link>
        </div>
    );
};

export default Repo;
