// Animate skill bars when in view
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-fill');
    skills.forEach(skill => {
        const top = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 50){
            skill.style.width = skill.getAttribute('data-percent');
        }
    });
});
