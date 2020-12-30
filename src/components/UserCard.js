import React from 'react';


const UserCard = ({img,name,age}) => {
    return (
        <article className={"user-card"}>

            <img src={img} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>{age} years</p>
            </div>
        </article>
    );
};

export default UserCard;
