import $ from 'jquery'
import jQuery from 'jquery'
import foundation from 'foundation-sites/dist/js/npm'

$(function () {
    $(document).foundation();
    $('#search').on('click',()=>{
        console.log($('#search').attr('data-open'));
    })
});