
$(document).ready(function() {
                $("#chat_reply").click(function() {
                    if (!$("#chat_messages-container").hasClass("selected")) {
                        $("#chat_messages-container").addClass("selected");
                        $("#chat_messages-container").animate({top: "-=127px"});
                        $("#chat_reply-container").animate({top: "-=275px"});
                        $(".chat_row#first").fadeTo("fast", 0);
                    }
                });
            });

}
