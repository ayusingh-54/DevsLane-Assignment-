// Example: Fetch data from an API
fetch("https://dummyjson.com/carts")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });