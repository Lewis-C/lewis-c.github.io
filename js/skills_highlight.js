
document.querySelectorAll('.skill-check').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        // Take all checked boxes, create an array storing each checkboxes mapped id
        const selectedSkills = Array.from(document.querySelectorAll('.skill-check:checked')).map(cb => cb.id);

        // Reset all project backgrounds to default value and order to 0
        document.querySelectorAll('.project').forEach((project) => {
            project.style.backgroundColor = ''; // Reset background color
            project.style.order = 0;
        });

        // If no skills are selected, reset all projects to default
        if (selectedSkills.length === 0) {
            document.querySelectorAll('.project').forEach((project) => {
                project.style.backgroundColor = ''; // Reset to default
            });
            return; // Exit early since no skills are selected
        }

        // Highlight projects that match all selected skills by invertly selecting the non matches and highlighting the accent colour
        // set order to 1 to push to bottom
        document.querySelectorAll('.project').forEach((project) => {
            const matchesAllSkills = selectedSkills.every(skillClass => project.classList.contains(skillClass));
            if (!matchesAllSkills) {
                project.style.backgroundColor = 'var(--background-accent-colour)'; // Highlight non matching projects grey
                project.style.order = 1;
            }
        });
    });
});