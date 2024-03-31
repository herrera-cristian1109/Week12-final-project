let url = 'https://65ffb215df565f1a61453949.mockapi.io';

fetch(`${url}/Runs`)


let runningActivities = [];

function addRunningActivity() {
    const activityInput = document.getElementById('activityInput');
    const milesInput = document.getElementById('milesInput');
    const timeInput = document.getElementById('timeInput');

    const activity = activityInput.value.trim();
    const miles = parseFloat(milesInput.value);
    const time = parseInt(timeInput.value);

    if (activity !== '' && !isNaN(miles) && !isNaN(time) && miles > 0 && time > 0) {
        const newActivity = {
            activity: activity,
            miles: miles,
            time: time
        };
        runningActivities.push(newActivity);
        displayActivities();
        activityInput.value = '';
        milesInput.value = '';
        timeInput.value = '';
    } else {
        alert('Please enter valid values for miles and time (both should be greater than 0).');
    }
}

function clearActivities() {
    runningActivities = [];
    displayActivities();
}

function deleteActivity(index) {
    runningActivities.splice(index, 1);
    displayActivities();
}

function displayActivities() {
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';
    runningActivities.forEach((activity, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <strong>${activity.activity}</strong> - ${activity.miles} miles, ${activity.time} minutes
            <button class="btn btn-danger btn-sm float-right" onclick="deleteActivity(${index})">Delete</button>
        `;
        activityList.appendChild(listItem);
    });
}

// Initial display of activities when the page loads
displayActivities();

