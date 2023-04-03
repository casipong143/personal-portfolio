var cube_clicked = false;
var sidebar_open = false;
var content_id;

           $(document).ready(function(){
            
            /* --- THIS AREA FOR CLOSING CLICK EVENT OF PARENT CUBE AND HIDE CHILD CUBE ---- */

            $(".button").click(function(){
              cube_clicked = false;
              setTimeout(function(){
                        
                $(".cube1").css("left", "0px");
                $(".cube1").css("top", "120px");
                $(".cube2").css("right", "0px");
                $(".cube2").css("top", "70px");
                $(".cube3").css("left", "0px");
                $(".cube3").css("bottom", "-20px");
                $(".cube4").css("right", "0px");
                $(".cube4").css("bottom", "30px");
              },300);

              setTimeout(function(){
                $(".link").addClass("d-none");
              }, 3000);

              $(".button").css("top", "0");

              
            });

            /* --------- END OF CLOSE EVENT FUNCTION ------*/

            /* ---- THIS AREA IS FOR CUBE CLICK EVENT ----- */

            $(".cube-front").click(function(){
                $(".cube1").css("left", "-100px");
                $(".cube1").css("top", "-30px");
                $(".cube2").css("right", "-90px");
                $(".cube2").css("top", "-80px");
                $(".cube3").css("left", "-200px");
                $(".cube3").css("bottom", "-20px");
                $(".cube4").css("right", "-200px");
                $(".cube4").css("bottom", "30px");
                $(".link").removeClass("d-none");
                $(".button").css("top", "220px");
                cube_clicked = true;
                console.log(cube_clicked);
            });

           /* ------- END OF CUBE CLICK EVENT FUNCTION ----- */

            /* ----- THIS AREA IS FOR CUBE HOVERING -------- */

              $(".cube-front").hover(function(){

              if (cube_clicked == false){
                
                  $(".link").removeClass("d-none");
              
                  $(".top").css("background-color", "#b96df2");
              
                setTimeout(function(){
                  $(".cube1").css("left", "0");
                  $(".cube1").css("top", "60px");
                  $(".cube2").css("right", "0");
                  $(".cube2").css("top", "10px");
                  $(".cube3").css("left", "0");
                  $(".cube3").css("bottom", "40px");
                  $(".cube4").css("right", "0");
                  $(".cube4").css("bottom", "90px");
              
                },500);

                setTimeout(function(){
                
                  $(".cube1").css("left", "50px");
                  $(".cube1").css("top", "50px");
                  $(".cube2").css("right", "50px");
                  $(".cube3").css("left", "50px");
                  $(".cube3").css("bottom", "10px");
                  $(".cube4").css("right", "50px");
                  $(".cube4").css("bottom", "50px");

                },1000);

              }
              
            }, function(){
              
                if (cube_clicked == false){
                  $(".top").css("background-color", "#222");

                     setTimeout(function(){
                        $(".cube1").css("left", "0");
                        $(".cube1").css("top", "60px");
                        $(".cube2").css("right", "0");
                        $(".cube2").css("top", "10px");
                        $(".cube3").css("left", "0");
                        $(".cube3").css("bottom", "40px");
                        $(".cube4").css("right", "0");
                        $(".cube4").css("bottom", "90px");
                        
                     }, 100);

                     setTimeout(function(){
                        
                        $(".cube1").css("left", "0px");
                        $(".cube1").css("top", "120px");
                        $(".cube2").css("right", "0px");
                        $(".cube2").css("top", "70px");
                        $(".cube3").css("left", "0px");
                        $(".cube3").css("bottom", "-20px");
                        $(".cube4").css("right", "0px");
                        $(".cube4").css("bottom", "30px");
                    },500);

                       setTimeout(function(){
                        $(".link").addClass("d-none");
                     },1000);
                }
              });

              /* ------- END OF CUBE HOVERING EVENT ------- */

              /* ----- THIS AREA IS FOR OPENING AND CLOSING SIDEBAR NAVIGATION ----- */

               $(".cube-link").click(function(){
                if (cube_clicked == true){
                  $("#sidebar").css("width", "100%");
                  $(".button").addClass("d-none");
                  sidebar_open = true;
                  $(".contact-nav").css("z-index", "-1");
                    
                }
              });

              $(".close-button").click(function(){
                $("#sidebar").css("width", "0");
                $(".button").removeClass("d-none");
                sidebar_open = false;
                $(".contact-nav").css("z-index", "5");
                setTimeout(function(){
                $(content_id).addClass("d-none");
                }, 300);
              });

              /* ------------------ END OF SIDEBAR MANIPULATION ---------------------*/


              
             /* ----- THIS AREA IS FOR CUBE NAVIGATION CLICK EVENTS ----- */

              var first_cube = $(".cube1");
              var second_cube = $(".cube2");
              var third_cube = $(".cube3");
              var fourth_cube = $(".cube4");
              var home = $("#home");
              var about = $("#about");
              var portfolio = $("#portfolio");
              var services = $("#services");

              var first_gradient = "linear-gradient(to right, #006269, #00f08c)";
              var second_gradient = "linear-gradient(to right, #004469, #02f0d8)";
              var third_gradient = "linear-gradient(to right, #4d005e, #f000a8)";
              var fourth_gradient = "linear-gradient(to right, #800006, #f5003d)";

              function cube_navigation(cube, content, color){
                cube.click(function(){
                  if (cube_clicked == true){
                    setTimeout(function(){
                      content.removeClass("d-none");
                    },250);
                    content_id = content;
                    
                    $(".line").css("background", color);
                  }
              });
              }

              cube_navigation(first_cube, home, first_gradient);
              cube_navigation(second_cube, about, second_gradient);
              cube_navigation(third_cube, portfolio, third_gradient);
              cube_navigation(fourth_cube, services, fourth_gradient);

              /* ------------ END OF NAVIGATION ----------------- */
          
              /*THIS AREA IS FOR CARD HOVERING ---- SERVICES SECTION*/

              var first_card = $("#first-card");
              var second_card = $("#second-card");
              var third_card = $("#third-card");
              var first_card_content = $("#first-card-content");
              var second_card_content = $("#second-card-content");
              var third_card_content = $("#third-card-content");
              var first_card_text = $("#first-card-text");
              var second_card_text = $("#second-card-text");
              var third_card_text = $("#third-card-text");

             function card_hover(card, card_text, card_content){
              
              card.hover(function(){
                card_content.css("height", "100%");

                setTimeout(function(){
                  card_text.removeClass("d-none");
                }, 300);

              }, function(){
                card_content.css("height", "0");

                setTimeout(function(){
                  card_text.addClass("d-none");
                }, 300);
              });
             }


             card_hover(first_card, first_card_text, first_card_content);
             card_hover(second_card, second_card_text, second_card_content);
             card_hover(third_card, third_card_text, third_card_content);

             /* --------- END OF CARD HOVERING ------- SERVICES SECTION */

             /*-------- TOP BAR CLICK NAVIGATION AREA ------------*/

             $(".contact-nav").click(function(){
              if (sidebar_open == false ){
                $(".top-bar").css("top", "16%");
              }
             });

             $(".close-btn-top-bar").click(function(){
              $(".top-bar").css("top", "-100%");
             });

             /*------ END OF TOP BAR MANIPULATION --------*/

             $(".linkcv").click(function(){
              window.open('https://drive.google.com/file/d/1s3oA1m_BhR-GBQxgQ6ygfoW_UoilGmoq/view?usp=share_link', '_blank');
             });
            
           });

