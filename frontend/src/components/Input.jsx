import React, { useEffect, useState } from 'react';

const Input = () => {
    const [data, setData] = useState('');       //useState for text data
    const [list, setList] = useState([]);       //useState for listing the data in the output
    const [emoji, setEmoji] = useState('');     //useState for storing the emojis from the json server

    // handle change in input 

    const handleChange = (e) => {
        // console.log(e.target.value)
        setData(e.target.value);
    }

    //handle submit on clicking submit button

    const handleSubmit = () => {
        // console.log(data)
        setList([...list, data]);
        setData('');
    }

    useEffect(() => {
        // console.log(data);

        // fetching the emojis data from json server

        fetch(`http://localhost:3004/emojiData`)
        .then((emo) => emo.json())
        .then((emo) => {
            // console.log(emo);
            setEmoji(emo);
        })

        //idetifying the emoji format fron the data input

        var dataArray = data.split(' ');
        dataArray = dataArray.map((e) => (emoji[e] ? emoji[e] : e));
        // console.log(dataArray);
        setData(dataArray.join(' '));
    },[data])
    

  return (
    <>
        <h1>Text to emoji converter</h1>
        <div style={{display:"flex", margin:"auto", padding:"5%"}}>
            <div style={{width:"50%", borderRight:"2px solid #cecece"}}>
                <h4>Input</h4>
                <input type="text" placeholder='Type here...' value={data} onChange={(e) => handleChange(e)}/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div style={{width:"50%"}}>
                <h4>Output</h4>
                {
                    list.map((data) => <div>
                        <p>{data}</p>
                    </div>)
                }
            </div>
        </div>
    </>
  )
}

export default Input;