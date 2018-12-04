function myFunction() {


  if(document.getElementById("dynatable")){
      var elem = document.getElementById("dynatable");
  }

  if (typeof elem != 'undefined')
  {
    elem.parentNode.removeChild(elem);
  }


      var body = document.body;
       dynatable  = document.createElement('table');
       dynatable.style.width = "60%";
       dynatable.style.margin.left = "20px";
       dynatable.id = "dynatable";



    var horizontal_num_one = document.getElementById('first_horizontal_num').value;
    var horizontal_num_two = document.getElementById('second_horizontal_num').value;
    var vertical_num_one = document.getElementById('first_vertical_num').value;
    var vertical_num_two = document.getElementById('second_vertical_num').value;
    // at this point, have the dimensions of the table.


    if (+horizontal_num_two - +horizontal_num_one > 500 || +vertical_num_two - +vertical_num_one > 500)
    {
      el.innerHTML = "please enter numbers with a difference of 500 or less";
      return;
    }
    else if(+horizontal_num_two- +horizontal_num_one <= 0 || +vertical_num_two - +vertical_num_one <= 0)
    {
      return;
    }

    var button = document.getElementById('processbutton');
    //button.disabled = true;
    // if vertical_num_one > vertical_num_two) switch them
    var c = 0;
    for (var i = vertical_num_one - 1, c = 0; i <= vertical_num_two; i++, c++)
    {
        var row = dynatable.insertRow(0);
        if (i == vertical_num_two) //top row
        {
          row.style.backgroundColor= "red";
            for (var j = (horizontal_num_one -1); j <= horizontal_num_two; j++)
            {
              var cell = row.insertCell();
              if (j != horizontal_num_one -1) //first iteration for blank square
              cell.appendChild(document.createTextNode(j));

            }

        }
          else {
                  for (var j = horizontal_num_one - 1; j <=horizontal_num_two; j++)
                    {
                      var vertical_value = +vertical_num_two - +c;
                      var horizontal_value = + horizontal_num_two - +c;
                        if (j == (horizontal_num_one -1)) // vertical title cell
                        {
                            var cell = row.insertCell();
                            cell.style.backgroundColor= "red";
                            cell.appendChild(document.createTextNode(+vertical_num_two - +c));

                        }
                        else
                        {
                            var count = +j * +vertical_value;
                            var cell = row.insertCell();
                            cell.appendChild(document.createTextNode(count));
                          }
                      }
                    }
    }

    body.appendChild(dynatable); //add table to html





    //update the sliders
    var horSliderOne = document.getElementById('horizontal_num_one_slider');
    horSliderOne.value = +horizontal_num_one;

    var horSliderTwo = document.getElementById('horizontal_num_two_slider');
    horSliderTwo.value = +horizontal_num_two;

    var verSliderOne = document.getElementById('vertical_num_one_slider');
    verSliderOne.value = +vertical_num_one;

    var verSliderTwo = document.getElementById('vertical_num_two_slider');
    verSliderTwo.value = +vertical_num_two;

    //update the tabs


  }

  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var tabelem = document.getElementById(tabName);
    tabelem.style.display = (tabelem.style.display == "none") ? "block" : "none";

    var elem = document.getElementById("dynatable");
    elem.style.display = (elem.style.display == "table") ? "none" : "table";


}

function saveTable(){

    if(document.getElementById("dynatable")){

      var new_tab = document.createElement('button');
      new_tab.id = "new_buttons";
      new_tab.createTextNode("blah");
      newtab.appendChild(document.createTextNode("hello"));
        var elem = document.getElementById("dynatable");
        elem.style.backgroundColor = "green";
        var elem2 = document.getElementById("London");
        if(elem.style.display == "table")
        {
        elem2.appendChild(elem.cloneNode(true));
       //document.body.appendChild(elem.cloneNode(true));
     }


          }
  }

  $('#processbutton').on('click', function() {
      $("#infoForm").valid({

        rules:{
          first_horizontal_num: {
            required: true,
            minlength: 1,
            digits: true
          },
          second_horizontal_num: {
            required: true,
            minlength: 1,
            digits: true
          },
          first_vertical_num: {
            required: true,
            minlength: 1,
            digits: true
          },
          second_vertical_num: {
            required: true,
            minlength: 1,
            digits: true
          },
        },
        messages: {
          first_horizontal_num: {
            required: "this field is required",
            digits: "please ensure your input is a digit",
            minlength: "minimum input length must be one or greater"
          },
          second_horizontal_num: {
            required: "this field is required",
            digits: "please ensure your input is a digit",
            minlength: "minimum input length must be one or greater"
          },
          first_vertical_num: {
            required: "this field is required",
            digits: "please ensure your input is a digit",
            minlength: "minimum input length must be one or greater"
          },
          second_vertical_num: {
            required: "this field is required",
            digits: "please ensure your input is a digit",
            minlength: "minimum input length must be one or greater"
          },
        }
      });
  });
