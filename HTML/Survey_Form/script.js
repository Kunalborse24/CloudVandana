function submitForm() {
    const form = document.getElementById('surveyForm');
    if (!form.checkValidity()) {
        alert("Please fill out all required fields.");
        return;
    }

    const formData = new FormData(form);
    let formValues = '';
    for (const [key, value] of formData.entries()) {
        formValues += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
    }

    alert(`Submitted Values:\n\n${formValues}`);
    form.reset();
}
