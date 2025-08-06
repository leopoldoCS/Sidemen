/*THIS FILE CONTROLS THE CALENDAR DATE SELECTOR POPUP*/

//OPENS WINDOW
function openCalendar(price, pageLink){
        perNight= price;
        urlBack = pageLink;
        document.getElementById("window").style.display="block";
      }

        /*-----------------------PRICES FOR SINGLE STAY CALULATED BY CALENDAR----------------------------*/
      let numOfDays=[];
      const tax=0.10;

      let perNight = null;
      urlBack = '';

      


      //USE FLATPICKR
      if(document.getElementById("dates")){
        flatpickr("#dates",{
         mode:"range", 
         dateFormat:"Y-m-d", 
         onChange: function(dates){
        numOfDays = dates;
        }
      });
      }
      

      function confirmVacation(){
        if(numOfDays.length ==2 && perNight !== null){
          let days = Math.ceil((numOfDays[1]-numOfDays[0])/(1000*60*60*24));
          let stayPrice = perNight * days;
          let taxOfTotal = stayPrice * tax;
          let total = stayPrice + taxOfTotal;

          localStorage.setItem("stayPrice", stayPrice.toFixed(2));
          localStorage.setItem("taxOfTotal", taxOfTotal.toFixed(2));
          localStorage.setItem("total", total.toFixed(2));

          window.location.href = urlBack;
        }else{
          alert("CHECK IN AND CHECK OUT DATE MUST BE SELECTED");
        }
      }
      