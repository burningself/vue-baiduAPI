import $ from "jquery"
export function tChange() {
    $(".box-con").slideDown();
    $(".box-conTitle span").click(function() {
        var index = $(this).index();
        console.log(index);
        $(".box-conContain div").css({ display: "none" }).eq(index).css({ display: "block" });
    });

    $(".box-close").click(function() {
        $(".box-con").slideUp();
    })
}