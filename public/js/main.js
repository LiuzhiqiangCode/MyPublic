$(function(){
    $('#delete').click(function(){
        var id = $(this).data("id");
        var url = "/posts/" + id;
        $.ajax({
            url:url,
            method:"DELETE",
            success:function(res){
                if(res.code === 0){
                    alert("删除成功");
                    location.href = "/posts";
                }
            },
            error:function(){
                alert("删除失败");
            }
        })
    })
})