//ez itt a main app , ez a feladat elős fele.
$(document).ready(function() {
    var result = document.getElementById('result')
    var sub = document.getElementById('sub')
    sub.addEventListener('click', function(event){
        event.preventDefault();        
        var inp = $('input').val();
        var countl = reverseText(inp)    
        $('#result').append(countl)
        //ajax post request küldési forma:
        $.ajax({
            url: '/count_letters',
            data: JSON.stringify(inp),
            type: 'POST',
            success: function(data) {
                
                alert(data);
            }
        })
            
        })
    })

//ez itt a reverse string javascriptben:
   var reverse = function(data) {
       output = "";
       for(var i = data.length -1; i >= 0; i--) {
           output = data[i]
       }
       return data[i]

   }
  
//ez itt a betű számólós dictionary javascriptben:
    var makeDict = function(data) {
        var dict = {};
        for(var i = 0; i < data.length; i++) {
            if(dict.hasOwnProperty(data[i])) {
                dict[data[i]] += 1 
            } else {
                dict[data[i]] = 1        
            }
        return dict    
        }
    }
  