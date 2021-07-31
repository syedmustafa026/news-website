var news = document.getElementById('news')

function getData() {
    var searchValue = document.getElementById("search").value
    news.innerHTML = ""
    fetch(`https://newsapi.org/v2/everything?q=${searchValue}&from=2021-07-24&sortBy=publishedAt&apiKey=0f9b4062c0834d46ab541613cc85ff84`)
        .then(response => response.json())
        .then(json => setData(json))

    function setData(data) {
        console.log(data)

        for (var i = 0; i < data.articles.length; i++) {

            let card = `<div class="card mb-3" style="display: flex; " flex-wrap: wrap; width: 800px; max-width: 540px;"> </div>

          <img style="height: 30%; width:100%; border: 2px black solid class="card-img-top" src="${data.articles[i].urlToImage}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${data.articles[i].title}</h5>
            <p class="card-text">${data.articles[i].description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Published at: ${data.articles[i].publishedAt}</li>
            <li class="list-group-item">Author: ${data.articles[i].author}</li>
            <li class="list-group-item">Source: ${data.articles[i].source.name}</li>
          </ul>
          
        </div>`
            news.innerHTML += card
        }
    }
}
