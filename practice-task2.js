let count=0;
const savedPTagCount=()=>{
    const savedCount=localStorage.getItem('P Tag Count')
    if (savedCount) {
        count=savedCount;
    }
}

const pTagCount=()=>{
    savedPTagCount()
    count++;
    document.getElementById('p-count').innerText=count;
    localStorage.setItem('P Tag Count', count)
}
pTagCount()