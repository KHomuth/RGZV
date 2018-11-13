$(document).ready(function()
{   
    var startImg = document.getElementById('slides');
    var imgs = ["images/begruess_1_26-07-14.jpg", "images/IMG_3667_Ausschnitt_kl.jpg", "images/IMG_3668_Ausschnitt_kl.jpg", "images/IMG_3669_Ausschnitt_kl.jpg"];
    var imgIndex = 1;

    $('#home').focus();
    $('#main').load('content/home.html');

    $('#navigation a').click(function(e)
    {   
        var $active = this;

        e.preventDefault();
        /* $(this).addClass("active"); */
        $('#main').load(e.target.href);
    });

    var btn = $('body').closest('#test');
    btn.on("click", function()
    {
        console.log("hallo");
    });

});

/* $(document).on("click", "#test", function()
{
    var startImg = document.getElementById('slides');
    var imgs = ["images/begruess_1_26-07-14.jpg", "images/IMG_3667_Ausschnitt_kl.jpg", "images/IMG_3668_Ausschnitt_kl.jpg", "images/IMG_3669_Ausschnitt_kl.jpg"];
    var imgIndex = 1;

    startImg.setAttribute("src", imgs[imgIndex]);
    imgIndex++;
    if (imgIndex > imgs.length) {imgIndex=0};
    console.log(imgIndex);
}); */