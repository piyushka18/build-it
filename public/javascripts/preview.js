$(".preview").on("mouseenter", function() {
    var cover = $(this).next();
    cover.find(".preview-cover-options").show();
    cover.find(".preview-cover-confirm").hide();
    cover.toggle();
    cover.one("mouseleave", function() {
        cover.fadeToggle(200, "linear");
    });
});

$(".preview-cover").on("click", function(e){
    var $target = $(e.target);
    if ($target.is("i.fa-trash-o") || $target.is("a.confirm-no")){
        $(this).find(".preview-cover-options").toggle();
        $(this).find(".preview-cover-confirm").toggle();
    }
    else if ($target.is("a.confirm-yes")) {
        var $wrap = $(this).parent();
        $.ajax({
            url: "user/pages/delete",
            type: "DELETE",
            data: JSON.stringify({"pageid": $wrap.attr("data-pageid")}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(response) {
                if (response.status === "ok") {
                    $wrap.fadeToggle();
                }
            },
        });
    }
});
