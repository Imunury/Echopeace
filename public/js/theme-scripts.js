// article page
$('.pc_listgroup').click(function () {
    $('.pc_listgroup').removeClass('active');
    $(this).addClass('active');

    var img = $(this).attr('id');
    var article = 'article';
    var articleId = article + img;

    $('.pc_card_img').addClass('none');
    $('#' + articleId).removeClass('none');
})

$('.pc_page_link').click(function () {
    $('.pc_page_item').removeClass('active');
    $(this).parent().addClass('active');

    var pageNum = $(this).parent().attr('id');
    var page = 'page';
    var pageNumId = page + pageNum;

    $('.pc_page_section').addClass('none');
    $('#' + pageNumId).removeClass('none');
})

// article page_mobile
$('.mobile_listgroup').click(function () {
    $('.mobile_listgroup').removeClass('active');
    $(this).addClass('active');

    var img = $(this).attr('id');
    var article = 'mobile_article';
    var articleId = article + img;

    $('.mobile_card_img').addClass('none');
    $('#' + articleId).removeClass('none');
})

$('.mobile_page_link').click(function () {
    $('.mobile_page_item').removeClass('active');
    $(this).parent().addClass('active');

    var pageNum = $(this).parent().attr('id');
    var page = 'mobile_page';
    var pageNumId = page + pageNum;

    $('.mobile_page_section').addClass('none');
    $('#' + pageNumId).removeClass('none');
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function () {
    $('.toast').toast('show');
});