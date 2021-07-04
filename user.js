function getUserdetails
{
	$.ajax(
	{
		url:http://demo6211930.mockable.io/,
		method:'GET',
		datatype:'html',
		success:function(result);
		{
			document.write(result);
		},
		error:function(err,msg)
		{
			alert(msg)
		}
	});
}