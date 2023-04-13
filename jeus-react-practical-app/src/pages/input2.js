import React, { useState } from 'react';

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });

    const { name, email, tel } = inputs;

    const onChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setInputs({
            ...inputs,
            [id]: value,
        });
    };

    return (
        <div>
            <div>
                <label>氏名</label>
                <input type="text" id="name" value={name} onChange={onChange} />
            </div>
            <div>
                <label>email</label>
                <input type="text" id="email" value={email} onChange={onChange} />
            </div>
            <div>
                <label>電話番号</label>
                <input type="text" id="tel" value={tel} onChange={onChange} />
            </div>
            <p>氏名： {name}</p>
            <p>email： {email}</p>
            <p>電話番号： {tel}</p>
        </div>
    );
};

export default Input2;