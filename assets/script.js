//listen user press enter key
$("#console-container").on('keyup', "#user-input",function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        switch($(this).val()){
            case 'help':
                printHelp();
                break;
            case 'clear':
                clearConsole();
                break;
            case 'print-all':
                printAllCommand();
                break;
            case 'summarization':
                break;
            default:
                const notFoundText = "<p>Command not found!</p>"
                const helpText = "<p>Type 'help' + <kbd>ENTER</kbd> for available commands</p>"
                prompt(notFoundText+helpText)
        }
    }
});
$("body").click(function(e) {
    if (e.target.id == "console-container" || $(e.target).parents("#console-container").length <= 0) {
        $("#user-input").focus();
    } 
});

$("#div2").on("click", function(e) {

    e.stopPropagation();

});

$("#div2").on("click", function(e) {

    e.stopPropagation();

});

function printOutput(text){
    $("#console-container").append('<div class="prompt">'+
        '<div class="output">' +
            text + 
        '</div>' +
    '</div>');
}

function summarization(){

}

function prompt(text){
    const input = $("#user-input")
    printOutput(text)
    $("#console-container").append(input.parent().parent().clone())
    input.prop("disabled", true);
    input.removeAttr('id');

    $('#user-input').val('');
    $("#user-input").focus();
    $("#user-input").prop("disabled", false);
}

function clearConsole(){
    const userInput = $("#user-input").parent().parent()

    $("#console-container").html('');
    $("#console-container").append(userInput);


    $('#user-input').val('');
    $('#user-input').focus();
}

//print jelp
function printHelp(){
    let helpOutput = "<p>These are the list of available commands: </p>";

    helpOutput += "<table style='margin-bottom: 5px'>";
    // helpOutput += "<thead>";
    // helpOutput += "<tr>";
    // helpOutput += "<td>command</td>"
    // helpOutput += "<td>description</td>"
    // helpOutput += "</tr>";
    // helpOutput += "</thead>";

    // for(let i = 0; i < commands.length; i++){
    //     helpOutput += "<tr>";
    //     helpOutput += "<td>"+commands[i].command+"</td>";
    //     helpOutput += "<td>"+commands[i].info+"</td>"
    //     helpOutput += "</tr>";
    // }

    helpOutput += "<tr>";
    helpOutput += "<td>summary-text</td>"
    helpOutput += "<td>Create Text Summarization. format summary-text <your text> \n example (summary-text Aku seorang kapiten yang hidup di gurun pasir.) </td>"
    helpOutput += "</tr>";


    helpOutput += "<tr>";
    helpOutput += "<td>clear</td>"
    helpOutput += "<td>clear the console</td>"
    helpOutput += "</tr>";

    helpOutput += "</table>";
    helpOutput += "<p>Commands are case sensitive</p>"

    prompt(helpOutput);
}

