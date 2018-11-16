function myFunction() {



    var el = document.getElementById('h1');
    el.innerHTML = 'Success';


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

    var button = document.getElementById('processbutton');
    button.disabled = true;
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
                        if (j == (horizontal_num_one -1)) // verticle title cell
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

  }
