var tui = {};
tui.tabpanel = {};
tui.dropdown = {};

tui.tabpanel.toggle = function(event, id) {
       
//    console.log(event.target);
    var activeButton = event.target;
    var buttons = event.target.parentElement.children;
    var panel = event.target.parentElement.parentElement;
    var tabs = panel.getElementsByClassName('tui-tabs')[0].children;

    for(let b of buttons){
        if(b === activeButton){
            b.className = 'tui-active';
        }else{
            b.className = '';
        }
    }
    
    for(let t of tabs){
        t.classname = '';
        t.style.display = 'none';
    }
    
    document.getElementById(id).className = 'tui-active';
    document.getElementById(id).style.display = 'block';
    return;
};

tui.dropdown.toggle = function(el){
    var drop = el.parentNode.getElementsByTagName('div')[0];
    if(drop.style.display == 'none') {
        drop.style.display = 'block';
    }else{
        drop.style.display = 'none';
    }
};