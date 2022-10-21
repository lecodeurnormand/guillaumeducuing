<template>
    <section class="section-hero">
        <div class="icon-scroll" title="Scrollez !"></div>
        <img src="~assets/guillaume.jpeg" alt="Guillaume Ducuing" id="guillaume">
        <div id="presentation">
        <h1>Guillaume Ducuing</h1>
        <h2>Développeur web</h2>
        </div>
        <p class="texthome">Issu du métier du print et de la communication visuelle, j'ai appris le code par passion et vous propose mes services pour mettre en avant votre entreprise sur le web ! Réaliser un site de qualité & optimisé est indispensable pour une bonne visibilité : discutons ensemble de votre projet !</p>
    </section>
</template>

<style lang="scss">
.section-hero{
    #guillaume{
        width: 9em;
        height: 9em;
        border-radius: 50%;
        float: left;
        padding-left: 3em;
        padding-right: 1em;
    }
    #presentation{
        margin-top: 4em;
        line-height: auto;
        letter-spacing: 0.2em;
        h2{
        color:rgb(0,220,129);
        }
        h1{
        color: #fff;
        }
    }
    .texthome{
        font-family: 'Montserrat', Arial, sans-serif;
        color: white;
        margin: auto;
        text-align: justify;
        line-height: 2em;
        width: 90%;
    }
    .icon-scroll{
        width: 30px;
        height: 50px;
        margin-left: 40%;
        top:0.5%;
        transition: transform 2.5s ease;
        margin-top: -35px;
        background: #fff;
        border-radius: 25px;
        box-shadow: 1px 1px 4px black;
        &:before{
            content: '';
            width: 4px;
            height: 8px;
            background: rgb(47, 47, 47);
            margin-left: -2px;
            top: 8px;
            border-radius: 4px;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-name: scroll;
            @keyframes scroll{
                0%{opacity: 1;}
                100%{opacity: 0; transform: translateY(20px);}
                }
        }
        .revealIconScroll{
        transform: translateY(-380px);
        }
    }
    .icon-scroll, .icon-scroll:before{
        position: absolute;
        left: 50%
    }
.leave{
    animation: remove 0.9s ease;
    animation-fill-mode: forwards;
    @keyframes remove{
    0%{

    }
    50%{
    }
    100%{
        transform: translateY(-800px);
    }
}
}
}

</style>