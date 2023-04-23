const getNewQuotes = ()=>{
    let randNum = Math.floor(Math.random()*10);
    return randNum;
}


const getQuotes = async () => {
    try {
        const res = await fetch("https://type.fit/api/quotes");
        const data= await res.json();
        const random = getNewQuotes();
        const quotesData=data[random];
        document.getElementById("myQuote").innerHTML=quotesData.text
      
           
    } catch (error) {
        
    }
}


window.addEventListener("load",()=>{

    getQuotes();

})