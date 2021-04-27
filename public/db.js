const request = window.indexedDB.open("hello world", 1);

request.onsuccess = event => {
  console.log(request.result.name);
};