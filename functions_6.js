// callback function

function sayMyName(name) {
  console.log(name)
}

//sayMyName("theus")

sayMyName(() => {
  console.log("estou em uma callback")
})
