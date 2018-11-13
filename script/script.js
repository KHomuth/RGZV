$(document).ready(function()
{
    $('#main').load('content/home.html');

    $('#navigation a').click(function(e)
    {
        e.preventDefault();
        $('#main').load(e.target.href);
    });
});