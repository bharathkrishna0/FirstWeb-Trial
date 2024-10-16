document.getElementById('api1button').addEventListener('click', async () => {
    await fetch('https://official-joke-api.appspot.com/random_joke/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('api1displayer').innerText = JSON.stringify(data.setup,null,2)
            document.getElementById('api1follower').textContent = JSON.stringify(data.punchline,null,2)          
            console.log(data)
        })
})

document.getElementById('api2button').addEventListener('click', async () => {
    await fetch('https://meme-api.com/gimme')
        .then(response => response.json())
        .then(data => {
            len = data.preview.length
            document.getElementById('api2displayer').innerHTML = null
            document.getElementById('random-image').src = data.preview[len - 1];
            console.log(data)
        })
})

document.getElementById('api3button').addEventListener('click', async () => {
    let title = prompt("Enter a title", "hello");
    let paste = prompt("Enter a message", "hello world");
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: paste,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            document.getElementById('api3title').innerHTML = json.title;
            document.getElementById('api3paste').innerHTML = json.body;
            document.getElementById('api3displayer').innerHTML = null
          });      
})

const text = document.querySelector('.logoText p');
text.innerHTML = text.innerText.split("").map(
  (char,i) =>
  `<span style="transform:rotate(${i * 14}deg)">${char}</span>`
).join("")
