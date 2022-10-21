<template>
    <div>
     <div class="container-loader">
        <div class="loader">
            <div class="border"></div>
            <div class="frame">
                <div class="container-text">
                    <div class="logo-white">
                        <img src="~assets/svg/logowhiteeyes.svg" alt="">
                    </div>
                    <h1>Guillaume Ducuing</h1>
                    <!-- <div class="icon-scroll"></div> -->
                    <span class="button">Scroll !</span>
                </div>
            </div>
        </div>
    </div>

  <header>
        <div class="container-logo">
            <img src="~assets/svg/logowhiteeyes.svg" alt="" class="header-logo">
        </div>
</header>
<div class="burger"><img src="~assets/svg/burger.svg" alt="logo menu burger"></div>
<div class="menu">
    <nav>
        <ul>
            <li>
                <a href="#">Accueil</a>
            </li>
            <li>
                <a href="#lienskill">Skills</a>
            </li>
            <li>
                <a href="#services">Services</a>
            </li>
            <li>
                <a href="#lienprojets">Projets</a>
            </li>
            <li>
                <a href="#liencontact">Contact</a>
            </li>     
        </ul>
    </nav>
</div>

</div>

</template>

<script>

</script>

<style lang="scss">

/* LOADER PAGE */
.loader{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
    background: rgb(1,30,38);
    z-index: 10;
}
.loader.display{
    animation:loader 1s ease ;
    animation-fill-mode: forwards;
    right: 0;
    z-index: -10;
}
@keyframes loader {

    0%{

    }
    50%{
        transform: translate(30%,0%);
    }
    100%{
        transform: translate(30%,100%);
        background: rgb(2,42,53);
    }
}
.loader .frame .container-text{
    text-align: center;
    margin-top: 50px;
}
.loader .frame .container-text h1,h2{
   font-weight: lighter;
}
.container-loader{
    scroll-behavior: unset;
}
.loader .frame{
    position: relative;
    display: block;
    justify-content: center;
    border: 1px solid rgb(0,220,129);
    width: 80%;
    height: max-content;
    // margin: 50px auto 50px auto;
    padding-bottom: 30px;
    box-shadow: 1px;
}
.frame.go{
  animation: go 2.5s ease;
  animation-fill-mode: forwards;
}
@keyframes go{
    from{
    }
    to{
        transform: translateX(200px);
        opacity: 0;
    }
}

.loader .container-text{
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    margin: auto;
}
.loader .logo-white{
    margin: auto;
    margin-bottom: 50px;
}
.loader .logo-white img{
    width: 150px;
}
// .loader .frame .container-text {
//     padding: inherit;
//     margin: inherit;
//     width: inherit;
//     font-size: 18px;
// }
.loader .button{
    display: flex;
    font-weight: bold;
    justify-content: center;
    margin:40px auto auto auto;
    font-size: 20px;
    width: max-content;
    border: 1px solid rgb(0,220,129);
    border-radius: 5px;
    background: rgb(0,220,129);
    padding: 15px;
    color: rgb(6, 36, 44);
    transition: all 0.3s ease;
}
.loader .button:hover{
    transition: all 0.3s ease;
    border: 1px solid white;
    color:white;
    background: transparent;
    cursor: pointer;
}
    
header{
    position: fixed;
}
header .container-logo img{
    width: 150px;
    margin-top: 80px;
    margin-left: 100px;
}

a{
    text-decoration: none;
    color: white;
}
.fondsite{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
}

.menu{
    position:fixed;
    display: block;
    width: 21em;
    margin: 2em;
    padding: 10px;
    padding-left: 2em;
    top:15em;
}
.menu ul{
    list-style-type: none;
}
.menu li{
    margin-bottom: 35px;
    margin-left: -15px;
}

.menu a{
    position: relative;
    text-decoration: none;
    font-family: 'Montserrat', Arial, sans-serif;
    color:rgb(0,220,129);
    letter-spacing: 8px;
    text-transform: uppercase;
    font-size: 14px;
}

.menu a::after{
    content: "";
    display: block;
    position: absolute;
    width: 0%;
    height: 1px;
    background: rgb(0,220,129);
    transition:width 0.2s ease-in-out;
}

a:hover::after{
    width:95%;
}
</style>