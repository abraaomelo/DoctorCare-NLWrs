function onScroll() {
    
    if(scrollY>45){
        navigation.classList.add('scroll')
    }else{
        navigation.classList.remove('scroll')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

function ScrollReveal() {
    var options = {
        reveal:function() {}
    }
    return options
}

ScrollReveal({
    origin: 'left',
    distance:  '30px',
    duration: 700,
}).reveal('#home')