
// const lis = document.querySelectorAll('li');
// for (let li of lis){
//     li.addEventListener('click', function(){
//         li.remove();
//     })
// }


// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then( res => {
//         console.log("Response", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("Data parsed...", data.ticker.target, data.ticker.price)
//     })
//     .catch(e =>{
//         console.log("Oh No! Error", e)
//     })


//     const fetchBitCoin = async () =>{
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//         const data = await res.json()
//         console.log("Async & await", data.ticker.price)
//     }




// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log("Error", e)
//     })


//     const fetchBitcoin = async () => {
//         try{
//             const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//             console.log(res.data.ticker.price)
//         } catch(e) {
//             console.log("error", e)
//         }
//     }




const jokeButton = document.querySelector('#jokesButton')

const addNewJoke = async () => {
    const jokeText =  await getDadJoke();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
}

const jokes = document.querySelector('#jokes');
const getDadJoke = async ()=> {
    try{
        const config = { headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch(e){
        return "No Jokes Available! Sorry"
    }

}


jokeButton.addEventListener('click', addNewJoke );








const btn = document.querySelector('#bList');
btn.onclick = function (){
    console.log("You Clicked me!");
}


btn.onmouseenter = scream;

function scream(){
    console.log("AHHHHHHH");
    console.log("Stop Touching Me");
}


const btn2 = document.querySelector('#train');
btn2.addEventListener('click', function(){
    alert('clicked!');
})


const commentForm = document.querySelector('#commentForm');
const commentConatainer = document.querySelector('#hoopList');
commentForm.addEventListener('submit', function (e){
    e.preventDefault();
    const usernameInput = commentForm.elements.username;
    const commentInput = commentForm.elements.comment;
    addComment(usernameInput.value, commentInput.value);
    commentInput.value = '';
    usernameInput.value = '';
})

const addComment = (username, comment) => {
    const newComment = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newComment.append(bTag);
    newComment.append(`- ${comment}`);
    commentConatainer.append(newComment);

}


commentConatainer.addEventListener('click', function (e){
    e.target.remove();
})