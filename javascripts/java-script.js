import * as THREE from './three-module.js'
import { GLTFLoader } from './GLTFLoader.js'
import { OrbitControls } from './OrbitControls.js'
$(document).ready(function () {
  $(".text3").click(function () {
    setTimeout(function () {
      document.location.href = "./index1.html";
    }, 1600);
    $(".b").toggleClass("b2");
  });
  $(".sob1").hover(
    function () {
      $(this).css("color", "white");
      $(".mag2").css("color", "#C52727");
      $(".about2").css("color", "#C52727");
      $(".map2").css("color", "#C52727");
      $(".concept2").css("color", "#C52727");
      $(".floors2").css("color", "#C52727");
    }, function () {
      $(this).css("color", "#C52727");
      $(".mag2").css("color", "white");
      $(".about2").css("color", "white");
      $(".map2").css("color", "white");
      $(".concept2").css("color", "white");
      $(".floors2").css("color", "white");
    }
  );
  $(".sob1").click(function () {
    document.location.href = "./index2.html";
  });
  $(".about1").hover(
    function () {
      $(this).css("color", "white");
      $(".sob2").css("color", "#C52727");
      $(".mag2").css("color", "#C52727");
      $(".block").css("background-color", "white");
      $(".blocktwo").css("background-color", "white");
    }, function () {
      $(this).css("color", "#C52727");
      $(".mag2").css("color", "white");
      $(".sob2").css("color", "white");
      $(".block").css("background-color", "#C52727");
      $(".blocktwo").css("background-color", "#C52727");
    });
    $(".mag1").hover(
      function () {
        $(this).css("color", "white");
        $(".sob2").css("color", "#C52727");
        $(".about2").css("color", "#C52727");
        $(".map2").css("color", "#C52727");
        $(".concept2").css("color", "#C52727");
        $(".floors2").css("color", "#C52727");
      }, function () {
        $(this).css("color", "#C52727");
        $(".sob2").css("color", "white");
        $(".about2").css("color", "white");
        $(".map2").css("color", "white");
        $(".concept2").css("color", "white");
        $(".floors2").css("color", "white");
      }
    );
    $(".mag1").click(function () {
      document.location.href = "./index4.html";
    });
    let count = false;
    $(".about1").click(function () {
      if (count) {
        count = false;
        $(".about1").click(function () {
          $(".mag").css("top", "17.5%");
          $(".block, .concept, .map, .floors, .blocktwo").css("display", "none");
        });
      }
      else {
        count = true;
        $(".about1").click(function () {
          $(".mag").css("top", "34.5%");
          $(".block, .concept, .map, .floors, .blocktwo").css("display", "block");
        });
      };
    });
    $(".about2").click(function () {
      if (count) {
        count = false;
        $(".about2").click(function () {
          $(".mag").css("top", "17.5%");
          $(".block, .concept, .map, .floors, .blocktwo").css("display", "none");
          $(".block").css("background-color", "#C52727");
          $(".blocktwo").css("background-color", "#C52727");
        });
      }
      else {
        count = true;
        $(".about2").click(function () {
          $(".mag").css("top", "34.5%");
          $(".block, .concept, .map, .floors, .blocktwo").css("display", "block");
          $(".block").css("background-color", "white");
        });
      };
    });
    $(".concept1").hover(
      function () {
        $(".sob2").css("color", "#C52727");
        $(".mag2").css("color", "#C52727");
        $(".block").css("background-color", "white");
        $(".about1").css("color", "white");
        $(this).css("color", "white");
        $(".map2").css("color", "#C52727");
        $(".floors2").css("color", "#C52727");
      }, function () {
        $(".sob2").css("color", "white");
        $(".mag2").css("color", "white");
        $(".block").css("background-color", "#C52727");
        $(".about1").css("color", "#C52727");
        $(this).css("color", "#C52727");
        $(".map2").css("color", "white");
        $(".floors2").css("color", "white");
      }
    );
    $(".concept1").click(function () {
      document.location.href = "./index5.html";
    });
    $(".map1").hover(
      function () {
        $(".sob2").css("color", "#C52727");
        $(".mag2").css("color", "#C52727");
        $(".block").css("background-color", "white");
        $(".about1").css("color", "white");
        $(this).css("color", "white");
        $(".concept2").css("color", "#C52727");
        $(".floors2").css("color", "#C52727");
      }, function () {
        $(".sob2").css("color", "white");
        $(".mag2").css("color", "white");
        $(".block").css("background-color", "#C52727");
        $(".about1").css("color", "#C52727");
        $(this).css("color", "#C52727");
        $(".concept2").css("color", "white");
        $(".floors2").css("color", "white");
      }
    );
    $(".floors1").hover(
      function () {
        $(".sob2").css("color", "#C52727");
        $(".mag2").css("color", "#C52727");
        $(".block").css("background-color", "white");
        $(".about1").css("color", "white");
        $(this).css("color", "white");
        $(".concept2").css("color", "#C52727");
        $(".map2").css("color", "#C52727");
      }, function () {
        $(".sob2").css("color", "white");
        $(".mag2").css("color", "white");
        $(".block").css("background-color", "#C52727");
        $(".about1").css("color", "#C52727");
        $(this).css("color", "#C52727");
        $(".concept2").css("color", "white");
        $(".map2").css("color", "white");
      }
    );
    $(".map1").click(function () {
      document.location.href = "./index6.html";
    });
    $(".floors1").click(function () {
      document.location.href = "./index7.html";
    });
    $(function () {
      $(".pic1, .pic2, .pic3, .pic4, .pic5, .pic6, .pic7, .pic8").draggable();
    });
    $(".block11").hover(
      function () {
        $(".p11").toggleClass("p12");
        $(".descript1").css("display", "block");
        $(".p12").css("z-index", 2);
        $(".p11").css("z-index", 2);
        $(".block1").css("z-index", 3);
        $(".block11").css("z-index", 3);
      }, function () {
        $(".p11").toggleClass("p12");
        $(".descript1").css("display", "none");
        $(".block1").css("z-index", 1);
        $(".block11").css("z-index", 1);
      });
      $(".block33").hover(
        function () {
          $(".p22").toggleClass("p23");
          $(".descript5").css("display", "block");
          $(".p23").css("z-index", 2);
          $(".p22").css("z-index", 2);
          $(".block3").css("z-index", 3);
          $(".block33").css("z-index", 3);
        }, function () {
          $(".p22").toggleClass("p23");
          $(".descript5").css("display", "none");
          $(".block3").css("z-index", 1);
          $(".block33").css("z-index", 1);
        });
        $(".block22").hover(
          function () {
            $(".p33").toggleClass("p34");
            $(".descript9").css("display", "block");
            $(".p34").css("z-index", 2);
            $(".p33").css("z-index", 2);
            $(".block2").css("z-index", 3);
            $(".block22").css("z-index", 3);
          }, function () {
            $(".p33").toggleClass("p34");
            $(".descript9").css("display", "none");
            $(".block2").css("z-index", 1);
            $(".block22").css("z-index", 1);
          });
          $(".block44").hover(
            function () {
              $(".p44").toggleClass("p45");
              $(".descript7").css("display", "block");
              $(".p45").css("z-index", 2);
              $(".p44").css("z-index", 2);
              $(".block4").css("z-index", 3);
              $(".block44").css("z-index", 3);
            }, function () {
              $(".p44").toggleClass("p45");
              $(".descript7").css("display", "none");
              $(".block4").css("z-index", 1);
              $(".block44").css("z-index", 1);
            });

            $(".block55").hover(
              function () {
                $(".p55").toggleClass("p56");
                $(".descript3").css("display", "block");
                $(".p56").css("z-index", 2);
                $(".p55").css("z-index", 2);
                $(".block5").css("z-index", 3);
                $(".block55").css("z-index", 3);
              }, function () {
                $(".p55").toggleClass("p56");
                $(".descript3").css("display", "none");
                $(".block5").css("z-index", 1);
                $(".block55").css("z-index", 1);
              });
              $(".block66").hover(
                function () {
                  $(".p66").toggleClass("p67");
                  $(".descript2").css("display", "block");
                  $(".p67").css("z-index", 2);
                  $(".p66").css("z-index", 2);
                  $(".block6").css("z-index", 3);
                  $(".block66").css("z-index", 3);
                }, function () {
                  $(".p66").toggleClass("p67");
                  $(".descript2").css("display", "none");
                  $(".block6").css("z-index", 1);
                  $(".block66").css("z-index", 1);
                });
                $(".block77").hover(
                  function () {
                    $(".p77").toggleClass("p78");
                    $(".descript4").css("display", "block");
                    $(".p78").css("z-index", 2);
                    $(".p77").css("z-index", 2);
                    $(".block7").css("z-index", 3);
                    $(".block77").css("z-index", 3);
                  }, function () {
                    $(".p77").toggleClass("p78");
                    $(".descript4").css("display", "none");
                    $(".block7").css("z-index", 1);
                    $(".block77").css("z-index", 1);
                  });
                  $(".block777").hover(
                    function () {
                      $(".p77").toggleClass("p78");
                      $(".descript4").css("display", "block");
                      $(".p78").css("z-index", 2);
                      $(".p77").css("z-index", 2);
                      $(".block7").css("z-index", 3);
                      $(".block777").css("z-index", 3);
                    }, function () {
                      $(".p77").toggleClass("p78");
                      $(".descript4").css("display", "none");
                      $(".block7").css("z-index", 1);
                      $(".block777").css("z-index", 1);
                    });
                    $(".block88").hover(
                      function () {
                        $(".p88").toggleClass("p89");
                        $(".descript6").css("display", "block");
                        $(".p89").css("z-index", 2);
                        $(".p88").css("z-index", 2);
                        $(".block8").css("z-index", 3);
                        $(".block88").css("z-index", 3);
                      }, function () {
                        $(".p88").toggleClass("p89");
                        $(".descript6").css("display", "none");
                        $(".block8").css("z-index", 1);
                        $(".block88").css("z-index", 1);
                      });
                      $(".block99").hover(
                        function () {
                          $(".p99").toggleClass("p90");
                          $(".descript8").css("display", "block");
                          $(".p90").css("z-index", 2);
                          $(".p99").css("z-index", 2);
                          $(".block9").css("z-index", 3);
                          $(".block99").css("z-index", 3);
                        }, function () {
                          $(".p99").toggleClass("p90");
                          $(".descript8").css("display", "none");
                          $(".block9").css("z-index", 1);
                          $(".block99").css("z-index", 1);
                        });
                        $(".rect1").hover(
                          function () {
                            $(".rect11").css("display", "none");
                            $(".item1").css("display", "none");
                          }, function () {
                            $(".rect11").css("display", "block");
                            $(".item1").css("display", "block");
                          });

                          $(".rect2").hover(
                            function () {
                              $(".rect22").css("display", "none");
                              $(".item2").css("display", "none");
                            }, function () {
                              $(".rect22").css("display", "block");
                              $(".item2").css("display", "block");
                            });
                            $(".rect3").hover(
                              function () {
                                $(".rect33").css("display", "none");
                                $(".item3").css("display", "none");
                              }, function () {
                                $(".rect33").css("display", "block");
                                $(".item3").css("display", "block");
                              });
                              $(".rect4").hover(
                                function () {
                                  $(".rect44").css("display", "none");
                                  $(".item4").css("display", "none");
                                }, function () {
                                  $(".rect44").css("display", "block");
                                  $(".item4").css("display", "block");
                                });
                                $(".rect5").hover(
                                  function () {
                                    $(".rect55").css("display", "none");
                                    $(".item5").css("display", "none");
                                  }, function () {
                                    $(".rect55").css("display", "block");
                                    $(".item5").css("display", "block");
                                  });
                                  $(".rect6").hover(
                                    function () {
                                      $(".rect66").css("display", "none");
                                      $(".item6").css("display", "none");
                                    }, function () {
                                      $(".rect66").css("display", "block");
                                      $(".item6").css("display", "block");
                                    });
                                    $(".rect7").hover(
                                      function () {
                                        $(".rect77").css("display", "none");
                                        $(".item7").css("display", "none");
                                      }, function () {
                                        $(".rect77").css("display", "block");
                                        $(".item7").css("display", "block");
                                      });
                                      $(".rect8").hover(
                                        function () {
                                          $(".rect88").css("display", "none");
                                          $(".item8").css("display", "none");
                                        }, function () {
                                          $(".rect88").css("display", "block");
                                          $(".item8").css("display", "block");
                                        });
                                        $(".rect9").hover(
                                          function () {
                                            $(".rect99").css("display", "none");
                                            $(".item9").css("display", "none");
                                          }, function () {
                                            $(".rect99").css("display", "block");
                                            $(".item9").css("display", "block");
                                          });
                                          $(".shtext").hover(
                                            function () {
                                              $(".shtext").css("color", "#FFFFFF");
                                            }, function () {
                                              $(".shtext").css("color", "#C52727");
                                            });
                                            $(".lezhak").click(function () {
                                              document.location.href = "./lezhak.html";
                                            });
                                            $(".notebook").click(function () {
                                              document.location.href = "./notebook.html";
                                            });
                                            $(".pen").click(function () {
                                              document.location.href = "./pencil.html";
                                            });
                                            $(".bag1").click(function () {
                                              document.location.href = "./shopper1.html";
                                            });
                                            $(".bag2").click(function () {
                                              document.location.href = "./shopper2.html";
                                            });
                                            $(".socks").click(function () {
                                              document.location.href = "./socks.html";
                                            });
                                            $(".umbrella").click(function () {
                                              document.location.href = "./umbrella.html";
                                            });
                                            $(".game").click(function () {
                                              document.location.href = "./game.html";
                                            });
                                            $(".book").click(function () {
                                              document.location.href = "./book.html";
                                            });
                                            $(".back1").hover(
                                              function () {
                                                $(this).css("color", "white");
                                              }, function () {
                                                $(this).css("color", "#C52727");
                                              }
                                            );
                                            $(".back1").click(function () {
                                              document.location.href = "./index4.html";
                                            });
                                            $(".try").hover(
                                              function () {
                                                $(this).css("color", "white");
                                              }, function () {
                                                $(this).css("color", "#000000");
                                              }
                                            );
                                            $(".try").click(function () {
                                              document.location.href = "https://en.calameo.com/books/00703921014fb4406858f";
                                            });
                                            $(".block77").click(function () {
                                              document.location.href = "https://6hm8g8l.github.io/burningtour/";
                                            });
                                            $(".cartsh").hover(
                                              function () {
                                                $(this).css("opacity", 0);
                                                $(".carttsh").css("display", "block");
                                              }, function () {
                                                $(this).css("opacity", 1);
                                                $(".carttsh").css("display", "none");
                                              }
                                            );
                                            $(".cartsh").click(function () {
                                              document.location.href = "./error.html";
                                            });
                                            $(".cart").hover(
                                              function () {
                                                $(this).css("opacity", 0);
                                                $(".cartt").css("display", "block");
                                              }, function () {
                                                $(this).css("opacity", 1);
                                                $(".cartt").css("display", "none");
                                              }
                                            );
                                            $(".cart").click(function () {
                                              document.location.href = "./error.html";
                                            });
                                            $(".tgame").click(function () {
                                              document.location.href = "https://6hm8g8l.github.io/gamebt/";
                                            });
                                            $(".buy").hover(
                                              function () {
                                                $(this).css("color", "white");
                                              }, function () {
                                                $(this).css("color", "#000000");
                                              }
                                            );
                                            $(".buy").click(function () {
                                              setTimeout(function () {
                                                $(".cartsh").css("opacity", 0);
                                                $(".carttsh").css("display", "block");
                                              }, 100);
                                              setTimeout(function () {
                                                $(".cartsh").css("opacity", 1);
                                                $(".carttsh").css("display", "none");
                                              }, 200);
                                              setTimeout(function () {
                                                $(".cartsh").css("opacity", 0);
                                                $(".carttsh").css("display", "block");
                                              }, 300);
                                              setTimeout(function () {
                                                $(".cartsh").css("opacity", 1);
                                                $(".carttsh").css("display", "none");
                                              }, 400);
                                              setTimeout(function () {
                                                $(".cartsh").css("opacity", 0);
                                                $(".carttsh").css("display", "block");
                                              }, 500);
                                              setTimeout(function () {
                                                $(".cartsh").css("opacity", 1);
                                                $(".carttsh").css("display", "none");
                                              }, 600);
                                              setTimeout(function () {
                                                $(".cartsh").css("opacity", 0);
                                                $(".carttsh").css("display", "block");
                                              }, 700);
                                              setTimeout(function () {
                                                $(".cartsh").css("opacity", 1);
                                                $(".carttsh").css("display", "none");
                                              }, 800);
                                            });
                                            $(".logo1").click(function () {
                                              document.location.href = "./index1.html";
                                            });
                                            $(".box1").click(function () {
                                              $(".box2, .box3, .box4, .box5, .box6, .box7").css("grid-column-end", "inherit");
                                              $(".box2, .box3, .box4, .box5, .box6, .box7").css("grid-column-start", "inherit");
                                              $(".box2, .box3, .box4, .box5, .box6, .box7").css("grid-row-end", "inherit");
                                              $(".box2, .box3, .box4, .box5, .box6, .box7").css("grid-row-start", "inherit");
                                              $(this).css("grid-column-start", "1");
                                              $(this).css("grid-column-end", "3");
                                              $(this).css("grid-row-start", "1");
                                              $(this).css("grid-row-end", "3");
                                              $(".msg").css("display", "block");
                                              $(".ms").css("display", "none");
                                              $(".tvsg, .sharpg, .mirrorg, .hammerg, .lightsg, .riverg").css("display", "none");
                                              $(".tvs, .sharp, .mirror, .hammer, .lights, .river").css("display", "block");
                                              $(".floorp6, .floorp2, .floorp3, .floorp4, .floorp5, .floorp7").css("display", "none");
                                              $(".floorp1").css("display", "block");
                                            });
                                            $(".box2").click(function () {
                                              $(".box1, .box3, .box4, .box5, .box6, .box7").css("grid-column-end", "inherit");
                                              $(".box1, .box3, .box4, .box5, .box6, .box7").css("grid-column-start", "inherit");
                                              $(".box1, .box3, .box4, .box5, .box6, .box7").css("grid-row-end", "inherit");
                                              $(".box1, .box3, .box4, .box5, .box6, .box7").css("grid-row-start", "inherit");
                                              $(this).css("grid-column-start", "2");
                                              $(this).css("grid-column-end", "4");
                                              $(this).css("grid-row-start", "1");
                                              $(this).css("grid-row-end", "3");
                                              $(".lightsg").css("display", "block");
                                              $(".lights").css("display", "none");
                                              $(".tvsg, .sharpg, .mirrorg, .hammerg, .msg, .riverg").css("display", "none");
                                              $(".tvs, .sharp, .mirror, .hammer, .ms, .river").css("display", "block");
                                              $(".floorp1, .floorp6, .floorp3, .floorp4, .floorp5, .floorp7").css("display", "none");
                                              $(".floorp2").css("display", "block");
                                            });
                                            $(".box3").click(function () {
                                              $(".box1, .box2, .box4, .box5, .box6, .box7").css("grid-column-end", "inherit");
                                              $(".box1, .box2, .box4, .box5, .box6, .box7").css("grid-column-start", "inherit");
                                              $(".box1, .box2, .box4, .box5, .box6, .box7").css("grid-row-end", "inherit");
                                              $(".box1, .box2, .box4, .box5, .box6, .box7").css("grid-row-start", "inherit");
                                              $(this).css("grid-column-start", "3");
                                              $(this).css("grid-column-end", "5");
                                              $(this).css("grid-row-start", "1");
                                              $(this).css("grid-row-end", "3");
                                              $(".sharpg").css("display", "block");
                                              $(".sharp").css("display", "none");
                                              $(".tvsg, .lightsg, .mirrorg, .hammerg, .msg, .riverg").css("display", "none");
                                              $(".tvs, .lights, .mirror, .hammer, .ms, .river").css("display", "block");
                                              $(".floorp1, .floorp2, .floorp6, .floorp4, .floorp5, .floorp7").css("display", "none");
                                              $(".floorp3").css("display", "block");
                                            });
                                            $(".box4").click(function () {
                                              $(".box1, .box2, .box3, .box5, .box6, .box7").css("grid-column-end", "inherit");
                                              $(".box1, .box2, .box3, .box5, .box6, .box7").css("grid-column-start", "inherit");
                                              $(".box1, .box2, .box3, .box5, .box6, .box7").css("grid-row-end", "inherit");
                                              $(".box1, .box2, .box3, .box5, .box6, .box7").css("grid-row-start", "inherit");
                                              $(this).css("grid-column-start", "1");
                                              $(this).css("grid-column-end", "3");
                                              $(this).css("grid-row-start", "1");
                                              $(this).css("grid-row-end", "3");
                                              $(".hammerg").css("display", "block");
                                              $(".hammer").css("display", "none");
                                              $(".tvsg, .lightsg, .mirrorg, .sharpg, .msg, .riverg").css("display", "none");
                                              $(".tvs, .lights, .mirror, .sharp, .ms, .river").css("display", "block");
                                              $(".floorp1, .floorp2, .floorp3, .floorp6, .floorp5, .floorp7").css("display", "none");
                                              $(".floorp4").css("display", "block");
                                            });
                                            $(".box5").click(function () {
                                              $(".box1, .box2, .box3, .box4, .box6, .box7").css("grid-column-end", "inherit");
                                              $(".box1, .box2, .box3, .box4, .box6, .box7").css("grid-column-start", "inherit");
                                              $(".box1, .box2, .box3, .box4, .box6, .box7").css("grid-row-end", "inherit");
                                              $(".box1, .box2, .box3, .box4, .box6, .box7").css("grid-row-start", "inherit");
                                              $(this).css("grid-column-start", "2");
                                              $(this).css("grid-column-end", "4");
                                              $(this).css("grid-row-start", "1");
                                              $(this).css("grid-row-end", "3");
                                              $(".riverg").css("display", "block");
                                              $(".river").css("display", "none");
                                              $(".tvsg, .lightsg, .mirrorg, .sharpg, .msg, .hammerg").css("display", "none");
                                              $(".tvs, .lights, .mirror, .sharp, .ms, .hammer").css("display", "block");
                                              $(".floorp1, .floorp2, .floorp3, .floorp4, .floorp6, .floorp7").css("display", "none");
                                              $(".floorp5").css("display", "block");
                                            });
                                            $(".box6").click(function () {
                                              $(".box1, .box2, .box3, .box4, .box5, .box7").css("grid-column-end", "inherit");
                                              $(".box1, .box2, .box3, .box4, .box5, .box7").css("grid-column-start", "inherit");
                                              $(".box1, .box2, .box3, .box4, .box5, .box7").css("grid-row-end", "inherit");
                                              $(".box1, .box2, .box3, .box4, .box5, .box7").css("grid-row-start", "inherit");
                                              $(this).css("grid-column-start", "3");
                                              $(this).css("grid-column-end", "5");
                                              $(this).css("grid-row-start", "1");
                                              $(this).css("grid-row-end", "3");
                                              $(".mirrorg").css("display", "block");
                                              $(".mirror").css("display", "none");
                                              $(".tvsg, .lightsg, .riverg, .sharpg, .msg, .hammerg").css("display", "none");
                                              $(".tvs, .lights, .river, .sharp, .ms, .hammer").css("display", "block");
                                              $(".floorp1, .floorp2, .floorp3, .floorp4, .floorp5, .floorp7").css("display", "none");
                                              $(".floorp6").css("display", "block");
                                            });
                                            $(".box7").click(function () {
                                              $(".box2, .box3, .box4, .box5, .box6, .box1").css("grid-column-end", "inherit");
                                              $(".box2, .box3, .box4, .box5, .box6, .box1").css("grid-column-start", "inherit");
                                              $(".box2, .box3, .box4, .box5, .box6, .box1").css("grid-row-end", "inherit");
                                              $(".box2, .box3, .box4, .box5, .box6, .box1").css("grid-row-start", "inherit");
                                              $(this).css("grid-column-start", "4");
                                              $(this).css("grid-column-end", "6");
                                              $(this).css("grid-row-start", "1");
                                              $(this).css("grid-row-end", "3");
                                              $(".tvsg").css("display", "block");
                                              $(".tvs").css("display", "none");
                                              $(".mirrorg, .lightsg, .riverg, .sharpg, .msg, .hammerg").css("display", "none");
                                              $(".mirror, .lights, .river, .sharp, .ms, .hammer").css("display", "block");
                                              $(".floorp1, .floorp2, .floorp3, .floorp4, .floorp5, .floorp6").css("display", "none");
                                              $(".floorp7").css("display", "block");
                                            });
                                            var width = $(window).width();
                                            if (width >= 1915 && width <= 1925) {
                                              $(".cartshm").hover(
                                                function () {
                                                  $(this).css("opacity", 0);
                                                  $(".carttshm").css("display", "block");
                                                }, function () {
                                                  $(this).css("opacity", 1);
                                                  $(".carttshm").css("display", "none");
                                                }
                                              );
                                              $(".cartshm").click(function () {
                                                document.location.href = "./error.html";
                                              });
                                              $(".cartshm2").hover(
                                                function () {
                                                  $(this).css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, function () {
                                                  $(this).css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }
                                              );
                                              $(".cartshm2").click(function () {
                                                document.location.href = "./error.html";
                                              });
                                              $(".buy").click(function () {
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 100);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 200);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 300);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 400);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 500);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 600);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 700);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 800);
                                              });
                                            };
                                            if (width >= 1435 && width <= 1445) {
                                              $(".cartshm").hover(
                                                function () {
                                                  $(this).css("opacity", 0);
                                                  $(".carttshm").css("display", "block");
                                                }, function () {
                                                  $(this).css("opacity", 1);
                                                  $(".carttshm").css("display", "none");
                                                }
                                              );
                                              $(".cartshm").click(function () {
                                                document.location.href = "./error.html";
                                              });
                                              $(".cartshm2").hover(
                                                function () {
                                                  $(this).css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, function () {
                                                  $(this).css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }
                                              );
                                              $(".cartshm2").click(function () {
                                                document.location.href = "./error.html";
                                              });
                                              $(".buy").click(function () {
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 100);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 200);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 300);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 400);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 500);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 600);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 700);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 800);
                                              });
                                            };
                                            if (width >= 1360 && width <= 1370) {
                                              $(".cartshm").hover(
                                                function () {
                                                  $(this).css("opacity", 0);
                                                  $(".carttshm").css("display", "block");
                                                }, function () {
                                                  $(this).css("opacity", 1);
                                                  $(".carttshm").css("display", "none");
                                                }
                                              );
                                              $(".cartshm").click(function () {
                                                document.location.href = "./error.html";
                                              });
                                              $(".cartshm2").hover(
                                                function () {
                                                  $(this).css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, function () {
                                                  $(this).css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }
                                              );
                                              $(".cartshm2").click(function () {
                                                document.location.href = "./error.html";

                                              });
                                              $(".buy").click(function () {
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 100);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 200);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 300);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 400);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 500);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 600);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 700);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 800);
                                              });
                                            };
                                            if (width >= 1020 && width <= 1030) {
                                              $(".cartshm").hover(
                                                function () {
                                                  $(this).css("opacity", 0);
                                                  $(".carttshm").css("display", "block");
                                                }, function () {
                                                  $(this).css("opacity", 1);
                                                  $(".carttshm").css("display", "none");
                                                }
                                              );
                                              $(".cartshm").click(function () {
                                                document.location.href = "./error.html";
                                              });
                                              $(".cartshm2").hover(
                                                function () {
                                                  $(this).css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, function () {
                                                  $(this).css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }
                                              );
                                              $(".cartshm2").click(function () {
                                                document.location.href = "./error.html";
                                              });
                                              $(".buy").click(function () {
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 100);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 200);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 300);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 400);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 500);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 600);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 700);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 800);
                                              });
                                            };
                                            if ($(window).width() < 770) {
                                              let count = false;
                                              $(".about1").click(function () {
                                                if (count) {
                                                  count = false;
                                                  $(".about1").click(function () {
                                                    $(".mag").css("top", "13%");
                                                    $(".block, .concept, .map, .floors, .blocktwo").css("display", "none");
                                                  });
                                                }
                                                else {
                                                  count = true;
                                                  $(".about1").click(function () {
                                                    $(".mag").css("top", "26%");
                                                    $(".block, .concept, .map, .floors, .blocktwo").css("display", "block");
                                                  });
                                                };
                                              });
                                              $(".about2").click(function () {
                                                if (count) {
                                                  count = false;
                                                  $(".about2").click(function () {
                                                    $(".mag").css("top", "13%");
                                                    $(".block, .concept, .map, .floors, .blocktwo").css("display", "none");
                                                    $(".block").css("background-color", "#C52727");
                                                    $(".blocktwo").css("background-color", "#C52727");
                                                  });
                                                }
                                                else {
                                                  count = true;
                                                  $(".about2").click(function () {
                                                    $(".mag").css("top", "26%");
                                                    $(".block, .concept, .map, .floors, .blocktwo").css("display", "block");
                                                    $(".block").css("background-color", "white");
                                                  });
                                                };
                                              });
                                              $(".p7").click(function () {
                                                document.location.href = "https://6hm8g8l.github.io/burningtour/";
                                              });
                                              $(".box1").click(function () {
                                                $(".box2, .box3, .box4, .box5, .box6, .box7").css("grid-column-end", "inherit");
                                                $(".box2, .box3, .box4, .box5, .box6, .box7").css("grid-column-start", "inherit");
                                                $(".box2, .box3, .box4, .box5, .box6, .box7").css("grid-row-end", "inherit");
                                                $(".box2, .box3, .box4, .box5, .box6, .box7").css("grid-row-start", "inherit");
                                                $(this).css("grid-column-start", "1");
                                                $(this).css("grid-column-end", "3");
                                                $(this).css("grid-row-start", "1");
                                                $(this).css("grid-row-end", "3");
                                                $(".msg").css("display", "block");
                                                $(".ms").css("display", "none");
                                                $(".tvsg, .sharpg, .mirrorg, .hammerg, .lightsg, .riverg").css("display", "none");
                                                $(".tvs, .sharp, .mirror, .hammer, .lights, .river").css("display", "block");
                                                $(".floorp6, .floorp2, .floorp3, .floorp4, .floorp5, .floorp7").css("display", "none");
                                                $(".floorp1").css("display", "block");
                                              });
                                              $(".box2").click(function () {
                                                $(".box1, .box3, .box4, .box5, .box6, .box7").css("grid-column-end", "inherit");
                                                $(".box1, .box3, .box4, .box5, .box6, .box7").css("grid-column-start", "inherit");
                                                $(".box1, .box3, .box4, .box5, .box6, .box7").css("grid-row-end", "inherit");
                                                $(".box1, .box3, .box4, .box5, .box6, .box7").css("grid-row-start", "inherit");
                                                $(this).css("grid-column-start", "1");
                                                $(this).css("grid-column-end", "3");
                                                $(this).css("grid-row-start", "1");
                                                $(this).css("grid-row-end", "3");
                                                $(".lightsg").css("display", "block");
                                                $(".lights").css("display", "none");
                                                $(".tvsg, .sharpg, .mirrorg, .hammerg, .msg, .riverg").css("display", "none");
                                                $(".tvs, .sharp, .mirror, .hammer, .ms, .river").css("display", "block");
                                                $(".floorp1, .floorp6, .floorp3, .floorp4, .floorp5, .floorp7").css("display", "none");
                                                $(".floorp2").css("display", "block");
                                              });
                                              $(".box3").click(function () {
                                                $(".box1, .box2, .box4, .box5, .box6, .box7").css("grid-column-end", "inherit");
                                                $(".box1, .box2, .box4, .box5, .box6, .box7").css("grid-column-start", "inherit");
                                                $(".box1, .box2, .box4, .box5, .box6, .box7").css("grid-row-end", "inherit");
                                                $(".box1, .box2, .box4, .box5, .box6, .box7").css("grid-row-start", "inherit");
                                                $(this).css("grid-column-start", "1");
                                                $(this).css("grid-column-end", "3");
                                                $(this).css("grid-row-start", "2");
                                                $(this).css("grid-row-end", "4");
                                                $(".sharpg").css("display", "block");
                                                $(".sharp").css("display", "none");
                                                $(".tvsg, .lightsg, .mirrorg, .hammerg, .msg, .riverg").css("display", "none");
                                                $(".tvs, .lights, .mirror, .hammer, .ms, .river").css("display", "block");
                                                $(".floorp1, .floorp2, .floorp6, .floorp4, .floorp5, .floorp7").css("display", "none");
                                                $(".floorp3").css("display", "block");
                                              });
                                              $(".box4").click(function () {
                                                $(".box1, .box2, .box3, .box5, .box6, .box7").css("grid-column-end", "inherit");
                                                $(".box1, .box2, .box3, .box5, .box6, .box7").css("grid-column-start", "inherit");
                                                $(".box1, .box2, .box3, .box5, .box6, .box7").css("grid-row-end", "inherit");
                                                $(".box1, .box2, .box3, .box5, .box6, .box7").css("grid-row-start", "inherit");
                                                $(this).css("grid-column-start", "1");
                                                $(this).css("grid-column-end", "3");
                                                $(this).css("grid-row-start", "2");
                                                $(this).css("grid-row-end", "4");
                                                $(".hammerg").css("display", "block");
                                                $(".hammer").css("display", "none");
                                                $(".tvsg, .lightsg, .mirrorg, .sharpg, .msg, .riverg").css("display", "none");
                                                $(".tvs, .lights, .mirror, .sharp, .ms, .river").css("display", "block");
                                                $(".floorp1, .floorp2, .floorp3, .floorp6, .floorp5, .floorp7").css("display", "none");
                                                $(".floorp4").css("display", "block");
                                              });
                                              $(".box5").click(function () {
                                                $(".box1, .box2, .box3, .box4, .box6, .box7").css("grid-column-end", "inherit");
                                                $(".box1, .box2, .box3, .box4, .box6, .box7").css("grid-column-start", "inherit");
                                                $(".box1, .box2, .box3, .box4, .box6, .box7").css("grid-row-end", "inherit");
                                                $(".box1, .box2, .box3, .box4, .box6, .box7").css("grid-row-start", "inherit");
                                                $(this).css("grid-column-start", "1");
                                                $(this).css("grid-column-end", "3");
                                                $(this).css("grid-row-start", "3");
                                                $(this).css("grid-row-end", "5");
                                                $(".riverg").css("display", "block");
                                                $(".river").css("display", "none");
                                                $(".tvsg, .lightsg, .mirrorg, .sharpg, .msg, .hammerg").css("display", "none");
                                                $(".tvs, .lights, .mirror, .sharp, .ms, .hammer").css("display", "block");
                                                $(".floorp1, .floorp2, .floorp3, .floorp4, .floorp6, .floorp7").css("display", "none");
                                                $(".floorp5").css("display", "block");
                                              });
                                              $(".box6").click(function () {
                                                $(".box1, .box2, .box3, .box4, .box5, .box7").css("grid-column-end", "inherit");
                                                $(".box1, .box2, .box3, .box4, .box5, .box7").css("grid-column-start", "inherit");
                                                $(".box1, .box2, .box3, .box4, .box5, .box7").css("grid-row-end", "inherit");
                                                $(".box1, .box2, .box3, .box4, .box5, .box7").css("grid-row-start", "inherit");
                                                $(this).css("grid-column-start", "1");
                                                $(this).css("grid-column-end", "3");
                                                $(this).css("grid-row-start", "3");
                                                $(this).css("grid-row-end", "5");
                                                $(".mirrorg").css("display", "block");
                                                $(".mirror").css("display", "none");
                                                $(".tvsg, .lightsg, .riverg, .sharpg, .msg, .hammerg").css("display", "none");
                                                $(".tvs, .lights, .river, .sharp, .ms, .hammer").css("display", "block");
                                                $(".floorp1, .floorp2, .floorp3, .floorp4, .floorp5, .floorp7").css("display", "none");
                                                $(".floorp6").css("display", "block");
                                              });
                                              $(".box7").click(function () {
                                                $(".box2, .box3, .box4, .box5, .box6, .box1").css("grid-column-end", "inherit");
                                                $(".box2, .box3, .box4, .box5, .box6, .box1").css("grid-column-start", "inherit");
                                                $(".box2, .box3, .box4, .box5, .box6, .box1").css("grid-row-end", "inherit");
                                                $(".box2, .box3, .box4, .box5, .box6, .box1").css("grid-row-start", "inherit");
                                                $(this).css("grid-column-start", "1");
                                                $(this).css("grid-column-end", "3");
                                                $(this).css("grid-row-start", "4");
                                                $(this).css("grid-row-end", "6");
                                                $(".tvsg").css("display", "block");
                                                $(".tvs").css("display", "none");
                                                $(".mirrorg, .lightsg, .riverg, .sharpg, .msg, .hammerg").css("display", "none");
                                                $(".mirror, .lights, .river, .sharp, .ms, .hammer").css("display", "block");
                                                $(".floorp1, .floorp2, .floorp3, .floorp4, .floorp5, .floorp6").css("display", "none");
                                                $(".floorp7").css("display", "block");
                                              });
                                              $(".cartshm").hover(
                                                function () {
                                                  $(this).css("opacity", 0);
                                                  $(".carttshm").css("display", "block");
                                                }, function () {
                                                  $(this).css("opacity", 1);
                                                  $(".carttshm").css("display", "none");
                                                }
                                              );
                                              $(".cartshm").click(function () {
                                                document.location.href = "./error.html";
                                              });
                                              $(".cartshm2").hover(
                                                function () {
                                                  $(this).css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, function () {
                                                  $(this).css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }
                                              );
                                              $(".cartshm2").click(function () {
                                                document.location.href = "./error.html";
                                              });
                                              $(".buy").click(function () {
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 100);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 200);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 300);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 400);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 500);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 600);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 0);
                                                  $(".carttshm2").css("display", "block");
                                                }, 700);
                                                setTimeout(function () {
                                                  $(".cartshm2").css("opacity", 1);
                                                  $(".carttshm2").css("display", "none");
                                                }, 800);
                                              });
                                              $(".cart2").hover(
                                                function () {
                                                  $(this).css("opacity", 0);
                                                  $(".cartt2").css("display", "block");
                                                }, function () {
                                                  $(this).css("opacity", 1);
                                                  $(".cartt2").css("display", "none");
                                                }
                                              );
                                              $(".cart2").click(function () {
                                                document.location.href = "./error.html";
                                              });
                                            };
                                            let scene;
                                            let camera;
                                            let renderer;
                                            let mesh;
                                            function init() {
                                              let container = document.querySelector('.container');
                                              //scene
                                              scene = new THREE.Scene()
                                              scene.background = new THREE.Color(0x000000);
                                              let light = new THREE.AmbientLight(0xffffff, 1.5);
                                              const dirLight = new THREE.DirectionalLight(0xefefff, 1.5);
                                              dirLight.position.set(10, 10, 10);
                                              scene.add(light);
                                              scene.add(dirLight);
                                              //camera
                                              camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000)
                                              //renderer
                                              renderer = new THREE.WebGLRenderer({ antialias: true })
                                              renderer.setSize(window.innerWidth, window.innerHeight)
                                              renderer.outputEncoding = THREE.sRGBEncoding;
                                              container.appendChild(renderer.domElement)
                                              //model
                                              {
                                                let loader = new GLTFLoader();
                                                loader.load('./img/pzdc.gltf', gltf => {
                                                  mesh = gltf.scene;
                                                  mesh.traverse( child => {
                                                    if ( child.material ) child.material.metalness = 0.9;
                                                  } );
                                                  mesh.position.set(0, -350, 0);
                                                  mesh.rotation.set(0, -350, 0);
                                                  scene.add(mesh);
                                                  scene.rotation.set(0, 0, 0)
                                                  scene.rotation.x = 0;
                                                  scene.rotation.y = 0;
                                                  scene.rotation.z = 0;
                                                  animate()
                                                },
                                                function (error) {
                                                  console.log('Error: ' + error)
                                                }
                                              )
                                            }
                                            //resize
                                            window.addEventListener('resize', onWindowResize, false)
                                            function onWindowResize() {
                                              camera.aspect = window.innerWidth / window.innerHeight;
                                              camera.updateProjectionMatrix();
                                              renderer.setSize(window.innerWidth, window.innerHeight)
                                            }
                                            function animate() {
                                              requestAnimationFrame(animate)
                                              controls.update();
                                              renderer.render(scene, camera)
                                            }
                                            let controls = new OrbitControls(camera, renderer.domElement);
                                            camera.position.set( 150, 100, 0 );
                                            controls.enableDamping = true;
                                          };
                                          init();
                                        });
