function formSelect2(){
  $('select.select2').each(
    function(){
      var selectedLang = $("html").attr('lang') || 'ca';
      $(this).select2({
        language: selectedLang
      });
    }
  );
}
