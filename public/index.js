class MyProfile extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({ mode: 'open'});
    }

    connectedCallback(){

        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = 


    `
    <link rel="stylesheet" href="./estilo.css">
    <body>
        <div class="container"> 
            <div class="user">
            <img src="./img/usuario.png" class="user" height="15px" width="15px">
            
            <p class="userN"> MarIsa202 </p>
            </div>

        <img src="./img/us.jpeg" class="post" width="100px" height="100px">
    
        <div class="icons">
        
        <img src="./img/like.png" class="like" width="20px" height="20px">
        <img src="./img/charlar.png" class="charlar" width="20px" height="20px">
        <img src="./img/enviar.png" class="enviar"  width="20px" height="20px">
        <img src="./img/guardar.png" class="guardar" width="20px" height="20px">
        
        </div>
    
        <div class="text"> 
        <p class="cantidad"> <b> 155 likes </b> </p>
        <p class="nombre"> <b> MariIsa202 </b> instagram post </p>
        <p class="comentarios"> View all 103 comments </p>
        </div>
        </div>
        </body>`
        
    }

}
console.log('loaded')
window.customElements.define("post-ig", MyProfile);