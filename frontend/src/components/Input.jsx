import React, { useEffect, useState } from 'react';

const Input = () => {
    const [data, setData] = useState('');           //useState for text data
    const [list, setList] = useState([]);           //useState for listing the data in the output
    const [emoji, setEmoji] = useState([]);         //useState for storing the emojis from the json server
    const [newName, setNewName] = useState('');     //useState for storing a new emoji name from the user input
    const [newEmoji, setNewEmoji] = useState('');   //useState for storing a new emoji from the user input
    const [newEmojiList, setNewEmojiList] = useState({});   //useState for listing the new emojis from the user input
    

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

    const getEmojiData = () => {
        fetch(`http://localhost:3004/emojiData`)
        .then((emo) => emo.json())
        .then((emo) => {
            // console.log(emo);
            setEmoji(emo);
        })
    }
    
    useEffect(() => {
        // console.log(data);

        // fetching the emojis data from json server

            getEmojiData();

        //idetifying the emoji format from the data input
        //(emoji[e] ? emoji[e] : e)
        var dataArray = data.split(' ');
        dataArray = dataArray.map((e) => (emoji.filter((ele) => (ele.name == e ? ele.symbol : ele.name))));
        // console.log(dataArray);
        setData(dataArray.join(' '));
    },[data]);

    const handleName = (e) => {
        let name = e.target.value;
        setNewName(name);
        console.log(newName)
    }

    const handleEmoji = (e) => {
        setNewEmoji(e.target.value);
        console.log(newEmoji);
    }

    const handleAddEmoji = () => {
        let payload = {
            "name" : newName,
            "emoji" : newEmoji
        }
        fetch(`http://localhost:3004/emojiData`, {
            method : 'POST',
            body : JSON.stringify(payload),
            headers : { "content-Type" : "application/json" }
        })
        .then((e) => setEmoji([...emoji, e]))
        console.log(emoji);
    }
    

  return (
    <>
        <h1>Text to emoji converter</h1>
        <div>
            <h4>Add a new emoji</h4>
            <input type="text" placeholder="Give a name" value={newName} onChange={(e) => handleName(e)}/>
            <input type="text" placeholder="Give an emoji" value={newEmoji} onChange={(e) => handleEmoji(e)}/>
            <button onClick={handleAddEmoji}>Add</button>
        </div>
        <div style={{display:"flex", margin:"auto", padding:"5%"}}>
            <div style={{width:"50%", borderRight:"2px solid #cecece"}}>
                <h4>Input</h4>
                <input type="text" placeholder='Type here...' value={data} onChange={(e) => handleChange(e)}/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {/* <button list={list}>View Page</button> */}
            <div style={{width:"50%", borderLeft:"2px solid #cecece"}}>
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