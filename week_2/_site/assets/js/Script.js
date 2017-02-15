/*global window */
(function () {
    "use strict";
    var app = {
        init: function (routes, sections, window) {
            routes.init(sections, window);
        }
    };
    var routes = {
        init: function (sections, window) {
            window.onhashchange = function () {
                sections.toggle();
            };

            document.getElementById("menu-button").addEventListener("click", function () {
                document.getElementById("menu").classList.toggle("is-open");
            });
        }
    };
    var sections = {
        toggle: function () {

            var sectionList = document.querySelectorAll("section");

            sectionList.forEach(function (sec) {
                if (location.hash === "#all") {
                    sec.classList.add("active");
                    document.querySelector("a[href='#all']").classList.add("active");
                    document.querySelector("a[href='#" + sec.id + "']").classList.remove("active");
                } else if (location.hash === "#" + sec.id) {
                    sec.classList.add("active");
                    document.querySelector("a[href='#" + sec.id + "']").classList.add("active");
                } else {
                    sec.classList.remove("active");
                    document.querySelector("a[href='#" + sec.id + "']").classList.remove("active");
                    document.querySelector("a[href='#all']").classList.remove("active");
                }

            });

            document.getElementById("menu").classList.toggle("is-open");
        }
    };
    app.init(routes, sections, window);
}());