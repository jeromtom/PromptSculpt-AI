import openai

def handle_data(data):
   prompt = data['prompt']
   response = openai.ChatCompletion.create(
       model="gpt-3.5-turbo",
       messages=[
           {"role": "system", "content": "You are a helpful Fusion 360 script generator."},
           {"role": "user", "content": prompt}
       ]
   )
   script = response['choices'][0]['message']['content']
   return script

# Replace with your actual Fusion 360 API handler
def fusion_api_handler(action, data):
   if action == 'send':
       data = json.loads(data)
       script = handle_data(data)
       # Send script back to Fusion 360 here
   else:
       return 'Unexpected command type: ' + action
   return 'OK'
