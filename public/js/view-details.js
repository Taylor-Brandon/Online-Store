const viewProductDetailsHandler = async (event) => {
  event.preventDefault();

  imgURL = event.target.parentNode.parentNode.querySelector('img').getAttribute('src');
   
    if (imgURL) {
      const response = await fetch('/home', { 
        method: 'POST', 
        body: JSON.stringify({imgURL}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/product-details');
      } else {
        alert(response.statusText);
      }
    } 

  };


document.querySelectorAll('.view-details').forEach(item => {
  item.addEventListener('click', viewProductDetailsHandler);
});




/*
document.querySelectorAll('.view-details').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    console.log(event.target.parentNode.parentNode.querySelector('img').getAttribute('src'));
  });
});
*/