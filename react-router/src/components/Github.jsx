import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom';

function GitHub(){

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log('data:  '+data)
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData();

    return (
        <div className="bg-amber-200 h-auto text-center py-10 w-auto my-10">
            Github Followers: {(data)?data.followers:0}
        </div>
    )
}

export default GitHub;

export const getGithubInfo = async () => {
    const response =await fetch('https://api.github.com/users/hiteshchoudhary')
    console.log('data fetched')
    return response.json();
}