const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');

// Detects if device is on iOS 
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
//detects if safari browser
const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode() && isSafariBrowser) {
  //this.setState({ showInstallMessage: true });
  //alert('ios');
  divInstall.classList.toggle('hidden', false);
  
  setTimeout(function(){ divInstall.classList.add('hidden')}, 3000);
}


window.addEventListener('beforeinstallprompt', (event) => {
  //console.log('beforeinstallprompt', event);
  window.deferredPrompt = event;
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

function toggle(source) {
    var checkboxes = document.querySelectorAll('input[class="no"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}

function checkEmpNumber(){
var empNumber = $('#empNo').val();
	if(/^\d*$/.test(empNumber)){
		$('.empNumberMsg').css('display','none');
	}else{
		$('.empNumberMsg').css('display','block');
	}

}

$(document).ready(function() {	

	$('.formReset').click(function(){
		$('#formQuestionnaire')[0].reset();
		$('.empNumberMsg').css('display','none');
	});
	
	$('.formSubmit').click(function(e){	
		e.preventDefault();
		
		var count = 0;
		var empName = $('#empName').val();
		var empNo = $('#empNo').val();
		
		if(empName == ""){
			$('#empName').attr('placeholder','Please enter your name');
			count++;
		}else{
			$('#empName').attr('placeholder','');
		}
		if(!(/^\d*$/.test(empNo))){
			$('#empNo').attr('placeholder','Please enter your employee number');
			count++;
		}else{
			$('#empNo').attr('placeholder','');
		}
		var countYes = 0;
		$('input[type="radio"').each(function() {
			  var cname = $(this).attr("name");
			  if($(this).is(':checked')){
				$('.' + cname).css("color","#000");
				
				if($(this).val() == "yes"){
					countYes++;
				}
				
			  }else{
				$('.' + cname).css("color","#db4938");
				count++;
			  }			  
		});
		
		
		
		if(count > 17){
			alert("Please make sure you have answer all questions.");	
		
		}else{
			//form submit
			$('.formSubmit').text("Sending...");
			if(countYes > 0){
				alert("You have answered YES to "+countYes+" of the questions, do not enter Malpack facility or exit the building if you are at work and/or contact Malpack Hotline : 905-426-2011.");
				
			}
			$.ajax({
				url: 'https://script.google.com/a/malpack.ca/macros/s/AKfycbz8V0BxvsqyLpCl7hEZlday2YZLXMoYCNB3CqTVTQ/exec',
				type: 'get',
				dataType: 'json',
				data: $('#formQuestionnaire').serialize(),
				success: function(data) {
					if(data.result === "success"){
						$('#formQuestionnaire')[0].reset();
						$('.msg').css("color","#000");						
						$("html, body").animate({scrollTop: 0}, 1000);
						
						alert("Thank you, your information has been successfully submitted.");					
					}else{
						alert("Something went wrong when submitting the form. Please refresh the page and submit again.");
					}
					$('.formSubmit').text("Submit");							
				}
			});	
					
		}	
					
	});
	
	$(window).resize(function(){
		var wd = $(window).width();		
		
		if(wd <= 460){
			$('.overlay').addClass('bottomPopup');
			$('.overlay').removeClass('topPopup');
		}else{
			$('.overlay').addClass('topPopup');
			$('.overlay').removeClass('bottomPopup');
		}
	}).resize();
 });
