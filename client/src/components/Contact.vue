<template>
<div class="contactPage">

  <div class="fakeBody">
    <div class="typeWriter">
      <h4 class="textWriter">Contact me.</h4>
    </div>
  </div>

  <div class="contactMe">
    <h3>Raul O. Duarte</h3>
    <h4><i class="terminal icon"></i> <i>Aspiring Developer and IT Technician</i></h4>
    <p>
      <a href="https://github.com/semicascata" class="ui secondary button">
        <i class="github icon"></i>
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/raul-duarte-605378156/" class="ui linkedin button">
        <i class="linkedin icon"></i>
        LinkedIn
      </a><br>
    </p>
    <div class="cardCont">
      <i class="address book icon"></i> Curitiba, PR - <i class="brazil flag"></i><br>
      <i class="envelope icon"></i> raulduarte94@hotmail.com<br>
      <i class="phone icon"></i> +55 (41) 9 9700-2285<br>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
/* Contact Page */
.contactPage {
  width: 900px;
  margin: 20px auto 100px;
  text-align: center;
  color: #faf4ff;
}

.contactMe {
  margin-bottom: 130px;
}

.contactMe h4 {
  margin-top: 0;
}

.contactMe h3 {
  margin-bottom: 2px;
}

.cardCont {
  /* font-family: 'Slabo 27px', serif; */
  font-family: 'Bree Serif', serif;
  font-size: 1rem;
  text-align: justify;
  margin: 2px auto;
  width: 220px;
}

.backButtomCont {
  width: 100px;
  margin: 10px auto;
}

/* TypeWriter Machine Effect */
.fakeBody {
  margin: 80px auto 20px;
  display: flex;
  justify-content: center;
}

.typeWriter .textWriter {
  font-family: 'Bree Serif', serif;
  font-size: 2.5rem;
  overflow: hidden;
  /* Ensures the content is not revealed until the animation */
  border-right: .12em solid #faf4ff;
  /* The typwriter cursor */
  white-space: nowrap;
  /* Keeps the content on a single line */
  margin: 0 auto;
  /* Gives that scrolling effect as the typing happens */
  letter-spacing: .30em;
  /* Adjust as needed */
  animation:
    typing 2s steps(11, end),
    /* 11 = Number of letters */
    blink-caret .3s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to {
    border-color: transparent
  }

  35% {
    border-color: #faf4ff
  }
}

.coolFont {
  font-family: 'Bree Serif', serif;
}
</style>
