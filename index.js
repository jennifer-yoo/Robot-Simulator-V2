document.addEventListener("DOMContentLoaded", function(){
  // ADD CODE HERE!

  const movesUl = document.querySelector("#moves-container")

  const renderDirection = direction => {
    const newLi = document.createElement("li")
    newLi.textContent = direction
    movesUl.append(newLi)
  }
  const keyHandler = () => {
    document.addEventListener('keydown', (e) => {
      if (e.key === "ArrowLeft") { 
        setInterval(renderDirection("left"), 3000);
      } else if (e.key === "ArrowRight") { 
        renderDirection("right")
      } else if (e.key === "ArrowUp") { 
        renderDirection("up")
      } else if (e.key === "ArrowDown") { 
        renderDirection("down")
      } else if (e.key === "Backspace") {
          if (movesUl.childElementCount === 0) {
            alert("Nothing to remove!")
          } else {movesUl.lastChild.remove()}
      }
    })
  }

  const clickHandler = () => {
    const moveButton = document.getElementById('move-button')

    moveButton.addEventListener('click', (e) => {
      const li = document.querySelector('li')

      if (li) {
        const direction = li.textContent
        move(direction)
        li.remove()
      } else {
        alert("Out of moves!")
      }
    })
  }

  createGrid()
  renderBot(currentPosition)
  keyHandler()
  clickHandler()
})


// document.addEventListener("DOMContentLoaded", function(){
  
//   const container = document.querySelector('#moves-container')

//   // ADD CODE HERE!

//   // key press listener on the document
//   // if the target is up/down/left/right then add the text the ul
//   const keyHandler = () => {
//     document.addEventListener('keydown', e => {
//       if(e.key === "ArrowLeft"){
//         renderDirection("left")
//       } else if(e.key === "ArrowUp"){
//         renderDirection("up")
//       } else if(e.key === "ArrowRight"){
//         renderDirection("right")
//       } else if(e.key === "ArrowDown"){
//         renderDirection("down")
//       } else if (e.key === "Backspace"){
//         container.lastChild.remove()
//       }
//     })
//   }

//   const renderDirection = direction => {
//     const li = document.createElement('li')
//     li.textContent = direction
//     container.append(li)
//   }


//   // add click listener to move button
//   // on click, get the topmost li and then call move with its direction

//   const clickHandler = () => {
//     const moveButton = document.querySelector('#move-button')

//     moveButton.addEventListener('click', e => {
//       const li = document.querySelector('li')
//       if(li){
//         const direction = li.textContent
//         move(direction)
//         li.remove()
//       } else {
//         alert("Out of moves, dummy!")
//       }
//     })
//   }

//   createGrid()
//   renderBot(currentPosition)
//   keyHandler()
//   clickHandler()
// })