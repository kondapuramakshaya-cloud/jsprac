let ski=document.querySelector('#ski')
let na=document.querySelector('#na')
let f=document.querySelector('form')
let btn=document.querySelector('button')
let body=document.querySelector('body')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    var n=na.value
    var s=ski.value
    console.log(na.value)
    console.log(ski.value)
    let a=document.createElement('aside')
    a.id='as'
    let d=document.createElement('div')
    d.id='con'
    let h1=document.createElement('h1')
    let h2=document.createElement('h2')
    h1.innerHTML=`Name : ${n}`
    h2.innerHTML=`Skill Set : ${s}`
    localStorage.setItem('name',n)
    localStorage.setItem('skills',s)
    d.appendChild(h1)
    d.appendChild(h2)
    a.appendChild(d)
    body.appendChild(a)


})