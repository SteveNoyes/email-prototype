function convertToInlineCSS(css, html) {
  // Create a new DOM element to hold the HTML content
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;

  // Get all the elements in the wrapper
  const elements = wrapper.querySelectorAll('*');

  // Loop through each element and apply the inline styles
  elements.forEach(element => {
    // Get the element's computed styles
    const computedStyles = window.getComputedStyle(element);

    // Create a new style attribute string to hold the inline styles
    let inlineStyles = '';

    // Loop through each computed style and add it to the inline styles string
    for (let i = 0; i < computedStyles.length; i++) {
      const propertyName = computedStyles[i];
      const propertyValue = computedStyles.getPropertyValue(propertyName);

      // Add the property and value to the inline styles string
      inlineStyles += `${propertyName}:${propertyValue};`;
    }

    // Set the element's style attribute to the inline styles string
    element.setAttribute('style', inlineStyles);
  });

  // Set the wrapper's inner HTML to the updated HTML content with inline styles
  const updatedHTML = wrapper.innerHTML;

  // Combine the updated HTML with the original CSS to create the final output
  const output = `<style>${css}</style>${updatedHTML}`;

  return output;
}






// To use this function, simply pass in the CSS and HTML as strings:

const css = `
  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
  }
  
  h1 {
    color: #0077cc;
    font-size: 24px;
  }
  
  p {
    color: #333333;
    font-size: 16px;
    line-height: 1.5;
  }
`;

const html = `
  <h1>Welcome to my website!</h1>
  <p>Thank you for visiting. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
`;

const inlineCSS = convertToInlineCSS(css, html);

// The inlineCSS variable will now contain the updated HTML with inline CSS.