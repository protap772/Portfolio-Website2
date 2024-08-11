console.log("script running...")
document.querySelector('.cross').computedStyleMap.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').Style.display = 'inline'
        document.querySelector('.cross').Style.display= 'none'
    }
    else{
        document.querySelector('.ham').Style.display = 'none'
        setTimeout(() => {
        document.querySelector('.cross').Style.display = 'inline'
        },300);
    }
})
