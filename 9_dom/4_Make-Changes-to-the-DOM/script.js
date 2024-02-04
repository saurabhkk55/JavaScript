// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    
    // Get the Apply Changes button element
    const applyChangesBtn = document.getElementById("applyChangesBtn");

    // Add event listener to Apply Changes button
    applyChangesBtn.addEventListener("click", function() {
        // Get the selected option from the dropdown
        const selectedOption = document.getElementById("actionSelect").value;
        // Get user input from text input field
        const userInput = document.querySelector('input[type="text"]').value;

        // Check if user input is empty
        if(userInput == '') {
            // Alert user if no input is given
            alert("No input given!");
        } else {
            // Perform action based on selected option
            if(selectedOption === "create") {
                createEntry(userInput); // Call createEntry function
            }
            if(selectedOption === "delete") {
                deleteEntry(userInput); // Call deleteEntry function
            }
            if(selectedOption === "update") {
                updateEntry(userInput); // Call updateEntry function
            }
        }
    });

    // Get the Apply Changes dropdown element
    const applyChangesSelect = document.querySelector('#actionSelect');

    // Add event listener to Apply Changes dropdown
    applyChangesSelect.addEventListener("change", function () {
        // Get the selected option from dropdown
        const selectedOption = document.getElementById("actionSelect").value;
        // If selected option is 'update', call createUpdateEntry function
        if(selectedOption === "update") {
            createUpdateEntry();
        }
        if(selectedOption === "create" || selectedOption === "delete") {
            deleteExtraTextBox();
        }
    });

    // Function to create new entry
    function createEntry(entryText) {
        // Create a new div element
        const newEntry = document.createElement("div");
        // Add class to new div element
        newEntry.className = "newEntryClass";
        // Set text content of new div element
        newEntry.textContent = entryText;
        // Get the container element for entries
        const entriesContainer = document.getElementById("entriesContainer");
        // Append new entry to container
        entriesContainer.appendChild(newEntry);
    }

    // Function to delete entry
    function deleteEntry(entryText) {
        // Get the container element for entries
        const entriesContainer = document.getElementById("entriesContainer");
        let isPresent = 0;
        // Get all child elements of container
        const entries = entriesContainer.children;
        // Loop through each entry
        for (let i = 0; i < entries.length; i++) {
            // Check if text content of entry matches given text
            if (entries[i].textContent === entryText) {
                // Remove the matching entry
                entriesContainer.removeChild(entries[i]);
                isPresent = 1;
                break;
            }
        }
        // If entry is not found, alert user
        if (isPresent === 0) {
            alert("No matching entry found!");
        }
    }

    // Function to create input fields for updating entry
    function createUpdateEntry() {
        // Change placeholder text of existing text input field
        const oldText = document.querySelector('input[type="text"]');
        oldText.placeholder = "Enter Old text";
        // Create additional input field for new text
        const additionalTextInput = document.createElement("input");
        additionalTextInput.type = "text";
        additionalTextInput.placeholder = "Enter New text";
        additionalTextInput.id = "newTextBox";
        // Get the container element for text boxes
        const boxes = document.querySelector('#textBox');
        // Append new input field to container
        boxes.appendChild(additionalTextInput);
    }

    // Function to update entry
    function updateEntry(oldText) {
        // Get the new text input element
        const newElement = document.querySelector('#newTextBox');
        let isPresent = 0;
        // Get the container element for entries
        const entriesContainer = document.getElementById("entriesContainer");
        // Get all child elements of container
        entries = entriesContainer.children;
        // Loop through each entry
        for (let i = 0; i < entries.length; i++) {
            // Check if text content of entry matches given old text
            if (entries[i].textContent === oldText) {
                // Update text content of entry with new text
                entries[i].textContent = newElement.value;
                isPresent = 1;
                break;
            }
        }
        // If entry is not found, alert user
        if(isPresent === 0) {
            alert("UPDATE operation failed - No matching entry found!");
        }
    }

    // Function to delete the extra text box if it exists
    function deleteExtraTextBox() {
        // Get the parent element containing the text boxes
        const textBoxContainer = document.querySelector('#textBox');
        // Get the reference to the extra text box
        const extraTextBox = document.querySelector('#newTextBox');
        
        // Check if the extra text box exists
        if (extraTextBox != null) {
            // If it exists, remove it from the parent element
            textBoxContainer.removeChild(extraTextBox);
        }
    }

});
