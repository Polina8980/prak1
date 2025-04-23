       const themeToggleButton = document.getElementById('theme-toggle');
        const body = document.body;
        const header = document.querySelector('header');
        const infoBox = document.querySelector('.info-box');
        const formContainer = document.querySelector('.form-container');
        const slogan = document.querySelector('.slogan');

        themeToggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            header.classList.toggle('dark-theme');
            infoBox.classList.toggle('dark-theme');
            formContainer.classList.toggle('dark-theme');
            slogan.classList.toggle('dark-theme');
        });
        window.onload = () => {
            if(localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-theme');
            } 
        }
