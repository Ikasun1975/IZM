import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogSingle = () => {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
        const {id} = useParams();
    
        useEffect(() => {
            const fetchPage = async () => {
                try {
                    const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/posts?slug=' + id + '&_embed');
                    if (!response.ok) {
                        throw new Error(`Došlo je do greške: ${response.status}`);
                    }
                    const json = await response.json();
                    setData(json[0]);
                    console.log(json);
                } catch (err) {
                    setError(err.message);
                }
            };
    
            fetchPage();
        }, [id]);
    
        if (error) return <p>Greška: {error}</p>;
        if (!data) return <p>Učitavanje...</p>;
    
    
        return(
            <div className="container">
                <div className="row">
                    <h1>{data.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
                </div>
            </div>
        );
};

export default BlogSingle;