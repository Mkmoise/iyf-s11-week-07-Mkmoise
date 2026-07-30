const visitorNameField = document.getElementById("visitor-name-field");
const visitorEmailField = document.getElementById("visitor-email-field");
const visitorMessageField = document.getElementById("visitor-message-field");
const sessionStorageForm = document.getElementById("session-storage-form");

function saveSessionFormData() {
    sessionStorage.setItem("visitorName", visitorNameField.value);
    sessionStorage.setItem("visitorEmail", visitorEmailField.value);
    sessionStorage.setItem("visitorMessage", visitorMessageField.value);
}

function loadSessionFormData() {
    visitorNameField.value = sessionStorage.getItem("visitorName") || "";
    visitorEmailField.value = sessionStorage.getItem("visitorEmail") || "";
    visitorMessageField.value = sessionStorage.getItem("visitorMessage") || "";
}

visitorNameField.addEventListener("input", saveSessionFormData);
visitorEmailField.addEventListener("input", saveSessionFormData);
visitorMessageField.addEventListener("input", saveSessionFormData);

sessionStorageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Form submitted successfully!");

    sessionStorage.clear();

    sessionStorageForm.reset();
});

loadSessionFormData();

