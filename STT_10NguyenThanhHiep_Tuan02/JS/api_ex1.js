// Ex1

const urlBacon = "https://jsonplaceholder.typicode.com/todos/3";
(function () {
  $.ajax({
    method: "GET",
    url: urlBacon,
    dataType: "json",
  })
    .done(function (data) {
      console.log(data);
      document.getElementById('id').value = data.id;
      document.getElementById('text').value = data.title;
    })
    .fail(function () {
      alert("no good");
    });
})();
