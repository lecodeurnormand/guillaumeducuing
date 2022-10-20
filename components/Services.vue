<template>
<section class="section-services">
    <div id="services"></div>
    <h2><span class="button-heading">Services</span></h2>
    <div class="containerservice">

    <div class="container-serv">
    <div class="cadreservice cs1"><img src="~assets/svg/code.svg" alt=""><div class="pulsar"></div><p>Developpement web</p></div>
    <div class="container-text">
        <h3>Code code code</h3>
    <p>Votre site sera livré avec la possibilité de modifier le contenu par vous-même. Je travaille essentiellement avec Nuxtjs et Prismic.</p>
    </div>
    </div>

    <div class="container-serv">
    <div class="cadreservice cs2"><img src="~assets/svg/accompagnement.svg" alt=""><div class="pulsar"></div><p>Accompagnement</p></div>
    <div class="container-text">
        <h3>Not alone</h3>
    <p>Pendant toute la mission, je vous tiendrais informé de l'avancée du projet. Nous échangerons afin d'affiner au maximum vos besoins. Lorsque le site sera prêt, je vous formerai à l'utilisation très simple du CMS.</p>
    </div>
    </div>

    <div class="container-serv">
    <div class="cadreservice cs3"><img src="~assets/svg/maintenance.svg" alt=""><div class="pulsar"></div><p>Maintenance</p></div>
    <div class="container-text">
        <h3>I'll be there for you</h3>
    <p>Si vous le souhaitez, je peux gérer entièrement le site de sa conception à son hébergement,sa maintenance et son optimsation SEO.</p>
    </div>
        </div>
    </div>
</section>
</template>

<style lang="scss">

.section-services{
    .containerservice{
        display: flex;
        flex-direction: column;
        max-width: 100%;
        padding-right: 50px;
        padding-left: 50px;
        margin: auto;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-top: 4em;
    } 
    .container-serv{
        display: flex;
        justify-content: flex-start;
        align-items: stretch; 
        .cadreservice{
            position: relative;
            min-width: 20em;
            height: 15em;
            margin: 1em;
            border: 1px solid white;
            box-shadow:0px 0px 15px 0px rgba(89, 89, 89, 0.75);
            color: rgb(0,220,129);
            transition: 0.3s ease-in;
            &:hover{
                background-color: rgb(255, 255, 255);
                color: rgb(0,220,129);
                box-shadow:0px 0px 20px 0px rgba(255, 255, 255, 0.75);
                }
            &.cs1{
                animation: move 3s ease alternate-reverse infinite;
                    @keyframes move{
                    from{
                        transform: translate(-20px,0px)rotate(-1.5deg);
                    }
                    to{
                        transform: translate(-20px,0px)rotate(3deg);
                    }
                }
            }
            &.cs2{
                animation: move 3.5s ease alternate-reverse infinite;
                    @keyframes move{
                    from{
                        transform: translate(-20px,0px)rotate(1.5deg);
                    }
                    to{
                        transform: translate(-20px,0px)rotate(-3deg);
                    }
                }
            }
            &.cs3{
                animation: move 3.9s ease alternate-reverse infinite;
                    @keyframes move{
                    from{
                        transform: translate(-20px,0px)rotate(-1.5deg);
                    }
                    to{
                        transform: translate(-20px,0px)rotate(3deg);
                    }
                }
            }
    
            p{
                text-align: center;
                margin: auto;
                margin-top: 150px;
                font-size: 1.3em;
            }
            img{
                position: relative;
                display: block;
                width: 40px;
                top:50%;
                transform: translate(0%,-50%);
                margin: auto;
                color: rgb(3, 45, 61);
                z-index: 1; 
            }
            .pulsar{
                position: absolute;
                display: block;
                margin: auto;
                left: 25%;
                right: 25%;
                height: 5rem;
                width: 5rem;
                top:25%;
                bottom: 25%;
                background-color: white;
                opacity: 0.5s;
                border-radius: 50% 50%;
                transform: scale(1);
                animation: pulse 3s infinite ;
                @keyframes pulse{
                    0%{
                        transform: scale(0.95);
                        box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.75);
                    }
                    70%{
                        transform: scale(1);
                        box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0);
                    }
                    100%{
                        transform: scale(0.95);
                    }
                }
            }
        }
    .container-text{
        h3{
        color:rgb(0,220,129);
        }
        }  
    }
}   
</style>