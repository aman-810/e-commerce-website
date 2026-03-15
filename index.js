let cardImages=document.querySelectorAll('.cardImg');
  let cardName=document.querySelectorAll('.name')
  let cardPrice=document.querySelectorAll('.cost');
  //console.log(cardImages)
  let menuItems=document.querySelector('.menuItems')
  
  function showItems(){
    menuItems.classList.toggle('show');
  }
  async function getData() {
    let response = await fetch('https://fakestoreapi.com/products');
   //console.log(response)
    let  data=await response.json();
    //console.log(data)
    //console.log(typeof data)
    let i=0;
    cardImages.forEach((image)=>{
      image.src=data[i].image;
      i++;
    //  console.log(image.src);
    })
    let j=0;
    cardName.forEach((name)=>{
      let text=data[j].title;
      name.innerText=text.slice(0,30)+'......'
      j++;
    })
    let k=0;
    cardPrice.forEach((cost)=>{
      cost.innerText='$'+data[k].price;
      k++;
    })
  }
  getData();
let addBtn=document.querySelectorAll('.addBtn')
addBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let card=btn.closest('.card')
        let name=card.querySelector('.name').innerText
        let cost=card.querySelector('.cost').innerText
        let arr=JSON.parse(localStorage.getItem('cartItems')) || []
        arr.push({name,cost})
        localStorage.setItem('cartItems',JSON.stringify(arr))
        console.log('cart added')
    })
})