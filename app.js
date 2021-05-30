const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  //console.log('beforeinstallprompt', event);
  window.deferredPrompt = event;
  divInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
 // console.log('butInstall-clicked');
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
 
  promptEvent.prompt();

  const result = await promptEvent.userChoice;
  console.log(result);
  window.deferredPrompt = null;
  divInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  console.log('appinstalled');
  window.deferredPrompt = null;
});



if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

if (window.location.protocol === 'http:') {
  const requireHTTPS = document.getElementById('requireHTTPS');
  const link = requireHTTPS.querySelector('a');
  link.href = window.location.href.replace('http://', 'https://');
  requireHTTPS.classList.remove('hidden');
}


var employeeData = {9948 : 'AARHONE RIVERAL',9106 : 'AARON BECKLES',9556 : 'ABARAJITHAN SOTHILINGAM',3101 : 'ABDULLA THUFAIL CK',3097 : 'ABDULLAH ISHAQZAI',9032 : 'ABDULLAH KHAWAJA',9858 : 'ABDULSALAM ABDIRAHMAN',9049 : 'ABUBAKAR RASHIDI',9771 : 'AHMED SALIM',9679 : 'ALANDO LEWIS',59 : 'ALITA TORRAVILLE',9947 : 'ALLEYNE PETERKIN',9904 : 'ALONA CAOLENG',9950 : 'AMIRTHALINGAM TAMILPRAGASH',3016 : 'ANA CARVALHO',9789 : 'ANANTHA RANGATHUNGA',9863 : 'ANDREW HAMILTON',9485 : 'ANDREW LOGAN',21 : 'ANGELA RODARO',9870 : 'ANOJAN THANKAVADIVEL',9949 : 'ANTON PARAMANAYAGAM',9613 : 'ARUDCHELVAN THARMALINGAM',9942 : 'ARULEESWARAN KANAPATHIPILLAI',3119 : 'ARUN VIVEKANANDHAM',3081 : 'ASHFAQ AHMED',3079 : 'ASIF ZAFAR',37 : 'ATTILIO LANDOLFI',71 : 'BAHRAM RAFIEI',9847 : 'BASHEETH GULAM MOHAMED',9912 : 'BASHIR IBRAHIM',9707 : 'BAVANI JEYARAJAH',9386 : 'BIBI BAKSH',9388 : 'BIBI GEORGE',2140 : 'BIBI HAKEEM',17 : 'BILL MURER',53 : 'BRENDA MOSHER-VAN-HOOF',9811 : 'BRENDA TOBIN',2060 : 'BRUCE GREIG',3090 : 'BRUCE WHAN',9807 : 'BRYCE FENTON',9631 : 'CALVIN MASON',9217 : 'CASTAN MATERSON',9036 : 'CHARLIE MIFSUD',3087 : 'CHENGLIN QU',48 : 'CHERYL CALBERRY',9680 : 'CHERYL FABIAN',50 : 'DANA MATOS',2116 : 'DANIEL EARLS',3066 : 'DARSHANNAN CHARAN',9010 : 'DECHIRSTO BISHOP',28 : 'DEE MCLELLAN',9886 : 'DELROY HOUSEN',9871 : 'DESMAN MARIYANAYAKAM',2024 : 'DHANASHEWA SOOKNANAN',9864 : 'DIANNE TOPFER',9385 : 'DIMITRI MCKENLEY',9612 : 'DJIBRIL ABDILLAHI',200 : 'DOMINIC PANACCI.',9555 : 'DONALD THOMAS',3103 : 'ELMER AGUILAR',2043 : 'EMIDIO NETO',73 : 'EVON HOOPER',2134 : 'FARAHA ASHFAQ',9633 : 'FLORENCE ASARE-APPIAH',9019 : 'FLORENDO GARCIA',9020 : 'FRAIDON GHSAKHI',60 : 'FRANCESCA DI PIETRO',9857 : 'FRANK RAJANAYAGAM',2062 : 'GAVIN DOVER',2028 : 'GLENROY BARTLEY',9579 : 'GOBINATH PASUPATHI',9565 : 'GUNARATNAM MAKESHWARAN',3091 : 'HEMENKUMAR PATEL',9045 : 'HUGH POTTER',3096 : 'HYDER MEER',9934 : 'IRAN WALLACE',66 : 'ISTUFFER SANCHEZ',2044 : 'JAINARINE RAMPERSAD',9023 : 'JASON JAMES',9667 : 'JASON PATRICK',9856 : 'JEEVA SATHIYENDRA',9868 : 'JERIN VARGHESE',3116 : 'JIM BRAYLEY',74 : 'JIM HOGAN',14 : 'JIM LEO',3121 : 'JISHNU RAJ',9890 : 'JOAN LEE',35 : 'JOHN CHIODI',987722 : 'JOHN FIGUEI#db4938O',9924 : 'JOLENE PENNEY',2128 : 'JONATHAN GREIG',9307 : 'JORDAN EDWARDS',24 : 'JUDY CAREY',3120 : 'JULIAN ZMACK',2143 : 'JYOTI SURI',77 : 'JYOTI VASUDEVA',3124 : 'KAI JOSEPH',9884 : 'KAJANTHAN THIRUCHELVARAJAH',9759 : 'KANTHASAMY KAJENTHIRAN',9803 : 'KAREN WRIGHT',9926 : 'KARLA BARRETO',9734 : 'KARUNAKARAN ARULANANDAM',9397 : 'KASHIF ZAFAR',9805 : 'KAZI ATOL',9937 : 'KEVIN CAMPOS',9108 : 'KHALID MAHMOOD',9599 : 'KILLICK MICHAUD',29 : 'KIM ADAMS',9842 : 'KIRANJIT SOMWARU',9853 : 'KOSYGIN CADAVEZ',9951 : 'LAGHUSHAN SRIRANGANATHAN',3082 : 'LARRY COOK',9951 : 'LATHUSHAN SRIRANGANATHAN',9601 : 'LAYAJAN RATNANATHAN',15 : 'LEE HAYDEMAN-WARNER',9463 : 'LEELY KENNEDY',9662 : 'LERMA VILLARIAS',69 : 'LINDSAY AUSTIN',9774 : 'LINGA PIRSATH',55 : 'LIS QUAIL',9016 : 'LLYOD DOVER',9720 : 'LOGATHAS SHANMUGALINGAM',39 : 'LORIE WUNDERLICH',27 : 'LOUISE BINDER-SEARLE',2073 : 'LUCIA MIGUEL-LOPES',9829 : 'LUXAN VIJAYAKUMAR',2004 : 'LYDIA QUAPONG',9790 : 'MALINDA MADURAPPERUMA',3028 : 'MARIA GARCIA',2133 : 'MARIA SANTOS',9017 : 'MARLON DUNCAN',9835 : 'MELAINE MANJONG',9312 : 'MICHAEL HALL',9306 : 'MICHAEL HARTEN',3054 : 'MICHAEL PANKEWICZ',63 : 'MICHAELA RABUYA',9722 : 'MOHAMOUD AHMED',9674 : 'MURUGESH NATARAJAN',9881 : 'NAINATHAMBI SHAHULHAMID',9919 : 'NANETTE FRANCOIS',9711 : 'NANTHAKUMAR KANAGARATNAM',9219 : 'NESTOR BONILLA',3123 : 'NEVILIN ABRAKAM',9908 : 'NICHOLAS ROBINSON',9848 : 'NIRANJAN KANTHASAMY',9797 : 'NIRANJAN MURUKUPILLAI',9938 : 'NIVETHA RAJIV',2141 : 'NONA SWARNAKUMAR',9325 : 'OMAR AL MADANI',9802 : 'PACKIYALETCH SOMA',42 : 'PAMELA MCLAUGHLIN',9706 : 'PAMILA SIVANETHRA',9946 : 'PARANTHANAM SHANMUGAM',9206 : 'PARASRAM PERSAUD',9883 : 'PARATHEEPAN MURUGANANHAN',9367 : 'PATRICIA HOYTE',68 : 'PAUL BASTOS',2035 : 'PAUL FOX',56 : 'PAULA RAYMAN',6000 : 'PETER QU',9087 : 'PIRASANTH KANAGARATNAM',2034 : 'POOBALARAJAH ARULANANTHAM',9706 : 'PRAMILA SIVANENTHRA',9833 : 'PRATHEEPAN PARAMSOTHYNATHAN',9872 : 'PRATHEESHKUM KIRUVAIRATNAM',9405 : 'RADIKA DAVIES',9931 : 'RAGIKA SAYANTHAN',64 : 'RAMIN BOLOURIAN',9927 : 'RATHIGA JANASEGARAM',9011 : 'REPUDAHAN BUDHRAM',34 : 'RICARDO CARDOSO',2026 : 'ROCCO RUCCIA',9026 : 'RON KEMP',46 : 'ROSEANN GIBSON',9402 : 'ROSECLAIRE BONADIE',2077 : 'ROSS LAURIOLA',9638 : 'SABERA PATEL',3104 : 'SAJIDBHAI VAHORA',9753 : 'SANTHINY SUHAPIRAMAM',3118 : 'SARAS BEZAWADA',3109 : 'SARUN THOMAS',9880 : 'SASIKAANTH VARATHARAJAH',2027 : 'SAYSAVAT PHONSAPHAO',2142 : 'SCOTT MARENGEUR',70 : 'SCOTT MILLER',9867 : 'SEBASTIAN GRANTA',9712 : 'SHAHABUDEN HAJA',3038 : 'SHAHID HUSSAIN',10 : 'SHAHID QURESHI',9047 : 'SHAKIR QURESHI',9923 : 'SHANE MCGRATH',9945 : 'SHANECE STOUTE-FLETCHER',31 : 'SHAUN GORMAN',9843 : 'SHAUN MIROWSKI',9691 : 'SHEREEN PATRAM',9899 : 'SIMON ANTONIPILLAI',2104 : 'SISAVATH NAIYOKSON',9831 : 'SIVARUBAN KUNASEKARALINGAM',9896 : 'SIVASGAR SUBRAMANIWM',9920 : 'SIVATHARGINI THAYAKARAN',9944 : 'SRIKANTHARAJAH KANDIAH',9918 : 'SRIVIDYIDEVI GANENDRALINGAM',9486 : 'STEPHEN AIELLO',43 : 'STEWART WEAVER',9697 : 'SUNETHRA ATPUTHARASA',9417 : 'SURSATEE BISSOONDYAL',9892 : 'SUTHARSAN KANDASAMY',9801 : 'SUTHASINY RAGUTHAS',2019 : 'SYAMALADEVI ARULANANTHAN',9695 : 'THASAYINI AMUTHALAKAN',9058 : 'THAYAKARAN SINNARASA',9943 : 'THINESH  NIMALATHASAN',9686 : 'THIRUMAKAN KANTHASAMY',9034 : 'TIM MAPES',9110 : 'TODD COLE',3099 : 'TONY GALEA',9434 : 'TRAVIS KING',9184 : 'TRISTAN HARRISON',9660 : 'UMAR SHAREEF',3114 : 'VATSAL VAGHELA',9689 : 'VENUGOPAL SANTHANAKRISHNAN',9353 : 'VIDA ACQUAH',9941 : 'VIMALRAJ THAMBITHURAI',9558 : 'VINEGESWARAN SHANMUGALINGAM',9913 : 'VIRAJ KALUBOWILA',3086 : 'VLADIMIR KNEZEVIC',32 : 'WAYNE MENZIE',30 : 'WENDY O"CONNER',2063 : 'WILFRID POUDRIER',3072 : 'WINTSON DOVER',9031 : 'ZAKIR KHAN',9048 : 'ZAKIR QURESHI'};
			


function populateEmployeeName(empID) {
  var x = document.getElementById("empName");
  if(typeof employeeData[(empID*1)] === 'undefined'){
	x.value = "";
  }else{	
	x.value = employeeData[(empID*1)];
  }
  
}

function toggle(source) {
    var checkboxes = document.querySelectorAll('input[class="no"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}

 $(document).ready(function() {
	$('.formSubmit').click(function(e){	
		e.preventDefault();
		
		var count = 0;
		var empName = $('#empName').val();
		if(empName == ""){
			$('#empName').attr('placeholder','Please enter your name');
			count++;
		}else{
			$('#empName').attr('placeholder','');
		}
		
		$('input[type="radio"').each(function() {
			  var cname = $(this).attr("name");
			  if($(this).is(':checked')){
				$('.' + cname).css("color","#000");
			  }else{
				$('.' + cname).css("color","#db4938");
				count++;
			  }			  
		});
		
		
		
		if(count > 17){
			alert("Please make sure you have answer all questions.");	
		
		}else{
			//form submit
			$('button').text("Sending...");
			$.ajax({
				url: 'https://script.google.com/a/malpack.ca/macros/s/AKfycbz8V0BxvsqyLpCl7hEZlday2YZLXMoYCNB3CqTVTQ/exec',
				type: 'get',
				dataType: 'json',
				data: $('#formQuestionnaire').serialize(),
				success: function(data) {
					if(data.result === "success"){
						alert("Thank you, your information has been successfully submitted.");
						$("html, body").animate({scrollTop: 0}, 1000);
						$('#formQuestionnaire')[0].reset();
					}else{
						alert("Something went wrong when submitting the form. Please refresh the page and submit again.");
					}
					$('button').text("Submit");							
				}
			});		
					
		}	
					
	});
 });