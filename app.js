
const owl = $('.owl-carousel');
owl.owlCarousel({
    center:true,
    loop:true,
    margin:20,
    items:5,
});
$('.sliderbtn--prew').click(function() {

    owl.trigger('prev.owl.carousel', );
})
$('.sliderbtn--next').click(function() {
    owl.trigger('next.owl.carousel');
})


