var FEXR_key,FEXR_c,FEXR_a,FEXR_amt,FEXR_panel,FEXR_button,FEXR_hd,FEXR_rs,FEXR_bg,FEXR_border,FEXR_ttop,FEXR_tbottom,FEXR_cnr,FEXR_font,FEXR_size,a=FEXR_size,b=250;switch(a){case 120:b=240;break;case 125:a=120;b=240;break;case 200:b=a=200;break;case 728:b=90;break;default:b=250}
document.getElementById("FEXRdiv").innerHTML='<iframe src="//www.foreignexchangeresource.com/currency-converter.php?'+'c='+ FEXR_c+'&a='+ FEXR_a+'&amt='+ FEXR_amt+'&panel='+ FEXR_panel+'&button='+ FEXR_button+'&size='+ FEXR_size+'&headertxtcolor='+ FEXR_hd+'&resulttxtcolor='+ FEXR_rs+'&bgcolor='+ FEXR_bg+'&bordercolor='+ FEXR_border+'&titleboxtop='+ FEXR_ttop+'&titleboxbottom='+ FEXR_tbottom+'&corners='+ FEXR_cnr+'&fontstyle='+ FEXR_font+'&k='+ FEXR_key+'" width="'+ a+'" height="'+ b+'" border="0" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="No"></iframe>';