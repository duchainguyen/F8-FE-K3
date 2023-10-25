var F8 = {
  component: function (name, options = {}) {
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

F8.component("counter-app", {
  data: () => ({
    count: 0,
    title: "Counter App",
  }),
  template: `
    <h1>{{ title }}</h1>
    <h2>Đã đếm: {{ count }}lần</h2>
    <button v-on:click="count--">-</button>
    <button v-on:click="count++">+</button>
  `,
});

F8.component("header-component", {
  template: `<h1>HEADER</h1>`,
});
