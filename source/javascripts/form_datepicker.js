function formDatePicker(){
  $('[data-datepicker]').each(
    function(){
      var customStartDate = $(this).attr('data-startdate') || '',
      selectedLang = $("html").attr('lang') || '';
      $(this).fdatepicker({
    		initialDate: customStartDate,
    		format: 'dd-mm-yyyy',
        language: selectedLang,
    		disableDblClickSelection: true,
    		leftArrow:'<<',
    		rightArrow:'>>'
    	});
    }
  );
}
