! function(a) {
    a(function() {
        a(".search-field").autocomplete({
            minLength: 0,
            open: function(b, c) {
                var d;
                d = a(document).width() < 1006 ? 48 : 75;
                var e = a(".ui-autocomplete").height() + d;
                a(".search-close-button").show(), a(".search-close-button").css("top", e)
            },
            close: function(b, c) {
                a(".search-close-button").hide()
            },
            select: function(a, b) {}
        })
    }), a(".search-upcoming-events").click(function(b) {
        var c, d, e, f = a(this).attr("id");
        switch (f) {
            case "search-by-country":
                c = "search-by-country-dropdown", d = "Search countries", e = "country";
                break;
            case "search-by-school":
                c = "search-by-school-dropdown", d = "Search schools", e = "campus_name";
                break;
            case "search-by-type":
                c = "search-by-type-dropdown", d = "Search types", e = "event_classification"
        }
        a(".search-form input").removeClass(function(a, b) {
            return (b.match(/(^|\s)search-by-\S+/g) || []).join(" ")
        }), a(".search-form input").addClass(f), get_autocomplete_source(), a(".search-field").val(""), a(".ui-autocomplete").hide(), a(".search-close-button").hide(), a("#search-dropdown").attr("class", c), a(".search-field").attr("placeholder", d), a("#searchby-category").val(e), a(".search-by-school-dropdown").hide(), a(".search-by-country-dropdown").hide(), a(".search-by-type-dropdown").hide(), a("." + f + "-dropdown").css("visibility", "visible"), a("." + f + "-dropdown").show(), a(".search-field").autocomplete("search", "")
    }), a(".search-field").focus(function(b) {
        a(".search-field").autocomplete("search", "")
    }), a(document).on("click", function(b) {
        "block" === a(".ui-autocomplete").css("display") && (a(b.target).closest(".search-upcoming-events").length || a(b.target).closest("#search-dropdown").length || a(b.target).closest(".ui-autocomplete").length || (a("#search-dropdown").css("visibility", "hidden"), a(".ui-autocomplete").hide()))
    }), a(".search-close-button").on("click", function(b) {
        a("#search-dropdown").css("visibility", "hidden"), a(".ui-autocomplete").hide()
    });
    var b = a(window).width();
    a(window).resize(function() {
        a(this).width() !== b && (a(".ui-autocomplete").hide(), a(".search-close-button").hide())
    }), a(".search-field").bind("autocompleteselect", function(b, c) {
        c.item && a(".search-field").val(c.item.value), a(".search-form").submit()
    })
}(jQuery);
