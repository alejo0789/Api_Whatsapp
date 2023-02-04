import openai
openai.api_key = "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"

prompt = "escribe un email"

completions = openai.Completion.create(
    engine="text-davinci-002",
    prompt=prompt,
    max_tokens=1024,
    n=1,
    stop=None,
    temperature=0.5,
)

message = completions.choices[0].text
print(message)