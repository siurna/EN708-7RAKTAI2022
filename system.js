$(document).ready(function(){
    // Titles
    $(document).prop('title', '7️⃣🔑');

    // Answer field
    $('#Answer').attr('hint', '').val('').attr('placeholder', 'Atsakymas').removeClass('placeholder');

    // Disable answer field on intro/outro levels
    if ($("#accordionExample, .block-answer").length > 0 && $(".keep-answerbox").length === 0)
    {
        $('body').addClass('blockAnswer');
        $("#Answer").attr('disabled', 'disabled');
    }

    // Change game title
    $("#lblGameTitle").html('#KPTG: <strong>Brainstorm for Ukraine</strong>');

    // Change level title
    if ($(".content > h2:first-of-type").length > 0)
    {
        var newContent = $(".content > h2:first-of-type").html().replace(/\[(.+?)\]/, '<span class="sub-level">$1</span>');
        $(".content > h2:first-of-type").html(newContent);
    }

    // Change favicon
    $('link[rel="shortcut icon"]').attr('href', 'https://d1.endata.cx/data/games/74028/system--flag.png');

    // Fix bonus @ kulka
    if ($('.bonus-bullet').length > 0)
    {
        $('#BonusAnswer, label[for="BonusAnswer"]').remove();
    }
});