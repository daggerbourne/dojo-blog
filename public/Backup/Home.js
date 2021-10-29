import { useState } from "react";

const Home = () => {

    // let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(13);

    const handleClick = () =>{
        setName('lugi');
        setAge(99);
    }

    //Example for inline anon function handling to receive data
//     const handleClickAgain = (name) =>{
//     console.log ('It Works Again! ' + name)
// }


    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me!</button>
            <p>{name} is {age}</p>

            {/* example for anon inline functions to handle click */}
            {/* <button onClick={() => handleClickAgain('Itsa Me')}>Click Me Again</button> */}
        </div>
     );
}
 
export default Home;