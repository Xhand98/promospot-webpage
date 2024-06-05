import React, { useState } from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);

    const handleMessage = (message) => {
        const prueba = document.getElementById('agregar');
        prueba.innerHTML += message;
    };

    const handleClear = () => {
        const agregado = document.getElementById('agregar');
        while (agregado.firstChild) {
            agregado.removeChild(agregado.firstChild);
        }
    };

    const handleSend = () => {
        let texto = document.getElementById('insertartexto').value;
        texto = texto.toUpperCase();

        let messageId;
        switch (true) {
            case texto.search('HOLA') >= 0:
                messageId = 1;
                break;
            case texto.search('ADIOS') >= 0:
                messageId = 2;
                break;
            case texto.search('COMO ESTAS') >= 0:
                messageId = 3;
                break;
            case texto.search('OSTIA') >= 0:
                messageId = 4;
                break;
            default:
                messageId = 5;
        }

        handleMessage(getMessageById(messageId));
    };

    const getMessageById = (id) => {
        switch (id) {
            case 1:
                return `<div className="bot-response"><span className="bot-name">🤖Robó</span><p className='agregado'><i className="fa-solid fa-robot icon"></i>></i> Saludos</p></div>`;
            case 2:
                return `<div className="bot-response"><span className="bot-name">🤖Robó</span><p className='agregado'><i className="fa-solid fa-robot icon"></i>></i> Bye, Bye.</p></div>`;
            case 3:
                return `<div className="bot-response"><span className="bot-name">🤖Robó</span><p className='agregado'><i className="fa-solid fa-robot icon"></i>></i> Bien, y tú?</p></div>`;
            case 4:
                return `<div className="bot-response"><span className="bot-name">🤖Robó</span><p className='agregado'><i className="fa-solid fa-robot icon"></i>></i> Vua chaval, que epico</p></div>`;
            default:
                return `<div className="bot-response"><span className="bot-name">🤖Robó</span><p className='agregado'><i className="fa-solid fa-robot icon"></i>></i> No tengo respuesto para esta consulta. :(</p></div>`;
        }
    };

    const handleButtonClick = (id) => {
        handleMessage(getMessageById(id));
    };

    return (
        <article className="chatbot">
            <div className="text" id="agregar"></div>
            <div id="botones">
                <button id="1" onClick={() => handleButtonClick(1)}>HOLA</button>
                <button id="3" onClick={() => handleButtonClick(3)}>COMO ESTAS</button>
                <button id="4" onClick={() => handleButtonClick(4)}>OSTIA</button>
                <button id="2" onClick={() => handleButtonClick(2)}>ADIOS</button>
                <button id="5" onClick={handleClear} className="clear">CLEAR</button>
            </div>
            <div className="send-cont">
                <div className="btn-container">
                    <button className="send-button" id="send" onClick={handleSend}>
                        <span>Send <FontAwesomeIcon icon={faPaperPlane} /></span>
                    </button>
                </div>
                <input maxLength="50" type="text" id="insertartexto"></input>
            </div>
        </article>
    );
};

export default Chatbot;
