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
@import '~assets/scss/main.scss';

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

  .burger img{
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
      display: flex;
      justify-content: center;
      width: 100vw;
  }
  .menu{
      overflow: hidden;
      position: fixed;
      z-index: 1;
      width: 100vw!important;
      margin: 0px!important;
      height: 0;
      top:100vh;
      padding-left: 0px!important;
      transition: 0.5s ease;
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
      top: 0px!important;
      margin: 0px!important;
  }
  ul{
      display: block;
      width: 100%;
      text-align: center;
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
  .burger img{
      z-index: 12;
      position: fixed;
      display: flex;
      width: 30px;
      margin: 10px;
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
      padding: 0;
  }
  .section-hero #presentation h2{
      width: 80%;
      padding:0;
  }
 .slidehome{
     display: block;
     overflow-x: hidden;
     width: 100vw;
     top :100vh;
 }
 .button-heading{
  position: inherit;
  width: 100vw;
  height: auto;
  writing-mode:inherit;
  text-orientation:inherit;
  text-transform: uppercase;
  letter-spacing: 8px;
  background: rgb(1,30,38);
  color:rgb(0,220,129);
  text-align: center;
  padding:10px 50px 10px 50px;
  font-size:8px;
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
}


</style>