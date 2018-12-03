from nltk.chat.util import Chat, reflections
pairs = [
[
r'hi',
['hello', 'hey', 'hola',]
],
[
r"My name is (.)",
['hello %1',]
],
]
def hugot_bot():
print("Hi how can I help you today?")
chat = Chat(pairs, reflections)
chat.converse()
if name == "main":
hugot_bot()
[
r'(.) (hungry|sleepy)',
[
"%1 %2"
]
]