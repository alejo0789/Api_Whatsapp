import json
import requests

def generate_text(prompt):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer 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",
    }
    data = {
        "prompt": prompt,
        "max_tokens": 2048,
    }
    response = requests.post(
        "https://api.openai.com/v1/engines/davinci/completions",
        headers=headers,
        json=data,
    )
    response.raise_for_status()
    json_response = json.loads(response.text)
    return json_response["choices"][0]["text"]

text=generate_text("hello how are you today?")
print(text)