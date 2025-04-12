document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const messageSpace = document.getElementById('message-space');
    const sendButton = document.querySelector('.panel-send');
    const headerNew = document.querySelector('.header-new');
    const headerApi = document.querySelector('.header-api');
    const headerSettings = document.querySelector('.header-settings');

    if (!chatForm) {
        return;
    }

    // Add welcome screen creation function
    function createWelcomeScreen() {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.classList.add('space-welcome');

        const logoSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        logoSvg.classList.add('space-welcome-logo');
        logoSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        logoSvg.setAttribute('width', '250');
        logoSvg.setAttribute('height', '206');
        logoSvg.setAttribute('viewBox', '0 0 250 206');
        logoSvg.setAttribute('fill', 'none');

        // Insert the complex SVG path content
        logoSvg.innerHTML = `
          <path d="M33.2518 150.829L31.605 148.025L28.3799 148.441C24.708 148.915 19.0736 148.429 14.3771 145.603C9.98219 142.959 5.8708 137.962 5.26891 128.131C4.40387 114.002 5.22354 106.66 6.94784 102.378C8.44703 98.6547 10.7552 96.8989 15.2924 94.6303L17.3798 93.5866L17.8921 91.3098C18.617 88.0879 21.7645 79.8931 27.8997 74.5495L29.8506 72.8504L29.5565 70.2801C28.4709 60.7929 27.626 46.0197 28.5987 32.6398C29.0858 25.939 30.0155 19.7888 31.5049 14.8963C32.8808 10.3768 34.5358 7.59641 36.1489 6.17258C36.9314 6.1 39.0672 6.09071 42.8388 7.42384C47.5135 9.07623 54.1542 12.6183 62.6245 19.6397L65.4164 21.954L68.4533 19.9721C85.7038 8.71381 133.033 -7.42714 181.708 20.1332L184.517 21.7234L187.094 19.7806C190.053 17.5495 195.097 14.1541 200.439 11.3424C205.577 8.63753 210.249 6.87738 213.46 6.62283C213.79 6.8331 214.419 7.33541 215.234 8.47879C216.516 10.278 218.002 13.3373 219.228 18.1922C221.681 27.9097 222.909 44.0931 220.049 69.7149L219.734 72.5369L222.02 74.2214C223.457 75.2804 225.861 77.4886 227.921 80.3794C229.994 83.29 231.437 86.4943 231.602 89.6201L231.771 92.8285L234.776 93.964C238.052 95.2015 244.618 99.9424 244.618 108.462C244.618 110.571 244.732 113.088 244.845 115.604C244.922 117.314 244.999 119.023 245.041 120.601C245.151 124.813 245.059 128.918 244.373 132.687C243.69 136.434 242.455 139.638 240.428 142.203C238.443 144.715 235.466 146.913 230.766 148.317L227.46 149.304L227.262 152.749C226.935 158.43 224.274 167.371 217.242 174.865C210.345 182.213 198.919 188.52 180.341 188.629L177.37 188.646L176.002 191.284C175.77 191.731 172.588 195.833 163.441 194.47L162.211 194.287L161.042 194.71C147.092 199.758 123.728 203.682 99.5495 198.839C75.5509 194.032 50.7423 180.607 33.2518 150.829Z" fill="#2B7DB4" stroke="#013B6C" stroke-width="9.83987"/>
          <path d="M67.7901 141.454C70.7999 143.538 69.0442 145.795 67.7901 146.664C66.6325 148.111 50.715 146.664 32.7717 148.689L33.9294 138.85C43.9622 138.85 64.7802 139.371 67.7901 141.454Z" fill="#013B6C"/>
          <path d="M182.321 141.454C179.311 143.538 181.067 145.795 182.321 146.664C183.479 148.111 199.396 146.664 217.34 148.689L216.182 138.85C206.149 138.85 185.331 139.371 182.321 141.454Z" fill="#013B6C"/>
          <path d="M86.0228 156.214C89.2062 174.446 115.928 169.43 125.382 163.449C128.662 165.571 137.248 169.758 145.351 169.526C155.481 169.237 164.742 162.291 164.742 156.214C164.742 151.302 161.848 151.294 160.401 151.294C158.954 151.294 156.233 151.12 155.77 156.214C155.307 161.307 148.631 162.388 145.351 162.291C137.016 163.68 131.46 157.082 129.723 153.609V149.847C138.521 146.837 141.107 140.489 141.3 137.692C141.493 134.412 138.579 127.794 125.382 127.562C112.185 127.331 109.272 134.219 109.465 137.692C109.928 143.48 116.989 148.207 120.462 149.847V153.609C117.452 161.481 109.175 162.677 105.413 162.291C99.6249 162.581 94.4156 160.844 94.4156 156.214C94.4156 152.509 92.1003 151.294 90.0745 151.294C86.891 151.294 85.7739 154.788 86.0228 156.214Z" fill="#013B6C"/>
          <path d="M225.228 147.821C225.691 168.196 206.127 180.042 196.287 183.418L218.861 147.821H225.228Z" fill="white"/>
          <path d="M71.5525 54.6324C59.2816 60.4205 50.6187 70.3569 47.821 74.6015C39.4861 49.3651 43.5764 36.3032 46.6634 32.9268C58.7028 35.7051 68.2725 48.5548 71.5525 54.6324Z" fill="#013B6C"/>
          <path d="M178.923 54.6324C191.194 60.4205 199.857 70.3569 202.654 74.6015C210.989 49.3651 206.899 36.3032 203.812 32.9268C191.773 35.7051 182.203 48.5548 178.923 54.6324Z" fill="#013B6C"/>
          <path d="M226.965 144.638V143.191L223.492 144.349L223.781 145.796L226.965 144.638Z" fill="#013B6C"/>
          <path d="M222.913 146.086C222.913 159.283 206.031 175.702 197.734 182.262L177.186 188.918L179.212 182.262C204.449 170.454 212.687 148.98 213.652 139.719C217.819 114.945 213.845 95.2464 211.336 88.4936C212.957 86.4098 214.134 78.3448 214.52 74.7754C217.993 75.933 221.948 80.39 223.492 82.4159C222.334 84.2681 222.334 87.4324 222.623 88.4936H226.964V143.192L222.913 146.086Z" fill="#013B6C"/>
          <path d="M221.177 88.7828H228.701L223.781 80.9688L221.177 88.7828Z" fill="white"/>
          <path d="M39.7176 88.2034C36.5341 91.3869 34.5083 126.019 34.2189 142.901L23.8002 144.638V97.4644C23.8233 96.3459 22.9556 96.3358 20.3273 97.4644L23.8002 88.2034H28.1413C28.1413 85.8881 27.3695 83.7658 26.9837 82.994C27.9098 79.9842 32.7718 76.3377 35.0871 74.8906C35.0871 78.3635 35.9553 84.4411 39.7176 88.2034Z" fill="#013B6C"/>
          <path d="M29.8776 89.3619H22.353L27.273 81.5479L29.8776 89.3619Z" fill="white"/>
          <path d="M158.664 42.4774C130.418 33.4479 101.554 38.4258 90.9428 42.1881L72.9995 22.2192C113.98 -1.39647 160.98 12.3791 176.318 22.219L158.664 42.4774Z" fill="white"/>
          <path d="M86.6015 52.0278C79.6557 42.3037 69.0518 31.7693 64.7107 27.7176L73.5782 21.3506L91.2321 41.3197C116.237 31.8272 146.413 37.3645 158.375 41.3197L176.318 21.9294L185.116 27.4282C178.402 33.2163 167.25 46.1432 162.716 52.0278C133.544 40.9146 99.8178 47.3973 86.6015 52.0278Z" fill="#013B6C"/>
          <path d="M155.77 179.657C148.13 181.509 149.114 190.269 150.561 194.417C166.768 203.447 176.993 197.6 180.08 193.548C181.045 191.716 182.164 186.776 178.923 181.683C175.681 176.589 162.137 178.21 155.77 179.657Z" fill="#013B6C"/>
          <circle cx="79.6559" cy="113.672" r="17.0751" fill="#013B6C"/>
          <circle cx="170.53" cy="113.672" r="17.0751" fill="#013B6C"/>
          <circle cx="174.871" cy="110.488" r="4.05171" fill="white"/>
          <circle cx="83.997" cy="110.488" r="4.05171" fill="white"/>
          <path d="M187.605 154.768C190.846 154.768 202.268 157.855 207.574 159.398C205.838 161.52 202.365 165.823 202.365 166.054C202.365 166.344 190.789 161.424 187.605 160.556C184.925 159.825 184.132 158.626 184.132 157.662C183.939 156.697 184.364 154.768 187.605 154.768Z" fill="#013B6C"/>
          <path d="M62.8703 154.479C59.6289 154.479 48.207 157.566 42.9012 159.109C44.6376 161.231 48.1105 165.534 48.1105 165.765C48.1105 166.055 59.6868 161.135 62.8703 160.267C65.5507 159.536 66.3432 158.337 66.3432 157.373C66.5361 156.408 66.1117 154.479 62.8703 154.479Z" fill="#013B6C"/>
        `;

        welcomeDiv.appendChild(logoSvg);

        const welcomeText = document.createElement('span');
        welcomeText.classList.add('space-welcome-text');
        welcomeText.textContent = 'S čím mohu pomoci?';
        welcomeDiv.appendChild(welcomeText);
        
        // Add tutorial link that works like the API and Settings buttons
        const tutorialBlock = document.createElement('div');
        tutorialBlock.classList.add('welcome-tutorial-block');
        tutorialBlock.style.display = 'flex';
        tutorialBlock.style.alignItems = 'center';
        tutorialBlock.style.gap = '10px';
        tutorialBlock.style.marginTop = '20px';
        tutorialBlock.style.cursor = 'pointer';
        tutorialBlock.style.pointerEvents = 'auto'; // This is the key fix

        // Create the SVG element
        const tutorialSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        tutorialSvg.setAttribute('width', '31');
        tutorialSvg.setAttribute('height', '25');
        tutorialSvg.setAttribute('viewBox', '0 0 62 50');
        tutorialSvg.setAttribute('fill', 'none');
        tutorialSvg.style.pointerEvents = 'auto'; // Also ensure SVG is clickable

        // Add SVG content
        tutorialSvg.innerHTML = `
          <path d="M30.5556 0L0 16.6667L11.1111 22.7222V39.3889L30.5556 50L50 39.3889V22.7222L55.5556 19.6944V38.8889H61.1111V16.6667L30.5556 0ZM49.5 16.6667L30.5556 27L11.6111 16.6667L30.5556 6.33333L49.5 16.6667ZM44.4444 36.1111L30.5556 43.6667L16.6667 36.1111V25.75L30.5556 33.3333L44.4444 25.75V36.1111Z" fill="url(#paint0_linear_415_3)"/>
          <defs>
            <linearGradient id="paint0_linear_415_3" x1="71.5762" y1="-15.0224" x2="9.46943" y2="14.6302" gradientUnits="userSpaceOnUse">
              <stop stop-color="#013B6C"/>
              <stop offset="1" stop-color="#2B7DB4"/>
            </linearGradient>
          </defs>
        `;

        // Create the text element
        const tutorialText = document.createElement('span');
        tutorialText.textContent = 'Sledujte náš užitečný API návod.';
        tutorialText.style.background = 'linear-gradient(249deg, #013B6C -20.75%, #2B7DB4 68.99%)';
        tutorialText.style.webkitBackgroundClip = 'text';
        tutorialText.style.webkitTextFillColor = 'transparent';
        tutorialText.style.backgroundClip = 'text';
        tutorialText.style.fontWeight = '500';
        tutorialText.style.pointerEvents = 'auto'; // Also ensure text is clickable

        // Append elements
        tutorialBlock.appendChild(tutorialSvg);
        tutorialBlock.appendChild(tutorialText);
        welcomeDiv.appendChild(tutorialBlock);

        // Add direct click event - simpler approach
        tutorialBlock.onclick = () => {
            showTutorialModal();
        };

        return welcomeDiv;
    }

    // Function to check if messageSpace is empty and show/hide welcome screen
    function updateWelcomeScreen() {
        if (!messageSpace) return;

        const welcomeScreen = messageSpace.querySelector('.space-welcome');
        // More specific check for any message content
        const hasMessages = messageSpace.querySelectorAll('.space-request, .space-response').length > 0;

        if (!hasMessages) {
            // If chat is empty and no welcome screen exists, add it
            if (!welcomeScreen) {
                messageSpace.appendChild(createWelcomeScreen());
            }
        } else {
            // If chat has messages and welcome screen exists, remove it
            if (welcomeScreen) {
                welcomeScreen.remove();
            }
        }
    }

    // Initialize welcome screen on page load
    updateWelcomeScreen();

    function createRequestMessageElement(messageText) {
        const requestDiv = document.createElement('div');
        requestDiv.classList.add('space-request');

        const requestBlock = document.createElement('div');
        requestBlock.classList.add('space-request-block');

        const requestTextSpan = document.createElement('span');
        requestTextSpan.classList.add('space-request-text');
        requestTextSpan.textContent = messageText;

        // Get the copy icon template
        const template = document.getElementById('copyIconTemplate');
        if (template) {
            // Create a container for the copy icon
            const requestIcons = document.createElement('div');
            requestIcons.classList.add('space-request-icons');

            // Clone the icon from template
            const copyIconClone = template.content.cloneNode(true);
            requestIcons.appendChild(copyIconClone);

            // Add click event to the copy icon
            const copyIcon = requestIcons.querySelector('.space-copy');
            copyIcon.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent triggering the request block click
                navigator.clipboard.writeText(messageText)
                    .then(() => {
                        console.log('Request text copied to clipboard.');
                    })
                    .catch(err => {
                        console.error('Failed to copy text:', err);
                    });
            });

            requestDiv.appendChild(requestIcons);
        }

        requestBlock.appendChild(requestTextSpan);
        requestDiv.appendChild(requestBlock);

        // New functionality: on click on .space-request-block copy text into chat input
        requestBlock.addEventListener('click', () => {
            if (chatInput) {
                chatInput.value = requestTextSpan.textContent;
                chatInput.focus();
            }
        });

        return requestDiv;
    }

    const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
    let OPENROUTER_API_KEY = '';
    let OPENROUTER_MODEL = 'meta-llama/llama-3.3-70b-instruct:free';

    function createResponseMessageElement(messageText, originalQuery, showIcons = false, thinking = null) {
        const responseDiv = document.createElement('div');
        responseDiv.classList.add('space-response');

        // Store the original query in a data attribute (if provided)
        if (originalQuery) {
            responseDiv.dataset.originalQuery = originalQuery;
        }

        const responseBlock = document.createElement('div');
        responseBlock.classList.add('space-response-block');

        const responseTextSpan = document.createElement('span');
        responseTextSpan.classList.add('space-response-text');
        
        // Check if response is empty and provide helpful message in Czech
        if (messageText && messageText.trim() !== '') {
            // Use parsed markdown instead of raw text
            responseTextSpan.innerHTML = parseMarkdown(messageText);
        } else {
            // Empty response message in Czech
            responseTextSpan.innerHTML = '<p>Promiň, teď tvůj požadavek nejde zpracovat. Zkus to prosím znovu.</p>';
            responseDiv.classList.add('empty-response'); // Optional: Add class for styling
        }

        responseBlock.appendChild(responseTextSpan);
        
        // Add thinking toggle if thinking is available
        if (thinking) {
            const thinkingToggle = document.createElement('div');
            thinkingToggle.classList.add('thinking-toggle');
            thinkingToggle.textContent = "Thinking...";
            
            const thinkingContent = document.createElement('div');
            thinkingContent.classList.add('thinking-content');
            thinkingContent.style.display = 'none';
            thinkingContent.textContent = thinking;
            
            thinkingToggle.addEventListener('click', () => {
                if (thinkingContent.style.display === 'none') {
                    thinkingContent.style.display = 'block';
                    thinkingToggle.textContent = "Hide thinking";
                    thinkingToggle.classList.add('active');
                } else {
                    thinkingContent.style.display = 'none';
                    thinkingToggle.textContent = "Thinking...";
                    thinkingToggle.classList.remove('active');
                }
            });
            
            responseBlock.appendChild(thinkingToggle);
            responseBlock.appendChild(thinkingContent);
        }
        
        responseDiv.appendChild(responseBlock);

        // Only add icons if showIcons is true
        if (showIcons) {
            const template = document.getElementById('responseIconsTemplate');
            if (template) {
                // Clone the entire template content
                const iconsClone = template.content.cloneNode(true);
                responseDiv.appendChild(iconsClone);

                const responseIcons = responseDiv.querySelector('.space-response-icons');
                if (responseIcons) {
                    // Handle copy functionality
                    const copyIcon = responseIcons.querySelector('.space-copy');
                    if (copyIcon) {
                        copyIcon.addEventListener('click', () => {
                            const textToCopy = responseDiv.querySelector('.space-response-text').textContent;
                            navigator.clipboard.writeText(textToCopy)
                                .then(() => {
                                    console.log('Response text copied to clipboard.');
                                })
                                .catch(err => {
                                    console.error('Failed to copy text:', err);
                                });
                        });
                    }
                    
                    // Add functionality for rerun icon
                    const rerunIcon = responseIcons.querySelector('.space-rerun');
                    if (rerunIcon) {
                        rerunIcon.addEventListener('click', async () => {
                            const originalQuery = responseDiv.dataset.originalQuery;
                            if (originalQuery) {
                                // Get the parent container to add the temporary element
                                const parentContainer = responseDiv.parentNode;
                                if (!parentContainer) return;
                                
                                // Create a temporary response element WITHOUT icons
                                const tempResponseElement = createResponseMessageElement("", originalQuery, false);
                                const tempResponseTextSpan = tempResponseElement.querySelector('.space-response-text');
                                
                                // Clear the text content and add typing indicator
                                const typingIndicator = document.createElement('span');
                                typingIndicator.className = 'typing-indicator';
                                typingIndicator.textContent = "•••";
                                tempResponseTextSpan.appendChild(typingIndicator);
                                
                                // Replace the current response with the temporary one
                                parentContainer.replaceChild(tempResponseElement, responseDiv);
                                
                                try {
                                    // Variables to track content as it streams in
                                    let rawMarkdownContent = '';
                                    let currentThinking = '';
                                    let hasThinkingContent = false;
                                    
                                    // Create an AbortController for this rerun
                                    const abortController = new AbortController();
                                    
                                    // Call API with the original query and a chunk handler
                                    const result = await sendMessageToOpenRouter(
                                        originalQuery, 
                                        abortController.signal,
                                        (chunk, fullText, hasThinking, thinkingText) => {
                                            // Remove typing indicator if it's still there
                                            if (typingIndicator && typingIndicator.parentNode) {
                                                typingIndicator.parentNode.removeChild(typingIndicator);
                                            }
                                            
                                            // Store the markdown content
                                            rawMarkdownContent = fullText;
                                            
                                            // Update the temporary response with the current text
                                            tempResponseTextSpan.innerHTML = parseMarkdown(fullText);
                                            
                                            // Update thinking content
                                            if (hasThinking && thinkingText) {
                                                currentThinking = thinkingText;
                                                hasThinkingContent = true;
                                            }
                                            
                                            // Keep scrolling to the latest content
                                            if (messageSpace) {
                                                messageSpace.scrollTop = messageSpace.scrollHeight;
                                            }
                                        }
                                    );
                                    
                                    // After all chunks are received, create the final element with icons
                                    const newResponseElement = createResponseMessageElement(
                                        rawMarkdownContent,  // Use the accumulated markdown
                                        originalQuery, 
                                        true,  // Now show icons
                                        hasThinkingContent && currentThinking.length > 0 ? currentThinking : null
                                    );
                                    
                                    // Replace the temporary element
                                    parentContainer.replaceChild(newResponseElement, tempResponseElement);
                                    
                                } catch (error) {
                                    // Remove typing indicator if it exists
                                    if (typingIndicator && typingIndicator.parentNode) {
                                        typingIndicator.parentNode.removeChild(typingIndicator);
                                    }
                                    
                                    // Show error message
                                    tempResponseTextSpan.textContent = "Promiň, teď tvůj požadavek nejde zpracovat. Zkus to prosím znovu.";
                                    
                                    // After error, create a final response WITH icons
                                    const errorResponseElement = createResponseMessageElement(
                                        "Promiň, teď tvůj požadavek nejde zpracovat. Zkus to prosím znovu.", 
                                        originalQuery, 
                                        true  // Show icons even for errors
                                    );
                                    
                                    // Replace the temporary element
                                    parentContainer.replaceChild(errorResponseElement, tempResponseElement);
                                }
                            }
                        });
                    }
                }
            }
        }

        return responseDiv;
    }

    async function sendMessageToOpenRouter(message, signal, onChunk) {
        try {
            // Check if API key is provided
            if (!OPENROUTER_API_KEY) {
                throw new Error("API klíč není nastaven. Prosím, zadejte API klíč v nastavení.");
            }
            
            console.log("Sending request to model:", OPENROUTER_MODEL);
            
            // Build request body
            const requestBody = {
                model: OPENROUTER_MODEL,
                messages: [{ role: 'user', content: message }],
                stream: true
            };
            
            console.log("Sending request to OpenRouter API...");
            
            const response = await fetch(OPENROUTER_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                    'HTTP-Referer': window.location.origin
                },
                body: JSON.stringify(requestBody),
                signal
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`API Error ${response.status}:`, errorText);
                throw new Error(`API request failed with status ${response.status}`);
            }

            // Process the stream
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let completeResponse = '';
            
            try {
                while (true) {
                    const { value, done } = await reader.read();
                    
                    if (done) {
                        console.log("Stream complete");
                        break;
                    }
                    
                    // Convert the Uint8Array to a string
                    const chunk = decoder.decode(value, { stream: true });
                    console.log("Received chunk of length:", chunk.length);
                    
                    // Process each line in the chunk
                    const lines = chunk.split('\n');
                    
                    for (const line of lines) {
                        if (!line.trim() || line.includes('[DONE]')) continue;
                        
                        if (line.startsWith('data: ')) {
                            try {
                                const jsonStr = line.substring(6); // Remove 'data: ' prefix
                                const json = JSON.parse(jsonStr);
                                
                                // Extract content from delta
                                const content = json.choices?.[0]?.delta?.content;
                                if (content) {
                                    completeResponse += content;
                                    console.log("New content:", content);
                                    if (onChunk) {
                                        onChunk(content, completeResponse);
                                    }
                                }
                            } catch (e) {
                                console.warn("Error parsing chunk:", e);
                            }
                        }
                    }
                }
                
                return { response: completeResponse };
            } catch (streamError) {
                console.error("Stream error:", streamError);
                if (completeResponse) {
                    return { response: completeResponse };
                }
                throw streamError;
            }
        } catch (error) {
            console.error("API request error:", error);
            throw error;
        }
    }

    // Save original sendButton content for later restoration
    const originalSendHTML = sendButton.innerHTML;

    chatForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!chatInput) return;

        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;
        if (!messageSpace) return;

        // Create a new container for this request-response pair
        const messageContainer = document.createElement('div');
        messageContainer.style.display = 'flex';
        messageContainer.style.flexDirection = 'column';
        messageContainer.style.gap = '1rem';
        messageContainer.style.width = '100%';
        messageContainer.style.marginBottom = '1rem';
        
        // Create the request element
        const newRequestElement = createRequestMessageElement(userMessage);
        messageContainer.appendChild(newRequestElement);
        
        chatInput.value = '';

        // First remove any welcome screen
        const welcomeScreen = messageSpace.querySelector('.space-welcome');
        if (welcomeScreen) {
            welcomeScreen.remove();
        }

        // Create response element with initial "Thinking..." text but NO icons yet
        const responseElement = createResponseMessageElement("", userMessage, false);
        const responseTextSpan = responseElement.querySelector('.space-response-text');
        responseTextSpan.textContent = "";

        // Create typing indicator
        const typingIndicator = document.createElement('span');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.textContent = "•••";
        responseTextSpan.appendChild(typingIndicator);
        
        messageContainer.appendChild(responseElement);
        
        // Append to add messages to the bottom
        messageSpace.appendChild(messageContainer);
        
        // Scroll to the bottom to show the newest message
        messageSpace.scrollTop = messageSpace.scrollHeight;

        // Update welcome screen status
        updateWelcomeScreen();

        // Create an AbortController to cancel the API request if needed
        const abortController = new AbortController();

        // Save original button content
        const originalSendHTML = sendButton.innerHTML;

        // Change to stop button
        sendButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 35 35" fill="none">
                <path d="M0 5C0 2.23858 2.23858 0 5 0H30C32.7614 0 35 2.23858 35 5V30C35 32.7614 32.7614 35 30 35H5C2.23858 35 0 32.7614 0 30V5Z" fill="url(#paint0_linear_392_92)"/>
                <defs>
                    <linearGradient id="paint0_linear_392_92" x1="40.9937" y1="-10.5157" x2="3.09782" y2="4.28783" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#013B6C"/>
                        <stop offset="1" stop-color="#2B7DB4"/>
                    </linearGradient>
                </defs>
            </svg>`;
        sendButton.disabled = false; // Change from true to false
        sendButton.style.cursor = "pointer";

        // Create a flag to track if request is aborted
        let isAborted = false;

        // Create stop handler with named function so we can properly remove it later
        function stopHandler(e) {
            e.preventDefault(); // Prevent form submission
            e.stopPropagation(); // Stop event bubbling
            console.log('Stop button clicked');
            isAborted = true;
            abortController.abort();
            
            if (typingIndicator && typingIndicator.parentNode) {
                typingIndicator.parentNode.removeChild(typingIndicator);
            }
            
            // Display the partial response with icons when stopped
            if (messageContainer.contains(responseElement)) {
                const newResponseElement = createResponseMessageElement(
                    rawMarkdownContent || responseTextSpan.innerHTML, 
                    userMessage, 
                    true,
                    hasThinkingContent && currentThinking.length > 0 ? currentThinking : null
                );
                messageContainer.removeChild(responseElement);
                messageContainer.appendChild(newResponseElement);
            }
            
            // Restore send button (immediately after stopping)
            sendButton.innerHTML = originalSendHTML;
            sendButton.disabled = chatInput.value.trim() === '';
            sendButton.style.cursor = "pointer";
            // Important: Remove the event listener!
            sendButton.removeEventListener('click', stopHandler);
        }

        // Add the stop handler
        sendButton.addEventListener('click', stopHandler);

        try {
            // Variables to track content
            let rawMarkdownContent = '';
            let currentThinking = '';
            let hasThinkingContent = false;
            
            // Use the streaming function with a simpler callback
            await sendMessageToOpenRouter(userMessage, abortController.signal, 
                (chunk, fullText, hasThinking, thinkingText) => {
                    // Remove typing indicator if it's the first chunk
                    if (typingIndicator && typingIndicator.parentNode) {
                        typingIndicator.parentNode.removeChild(typingIndicator);
                    }
                    
                    // Store raw markdown content
                    rawMarkdownContent = fullText;
                    
                    // Don't parse individual chunks - parse the complete accumulated text instead
                    const parsedFullText = parseMarkdown(fullText);
                    
                    // Simply replace the entire content with the newly parsed full text
                    responseTextSpan.innerHTML = parsedFullText;
                    
                    // For smoother appearance, we'll still animate small chunks
                    if (!isAborted) {
                        // Create animated cursor effect at the end (optional)
                        const addBlinkingCursor = false;
                        if (addBlinkingCursor) {
                            const cursorSpan = document.createElement('span');
                            cursorSpan.className = 'typing-cursor';
                            cursorSpan.textContent = '▋';
                            responseTextSpan.appendChild(cursorSpan);
                            
                            // Remove cursor after a brief moment
                            setTimeout(() => {
                                if (cursorSpan.parentNode === responseTextSpan) {
                                    responseTextSpan.removeChild(cursorSpan);
                                }
                            }, 500);
                        }
                    }
                    
                    // Update thinking content if provided
                    if (hasThinking && thinkingText) {
                        currentThinking = thinkingText;
                        hasThinkingContent = true;
                    }
                    
                    // Keep scrolling to the bottom
                    messageSpace.scrollTop = messageSpace.scrollHeight;
                }
            );
            
            // After streaming completes, create the final response element with icons
            console.log("Creating final response with length:", rawMarkdownContent.length);
            const newResponseElement = createResponseMessageElement(
                rawMarkdownContent,
                userMessage, 
                true,
                hasThinkingContent && currentThinking.length > 0 ? currentThinking : null
            );
            
            // Replace the temporary element
            messageContainer.removeChild(responseElement);
            messageContainer.appendChild(newResponseElement);
            
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Error during chat request:", error);
                let errorMessage = "Omlouvám se, ale došlo k chybě při zpracování vaší žádosti.";
                
                // Display more specific error messages
                if (error.message.includes("API klíč")) {
                    errorMessage = error.message;
                } else if (error.message.includes("status 401")) {
                    errorMessage = "Neplatný API klíč. Zkontrolujte své nastavení API.";
                } else if (error.message.includes("status 400")) {
                    errorMessage = "Neplatný požadavek na model. Zkuste jiný model v nastavení.";
                } else if (error.message.includes("status 429")) {
                    errorMessage = "Překročili jste limit požadavků na API. Zkuste to později.";
                } else if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
                    errorMessage = "Problém s připojením k API. Zkontrolujte své internetové připojení.";
                }
                
                responseTextSpan.textContent = errorMessage;
            }
        } finally {
            // Remove typing indicator if it still exists
            if (typingIndicator && typingIndicator.parentNode) {
                typingIndicator.parentNode.removeChild(typingIndicator);
            }
            
            // If the response is still in the DOM and there was an error or abort,
            // add the icons now so they're always available at the end
            if (messageContainer.contains(responseElement)) {
                const finalResponseText = responseTextSpan.textContent;
                const newResponseElement = createResponseMessageElement(finalResponseText, userMessage, true);
                messageContainer.removeChild(responseElement);
                messageContainer.appendChild(newResponseElement);
            }
            
            // Restore the original send button
            sendButton.innerHTML = originalSendHTML;
            sendButton.disabled = false;
            sendButton.style.cursor = "pointer";
            sendButton.removeEventListener('click', stopHandler);
        }

        messageSpace.scrollTop = messageSpace.scrollHeight;
    });

    if (chatInput && sendButton) {
        chatInput.addEventListener('input', () => {
            sendButton.disabled = chatInput.value.trim() === '';
        });
        sendButton.disabled = chatInput.value.trim() === '';
    }

    if (chatInput) {
        chatInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                if (e.shiftKey) {
                    e.preventDefault();

                    const cursorPos = this.selectionStart;

                    this.value =
                        this.value.substring(0, cursorPos) +
                        '\n' +
                        this.value.substring(cursorPos);

                    this.selectionStart = this.selectionEnd = cursorPos + 1;

                    return false;
                }
            }
        });
    }

    // Clear messageSpace when .header-new is clicked
    if (headerNew && messageSpace) {
        headerNew.addEventListener('click', () => {
            while (messageSpace.firstChild) {
                messageSpace.removeChild(messageSpace.firstChild);
            }
            // Show welcome screen after clearing messages
            updateWelcomeScreen();

            if (chatInput) {
                chatInput.focus();
            }
        });
    }

    if (headerApi) {
        headerApi.addEventListener('click', () => {
            let overlay = document.getElementById('api-overlay');
            if (!overlay) { // Open modal
                overlay = document.createElement('div');
                overlay.id = 'api-overlay';
                overlay.className = 'modal-overlay'; // Add common class for styling
                document.body.appendChild(overlay);

                const apiBlock = document.createElement('div');
                apiBlock.id = 'api-block';
                apiBlock.className = 'modal-block'; // Add common class for styling

                // Position below header-api
                const headerApiRect = headerApi.getBoundingClientRect();
                apiBlock.style.top = (headerApiRect.bottom + 10 + window.scrollY) + "px";

                // Create form with vertical layout
                const form = document.createElement('form');
                form.id = 'api-form';
                form.className = 'modal-form'; // Add common class for styling

                // Create API key input container similar to settings-select-container
                const inputContainer = document.createElement('div');
                inputContainer.className = 'settings-select-container';

                // Create label like in settings
                const label = document.createElement('label');
                label.textContent = 'API klíč:';
                label.htmlFor = 'api-input';
                label.className = 'settings-label';

                // Create input container
                const apiInputContainer = document.createElement('div');
                apiInputContainer.className = 'api-input-container';

                // Create input field
                const input = document.createElement('input');
                input.type = 'password';
                input.placeholder = 'Zadejte OpenRouter API klíč';
                input.className = 'api-input';
                input.id = 'api-input';
                input.value = OPENROUTER_API_KEY;

                // Create toggle icon
                const toggleIcon = document.createElement('span');
                toggleIcon.className = 'api-toggle-icon';

                // Add eye icon SVG
                toggleIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15" fill="none">
                  <path d="M11 4.5C10.2044 4.5 9.44129 4.81607 8.87868 5.37868C8.31607 5.94129 8 6.70435 8 7.5C8 8.29565 8.31607 9.05871 8.87868 9.62132C9.44129 10.1839 10.2044 10.5 11 10.5C11.7956 10.5 12.5587 10.1839 13.1213 9.62132C13.6839 9.05871 14 8.29565 14 7.5C14 6.70435 13.6839 5.94129 13.1213 5.37868C12.5587 4.81607 11.7956 4.5 11 4.5ZM11 12.5C9.67392 12.5 8.40215 11.9732 7.46447 11.0355C6.52678 10.0979 6 8.82608 6 7.5C6 6.17392 6.52678 4.90215 7.46447 3.96447C8.40215 3.02678 9.67392 2.5 11 2.5C12.3261 2.5 13.5979 3.02678 14.5355 3.96447C15.4732 4.90215 16 6.17392 16 7.5C16 8.82608 15.4732 10.0979 14.5355 11.0355C13.5979 11.9732 12.3261 12.5 11 12.5ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0Z" fill="black"/>
                </svg>`;

                // Toggle password visibility
                toggleIcon.addEventListener('click', () => {
                    if (input.type === 'password') {
                        input.type = 'text';
                        toggleIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                          <path d="M13.3946 3.77853C12.9367 3.72756 12.4716 3.69834 12 3.69107C9.93951 3.70048 7.80355 4.2164 5.78174 5.20499C4.28058 5.96924 2.81828 7.04816 1.54834 8.37903C0.924641 9.05842 0.12862 10.0421 0 11.0917C0.0152 12.0009 0.963061 13.123 1.54834 13.8044C2.7392 15.083 4.16342 16.131 5.78174 16.9784C5.83676 17.0059 5.89193 17.033 5.94726 17.0598L4.44582 19.7589L6.48593 21L17.5143 1.23541L15.5505 0L13.3946 3.77853ZM18.0513 5.12657L16.5527 7.79999C17.2421 8.72194 17.6514 9.85886 17.6514 11.0917C17.6514 14.1645 15.1209 16.6557 11.9985 16.6557C11.8636 16.6557 11.7327 16.6407 11.6001 16.6316L10.6084 18.3988C11.0657 18.4492 11.5282 18.4859 12 18.4923C14.0625 18.4828 16.1972 17.9609 18.2168 16.9784C19.718 16.2141 21.1817 15.1352 22.4517 13.8044C23.0754 13.125 23.8714 12.1413 24 11.0917C23.9848 10.1825 23.0369 9.06033 22.4517 8.37901C21.2608 7.10041 19.8351 6.05237 18.2168 5.20495C18.1622 5.17769 18.1063 5.15317 18.0513 5.12657ZM11.9985 5.52768C12.1355 5.52768 12.2713 5.53332 12.4058 5.54275L11.2441 7.61304C9.61387 7.95327 8.39063 9.38109 8.39063 11.0902C8.39063 11.5195 8.46745 11.9305 8.60889 12.3115C8.60905 12.312 8.60873 12.3126 8.60889 12.3131L7.44433 14.3894C6.75331 13.4666 6.34569 12.3259 6.34569 11.0917C6.34571 8.01888 8.87617 5.52766 11.9985 5.52768ZM15.3779 9.89293L12.7603 14.5613C14.3818 14.2147 15.5962 12.7933 15.5962 11.0902C15.5962 10.6687 15.5145 10.2679 15.3779 9.89293Z" fill="black"/>
                        </svg>`;
                    } else {
                        input.type = 'password';
                        toggleIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15" fill="none">
                          <path d="M11 4.5C10.2044 4.5 9.44129 4.81607 8.87868 5.37868C8.31607 5.94129 8 6.70435 8 7.5C8 8.29565 8.31607 9.05871 8.87868 9.62132C9.44129 10.1839 10.2044 10.5 11 10.5C11.7956 10.5 12.5587 10.1839 13.1213 9.62132C13.6839 9.05871 14 8.29565 14 7.5C14 6.70435 13.6839 5.94129 13.1213 5.37868C12.5587 4.81607 11.7956 4.5 11 4.5ZM11 12.5C9.67392 12.5 8.40215 11.9732 7.46447 11.0355C6.52678 10.0979 6 8.82608 6 7.5C6 6.17392 6.52678 4.90215 7.46447 3.96447C8.40215 3.02678 9.67392 2.5 11 2.5C12.3261 2.5 13.5979 3.02678 14.5355 3.96447C15.4732 4.90215 16 6.17392 16 7.5C16 8.82608 15.4732 10.0979 14.5355 11.0355C13.5979 11.9732 12.3261 12.5 11 12.5ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0Z" fill="black"/>
                        </svg>`;
                    }
                });

                // Build input container structure
                apiInputContainer.appendChild(input);
                apiInputContainer.appendChild(toggleIcon);
                
                // Add label and input container to the main container
                inputContainer.appendChild(label);
                inputContainer.appendChild(apiInputContainer);
                
                // Add input container to form
                form.appendChild(inputContainer);

                // Create save button
                const saveButton = document.createElement('button');
                saveButton.type = 'submit';
                saveButton.textContent = 'Uložit';
                saveButton.className = 'api-button api-save-button';

                // Create close button
                const closeButton = document.createElement('button');
                closeButton.type = 'button';
                closeButton.textContent = 'Zavřít';
                closeButton.className = 'api-button api-close-button';
                closeButton.addEventListener('click', () => {
                    overlay.parentNode.removeChild(overlay);
                });

                form.appendChild(saveButton);
                form.appendChild(closeButton);

                // Form submission handler
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    OPENROUTER_API_KEY = input.value.trim();
                    overlay.parentNode.removeChild(overlay);
                });
                apiBlock.appendChild(form);

                // Create info text
                const infoText = document.createElement('p');
                infoText.textContent = "Sledujte náš užitečný API návod.";
                infoText.className = 'api-info-text';
                apiBlock.appendChild(infoText);

                overlay.appendChild(apiBlock);

                // Focus the input field immediately after adding to DOM
                setTimeout(() => {
                    const apiInput = document.getElementById('api-input');
                    if (apiInput) {
                        apiInput.focus();
                    }
                }, 100);

                // Close modal when clicking outside
                overlay.addEventListener('click', (event) => {
                    if (event.target === overlay) {
                        overlay.parentNode.removeChild(overlay);
                    }
                });
            } else { // Close modal if already open
                overlay.parentNode.removeChild(overlay);
            }
        });
    }

    if (headerSettings) {
        headerSettings.addEventListener('click', () => {
            let overlay = document.getElementById('settings-overlay');
            if (!overlay) { // Open modal
                overlay = document.createElement('div');
                overlay.id = 'settings-overlay';
                overlay.className = 'modal-overlay'; // Use common class for styling
                document.body.appendChild(overlay);

                const settingsBlock = document.createElement('div');
                settingsBlock.id = 'settings-block';
                settingsBlock.className = 'modal-block'; // Use common class for styling

                // Position below header-settings
                const headerSettingsRect = headerSettings.getBoundingClientRect();
                settingsBlock.style.top = (headerSettingsRect.bottom + 10 + window.scrollY) + "px";

                // Create form
                const form = document.createElement('form');
                form.id = 'settings-form';
                form.className = 'modal-form'; // Use common class for styling
                
                // Add keydown handler to the form itself
                form.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        // Don't trigger if the select dropdown is open/active
                        const select = document.getElementById('model-select');
                        if (document.activeElement !== select || !select.size) {
                            e.preventDefault();
                            // Save current model selection
                            OPENROUTER_MODEL = select.value;
                            // Close the modal
                            overlay.parentNode.removeChild(overlay);
                        }
                    }
                });

                // Create model selection container
                const selectContainer = document.createElement('div');
                selectContainer.className = 'settings-select-container';

                // Create label
                const label = document.createElement('label');
                label.textContent = 'Model:';
                label.htmlFor = 'model-select';
                label.className = 'settings-label';

                // Create select dropdown
                const select = document.createElement('select');
                select.id = 'model-select';
                select.className = 'settings-select';
                
                // Fix: Only handle Enter key when select is focused and dropdown is not open
                select.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' && !select.size) {
                        e.preventDefault();
                        e.stopPropagation(); // Stop event bubbling
                        OPENROUTER_MODEL = select.value;
                        
                        // Prevent immediate closing
                        setTimeout(() => {
                            if (overlay.parentNode) {
                                overlay.parentNode.removeChild(overlay);
                            }
                        }, 100);
                    }
                });

                const models = [
						  // Meta/Llama models
						  { value: 'meta-llama/llama-3.3-70b-instruct:free', label: 'Meta - Llama 3.3 70B' },
						
                    // Google/Gemini models
                    { value: 'google/gemini-2.5-pro-exp-03-25:free', label: 'Google - Gemini 2.5 Pro Experimental' },
                    // Mistral models
                    { value: 'mistralai/mistral-small-3.1-24b-instruct:free', label: 'Mistral - Small 3.1 24B' },
                    
                    // DeepSeek models
                    { value: 'deepseek/deepseek-v3-base:free', label: 'DeepSeek - V3 Base' },
                ];

                models.forEach(model => {
                    const option = document.createElement('option');
                    option.value = model.value;
                    option.textContent = model.label;
                    if (model.value === OPENROUTER_MODEL) {
                        option.selected = true;
                    }
                    select.appendChild(option);
                });

                selectContainer.appendChild(label);
                selectContainer.appendChild(select);
                form.appendChild(selectContainer);

                // Create save button
                const saveButton = document.createElement('button');
                saveButton.type = 'submit';
                saveButton.textContent = 'Uložit';
                saveButton.className = 'api-button api-save-button';

                // Create close button
                const closeButton = document.createElement('button');
                closeButton.type = 'button';
                closeButton.textContent = 'Zavřít';
                closeButton.className = 'api-button api-close-button';
                closeButton.addEventListener('click', () => {
                    overlay.parentNode.removeChild(overlay);
                });

                form.appendChild(saveButton);
                form.appendChild(closeButton);

                // Form submission handler
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    OPENROUTER_MODEL = select.value;
                    overlay.parentNode.removeChild(overlay);
                });

                settingsBlock.appendChild(form);

                // Create info text
                const infoText = document.createElement('p');
                infoText.textContent = "Vyberte model pro generování odpovědí.";
                infoText.className = 'api-info-text';
                settingsBlock.appendChild(infoText);

                overlay.appendChild(settingsBlock);

                // Close modal when clicking outside
                overlay.addEventListener('click', (event) => {
                    if (event.target === overlay) {
                        overlay.parentNode.removeChild(overlay);
                    }
                });
            } else { // Close modal if already open
                overlay.parentNode.removeChild(overlay);
            }
        });
    }
});

// Add this function to parse markdown and convert it to HTML
function parseMarkdown(text) {
    if (!text) return '';
    
    // Replace code blocks
    text = text.replace(/```([\s\S]*?)```/g, function(match, code) {
        return `<pre><code>${escapeHtml(code)}</code></pre>`;
    });
    
    // Replace inline code
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Replace headers
    text = text.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    text = text.replace(/^## (.*$)/gm, '<h2>$1</2>');
    text = text.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    
    // Replace bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Replace italic - careful not to interfere with list items using *
    text = text.replace(/(?<!\*)\*(?!\s)([^\*]+?)(?<!\s)\*(?!\*)/g, '<em>$1</em>');
    
    // Replace quotes
    text = text.replace(/^\> (.+)$/gm, '<blockquote>$1</blockquote>');
    
    // Improved list processing
    let inList = false;
    let listType = null;
    let currentLevel = 0;
    let levels = [];
    const lines = text.split('\n');
    
    // First pass: identify and convert lists
    for (let i = 0; i < lines.length; i++) {
        // Match ordered lists (numbers) and unordered lists (*, +, -)
        const olMatch = lines[i].match(/^(\s*)(\d+)\.\s+(.+)$/);
        const ulMatch = lines[i].match(/^(\s*)([\*\+\-])\s+(.+)$/);
        
        if (olMatch || ulMatch) {
            const match = olMatch || ulMatch;
            const [_, indent, marker, content] = match;
            const isOrdered = !!olMatch;
            const indentLevel = indent.length;
            
            if (!inList) {
                // Start a new list
                inList = true;
                listType = isOrdered ? 'ol' : 'ul';
                currentLevel = indentLevel;
                levels = [listType];
                
                lines[i] = `<${listType}><li>${content}</li>`;
            } else {
                // Already in a list
                if (indentLevel > currentLevel) {
                    // Start a nested list
                    const newListType = isOrdered ? 'ol' : 'ul';
                    levels.push(newListType);
                    lines[i-1] = lines[i-1].replace(/<\/li>$/, `<${newListType}>`);
                    lines[i] = `<li>${content}</li>`;
                    currentLevel = indentLevel;
                } else if (indentLevel < currentLevel) {
                    // End one or more nested lists
                    let closeTags = '';
                    while (levels.length > 1 && indentLevel < currentLevel) {
                        closeTags += `</${levels.pop()}>`;
                        currentLevel = indent.length;
                    }
                    lines[i-1] = lines[i-1].replace(/<\/li>$/, `</li>${closeTags}`);
                    lines[i] = `<li>${content}</li>`;
                    currentLevel = indentLevel;
                } else {
                    // Continue current list
                    lines[i] = `<li>${content}</li>`;
                }
            }
        } else if (inList && lines[i].trim() === '') {
            // Empty line while in a list
            // Close all open lists
            let closeTags = '';
            while (levels.length > 0) {
                closeTags += `</${levels.pop()}></li>`;
            }
            lines[i-1] = lines[i-1].replace(/<\/li>$/, closeTags);
            inList = false;
        }
    }
    
    // Close any remaining open lists at the end
    if (inList && levels.length > 0) {
        let closeTags = '';
        while (levels.length > 0) {
            closeTags += `</${levels.pop()}>`;
        }
        lines[lines.length-1] += closeTags;
    }
    
    text = lines.join('\n');
    
    // Replace links
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Replace paragraphs (must be last, and avoid wrapping lists in paragraphs)
    text = text.replace(/\n\s*\n/g, '</p><p>');
    
    // Don't wrap list elements in paragraphs
    if (!text.startsWith('<ul') && !text.startsWith('<ol')) {
        text = '<p>' + text + '</p>';
    }
    
    // Fix any double-wrapped paragraph tags from list processing
    text = text.replace(/<p><(ul|ol)>/g, '<$1>');
    text = text.replace(/<\/(ul|ol)><\/p>/g, '</$1>');
    
    return text;
}

// Helper function to escape HTML special characters
function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')  // This line had an extra slash: /<//g
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function appendChunkToResponse(responseTextSpan, parsedChunk) {
    // Handle the first chunk specially
    if (responseTextSpan.innerHTML === "" || responseTextSpan.querySelector('.typing-indicator')) {
        responseTextSpan.innerHTML = parsedChunk;
        return;
    }
    
    // For subsequent chunks, append to existing content
    let currentHTML = responseTextSpan.innerHTML;
    
    // Remove closing </p> tag if it exists
    if (currentHTML.endsWith('</p>')) {
        currentHTML = currentHTML.substring(0, currentHTML.length - 4);
    }
    
    // Remove opening <p> tag from parsed chunk
    let chunkToAppend = parsedChunk;
    if (chunkToAppend.startsWith('<p>')) {
        chunkToAppend = chunkToAppend.substring(3);
    }
    
    // Append the chunk and close the paragraph
    responseTextSpan.innerHTML = currentHTML + chunkToAppend;
    
    // Add a subtle highlight to the new content (optional)
    const highlightNew = false; // Set to true to enable highlighting effect
    if (highlightNew) {
        const tempSpan = document.createElement('span');
        tempSpan.className = 'new-chunk';
        tempSpan.style.backgroundColor = 'rgba(43, 125, 180, 0.1)';
        
        // Extract the last few characters that were just added
        const lastTextNode = Array.from(responseTextSpan.childNodes)
            .filter(node => node.nodeType === 3) // Text nodes only
            .pop();
            
        if (lastTextNode) {
            const textContent = lastTextNode.textContent;
            const parent = lastTextNode.parentNode;
            
            // Replace the last few characters with the highlighted span
            if (parent && textContent && textContent.length > 0) {
                // This is complex DOM manipulation that would need more work
                // For now, we'll skip the highlighting effect
            }
        }
        
        // Remove the highlight after a short delay
        setTimeout(() => {
            const highlights = document.querySelectorAll('.new-chunk');
            highlights.forEach(el => {
                el.classList.remove('new-chunk');
                el.style.backgroundColor = 'transparent';
            });
        }, 300);
    }
}

// Add function to show the tutorial modal
function showTutorialModal() {
    // Check if modal already exists
    let overlay = document.getElementById('tutorial-overlay');
    if (overlay) return;
    
    // Create overlay
    overlay = document.createElement('div');
    overlay.id = 'tutorial-overlay';
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
    
    // Create tutorial modal with font family
    const tutorialModal = document.createElement('div');
    tutorialModal.id = 'tutorial-modal';
    tutorialModal.style.fontFamily = '"DM Sans", sans-serif';  // Added font-family
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.className = 'tutorial-close-button';
    
    closeButton.addEventListener('click', () => {
        overlay.parentNode.removeChild(overlay);
    });
    
    tutorialModal.appendChild(closeButton);
    
    // Create content container for pages
    const contentContainer = document.createElement('div');
    contentContainer.className = 'tutorial-content-container';
    
    // Create pages array with content - UPDATED IMAGE PATHS
    const pages = [
        {
            title: 'Krok 1: Registrace na OpenRouter',
            content: 'Nejprve přejděte na web OpenRouter a zaregistrujte se pro vytvoření účtu.',
            link: 'https://openrouter.ai/sign-up',
            linkText: 'openrouter.ai/sign-up',
            image: './img/openrouter_signup.png'
        },
        {
            title: 'Krok 2: Vytvoření API klíče',
            content: 'V nastavení vašeho OpenRouter účtu vytvořte nový API klíč.',
            link: 'https://openrouter.ai/settings/keys',
            linkText: 'openrouter.ai/settings/keys',
            image: './img/openrouter_key.png'
        },
        {
            title: 'Krok 3: Vložení API klíče do HejChat',
            content: 'Zkopírujte vytvořený API klíč a vložte jej do HejChat v sekci API.',
            image: './img/api.png'
        }
    ];
    
    let currentPage = 0;
    
    // Function to render current page - updated version with all fixes
    function renderPage(pageIndex) {
        const page = pages[pageIndex];
        contentContainer.innerHTML = '';
        
        // Create page content
        const pageContent = document.createElement('div');
        pageContent.className = 'tutorial-page';
        
        // Add step title with <br> after "Krok X"
        const titleEl = document.createElement('h2');
        const titleText = page.title.replace(/^(Krok \d+:)/, '$1<br>');
        titleEl.innerHTML = titleText; // Use innerHTML to respect the <br> tag
        titleEl.className = 'tutorial-title';
        titleEl.style.fontSize = '22px';
        
        // Add step description
        const contentEl = document.createElement('p');
        contentEl.textContent = page.content;
        contentEl.className = 'tutorial-description';
        contentEl.style.fontSize = '16px';
        
        // Create content area with vertical centering
        const contentArea = document.createElement('div');
        contentArea.className = 'tutorial-content-area';
        contentArea.style.flex = '1';
        contentArea.style.overflowY = 'auto';
        contentArea.style.paddingBottom = '15px';
        contentArea.style.display = 'flex';
        contentArea.style.flexDirection = 'column';
        contentArea.style.justifyContent = 'center'; // Centralize content vertically
        
        contentArea.appendChild(titleEl);
        contentArea.appendChild(contentEl);
        
        // Add image
        if (page.image) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'tutorial-image-container';
            
            const imageEl = document.createElement('img');
            imageEl.src = page.image;
            imageEl.alt = `Ilustrace ke kroku ${pageIndex + 1}`;
            imageEl.className = 'tutorial-image';
            
            imageContainer.appendChild(imageEl);
            contentArea.appendChild(imageContainer);
        }
        
        // Removed page indicator dots as requested
        
        pageContent.appendChild(contentArea);
        
        // Create fixed footer with swapped buttons
        const footerContainer = document.createElement('div');
        footerContainer.className = 'tutorial-footer';
        footerContainer.style.display = 'flex';
        footerContainer.style.justifyContent = 'center';
        footerContainer.style.alignItems = 'center';
        footerContainer.style.borderTop = '1px solid #eee';
        footerContainer.style.padding = '15px 0 10px';
        footerContainer.style.marginTop = 'auto';
        footerContainer.style.gap = '20px';

        // Create buttons container to manage order
        const buttonsContainer = document.createElement('div');
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.gap = '20px';
        
        // 1. Add external link button FIRST (for steps 1 and 2)
        if (page.link) {
            const linkBtn = document.createElement('a');
            
            // Set link text based on step - TRANSLATED TO CZECH
            let linkText = '';
            if (pageIndex === 0) {
                linkText = 'Registrovat';  // Changed from "Sign Up" to Czech
            } else if (pageIndex === 1) {
                linkText = 'Vytvořit klíč';  // Changed from "Create Key" to Czech
            }
            
            // Create span for link text to allow adding SVG after it
            const linkTextSpan = document.createElement('span');
            linkTextSpan.textContent = linkText;
            
            // Create SVG element
            const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgIcon.setAttribute('width', '20');
            svgIcon.setAttribute('height', '20');
            svgIcon.setAttribute('viewBox', '0 0 20 20');
            svgIcon.setAttribute('fill', 'none');
            svgIcon.style.marginLeft = '6px';
            svgIcon.innerHTML = `
                <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10"></path>
                <path d="M8.4375 7.97925H12.1875V11.7292" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7.5 12.875L11.875 8.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
            `;
            
            linkBtn.href = page.link;
            linkBtn.target = '_blank';
            linkBtn.className = 'tutorial-external-link';
            linkBtn.style.padding = '10px 30px';
            linkBtn.style.fontSize = '16px';
            linkBtn.style.fontWeight = '500';
            linkBtn.style.display = 'flex';
            linkBtn.style.alignItems = 'center';
            
            linkBtn.appendChild(linkTextSpan);
            linkBtn.appendChild(svgIcon);
            
            buttonsContainer.appendChild(linkBtn);
        }
        
        // 2. Add navigation button SECOND
        const navButton = document.createElement('button');
        navButton.className = 'tutorial-nav-button';
        navButton.style.padding = '10px 30px';
        navButton.style.fontSize = '16px';
        
        // Later in the code, update the navigation button to put checkmark after text
        if (pageIndex < pages.length - 1) {
            navButton.innerHTML = '✓';  // Checkmark moved after text
            navButton.title = 'Další';
            navButton.addEventListener('click', () => {
                currentPage++;
                renderPage(currentPage);
            });
        } else {
            navButton.innerHTML = '✓';  // Checkmark moved after text
            navButton.title = 'Dokončit';
            navButton.addEventListener('click', () => {
                overlay.parentNode.removeChild(overlay);
            });
        }
        
        buttonsContainer.appendChild(navButton);
        
        // Add all buttons to footer
        footerContainer.appendChild(buttonsContainer);
        pageContent.appendChild(footerContainer);
        
        contentContainer.appendChild(pageContent);
    }
    
    // Initialize with the first page
    renderPage(currentPage);
    
    tutorialModal.appendChild(contentContainer);
    overlay.appendChild(tutorialModal);
    
    // Close modal when clicking outside
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.parentNode.removeChild(overlay);
        }
    });
}
