let getData = async(){
    try{
        let url = `https://masai-mock-api.herokuapp.com/hotels/search?city={query}`;
        let res = await fetch(url);
        let data = await res.json();
        append(data[0].hotels)
    } catch (error){
        console.log(error);
    }
}
getData();
let append = (data) =>{
    let container = document.getElementById("hotel_list");
    data.forEach(el) => {
        let div = document.createElement(`div`);
        div.classList = "hotel_details";

        let image = document.createElement(`img`);
        image.src = el.image;

        let h3 = document.createElement(`h3`);
        h3.innerText = el.name;

        let p = document.createElement(`p`);
        p.innerText = el.price;

        let button = document.createElement(`button`);
        button.innerText = 'Book'
        button.classList = "book";
        button.addEventListener("click",function(){
            book(el);
        })
        div.append(image,h3,p,button)
        container.append(div);
    };
