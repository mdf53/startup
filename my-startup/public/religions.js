
//Add the ability to save Which religions you want to see
// Function to save the checkbox state in local storage
function saveCheckboxState(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    localStorage.setItem(checkboxId, checkbox.checked);
}

// // Function to load and set the checkbox state from local storage
function loadCheckboxState(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    const savedState = localStorage.getItem(checkboxId);
    
    if (savedState === "true") {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
}
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Attach event listeners to the checkboxes
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        saveCheckboxState(checkbox.id);
    });
});



// Load the initial state of checkboxes
async function loadReligions() {
    
    // Fetch stored religions from the API
    try{
    // fetch('/get-stored-religions')
    //   .then(response => response.json())
    //   .then(data => {
    //     // Check if storedReligions property exists in the response
    //     const storedReligions = data.storedReligions || [];
  
    //     // Update checkboxes based on stored data
    //     storedReligions.forEach(religion => {
    //       const checkbox = document.getElementById(`${religion}Checkbox`);
    //       if (checkbox) {
    //         checkbox.checked = true;
    //       }
    //     });
    // })
    //   .catch(error => console.error('Error fetching stored religions:', error));
    const religions = await fetch('stored-religions');
    religions.forEach((checkbox) => {
        loadCheckboxState(checkbox.id);
    });
    }
    catch{
        console.log('Failed to load API checkboxes.');
        checkboxes.forEach((checkbox) => {
            loadCheckboxState(checkbox.id);
        });
  
      }  
    };

  
function submitReligionsForm() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedReligions = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.id.replace("Checkbox", ""));
  
    // Send the selected religions to your backend API
    fetch('/store-religions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedReligions }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        // Handle any additional logic after storing the selected religions
      })
      .catch(error => console.error('Error:', error));
  }
  
// export {checkboxes};