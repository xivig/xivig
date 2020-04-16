import $ from 'jquery';
class Panelinterface{
}

$(function () {
    $(window).resize(function () {
        let windowHeight = $(window).height();
        $("#content-left").height(windowHeight - 175 + "px");
        $("#content-left_area").height(windowHeight - 205 + "px");
        $("#content-right").height(windowHeight - 175 + "px");
        $("#content-right_area").height(windowHeight - 205 + "px");
    });

});

export default Panelinterface;