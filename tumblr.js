 $(document).ready(function(){
	if(document.URL.indexOf("tumblr.com/reblog/") >= 0){ 
		var submit = document.forms.edit_post.submit();
		setTimeout(submit, 3000 );
	};
 });