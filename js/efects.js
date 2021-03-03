class Efects{
    constructor(){
        let a = document.querySelector('.all')
        this.begin(a)

        
    }
    begin(element){
        let ul = document.querySelector('.ul')
        this.addEfects(ul,'offMenu')
        element.addEventListener('click',()=>{
    
        if(ul.classList[1] == 'onMenu'){
             this.removeEfects(ul,'onMenu')
             this.addEfects(ul,'offMenu')

        }else if(ul.classList[1] == 'offMenu'){
            this.removeEfects(ul,'offMenu')
            this.addEfects(ul,'onMenu')
        }else{
            console.log('lsdkjflaskjf');
        }
        })

    }
    addEfects(element,efect){
        element.classList.add(efect)

    }
    removeEfects(element,efect){
        element.classList.remove(efect)
    }
}
window.efects = new Efects()