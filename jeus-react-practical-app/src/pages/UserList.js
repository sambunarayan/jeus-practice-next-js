import React from "react";

const UserComp = ({ userData }) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
};

const UserList = () => {
    const list = [
        { email: "kamada@gmail.com", name: "kamada" },
        { email: "kubo@gmail.com", name: "kubo takefusa" },
        { email: "mitoma@gmail.com", name: "mitoma" },
        { email: "son@gmail.com", name: "sonny" },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>e-mail</th>
                </tr>
            </thead>
            <tbody>
                {list.map(user => <UserComp userData={user} />)}
            </tbody>
        </table>
    )
}

export default UserList;