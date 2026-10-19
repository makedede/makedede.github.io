$(document).ready(function(){
    var yearList = $('#list').html();
    var yearTags = $('#tag').html();
    $("[name='order']").change(function(){
        if($(this).val()=='type'){
            var journal_str = '';
            var conference_str = '';
            var phd_str = '';
            $("div[class*=Journal]").each(function(i,k) {
                journal_str += $(k).prop("outerHTML");
            });
            $("div[class*=Conference]").each(function(i,k) {
                conference_str += $(k).prop("outerHTML");
            });
            $("div[class*=PHD]").each(function(i,k) {
                phd_str += $(k).prop("outerHTML");
            });
            var j_str = '<div class="container" id="Journal"><div class="col-sm-12"><h2>● Journal Articles</h2></div></div>';
            var c_str = '<div class="container" id="Conference"><div class="col-sm-12"><h2>● Conference Articles</h2></div></div>';
            var p_str = '<div class="container" id="PHD"><div class="col-sm-12"><h2>● PhD Theses</h2></div></div>';
            
            var list_str = '\
                            <a href="#Preprints">Preprints</a>\
                            &nbsp;|&nbsp;\
                            <a href="#Journal">Journal Articles</a>\
                            &nbsp;|&nbsp;\
                            <a href="#Conference">Conference Articles</a>\
                            &nbsp;|&nbsp;\
                            <a href="#PHD">PhD Theses</a>\
                        ';
            $('#tag').empty().append(list_str);
            $('#list').empty().append(j_str+journal_str+c_str+conference_str+p_str+phd_str);
        }else{
            $('#tag').html(yearTags);
            $('#list').html(yearList);
        }
    });
});