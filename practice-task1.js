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

    const getLocalKey=localStorage.getItem(keyName);
    console.log(getLocalKey);
    const removeLocalKey=localStorage.removeItem(keyName)
    
}
const getLocalObjValue=()=>{
    const getSavedObj=localStorage.getItem('obj')
    let obj={}
    if (getSavedObj) {
        obj=JSON.parse(getSavedObj)
    }
    return obj;
}

const setAsObject=()=>{
    const savedObj=getLocalObjValue();
    const getObjKeyInput=document.getElementById('obj-key');
    const objKey=getObjKeyInput.value;
    getObjKeyInput.value='';
    const getObjValueInput=document.getElementById('obj-value');
    const objValue=getObjValueInput.value;
    getObjValueInput.value='';

    savedObj[objKey]=objValue;

    const newObjForSave=JSON.stringify(savedObj);
    localStorage.setItem('obj',newObjForSave);
    
}
