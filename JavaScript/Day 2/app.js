function name1(){
    let title = document.getElementById('maintag')
    console.log(title)
    let name = document.getElementById('nametag')
    console.log(name.value)
    title.innerHTML = "Hello " + name.value + "!! Thank you for joining the bootcamp"
    name.value=''
    signinbut.style.display = 'None'
    nametag.style.display = 'None'
}