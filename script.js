const quoteTextElement = document.getElementById('quote-text');
        const newQuoteBtn = document.getElementById('new-quote-btn');

        async function fetchQuote() {
            quoteTextElement.textContent = "लोड हो रहा है...";
            try {
                // *** Yahan aapka naya API URL dalna hai ***
                const apiURL = 'https://teachersqoutes-6dst.vercel.app/api/qoute'; // Apne API ka sahi URL yahan dalein
                
                const response = await fetch(apiURL);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json(); // API JSON format mein data dega
                quoteTextElement.textContent = `"${data.quote}"`; // 'quote' property ko display karein
            } catch (error) {
                console.error("Fetch error:", error);
                quoteTextElement.textContent = "विचार लोड करने में समस्या हुई। कृपया बाद में पुनः प्रयास करें।";
            }
        }

        newQuoteBtn.addEventListener('click', fetchQuote);
        fetchQuote();