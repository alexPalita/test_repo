
$(function(){

// NOTE: script data modificarii
  function myFunction() {
    var dataModificata = document.getElementById('date');
    var data = new Date(document.lastModified);
    var Luna = data.getMonth()+ 1;
    var Ziua = data.getDate();
    var Anul = data.getFullYear();
    var Ora = data.getHours();
    var Minute = data.getMinutes();
    var Secunde = data.getSeconds();

    dataModificata.textContent = Ziua + "-" + Luna + "-" + Anul + " " + Ora + ":" + Minute + ":" + Secunde;
  }

  myFunction();

// NOTE: script Nr items
  function $modifyItemNumber() {
    var $itemNr = $('#item-number');
    var $nrOfItems = $('li:last').index();
    $itemNr.text($nrOfItems + 1);
  };


  // NOTE: script add Item
  var $sample = $('.sample').detach();
  var $newItemButton = $('#addItemArea');
  var $addInput = $('#addInput');


  function $red() {
   $('.sample').addClass('display');
  };

  function $green() {
   $('.display').addClass('list-item');
  };


  $newItemButton.on('submit', function(e) {
    e.preventDefault();
    var $clonedItem = $sample.clone();
    function $white() {
      $('ul').append($clonedItem);
      $clonedItem.find('label').text($addInput.val());
      $addInput.val('');
    };
    setTimeout($white, 100);
    setTimeout($red, 100);
    setTimeout($green, 250);
    setTimeout($modifyItemNumber, 250);
    setTimeout(myFunction, 250);
  });



  // NOTE: clearAll Button

  $('body').on('click', '#clear', function(ev2) {
   ev2.preventDefault();
   var $listItems = $('ul li');
   var $listLenght = $listItems.length;
   var x = $listLenght;
   var $timeXitems = $listLenght*250;
   var cleanseList = setInterval(removeEachListItem, 250);
   function removeLi() {
     $('ul').html('');
   };
   function $stergePeRand() {
     clearInterval(cleanseList);
   }
   function removeEachListItem() {
     $listItems.eq(x).addClass('removed');
     x--;
     if($listLenght == x) {
       $stergePeRand;
       x=0 }
   };
   setTimeout(removeEachListItem, 100);
   setTimeout(removeLi, $timeXitems);
   setTimeout($modifyItemNumber, $timeXitems);
   setTimeout(myFunction, $timeXitems);
 });


 $(document).on('change','ul .itemName', function() {
  var $Check = $(this).parents('form');
  if ($(this).is(':checked')) {
    $Check.addClass('verde');
  } else {
    $Check.removeClass('verde');
  }
});

 // $('ul .itemName').change(function() {
 // var $Check =$(this).closest('form');
 // var $closestLabel = $Check.find('label');
 //
 //    if($(this).is(':checked'))   {
 //     var $text = $closestLabel.text();
 //     $Check.addClass('checked');
 //     $closestLabel.html('<del>' + $text + '</del>');
 //     } else {
 //     var $closestDel = $Check.find('del');
 //     var $delText = $closestDel.text();
 //     $Check.removeClass('checked');
 //     $closestLabel.text($delText);
 //     }
 //
 //     $modifyItemNumber();
 //     myFunction();
 //
 // });

 // NOTE: script close Button
 $('body').on('click', '#closeButton', function(ev1) {
   ev1.preventDefault();
   var $removeItem = $(this).closest('li');
   function $clearHtmlTag() {
     $removeItem.remove();
   };
   function $removeVisiblity() {
     $removeItem.addClass('removed');
   };
   setTimeout($removeVisiblity,100)
   setTimeout($clearHtmlTag,250);
   setTimeout($modifyItemNumber,250);
   setTimeout(myFunction, 250);
 });


// NOTE: Buton Edit
 var $modal = $('.overlay *');
 var $overlayModal= $('.overlay').add($modal);

 function $overlay() {
  $('.overlay').addClass('display');
 };

 function $addListItem() {
   $overlayModal.addClass('list-item');
 };

 $('body').on('click', '#editButton', function(ev2) {
   ev2.preventDefault();
   var $clickedItem = $(this).closest('li');
   $clickedItem.addClass('editing')
   $('.modalEdit').find('input').val($clickedItem.find('.item').text());
   setTimeout($overlay, 200);
   setTimeout($addListItem, 220);
   setTimeout($modifyItemNumber, 221);
   setTimeout(myFunction, 221);

 });


// NOTE: script modalEdit Cancel button

 function $fadeOutModal() {
   $overlayModal.addClass('removed');
 };
 function $changeDisplayModal(){
   $overlayModal.removeClass('display');
   $overlayModal.removeClass('list-item');
   $overlayModal.removeClass('removed');
 };

 $('.overlay, #Cancel').on('click', function(ev3) {
   ev3.preventDefault();
   var $editing = $('.editing');
   function $removeClassEditing() {
     $editing.removeClass('editing');
   };
   setTimeout($fadeOutModal,100)
   setTimeout($changeDisplayModal,250);
   setTimeout($removeClassEditing,250);
   setTimeout(myFunction, 250);
  });

// NOTE: scrip modalEdit Save button
 $('.overlay, #Save').on('click', function(ev4) {
   ev4.preventDefault();
   var $editedItem = $('.modalEdit').find('#changeItem').val();
   var $editing = $('.editing');
   var $thisText = $('.editing').find('.item');
   function $chengeEditedText() {
     $thisText.text($editedItem);
   }
   function $removeClassEditing() {
     $editing.removeClass('editing');
   };
   setTimeout($chengeEditedText,150)
   setTimeout($fadeOutModal,150)
   setTimeout($changeDisplayModal,250);
   setTimeout($removeClassEditing,250);
   setTimeout(myFunction, 250);
  });

 $('.modalEdit').on('click', function(event){
        event.stopPropagation();
  });

 $(".overlay *").keypress(function(event2){
     if ( event2.which == 13 ) {
        event2.preventDefault();
  }
 });

});
