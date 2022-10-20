<template>
    <!-------------------- FOOTER --------------> 
<footer>
    <div class="piedpage">
        <a href="https://github.com/ducuingg"  target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/guillaume-ducuing-a05ab6212/" target = "_blank"><i class="fa-brands fa-linkedin"></i></a>
    </div>
    <div class="end"><p>© 2022 Guillaume DUCUING, Tous droits réservés.</p></div>
</footer>
</template>


<style lang="scss">
footer{
    .piedpage{
        display: flex;
        margin: auto;
        justify-content: center;
        flex-wrap: wrap;
        gap:2em;
        font-size: 2em;
        &::before{
            content: "";
            display: block;
            margin: auto;
            margin-top: 2em;
            width: 95%;
            height: 1px;
            background-color: white;
        }
    }
    .end{
        p{
            display: block;
            margin: auto;
            margin-top: 1em;
            margin-bottom: 1em;
            text-align: center;
        }
    }
}
</style>