import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import chatContext from '../context/chatContext';

export default function OutlinedCard() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { contact } = useContext(chatContext);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClientmsg = async() => {
    if (message.trim() === '') return;
    setMessages((prev) => [...prev, { sender: 'user', text: message }]);
     try {
    const reply = await contact(message);
    setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
  } catch (error) {
    setMessages((prev) => [...prev, { sender: 'bot', text: "Error getting response." }]);
  }
  };



  return (
    <Box sx={{ minWidth: '100px',maxWidth:'80%',marginLeft:'10%', borderRadius: '20%', height: '100vh',boxShadow: '-3px  -6px 12px 9px rgba(53, 6, 80, 0.84)', }}>
      <Card
        variant="outlined"
        sx={{
          color: '#6666cc',
          backgroundColor: '#3c0569',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{
              borderBottom: '4px solid purple',
              textAlign: 'center',
              marginBottom: '20px',
              fontSize: '40px'
            }}
          >
            Ragify AI
          </Typography>
        </CardContent>

        {/* Message area */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            px: 2,
          }}
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                color: 'white',
                backgroundColor: msg.sender === 'user' ? '#4c4caf' : '#666699',
                borderRadius: '12px',
                padding: '8px 12px',
                maxWidth: '70%',
                wordBreak: 'break-word',
                fontSize: '20px',
                marginTop: index > 0 && messages[index - 1].sender !== msg.sender ? '30px' : '4px',
              }}
            >
              {msg.text}
            </Box>
          ))}
        </Box>

        {/* Input area at the bottom */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            padding: 2,
            borderTop: '4px solid purple',
          }}
        >
          <TextField
            placeholder='Enter Your Text'
            variant="outlined"
            minRows='1'
            maxRows='5'
            sx={{ flexGrow: 1, marginRight: 1, color: 'white', backgroundColor: 'white', borderRadius: '26px', maxWidth: '75%' }}
            value={message}
            onChange={handleChange}
            multiline
          />
          < Button
            sx={{
              border: 'solid black 2px', borderRadius: '10px', borderColor: '#2c2c75', backgroundColor: '#262691', color: 'white', marginBottom: '5px', padding: '12px 24px', // Increase padding
              fontSize: '1.1rem',    // Increase font size
              width: '150px',        // Optional fixed width
              height: '50px'
            }}
            onClick={handleClientmsg}
          >
            Send
          </Button>
        </Box>
      </Card >
    </Box >
  );
}
