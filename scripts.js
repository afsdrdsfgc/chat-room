const sendbtn = document.querySelector('#send')
const letter = document.querySelector('input')
const log = document.querySelector('#chat')
let savedname = localStorage.getItem('userName')


async function send() {
  if (savedname === null){
    const username = prompt('What is your username?');
    if (username){
      savedname = username
      localStorage.setItem('userName', username)
    }
    else {
      return
    }
  }
    const message = {user: savedname, message: letter.value}
    const send_db = await fetch('https://tinkr.tech/sdb/rafael_chat_final1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  });
  const send_out = await send_db.json();
  console.log(send_out)
  message_log ()}

async function message_log() {
  const response = await fetch('https://tinkr.tech/sdb/rafael_chat_final1');
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

letter.addEventListener("keypress", (e) => {
  if (e.key === "Enter") send();
});

