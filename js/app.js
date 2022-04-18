document.addEventListener('DOMContentLoaded',()=>{

    let foot=document.getElementsByClassName('container-foot')
    Array.from(foot).forEach(item=>{
        item.style.display='none'
    })

    let messages=document.querySelectorAll('section')
    messages.forEach((item)=>{
        item.addEventListener('click',()=>{
            item.childNodes[5].style.display='block'
            let text= item.childNodes[3].childNodes[1].select()
            navigator.clipboard.writeText(item.childNodes[3].childNodes[1].value);
            setTimeout(()=>{
                item.childNodes[5].style.display='none'
            },1000)
        })
    })
})