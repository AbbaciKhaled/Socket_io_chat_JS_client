const socket = io("http://localhost:4001/chat")

const message = document.getElementById('message');
const messages = document.getElementById('messages');

// first client -----------------

const handleSubmitNewMessage = () => {
    socket.emit('message', {
        sender_id: 3,
        receiver_id: document.getElementById("receiver_id").value,
        data: 'client 3 : ' + message.value
    })
}

socket.on('message_client_3', ({ data }) => {
    handleNewMessage(data);
})

const handleNewMessage = (message) => {
    messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(message))
    return li;
}