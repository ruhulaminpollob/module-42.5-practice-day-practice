/*
১. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
*/
const openPrompt=()=>{
    const promptInput=prompt('Input your age')
    if (promptInput) {
        alert(`my age multiply by 200 is = ${promptInput*200}`)
    }
    
}


/*
২. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 
*/

const showLocation=()=>{
    const confirmInput=confirm('Do you want to see your location')
    if (confirmInput) {
        console.log(location.href);
    }
}

