// stander module pattern

// const uictrl = (() => {
//   let text = "hellow world";
//   const getText = () => {
//     const element = document.querySelector("h1");
//     element.textContent = text;
//   };
//   return {
//     callChangerText: () => {
//       getText();
//       //   console.log(text);
//     },
//   };
// })();

// uictrl.callChangerText();
// // uictrl.getText();
// console.log(uictrl.text);

const itemCtrl = (() => {
  let data = [];
  add = (item) => {
    data.push(item);
    console.log("item added....");
  };
  function get(id) {
    return data.find((v) => v.id === id);
  }
  return {
    add: add,
    get: get,
  };
})();
itemCtrl.add({ id: 1, name: "jhn" });
itemCtrl.add({ id: 2, name: "weak" });
console.log(itemCtrl.get(2));
