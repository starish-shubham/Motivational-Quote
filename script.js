const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newq = document.getElementById("newq");

const getQuotes = async()=> {
    let realdata = "";
    let rnum = Math.floor(Math.random() * 10);
    // console.log(rnum);
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realdata = await data.json();
        const realquote = (realdata[rnum].text);
        const writer = (realdata[rnum].author);
        // console.log(realdata[rnum]);
        console.log(realquote);
        console.log(writer);
        // console.log(realdata);
        quote.innerHTML = `${realquote}`;
        author.innerHTML = `-${writer}`;
    } catch (error) {
        console.log("Api fetch failed");
    }
}
getQuotes();

newq.addEventListener("click",()=>{
    // console.log("hi");
    getQuotes();
});