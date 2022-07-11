async function(){
    const url = `https://masai-mock-api.herokuapp.com/hotels/search?city=`
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        return data.home.data;
    } catch (error){
        console.log("error",error);
    }
}