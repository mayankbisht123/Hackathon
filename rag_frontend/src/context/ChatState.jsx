import {useState,React} from 'react';
import chatContext from './chatContext';

const ChatState=(props)=>{

    const url = 'https://0f92-34-126-159-113.ngrok-free.app/rag';
    const contact=async(clientmsg)=>{

        try{
             const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: clientmsg,
        }),
      });

        if(!response.ok)
        {
            console.log("Server error");
        }
        const data= await response.json();
        const reply= data.output?.text?.trim() ?? '';
        console.log("Mistral reply:", reply);
        return reply;
        }
        catch (error) {
            console.error("Error contacting Mistral:", error);
            return "Something went wrong!";
        }

    }

    return(
        <>
        <chatContext.Provider value={{contact}}>
            {props.children}
        </chatContext.Provider>
        </>
    );
}

export default ChatState;