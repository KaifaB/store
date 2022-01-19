import React from "react";

const Field = ({ name, label, type, register }) => {

    return (
        <div className="field">
            <input type={type} name={name} required {...register(name, { required: true })} />
            <label htmlFor={name} className="label-name">
                <span className="content-name">{label}</span>
            </label>
        </div>
    )
}

export default Field;
