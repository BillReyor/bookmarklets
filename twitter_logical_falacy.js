javascript:(function() {
  async function analyzeTweetForFallacies(tweetText, apiKey) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: `Analyze the following tweet for logical fallacies: "${tweetText}"`,
        max_tokens: 100,
        n: 1,
        stop: null,
        temperature: 0.5,
      }),
    });

    const data = await response.json();
    return data.choices[0].text.trim();
  }

  async function checkTweetForFallacies() {
    const apiKey = 'your_openai_api_key_here';
    const tweetText = document.querySelector('.tweet-text').innerText;

    try {
      const analysis = await analyzeTweetForFallacies(tweetText, apiKey);
      alert(`Analysis: ${analysis}`);
    } catch (error) {
      console.error(error);
      alert('Error analyzing tweet. Check console for details.');
    }
  }

  checkTweetForFallacies();
})();
