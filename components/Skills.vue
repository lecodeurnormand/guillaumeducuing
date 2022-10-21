<template>
<div>
    <br>
<section class="section-skills">
        <div id="lienskill"></div>
    
        <div class="container-grille">
            <h2><span class="button-heading">Skills</span></h2>
            <div class="grilleanim">
        <a href=""><img src="~assets/svg/html.svg" alt="logo html">Html</a>
        <a href=""><img src="~assets/svg/css.svg" alt="logo css">Css</a>
        <a href=""><img src="~assets/svg/js.svg" alt="logo js">Javascript</a>
        <a href=""><img src="~assets/svg/bootstrap-4.svg" alt="logo bootstrap">Bootstrap</a>
        <a href=""><img src="~assets/svg/nuxt.svg" alt="logo nuxtjs">NuxtJs</a>
        <a href=""><img src="~assets/svg/prismic.svg" alt="logo prismic">Prismic</a>
        <a href=""><img src="~assets/svg/wordpress.svg" alt="logo wordpress">Wordpress</a>
        <a href=""><img src="~assets/svg/php.svg" alt="logo php">Php</a>
        <a href=""><img src="~assets/svg/mysql.svg" alt="logo mysql">Mysql</a>
    </div>
        </div> 
</section> 
</div>
</template>

<style lang="scss">
.section-skills{
    .grilleanim{
        overflow-y: hidden;
        max-width: 1300px;
        width:100%;
        height: auto;
        margin-top:2em;
        text-align: center;
        display: grid;
        grid-template-columns: repeat(auto-fill,300px);
        justify-content: center;
        grid-gap:1em;
        img{
            margin: auto;
            padding: 10px 0px 10px 0px;
            height: 70px;
            margin-top: 0.3em;
            transition: 0.3s ease-in-out;
            &:hover{
                transform: scale(1.1);
            }
        }
        a{
            display: flex;
            flex-direction: column;
            font-family: 'Montserrat', Arial, sans-serif;
            text-transform: uppercase;
        }
    }
} 
/*Mobile*/
@media screen and ( max-width: 70em) {
    .grilleanim img{
  max-width: 80px;
  margin-top: 0.3em;
  color: rgb(255, 255, 255);
  transition: 0.3s ease-in-out;

}
 .grilleanim{
  max-width:100%;
  width: 100%;
  height: auto;
  margin-top:2em;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill,200px)!important;
  justify-content: center;
  grid-gap:0.3em;
}
}

</style>