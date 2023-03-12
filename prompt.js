/*
১. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
*/
const openPrompt=()=>{
    const promptInput=prompt('Input your age')
    if (promptInput) {
        alert(`my age multiply by 200 is = ${promptInput*200}`)
    }
    
}