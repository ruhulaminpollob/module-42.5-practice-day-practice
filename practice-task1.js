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
const clearByKey=()=>{
    const getInputKey=document.getElementById('getKey');
    const keyName=getInputKey.value;
    getInputKey.value='';

    const getLocalKey=localStorage.getItem(keyName)
    const removeLocalKey=localStorage.removeItem(keyName)
    console.log(getLocalKey);
}
