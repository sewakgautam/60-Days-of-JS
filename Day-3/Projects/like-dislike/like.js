const likeBtn = document.getElementById("likebtn");
const returns = document.getElementById("like");

function isEmpty(element) { 
  const bol = element.textContent.trim() === '' ;
  
  if (bol)
      returns.innerText = "be the first who like"
  
 
 } 
isEmpty(returns)

function onClick() {
  if (likeBtn.innerHTML == "Unlike") {
    returns.innerHTML= '';
    const pTag = document.createElement("p", returns);
    pTag.innerHTML = "0 Likes";
    returns.appendChild(pTag);
    likeBtn.innerHTML = "Like";
  } else {
    returns.innerHTML= '';
    const pTag = document.createElement("p", returns);
    pTag.innerHTML = "1 Likes";
    returns.appendChild(pTag);
    likeBtn.innerHTML = "Unlike";
  }
}

likeBtn.addEventListener("click", onClick);
