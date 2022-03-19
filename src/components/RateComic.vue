<template>
    <form>
        <p class="clasificacion">
            <input id="radio1" type="radio" name="estrellas" value="5">
            <label for="radio1"><i class="fa-solid fa-star"></i></label>
            <input id="radio2" type="radio" name="estrellas" value="4">
            <label for="radio2"><i class="fa-solid fa-star"></i></label>
            <input id="radio3" type="radio" name="estrellas" value="3">
            <label for="radio3"><i class="fa-solid fa-star"></i></label>
            <input id="radio4" type="radio" name="estrellas" value="2">
            <label for="radio4"><i class="fa-solid fa-star"></i></label>
            <input id="radio5" type="radio" name="estrellas" value="1">
            <label for="radio5"><i class="fa-solid fa-star"></i></label>
        </p>
    </form>

</template>

<style lang="scss" scoped>

#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;

  p {
    text-align: center;
  }

}

.clasificacion {
  margin: 0 !important;
  direction: rtl;
  unicode-bidi: bidi-override;
}

input[type="radio"] {
  display: none;
}

label {
  color: grey;
  font-size: 4em;
  padding-left: 20px;

  &:hover {
    color: #fab005;

    ~ label {
      color: #fab005;
    }
  }
}

input[type="radio"]:checked ~ label {
  color: #fab005;
}

@media (max-width: 40rem) {
  label{ 
    font-size: 2em; 
  }
}

</style>