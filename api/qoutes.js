export default function handler(request, response) {
  const quotes = [
    "शिक्षा सबसे शक्तिशाली हथियार है जिसे आप दुनिया बदलने के लिए उपयोग कर सकते हैं। - नेल्सन मंडेला",
    "एक अच्छा शिक्षक आशा को प्रेरित कर सकता है, कल्पना को प्रज्वलित कर सकता है, और सीखने के प्रति प्रेम पैदा कर सकता है। - ब्रैड हेनरी"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // HTML भेजने के बजाय, सिर्फ टेक्स्ट भेजें
  response.status(200).send(randomQuote); 
}
