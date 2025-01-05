const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "I have a dream.",
    "To be or not to be, that is the question.",
    "Ask not what your country can do for you, ask what you can do for your country."
  ];
  
  function generateSentence() {
    const index = Math.floor(Math.random() * sentences.length);
    const sentenceElement = document.getElementById("sentence");
    sentenceElement.textContent = sentences[index];
  }
  