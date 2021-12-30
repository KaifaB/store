import React from "react";
import { useFormContext, Controller } from 'react-hook-form'

const Field = ({ name, label, type }) => {
    const { control } = useFormContext()

    return (
            <Controller 
            control={control}
            render = {({field}) => (
                <div class="field">
                    <input type={type} name="name" autoComplete="off" required/>
                    <label htmlFor="name" class="label-name">
                        <span className="content-name">{label}</span>
                    </label>
                </div>
            )}
            fullWidth
            name={name}
            required
            />
    );
}

export default Field;
