(function($){

    
    $('.depth1 > li').hover(
        function(){
            $(this).find('.depth2')
            .stop().slideDown(700)
        },
        function(){
            $(this).find('.depth2')
            .stop().slideUp(500)
        }
    )


        $('#kimBox').load('main.html')

        $('.topmenu > a').on('click', function(e){
            e.preventDefault()
            var url = $(this).attr('href')
            $('#kimContainer').remove()
            $('#kimBox').load(url)
        })
        //로고부분
                // $('.h1Nav > h1').on('click', function(e){
        //     e.preventDefault()
        //     $('#kimContainer').remove()
        //     $('#kimBox').load('main.html')
        // })
        $('.h1Nav > h1 > a').on('click', function(e){
            e.preventDefault()
            var url = $(this).attr('href')
            $('#kimContainer').remove()
            $('#kimBox').load(url)
        })


})(jQuery)