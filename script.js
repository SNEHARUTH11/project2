document.getElementById('generateBtn').addEventListener('click', () => {
    // Get user input
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Validate input
    if (!fullName || !email || !phone) {
        alert("Please fill out all required fields.");
        return;
    }

    // Create resume preview
    const previewContent = `
        <h3>${fullName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    document.getElementById('previewContent').innerHTML = previewContent;
    document.getElementById('resumePreview').classList.remove('hidden');
});

// Download PDF (Optional: Add pdf-lib or jsPDF for PDF generation)
document.getElementById('downloadBtn').addEventListener('click', () => {
    const resumeContent = document.getElementById('previewContent').innerHTML;

    const blob = new Blob([resumeContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.html';
    link.click();
    URL.revokeObjectURL(url);
});
