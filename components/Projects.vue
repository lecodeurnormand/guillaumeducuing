<template>
<section class="section-projects">
        <div id="lienprojets"></div>
        <h2 class="button-heading">Projets</h2>
        <div class="container-projets">
        <div class="projet">
            <img src="~assets/projet-pmp.png" alt="">
        </div>
        </div>
</section>
</template>

<style lang="scss">

.section-projects{
    .container-title{
        .underline{
            margin-bottom: 50px;
        }
    }
    .container-projets{
        display: flex;
        justify-content: center;
        margin: auto;
    }
    .projet{
        display: flex;
        transition: all 0.3s ease;
        &:hover{
            box-shadow: none;
            transition: all 0.3s ease;
            transform: scale(105%);
            box-shadow: 1px 1px 5px black;
            filter: blur(10px);
        }
        img{
            width: 100%;
        }
    }
}
</style>