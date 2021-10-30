import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending,setIspending] = useState(true);
    const [name, setName] = useState('mario');

       
    useEffect(() =>{
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setBlogs(data);
            setIspending(false);
        })
        
    },[]);
    
    return ( 
        <div className="home">
            
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Blog Titles!"/>}
            <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;