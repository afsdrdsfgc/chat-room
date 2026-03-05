const sendbtn = document.querySelector('#send')
const letter = document.querySelector('input')
const log = document.querySelector('div')
const message = {user: 'rafael', message: 'hello everyone'}


async function send(event) {
    const send_db = await fetch('https://tinkr.tech/sdb/rafael_chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  });
  const send_out = await send_db.json();
  console.log(send)
  message_log ()
}

async function message_log () {
  const response = await fetch('https://tinkr.tech/sdb/rafael_chat');
  const documents = await response.json();
  console.log(documents)
}

sendbtn.addEventListener("click", send)


