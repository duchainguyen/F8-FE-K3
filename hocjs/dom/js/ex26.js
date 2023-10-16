// Component.create("counter-app", function () {
//   this.innerHTML = `
//     <h1>Count: 0</h1>
//     <button>+</button>
//     `;
//   // tất cả các logic--> xử lý hết trong function
// });

var F8 = {
  Component: function (name, options = {}) {
    var templateHTML = options.template;
    if (templateHTML) {
      Component.create(name, function () {
        var template = document.createElement("template");
        template.innerHTML = templateHTML;
        // console.log(template);
        var templateNode = template.content.cloneNode(true);
        Array.from(templateNode.children).forEach(function (Element) {
          if (Element.getAttribute("v-length")) {
            var length = Element.getAttribute("v-length");
            // console.log(length);
            for (var index = 0; index < length; index++) {
              var elementClone = Element.cloneNode(true);
              elementClone.innerHTML = elementClone.innerHTML.replaceAll(
                "{index}",
                index
              );
              templateNode.insertBefore(
                elementClone,
                elementClone.nextElementSibling
              );
            }
            templateNode.children[0].remove();
          }
        });
        this.append(templateNode);
      });
    }
  },
};
F8.Component("counter-app", {
  template: `<h1 v-length="10">Count: {index}</h1>`,
});
