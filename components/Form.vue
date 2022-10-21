<template>
    <!-------------------- SECTION FORM --------------> 
<section class="section-form">
    <h2><span class="button-heading">Contact</span></h2>
    <div class="formulaire">
    <form action="https://formspree.io/f/xpznjnyd" method="POST">
        <div class="name" >
            <label for="name"></label>
            <input type="text" id="name" name="name" placeholder="NOM" autocomplete="off" required>
        </div>
        <div class="mail">
            <label for="email"></label>
            <input type="email" id="mail" name="email" placeholder="E-MAIL" autocomplete="off" required>
        </div>
        <div id="liencontact"></div>
        <div class="phone">
            <label for="phone"></label>
            <input type="phone" id="phone" name="telephone" placeholder="TELEPHONE" autocomplete="off" required>
        </div>
        <div class="msg">
            <label for="msg"></label>
            <textarea id="msg" name="message" placeholder="VOTRE MESSAGE" autocomplete="off" required></textarea>
        </div>
        <div class="button">
            <button type="submit" name="submit">Envoyer</button>
        </div>
            
    </form>
</div>
</section>
</template>

<style>
.formulaire{
display: flex;
}
#imagecontact{
    margin-top: 3em;
    width: 100%;
    margin-bottom: 2em;
}
.barreformcontact{
    background-color: white;
    width: 26.4em;
    height: 2px;
    margin-left: 50px;
    margin-top: -20px;
}
form{
    padding-top: 60px;
    color: rgb(0,220,129);
    text-transform: uppercase;
    letter-spacing: 3px;
    margin:auto;
    width: 80%;

}
input::placeholder{
    color: rgb(0,220,129);
    opacity: 0.5;
}
input:focus::placeholder{
    transform:translateX(-100%);
    transition: all 2.6s ease;
}
input{
    color: white;
}
#name,#mail,#phone{
    background: transparent;
    letter-spacing: 3px;
    margin-bottom: 20px;
    width: 12em;
    height: 2.5em;
    border: none;
    border-bottom: 1px solid white;
    font-family: 'Montserrat', Arial, sans-serif;
    outline: none;
}
#mail{
    width: 300px;
}
textarea#msg{
    border: 0.1px solid white;
}
textarea::placeholder{
    color:rgb(0,220,129);
    opacity: 0.5;
}
#msg{
    font-family: 'Montserrat', Arial, sans-serif;
    outline: none;
    background: transparent;
    color: white;
    border:0;
    width:100%;
    height: 20em;
    padding: 20px;
    resize: none;
}
.name,.mail{
    display:inline-flex;
}

.msg{
    display: block;
    width: 100%;
    margin: auto;
}
.formulaire button{
    margin-top: 20px;
    padding: 8px;
    width: 8em;
    height: 2.5em;
    font-family: 'Montserrat', Arial, sans-serif;
    background-color: transparent;
    border:1px solid rgb(0,220,129);
    color:white;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition-property: background-color;
	transition-duration: 0.6s;
}
button:hover{
    cursor: pointer;
    background-color: rgb(0,220,129);
    color:black;
    border:1px solid rgb(0,220,129);
    transition-property: all;
	transition-duration: 0.6s;
}
.button{
    display: flex;
    justify-content: flex-end;
}

/* MOBILE-------------------------------------------- */
@media screen and ( max-width: 80em) {
    .formulaire{
        bottom: 0;
        right: 0;
        width: 100%;
        height:100%;
        background-color: transparent;
    }
    form{
        display: block;
        font-family: 'Montserrat', Arial, sans-serif;
        color: white;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin:auto;
        width: 80vw; 
    }
    #name,#mail,#phone,#msg{
        display: block;
        letter-spacing: 3px;
        margin: auto;
        margin-bottom: 1.2em;
        width: 60%;
        height: 2.5em;
        border: 0;
        padding-left: 20px;
    
    }
    .name,.mail{
        display:flex;
        text-align: center;
    }
    #msg{
        display: block;
        border:0;
        height: 20em;
        resize: none;
        width: 85%;
    }
    .msg{
        display: block;
        margin: auto;
    }
    button{
        display: block;
        margin: auto;
        right: 25%;
        left: 25%;
    }
    button:hover{
        cursor: pointer;
        border:white 1px solid;
        color: white;
        background-color: wheat;
        transition-property: background-color;
        transition-duration: 0.6s;
    }
    input,textarea{
        font-size: 15px;
    }
    input:focus::placeholder{
    transform:translateX(-100%);
    transition: all 2.6s ease;
}
}
</style>