<template>
  <div>
<Header/>
<div class="slidehome">
<Hero/>
<Skills/>
  <br/>
<Services/>
<Projects/>
<br>
<br>
<Form/>
<Footer/>
</div>
</div>
</template>
<script>
export default {
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "/main.js";
    document.body.appendChild(script);
    this.animateOnScroll()
    this.staggering()
  },
  methods: {
    animateOnScroll() {
      // this.$gsap.to(window, { duration: 4, scrollTo: 200 })
      this.$gsap.to('.container-serv', {
        x:"50",
        ease: 'Power3.easeInOut',
        scrollTrigger: {
          trigger: '.pulsar',
          end: 'bottom',
          scrub: true
        }
      })
    },
    staggering() {
      const gsap = this.$gsap
      gsap.to('.menu a', {
        y: 150,
        stagger: 0.1
      })
    }
  }
}
</script>
<style lang="scss" global>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');
html{
  scroll-behavior: smooth;
}
body{
  font-family: 'Montserrat', Arial, sans-serif;
  color:rgb(255, 255, 255);
  padding: 0;
  margin: 0;
  width: 100vw;
  overflow-x: hidden;
  background: rgb(1,30,38);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

}


.slidehome{
  display:block;
  float: right;
  position: relative;
  bottom: 0;
  right: 0;
  width: 70%;
  background-color: rgb(2, 42, 53);
}
.reveal{
  animation:reveal 1.9s ease-in;
  animation-fill-mode: forwards;
}
@keyframes reveal{
  from{
      top:110vh;
  }
  to{
      top:60vh;
  }
}
section h1{
  font-family: 'Montserrat', Arial, sans-serif;
  font-size:1.6em;
  letter-spacing: 3px;
  font-weight:lighter;
  color: rgb(0,220,129);
  text-transform: uppercase;
  width: 30em;
  padding-left: 50px;
}
section h2{
  font-family: 'Montserrat', Arial, sans-serif;
  color: white;
  font-weight:lighter;
  text-transform: uppercase;
}

.button-heading{
  position: absolute;
  // position: sticky;
  width: 30px;
  height: auto;
  writing-mode: vertical-lr;
  text-orientation: upright;
  text-transform: uppercase;
  letter-spacing: 10px;
  background: rgb(1,30,38);
  color:rgb(0,220,129);
  text-align: center;
  padding: 10px;
  font-size:8px;
}

/*Desktop*/
@media screen and (min-width: 64em){

  .burger i{
  visibility: hidden;
  }

}

/*Mobile*/
@media screen and ( max-width: 70em) {

  html{
      width: 100vw;
      overflow-x: hidden;
  }

  body{
      overflow-x: hidden;
      width: 100vw;
      background-image: none;
      background: rgb(1,30,38);
  }

  header{
      position: fixed;
      background-color: rgb(6, 36, 44);
      z-index: 10;
      height: 5vh;
      display: flex;
      justify-content: center;
      width: 100vw;
  }
  .menu{
      overflow: hidden;
      position: fixed;
      z-index: 1;
      width: 100vw;
      margin: 0;
      height: 0;
      top:3vh;
      transition: 0.5s ease;
      /* background-color: rgb(38, 79, 80); */
  }
  .menu a{
      color: rgb(0,220,129);
  }
  .menuopen{
      display: block;
      position: fixed;
      background-color: rgb(3, 25, 31);
      height: 13em;
      width: 100vw;
  }
  ul{
      display: block;
      width: 100%;
      text-align: left;
      margin: auto;
      padding: 1em;
  }
  li{
      color: #fff;
  }
  ul a{
      margin: auto;
      font-size: 0.75em;
  }
  .burger i{
      z-index: 12;
      position: fixed;
      display: flex;
      font-size: 2em;
      margin: 10px;
      color: rgb(0,220,129);
  }

  .burger{
      z-index: 12;
      left:0;
      color: white;
  }
  .section-hero #guillaume{
      display: none;
  }
  .header-logo{
      display: none;
  }
  .section-hero #presentation h1{
      width: 80%;
      color: #fff;
  }
  .section-hero #presentation h2{
      width: 80%;
  }
 .slidehome{
     display: block;
     overflow-x: hidden;
     width: 100vw;
     top :15vh;
 }
 .icon-scroll{
     display: none;
 }
 p{
     max-width: 80%;
 }
 h1,h2{
     max-width: 100%;
     margin-left: auto;
     margin-right: auto;
     text-align: center;
     border: 0;
     padding: 0;
 }
 section h1{
     font-size: 1.7em;
     text-align: center;
     padding-top: none;
 }
 .barreformcomp,.barreformcontact,.barreformservice,.containerhelp{
    display: none;
 }

 .grille img{
  font-size: 5em;
  margin-top: 0.3em;
  color: rgb(255, 255, 255);
  transition: 0.3s ease-in-out;

}
 .grille{
  max-width:100%;
  width: 100%;
  height: auto;
  margin-top:2em;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill,11em);
  justify-content: center;
  grid-gap:0.3em;
}
.containerservice{
  margin: inherit;
  padding: inherit;
}
.container-serv{
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: auto;
}
.container-serv .container-text{
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  padding: inherit;
  justify-content: center;
  align-self: center;
}
.container-text p{
  text-align: justify;
  margin: auto;
}


}


</style>