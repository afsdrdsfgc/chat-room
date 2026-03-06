const sendbtn = document.querySelector('#send')
const letter = document.querySelector('input')
const log = document.querySelector('div')



async function send(event) {
    const message = {user: 'rafael', message: letter.value}
    const send_db = await fetch('https://tinkr.tech/sdb/rafael_chat_final_test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  });
  const send_out = await send_db.json();
  console.log(send_out)
  message_log ()
}

async function message_log() {
  const response = await fetch('https://tinkr.tech/sdb/rafael_chat_final_test');
  const documents = await response.json();
  
  log.innerHTML = ''; 
  letter.value = ''; 

  documents.forEach(doc => {
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `<strong>${doc.user}:</strong> ${doc.message}`;
    log.appendChild(messageElement);
  });
}

sendbtn.addEventListener("click", send)


