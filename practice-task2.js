let count=0;
const pTagCount=()=>{
    count++;
    document.getElementById('p-count').innerText=count;
    localStorage.setItem('P Tag Count', count)
}