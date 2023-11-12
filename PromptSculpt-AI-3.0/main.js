document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var prompt = document.getElementById('prompt').value;
    var args = {
        prompt : prompt
    };
    adsk.fusionSendData('send', JSON.stringify(args));
 });
 
 window.fusionJavaScriptHandler = {handle: function(action, data){
    try {
        if (action == 'send') {
            // Send data to GPT model here
        }
        else if (action == 'debugger') {
            debugger;
        }
        else {
            return 'Unexpected command type: ' + action;
        }
    } catch (e) {
        console.log(e);
        console.log('exception caught with command: ' + action + ', data: ' + data);
    }
    return 'OK';
 }};
 