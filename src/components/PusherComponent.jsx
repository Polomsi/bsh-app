import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

const PusherComponent = () => {
  const [messages, setMessages] = useState([]); // Estado para los mensajes recibidos

  useEffect(() => {
    // Configura la instancia de Pusher
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('04b9cf5fecdbc8ee80bb', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('channel-test');
    channel.bind('my-test-event', function(data) {
      alert(JSON.stringify(data));
    });

    // Limpia la conexión al desmontar el componente
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      pusher.disconnect();
    };
  }, []);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <h1 className="text-xl font-bold mb-4">Eventos de Pusher</h1>
      <ul className="space-y-2">
        {messages.map((msg, index) => (
          <li key={index} className="p-2 bg-gray-700 rounded">
            {msg.message || "Mensaje recibido"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PusherComponent;
