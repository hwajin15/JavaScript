import React from 'react';

const MyIntro2 = ({card}) =>
{
    return (
        <div>
        안녕하세요 제 이름은 <b>
        {card.name},
        {card.email},
        {card.phone_number}
        </b> 입니다. 
        </div>
    )
}
export default MyIntro2;