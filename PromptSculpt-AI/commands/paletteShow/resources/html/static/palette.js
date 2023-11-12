function getDateString() {
    const today = new Date();
    const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    return `Date: ${date}, Time: ${time}`;
}
document.getElementById('script-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var prompt = document.getElementById('prompt').value;
    // Send the prompt to the GPT model and get the response
    // This will depend on how you're interacting with the GPT model
    // For example, if you're using an API, you might do something like this:
    var prompt = document.getElementById('prompt').value;

   // Send the prompt to GPT-3.5 Turbo
   sendToGPT3(prompt);
});

function sendToGPT3(prompt) {
    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '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'
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 60
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from GPT-3.5 Turbo
        console.log(data.choices[0].text.trim());
    })
    .catch((error) => {
        console.error('Error:', error);
    });
 }
 