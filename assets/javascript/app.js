var questions = [{
  question: "How many continents exist on our planet?",
  Ans1: 4,
  Ans2: 6,
  Ans3: 7,
  Answer: 7
}, 
{
  question: "What is the longest river in the Americas?",
    Ans1: "Nile",
    Ans2: "Amazon",
    Ans3: "Mississippi",
    Answer: 'Amazon'
},
{
  question: "What is the longest river in the world?",
    Ans1: "Nile",
    Ans2: "Amazon",
    Ans3: "Yangtze",
    Answer: 'Nile'
},  
{
  question: "What is the largest country in the world?",
    Ans1: "United States",
    Ans2: "Brazil",
    Ans3: "Russia",
    Answer: 'Russia'
},

{
  question: "What is the smallest country in the world?",
    Ans1: "Monaco",
    Ans2: "Vatican City",
    Ans3: "Liechtenstein",
    Answer: 'Vatican City'
},
{
  question: "Which is the largest ocean in the world?",
    Ans1: 'Pacific',
    Ans2: "Arctic",
    Ans3: "Atlantic",
    Answer: 'Pacific'
},
{
  question: "How many oceans exist on our planet?",
    Ans1: 5,
    Ans2: 9,
    Ans3: 7,
    Answer: 5
},
{
  question: "Which country has the largest population in the world?",
    Ans1: "China",
    Ans2: "India",
    Ans3: "Japan",
    Answer: 'China'
},
{
  question: "The highest mountain in the world, Mt. Everest, is located on the border of which two countries?",
    Ans1: "Bhutan and Nepal",
    Ans2: "Tibet and Nepal",
    Ans3: "Tibet and India",
    Answer: 'Tibet and Nepal'
},
{
  question: "What is the largest desert in the world?",
    Ans1: "Shara Desert",
    Ans2: "Antarctic Desert",
    Ans3: "Gobi Desert",
    Answer: 'Antarctic Desert'
}
];



  var makeInterval;
  var countDown = 31;
  var i = 0;
  var right = 0;
  var wrong = 0;


    // $('#btn').on('click', function(){
    //     $('#btn').off();
    //   $('#main-area').empty();
    //   htmlAdd();
    //   gotIt();
    // });
 
    htmlAdd();
    gotIt();

  function gotIt(){
        makeInterval =  setInterval(count,1000);
        function count(){
          countDown--;
          console.log(countDown);
          
          if(countDown === 0){
            clearInterval(makeInterval);
            console.log('help me please');
            clearInterval(makeInterval);
            countDown = 31;
            i++;
        setTimeout(function(){
       
          wrong++;
          nextQuestion(i);
          gotIt();

         }, 3000);
        }  
      $('#timer').html(countDown);
      }
    }
      nextQuestion(i);


$('#main-area').on('click','.ans' ,function(){

   if($(this).data().ans === questions[i].Answer){
       
        console.log($(this).data().ans);
        clearInterval(makeInterval);
        countDown = 31;
        right++;
        i++;
        $('#main-area').html('<h1>Correct!!!<h1>');
          $('#main-area').empty();
          htmlAdd();
      setTimeout(function(){
        
        nextQuestion(i);
        gotIt();

      }, 3000);
    
    }else{
    
      console.log($(this).data().ans);
        console.log('help me please');
        clearInterval(makeInterval);
        countDown = 31;
        i++;
        setTimeout(function(){
        // $('#display').empty();
          wrong++;
          nextQuestion(i);
        gotIt();

      }, 3000);
      }
  });

  $('#main-area').on('mouseenter','.ans',function(){
      $(this).css("background", "#B0FEB8");
      $(this).css("border","solid #29B724");
    });
    
    $('#main-area').on('mouseleave','.ans',function(){
      $(this).css('background', 'white');
      $(this).css("border","none");
      
    });

 
    function htmlAdd(){
      var timer = $('<h2>').attr('id','timer');
      var question = $('<p>').attr('id','question');
      var Ans1 = $('<div>').attr({id: "Ans1", class: "ans"});
      var Ans2 = $('<div>').attr({id: "Ans2", class: "ans"});
      var Ans3 = $('<div>').attr({id: "Ans3", class: "ans"});
      
      timer.appendTo('#main-area');
      question.appendTo('#main-area');
      Ans1.appendTo('#main-area');
      Ans2.appendTo('#main-area');
      Ans3.appendTo('#main-area');
    }

    function nextQuestion(i){
    $('#question').html(questions[i].question);
        $('#Ans1').html(questions[i].Ans1).attr('data-ans',questions[i].Ans1);
        $('#Ans2').html(questions[i].Ans2).attr('data-ans',questions[i].Ans2);
        $('#Ans3').html(questions[i].Ans3).attr('data-ans', questions[i].Ans3);
    }