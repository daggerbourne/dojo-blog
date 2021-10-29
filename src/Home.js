import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'I want Cabinets to be done!', body: 'lorem ipsum....', author: 'Britninini', id: 1},
        {title: 'I want to make looove', body: 'lorem ipsum....', author: 'Tino', id: 2},
        {title: 'MilK! Doo DOo?! Vroom Vroom! Readddyy Goo!', body: 'lorem ipsum....', author: 'Ezra', id: 3},
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>

                </div>
            ))}
        </div>
     );
}
 
export default Home;