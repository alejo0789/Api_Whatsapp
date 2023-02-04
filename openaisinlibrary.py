import requests
import json

api_key = "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"
prompt = "Once upon a time"

response = requests.post("https://api.openai.com/v1/engines/davinci/completions",
    headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    },
    json={
        "prompt": prompt,
        "temperature": 0.5,
        "max_tokens": 100
    }
)

response_text = json.loads(response.text)
print(response_text["choices"][0]["text"])