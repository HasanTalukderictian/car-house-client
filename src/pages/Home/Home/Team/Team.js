import React, { useEffect, useState } from 'react';
import TeamCart from './TeamCart';

const Team = () => {
    
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/team')
        .then(res => res.json())
        .then(data => {
            setTeam(data);
            console.log(data);
        })
    },[])

    return (
        <div>
            <div className='my-5 mx-4 text-center'>
                <h2 className='text-xl text-orange-600 font-semibold'>Team</h2>
                <h2 className='text-5xl text-black font-semibold'>Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised  <br />
                words which don't look even slightly believable. </p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-3'>
                {
                    team.map(member => <TeamCart key={member._id}
                    member={member}></TeamCart>)
                }
            </div>
        </div>
    );
};

export default Team;