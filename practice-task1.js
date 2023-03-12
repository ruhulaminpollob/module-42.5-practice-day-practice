const clearLocalStorage=()=>{
    localStorage.clear()
}

const setToLocalStorage=()=>{
    const getKeyInput=document.getElementById('key');
    const getValueInput=document.getElementById('value');
    const key=getKeyInput.value;
    const value=getValueInput.value;
    getKeyInput.value='';
    getValueInput.value='';
    localStorage.setItem(key,value)
}