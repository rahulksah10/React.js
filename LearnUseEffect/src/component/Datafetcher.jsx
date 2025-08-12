import React from 'react';
import { useEffect, useState } from 'react';

function Datafetcher() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data.posts);
                setLoading(false);
            });
    }, []);
    // it will run only  on 1st render
    return (
        <div>

            {loading ? (
                <h1>Loading...</h1>

            ) : (
                <ul>
                    {data.map(posts => (
                        <li key={posts.id}>{posts.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Datafetcher;
