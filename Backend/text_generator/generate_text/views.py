from django.shortcuts import render
import json
# Create your views here.
import requests
from django.http import JsonResponse
import anthropic
from django.views.decorators.csrf import csrf_exempt
client = anthropic.Anthropic(
    # defaults to os.environ.get("ANTHROPIC_API_KEY")
    api_key="",
)
@csrf_exempt
def generate_text(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            prompt = data.get('input')
            print(prompt)
            message = client.messages.create(
                            model="claude-instant-1.2",
                            max_tokens=100,
                            temperature=0.0,
                            system="Respond only in Yoda-speak.",
                            messages=[
                                    {"role": "user", "content": prompt}
                                    ]
                        )
            
            return JsonResponse({'generated_text': message.content[0].text})
        except json.JSONDecodeError as e:
            return JsonResponse({'error': str(e)}, status=400)
        # prompt = request.POST.get('input')
        # print(prompt)
    
        # return JsonResponse({'generated_text': prompt})
    else:
        return JsonResponse({'error': 'Invalid request method'})
