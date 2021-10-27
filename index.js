console.log("Hello World...")

let message = document.querySelector('#message')

let addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    let deleteBtn = document.createElement('button')

    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);

    addEventListener('click', crossOffMovie)

    document.querySelector("ul").appendChild(movie);
    
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)

    movie.appendChild(deleteBtn)

    inputField.value = "";
}




let deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted"
}

let crossOffMovie = event => {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} Watched`
    } else {
        message.textContent = "Movie added back"
    }
    revealMessage()
}

let revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() =>  {message.classList.add('hide')}, 3000)
}

document.querySelector('form').addEventListener('submit', addMovie);