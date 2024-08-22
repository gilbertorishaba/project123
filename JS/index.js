document.getElementById('itemForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemPrice = document.getElementById('itemPrice').value;

    // Simulate sending data to the database
    console.log('Item Posted:', {
        itemName,
        itemDescription,
        itemPrice
    });

    // Clear form after submission
    document.getElementById('itemForm').reset();

    alert('Your item has been posted successfully!');
});
