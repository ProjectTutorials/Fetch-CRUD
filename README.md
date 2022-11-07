# Fetch CRUD

Demo of CRUD operations from Fetch

### Get started

1. Run the [backend](https://github.com/ProjectTutorials/message-API)

2. Open `index.html` and click on particular operations

3. Refer `console` for details of both working and code

![image](https://user-images.githubusercontent.com/109010929/200133983-d996d1dc-4463-4c72-a81e-64927b85fd8d.png)

4. NOTE:

   - for `update` and `delete` operations you require **ID**

     ![image](https://user-images.githubusercontent.com/109010929/200133916-abd0cc6d-a24f-4788-863b-cf7616742d9f.png)

   - You can get it from `console`

   - _Paste_ that id in `var ID` of `app.js`

### Screenshots

![image](https://user-images.githubusercontent.com/109010929/200134002-585944db-1d66-4baa-a88e-47a374924f70.png)

![image](https://user-images.githubusercontent.com/109010929/200134013-b755b871-9f9a-46a1-b72a-5c97040c1c0f.png)

### CRUD Operations

- [x] Create
- [x] Read
- [x] Update
- [x] Delete

### CREATE

```js
function create_() {
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DATA1),
  });
  var msg = "create successful";
  console.log(msg);
  htmlOutput(msg);
}
```

### READ

##### GET EACH ELEMENT (UNORDERED)

```js
function read_all() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("success!");
      console.log(data);
      htmlOutput(data);
    });
}
```

##### GET EACH ELEMENT BY JSON

```js
function read_one() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log("success!");
        htmlOutput(data[i].name);
      }
    });
}
```

### UPDATE

```js
function update_() {
  fetch(URL + ID, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DATA2),
  });
  var msg = "update successful";
  console.log(msg);
  htmlOutput(msg);
}
```

### DELETE

```js
function delete_() {
  fetch(URL + ID, {
    method: "DELETE",
  });
  var msg = "delete successful";
  console.log(msg);
  htmlOutput(msg);
}
```

### AJAX

Also refer [AJAX-CRUD](https://github.com/ProjectTutorials/AJAX-CRUD)

### References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

- [taniarascia](https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/)
