document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const messageSpace = document.getElementById('message-space');
    const sendButton = document.querySelector('.panel-send');
    const headerNew = document.querySelector('.header-new');
    const headerApi = document.querySelector('.header-api');

    if (!chatForm) {
        return;
    }

    function createRequestMessageElement(messageText) {
        const requestDiv = document.createElement('div');
        requestDiv.classList.add('space-request');

        // Clone from template instead of existing DOM element
        const copyTemplate = document.getElementById('copyIconTemplate');
        let copyIcon;
        if (copyTemplate) {
            copyIcon = copyTemplate.content.querySelector('.space-copy').cloneNode(true);
            // Add click event to copy the request text
            copyIcon.addEventListener('click', () => {
                const requestText = requestDiv.querySelector('.space-request-text').textContent;
                navigator.clipboard.writeText(requestText)
                    .then(() => {
                        console.log('Text copied to clipboard.');
                    })
                    .catch(err => {
                        console.error('Failed to copy text:', err);
                    });
            });
            requestDiv.appendChild(copyIcon);
        }

        const requestBlock = document.createElement('div');
        requestBlock.classList.add('space-request-block');

        const requestTextSpan = document.createElement('span');
        requestTextSpan.classList.add('space-request-text');
        requestTextSpan.textContent = messageText;

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

    let OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
    let OPENROUTER_API_KEY = ''; 
    let OPENROUTER_MODEL = 'mistralai/mistral-7b-instruct:free';
    
    function createResponseMessageElement(messageText, originalQuery) {
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
        responseTextSpan.textContent = messageText;
        
        responseBlock.appendChild(responseTextSpan);
        responseDiv.appendChild(responseBlock);
        
        const template = document.getElementById('responseIconsTemplate');
        if (template) {
            // Clone the entire template content so nothing is lost
            const iconsClone = template.content.cloneNode(true);
            responseDiv.appendChild(iconsClone);
            
            const responseIcons = responseDiv.querySelector('.space-response-icons');
            if (responseIcons) {
                // Handle copy functionality (already implemented)
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
                // Add new functionality on click of .space-rerun
                const rerunIcon = responseIcons.querySelector('.space-rerun');
                if (rerunIcon) {
                    rerunIcon.addEventListener('click', async () => {
                        const originalQuery = responseDiv.dataset.originalQuery;
                        if (originalQuery) {
                            responseTextSpan.textContent = "Thinking...";
                            try {
                                const newResponse = await sendMessageToOpenRouter(originalQuery);
                                responseTextSpan.textContent = newResponse;
                            } catch (error) {
                                responseTextSpan.textContent = "Sorry, I couldn't process your request at this time.";
                            }
                        }
                    });
                }
            }
        }
        
        return responseDiv;
    }
    
    async function sendMessageToOpenRouter(message, signal) {
        try {
            const response = await fetch(OPENROUTER_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                    'HTTP-Referer': window.location.origin,
                    'X-Title': 'HejChat'
                },
                body: JSON.stringify({
                    model: OPENROUTER_MODEL,
                    messages: [{ role: 'user', content: message }]
                }),
                signal // Pass the abort signal here
            });
            
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            
            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
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
        
        // Create and append the request element
        const newRequestElement = createRequestMessageElement(userMessage);
        messageSpace.appendChild(newRequestElement);
        messageSpace.scrollTop = messageSpace.scrollHeight;
        chatInput.value = '';
        
        // Create "Thinking..." loading element and append it
        const loadingElement = createResponseMessageElement("Thinking...");
        messageSpace.appendChild(loadingElement);
        messageSpace.scrollTop = messageSpace.scrollHeight;
        
        // Create an AbortController to cancel the API request if needed
        const abortController = new AbortController();
        
        // Save original button content for later restoration
        const originalSendHTML = sendButton.innerHTML;
        
        // Change .panel-send to a rectangle Stop button using the provided SVG,
        // disable further input, and add pointer cursor.
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
        sendButton.disabled = true;
        sendButton.style.cursor = "pointer";
        
        // Create a named stop handler so we can remove it later.
        const stopHandler = () => {
            // Abort the API request.
            abortController.abort();
            // Remove the "Thinking..." element.
            if (messageSpace.contains(loadingElement)) {
                messageSpace.removeChild(loadingElement);
            }
            // Restore the original send button.
            sendButton.innerHTML = originalSendHTML;
            sendButton.disabled = false;
            sendButton.style.cursor = "pointer";
            // Remove the event listener so it won't fire on future submits.
            sendButton.removeEventListener('click', stopHandler);
        };
        
        sendButton.addEventListener('click', stopHandler);
        
        try {
            // Pass the abort signal to the API request.
            const aiResponse = await sendMessageToOpenRouter(userMessage, abortController.signal);
            
            if (messageSpace.contains(loadingElement)) {
                messageSpace.removeChild(loadingElement);
            }
            
            const responseElement = createResponseMessageElement(aiResponse, userMessage);
            messageSpace.appendChild(responseElement);
        } catch (error) {
            if (messageSpace.contains(loadingElement)) {
                messageSpace.removeChild(loadingElement);
            }
            // Do not show error message if the request was aborted.
            if (error.name !== 'AbortError') {
                const errorElement = createResponseMessageElement("Sorry, I couldn't process your request at this time.");
                messageSpace.appendChild(errorElement);
            }
        }
        
        messageSpace.scrollTop = messageSpace.scrollHeight;
        
        // Restore the original send button if not already restored.
        sendButton.innerHTML = originalSendHTML;
        sendButton.disabled = false;
        sendButton.style.cursor = "pointer";
    });

    if (chatInput && sendButton) {
        chatInput.addEventListener('input', () => {
            sendButton.disabled = chatInput.value.trim() === '';
        });
        sendButton.disabled = chatInput.value.trim() === '';
    }

    if (chatInput) {
        chatInput.addEventListener('keydown', function(e) {
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
        });
    }

    if (headerNew && messageSpace && chatInput) {
        headerNew.addEventListener('click', () => {
            while (messageSpace.firstChild) {
                messageSpace.removeChild(messageSpace.firstChild);
            }
            chatInput.focus();
        });
    }

    if (headerApi) {
        headerApi.addEventListener('click', () => {
            let overlay = document.getElementById('api-overlay');
            if (!overlay) { // Open modal
                overlay = document.createElement('div');
                overlay.id = 'api-overlay';
                overlay.style.position = 'fixed';
                overlay.style.top = 0;
                overlay.style.left = 0;
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.zIndex = 2000;
                overlay.style.backdropFilter = 'blur(5px)';
                document.body.appendChild(overlay);

                const apiBlock = document.createElement('div');
                apiBlock.id = 'api-block';
                // Position apiBlock below .header-api and horizontally centered
                const headerApiRect = headerApi.getBoundingClientRect();
                apiBlock.style.position = 'absolute';
                apiBlock.style.top = (headerApiRect.bottom + 10 + window.scrollY) + "px"; // 10px gap below header-api
                apiBlock.style.left = '50%';
                apiBlock.style.transform = 'translateX(-50%)';
                apiBlock.style.padding = '1rem';
                apiBlock.style.border = '1px solid #ccc';
                apiBlock.style.borderRadius = '10px';
                apiBlock.style.background = '#fff';
                apiBlock.style.width = '70%';
                apiBlock.style.maxWidth = '400px';
                apiBlock.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
                apiBlock.style.fontFamily = '"DM Sans", sans-serif';

                // Create a form row containing the input and two buttons (Save, Close)
                const form = document.createElement('form');
                form.id = 'api-form';
                form.style.display = 'flex';
                form.style.alignItems = 'center';
                form.style.justifyContent = 'center';
                form.style.gap = '0.5rem'; // space in between controls

                // Create a container for the input and the toggle icon
                const inputContainer = document.createElement('div');
                inputContainer.style.position = 'relative';
                inputContainer.style.width = '50%'; // adjust accordingly

                // Create the input field
                const input = document.createElement('input');
                input.type = 'password';
                input.placeholder = 'Enter OpenRouter API Key';
                input.style.width = '65%';
                input.style.padding = '0.75rem 3rem 0.75rem 0.75rem'; // extra right padding for icon
                input.style.border = '1px solid #ccc';
                input.style.borderRadius = '5px';
                input.style.fontSize = '1.2rem';
                input.style.outline = 'none'; // remove focus outline
                input.value = OPENROUTER_API_KEY;

                // Create the toggle icon element
                const toggleIcon = document.createElement('span');
                toggleIcon.style.position = 'absolute';
                toggleIcon.style.top = '50%';
                toggleIcon.style.right = '0.75rem';
                toggleIcon.style.transform = 'translateY(-50%)';
                toggleIcon.style.cursor = 'pointer';

                // Initially, since input is hidden, show the OPEN icon
                toggleIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15" fill="none">
                  <path d="M11 4.5C10.2044 4.5 9.44129 4.81607 8.87868 5.37868C8.31607 5.94129 8 6.70435 8 7.5C8 8.29565 8.31607 9.05871 8.87868 9.62132C9.44129 10.1839 10.2044 10.5 11 10.5C11.7956 10.5 12.5587 10.1839 13.1213 9.62132C13.6839 9.05871 14 8.29565 14 7.5C14 6.70435 13.6839 5.94129 13.1213 5.37868C12.5587 4.81607 11.7956 4.5 11 4.5ZM11 12.5C9.67392 12.5 8.40215 11.9732 7.46447 11.0355C6.52678 10.0979 6 8.82608 6 7.5C6 6.17392 6.52678 4.90215 7.46447 3.96447C8.40215 3.02678 9.67392 2.5 11 2.5C12.3261 2.5 13.5979 3.02678 14.5355 3.96447C15.4732 4.90215 16 6.17392 16 7.5C16 8.82608 15.4732 10.0979 14.5355 11.0355C13.5979 11.9732 12.3261 12.5 11 12.5ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0Z" fill="black"/>
                </svg>`;

                // Add an event listener to toggle input visibility and icon
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

                // Append the input and toggle icon to the container
                inputContainer.appendChild(input);
                inputContainer.appendChild(toggleIcon);

                // Now, instead of appending the input directly to the form, append the container
                form.appendChild(inputContainer);

                // Save button
                const saveButton = document.createElement('button');
                saveButton.type = 'submit';
                saveButton.textContent = 'Save';
                saveButton.style.padding = '0.5rem 1rem';
                saveButton.style.background = 'linear-gradient(249deg, #013B6C -20.75%, #2B7DB4 68.99%)';
                saveButton.style.color = '#fff';
                saveButton.style.border = 'none';
                saveButton.style.borderRadius = '25px';
                saveButton.style.cursor = 'pointer';
                saveButton.style.fontSize = '1rem';
                saveButton.style.fontFamily = '"DM Sans", sans-serif';

                // Close button placed to the right of the Save button
                const closeButton = document.createElement('button');
                closeButton.type = 'button';
                closeButton.textContent = 'Close';
                closeButton.style.padding = '0.5rem 1rem';
                closeButton.style.background = 'none';
                closeButton.style.border = '1px solid gray';
                closeButton.style.borderRadius = '25px';
                closeButton.style.cursor = 'pointer';
                closeButton.style.fontSize = '1rem';
                closeButton.style.fontFamily = '"DM Sans", sans-serif';
                closeButton.addEventListener('click', () => {
                    overlay.parentNode.removeChild(overlay);
                });

                form.appendChild(saveButton);
                form.appendChild(closeButton);

                // Handle form submission: update OPENROUTER_API_KEY and close the modal
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    OPENROUTER_API_KEY = input.value.trim();
                    overlay.parentNode.removeChild(overlay);
                });
                apiBlock.appendChild(form);

                // Create a separate container for the centered "API návod" text
                const infoText = document.createElement('p');
                infoText.textContent = "Sledujte náš užitečný API návod.";
                infoText.style.textAlign = 'center';
                infoText.style.marginTop = '1rem';
                infoText.style.fontSize = '1rem';
                infoText.style.color = '#333';
					 infoText.style.cursor = 'pointer';
                apiBlock.appendChild(infoText);

                overlay.appendChild(apiBlock);
                
                // Close the modal if clicked outside of the apiBlock
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