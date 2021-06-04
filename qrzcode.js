$(document).ready(function(){
    $("#logoLeft").hide();
    $("#logoRight").hide();
    var letters = "white";

    function whiteLetter(){
        $("#preview").css("color", "white");
        $("#preview").css("border", "2px solid white");
        letters = "white";
        imgSel("#logoLeft", "#logoLeftsel");
        imgSel("#logoRight", "#logoRightsel");
    }

    function blackLetter(){
        $("#preview").css("color", "black");
        $("#preview").css("border", "2px solid black");
        letters = "black"
        imgSel("#logoLeft", "#logoLeftsel");
        imgSel("#logoRight", "#logoRightsel");
    }

    $("#Color").click(function(){
        var selection = $(this).val();
        console.log(selection);
        if(selection == "black" || selection == "blue" || selection == "rgb(202, 5, 5)"){
            whiteLetter();
            $("#preview").css("background-color", selection);
        } else{
            blackLetter();
            $("#preview").css("background-color", selection);
        }
        });

    $("#size").click(function(){
        var choice = $(this).val();
        $("#preview").css("height", choice);
    });

    $(".entry").on('keyup', function (event) {
        if (event.keyCode === 13) {
        console.log("Enter key pressed!!!!!");
        console.log("#line1entry")
        $("#line1").text($("#line1entry").val());
        $("#line2").text($("#line2entry").val());
        $("#line3").text($("#line3entry").val());
        $("#line4").text($("#line4entry").val());
        }
    });
    function increase(line){
        var size = $(line).css("font-size").slice(-5, -2);
        size = parseInt(size) + 5;
        $(line).css("font-size", size);
        console.log(letters);
    }

    function decrease(line){
        var size = $(line).css("font-size").slice(-5, -2);
        size = parseInt(size) - 5;
        $(line).css("font-size", size);
    }

// Line 1 Buttons
    $("#Show1").click(function(){
        $("#line1").show();
    });
    $("#Hide1").click(function(){
        $("#line1").hide();
    });
    $("#inc1").click(function(){
        increase("#line1");
    });
    $("#dec1").click(function(){
        decrease("#line1");
    })

    //Line 2 Buttons
    $("#Show2").click(function(){
        $("#line2").show();
    });
    $("#Hide2").click(function(){
        $("#line2").hide();
    });
    $("#inc2").click(function(){
        increase("#line2");
    });
    $("#dec2").click(function(){
        decrease("#line2");
    })
    //Line 3 Buttons
    $("#Show3").click(function(){
        $("#line3").show();
    });
    $("#Hide3").click(function(){
        $("#line3").hide();
    });
    $("#inc3").click(function(){
        increase("#line3");
    });
    $("#dec3").click(function(){
        decrease("#line3");
    })
    //Line 4 Buttons
    $("#Show4").click(function(){
        $("#line4").show();
    });
    $("#Hide4").click(function(){
        $("#line4").hide();
    });
    $("#inc4").click(function(){
        increase("#line4");
    });
    $("#dec4").click(function(){
        decrease("#line4");
    })

    function imgSel(logo, menu){
        var value = $(menu).val();
        if(value == "None"){
            $(logo).hide();
            $("#lines").css("margin-left", "100px")
            console.log("None selected in function")
            console.log($("#lines").css("margin-left"))
        } else if (value == "ARRL"){
            imgShow(logo, "ARRLtransWhite.png", "ARRLtransBlack.png");
        } else if (value == "CA"){
            imgShow(logo, "CAtransWhite.png", "CAtransBlack.png");
        }

    }

    function imgShow(logo, white, black){
        if(letters == "white"){
            $(logo).attr("src", white);
        } else if (letters == "black"){
            $(logo).attr("src", black);
        }
        $(logo).show();
    }

    $("#logoLeftsel").click(function(){
        $("#lines").css("margin-left", "15px");
        imgSel("#logoLeft", this);
    });

    $("#logoRightsel").click(function(){
        $("#lines").css("margin-left", "100px");
        imgSel("#logoRight", this);
        
    });

    $(".align").click(function(){
        var leftMargin = parseInt($("#lines").css("margin-left").slice(-5, -2));
        console.log(leftMargin);
        var id = $(this).attr("id");
        if(id == "left"){
            console.log("to the left");
            leftMargin--;
        }else if(id == "right"){
            console.log("you're right");
            leftMargin++;
        }
        else{
            console.log("Alignment error");
        }
        $("#lines").css("margin-left", leftMargin);
    })

    $("#corners").click(function(){
        if($("#corners").val() == "square"){
            console.log("square corners");
            $("#preview").css("border-radius", 0);
        }
        else if($("#corners").val() == "rounded"){
            console.log("rounded");
            $("#preview").css("border-radius", "15px");
        }
    })

});